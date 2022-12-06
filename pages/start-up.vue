<template lang="pug">
div 這裡是{{name}}
</template>

<script setup>
const route = useRoute()
const { name } = route
</script>
