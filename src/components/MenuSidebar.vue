<template lang="pug">
aside.main-sidebar.elevation-4(:class='sidebarSkin')
  router-link.brand-link(to='/')
    img.brand-image.img-circle.elevation-3(src='../assets/img/logo.png', alt='AdminLTE Logo', style='opacity: 0.8')
    span.brand-text.font-weight-light AdminLTE 3
  .sidebar
    .user-panel.mt-3.pb-3.mb-3.d-flex
      .image
        img.img-circle.elevation-2(src="../assets/img/default-profile.png", alt='User Image')
      .info
        router-link.d-block(to='/profile')
          | {{ user && user.email }}
    nav.mt-2
      ul.nav.nav-pills.nav-sidebar.flex-column(data-widget='treeview', role='menu', data-accordion='false')
        MenuItem(v-for='item in menu', :menuItem='item')
</template>
<script lang="ts" setup>
import MenuItem from '@/components/MenuItem.vue'
import { useAuthStore } from '@/stores/auth'
import { useUIStore } from '@/stores/ui'
import type { IUser } from '@/interfaces/user'

const authStore= useAuthStore()
const uiStore = useUIStore()
const user: IUser | null = authStore.user
const sidebarSkin = () => uiStore.sidebarSkin

const menu = [
  {
    name: 'labels.dashboard',
    path: '/'
  },
  {
    name: 'labels.blank',
    path: '/blank'
  },
  {
    name: 'labels.mainMenu',
    children: [
      {
        name: 'labels.subMenu',
        path: '/sub-menu-1'
      },

      {
        name: 'labels.blank',
        path: '/sub-menu-2'
      }
    ]
  }
]
</script>
<style lang="sass" scoped></style>
