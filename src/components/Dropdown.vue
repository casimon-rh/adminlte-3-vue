<template lang="pug">
li.nav-item.dropdown(ref="dropdown")
  button.nav-link(@click="toggleDropdown")
    slot(name="dropdown-button")
  DropdownMenu(v-if="isOpen" :size="size")
    slot(name="dropdown-menu")
</template>

<script lang="ts" setup>
import DropdownMenu from './DropdownMenu.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{ size: string }>(), { size: 'md' })
let dropdownElement: any
let isOpen: boolean = false
let size: string = props.size
const dropdown = ref(null)

onMounted(() => {
  dropdownElement = dropdown
  document.addEventListener('click', documentClick)
})

onUnmounted(() => {
  document.removeEventListener('click', documentClick)
})

const documentClick = (event: Event) => {
  const target: HTMLElement = event.target as HTMLElement
  if (
    dropdownElement !== target &&
    !dropdownElement.contains(target)
  )
    isOpen = false
}

const toggleDropdown = () => isOpen = !isOpen
</script>

<style lang="sass" scoped></style>
