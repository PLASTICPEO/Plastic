import { ref } from "vue"

export const useMenu = () => {
const showMenu = ref(false)

const toggleMenu = () => {
    showMenu.value = !showMenu.value
}

return {
    toggleMenu,
    showMenu
}

}