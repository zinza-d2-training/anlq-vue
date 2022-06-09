import Vue, { ComponentOptions } from 'vue';
import VueRouter from 'vue-router';
import Login from './views/Login.vue';
import ForgotPassword from './views/ForgotPassword.vue';
import Home from './views/Home.vue';
import User from './views/User.vue';
import Register from './views/Register.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home as ComponentOptions<Vue>
    },
    {
      path: '/login',
      component: Login as ComponentOptions<Vue>
    },
    {
      path: '/forgot-password',
      component: ForgotPassword as ComponentOptions<Vue>
    },
    {
      path: '/register',
      component: Register as ComponentOptions<Vue>
    },
    {
      path: '/user',
      component: User as ComponentOptions<Vue>
    }
  ]
});
