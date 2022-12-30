<template>
  <div class="privacy_root container-xl">
    <nav>
      <ul ref="navContent" class="nav_content">
        <li
          v-for="(privacy, index) in nav"
          :key="index"
          class="c_btn nav"
          @click="scroll(privacy.id)"
          :id="`${privacy.id}Point`"
          :class="privacy.selected"
        >
          {{ privacy.title }}
        </li>
      </ul>
    </nav>
    <div class="privacy_wrapper">
      <div ref="privacyContent" class="privacy_content">
        <section>
          <h1>
            <img :src="assets.privacy" alt="privacy" class="privacy" />
            隱私權政策
          </h1>
          <p>
            非常歡迎您光臨「<span class="text_yellow">https://.xxxxxxxxxx.com</span
            >」（以下簡稱本網站），為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：
          </p>
        </section>

        <section>
          <h2 id="scopeOf">一、隱私權保護政策的適用範圍</h2>
          <p>
            隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。
          </p>
        </section>

        <section>
          <h2 id="way">二、個人資料的蒐集、處理及利用方式</h2>
          <ul>
            <li>
              當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。
            </li>
            <li>
              本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。
            </li>
            <li>
              於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的 IP
              位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。
            </li>
            <li>
              為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。
            </li>
            <li>
              您可以隨時向我們提出請求，以更正或刪除您的帳戶或本網站所蒐集的個人資料等隱私資訊。聯繫方式請見最下方聯繫管道。
            </li>
          </ul>
        </section>

        <section>
          <h2 id="protection">三、資料之保護</h2>
          <ul>
            <li>
              本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。
            </li>
            <li>
              如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。
            </li>
          </ul>
        </section>

        <section>
          <h2 id="link">四、網站對外的相關連結</h2>
          <p>
            本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。
          </p>
        </section>

        <section>
          <h2 id="thirdPerson">五、與第三人共用個人資料之政策</h2>
          <p>
            本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。
          </p>
          <p>前項但書之情形包括不限於：</p>
          <ul>
            <li>經由您書面同意。</li>
            <li>法律明文規定。</li>
            <li>為免除您生命、身體、自由或財產上之危險。</li>
            <li>
              與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集者依其揭露方式無從識別特定之當事人。
            </li>
            <li>
              當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。
            </li>
            <li>有利於您的權益。</li>
            <li>
              本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。
            </li>
          </ul>
        </section>

        <section>
          <h2 id="cookie">六、Cookie 之使用</h2>
          <p>
            為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的 Cookie，若您不願接受 Cookie
            的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕 Cookie
            的寫入，但可能會導致網站某些功能無法正常執行 。
          </p>
        </section>

        <section>
          <h2 id="correction">七、隱私權保護政策之修正</h2>
          <p>本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。</p>
        </section>

        <section>
          <h2 id="pipe">八、聯繫管道</h2>
          <p>
            對於本站之隱私權政策有任何疑問，或者想提出變更、移除個人資料之請求，請前往本站「聯絡我們」頁面提交表單。
          </p>
        </section>
      </div>
      <div class="mark_wrapper">
        <div>XXXXXXXXXX公司 ｜XXX网</div>
        <div>更新日期：2021年03月24日</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const assets = useAssets()

const nav = ref([
  { id: 'scopeOf', title: '隱私權保護政策的適用範圍', selected: '' },
  { id: 'way', title: '個人資料的蒐集處理及利用方式', selected: '' },
  { id: 'protection', title: '資料之保護', selected: '' },
  { id: 'link', title: '網站對外的相關連結', selected: '' },
  { id: 'thirdPerson', title: '與第三人共用個人資料之政策', selected: '' },
  { id: 'cookie', title: 'Cookie 之使用', selected: '' },
  { id: 'correction', title: '隱私權保護政策之修正', selected: '' },
  { id: 'pipe', title: '聯繫管道', selected: '' }
])

const navContent = ref(null)
const privacyContent = ref(null)

const onScroll = () => {
  if (navContent.value.offsetTop - scrollY < innerHeight / 5) {
    navContent.value.style = `position: fixed;top: ${innerHeight / 5}px;`
  }
  if (privacyContent.value.offsetTop - scrollY > innerHeight / 5) {
    navContent.value.style = ''
  }

  for (let index = 0; index < nav.value.length; index++) {
    const top = document.getElementById(nav.value[index].id).offsetTop
    if (top > scrollY) {
      nav.value.forEach((e) => (e.selected = ''))
      nav.value[index].selected = 'selected'
      break
    }
  }
}

onMounted(() => {
  onScroll
  addEventListener('scroll', onScroll)
})
onBeforeUnmount(() => removeEventListener('scroll', onScroll))

const scroll = (id) => {
  const top = document.getElementById(id).offsetTop
  window.scrollTo({
    top: top - 96,
    behavior: 'smooth'
  })
}
</script>

<style lang="scss" scoped>
.privacy_root {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 3.375rem;
  @include pad {
    grid-template-columns: 1fr;
  }
}

nav {
  @include pad {
    display: none;
  }
}

.nav_content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @include pad {
    display: none;
  }
  li {
    padding-left: 1rem;
    color: $gray-2;
    &.selected {
      position: relative;
      font-weight: 600;
      color: $gray-1;
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 2px;
        height: 100%;
        background: $gray-2;
        content: '';
      }
    }
  }
}

.privacy_wrapper {
  margin-bottom: 4.5rem;
}

.privacy_content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 4.5rem;
  @include mobile {
    gap: 1rem;
    margin-bottom: 1.75rem;
  }
}

h1,
h2 {
  padding-bottom: 1rem;
  font-size: 1.75rem;
  @include mobile {
    padding-bottom: 0.5rem;
    font-size: 1rem;
  }
}

section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-left: 1.25rem;
    @include mobile {
      gap: 0.5rem;
    }
  }
  ul,
  li {
    list-style-type: disc;
  }
  p,
  li {
    font-size: 1.125rem;
    line-height: 1.5;
    @include mobile {
      font-size: 0.875rem;
    }
  }
}

.text_yellow {
  color: $yellow-1;
}

.privacy {
  width: 1rem;
}

.mark_wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @include mobile {
    gap: 0.5rem;
    font-size: 0.875rem;
  }
}
</style>
