<template>
  <div class="center">
    <form class="form container" @submit.prevent="login">
      <div class="card" v-if="errorMessage">
        <div class="card-content red">
          <p class="white-text">{{errorMessage}}</p>
        </div>
      </div>
      <div class="row">
        <div class="input-field">
          <label for="email">Email</label>
          <input type="email" v-model="email">
        </div>
        <div class="input-field">
          <label for="password">Password</label>
          <input type="password" v-model="password">
        </div>
      </div>
      <button class="btn left">Login</button>
    </form>
  </div>
</template>

<script>
import { auth } from './../store/firebase'

export default {
  name: 'Login',
  data() {
    return {
      title: 'Login',
      email: '',
      password: '',
      errorMessage: null,
    }
  },
  methods: {
    async login() {
      try {
        const user = await auth.signInWithEmailAndPassword(this.email, this.password);
        console.log(user);
        this.$router.push('/');
      } catch (e) {
        this.errorMessage = e.message;
        setTimeout(() => location.reload(), 1500);
      }
    }
  },
}
</script>

<style>

</style>