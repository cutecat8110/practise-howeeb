import dayjs from 'dayjs'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      formatDate: (time) => {
        return dayjs.unix(time).format('YYYY-MM-DD')
      }
    }
  }
})