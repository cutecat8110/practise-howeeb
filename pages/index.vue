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
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'home'
})
const categories = [
  {
    article_category_id: 10,
    article_category_name: '最新消息'
  },
  {
    article_category_id: 20,
    article_category_name: '創業相關'
  },
  {
    article_category_id: 30,
    article_category_name: '借址登記'
  },
  {
    article_category_id: 40,
    article_category_name: '共享空間'
  },
  {
    article_category_id: 50,
    article_category_name: '工商登記'
  }
]
const categoryLast = {
  article_category_id: 60,
  article_category_name: '其他項目'
}
</script>
