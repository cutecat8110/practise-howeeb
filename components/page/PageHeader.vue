<template>
  <header>
    <nav class="navbar navbar-expand-xl p-0">
      <div class="container-md">
        <NuxtLink class="navbar-brand" to="/"><img src="/img/logo.png" alt="logo" /></NuxtLink
        ><button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li v-for="(link, index) in navbar" :key="`navbar-link-${index}`">
              <NuxtLink class="c_btn page-nav-link p-2" :to="link.path">{{ link.name }}</NuxtLink>
            </li>
            <li>
              <div class="search-wrapper c_btn p-2">
                <Icon name="fa:search"></Icon>
              </div>
            </li>
            <li>
              <div class="c_btn contact p-3">聯絡我們</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const navbar = ref([
  {
    name: '最新消息',
    path: '/news'
  },
  {
    name: '關於我們',
    path: '/about'
  },
  {
    name: '創業相關',
    path: '/start-up'
  },
  {
    name: '借址登記',
    path: '/register'
  },
  {
    name: '共享空間',
    path: '/co-work'
  },
  {
    name: '其他項目',
    path: '/other'
  },
  {
    name: '工商登記',
    path: '/business'
  }
])
</script>

<style lang="scss" scoped>
header {
  border-bottom: $gray-4 1px solid;
}
.navbar-nav {
  align-items: center;
  gap: 1rem;
  @include mobile {
    gap: 0;
  }
}
.c_btn {
  color: $gray-2;

  &.router-link-active,
  &:hover {
    font-weight: 500;
    color: $yeollow-1;
  }
}

.search-wrapper {
  display: flex;
  align-items: center;
}

.contact {
  display: flex;
  align-items: center;
  height: 60px;
  background: $yeollow-1;
  color: #ffffff;

  &:hover {
    background: $yeollow-2;
    font-weight: 500;
    color: #ffffff;
  }
}
</style>
