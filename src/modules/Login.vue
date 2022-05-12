<template lang="pug">
.login-box
  .card.card-outline.card-primary
    .card-header.text-center
      router-link.h1(to='/')
        b {{ $t("labels.admin") }}
        | {{ $t("labels.lte") }}
    .card-body
      p.login-box-msg {{ $t("labels.signInToStart") }}
      form(@submit.prevent='doLoginByAuth')
        Input.mb-3(icon='envelope' type='email' placeholder='Email' autocomplete='off' v-model='email')
        Input.mb-3(icon='lock' type='password' placeholder='Password' autocomplete='off' v-model='password')
        .row
          .col-7
            Checkbox(type='icheck' v-model='rememberMe')
              | {{ $t("labels.rememberMe") }}
          .col-5
            Button.btn-primary(type='submit' block='true' :loading='isAuthLoading' :disabled="false" )
              | {{ $t("labels.signIn") }}
        //- p.mb-1
          router-link(to='/forgot-password')
            | {{ $t("labels.forgotPassword") }}
        //- p.mb-0
          router-link.text-center(to='/register')
            | {{ $t("labels.registerMembership") }}
</template>
<script lang="ts" setup>
import { useToast } from 'vue-toastification'
import { onMounted, onUnmounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { loginByAuth } from '@/services/auth'
import Checkbox from '@/components/Checkbox.vue'
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'

let appElement: HTMLElement | null = null
let email: string = ''
let password: string = ''
let rememberMe: boolean = false
let isAuthLoading: boolean = false
let toast = useToast()
const authStore = useAuthStore()

onMounted(() => {
  appElement = document.getElementById('app') as HTMLElement
  appElement.classList.add('login-page')
})
onUnmounted(() => {
  (appElement as HTMLElement).classList.remove('login-page')
})

const doLoginByAuth = async (): Promise<void> => {
  try {
    isAuthLoading = true
    const token = await loginByAuth(email, password)
    authStore.login(token)
    toast.success('Login succeeded')
    isAuthLoading = false
  } catch (error: any) {
    toast.error(error.message)
    isAuthLoading = false
  }
}
</script>
<style lang="sass" scoped></style>
