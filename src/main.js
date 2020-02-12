import Vue from 'vue';
import App from './App.vue';
import i18n from './plugins/i18n';
import './registerServiceWorker';
import '@fortawesome/fontawesome-free/js/all.js';

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app');
