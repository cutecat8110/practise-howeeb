<template>
  <div class="container">
    <swiper
      :slidesPerView="3"
      :loop="true"
      :spaceBetween="30"
      :pagination="pagination"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <swiper-slide>Slide 10</swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'
const modules = [Navigation, Pagination]

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + '</span>'
  }
}
</script>

<style lang="scss">
.swiper {
  width: 100%;
  height: 500px;
}

.swiper-slide {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -ms-flex-align: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  height: calc((100% - 30px) / 2) !important;
  background: $white;
  text-align: center;
  font-size: 18px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;

  object-fit: cover;
}
.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  color: #000000;
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background: #007aff;
  color: $white;
}
</style>
