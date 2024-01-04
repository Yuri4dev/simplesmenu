import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),

  actions: {
    addToBag(product) {
      this.cart.push(product);
    },
  },

  getters: {
    quantityItemsOfBag: (state) => state.cart.length,
  },
});
