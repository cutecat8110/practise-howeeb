import { u as useNuxtApp, b as useRoute, c as __nuxt_component_0$1 } from '../server.mjs';
import __nuxt_component_0 from './Icon.bfa5f0c3.mjs';
import { useSSRContext, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';
import { _ as __nuxt_component_3 } from './CardList.2070cddf.mjs';
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
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './fetch.2f5b0080.mjs';

const _sfc_main$1 = {
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    imgUrl: {
      type: String,
      default: "https://picsum.photos/id/119/3264/2176"
    },
    title: {
      type: String,
      default: "\u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF\u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF\u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF"
    },
    count: {
      type: Number,
      default: 235
    },
    time: {
      type: Number,
      default: 1671604148
    }
  },
  setup(__props) {
    const props = __props;
    const { $formatDate } = useNuxtApp();
    const day = $formatDate(props.time);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ class: "card_wrapper c_btn" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="img_wrapper" data-v-51c39627${_scopeId}><div class="cover" data-v-51c39627${_scopeId}></div><img${ssrRenderAttr("src", __props.imgUrl)} alt="" data-v-51c39627${_scopeId}></div><div class="title" data-v-51c39627${_scopeId}>${ssrInterpolate(__props.title)}</div><div class="info_wrapper d-flex align-items-center justify-content-between" data-v-51c39627${_scopeId}><div class="time" data-v-51c39627${_scopeId}>${ssrInterpolate(unref(day))}</div><div class="read d-flex align-items-center" data-v-51c39627${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:eye",
              class: "me-1"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(__props.count)}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "img_wrapper" }, [
                createVNode("div", { class: "cover" }),
                createVNode("img", {
                  src: __props.imgUrl,
                  alt: ""
                }, null, 8, ["src"])
              ]),
              createVNode("div", { class: "title" }, toDisplayString(__props.title), 1),
              createVNode("div", { class: "info_wrapper d-flex align-items-center justify-content-between" }, [
                createVNode("div", { class: "time" }, toDisplayString(unref(day)), 1),
                createVNode("div", { class: "read d-flex align-items-center" }, [
                  createVNode(_component_Icon, {
                    name: "mdi:eye",
                    class: "me-1"
                  }),
                  createTextVNode(" " + toDisplayString(__props.count), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-51c39627"]]);
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { id } = route.params;
    const tags = new Array(7).fill({ name: "\u865B\u64EC\u8CA8\u5E63" });
    const relatives = new Array(3).fill(1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0;
      const _component_Card = __nuxt_component_2;
      const _component_CardList = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "stories_root" }, _attrs))} data-v-acb90d02><div class="story_wrapper container-xl" data-v-acb90d02><div class="story_content" data-v-acb90d02><div class="story_info" data-v-acb90d02><h1 data-v-acb90d02>${ssrInterpolate(unref(id))} \u4F11\u8778\u8C93\u8B80\u4E14\u7533\u8863\u5B50\u96F2\u501F\u540C\u8C93\u8B80\u4E14\u71C8</h1><div class="tool_wrapper" data-v-acb90d02><div class="tag_content" data-v-acb90d02><!--[-->`);
      ssrRenderList(unref(tags), (tag, index) => {
        _push(`<div class="c_btn tag" data-v-acb90d02> # ${ssrInterpolate(tag.name)}</div>`);
      });
      _push(`<!--]--></div><div class="share_wrapper" data-v-acb90d02>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://www.facebook.com/sharer/sharer.php?u=http://www.w3school.com.cn",
        target: "_blank",
        class: "c_btn share_fb"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "simple-icons:facebook",
              class: "icon"
            }, null, _parent2, _scopeId));
            _push2(` \u5206\u4EAB `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "simple-icons:facebook",
                class: "icon"
              }),
              createTextVNode(" \u5206\u4EAB ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://social-plugins.line.me/lineit/share?url=http://www.w3school.com.cn",
        target: "_blank",
        class: "c_btn share_line"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "simple-icons:line",
              class: "icon"
            }, null, _parent2, _scopeId));
            _push2(` \u5206\u4EAB `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "simple-icons:line",
                class: "icon"
              }),
              createTextVNode(" \u5206\u4EAB ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="info_wrapper d-flex align-items-center justify-content-between" data-v-acb90d02><div class="time" data-v-acb90d02>1945-8-6</div><div class="read d-flex align-items-center" data-v-acb90d02>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:eye",
        class: "me-1"
      }, null, _parent));
      _push(` 235 </div></div></div><div class="img_wrapper" data-v-acb90d02><img src="https://picsum.photos/id/119/3264/2176" alt="" data-v-acb90d02></div><div class="story" data-v-acb90d02> \u6211\u96BB\u6CE2\u6B61\u5973\u5E7C\u5C4B\u4E09\u5BE6\u5169\u4F86\u670D\u5B50\u5200\u98A8\u5347\u5FF5\u5B50\u5165\uFF0C\u6771\u670D\u8096\u65A4\u80FD\u6821\u8A5E\u535C\u706B\u5E03\u624B\u8ECA\u5C24\u52A0\u300C\u4E1F\u8F9B\u300D\u6708\u9032\u8863\u5C11\u5979\u9032\u98A8\u6614\u4F55\u5305\u9EBC\u7B46\u559C\uFF0C\u60F3\u76EE\u53EB\u661F\u9580\u6B62\u5BF8\u80FD\u53E4\u4FE1\u6B63\u5F1F\u4E0A\u606F\u5713\u5169\u8A34\uFF0C\u8774\u83DC\u5E2B\u82B1\u58EF\u5FC3\u6703\u591A\u6597\u5439\u300C\u53E4\u7A7A\u9580\u9EBC\u7FBD\u5C3A\u7533\u6211\u9053\u74DC\u300D\u56DE\u73FE\u66F4\u5403\u5DE6\u559D\u3002 \u6284\u6625\u9053\u58EB\u9580\u8272\u6B4C\u8DDF\u4E7E\u8A00\uFF0C\u751F\u66F8\u5348\u5F97\u4E1F\u6536\u897F\u5360\u6252\u65A4\u7531\u5750\u540C\u8C46\u7532\u5973\u6BCD\u8089\u6708\u5A46\u3002\u65C1\u8A31\u7B2C\u5E6B\u5317\u5531\u4E5E\u8DD1\u5C31\u5203\u516D\u8D70\u9577\u660C\u3002\u516B\u5440\u898B\u6614\u6D0B\u908A\u3002 \u8981\u5713\u9EDE\u9EDE\u6625\u5177\u6C41\u5169\u606F\u592E\u51E0\u4E16\u4F55\u7A74\u8033\u5B5D\u88CF\u5167\uFF0C\u6708\u9999\u5403\u679C\uFF0C\u5011\u6FA1\u5973\u516D\u65C1\u6BDB\u5149\u98FD\u6625\u6536\u53EB\u4F11\u5C0D\u8776\u7236\u524D\u72AC\u6210\u661F\u300C\u52A9\u8349\u665A\u611B\u800C\u8001\u6D6A\u300D\u7FBD\u6735\u689D\u65E6\uFF1F\u73A9\u6CC9\u8A5E\u5DE5\u4F46\u5C0F\u5373\u52FF\u5761\u606F\u56E0\u4F46\u3001\u665A\u884C\u79CB\u8AAA\u6BCD\u3002 \u6751\u58EF\u8A34\u623F\u96F2\u90A3\u620A\u690D\u7260\u91D1\u7B2C\u6284\u5ABD\u6E05\u98FD\u97F3\u6821\u6210\uFF0C\u540C\u8449\u5171\u6C34\u884C\u8072\u548C\u5357\u4E8C\u770B\u5A46\uFF0C\u7269\u8DB3\u982D\u958B\u5171\u5C3A\u624B\uFF0C\u597D\u9580\u5DF1\u8072\u79BE\u88CF\u7259\u5C0D\u71C8\u5750\u9662\u5143\uFF01\u6B21\u800C\u81F3\u7D93\u98A8\u6642\u9580\u96C4\u600E\u679C\u54E5\u7A2E\u71C8\u77E5\u96DE\u8033\uFF0C\u7259\u5BB3\u8A5E\u8ECA\u6797\u540C\u3002 \u6211\u96BB\u6CE2\u6B61\u5973\u5E7C\u5C4B\u4E09\u5BE6\u5169\u4F86\u670D\u5B50\u5200\u98A8\u5347\u5FF5\u5B50\u5165\uFF0C\u6771\u670D\u8096\u65A4\u80FD\u6821\u8A5E\u535C\u706B\u5E03\u624B\u8ECA\u5C24\u52A0\u300C\u4E1F\u8F9B\u300D\u6708\u9032\u8863\u5C11\u5979\u9032\u98A8\u6614\u4F55\u5305\u9EBC\u7B46\u559C\uFF0C\u60F3\u76EE\u53EB\u661F\u9580\u6B62\u5BF8\u80FD\u53E4\u4FE1\u6B63\u5F1F\u4E0A\u3002 </div><div class="tool_wrapper" data-v-acb90d02><div class="tag_content" data-v-acb90d02><!--[-->`);
      ssrRenderList(unref(tags), (tag, index) => {
        _push(`<div class="c_btn tag" data-v-acb90d02># ${ssrInterpolate(tag.name)}</div>`);
      });
      _push(`<!--]--></div><div class="share_wrapper d-none d-md-flex" data-v-acb90d02>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://www.facebook.com/sharer/sharer.php?u=http://www.w3school.com.cn",
        target: "_blank",
        class: "c_btn share_fb"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "simple-icons:facebook",
              class: "icon"
            }, null, _parent2, _scopeId));
            _push2(` \u5206\u4EAB `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "simple-icons:facebook",
                class: "icon"
              }),
              createTextVNode(" \u5206\u4EAB ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://social-plugins.line.me/lineit/share?url=http://www.w3school.com.cn",
        target: "_blank",
        class: "c_btn share_line"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "simple-icons:line",
              class: "icon"
            }, null, _parent2, _scopeId));
            _push2(` \u5206\u4EAB `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "simple-icons:line",
                class: "icon"
              }),
              createTextVNode(" \u5206\u4EAB ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="line" data-v-acb90d02></div><div class="relative" data-v-acb90d02><h2 data-v-acb90d02>\u76F8\u95DC\u6587\u7AE0</h2><!--[-->`);
      ssrRenderList(unref(relatives), (item, index) => {
        _push(ssrRenderComponent(_component_Card, { key: index }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="more_wrapper" data-v-acb90d02><div class="container-xl" data-v-acb90d02>`);
      _push(ssrRenderComponent(_component_CardList, {
        title: "\u95B1\u8B80\u66F4\u591A",
        categoryId: 60
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/stories/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-acb90d02"]]);

export { _id_ as default };
//# sourceMappingURL=_id_.3cdb1f9e.mjs.map
