import * as swiper from 'swiper'

import 'swiper/css'
import 'swiper/css/bundle'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      swiper: swiper
    }
  }
})
