<template>
  <div>
    <div class="absolute right-[1%] top-[1%]">
      <span
        @click="toggleMenu"
        :class="`material-symbols-outlined ${
          props.isWhite ? 'text-[black]' : 'text-[#FFFFFF]'
        } cursor-pointer`"
      >
        menu
      </span>
    </div>
    <div
      v-if="showMenu"
      class="flex items-center flex-col absolute right-[0%] top-[0%] xl:w-[300px] w-full h-screen bg-[#D6D6D6] shadow-2xl shadow-[#3A3F55] z-40"
    >
      <span
        @click="toggleMenu"
        class="material-symbols-outlined absolute top-[1%] xl:right-[7%] right-[1%] cursor-pointer"
      >
        close
      </span>
      <div class="mt-24 leading-10 w-full h-full font-menuFont">
        <router-link to="/">
          <p
            class="border-b-2 border-[#E0E0E0] hover:border-blue-300 hover:text-[#868383] text-center w-full mt-2.5"
            @click="toggleMenu"
          >
            Home
          </p>
        </router-link>
        <router-link to="/about">
          <p
            class="border-b-2 border-[#E0E0E0] hover:border-blue-300 hover:text-[#868383] text-center w-full mt-2.5"
            @click="toggleMenu"
          >
            About
          </p>
        </router-link>
        <router-link to="/contact">
          <p
            class="border-b-2 border-[#E0E0E0] hover:border-blue-300 hover:text-[#868383] text-center w-full mt-2.5"
            @click="toggleMenu"
          >
            Contact
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMenu } from "./composables/useMenu";
const { toggleMenu, showMenu } = useMenu();

const props = defineProps({
  isWhite: {
    type: Boolean,
    required: true,
  },
});
</script>
