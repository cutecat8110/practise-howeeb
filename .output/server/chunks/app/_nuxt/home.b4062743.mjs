import { _ as __nuxt_component_0, a as __nuxt_component_1$1, b as __nuxt_component_2, c as __nuxt_component_3 } from './PageScrollTop.06349707.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';
import '../server.mjs';
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
import './Icon.bfa5f0c3.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './fetch.2f5b0080.mjs';
import 'swiper/vue';
import 'swiper';
import './useAssets.e1ea67b0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PageHeader = __nuxt_component_0;
  const _component_PageBanner = __nuxt_component_1$1;
  const _component_PageFooter = __nuxt_component_2;
  const _component_PageScrollTop = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout_root" }, _attrs))} data-v-00fb1570><header data-v-00fb1570>`);
  _push(ssrRenderComponent(_component_PageHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_PageBanner, null, null, _parent));
  _push(`</header><main data-v-00fb1570>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_PageFooter, null, null, _parent));
  _push(ssrRenderComponent(_component_PageScrollTop, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-00fb1570"]]);

export { home as default };
//# sourceMappingURL=home.b4062743.mjs.map
