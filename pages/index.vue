<template>
  <div class="home_root container-xl">
    <CardSwiper
      v-for="(category, index) in categories"
      :key="index"
      :title="category.article_category_name"
      :categoryId="category.article_category_id"
    />
    <CardList
      :title="categoryLast.article_category_name"
      :categoryId="categoryLast.article_category_id"
    />
    <div class="more_wrapper">
      <div class="c_btn more">查看更多文章</div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'home'
})
const categories = [
  {
    article_category_id: 1,
    article_category_name: '最新消息'
  },
  {
    article_category_id: 2,
    article_category_name: '創業相關'
  },
  {
    article_category_id: 3,
    article_category_name: '借址登記'
  },
  {
    article_category_id: 4,
    article_category_name: '共享空間'
  },
  {
    article_category_id: 5,
    article_category_name: '工商登記'
  }
]
const categoryLast = {
  article_category_id: 6,
  article_category_name: '其他項目'
}
</script>

<style lang="scss" scoped>
.more_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 3.25rem 0;
  @include mobile {
    padding: 2rem 0 1.5rem;
  }

  .more {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 3rem;
    border: 1px solid $yellow-1;
    border-radius: 50rem;
    font-size: 1.125rem;
    color: $yellow-1;
    @include mobile {
      font-size: 0.75rem;
    }
    &:hover {
      background: $yellow-1;
      color: $white-1;
    }
  }
}
</style>
