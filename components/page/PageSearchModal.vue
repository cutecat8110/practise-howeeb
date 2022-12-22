<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen-xl-down modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <form action="" @submit.prevent="goSearch()">
            <label for="search" class="search_wrapper">
              <input
                id="search"
                type="text"
                v-model="searchValue"
                placeholder="搜尋文章標題或關鍵字"
                inputmode="search"
              />
              <button v-if="searchValue" @click="clear" type="button" class="c_btn clear">
                <Icon name="ion:close-circle-sharp"></Icon>
              </button>
              <button type="submit" class="c_btn search">
                <Icon name="fa:search"></Icon>
              </button>
            </label>
          </form>
          <button
            type="button"
            class="hamburger_wrapper d-block d-xl-none"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <div class="hamburger is-active">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </div>
          </button>
        </div>
        <div class="modal-body" :class="wrapper">
          <template v-if="searchResults.length === 0">
            <div class="tips mb-2">熱門文章搜尋</div>
            <div class="tag_content">
              <div v-for="(tag, index) in tags" :key="index" class="c_btn tag">
                # {{ tag.name }}
              </div>
            </div>
          </template>
          <template v-else>
            <div class="result_content">
              <div
                v-html="addRed(result.name)"
                v-for="(result, index) in searchResults"
                :key="index"
                class="c_btn result"
              ></div>
            </div>
            <button class="more">查看更多結果</button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const tags = new Array(7).fill({ name: '虛擬貨幣' })

/* 執行搜尋 */
const searchResults = ref([])
const goSearch = () => {
  if (searchResults.value.length === 0) {
    searchResults.value = [
      { name: '金融分析金融分析金融分析金融分析金融分析金融分析金融分析金融分析' },
      { name: '金融解說' },
      { name: '金融廣告' },
      { name: '金融市場' },
      { name: '金融分析' },
      { name: '金融解說' },
      { name: '金融廣告' },
      { name: '金融市場' },
      { name: '金融分析' },
      { name: '金融解說' },
      { name: '金融廣告' },
      { name: '金融市場' },
      { name: '金融分析' },
      { name: '金融解說' },
      { name: '金融廣告' },
      { name: '金融市場' },
      { name: '金融分析' },
      { name: '金融解說' },
      { name: '金融廣告' },
      { name: '金融市場' },
      { name: '金融分析' },
      { name: '金融解說' },
      { name: '金融廣告' },
      { name: '金融市場' },
      { name: '金融分析' },
      { name: '金融解說' },
      { name: '金融廣告' },
      { name: '金融市場' },
      { name: '金融分析' },
      { name: '金融解說' },
      { name: '金融廣告' },
      { name: '金融市場' },
      { name: '金融分析' },
      { name: '金融解說' },
      { name: '金融廣告' },
      { name: '金融市場' }
    ]
  } else {
    searchResults.value = []
  }
}

/* 判斷是否搜尋 */
const wrapper = ref('')
watch(searchResults, () => {
  wrapper.value = searchResults.value.length === 0 ? '' : 'result_wrapper'
})

/* 搜尋結果加紅字 */
const searchValue = ref('')
const addRed = (text) => {
  return text.replace(searchValue.value, `<span class="text_red">${searchValue.value}</span>`)
}

/* 清空搜尋 */
const clear = () => {
  searchValue.value = ''
}
</script>

<style lang="scss" scoped>
.modal-dialog {
  height: calc(100% - 7.5rem);
  max-width: 1248px;
  margin-top: 3.75rem;
  margin-bottom: 3.75rem;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  @media (max-width: 1400px) {
    max-width: 1140px;
  }
  @include pad {
    height: 100%;
    max-width: none;
    margin-top: 0;
    margin-bottom: 0rem;
    padding-right: 0;
    padding-left: 0;
  }
}
.modal.fade .modal-dialog {
  transform: none;
}
.modal-content {
  width: 20rem;
  margin-right: 6rem;
  margin-left: auto;
  border-color: $gray-4;
  border-radius: 0;
  @include pad {
    width: 100%;
    margin-right: 0;
    margin-left: 0;
    border-color: $gray-4;
    border-radius: 0;
  }
}

.modal-header {
  gap: 0.75rem;
  border: 0;
}
form {
  flex: 1;
}
.search_wrapper {
  display: flex;
  align-items: center;
  flex: 1;
  height: 2.5rem;
  padding: 0.5rem 0 0.5rem 0.75rem;
  border: 1px solid $gray-3;
  border-radius: 0.25rem;
  cursor: text;

  .c_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    &.clear {
      width: 1.5rem;
      height: 1.5rem;
      color: $gray-4;
    }
    &.search {
      width: 2.5rem;
      height: 2.5rem;
      color: $yellow-1;
    }
  }
  input {
    display: block;
    flex: 1;
    width: 100%;
    max-width: 100%;
    outline: 0;
    border: 0;
  }
}

.modal-body {
  padding-top: 0;
}

.tips {
  font-size: 0.75rem;
  color: $gray-2;
}

.tag_content {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.tag {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background: $yellow-3;
  font-size: 0.75rem;
  color: $yellow-1;
  transition: $transition-1;
  &:hover {
    background: $gray-4;
    color: $gray-1;
  }
}
.result_wrapper {
  display: flex;
  flex-direction: column;
  padding: 0;
}
.result_content {
  display: flex;
  overflow-y: scroll;
  flex: 1;
  flex-direction: column;
}
.result {
  overflow: hidden;
  flex-shrink: 0;
  height: 2.5rem;
  padding: 0.75rem 1.5rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.875rem;
  transition: $transition-1;
  &:hover {
    background: $gray-5;
  }
}
:deep(.text_red) {
  color: $red-1;
}

.more {
  flex-shrink: 0;
  height: 2.5rem;
  font-weight: 500;
  transition: $transition-1;
  &:hover {
    color: $yellow-1;
  }
}
</style>
