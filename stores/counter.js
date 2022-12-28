import { defineStore } from 'pinia'

export const useCounter = defineStore(
  'counter',
  () => {
    const privacy = ref(false)

    return {
      privacy
    }
  },
  {
    persist: {
      enabled: true,
      strategies: [
        {
          key: 'counter',
          storage: process.client ? sessionStorage : null
        }
      ]
    }
  }
)
