<template>
  <StoreHeader />

  <AboutStore />

  <div class="mt-6 sm:flex items-center justify-between gap-2 sm:gap-20">
    <SearchProductInput />
    <Categories />
  </div>

  <Product />
  <Product />
  <Product />
  <Product />
  <Product />
  <Product />
  <Product />
  <Product />
  <Product />
  <Product />
  <Product />

  <RouterView />
</template>

<script setup>
import StoreHeader from "@/components/StoreHeader.vue";
import SearchProductInput from "@/components/SearchProductInput.vue";
import Categories from "@/components/Categories.vue";
import AboutStore from "@/components/AboutStore.vue";
import Product from "@/components/Product.vue";
</script>
