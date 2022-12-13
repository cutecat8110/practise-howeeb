<template>
  <div class="header_root">
    <nav class="navbar navbar-expand-xl fixed-top p-0">
      <div class="container-xl">
        <div class="navbar_content \">
          <div class="container-xl">
            <NuxtLink class="navbar-brand" to="/"
              ><img class="logo" src="/img/logo.png" alt="logo"
            /></NuxtLink>
            <div class="navbar-toggler">
              <NuxtLink class="c_btn" to="/contact">聯絡我們</NuxtLink>
              <button
                class="hamburger_wrapper"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <div class="hamburger" :class="active">
                  <span class="line"></span>
                  <span class="line"></span>
                  <span class="line"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div
          class="offcanvas offcanvas-top"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-body">
            <ul class="navbar-nav ms-auto">
              <li class="d-block d-xl-none">
                <button @click="modalShow" type="button" class="c_btn p-2">搜尋</button>
              </li>
              <li v-for="(link, index) in navbar" :key="`navbar-link-${index}`">
                <NuxtLink class="c_btn page-nav-link p-2" :to="link.path">{{ link.name }}</NuxtLink>
              </li>
              <li class="d-none d-xl-block">
                <div class="search-wrapper c_btn p-2">
                  <Icon name="fa:search"></Icon>
                </div>
              </li>
              <li class="d-none d-xl-block">
                <NuxtLink class="c_btn contact p-3" to="/contact">聯絡我們</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div
      class="modal fade"
      id="exampleModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
        </div>
      </div>
    </div>
  </div>
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

const { $bootstrap } = useNuxtApp()

/* 搜尋 */
let myModal = ref(null)
onMounted(() => {
  const searchModal = document.getElementById('exampleModal')
  myModal = new $bootstrap.Modal(searchModal)
})
const modalShow = () => {
  myModal.show()
}

/* 關閉選單 */
const rotate = useRoute()
const active = ref('')
onMounted(() => {
  const navList = document.getElementById('offcanvasNavbar')
  const bsOffcanvas = new $bootstrap.Offcanvas(navList)
  watch(rotate, () => {
    bsOffcanvas.hide()
  })

  /* 漢堡條動畫 */
  navList.addEventListener('hide.bs.offcanvas', function () {
    active.value = ''
  })
  navList.addEventListener('show.bs.offcanvas', function () {
    active.value = 'is-active'
  })
})
</script>

<style lang="scss" scoped>
.navbar {
    border-bottom: $gray-4 1px solid;
    background: $white;
    @include pad {
        border-bottom: 0;
    }
}

.logo {
    @include mobile {
        width: 6rem;
    }
}

.navbar_content {
    @include pad {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1050;
        width: 100%;
        height: 3.75rem;
        border-bottom: $gray-4 1px solid;
        background: $white;

        .navbar-brand {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .container-xl {
            display: flex;
            justify-content: space-between;
            height: 100%;
        }
    }
}

.navbar-toggler {
    @include pad {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0;
        border: 0;
    }
    @include mobile {
        gap: 0.5rem;
    }

    .c_btn {
        padding: 0.5rem 1.25rem;
        border: 1px solid $yeollow-1;
        border-radius: 50rem;
        font-size: 1rem;
        color: $yeollow-1;
        @include mobile {
            font-size: 0.75rem;
        }

        &.router-link-active,
        &:hover {
            background: $yeollow-1;
            color: $white;
        }
    }
}

.hamburger_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;

    &:hover .line {
        background-color: $yeollow-1;
    }
    .line {
        display: block;
        width: 24px;
        height: 2px;
        margin: 6px auto;
        border-radius: 2px;
        background-color: $gray-2;
        transition: $transition-1, transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        @include mobile {
            width: 20px;
            margin: 4px auto;
        }
    }

    .is-active .line:nth-child(2) {
        opacity: 0;
    }

    .is-active .line:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
        @include mobile {
            transform: translateY(6px) rotate(45deg);
        }
    }

    .is-active .line:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
        @include mobile {
            transform: translateY(-6px) rotate(-45deg);
        }
    }
}

.offcanvas {
    top: 3.75rem;
    height: fit-content;
}

.navbar-nav {
    align-items: center;
    gap: 1rem;
    @include pad {
        align-items: stretch;
    }
    @include mobile {
        gap: 0;
    }

    .search-wrapper {
        display: flex;
        align-items: center;
    }
    .c_btn {
        color: $gray-2;

        &.router-link-active,
        &:hover {
            font-weight: 500;
            color: $yeollow-1;
        }
    }

    .contact {
        display: flex;
        align-items: center;
        height: calc(3.75rem - 1px);
        background: $yeollow-1;
        color: $white;

        &.router-link-active,
        &:hover {
            background: $yeollow-2;
            font-weight: 500;
            color: $white;
        }
    }

    li {
        @include pad {
            border-bottom: 1px solid $gray-5;
        }
        @include mobile {
            font-size: 0.75rem;
        }
    }
}

</style>
