<template lang="pug">
.layout_root
    PageHeader
    main
        PageBanner
        slot
    PageFooter
</template>

<style lang="sass" scoped>
.layout_root
    overflow: hidden
    display: flex
    flex-direction: column
    min-height: 100vh

    main
        flex: 1
</style>
