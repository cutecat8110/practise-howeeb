<template>
  <div class="page_scroll_top_root">
    <div class="container-xl">
      <Transition>
        <button v-if="hide" type="button" class="c_btn" @click="scrollTop">
          <Icon name="fa6-solid:chevron-up"></Icon>
        </button>
      </Transition>
    </div>
  </div>
</template>

<script setup>
const hide = ref(false)

const onScroll = () => {
  if (scrollY > innerHeight / 3) {
    hide.value = true
  } else {
    hide.value = false
  }
}
onMounted(() => {
  addEventListener('scroll', onScroll)
})
onBeforeUnmount(() => removeEventListener('scroll', onScroll))

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style lang="scss" scoped>
.page_scroll_top_root {
  position: fixed;
  bottom: 1.75rem;
  left: 0;
  z-index: 1030;
  width: 100%;
  pointer-events: none;
  @include pad {
    bottom: 1rem;
  }
}
.container-xl {
  display: flex;
  flex-direction: row-reverse;
}

.c_btn {
  width: 3.75rem;
  height: 3.75rem;
  margin-right: -1.75rem;
  border-radius: 50%;
  background: $gray-o-1;
  color: $white-1;
  pointer-events: auto;
  font-size: 1.5rem;
  @include pad {
    margin-right: 0;
  }
  @include mobile {
    width: 3rem;
    height: 3rem;
    font-size: 1rem;
  }
  &:hover {
    background: $gray-1;
    opacity: 0.7;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
