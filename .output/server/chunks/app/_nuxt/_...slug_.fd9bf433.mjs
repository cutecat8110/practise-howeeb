import { u as useAssets } from './useAssets.e1ea67b0.mjs';
import { useSSRContext, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const assets = useAssets();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "slug_root container-xl" }, _attrs))} data-v-f1f3f0c0><div class="slug_wrapper" data-v-f1f3f0c0><img${ssrRenderAttr("src", unref(assets).error)} alt="error-icon" data-v-f1f3f0c0><div class="message" data-v-f1f3f0c0>Page Not Found</div><div class="error" data-v-f1f3f0c0>404</div><div class="tip" data-v-f1f3f0c0>\u8ACB\u9EDE\u64CA\u4E0B\u9762\u7684\u6309\u9215\u56DE\u5230\u9996\u9801</div></div><button type="button" class="c_btn" data-v-f1f3f0c0>\u56DE\u5230\u9996\u9801</button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f1f3f0c0"]]);

export { ____slug_ as default };
//# sourceMappingURL=_...slug_.fd9bf433.mjs.map
