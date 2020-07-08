<template>
  <div class="center">
    <form class="form container" @submit.prevent="register">
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
      <button class="btn left">Register</button>
    </form>
  </div>
</template>

<script>
import { auth } from './../store/firebase'

export default {
  name: 'Register',
  data() {
    return {
      title: 'Register',
      email: '',
      password: '',
      errorMessage: null,
    }
  },
  methods: {
    async register() {
      try {
        const user = await auth.createUserWithEmailAndPassword(this.email, this.password);
        console.log(user);
        this.$router.push('/login');
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