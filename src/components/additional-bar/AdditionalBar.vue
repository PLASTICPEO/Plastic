<template>
  <div
    v-if="props.isAdditional"
    class="xl:visible invisible border border-[#21A179] absolute bottom-[5%] right-[5%] w-[20%] h-[29%] bg-[#D6D6D6] p-4 rounded hover:bg-[#C1D7CF] transition-colors duration-1000 cursor-pointer"
  >
    <div class="w-full h-full bg-[#81AE9D] rounded"></div>
  </div>
</template>
<script setup>
const props = defineProps({
  isAdditional: {
    type: Boolean,
    required: true,
  },
});
</script>
