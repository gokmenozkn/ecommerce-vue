import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Login from './../components/Login.vue'
import Register from './../components/Register.vue'
import Cart from './../components/Cart.vue';
import Email from './../components/Email.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/send-email',
      name: 'Email',
      component: Email
    },
  ],
  mode: 'history',
})
