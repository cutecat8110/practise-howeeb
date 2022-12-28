<template lang="pug">
#app_root(ref='app_root')
  NuxtLayout
    NuxtPage
</template>

<script setup>
// onMounted(() => {
//   useNuxtApp().$loading.show()
// })
import { useCounter } from '@/stores/counter'
const counterStore = useCounter()

const app_root = ref(null)

const paddingBottom = () => {
  const privacyTool = document.getElementById('privacyTool')
  if (!counterStore.privacy && privacyTool) {
    app_root.value.style.paddingBottom = `${privacyTool.offsetHeight}px`
  }
}
onMounted(() => {
  addEventListener('scroll', paddingBottom)
})
onBeforeUnmount(() => removeEventListener('scroll', paddingBottom))
</script>
