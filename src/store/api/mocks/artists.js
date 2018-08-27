function fetch(res) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res)
    }, 1000)
  })
}

export default {
  getAll() {
    const artists = {
      data: {
        artists: [
          { id: 1, title: 'Artist Listing 1', logoUrl: 'https://via.placeholder.com/150/92c952' }
        ]
      }
    }

    return fetch(artists)
  },
  get(id) {
    const artist = {
      data: {
        id: 1,
        title: 'Artist Listing 1',
        logoUrl: 'https://via.placeholder.com/150/92c952',
        backgroundUrl: '/static/hv-cover-img/cover-img-crop@2x.png',
        createdAt: Date.now(),
        description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur tincidunt turpis, in fringilla metus pulvinar sed. Duis venenatis nulla sed metus tempus efficitur. Vivamus elementum mi ac augue aliquam rhoncus. Nulla facilisi. Phasellus vulputate metus a quam interdum sollicitudin. Donec non purus varius, luctus sem aliquet, ultricies nunc. In ut consectetur lorem, aliquam euismod elit. Integer efficitur, dolor vitae luctus volutpat, tortor libero elementum augue, a porttitor est diam vel turpis. Fusce finibus metus vitae sagittis placerat. Vestibulum sagittis ligula in pharetra pharetra. Donec vitae velit eget urna venenatis finibus eget sed risus. Nunc accumsan eros at dapibus bibendum. Integer vestibulum faucibus dui blandit pellentesque.</p>

<p>Praesent malesuada augue eu accumsan vehicula. Sed lacus eros, luctus at arcu vel, euismod accumsan sapien. Fusce placerat dolor lectus, a placerat nunc egestas rutrum. In sagittis est a ligula porttitor ullamcorper. Aenean vehicula diam ut felis faucibus molestie. Nulla dapibus felis vitae nulla semper, ut finibus nisi ullamcorper. Maecenas pellentesque id odio sed rutrum. Aenean finibus est nisi, id feugiat tellus vulputate ut. Integer vel lorem nec est hendrerit malesuada nec sed tortor. Nullam pulvinar varius porta. Ut vestibulum lorem nec neque tempus sollicitudin. Curabitur dui ligula, sagittis sed consectetur eu, molestie in dui. Proin enim nisl, porttitor ut ex ut, pulvinar bibendum ipsum. Suspendisse semper eget tellus quis cursus. Nulla facilisi. Donec commodo ipsum sed nulla consectetur luctus.</p>

<p>In hac habitasse platea dictumst. Donec urna orci, rhoncus vitae eleifend pharetra, volutpat vel sapien. Phasellus sed commodo ligula. Integer pharetra enim a libero sollicitudin, at ultricies ex pretium. Quisque felis enim, fermentum quis augue maximus, lobortis tempor urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed pulvinar risus risus, et venenatis nisi venenatis et. Praesent diam magna, placerat at tellus in, varius fringilla eros. Morbi in tellus pharetra, hendrerit mauris id, tincidunt sapien. Aenean accumsan iaculis iaculis. Nulla porttitor pulvinar viverra. Nunc vitae facilisis neque. Etiam venenatis, magna a mollis suscipit, sem orci pharetra magna, id rutrum erat turpis non mi. Nam fermentum lacus nec risus tristique dictum.</p>`
      }
    }

    return fetch(artist)
  }
}
