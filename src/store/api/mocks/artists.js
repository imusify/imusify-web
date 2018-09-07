function fetch(res) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res);
    }, 1000);
  });
}

export default {
  getAll() {
    const artists = {
      data: {
        artists: [
          {
            id: 1, name: 'Artist 1', coverUrl: '/artists/cover1.png', isFollow: false,
          },
          {
            id: 2, name: 'Artist 2', coverUrl: '/artists/cover2.png', isFollow: true,
          },
          {
            id: 3, name: 'Artist 3', coverUrl: '/artists/cover3.png', isFollow: false,
          },
          {
            id: 4, name: 'Artist 4', coverUrl: '/artists/cover4.png', isFollow: false,
          },
          {
            id: 5, name: 'Artist 5', coverUrl: '/artists/cover5.png', isFollow: false,
          },
          {
            id: 6, name: 'Artist 6', coverUrl: '/artists/cover6.png', isFollow: true,
          },
          {
            id: 1, name: 'Artist 1', coverUrl: '/artists/cover1.png', isFollow: false,
          },
          {
            id: 2, name: 'Artist 2', coverUrl: '/artists/cover2.png', isFollow: false,
          },
          {
            id: 3, name: 'Artist 3', coverUrl: '/artists/cover3.png', isFollow: false,
          },
          {
            id: 4, name: 'Artist 4', coverUrl: '/artists/cover4.png', isFollow: true,
          },
          {
            id: 5, name: 'Artist 5', coverUrl: '/artists/cover5.png', isFollow: false,
          },
          {
            id: 6, name: 'Artist 6', coverUrl: '/artists/cover6.png', isFollow: false,
          },
          {
            id: 1, name: 'Artist 1', coverUrl: '/artists/cover1.png', isFollow: false,
          },
          {
            id: 2, name: 'Artist 2', coverUrl: '/artists/cover2.png', isFollow: false,
          },
          {
            id: 3, name: 'Artist 3', coverUrl: '/artists/cover3.png', isFollow: false,
          },
          {
            id: 4, name: 'Artist 4', coverUrl: '/artists/cover4.png', isFollow: false,
          },
          {
            id: 5, name: 'Artist 5', coverUrl: '/artists/cover5.png', isFollow: false,
          },
          {
            id: 6, name: 'Artist 6', coverUrl: '/artists/cover6.png', isFollow: false,
          },
          {
            id: 1, name: 'Artist 1', coverUrl: '/artists/cover1.png', isFollow: false,
          },
          {
            id: 2, name: 'Artist 2', coverUrl: '/artists/cover2.png', isFollow: false,
          },
          {
            id: 3, name: 'Artist 3', coverUrl: '/artists/cover3.png', isFollow: false,
          },
          {
            id: 4, name: 'Artist 4', coverUrl: '/artists/cover4.png', isFollow: false,
          },
          {
            id: 5, name: 'Artist 5', coverUrl: '/artists/cover5.png', isFollow: false,
          },
          {
            id: 6, name: 'Artist 6', coverUrl: '/artists/cover6.png', isFollow: false,
          },
          {
            id: 1, name: 'Artist 1', coverUrl: '/artists/cover1.png', isFollow: false,
          },
          {
            id: 2, name: 'Artist 2', coverUrl: '/artists/cover2.png', isFollow: false,
          },
          {
            id: 3, name: 'Artist 3', coverUrl: '/artists/cover3.png', isFollow: false,
          },
          {
            id: 4, name: 'Artist 4', coverUrl: '/artists/cover4.png', isFollow: false,
          },
          {
            id: 5, name: 'Artist 5', coverUrl: '/artists/cover5.png', isFollow: false,
          },
          {
            id: 6, name: 'Artist 6', coverUrl: '/artists/cover6.png', isFollow: false,
          },
          {
            id: 1, name: 'Artist 1', coverUrl: '/artists/cover1.png', isFollow: false,
          },
          {
            id: 2, name: 'Artist 2', coverUrl: '/artists/cover2.png', isFollow: false,
          },
          {
            id: 3, name: 'Artist 3', coverUrl: '/artists/cover3.png', isFollow: false,
          },
          {
            id: 4, name: 'Artist 4', coverUrl: '/artists/cover4.png', isFollow: false,
          },
          {
            id: 5, name: 'Artist 5', coverUrl: '/artists/cover5.png', isFollow: false,
          },
          {
            id: 6, name: 'Artist 6', coverUrl: '/artists/cover6.png', isFollow: false,
          },
          {
            id: 1, name: 'Artist 1', coverUrl: '/artists/cover1.png', isFollow: false,
          },
          {
            id: 2, name: 'Artist 2', coverUrl: '/artists/cover2.png', isFollow: false,
          },
          {
            id: 3, name: 'Artist 3', coverUrl: '/artists/cover3.png', isFollow: false,
          },
          {
            id: 4, name: 'Artist 4', coverUrl: '/artists/cover4.png', isFollow: false,
          },
          {
            id: 5, name: 'Artist 5', coverUrl: '/artists/cover5.png', isFollow: false,
          },
          {
            id: 6, name: 'Artist 6', coverUrl: '/artists/cover6.png', isFollow: false,
          },
          {
            id: 1, name: 'Artist 1', coverUrl: '/artists/cover1.png', isFollow: false,
          },
          {
            id: 2, name: 'Artist 2', coverUrl: '/artists/cover2.png', isFollow: false,
          },
          {
            id: 3, name: 'Artist 3', coverUrl: '/artists/cover3.png', isFollow: false,
          },
          {
            id: 4, name: 'Artist 4', coverUrl: '/artists/cover4.png', isFollow: false,
          },
          {
            id: 5, name: 'Artist 5', coverUrl: '/artists/cover5.png', isFollow: false,
          },
          {
            id: 6, name: 'Artist 6', coverUrl: '/artists/cover6.png', isFollow: false,
          },
          {
            id: 1, name: 'Artist 1', coverUrl: '/artists/cover1.png', isFollow: false,
          },
          {
            id: 2, name: 'Artist 2', coverUrl: '/artists/cover2.png', isFollow: false,
          },
          {
            id: 3, name: 'Artist 3', coverUrl: '/artists/cover3.png', isFollow: false,
          },
          {
            id: 4, name: 'Artist 4', coverUrl: '/artists/cover4.png', isFollow: false,
          },
          {
            id: 5, name: 'Artist 5', coverUrl: '/artists/cover5.png', isFollow: false,
          },
          {
            id: 6, name: 'Artist 6', coverUrl: '/artists/cover6.png', isFollow: false,
          },
          {
            id: 1, name: 'Artist 1', coverUrl: '/artists/cover1.png', isFollow: false,
          },
          {
            id: 2, name: 'Artist 2', coverUrl: '/artists/cover2.png', isFollow: false,
          },
          {
            id: 3, name: 'Artist 3', coverUrl: '/artists/cover3.png', isFollow: false,
          },
          {
            id: 4, name: 'Artist 4', coverUrl: '/artists/cover4.png', isFollow: false,
          },
          {
            id: 5, name: 'Artist 5', coverUrl: '/artists/cover5.png', isFollow: false,
          },
          {
            id: 6, name: 'Artist 6', coverUrl: '/artists/cover6.png', isFollow: false,
          },
        ],
      },
    };

    return fetch(artists);
  },
};
