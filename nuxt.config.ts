// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "assets/scss/custom/_variables.scss";`
        }
      }
    },
  },
  modules: ['nuxt-icon', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  plugins: [
    {
      src: '@/plugins/bootstrap.client.js',
      ssr: false
    },
    {
      src: '@/plugins/swiper.client.js',
      ssr: false
    },
    {
      src: '@/plugins/loading.client.js',
      ssr: false
    },
    {
      src: '@/plugins/i18n.js',
      ssr: false
    },
    {
      src: '@/plugins/dayjs.js',
      ssr: false
    },
    {
      src: '@/plugins/veevalidate.js',
      ssr: false
    }
  ],
  css: ['~/assets/scss/main.scss']
})
