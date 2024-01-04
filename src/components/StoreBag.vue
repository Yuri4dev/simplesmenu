<template>
  <div
    class="fixed z-50 sm:w-max w-full sm:relative right-0 bottom-0 bg-yellow-700 sm:bg-white flex justify-between items-center justify-self-end py-2 sm:px-0 px-6 gap-2 cursor-pointer"
  >
    <p class="order-2 sm:hidden block text-white" @click="openBag">
      Ver sacola
    </p>
    <div class="relative" @click="openBag">
      <svg
        class="order-1 w-8 h-8 text-white sm:text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 20"
      >
        <path
          class="sm:stroke-gray-900 stroke-white"
          stroke="rgb(31,41,55)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M12 9V4a3 3 0 0 0-6 0v5m9.92 10H2.08a1 1 0 0 1-1-1.077L2 6h14l.917 11.923A1 1 0 0 1 15.92 19Z"
        />
      </svg>
      <p
        class="text-xs sm:bg-gray-900 sm:text-white bg-white rounded-full px-1 absolute -right-1 bottom-0"
      >
        {{ quantityItems }}
      </p>
    </div>
    <p
      class="order-3 sm:text-gray-900 text-white sm:text-sm text-lg"
      @click="openBag"
    >
      R$ {{ totalPriceItemsOfBag }}
    </p>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cart";
import { computed, reactive, ref } from "vue";
const router = useRouter();
const store = useCartStore();

const quantityItems = computed(() => {
  return store.quantityItemsOfBag;
});

const totalPriceItemsOfBag = computed(() => {
  return store.$state.cart.map((p) => p.price + p.price * 1).pop();
});

const openBag = () => {
  router.push({
    path: "reviews",
    params: {
      id: 1,
    },
  });
};
</script>
