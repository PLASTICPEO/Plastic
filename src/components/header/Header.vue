<template>
  <div
    v-if="props.isHeader"
    class="border border-blue-300 absolute xl:top-[2%] top-[5%] left-[50%] -translate-x-1/2 w-[90%] h-[10%] bg-[#D6D6D6] rounded hover:bg-[#63CCCA] transition-colors duration-1000 cursor-pointer"
  ></div>
</template>
<script setup>
const props = defineProps({
  isHeader: {
    type: Boolean,
    required: true,
  },
});
</script>
