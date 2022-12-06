<template lang="pug">
.banner_root
    .container-md
        #banner.carousel.slide
            .carousel-indicators
                button(
                    v-for="(item,index) in banners"
                    :key="index"
                    type='button'
                    data-bs-target='#banner'
                    :data-bs-slide-to='index'
                    aria-current='true' :aria-label='`Slide ${index+1}`'
                    :class="index==0?'active':''"
                )
            .carousel-inner
                .carousel-item(
                    v-for="(item,index) in banners"
                    :key="index"
                    :class="index==0?'active':''"
                )
                    img.d-block.w-100.h-100(:src='`${item.download_url}?grayscale&blur=10`' alt='...')
                    .carousel-caption
                        h1 尋找投資機會降低韭菜率
                button.carousel-control-prev(type='button' data-bs-target='#banner' data-bs-slide='prev')
                    .con_wrapper
                        Icon(name="mdi-light:chevron-left")
                button.carousel-control-next(type='button' data-bs-target='#banner' data-bs-slide='next')
                    .con_wrapper
                        Icon(name="mdi-light:chevron-right")
</template>

<script setup>
const banners = ref(null)

const { data, pending, error, refresh } = await useFetch('https://picsum.photos/v2/list?limit=5')

banners.value = data.value
</script>

<style lang="sass" scoped>
.banner_root
    background: $gray-cultured
.container-md
    @include mobile
        padding-right: 0
        padding-left: 0
.carousel-item
    height: 540px
    img
        object-fit: cover
    .carousel-caption
        top: 50%
        bottom: 50%
        display: flex
        align-items: center
        transform: translateY(-50%)

        h1
            color: $color-main
.carousel-indicators
    button
        width: 14px
        height: 14px
        margin-right: 6px
        margin-left: 6px
        border-radius: 50%
.con_wrapper
    display: flex
    align-items: center
    justify-content: center
    width: 60px
    height: 60px
    border: 1px solid $gray-gainsboro
    border-radius: 50%
    background: #FFFFFF
    font-size: 56px
    color: $black-eerie

</style>
