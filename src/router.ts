import { createRouter, createWebHistory } from 'vue-router'
import Layout from "./components/layout/Layout.vue"
import Plastic from "../src/components/plastic/Plastic.vue"
import About from "./components/about/About.vue"
import Contact from "./components/contact/Contact.vue"


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: '/home',
      component: Layout,
      children: [
        {
          path: "/home",
          component: Plastic,
          meta: {
            isWhite: false,
            isHeader: true,
            isRightBar: true,
            isContent: true,
            isAdditional: true,
          },
        },
        {
          path: "/about",
          component: About,
          meta: {
            isWhite: false,
            isHeader: true,
            isRightBar: false,
            isContent: false,
            isAdditional: false,
          },
        },
        {
          path: "/contact",
          component: Contact,
          meta: {
            isWhite: false,
            isHeader: false,
            isRightBar: false,
            isContent: false,
            isAdditional: false,
          },
        },
      ],
    },
  ],
})