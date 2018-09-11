function fetch(res) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res);
    }, 100);
  });
}

export default {
  getAll() {
    const artists = {
      data: {
        artists: [
          {
            id: 1, name: 'Artist 1', coverUrl: '/artists/cover1.png', isFollowing: false,
          },
          {
            id: 2, name: 'Artist 2', coverUrl: '/artists/cover2.png', isFollowing: true,
          },
          {
            id: 3, name: 'Artist 3', coverUrl: '/artists/cover3.png', isFollowing: false,
          },
          {
            id: 4, name: 'Artist 4', coverUrl: '/artists/cover4.png', isFollowing: false,
          },
          {
            id: 5, name: 'Artist 5', coverUrl: '/artists/cover5.png', isFollowing: false,
          },
          {
            id: 6, name: 'Artist 6', coverUrl: '/artists/cover6.png', isFollowing: true,
          },
          {
            id: 1, name: 'Artist 1', coverUrl: '/artists/cover1.png', isFollowing: false,
          },
          {
            id: 2, name: 'Artist 2', coverUrl: '/artists/cover2.png', isFollowing: false,
          },
          {
            id: 3, name: 'Artist 3', coverUrl: '/artists/cover3.png', isFollowing: false,
          },
          {
            id: 4, name: 'Artist 4', coverUrl: '/artists/cover4.png', isFollowing: true,
          },
          {
            id: 5, name: 'Artist 5', coverUrl: '/artists/cover5.png', isFollowing: false,
          },
          {
            id: 6, name: 'Artist 6', coverUrl: '/artists/cover6.png', isFollowing: false,
          },
          {
            id: 1, name: 'Artist 1', coverUrl: '/artists/cover1.png', isFollowing: false,
          },
          {
            id: 2, name: 'Artist 2', coverUrl: '/artists/cover2.png', isFollowing: false,
          },
          {
            id: 3, name: 'Artist 3', coverUrl: '/artists/cover3.png', isFollowing: false,
          },
          {
            id: 4, name: 'Artist 4', coverUrl: '/artists/cover4.png', isFollowing: false,
          },
          {
            id: 5, name: 'Artist 5', coverUrl: '/artists/cover5.png', isFollowing: false,
          },
          {
            id: 6, name: 'Artist 6', coverUrl: '/artists/cover6.png', isFollowing: false,
          },
          {
            id: 1, name: 'Artist 1', coverUrl: '/artists/cover1.png', isFollowing: false,
          },
          {
            id: 2, name: 'Artist 2', coverUrl: '/artists/cover2.png', isFollowing: false,
          },
          {
            id: 3, name: 'Artist 3', coverUrl: '/artists/cover3.png', isFollowing: false,
          },
          {
            id: 4, name: 'Artist 4', coverUrl: '/artists/cover4.png', isFollowing: false,
          },
          {
            id: 5, name: 'Artist 5', coverUrl: '/artists/cover5.png', isFollowing: false,
          },
          {
            id: 6, name: 'Artist 6', coverUrl: '/artists/cover6.png', isFollowing: false,
          },
          {
            id: 1, name: 'Artist 1', coverUrl: '/artists/cover1.png', isFollowing: false,
          },
          {
            id: 2, name: 'Artist 2', coverUrl: '/artists/cover2.png', isFollowing: false,
          },
          {
            id: 3, name: 'Artist 3', coverUrl: '/artists/cover3.png', isFollowing: false,
          },
          {
            id: 4, name: 'Artist 4', coverUrl: '/artists/cover4.png', isFollowing: false,
          },
          {
            id: 5, name: 'Artist 5', coverUrl: '/artists/cover5.png', isFollowing: false,
          },
          {
            id: 6, name: 'Artist 6', coverUrl: '/artists/cover6.png', isFollowing: false,
          },
          {
            id: 1, name: 'Artist 1', coverUrl: '/artists/cover1.png', isFollowing: false,
          },
          {
            id: 2, name: 'Artist 2', coverUrl: '/artists/cover2.png', isFollowing: false,
          },
          {
            id: 3, name: 'Artist 3', coverUrl: '/artists/cover3.png', isFollowing: false,
          },
          {
            id: 4, name: 'Artist 4', coverUrl: '/artists/cover4.png', isFollowing: false,
          },
          {
            id: 5, name: 'Artist 5', coverUrl: '/artists/cover5.png', isFollowing: false,
          },
          {
            id: 6, name: 'Artist 6', coverUrl: '/artists/cover6.png', isFollowing: false,
          },
          {
            id: 1, name: 'Artist 1', coverUrl: '/artists/cover1.png', isFollowing: false,
          },
          {
            id: 2, name: 'Artist 2', coverUrl: '/artists/cover2.png', isFollowing: false,
          },
          {
            id: 3, name: 'Artist 3', coverUrl: '/artists/cover3.png', isFollowing: false,
          },
          {
            id: 4, name: 'Artist 4', coverUrl: '/artists/cover4.png', isFollowing: false,
          },
          {
            id: 5, name: 'Artist 5', coverUrl: '/artists/cover5.png', isFollowing: false,
          },
          {
            id: 6, name: 'Artist 6', coverUrl: '/artists/cover6.png', isFollowing: false,
          },
          {
            id: 1, name: 'Artist 1', coverUrl: '/artists/cover1.png', isFollowing: false,
          },
          {
            id: 2, name: 'Artist 2', coverUrl: '/artists/cover2.png', isFollowing: false,
          },
          {
            id: 3, name: 'Artist 3', coverUrl: '/artists/cover3.png', isFollowing: false,
          },
          {
            id: 4, name: 'Artist 4', coverUrl: '/artists/cover4.png', isFollowing: false,
          },
          {
            id: 5, name: 'Artist 5', coverUrl: '/artists/cover5.png', isFollowing: false,
          },
          {
            id: 6, name: 'Artist 6', coverUrl: '/artists/cover6.png', isFollowing: false,
          },
          {
            id: 1, name: 'Artist 1', coverUrl: '/artists/cover1.png', isFollowing: false,
          },
          {
            id: 2, name: 'Artist 2', coverUrl: '/artists/cover2.png', isFollowing: false,
          },
          {
            id: 3, name: 'Artist 3', coverUrl: '/artists/cover3.png', isFollowing: false,
          },
          {
            id: 4, name: 'Artist 4', coverUrl: '/artists/cover4.png', isFollowing: false,
          },
          {
            id: 5, name: 'Artist 5', coverUrl: '/artists/cover5.png', isFollowing: false,
          },
          {
            id: 6, name: 'Artist 6', coverUrl: '/artists/cover6.png', isFollowing: false,
          },
          {
            id: 1, name: 'Artist 1', coverUrl: '/artists/cover1.png', isFollowing: false,
          },
          {
            id: 2, name: 'Artist 2', coverUrl: '/artists/cover2.png', isFollowing: false,
          },
          {
            id: 3, name: 'Artist 3', coverUrl: '/artists/cover3.png', isFollowing: false,
          },
          {
            id: 4, name: 'Artist 4', coverUrl: '/artists/cover4.png', isFollowing: false,
          },
          {
            id: 5, name: 'Artist 5', coverUrl: '/artists/cover5.png', isFollowing: false,
          },
          {
            id: 6, name: 'Artist 6', coverUrl: '/artists/cover6.png', isFollowing: false,
          },
        ],
      },
    };

    return fetch(artists);
  },
};
