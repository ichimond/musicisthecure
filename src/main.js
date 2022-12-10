import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import router from './router/routes'

// PrimeVue components
import PrimeVue from 'primevue/config'
import Menubar from 'primevue/menubar'

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import 'primeflex/primeflex.css'                             //primeflex for grid and flexbox


const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.component('pvMenubar', Menubar)
app.mount('#app')
