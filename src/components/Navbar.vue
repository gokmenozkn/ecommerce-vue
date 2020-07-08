<template>
  <div class="navbar">
    <nav class="blue darken-1">
      <div class="container">
        <router-link to="/" class="brand-logo">Logo</router-link>
        <ul class="right">
          <li class="badge">{{ cartCount }}</li>
          <li>
            <router-link to="/cart">
              <i class="material-icons">
                shopping_cart
              </i>
            </router-link>
          </li>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/register">Register</router-link></li>
          <li v-if="!user"><router-link to="/login">Login</router-link></li>
          <li v-else @click="logout">
            <a href="#">Logout</a>
          </li>
          <li><router-link to="/send-email">Contact</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { auth } from './../store/firebase'
import { mapState } from 'vuex';

export default {
  name: 'Navbar',
  data() {
    return {
      user: null,
    }
  },
  async created() {
    await auth.onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    })
  },
  methods: {
    async logout() {
      try {
        await auth.signOut();
        location.reload();
      } catch (e) {
        console.log(e);
      }
    },
  },
  computed: {
    cartCount: function() {
      let cart = this.$store.getters.cartProducts;
      return cart.reduce((accum, item) => accum + item.quantity, 0);
    },
  },
}
</script>

<style>

</style>