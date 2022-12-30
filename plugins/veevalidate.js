import { defineRule, Form, Field, ErrorMessage, configure } from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zh_TW from '@vee-validate/i18n/dist/locale/zh_CN.json'

export default defineNuxtPlugin((nuxtApp) => {
  Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule])
  })
  configure({
    generateMessage: localize({ zh_TW })
  })
  setLocale('zh_TW')
  nuxtApp.vueApp.component('VForm', Form)
  nuxtApp.vueApp.component('VField', Field)
  nuxtApp.vueApp.component('VErrorMessage', ErrorMessage)
})
