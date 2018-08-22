<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">Signup</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './src/assets/styles/base.scss';

#app {
  text-align: center;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $link-color;
    &.router-link-exact-active {
      /*color: #42b983;*/
    }
  }
}
</style>
