<template>
  <div>這裡是{{ name }}</div>
</template>

<script setup>
const route = useRoute()
const { name } = route
</script>
