<template>
  <div class="banner_root">
    <div class="container-xl">
      <swiper
        :loop="true"
        :spaceBetween="30"
        :pagination="pagination"
        :navigation="navigation"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="banner in bannerData" :key="banner.id">
          <img :src="banner.download_url" alt="" />
          <h1 class="slogan">不給糖，就導彈！</h1>
        </swiper-slide>
        <button type="button" class="c_btn next d-xl-block d-none">
          <Icon name="bi:chevron-right"></Icon>
        </button>
        <button type="button" class="c_btn prev d-xl-block d-none">
          <Icon name="bi:chevron-left"></Icon>
        </button>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'
const modules = [Navigation, Pagination]

const pagination = {
  clickable: true
}

const navigation = {
  nextEl: '.next',
  prevEl: '.prev'
}

const {
  data: bannerData,
  pending,
  error,
  refresh
} = await useFetch('https://picsum.photos/v2/list?page=3&limit=5')
</script>

<style lang="scss">
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
  height: 540px;
  @include pad {
    height: 300px;
  }
  @include mobile {
    height: 156px;
  }
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
  color: $yeollow-1;
  transform: translateY(-50%);
  @include mobile {
    font-size: 1rem;
    padding: 0 0.75rem;
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
}
.next {
  right: 0.75rem;
}
.prev {
  left: 0.75rem;
}

.swiper-pagination-bullet {
  width: 0.875rem;
  height: 0.875rem;
  margin: 0 0.75rem;
  background: $gray-4;
  text-align: center;
  opacity: 1;
  @include mobile {
    width: 0.5rem;
    height: 0.5rem;
    margin: 0 0.5rem;
  }
}

.swiper-pagination-bullet-active {
  background: $gray-1;
}
</style>
