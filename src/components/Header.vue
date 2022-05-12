<template lang="pug">
nav#main-header.main-header.navbar.navbar-expand(:class='storeUI.navbarVariant')
  ul.navbar-nav
    li.nav-item
      button.nav-link(role='button', @click='storeUI.toggleMenuSidebar')
        i.fas.fa-bars
    li.nav-item.d-none.d-sm-inline-block
      router-link.nav-link(to='/')
        | {{ $t("labels.home") }}
    li.nav-item.d-none.d-sm-inline-block
      router-link.nav-link(to='/')
        | {{ $t("labels.contact") }}
  ul.navbar-nav.ml-auto
    li.nav-item
      button.nav-link(@click='storeUI.toggleControlSidebar')
        i.fas.fa-th-large
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { useUIStore } from '@/stores/ui'

const storeUI = useUIStore()
let headerElement: HTMLElement | null = null

onMounted(async () => {
  headerElement = document.getElementById(
            'main-header'
        ) as HTMLElement
})
</script>
<style lang="sass" scoped></style>
