<template>
  <div class="about_root container-xl">
    <section>
      <h1>關於我們</h1>
      <p>
        我隻波歡女幼屋三實兩來服子刀風升念子入，東服肖斤能校詞卜火布手車尤加「丟辛」月進衣少她進風昔何包麼筆喜，想目叫星門止寸能古信正弟上息圓兩訴，蝴菜師花壯心會多斗吹「古空門麼羽尺申我道瓜」回現更吃左喝。
      </p>
      <p>
        抄春道士門色歌跟乾言，生書午得丟收西占扒斤由坐同豆甲女母肉月婆。旁許第幫北唱乞跑就刃六走長昌。八呀見昔洋邊。
      </p>
      <p>
        要圓點點春具汁兩息央几世何穴耳孝裏內，月香吃果，們澡女六旁毛光飽春收叫休對蝶父前犬成星「助草晚愛而老浪」羽朵條旦？玩泉詞工但小即勿坡息因但、晚行秋說母。
      </p>
    </section>
    <section>
      <h2>理念</h2>
      <p>
        我隻波歡女幼屋三實兩來服子刀風升念子入，東服肖斤能校詞卜火布手車尤加「丟辛」月進衣少她進風昔何包麼筆喜，想目叫星門止寸能古信正弟上息圓兩訴，蝴菜師花壯心會多斗吹「古空門麼羽尺申我道瓜」回現更吃左喝。
      </p>
    </section>
    <div class="img_wrapper">
      <img src="https://picsum.photos/1920/1080" alt="aboutImg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1,
h2 {
    padding-bottom: 1rem;
    font-size: 1.75rem;
    @include mobile {
        padding-bottom: 0;
        font-size: 1rem;
    }
}
section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.about_root {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 4.5rem;
    @include mobile {
        gap: 1rem;
    }
}

.img_wrapper {
    overflow: hidden;
    width: 100%;

    aspect-ratio: 21 / 9;

    img {
        display: block;
        width: 100%;
        height: 100%;

        object-fit: cover;
    }
}
</style>
