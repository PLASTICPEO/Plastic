<template>
  <div
    v-if="props.isContent"
    class="absolute xl:top-[15%] top-[18%] left-[5%] xl:w-[69%] w-[90%] h-[80%] bg-[#D6D6D6] rounded"
  >
    <div
      class="border border-blue-300 shadow rounded-md p-4 h-full w-full mx-auto"
    >
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-slate-700 h-[100px] w-[100px]">
          <img
            class="rounded-full object-cover"
            src="https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/321918213_538197788349725_9035288585782385459_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeF--nxj9p_95g6m28wzQU_0t7FeTMHRAWO3sV5MwdEBYzAlQ1lKw1Pf3mcLGJxy71L0ZhOyHYdhziPj7vkv12fQ&_nc_ohc=dQt0oQPEvVoAX_fhABa&_nc_ht=scontent.ftbs5-2.fna&oh=00_AfD-7mYhEtGa9CizpOqeSS9khG4POmlVs_yy7nJfNV1xiw&oe=647C7D99"
            alt="Plastic"
          />
        </div>
        <div class="flex-1 space-y-6 py-1">
          <div class="h-2 bg-[#7FC8F8] rounded"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-slate-700 rounded col-span-2"></div>
              <div class="h-2 bg-[#564787] rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-slate-700 rounded"></div>
          </div>
          <div class="h-2 bg-slate-700 rounded"></div>
          <div class="h-2 bg-[#FF8552] rounded"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-slate-700 rounded col-span-2"></div>
              <div class="h-2 bg-[#85FFC7] rounded col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  isContent: {
    type: Boolean,
    required: true,
  },
});
</script>
