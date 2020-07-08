<template>
  <div class="container">
    <Products
      :products="products" 
    />
  </div>
</template>

<script>
import Products from './../components/Products'

export default {
  name: 'index',
  data () {
    return {
      
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  components: {
    Products
  }
}
</script>

<style>

</style>
