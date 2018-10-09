#!/usr/bin/env node

// curl -X POST --header 'Content-Type: application/json'
// --header 'Accept: application/json'
// --header 'X-CSRFToken: TK5Z522flgvzxnjN0GtENu1UEPKhKI7ks0P9PYzlyOceYFd9fWwiYtAWfwS7HqEj'
// --header 'Authorization: Basic YW50aG9ueUBjaG92eS5jb206YXNkZmFzZGY='
// -d '{"name":"Electronic","description":"Electronic","date_created":"2018-09-12 00:00:00"}'
// 'https://imusify-prod.herokuapp.com/v1/posts/categories/'

const yaml = require('js-yaml');
const fs = require('fs');
const Axios = require('axios');
const baseURL = 'https://imusify-dev.herokuapp.com/v1';
const headers = {
  Authorization: 'Basic YW50aG9ueUBjaG92eS5jb206YXNkZmFzZGY',
  'X-CSRFToken': 'TK5Z522flgvzxnjN0GtENu1UEPKhKI7ks0P9PYzlyOceYFd9fWwiYtAWfwS7HqEj'
};
const http = Axios.create({
  baseURL,
  headers
});

const doc = yaml.safeLoad(fs.readFileSync('./categories.yaml', 'utf8'));

Object.keys(doc).forEach(async cat => {
  console.log(cat);

  const res = await http.post('/posts/categories', {
      name: cat,
      description: cat,
      date_created: '2018-10-08 00:00:00'
    });

  if (!doc[cat]) return;

  await doc[cat].forEach(async subCat => {
    console.log(` ${subCat}`);
    const res = await http.post('/posts/categories', {
      name: subCat,
      description: subCat,
      parent_category: cat,
      date_created: '2018-10-08 00:00:00'
    });
  })
})

//
// http.post('/posts/categories', {
//     name: 'Electronic',
//     description: 'Electronic',
//     date_created: '2018-10-08 00:00:00'
// })
//   .catch(err => {
//     console.error(err);
//   });
