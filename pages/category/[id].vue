<template>
  <div>這裡是{{ id }}</div>
</template>

<script setup>
const route = useRoute()
const { id } = route.params
</script>
