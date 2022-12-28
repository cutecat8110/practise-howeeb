<template>
  <div class="stories_root">
    <div class="story_wrapper container-xl">
      <div class="story_content">
        <div class="story_info">
          <h1>{{ id }} 休蝸貓讀且申衣子雲借同貓讀且燈</h1>
          <div class="tool_wrapper">
            <div class="tag_content">
              <div v-for="(tag, index) in tags" :key="index" class="c_btn tag">
                # {{ tag.name }}
              </div>
            </div>
            <div class="share_wrapper">
              <NuxtLink
                to="https://www.facebook.com/sharer/sharer.php?u=http://www.w3school.com.cn"
                target="_blank"
                class="c_btn share_fb"
              >
                <Icon name="simple-icons:facebook" class="icon"></Icon>
                分享
              </NuxtLink>
              <NuxtLink
                to="https://social-plugins.line.me/lineit/share?url=http://www.w3school.com.cn"
                target="_blank"
                class="c_btn share_line"
              >
                <Icon name="simple-icons:line" class="icon"></Icon>
                分享
              </NuxtLink>
            </div>
          </div>
          <div class="info_wrapper d-flex align-items-center justify-content-between">
            <div class="time">1945-8-6</div>
            <div class="read d-flex align-items-center">
              <Icon name="mdi:eye" class="me-1"></Icon>
              235
            </div>
          </div>
        </div>
        <div class="img_wrapper">
          <img src="https://picsum.photos/id/119/3264/2176" alt="" />
        </div>
        <div class="story">
          我隻波歡女幼屋三實兩來服子刀風升念子入，東服肖斤能校詞卜火布手車尤加「丟辛」月進衣少她進風昔何包麼筆喜，想目叫星門止寸能古信正弟上息圓兩訴，蝴菜師花壯心會多斗吹「古空門麼羽尺申我道瓜」回現更吃左喝。
          抄春道士門色歌跟乾言，生書午得丟收西占扒斤由坐同豆甲女母肉月婆。旁許第幫北唱乞跑就刃六走長昌。八呀見昔洋邊。
          要圓點點春具汁兩息央几世何穴耳孝裏內，月香吃果，們澡女六旁毛光飽春收叫休對蝶父前犬成星「助草晚愛而老浪」羽朵條旦？玩泉詞工但小即勿坡息因但、晚行秋說母。
          村壯訴房雲那戊植牠金第抄媽清飽音校成，同葉共水行聲和南二看婆，物足頭開共尺手，好門己聲禾裏牙對燈坐院元！次而至經風時門雄怎果哥種燈知雞耳，牙害詞車林同。
          我隻波歡女幼屋三實兩來服子刀風升念子入，東服肖斤能校詞卜火布手車尤加「丟辛」月進衣少她進風昔何包麼筆喜，想目叫星門止寸能古信正弟上。
        </div>
        <div class="tool_wrapper">
          <div class="tag_content">
            <div v-for="(tag, index) in tags" :key="index" class="c_btn tag"># {{ tag.name }}</div>
          </div>
          <div class="share_wrapper d-none d-md-flex">
            <NuxtLink
              to="https://www.facebook.com/sharer/sharer.php?u=http://www.w3school.com.cn"
              target="_blank"
              class="c_btn share_fb"
            >
              <Icon name="simple-icons:facebook" class="icon"></Icon>
              分享
            </NuxtLink>
            <NuxtLink
              to="https://social-plugins.line.me/lineit/share?url=http://www.w3school.com.cn"
              target="_blank"
              class="c_btn share_line"
            >
              <Icon name="simple-icons:line" class="icon"></Icon>
              分享
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="relative">
        <h2>相關文章</h2>
        <Card v-for="(item, index) in relatives" :key="index"></Card>
      </div>
    </div>
    <div class="more_wrapper">
      <div class="container-xl">
        <CardList :title="'閱讀更多'" :categoryId="60" />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { id } = route.params

const tags = new Array(7).fill({ name: '虛擬貨幣' })
const relatives = new Array(3).fill(1)

const openLine = () => {
  window.open(
    'https://social-plugins.line.me/lineit/share?url=http://www.w3school.com.cn',
    '_blank',
    'width=320,height=320'
  )
}

const openFb = () => {
  window.open('https://www.facebook.com/sharer/sharer.php?u=http://www.w3school.com.cn', '_blank')
}
</script>

<style lang="scss" scoped>
.story_wrapper {
  display: grid;
  grid-template-columns: 2fr 1px 1fr;
  gap: 3.375rem;
  @include pad {
    grid-template-columns: 1fr;
  }
}

.story_content {
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  padding-bottom: 3rem;
  @include mobile {
    gap: 1rem;
  }
}

.story_info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

h1 {
  font-weight: 600;
  font-size: 2.5rem;
  @include mobile {
    font-size: 1.25rem;
  }
}

.tool_wrapper {
  display: flex;
  justify-content: space-between;
}

.tag_content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  @include mobile {
    font-size: 0.75rem;
  }
}

.tag {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background: $yellow-3;
  font-size: 0.75rem;
  color: $yellow-1;
  transition: $transition-1;
  @include mobile {
    font-size: 0.75rem;
  }

  &:hover {
    background: $gray-4;
    color: $gray-1;
  }
}

.share_wrapper {
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  @include mobile {
    position: fixed;
    bottom: 1rem;
    left: 50%;
    z-index: 1030;
    overflow: hidden;
    gap: 0;
    border-radius: 1rem;
    background: $white-1;
    box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px rgba(60, 64, 67, 0.15);
    transform: translateX(-50%);
  }

  .share_fb,
  .share_line {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    height: 2rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    color: $white-1;
    @include mobile {
      height: 3rem;
      padding: 0 1rem;
      gap: 0.5rem;
    }
  }
  .share_fb {
    position: relative;
    background: $blue-1;
    @include mobile {
      background: $white-1;
      color: $blue-1;
      &::after {
        content: '';
        position: absolute;
        width: 1px;
        height: 1rem;
        background: $gray-2;
        right: 0;
        top: 1rem;
      }
    }
  }
  .share_line {
    background: $green-1;
    @include mobile {
      background: $white-1;
      color: $green-1;
    }
  }

  .icon {
    @include mobile {
      font-size: 1.5rem;
    }
  }
}

.img_wrapper {
  overflow: hidden;
  width: 100%;

  aspect-ratio: 16 / 9;

  img {
    display: block;
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
}

.story {
  @include mobile {
    font-size: 0.875rem;
  }
}

.line {
  background: $gray-4;
  @include pad {
    display: none;
  }
}

.relative {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 32px;
  @include pad {
    display: none;
  }
}

.more_wrapper {
  padding-bottom: 3.5rem;
  border-bottom: 1px solid $gray-4;
  background: $gray-5;
}
</style>
