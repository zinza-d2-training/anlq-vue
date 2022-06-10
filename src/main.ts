import Vue from 'vue';
import App from './App.vue';
import vuetify from '@/plugins/vuetify';
import router from './router';
import store from './store/index';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { required, min, regex, numeric, email } from 'vee-validate/dist/rules';

for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation
  });
}

extend('required', {
  ...required,
  message: 'Trường này không được để trống.'
});

extend('min', {
  ...min,
  message: 'Mật khẩu ít nhất phải có 8 ký tự.'
});

extend('regex', {
  ...regex,
  message: 'Trường này không được chứa dấu cách.'
});

extend('numeric', {
  ...numeric,
  message: 'Trường này chỉ bao gồm các số.'
});

extend('validateCMND', {
  validate: (value) => {
    return value.length == 9 || value.length == 12;
  },
  message: 'Hãy nhập CMND 9 hoặc CCCD 12 số'
});

extend('email', {
  ...email,
  message: 'Bạn đã nhập sai định dạng của email.'
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
