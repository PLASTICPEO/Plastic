<template>
  <div
    v-if="props.isRightBar"
    class="xl:visible invisible absolute top-[15%] right-[5%] xl:w-[20%] h-[50%] bg-[#D6D6D6] rounded"
  >
    <div
      class="border border-blue-300 shadow rounded-md p-4 h-full w-full mx-auto"
    >
      <div class="animate-pulse flex space-x-4">
        <div class="flex-1 space-y-6 py-1">
          <div class="h-2 bg-[#B8B8B8] rounded"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-[#B8B8B8] rounded col-span-2"></div>
              <div class="h-2 bg-[#B8B8B8] rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-[#B8B8B8] rounded"></div>
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-[#B8B8B8] rounded col-span-2"></div>
              <div class="h-2 bg-[#B8B8B8] rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-[#B8B8B8] rounded"></div>
            <div class="h-2 bg-[#B8B8B8] rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isRightBar: {
    type: Boolean,
    required: true,
  },
});
</script>
