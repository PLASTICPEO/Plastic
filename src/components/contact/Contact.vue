<template>
  <div class="h-screen w-full bg-[#292F36]">
    <form
      class="flex flex-col justify-center text-[#292F36] xl:w-1/2 w-full absolute xl:top-[10%] top-[10%] xl:left-[3%] xl:rounded-2xl p-7"
    >
      <input
        class="border-2 border-[#535A79] p-1.5 outline-none m-1.5 placeholder-[#B6BACD] placeholder:roboto bg-transparent focus:border-[#EBEBEB] rounded-md hover:border-[#B8B8B8]"
        type="Email"
        placeholder="Full name*"
      />
      <input
        class="border-2 border-[#535A79] p-1.5 outline-none m-1.5 placeholder-[#B6BACD] placeholder:roboto bg-transparent focus:border-[#EBEBEB] rounded-md hover:border-[#B8B8B8]"
        type="text"
        placeholder="Email*"
      />
      <input
        class="border-2 border-[#535A79] p-1.5 outline-none m-1.5 placeholder-[#B6BACD] placeholder:roboto bg-transparent focus:border-[#EBEBEB] rounded-md hover:border-[#B8B8B8] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        type="number"
        placeholder="Number*"
      />
      <button
        class="border-2 border-[#535A79] text-[#EFF2F1] hover:border-[#437F97] rounded-md p-2.5 outline-none m-1.5 mr-[60%]"
      >
        Submit
      </button>
    </form>
    <img
      class="absolute bottom-[20%] xl:right-[15%] xl:right-[-15%] right-[15%] w-[350px] h-[350px]"
      :src="abstractBall"
      alt="img"
    />
    <img
      class="absolute bottom-[5%] xl:right-[25%] right-[20%] w-[350px] h-[350px]"
      :src="abstractBallSmall"
      alt="img"
    />
    <p
      class="absolute bottom-[5%] left-[4%] font-author font-bold text-2xl text-[#EFF2F1]"
    >
      By Plastic
    </p>
  </div>
</template>
<script setup lang="ts">
import abstractBall from "../../assets/images/001@1-3000x3000 2.svg";
import abstractBallSmall from "../../assets/images/001@1-3000x3000 1.svg";
</script>
