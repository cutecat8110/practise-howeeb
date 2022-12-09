<template>
  <footer>
    <div class="footer_top">
      <div class="container-md">
        <div class="info-title">
          聯絡我們
          <div class="line"></div>
        </div>
        <ul class="info_wrapper">
          <li class="info" v-for="(info, index) in infos" :key="`info-${index}`">
            <div class="img_wrapper"><img :src="info.icon" alt="seal.email" /></div>
            <span>{{ info.info }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer_bottom container-md">
      <div class="logo_wrapper">
        <img src="/img/logo.png" alt="logo" />
      </div>
      <ul class="map">
        <li v-for="(link, index) in links" :key="`footer-link-${index}`">
          <NuxtLink class="c_btn" :to="link.path">{{ link.name }}</NuxtLink>
        </li>
      </ul>
      <div class="copy">© Copyright All Rights reserved</div>
    </div>
  </footer>
</template>

<script setup>
const assets = useAssets()
const infos = ref([
  {
    icon: assets.email,
    info: 'hahaha@youxiang.com'
  },
  {
    icon: assets.instagram,
    info: 'xiaojingjing'
  },
  {
    icon: assets.facebook,
    info: 'xiaojingjing'
  },
  {
    icon: assets.phone,
    info: '0979-344-566'
  }
])
const links = ref([
  { name: '關於我們', path: '/about' },
  { name: '創業相關', path: '/start-up' },
  { name: '借址登記', path: '/register' }
])
</script>

<style lang="scss" scoped>
footer {
    background: $gray-5;
}
.footer_top {
    border-bottom: 1px solid $gray-4;

    .container-md {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 2.5rem;
        padding-top: 3.75rem;
        padding-bottom: 3.75rem;
        @include mobile {
            gap: 0.75rem;
            padding-top: 1.25rem;
            padding-bottom: 1.25rem;
        }
    }
}

.info-title {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
    font-size: 2rem;
    @include pad {
        font-size: 1.5rem;
    }
    @include mobile {
        gap: 0.5rem;
        font-size: 1rem;
    }

    .line {
        width: 5.25rem;
        height: 3px;
        background: #000000;
        @include mobile {
            width: 3.75rem;
        }
        @include mobile {
            width: 2.625rem;
            height: 1.5px;
        }
    }
}

.info_wrapper {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 2.5rem;
    @include pad {
        grid-template-columns: repeat(2, 1fr);
    }
    @include mobile {
        gap: 0.75rem 1.25rem;
    }
}
.c_btn {
    padding: 0.25rem;
}
.info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    @include mobile {
        gap: 0.5rem;
        font-size: 0.75rem;
    }
}
.img_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: $gray-1;
}
.footer_bottom {
    display: flex;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    @include pad {
        align-items: center;
        flex-direction: column;
        gap: 1.5rem;
    }
    @include mobile {
        gap: 0.75rem;
        padding-top: 1.25rem;
        padding-bottom: 1.25rem;
        font-size: 0.75rem;
    }
}
.logo_wrapper {
    display: flex;
    align-items: center;
    flex: 1;
}

.map {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    gap: 2rem;
}

.copy {
    display: flex;
    align-items: center;
    flex: 1;
    flex-direction: row-reverse;
}
</style>
