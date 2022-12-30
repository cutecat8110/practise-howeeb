<template>
  <div class="contact_root container-xl">
    <div class="h1_wrapper">
      <h1>立即諮詢</h1>
    </div>
    <VForm class="contact_wrapper" @submit.prevent="goContact()">
      <div class="contact_content">
        <VField
          v-model="contact.name"
          name="聯絡人姓名"
          v-slot="{ field, meta }"
          :rules="nameRules"
          as="div"
        >
          <label
            for="name"
            class="input_wrapper"
            :class="{
              'is-danger': !meta.valid && meta.touched
            }"
          >
            <div class="title">聯絡人姓名</div>
            <input
              v-bind="field"
              id="name"
              type="text"
              placeholder="請輸入姓名"
              @keydown.enter.prevent
            />
          </label>
          <VErrorMessage
            v-if="!meta.valid && meta.touched"
            name="聯絡人姓名"
            as="div"
            class="error_message"
          />
        </VField>
        <VField
          v-model="contact.phone"
          name="聯絡人電話"
          v-slot="{ field, meta }"
          rules="required"
          as="div"
        >
          <label
            for="phone"
            class="input_wrapper"
            :class="{
              'is-danger': !meta.valid && meta.touched
            }"
          >
            <div class="title">聯絡人電話</div>
            <input
              v-bind="field"
              id="phone"
              type="text"
              placeholder="請輸入電話"
              @keydown.enter.prevent
            />
          </label>
          <VErrorMessage
            v-if="!meta.valid && meta.touched"
            name="聯絡人電話"
            as="div"
            class="error_message"
          />
        </VField>
        <VField
          v-model="contact.email"
          name="Email"
          v-slot="{ field, meta }"
          rules="required|email"
          as="div"
        >
          <label
            for="email"
            class="input_wrapper"
            :class="{
              'is-danger': !meta.valid && meta.touched
            }"
          >
            <div class="title">Email</div>
            <input
              v-bind="field"
              id="email"
              type="email"
              placeholder="請輸入信箱"
              @keydown.enter.prevent
            />
          </label>
          <VErrorMessage
            v-if="!meta.valid && meta.touched"
            name="Email"
            as="div"
            class="error_message"
          />
        </VField>
        <VField
          v-model="contact.category"
          name="主旨類別"
          v-slot="{ field, meta }"
          rules="required"
          as="div"
        >
          <div class="label_wrapper">
            <div
              ref="domLabel"
              class="domLabel c_btn"
              @click="categoryTool"
              :class="{
                'is-danger': !meta.valid && meta.touched
              }"
            >
              <div class="title">主旨類別</div>
              <div class="select" :class="contact.category === '' ? 'placeholder_text' : ''">
                <input
                  v-bind="field"
                  id="category"
                  type="text"
                  placeholder="請選擇主旨"
                  @keydown.enter.prevent
                />
                <Icon
                  :name="DropdownOpen ? 'fa6-solid:chevron-up' : 'fa6-solid:chevron-down'"
                ></Icon>
              </div>
            </div>
            <ul v-if="DropdownOpen" ref="domDropdown" class="select_tool">
              <li class="c_btn" @click="categorySet('網頁設計資訊')">網頁設計資訊</li>
              <li class="c_btn" @click="categorySet('平面插畫動畫製作')">平面插畫動畫製作</li>
              <li class="c_btn" @click="categorySet('行銷企業運營資訊')">行銷企業運營資訊</li>
              <li class="c_btn" @click="categorySet('我要合作請聯絡我')">我要合作請聯絡我</li>
            </ul>
          </div>
          <VErrorMessage
            v-if="!meta.valid && meta.touched"
            name="主旨類別"
            as="div"
            class="error_message"
          />
        </VField>
        <VField
          v-model="contact.content"
          name="諮詢內容"
          v-slot="{ field, meta }"
          rules="required"
          as="div"
          class="textarea_VField"
        >
          <label
            for="content"
            class="textarea_wrapper"
            :class="{
              'is-danger': !meta.valid && meta.touched
            }"
          >
            <div class="title">諮詢內容</div>
            <textarea v-bind="field" id="content" type="text" placeholder="請輸入諮詢內容" />
          </label>
          <VErrorMessage
            v-if="!meta.valid && meta.touched"
            name="諮詢內容"
            as="div"
            class="error_message"
          />
        </VField>
      </div>
      <button type="submit" class="c_btn submit">提交</button>
    </VForm>
  </div>
</template>

<script setup>
const contact = ref({
  name: '',
  phone: '',
  email: '',
  category: '',
  content: ''
})

const DropdownOpen = ref(false)
const domDropdown = ref(null)
const domLabel = ref(null)

const clickOut = (e) => {
  const target = e.target || e.srcElement
  if (!domLabel.value.contains(target) && !domDropdown.value.contains(target)) {
    DropdownOpen.value = false
  }
}

watch(DropdownOpen, () => {
  if (DropdownOpen.value) {
    addEventListener('click', clickOut)
  } else {
    removeEventListener('click', clickOut)
  }
})

const categorySet = (category) => {
  DropdownOpen.value = false
  contact.value.category = category
}

const categoryTool = () => {
  DropdownOpen.value = !DropdownOpen.value
}

const goContact = () => {
  console.log('送出表單')
}

const nameRules = {
  required: true,
  max: 25,
  regex: '/[a‑zA‑Z0‑9\\s_@./#&:;+‑]*$/'
}

const keypress = () => {}
</script>

<style lang="scss" scoped>
.contact_root {
  margin-bottom: 4.5rem;
}

::placeholder {
  color: $gray-4;
}

:-ms-input-placeholder {
  color: $gray-4;
}

::-ms-input-placeholder {
  color: $gray-4;
}

.h1_wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 2.25rem;

  @include mobile {
    margin-bottom: 1.25rem;
  }

  h1 {
    position: relative;
    padding-bottom: 1.5rem;
    font-size: 1.75rem;

    @include mobile {
      padding-bottom: 1.25rem;
      font-size: 1.25rem;
    }

    &::after {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: calc(100% - 2rem);
      height: 3px;
      background: $gray-1;
      content: '';
      transform: translateX(-50%);
    }
  }
}

.contact_wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3rem;

  @include pad {
    gap: 2.25rem;
  }
}

.contact_content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  width: 100%;

  @include pad {
    grid-template-columns: 1fr;
  }

  @include mobile {
    gap: 1rem;
  }
}

.title {
  position: relative;
  padding-right: 2.5rem;
  background: $white-1;
  font-size: 1.125rem;
  line-height: 1.75rem;

  @include mobile {
    padding-right: 1.25rem;
    font-size: 0.75rem;
    line-height: 1rem;
  }

  &::after {
    position: absolute;
    top: 50%;
    right: 1.25rem;
    width: 1px;
    height: 1.5rem;
    background: $gray-4;
    content: '';
    transform: translateY(-50%);

    @include mobile {
      right: 0.625rem;
      height: 0.625rem;
    }
  }
}

.input_wrapper {
  display: flex;

  input {
    flex: 1;
    width: 100%;
    max-width: 100%;
    padding: 0;
    outline: 0;
    border: 0;
    line-height: 1.75rem;

    @include mobile {
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }
}

.label_wrapper {
  position: relative;

  .domLabel {
    display: flex;
    padding: 1rem;
    border: 1px solid $gray-3;
    border-radius: 1rem;
  }

  .select {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-between;

    input {
      flex: 1;
      width: 100%;
      max-width: 100%;
      padding: 0;
      outline: 0;
      border: 0;
      line-height: 1.75rem;
      pointer-events: none;

      @include mobile {
        font-size: 0.75rem;
        line-height: 1rem;
      }
    }
  }

  .select_tool {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow: hidden;
    width: 100%;
    padding: 1rem 0;
    border-radius: 1rem;
    background: $white-1;
    box-shadow: 0 0.25rem 1rem $gray-o-1;
    transform: translateY(calc(100% + 0.5rem));

    @include mobile {
      font-size: 0.75rem;
    }

    li {
      padding: 0.25rem 1.25rem;

      @include mobile {
        padding: 0.625rem 1.25rem;
      }

      &:hover {
        background: $yellow-3;
      }
    }
  }
}

.textarea_VField {
  position: relative;
  grid-column-end: 3;
  grid-column-start: 1;

  @include pad {
    grid-column-end: auto;
  }
}

.textarea_wrapper {
  display: block;

  .title {
    position: absolute;
    border-bottom-right-radius: 8px;
  }

  textarea {
    width: 100%;
    min-height: 262px;
    max-width: 100%;
    padding: 0;
    outline: 0;
    border: 0;
    text-indent: 7rem;
    line-height: 1.75rem;

    @include mobile {
      text-indent: 4.25rem;
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }
}

label {
  overflow: hidden;
  padding: 1rem;
  border: 1px solid $gray-3;
  border-radius: 1rem;
  cursor: text;
}

.error_message {
  padding: 0.5rem 0 0 1rem;
  color: $red-1;

  @include mobile {
    font-size: 0.75rem;
  }
}

.is-danger {
  border-color: $red-1 !important;
}

.submit {
  padding: 1rem 7.25rem;
  border-radius: 50rem;
  background: $yellow-2;
  font-weight: 600;
  font-size: 1.125rem;
  color: $gray-1;

  @include mobile {
    padding: 0.5rem 7.25rem;
    font-size: 1rem;
  }
}

.page_privacy_root {
  position: relative;
  z-index: 1090;
  pointer-events: auto;
}
</style>
