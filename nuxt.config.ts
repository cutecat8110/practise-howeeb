// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "assets/scss/custom/_variables.scss";`
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
    {
      src: '@/plugins/swiper.client.js',
      ssr: false
    }
  ],
  css: ['~/assets/scss/main.scss']
})
