<template>
  <!-- data-bs-ride="carousel" -->
  <div id="recipeCarousel" class="carousel slide test container-md">
    <div class="carousel-inner" role="listbox">
      <div
        v-for="(card, index) in lists"
        :key="index"
        class="carousel-item"
        :class="index == 0 ? 'active' : ''"
      >
        <div class="card">
          <div class="card-img">
            <img :src="`//via.placeholder.com/500x400/31f?text=${index + 1}`" class="img-fluid" />
          </div>
          <div class="card-img-overlay">Slide {{ index + 1 }}</div>
          <div>{{ card.read }}</div>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev bg-transparent w-aut"
      href="#recipeCarousel"
      role="button"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </a>
    <a
      class="carousel-control-next bg-transparent w-aut"
      href="#recipeCarousel"
      role="button"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </a>
  </div>
</template>

<script setup>
const getRandom = (x) => {
  return Math.floor(Math.random() * x) + 1
}
const { $dayjs } = useNuxtApp()


const lists = ref(
  new Array(10).fill(null).map(() => {
    return { text: '', time: $dayjs(1669975146), read: getRandom(1000) }
  })
)

onMounted(() => {
  let items = document.querySelectorAll('.test .carousel-item')
  items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
      if (!next) {
        next = items[0]
      }
      let cloneChild = next.cloneNode(true)
      el.appendChild(cloneChild.children[0])
      next = next.nextElementSibling
    }
  })
})
</script>

<style lang="scss" scoped>
.carousel-item {
  gap: 1.5rem;
}

.card {
  flex: 1;
}

@media (max-width: 767px) {
  .carousel-inner .carousel-item > div:last-child {
    display: none;
  }
}

.carousel-inner .carousel-item.active,
.carousel-inner .carousel-item-next,
.carousel-inner .carousel-item-prev {
  display: flex;
}

/* medium and up screens */
@media (min-width: 768px) {
  .carousel-inner .carousel-item-end.active,
  .carousel-inner .carousel-item-next {
    transform: translateX(calc((100% - 3rem) / 3 + 1.5rem));
    // opacity: 0;
  }

  .carousel-inner .carousel-item-start.active,
  .carousel-inner .carousel-item-prev {
    transform: translateX(calc((3rem - 100%) / 3 - 1.5rem));
    // opacity: 0;
  }
}

.carousel-inner .carousel-item-end,
.carousel-inner .carousel-item-start {
  transform: translateX(0);
}
</style>
