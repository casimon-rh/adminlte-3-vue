import { defineStore } from 'pinia'
import { calculateWindowSize } from '@/utils/helpers'

import {
  NAVBAR_DARK_VARIANTS,
  NAVBAR_LIGHT_VARIANTS,
  SIDEBAR_DARK_SKINS,
  SIDEBAR_LIGHT_SKINS
} from '@/utils/themes'

export const useUIStore = defineStore({
  id: 'ui',
  state: () => ({
    _darkMode: false,
    _navbarVariant: 'navbar-light',
    _sidebarSkin: 'sidebar-dark-primary',
    _menuSidebarCollapsed: false,
    _controlSidebarCollapsed: true,
    _screenSize: calculateWindowSize(window.innerWidth)
  }),
  getters: {
    darkModeSelected: (state): boolean => state._darkMode,
    menuSidebarCollapsed: (state): boolean => state._menuSidebarCollapsed,
    controlSidebarCollapsed: (state): boolean => state._controlSidebarCollapsed,
    screenSize: (state) => state._screenSize,
    navbarVariant: (state): string => state._navbarVariant,
    sidebarSkin: (state): string => state._sidebarSkin
  },
  actions: {
    toggleDarkMode(): void {
      this._darkMode = !this._darkMode
      if (this._darkMode) {
        this._navbarVariant = NAVBAR_DARK_VARIANTS[0].value
        this._sidebarSkin = SIDEBAR_DARK_SKINS[0].value
      } else {
        this._navbarVariant = NAVBAR_LIGHT_VARIANTS[0].value
        this._sidebarSkin = SIDEBAR_LIGHT_SKINS[0].value
      }
    },
    toggleMenuSidebar(): void {
      this._menuSidebarCollapsed = !this._menuSidebarCollapsed
    },
    toggleControlSidebar(): void {
      this._controlSidebarCollapsed = !this._controlSidebarCollapsed
    },
    setWindowSize(payload: string): void {
      this._screenSize = payload
    },
    setNavbarVariant(payload: string): void {
      if (this._darkMode) {
        this._navbarVariant = payload || NAVBAR_DARK_VARIANTS[0].value
      } else {
        this._navbarVariant = payload || NAVBAR_LIGHT_VARIANTS[0].value
      }
    },
    setSidebarSkin(payload: string): void {
      if (this._darkMode) {
        this._sidebarSkin = payload || SIDEBAR_DARK_SKINS[0].value
      } else {
        this._sidebarSkin = payload || SIDEBAR_LIGHT_SKINS[0].value
      }
    }
  }
})