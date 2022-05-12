<template lang="pug">
.wrapper
  Header
  MenuSidebar
  .content-wrapper
    router-view
  Footer
  ControlSidebar
  #sidebar-overlay(v-if="screenSize() === 'xs' && menuSidebarCollapsed()", @click='uiStore.toggleMenuSidebar')
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'
import Header from '@/components/Header.vue'
import MenuSidebar from '@/components/MenuSidebar.vue'
import Footer from '@/components/Footer.vue'
import ControlSidebar from '@/components/ControlSidebar.vue'

import { useAuthStore } from '@/stores/auth'
import { useUIStore } from '@/stores/ui'

import { getProfile } from '@/services/auth'

let appElement: HTMLElement
const authStore = useAuthStore()
const uiStore = useUIStore()

onMounted(async () => {
  appElement = document.getElementById('app') as HTMLElement
  appElement.classList.add('sidebar-mini')
  appElement.classList.add('layout-fixed')
  try {
    const user = await getProfile()
    authStore.getUser(user)
  } catch (error) {
    console.log({ error })
    authStore.logout()
  }
})

onUnmounted(() => {
  appElement?.classList.remove('sidebar-mini')
  appElement?.classList.remove('layout-fixed')
})

const watchLayoutChanges = () => {
  if (appElement) {
    appElement.classList.remove('dark-mode')
    appElement.classList.remove('sidebar-closed')
    appElement.classList.remove('sidebar-collapse')
    appElement.classList.remove('sidebar-open')
    appElement.classList.remove('control-sidebar-slide-open')

    if (darkModeSelected()) {
      appElement.classList.add('dark-mode')
    }

    if (!controlSidebarCollapsed()) {
      appElement.classList.add('control-sidebar-slide-open')
    }

    if (menuSidebarCollapsed() && screenSize() === 'lg') {
      appElement.classList.add('sidebar-collapse')
    } else if (menuSidebarCollapsed() && screenSize() === 'xs') {
      appElement.classList.add('sidebar-open')
    } else if (!menuSidebarCollapsed() && screenSize() !== 'lg') {
      appElement.classList.add('sidebar-closed')
      appElement.classList.add('sidebar-collapse')
    }
    return appElement.classList.value
  }
}

const darkModeSelected = () => uiStore.darkModeSelected
const menuSidebarCollapsed = () => uiStore.menuSidebarCollapsed
const controlSidebarCollapsed = () => uiStore.controlSidebarCollapsed
const screenSize = () => uiStore.screenSize

</script>
<style lang="sass" scoped></style>
