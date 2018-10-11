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
const baseURL = 'https://imusify-prod.herokuapp.com/v1';
const headers = {
  'Content-Type': 'application/json',
  Authorization: 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNiwidXNlcm5hbWUiOiJldHRpbmdlcit0ZXN0MWFiQGdtYWlsLmNvbSIsImV4cCI6MTUzOTgzNTk0NCwiZW1haWwiOiJldHRpbmdlcit0ZXN0MWFiQGdtYWlsLmNvbSIsIm9yaWdfaWF0IjoxNTM5MjMxMTQ0fQ.KyrcLgtuNjNuuQ3PxFC-Huq77fHJW7P-WCBYWv4Q-vA',
  // 'X-CSRFToken': 'BeQrPzSfGKydvvSmwGF8wyTvDpuluvrBmw7VySaLQu5klDn2dd1VoJwi1gxoWcEp'
};
const http = Axios.create({
  baseURL,
  headers
});

const doc = yaml.safeLoad(fs.readFileSync('./categories.yaml', 'utf8'));
const seen = {};
Object.keys(doc).map(cat => {
  if (!seen[cat]) {
    seen[cat] = 0;
  }

  if (!doc[cat]) return;

  doc[cat].map(subCat => {
    if (!seen[subCat]) {
      seen[subCat] = 0;
    }
    seen[subCat] += 1;
  })
})

Object.keys(seen).forEach(cat => {
  if (seen[cat] > 1) {
    console.log(cat);
  }
});

// return

function sleep(ms){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  })
}


Object.keys(doc).forEach(async cat => {
  console.log(cat);

  let res;

  try {
    res = await http.post('/posts/categories/', {
      name: cat,
      description: cat,
      parent: ''
    })
    console.log(res);
  } catch (err) {
    console.error(err);
    return;
  }

  if (!doc[cat]) return;

  await doc[cat].forEach(async (subCat, i) => {
    console.log(` ${subCat}`);
    let res2;

    try {
      await sleep(50*i);
      res2 = await http.post('/posts/categories/', {
        name: subCat,
        description: subCat,
        parent: res.data.id
      });
      console.log(res2);
    } catch (err) {
      console.error(err);
    }

    console.log(res2);
  })
});
