import './assets/main.css'
import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n';

import App from './App.vue'
import router from './router'

//Importing Languages
import es from './locales/es.json'
import en from './locales/en.json'

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: {
        en: en,
        es: es,
    },

  });

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
