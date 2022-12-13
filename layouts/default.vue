<template lang="pug">
.layout_root
    header
        PageHeader
        PageBanner
    main
        slot
    PageFooter
</template>

<style lang="sass" scoped>
.layout_root
    overflow: hidden
    display: flex
    flex-direction: column
    min-height: 100vh
    padding-top: 3.75rem

    main
        flex: 1
</style>
