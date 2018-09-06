import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login.vue';
import Home from './views/Home.vue';
import Signup from './views/Signup.vue';
import ArtistsListPage from './views/ArtistsListPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    }, {
      path: '/signin',
      name: 'login',
      component: Login,
    }, {
      path: '/signup',
      name: 'signup',
      component: Signup,
    }, {
      path: '/artists',
      name: 'artists',
      component: ArtistsListPage,
    },
  ],
});
