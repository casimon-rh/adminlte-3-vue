import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGooglePlus } from '@fortawesome/free-brands-svg-icons'
// import { Gatekeeper } from 'gatekeeper-client-sdk'
import Toast, { type PluginOptions } from 'vue-toastification'
import { createI18n } from 'vue-i18n'
import { VueWindowSizePlugin } from 'vue-window-size/option-api'
import { es } from '@/traslation/es'

library.add(faLock, faEnvelope, faFacebook, faGooglePlus)

// Gatekeeper.initialize('de378d9c-38c8-42c1-b961-9e4fa92d6a5e')

const options: PluginOptions = {
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: false
}
const i18n = createI18n({
  locale: 'es',
  messages: { es },
  fallbackLocale: 'es'
})

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(createPinia())
  .use(router)
  .use(VueWindowSizePlugin)
  .use(Toast, options)
  .use(i18n)
  .mount('#app')
