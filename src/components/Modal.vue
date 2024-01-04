<template>
  <dialog
    id="my_modal_2"
    class="backdrop-brightness-50 modal"
    :open="isOpenModal"
  >
    <div class="modal-box">
      <h3 class="font-bold text-lg">Hello!</h3>
      <p class="py-4">Press ESC key or click outside to close</p>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button class="cursor-default">close</button>
    </form>
  </dialog>
  <!-- <dialog id="my_modal_1" class="modal" :open="isOpenModal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Hello!</h3>
      <p class="py-4">Press ESC key or click the button below to close</p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog> -->
</template>

<script setup>
const props = defineProps({
  isOpenModal: {
    type: Boolean,
    default: false,
  },
});

console.log(props);
</script>
