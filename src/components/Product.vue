<template>
  <h1 class="text-lg font-semibold mt-10">Mais pedidos</h1>
  <div class="divider w-full m-0"></div>
  <div class="flex font-sans h-32">
    <div class="w-32 relative">
      <img
        src="@/assets/classic-utility-jacket.jpg"
        alt=""
        class="absolute inset-0 w-full h-full object-cover rounded-md"
        loading="lazy"
      />
    </div>
    <form class="flex justify-between flex-col flex-auto sm:pl-6 pl-2">
      <div class="flex flex-wrap">
        <h1 class="flex-auto text-lg font-semibold text-slate-900">
          Utility Jacket
        </h1>
        <div class="text-lg font-semibold text-slate-500">R$110,00</div>
      </div>

      <p class="flex-1 text-sm text-slate-700">
        Free shipping on all continental US orders.
      </p>

      <div class="flex text-xs justify-between items-center">
        <button
          ref="buttonAddToBag"
          class="btn"
          @click.prevent="pushProductToBag({ id: 1, name: 'Test', price: 12 })"
        >
          <span class="hidden loading loading-spinner"></span>
          Adicionar
        </button>

        <button
          class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
          type="button"
          aria-label="Like"
        >
          <svg
            class="hover:fill-red-600"
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            />
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cart";
import { ref } from "vue";
const store = useCartStore();
const buttonAddToBag = ref();

const pushProductToBag = (product) => {
  store.addToBag(product);
  console.log(product);
};
</script>
