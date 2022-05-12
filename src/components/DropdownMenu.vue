<template lang="pug">
.dropdown-menu.dropdown-menu-right.show(ref="dropdownMenu" :class="`dropdown-menu-${size}`" :style="fixStyles()")
  slot

</template>

<script lang="ts" setup>
import { ref, onMounted, type Ref } from 'vue'

const props = defineProps<{ size: string }>()
let dropdownMenuElement: any
let size: string = props.size
const dropdownMenu = ref(null)

onMounted(() => {
  dropdownMenuElement = dropdownMenu
})

const fixStyles = (): any => {
  if (dropdownMenuElement) {
    const windowWidth = document.getElementById('app')?.offsetWidth
    const offsetLeft =
      dropdownMenuElement.getBoundingClientRect().left
    const offsetWidth = dropdownMenuElement.offsetWidth
    const visiblePart = (windowWidth || 0) - offsetLeft

    if (offsetLeft < 0) {
      return {
        left: 'inherit',
        right: `${offsetLeft - 5}px`
      }
    } else if (visiblePart < offsetWidth) {
      return { left: 'inherit', right: `0px` }
    }
    return { left: 'inherit', right: `0px` }
  }
  return { left: 'inherit', right: `0px` }
}
</script>

<style lang="sass" scoped></style>
