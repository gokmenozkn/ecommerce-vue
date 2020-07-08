<template>
  <div class="center">
    <form class="form container" @submit.prevent="">
      <div class="row">
        <div class="input-field">
          <label for="email">Email</label>
          <input type="email" v-model="email">
        </div>
        <div class="input-field">
          <label for="message">Message</label>
          <input type="text">
        </div>
      </div>
      <button class="btn left">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Email',
  methods: {
  },
}
</script>

<style>

</style>