<template>
  <div v-if="!pending" class="card_swiper_root">
    <div class="row g-0">
      <div class="col-4"></div>
      <div class="col-4 text-center">
        <h2>{{ title }}</h2>
      </div>
      <div class="col-4 d-flex flex-row-reverse align-items-center">
        <button type="button" class="c_btn more">查看更多</button>
      </div>
      <div></div>
    </div>
    <swiper
      :loop="true"
      :slidesPerView="slidesPerView"
      :spaceBetween="24"
      :pagination="pagination"
      :navigation="navigation"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(card, index) in CardData.ret.data" :key="card.article_id">
        <NuxtLink :to="`/stories/${card.article_id}`" class="card_wrapper c_btn">
          <div class="img_wrapper">
            <div class="cover"></div>
            <img :src="`https://farm.yinunite.com/${card.image}`" alt="" />
          </div>
          <div class="title">
            {{ card.article_title }}
          </div>
          <div class="info_wrapper d-flex align-items-center justify-content-between">
            <div class="time">{{ $formatDate(card.article_begin_at) }}</div>
            <div class="read d-flex align-items-center">
              <Icon name="mdi:eye" class="me-1"></Icon>
              {{ card.article_scan_count }}
            </div>
          </div>
        </NuxtLink>
      </swiper-slide>
      <button type="button" class="c_btn next">
        <Icon name="fa6-solid:chevron-right"></Icon>
      </button>
      <button type="button" class="c_btn prev">
        <Icon name="fa6-solid:chevron-left"></Icon>
      </button>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectFade, Navigation, Pagination } from 'swiper'
const modules = [EffectFade, Navigation, Pagination]

const props = defineProps({
  title: String,
  categoryId: Number
})

/* 輪播設定 */
const pagination = {
  clickable: true
}
const navigation = {
  nextEl: '.next',
  prevEl: '.prev'
}
const slidesPerView = ref(3)
const onResize = () => {
  if (innerWidth < 768) {
    slidesPerView.value = 2
  } else {
    slidesPerView.value = 3
  }
}
onMounted(() => {
  onResize()
  addEventListener('resize', onResize)
})
onBeforeUnmount(() => removeEventListener('resize', onResize))

/* 取得 Banner */
const {
  data: CardData,
  pending,
  error,
  refresh
} = await useFetch('https://farm.yinunite.com/api/article/list', {
  method: 'POST',
  server: false,
  params: { article_category_id: props.categoryId }
})

const { $formatDate } = useNuxtApp()
</script>

<style lang="scss" scoped>
.card_swiper_root {
  border-bottom: 1px solid $gray-4;
}
.row {
  padding: 2.25rem 0 1rem;
  @include mobile {
    padding: 1rem 0 0.5rem;
  }
}

h2 {
  font-size: 1.75rem;
  @include mobile {
    font-size: 1rem;
  }
}
.more {
  color: $yellow-1;
  @include mobile {
    font-size: 0.75rem;
  }
  &:hover {
    color: $yellow-2;
  }
}

.swiper {
  width: 100%;
  padding-bottom: 5rem;
  @include mobile {
    padding-bottom: 2.25rem;
  }
}

.card_wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: auto;
  white-space: normal;
  cursor: pointer;
  @include mobile {
    font-size: 0.75rem;
  }
  &:hover {
    .cover {
      opacity: 1;
    }
    .title {
      color: $yellow-1;
    }
  }
}

.img_wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  border-radius: 0.875rem;

  aspect-ratio: 16 / 9;
  .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $gray-o-4;
    opacity: 0;
    transition: $transition-1;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
}

.card_wrapper img {
  display: block;
  width: 100%;
  height: 100%;

  object-fit: cover;
}

.title {
  display: -webkit-box;
  overflow: hidden;
  flex: 1;
  -webkit-box-orient: vertical;
  font-weight: 500;
  transition: $transition-1;

  -webkit-line-clamp: 2;
}

.info_wrapper {
  color: $gray-2;
}

.next,
.prev {
  position: absolute;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.75rem;
  height: 3.75rem;
  margin-top: calc((100% - 48px) / 3 / 16 * 9);
  border: 1px solid $gray-o-2;
  border-radius: 50%;
  background: $gray-o-2;
  font-size: 1.5rem;
  transform: translateY(-150%);
  @include pad {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1rem;
  }
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

:deep(.swiper-pagination-bullets) {
  bottom: 2rem;
  @include mobile {
    bottom: 0.5rem;
  }
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
