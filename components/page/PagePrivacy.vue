<template>
  <div v-if="!counterStore.privacy" id="privacyTool" class="page_privacy_root">
    <div class="text_wrapper">
      當您使用我們的網站，即表示您同意我們使用cookie。
      <NuxtLink class="c_btn privacy" to="/privacy"> 隱私權政策 </NuxtLink>
    </div>
    <button type="button" class="c_btn tool" @click="privacyAgree">同意</button>
  </div>
</template>

<script setup>
import { useCounter } from '@/stores/counter'
const counterStore = useCounter()

const privacyAgree = () => {
  counterStore.privacy = true
}
</script>

<style lang="scss" scoped>
.page_privacy_root {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.75rem;
    width: 100%;
    padding: 1rem;
    background: $gray-4;
    font-size: 1.125rem;
    @include pad {
        font-size: 0.875rem;
    }
    @include mobile {
        font-size: 0.75rem;
    }
}

.text_wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    @include pad {
        gap: 0;
    }
}
.privacy {
    text-decoration: underline;
    color: $gray-2;
}

.tool {
    padding: 0.25rem 1rem;
    border-radius: 50rem;
    background: $yellow-1;
    color: $white-1;
}
</style>
