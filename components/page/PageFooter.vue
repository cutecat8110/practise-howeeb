<template lang="pug">
footer
    .footer_top
        //- .container-md
        //-     .info-title 聯絡我們
        //-         .line
        //-     ul.info_wrapper
        //-         li.info(v-for="(info,index) in infos" :key="`info-${index}`")
        //-             .img_wrapper
        //-                 <img :src="info.icon" alt="seal.email" />
        //-             span {{info.info}}
    .footer_bottom.container-md 
        .row
            .col-4 我是分享
            ul.col-4.d-flex.justify-content-center.map
                li 關於我們
                li 創業相關
                li 借指登記
            .col-4.d-flex.flex-row-reverse © Copyright  All Rights reserved

</template>

<script setup>
const assets = useAssets()
const infos = ref([
    {
        icon: assets.email,
        info:'hahaha@youxiang.com'
    },
    {
        icon: assets.instagram,
        info:'xiaojingjing'
    },
    {
        icon: assets.facebook,
        info:'xiaojingjing'
    },
    {
        icon: assets.phone,
        info:'0979-344-566'
    }
])
</script>

<style lang="sass" scoped>

footer
    background: $gray-cultured

.footer_top
    border-bottom: 1px solid $gray-gainsboro
    .container-md
        display: flex
        align-items: center
        flex-direction: column
        gap: 2.5rem
        padding-top: 4rem
        padding-bottom: 4rem

.info-title
    display: flex
    align-items: center
    flex-direction: column
    gap: 1.5rem
    font-size: 2rem

    .line
        width: 5.375rem
        height: 3px
        background: #000000

.info_wrapper
    display: flex
    gap: 40px
.info
    display: flex
    gap: 12px
.img_wrapper
    display: flex
    align-items: center
    justify-content: center
    width: 1.5rem
    height: 1.5rem
    border-radius: 50%
    background: $black-eerie
.footer_bottom.container-md
    padding: 2.5rem 0
.map
    gap: 2rem

</style>
