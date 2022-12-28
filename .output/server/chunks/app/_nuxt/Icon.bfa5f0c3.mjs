import { u as useNuxtApp, a as useState, _ as __appConfig } from '../server.mjs';
import { useSSRContext, defineComponent, ref, computed, watch, withAsyncContext, unref, mergeProps, createVNode, resolveDynamicComponent, reactive } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';
import { Icon } from '@iconify/vue/dist/offline';
import { loadIcon } from '@iconify/vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'vue-i18n';
import 'dayjs';
import 'cookie-es';
import 'ohash';
import 'pinia-plugin-persistedstate';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = reactive(__appConfig);
  }
  return nuxtApp._appConfig;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const nuxtApp = useNuxtApp();
    const nuxtIcon = useAppConfig().nuxtIcon;
    const state = useState("icons", () => ({}));
    const isFetching = ref(false);
    const iconName = computed(() => ((nuxtIcon == null ? void 0 : nuxtIcon.aliases) || {})[props.name] || props.name);
    const icon = computed(() => {
      var _a;
      return (_a = state.value) == null ? void 0 : _a[iconName.value];
    });
    const component = computed(() => nuxtApp.vueApp.component(iconName.value));
    const sSize = computed(() => {
      const size = props.size || (nuxtIcon == null ? void 0 : nuxtIcon.size) || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    async function loadIconComponent() {
      var _a;
      if (component.value) {
        return;
      }
      if (!((_a = state.value) == null ? void 0 : _a[iconName.value])) {
        isFetching.value = true;
        state.value[iconName.value] = await loadIcon(iconName.value).catch(() => void 0);
        isFetching.value = false;
      }
    }
    watch(() => iconName.value, loadIconComponent);
    !component.value && ([__temp, __restore] = withAsyncContext(() => loadIconComponent()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(isFetching)) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: "icon",
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs))} data-v-ca945699></span>`);
      } else if (unref(icon)) {
        _push(ssrRenderComponent(unref(Icon), mergeProps({
          icon: unref(icon),
          class: "icon",
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs), null, _parent));
      } else if (unref(component)) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(component)), mergeProps({
          class: "icon",
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs), null), _parent);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: "icon",
          style: { fontSize: unref(sSize), lineHeight: unref(sSize), width: unref(sSize), height: unref(sSize) }
        }, _attrs))} data-v-ca945699>${ssrInterpolate(__props.name)}</span>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icon/dist/runtime/Icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ca945699"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=Icon.bfa5f0c3.mjs.map
