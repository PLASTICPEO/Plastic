<template>
  <Menu :isWhite="route.meta?.isWhite" />
  <Header :isHeader="route.meta?.isHeader" />
  <RightBar :isRightBar="route.meta?.isRightBar" />
  <Content :isContent="route.meta?.isContent" />
  <AdditionalBar :isAdditional="route.meta?.isAdditional" />
  <router-view></router-view>
</template>

<script setup>
import { useRoute } from "vue-router";
import Menu from "../menu/Menu.vue";
import Header from "../header/Header.vue";
import RightBar from "../sidebar-right/RightBar.vue";
import Content from "../content/Content.vue";
import AdditionalBar from "../additional-bar/AdditionalBar.vue";
const route = useRoute();
</script>
