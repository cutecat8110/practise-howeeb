<template lang="pug">
.root 
 .container
    .row
        .col-2
            div
        .col-2
            div
        .col-2
            div
        .col-2
            div
        .col-2
            div
        .col-2
            div

</template>

<script setup>
const route = useRoute()
const { name } = route
</script>

<style lang="sass" scoped>
.root
    height: 500px
    border: 1px solid red

    .col-2 div
        background: red
        opacity: 0.3
        height: 500px
</style>
