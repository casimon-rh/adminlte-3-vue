import { defineStore } from 'pinia'
import type { IUser } from '@/interfaces/user'
import router from '@/router/index'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    _token: '',
    _user: {} as IUser | null
  }),
  getters: {
    user: (state): IUser | null => state._user,
    token: (state): string | null => state._token
  },
  actions: {
    login(payload: string): void {
      this._token = payload
      router.replace('/')
    },
    getUser(payload: IUser): void {
      this._user = payload
    },
    logout(): void {
      // this._token = ''
      // this.user = null
      localStorage.removeItem('gatekeeper_token')
      router.replace('/login')
    }
  }
})