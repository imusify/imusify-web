import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login.vue';
import ActivateUser from '@/components/ActivateUser.vue';
import PrivacyPolicy from '@/components/Privacy.vue';
import About from '@/components/About.vue';
import Legal from '@/components/Legal.vue';
import Home from './views/Home.vue';
import Signup from './views/Signup.vue';
import SignupNext from './components/SignupNext.vue';
import Profile from './components/Profile.vue';

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
      component: Home,
    }, {
      path: '/signupnext',
      name: 'signupnext',
      component: SignupNext,
    }, {
      path: '/profile',
      name: 'profile',
      component: Profile,
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
