import { _ as __nuxt_component_0, a as __nuxt_component_1$1, b as __nuxt_component_2$1, c as __nuxt_component_3 } from './PageScrollTop.06349707.mjs';
import { b as useRoute, c as __nuxt_component_0$1 } from '../server.mjs';
import __nuxt_component_0$2 from './Icon.bfa5f0c3.mjs';
import { useSSRContext, mergeProps, computed, withCtx, createTextVNode, toDisplayString, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';
import './fetch.2f5b0080.mjs';
import 'ohash';
import 'swiper/vue';
import 'swiper';
import './useAssets.e1ea67b0.mjs';
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
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _sfc_main$1 = {
  __name: "PageBreadcrumb",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const stories = computed(() => {
      switch (route.name) {
        case "slug":
          return "404";
        case "stories-id":
          return "";
        case "category-id":
          return route.params.id;
        default:
          return route.name;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-xl" }, _attrs))} data-v-4cd4e1b2><nav aria-label="breadcrumb" data-v-4cd4e1b2><ol data-v-4cd4e1b2><li data-v-4cd4e1b2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "c_btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("index"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("index")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
      if (unref(stories)) {
        _push(`<li class="link_wrapper" aria-current="page" data-v-4cd4e1b2>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "fa6-solid:chevron-right",
          class: "icon"
        }, null, _parent));
        _push(`<div to="/" class="c_btn" data-v-4cd4e1b2>${ssrInterpolate(_ctx.$t(unref(stories)))}</div></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ol></nav></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/PageBreadcrumb.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4cd4e1b2"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PageHeader = __nuxt_component_0;
  const _component_PageBanner = __nuxt_component_1$1;
  const _component_PageBreadcrumb = __nuxt_component_2;
  const _component_PageFooter = __nuxt_component_2$1;
  const _component_PageScrollTop = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout_root" }, _attrs))} data-v-a46359c8><header data-v-a46359c8>`);
  _push(ssrRenderComponent(_component_PageHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_PageBanner, null, null, _parent));
  _push(`</header><main data-v-a46359c8>`);
  _push(ssrRenderComponent(_component_PageBreadcrumb, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_PageFooter, null, null, _parent));
  _push(ssrRenderComponent(_component_PageScrollTop, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a46359c8"]]);

export { _default as default };
//# sourceMappingURL=default.71a6094e.mjs.map
