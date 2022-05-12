<template lang="pug">
.login-box
  .card.card-outline.card-primary
    .card-header.text-center
      a.h1(href='../../index2.html')
        b {{ $t("labels.admin") }}
        | {{ $t("labels.lte") }}
    .card-body
      p.login-box-msg
        | {{ $t("messages.retrieveNewPassword") }}
      form
        .input-group.mb-3
          input.form-control(type='email', placeholder='Email')
          .input-group-append
            .input-group-text
              span.fas.fa-envelope
        .row
          .col-12
            button.btn.btn-primary.btn-block(type='submit')
              | {{ $t("buttons.requestNewPassword") }}
      p.mt-3.mb-1
        router-link(to='/login') {{ $t("labels.login") }}
</template>
<script lang="ts" setup>

import { onMounted, onUnmounted } from 'vue'

let appElement: HTMLElement | null = null
onMounted(() => {
  appElement = document.getElementById('app') as HTMLElement
  appElement.classList.add('login-page')
})
onUnmounted(() => {
  (appElement as HTMLElement).classList.remove('login-page')
})
</script>
<style lang="sass" scoped></style>
