<template>
  <dl
    class="mb-12 mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2"
  >
    <dt class="sr-only">Reviews</dt>
    <dd class="text-yellow-600 flex items-center">
      <svg
        width="24"
        height="24"
        fill="currentColor"
        aria-hidden="true"
        class="mr-1 stroke-current"
      >
        <path
          d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>4.89 <span class="text-slate-400 font-normal">(128)</span></span>
    </dd>
    <dt class="sr-only">Location</dt>
    <dd class="flex items-center">
      <svg
        width="2"
        height="2"
        aria-hidden="true"
        fill="currentColor"
        class="mx-3 text-slate-300"
      >
        <circle cx="1" cy="1" r="1" />
      </svg>
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="mr-1 text-slate-400 dark:text-slate-500"
        aria-hidden="true"
      >
        <path
          d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z"
        />
        <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
      </svg>
      Paciência, Rio de Janeiro
    </dd>

    <dd class="flex-1 text-end">
      <!-- <div
        class="badge font-semibold border-none badge-accent bg-green-100 text-green-800 py-3"
      >
        Aberto até as 23h00
      </div> -->
      <div class="badge font-semibold border-none bg-red-100 text-red-800 py-3">
        Fechado
      </div>
    </dd>
  </dl>
</template>

<script>
export default {};
</script>

<style></style>
