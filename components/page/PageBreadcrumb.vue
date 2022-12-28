<template>
  <div class="container-xl">
    <nav aria-label="breadcrumb">
      <ol>
        <li>
          <NuxtLink to="/" class="c_btn">{{ $t('index') }}</NuxtLink>
        </li>
        <template v-if="stories">
          <li class="link_wrapper" aria-current="page">
            <Icon name="fa6-solid:chevron-right" class="icon"></Icon>
            <div to="/" class="c_btn">
              {{ $t(stories) }}
            </div>
          </li>
        </template>
      </ol>
    </nav>
  </div>
</template>

<script setup>
const route = useRoute()

const stories = computed(() => {
  switch (route.name) {
    case 'slug':
      return '404'
    case 'stories-id':
      return ''
    case 'category-id':
      return route.params.id
    default:
      return route.name
  }
})
</script>

<style lang="scss" scoped>
.container-xl {
  padding-top: 2.25rem;
  padding-bottom: 2.25rem;
}
ol,
.link_wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  font-size: 0.75rem;
  color: $gray-3;
}
.c_btn {
  font-size: 1.125rem;
  color: $gray-2;
  @include mobile {
    font-size: 0.875rem;
  }
}
</style>
