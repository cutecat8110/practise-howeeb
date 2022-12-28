<template>
  <div v-if="finishRender" class="banner_root">
    <div class="container-xl">
      <swiper
        :loop="true"
        :autoplay="autoplay"
        :spaceBetween="30"
        :effect="'fade'"
        :pagination="pagination"
        :navigation="navigation"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="banner in bannerData" :key="banner.id">
          <img :src="banner.download_url" alt="" />
          <h1 class="slogan">{{ `小男孩x不給糖就搗蛋 TωT` }}</h1>
        </swiper-slide>
        <button type="button" class="c_btn prev">
          <Icon name="fa6-solid:chevron-left"></Icon>
        </button>
        <button type="button" class="c_btn next">
          <Icon name="fa6-solid:chevron-right"></Icon>
        </button>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper'
const modules = [Autoplay, EffectFade, Navigation, Pagination]

const pagination = {
  clickable: true
}
const navigation = {
  nextEl: '.next',
  prevEl: '.prev'
}
const autoplay = {
  delay: 4500,
  disableOnInteraction: false
}

const {
  data: bannerData,
  pending,
  error,
  refresh
} = await useFetch('https://picsum.photos/v2/list?page=3&limit=5')

// const {
//   data: bannerData,
//   pending,
//   error,
//   refresh
// } = await useFetch('https://farm.yinunite.com/api/banner/list', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
// })
// if(pending){
//   console.log('data', bannerData)
// }
// console.log('error', error)

const finishRender = ref(false)
onMounted(() => {
  finishRender.value = true
})
</script>

<style lang="scss" scoped>
.banner_root {
  background: $gray-5;
  .container-xl {
    @include pad {
      padding: 0;
    }
  }
}

.swiper {
  width: 100%;
  @include mobile {
    aspect-ratio: 4 / 3;
  }

  aspect-ratio: 21 / 9;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;

  object-fit: cover;
}

.slogan {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  padding: 0 6rem;
  letter-spacing: 0.2em;
  color: $yellow-1;
  transform: translateY(-50%);
  @include mobile {
    padding: 0 0.75rem;
    font-size: 1rem;
  }
}

.next,
.prev {
  position: absolute;
  top: 50%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.75rem;
  height: 3.75rem;
  border: 1px solid $gray-o-2;
  border-radius: 50%;
  background: $gray-o-2;
  font-size: 1.5rem;
  color: $gray-1;
  transform: translateY(-50%);
  @include mobile {
    display: none;
  }
  &:hover {
    border-color: transparent;
    background: $gray-o-1;
    color: $white-1;
  }
}
.next {
  right: 0.75rem;
}
.prev {
  left: 0.75rem;
}

:deep(.swiper-pagination-bullet) {
  width: 0.875rem;
  height: 0.875rem;
  margin: 0 0.75rem;
  border: 1px solid $gray-o-2;
  background: $gray-o-2;
  text-align: center;
  opacity: 1;
  @include mobile {
    width: 0.5rem;
    height: 0.5rem;
    margin: 0 0.5rem;
  }
}

:deep(.swiper-pagination-bullet-active) {
  border-color: transparent;
  background: $gray-1;
}
</style>
