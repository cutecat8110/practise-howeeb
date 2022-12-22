import { createI18n } from 'vue-i18n'
import zh from '~/locales/zh.json'

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'zh',
    messages: {
      zh
    }
  })
  nuxtApp.vueApp.use(i18n)
})