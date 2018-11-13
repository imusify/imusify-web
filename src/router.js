import Vue from 'vue';
import Router from 'vue-router';
import ActivateUser from '@/components/ActivateUser.vue';
import PrivacyPolicy from '@/components/Privacy.vue';
import About from '@/components/About.vue';
import Legal from '@/components/Legal.vue';
import SignupNext from '@/components/SignupNext.vue';
import Profile from '@/components/Profile.vue';
import Home from './views/Home.vue';
import Upload from './views/Upload.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
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
    }, {
      path: '/upload',
      name: 'upload',
      component: Upload,
    },
  ],
});
