import Vue from 'vue';
import App from './App.vue';
import vuetify from '@/plugins/vuetify';
import { router } from './router';
import store from './store/index';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation
  });
}

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
