<template lang="pug">
section.list_root.container-md
    .title_wrapper.row.pt-5.pb-4
        .col-4
        .col-4
            h2.text-center {{props.title}}
        .col-4.d-flex.flex-row-reverse.align-items-center
            NuxtLink.c_btn(to='/') 查看更多
    #cards.carousel.slide
        .carousel-indicators
            button(
                v-for="(item,index) in cards"
                :key="index"
                type='button'
                data-bs-target='#cards'
                :data-bs-slide-to='index'
                aria-current='true' :aria-label='`Slide ${index+1}`'
                :class="index==0?'active':''"
            )
        .carousel-inner
            .carousel-item(
                v-for="(card,index) in cards"
                :key="index"
                :class="index==0?'active':''"
            )
                .row
                    .col-4(v-for="item in card" :key="item.id")
                        img(src='https://picsum.photos/200/300' alt='...')
                        div {{item.text}}
                        div {{item.time}}
                        div {{item.read}}

            button.carousel-control-prev(type='button' data-bs-target='#cards' data-bs-slide='prev')
                .con_wrapper
                    Icon(name="mdi-light:chevron-left")
            button.carousel-control-next(type='button' data-bs-target='#cards' data-bs-slide='next')
                .con_wrapper
                    Icon(name="mdi-light:chevron-right")
</template>

<script setup>
const props = defineProps(['title'])

const getRandom = (x) => {
  return Math.floor(Math.random() * x) + 1
}

const cards = ref([
  [
    {
      text: '找經丟枝朱但穴吹書晚九朱了早止來和愛，枝朱但穴吹書朱了早止，想告七交但蛋別找經找經丟枝',
      time: 1669975146,
      read: getRandom(1000)
    },
    {
      text: '找經丟枝朱但穴吹書晚九朱了早止來和愛，枝朱但穴吹書朱了早止，想告七交但蛋別找經找經丟枝',
      time: 1669975146,
      read: getRandom(1000)
    },
    {
      text: '找經丟枝朱但穴吹書晚九朱了早止來和愛，枝朱但穴吹書朱了早止，想告七交但蛋別找經找經丟枝',
      time: 1669975146,
      read: getRandom(1000)
    },
    {
      text: '找經丟枝朱但穴吹書晚九朱了早止來和愛，枝朱但穴吹書朱了早止，想告七交但蛋別找經找經丟枝',
      time: 1669975146,
      read: getRandom(1000)
    },
    {
      text: '找經丟枝朱但穴吹書晚九朱了早止來和愛，枝朱但穴吹書朱了早止，想告七交但蛋別找經找經丟枝',
      time: 1669975146,
      read: getRandom(1000)
    },
    {
      text: '找經丟枝朱但穴吹書晚九朱了早止來和愛，枝朱但穴吹書朱了早止，想告七交但蛋別找經找經丟枝',
      time: 1669975146,
      read: getRandom(1000)
    }
  ],
  [
    {
      text: '找經丟枝朱但穴吹書晚九朱了早止來和愛，枝朱但穴吹書朱了早止，想告七交但蛋別找經找經丟枝',
      time: 1669975146,
      read: getRandom(1000)
    },
    {
      text: '找經丟枝朱但穴吹書晚九朱了早止來和愛，枝朱但穴吹書朱了早止，想告七交但蛋別找經找經丟枝',
      time: 1669975146,
      read: getRandom(1000)
    },
    {
      text: '找經丟枝朱但穴吹書晚九朱了早止來和愛，枝朱但穴吹書朱了早止，想告七交但蛋別找經找經丟枝',
      time: 1669975146,
      read: getRandom(1000)
    },
    {
      text: '找經丟枝朱但穴吹書晚九朱了早止來和愛，枝朱但穴吹書朱了早止，想告七交但蛋別找經找經丟枝',
      time: 1669975146,
      read: getRandom(1000)
    },
    {
      text: '找經丟枝朱但穴吹書晚九朱了早止來和愛，枝朱但穴吹書朱了早止，想告七交但蛋別找經找經丟枝',
      time: 1669975146,
      read: getRandom(1000)
    },
    {
      text: '找經丟枝朱但穴吹書晚九朱了早止來和愛，枝朱但穴吹書朱了早止，想告七交但蛋別找經找經丟枝',
      time: 1669975146,
      read: getRandom(1000)
    }
  ]
])

const onResize = ()=>{
    console.log('resize')
}
onMounted(()=>{
    window.addEventListener('resize', onResize)
})
onBeforeUnmount(()=>{
    window.removeEventListener('resize', onResize)
})
</script>

<style lang="sass" scoped>
.banner_root
    background: $gray-cultured
.container-md
    @include mobile
        padding-right: 0
        padding-left: 0
.carousel-item
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
