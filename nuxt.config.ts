// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `@import "assets/scss/custom/_variables.sass"`
        }
      }
    }
  },
  modules: ['nuxt-icon'],
  plugins: [
    {
      src: '@/plugins/bootstrap.client.js',
      ssr: false
    },
  ],
  css: ['~/assets/scss/main.scss']
})
