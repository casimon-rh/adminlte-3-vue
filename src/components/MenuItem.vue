<template lang="pug">
li.nav-item(:class="{ 'menu-open': isMenuExtended }")
  a.nav-link(:class="{ 'active': isMainActive || isOneOfChildrenActive }" @click="handleMainMenuAction")
    i.nav-icon.fas.fa-tachometer-alt
    p {{ $t(props.menuItem.name) }}
    i.right.fas.fa-angle-left(v-if="isExpandable")
  ul.nav.nav-treeview(v-for="item in props.menuItem.children")
    li.nav-item
      router-link.nav-link(:to="item.path" exact exact-active-class="active")
        i.far.fa-circle.nav-icon
        p {{ $t(item.name) }}
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps<{
  menuItem: any,
  icon?: string,
  type?: string,
  placeholder?: string,
  autocomplete?: string
}>()
let menuItem: any = props.menuItem
let isMenuExtended: boolean = false
let isExpandable: boolean = false
let isMainActive: boolean = false
let isOneOfChildrenActive: boolean = false


onMounted(() => {
  isExpandable = menuItem && menuItem.children && menuItem.children.length > 0
  calculateIsActive(router.currentRoute.value?.path)
  router.afterEach((to) => {
    calculateIsActive(to.path)
  })
})

const handleMainMenuAction = () => {
  if (isExpandable) {
    toggleMenu()
    return
  }
  router.replace(menuItem.path)
}

const toggleMenu = () => isMenuExtended = !isMenuExtended

const calculateIsActive = (url: string) => {
  isMainActive = false
  isOneOfChildrenActive = false
  if (isExpandable) {
    menuItem.children.forEach((item: any) => {
      if (item.path === url) {
        isOneOfChildrenActive = true
        isMenuExtended = true
      }
    })
  } else if (menuItem?.path === url) {
    isMainActive = true
  }
  if (isMainActive && !isOneOfChildrenActive) {
    isMenuExtended = false
  }
}
</script>
<style lang="sass" scoped>
.nav-item
  cursor: pointer
</style>
