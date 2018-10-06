import Vue from 'vue';
import router from './router';
import VueI18n from 'vue-i18n';
import store from './store';
import App from './App.vue';
import { messages } from './constants';

Vue.config.productionTip = false;
Vue.use(VueI18n);

// get user's locale settings
const language = localStorage.getItem('language') ||
  (window.navigator.userLanguage ||
    window.navigator.language).split('-')[0];
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: language,
  fallbackLocale: 'en',
  messages,
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
