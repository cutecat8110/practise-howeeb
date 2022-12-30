<template>
  <div v-if="!pending" class="card_list_root">
    <div class="row g-0">
      <div class="col-4"></div>
      <div class="col-4 text-center">
        <h2>{{ title }}</h2>
      </div>
      <div class="col-4"></div>
    </div>
    <div class="list_wrapper">
      <NuxtLink
        :to="`/stories/${card.article_id}`"
        class="card_wrapper c_btn"
        v-for="(card, index) in CardData.ret.data"
        :key="card.article_id"
      >
        <div class="d-flex flex-column">
          <div class="title">
            {{ card.article_title }}
          </div>
          <div v-if="rwd" class="summary">
            {{ card.article_summary }}
          </div>
          <div class="info_wrapper d-flex align-items-center justify-content-between mt-auto">
            <div class="time">{{ $formatDate(card.article_begin_at) }}</div>
            <div class="read d-flex align-items-center">
              <Icon name="mdi:eye" class="me-1"></Icon>
              {{ card.article_scan_count }}
            </div>
          </div>
        </div>
        <div class="img_wrapper">
          <div class="cover"></div>
          <img :src="`https://farm.yinunite.com/${card.image}`" alt="" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  categoryId: Number
})

/* 取得佔位圖 */
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

/* RWD */
const rwd = ref(true)
const onResize = () => {
  if (innerWidth < 768) {
    rwd.value = false
  } else {
    rwd.value = true
  }
}
onMounted(() => {
  onResize()
  addEventListener('resize', onResize)
})
onBeforeUnmount(() => removeEventListener('resize', onResize))

/* 隱藏圖片載入過程 */
const finishRender = ref(false)
onMounted(() => {
  finishRender.value = true
})

const { $formatDate } = useNuxtApp()
</script>

<style lang="scss" scoped>
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
    z-index: -1;
    width: 100%;
    height: 100%;
    background: $gray-o-4;
    opacity: 0;
    transition: $transition-1;
  }
  img {
    position: relative;
    z-index: -2;
    display: block;
    width: 100%;
    height: 100%;
    transition: $transition-1;

    object-fit: cover;
  }
}

.list_wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.25rem 3rem;
  @include pad {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  @include mobile {
    gap: 1.25rem;
  }
}
.card_wrapper {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  white-space: normal;
  cursor: pointer;
  @include pad {
    grid-template-columns: 3fr 1fr;
  }
  @include mobile {
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
    font-size: 0.75rem;
  }

  &:hover {
    .cover {
      opacity: 1;
    }
    .title {
      color: $yellow-1;
    }

    .summary {
      color: $yellow-1;
      opacity: 0.7;
    }
  }
}

.title {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  font-weight: 500;
  transition: $transition-1;
  @include mobile {
    font-size: 0.75rem;

    -webkit-line-clamp: 2;
  }

  -webkit-line-clamp: 1;
}
.summary {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  color: $gray-2;
  transition: $transition-1;

  -webkit-line-clamp: 2;
}

.info_wrapper {
  color: $gray-2;
}
</style>
