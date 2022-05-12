<template lang="pug">
aside.control-sidebar.control-sidebar-dark(style='padding: 16px; padding-top: 73px')
  h5 Customize AdminLTE
  hr.mb-2
  div(style='padding: 8px 0')
    Checkbox(@change='storeUI.toggleDarkMode')  Dark mode 
    Select.mt-3(v-model='storeUI.navbarVariant', :options='navbarLightVariants', type='custom', @change='setSidebarSkin')
      | Light Navbar Variants
    Select.mt-3(v-model='storeUI.navbarVariant', :options='navbarDarkVariants', type='custom', @change='setSidebarSkin')
      | Dark Navbar Variants
    Select.mt-3(:options='[]', type='custom')
      | Accent Color Variants
    Select.mt-3(v-model='storeUI.sidebarSkin', :options='lightSidebarSkins', type='custom', @change='setSidebarSkin')
      | Light Sidebar Variants
    Select.mt-3(v-model='storeUI.sidebarSkin', :options='darkSidebarSkins', type='custom', @change='setSidebarSkin')
      | Dark Sidebar Variants
    Select.mt-3(:options='[]', type='custom')
      | Brand Logo Variants
</template>
<script lang="ts" setup>
import { useUIStore } from '@/stores/ui'
import type { Option } from '@/components/Select.vue'
import Checkbox from '@/components/Checkbox.vue'
import Select from '@/components/Select.vue'

import {
  NAVBAR_DARK_VARIANTS,
  NAVBAR_LIGHT_VARIANTS,
  SIDEBAR_DARK_SKINS,
  SIDEBAR_LIGHT_SKINS
} from '@/utils/themes'

const storeUI = useUIStore()

const navbarLightVariants: Array<Option> = NAVBAR_LIGHT_VARIANTS
const navbarDarkVariants: Array<Option> = NAVBAR_DARK_VARIANTS
const darkSidebarSkins: Array<Option> = SIDEBAR_DARK_SKINS
const lightSidebarSkins: Array<Option> = SIDEBAR_LIGHT_SKINS

const setSidebarSkin = (event: Event) => {
  if (event?.target) {
    const target = event.target as HTMLSelectElement
    storeUI.setSidebarSkin(target.value)
  }
}

</script>
<style lang="sass" scoped></style>
