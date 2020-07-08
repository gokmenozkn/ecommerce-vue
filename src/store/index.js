import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      { id: 1, name: 'Cool T-shirt', img: 't-shirt.jpg', price: '30' },
      { id: 2, name: 'Skull T-shirt', img: 'skull-tshirt.jpg', price: '20' },
      { id: 3, name: 'Nike T-shirt', img: 'nike-tshirt.jpg', price: '35' },
    ],
    cart: [],
  },
  mutations: {
    ADD_ITEM(state, {id}) {
      const record = state.cart.find(p => p.id === id);

      if (!record) {
        state.cart.push({
          id,
          quantity: 1
        });
      } else {
        record.quantity ++;
      }
      console.log(state.cart);
    },

    REMOVE_ITEM(state, item) {
      state.cart.splice(item, 1);
    }
  },
  actions: {

    addItem({ commit }, item) {
      commit('ADD_ITEM', {
        id: item.id
      });
    },

    removeItem({ commit }, item) {
      commit('REMOVE_ITEM', {
        id: item.id
      });
    },
  },
  getters: {
    products: state => state.products,
    cart: state => state.cart,
    cartProducts: state => {
      return state.cart.map(({ id, quantity }) => {
        const product = state.products.find(p => p.id === id);
        return {
          name: product.name,
          price: product.price,
          quantity
        }
      })
    }
  }
});