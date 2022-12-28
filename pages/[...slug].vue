<template>
  <div class="slug_root container-xl">
    <div class="slug_wrapper">
      <img :src="assets.error" alt="error-icon" />
      <div class="message">Page Not Found</div>
      <div class="error">404</div>
      <div class="tip">請點擊下面的按鈕回到首頁</div>
    </div>
    <button type="button" class="c_btn">回到首頁</button>
  </div>
</template>

<script setup>
const assets = useAssets()
</script>

<style lang="scss" scoped>
.slug_root {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2.75rem 0 5.5rem 0;
  @include pad {
    gap: 3.5rem;
  }
  @include mobile {
    gap: 2rem;
    padding: 0 0 2.5rem 0;
  }
}

.slug_wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.25rem;
  @include pad {
    gap: 1rem;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 9rem;
    transform: translate(calc(-100% - 0.75rem), 0);
    @include pad {
      width: 7.25rem;
    }
    @include mobile {
      width: 3.5rem;
    }
  }
}
.message {
  font-weight: 500;
  font-size: 3.25rem;
  color: $yellow-2;
  @include pad {
    font-size: 2.5rem;
  }
  @include mobile {
    font-size: 1.5rem;
  }
}
.error {
  font-weight: 600;
  font-size: 13.5rem;
  line-height: 1;
  @include pad {
    font-size: 11.25rem;
  }
  @include mobile {
    font-size: 6.25rem;
  }
}
.tip {
  font-size: 2rem;
  @include pad {
    font-size: 1.5rem;
  }
  @include mobile {
    font-size: 0.875rem;
  }
}
.c_btn {
  padding: 0.75rem 7rem;
  border-radius: 50rem;
  background: $yellow-2;
  font-weight: 600;
  font-size: 1.25rem;
  @include pad {
    padding: 0.75rem 4.5rem;
  }
  @include mobile {
    padding: 0.5rem 4rem;
    font-size: 0.75rem;
  }
}
</style>
