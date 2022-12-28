import { c as __nuxt_component_0$1 } from '../server.mjs';
import __nuxt_component_0 from './Icon.bfa5f0c3.mjs';
import { withAsyncContext, ref, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch.2f5b0080.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main = {
  __name: "CardList",
  __ssrInlineRender: true,
  props: {
    title: String,
    categoryId: Number
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const {
      data: CardData,
      pending,
      error,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://picsum.photos/v2/list?page=${props.categoryId}&limit=8`, "$08foAQtfsz")), __temp = await __temp, __restore(), __temp);
    const rwd = ref(true);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card_list_root" }, _attrs))} data-v-e5a90bc3><div class="row g-0" data-v-e5a90bc3><div class="col-4" data-v-e5a90bc3></div><div class="col-4 text-center" data-v-e5a90bc3><h2 data-v-e5a90bc3>${ssrInterpolate(__props.title)}</h2></div><div class="col-4" data-v-e5a90bc3></div></div><div class="list_wrapper" data-v-e5a90bc3><!--[-->`);
      ssrRenderList(unref(CardData), (card, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/stories/${__props.categoryId}-${index}`,
          class: "card_wrapper c_btn",
          key: index
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="d-flex flex-column" data-v-e5a90bc3${_scopeId}><div class="title" data-v-e5a90bc3${_scopeId}> \u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF\u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF\u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF </div>`);
              if (unref(rwd)) {
                _push2(`<div class="summary" data-v-e5a90bc3${_scopeId}> \u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF\u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF\u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF </div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="info_wrapper d-flex align-items-center justify-content-between mt-auto" data-v-e5a90bc3${_scopeId}><div class="time" data-v-e5a90bc3${_scopeId}>1945-8-6</div><div class="read d-flex align-items-center" data-v-e5a90bc3${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "mdi:eye",
                class: "me-1"
              }, null, _parent2, _scopeId));
              _push2(` 235 </div></div></div><div class="img_wrapper" data-v-e5a90bc3${_scopeId}><div class="cover" data-v-e5a90bc3${_scopeId}></div><img${ssrRenderAttr("src", card.download_url)} alt="" data-v-e5a90bc3${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { class: "d-flex flex-column" }, [
                  createVNode("div", { class: "title" }, " \u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF\u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF\u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF "),
                  unref(rwd) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "summary"
                  }, " \u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF\u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF\u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF ")) : createCommentVNode("", true),
                  createVNode("div", { class: "info_wrapper d-flex align-items-center justify-content-between mt-auto" }, [
                    createVNode("div", { class: "time" }, "1945-8-6"),
                    createVNode("div", { class: "read d-flex align-items-center" }, [
                      createVNode(_component_Icon, {
                        name: "mdi:eye",
                        class: "me-1"
                      }),
                      createTextVNode(" 235 ")
                    ])
                  ])
                ]),
                createVNode("div", { class: "img_wrapper" }, [
                  createVNode("div", { class: "cover" }),
                  createVNode("img", {
                    src: card.download_url,
                    alt: ""
                  }, null, 8, ["src"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/CardList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e5a90bc3"]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=CardList.2070cddf.mjs.map
