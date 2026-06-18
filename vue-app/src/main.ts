import './assets/main.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#fffaf7',
          surface: '#ffffff',
          primary: '#ff7d3b',
          secondary: '#17110d',
          accent: '#ffb56b',
          error: '#b00020',
          info: '#2196f3',
          success: '#4caf50',
          warning: '#fb8c00',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#17110d',
          surface: '#231a14',
          primary: '#ffb56b',
          secondary: '#fffaf7',
          accent: '#ff7d3b',
          error: '#cf6679',
          info: '#64b5f6',
          success: '#81c784',
          warning: '#ffb74d',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
  },
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
