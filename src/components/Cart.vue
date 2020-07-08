<template>
  <div class="cart container" v-if="cartProducts.length">
    <ul class="collection" v-for="(item, index) in cartProducts" :key="index">
      <li class="collection-item">
        {{ item.name }} - Quantity: {{ item.quantity }}
        <div class="cart_price right">Price: {{ item.price * item.quantity }} $  </div>
      </li>
    </ul>
    <h4>Total: {{ total }} $</h4>
  </div>
  <div v-else class="cart container">
    <h1>No Products In Cart</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  computed: {
      ...mapGetters({
      cartProducts: 'cartProducts'
    }),
    total() {
      return this.cartProducts.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  }
}
</script>

<style>
  .cart {
    position: relative;
    top: 100px;
    max-width: 950px;
  }
  .cart_price {
    font-weight: bold;
  }
</style>