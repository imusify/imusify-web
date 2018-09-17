import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login.vue';
import ActivateUser from '@/components/ActivateUser.vue';
import PrivacyPolicy from '@/components/Privacy.vue';
import About from '@/components/About.vue';
import Legal from '@/components/Legal.vue';
import Home from './views/Home.vue';
import Signup from './views/Signup.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
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
    component: Home,
  }, {
    path: '/users/activate/:code',
    name: 'activate-user',
    component: ActivateUser,
  }, {
    path: '/privacy',
    name: 'privacy-policy',
    component: PrivacyPolicy,
  }, {
    path: '/about',
    name: 'about',
    component: About,
  }, {
    path: '/legal',
    name: 'legal',
    component: Legal,
  },
  ],
});
