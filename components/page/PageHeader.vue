<template lang="pug">
header
    nav.navbar.navbar-expand-xl.p-0
        .container-md
            NuxtLink.navbar-brand(to='/')
                img(src='/img/logo.png' alt="LOGO")
            button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation')
                span.navbar-toggler-icon
            #navbarNav.collapse.navbar-collapse
                ul.navbar-nav.ms-auto
                    li(v-for="(link,index) in navbar" :key="`navbar-link-${index}`")
                        NuxtLink.c_btn.page-nav-link.p-2(:to='link.path') {{link.name}}
                    li
                        .search-wrapper.c_btn.p-2
                                Icon(name="fa:search")
                    li
                        .c_btn.contact.p-3 聯絡我們
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

<style lang="sass" scoped>

header
    border-bottom: $gray-gainsboro 1px solid
.navbar-nav
    align-items: center
    gap: 1rem
    @include mobile
        gap: 0
.c_btn
    color: $gray-750

    &.router-link-active,
    &:hover
        font-weight: 500
        color: $color-main

.search-wrapper
    display: flex
    align-items: center

.contact
    display: flex
    align-items: center
    height: 60px
    background: $color-main
    color: #FFFFFF

    &:hover
        background: $yeollow-mango
        font-weight: 500
        color: #FFFFFF
        
</style>
