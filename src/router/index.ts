import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import Main from '@/modules/Main.vue'
import Login from '@/modules/Login.vue'

import Dashboard from '@/pages/Dashboard.vue'
import Profile from '@/pages/Profile.vue'
import SubMenu from '@/pages/SubMenu.vue'
import Blank from '@/pages/Blank.vue'

import { useAuthStore } from '@/stores/auth'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    // meta: {
    //   requiresAuth: true
    // },
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
        // meta: {
        //   requiresAuth: true
        // }
      },
      {
        path: 'blank',
        name: 'Blank',
        component: Blank,
        // meta: {
        //   requiresAuth: true
        // }
      },
      {
        path: 'sub-menu-1',
        name: 'Sub Menu 1',
        component: SubMenu,
        // meta: {
        //   requiresAuth: true
        // }
      },
      {
        path: 'sub-menu-2',
        name: 'Sub Menu 2',
        component: Blank,
        // meta: {
        //   requiresAuth: true
        // }
      },
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard,
        // meta: {
        //   requiresAuth: true
        // }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    // meta: {
    //   requiresUnauth: true
    // }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// const authStore = useAuthStore()

router.beforeEach((to, from, next) => {
  // // if (to.meta.requiresAuth && !authStore.token) {
  // //   next('/login')
  // // // } else if (to.meta.requiresUnauth && !!authStore.token) {
  // //   next('/')
  // // } else {
    next()
  // }
})

export default router
