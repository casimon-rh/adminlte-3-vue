import type { IUser } from './user'
export interface IAuthState {
    token: string | null
    user: IUser| null
}

export interface IAuthModule {
    namespaced: boolean
    state: IAuthState
    mutations: any
    actions: any
    getters: any
}
