<template>
  <NuxtLink class="card_wrapper c_btn">
    <div class="img_wrapper">
      <div class="cover"></div>
      <img :src="imgUrl" alt="" />
    </div>
    <div class="title">
      {{ title }}
    </div>
    <div class="info_wrapper d-flex align-items-center justify-content-between">
      <div class="time">{{ day }}</div>
      <div class="read d-flex align-items-center">
        <Icon name="mdi:eye" class="me-1"></Icon>
        {{ count }}
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  imgUrl: {
    type: String,
    default: 'https://picsum.photos/id/119/3264/2176'
  },
  title: {
    type: String,
    default:
      '匂丼辻込凧杣枠畑栃栂峠俣籾畠雫笹塀椙硲蛯喰搾榊働糀鞆槇樫鴫噺簗麿匂丼辻込凧杣枠畑栃栂峠俣籾畠雫笹塀椙硲蛯喰搾榊働糀鞆槇樫鴫噺簗麿匂丼辻込凧杣枠畑栃栂峠俣籾畠雫笹塀椙硲蛯喰搾榊働糀鞆槇樫鴫噺簗麿'
  },
  count: {
    type: Number,
    default: 235
  },
  time: {
    type: Number,
    default: 1671604148
  }
})

const { $formatDate } = useNuxtApp()
const day = $formatDate(props.time)
</script>

<style lang="scss" scoped>
.card_wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: auto;
    white-space: normal;
    cursor: pointer;
    @include mobile {
        font-size: 0.75rem;
    }
    &:hover {
        .cover {
            opacity: 1;
        }
        .title {
            color: $yellow-1;
        }
    }
}

.img_wrapper {
    position: relative;
    overflow: hidden;
    width: 100%;
    border-radius: 0.875rem;

    aspect-ratio: 16 / 9;
    .cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: $gray-o-4;
        opacity: 0;
        transition: $transition-1;
    }
    img {
        display: block;
        width: 100%;
        height: 100%;

        object-fit: cover;
    }
}

.card_wrapper img {
    display: block;
    width: 100%;
    height: 100%;

    object-fit: cover;
}

.title {
    display: -webkit-box;
    overflow: hidden;
    flex: 1;
    -webkit-box-orient: vertical;
    font-weight: 500;
    transition: $transition-1;

    -webkit-line-clamp: 2;
}

.info_wrapper {
    color: $gray-2;
}
</style>
