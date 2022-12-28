import { c as __nuxt_component_0$1 } from '../server.mjs';
import __nuxt_component_0$2 from './Icon.bfa5f0c3.mjs';
import { useSSRContext, ref, withAsyncContext, mergeProps, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { u as useFetch } from './fetch.2f5b0080.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Navigation, Pagination } from 'swiper';
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

const _sfc_main$1 = {
  __name: "CardSwiper",
  __ssrInlineRender: true,
  props: {
    title: String,
    categoryId: Number
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const modules = [EffectFade, Navigation, Pagination];
    const pagination = {
      clickable: true
    };
    const navigation = {
      nextEl: ".next",
      prevEl: ".prev"
    };
    const slidesPerView = ref(3);
    const {
      data: CardData,
      pending,
      error,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://picsum.photos/v2/list?page=${props.categoryId}&limit=6`, "$OUg7e8qE1k")), __temp = await __temp, __restore(), __temp);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card_swiper_root" }, _attrs))} data-v-cc70e56d><div class="row g-0" data-v-cc70e56d><div class="col-4" data-v-cc70e56d></div><div class="col-4 text-center" data-v-cc70e56d><h2 data-v-cc70e56d>${ssrInterpolate(__props.title)}</h2></div><div class="col-4 d-flex flex-row-reverse align-items-center" data-v-cc70e56d><button type="button" class="c_btn more" data-v-cc70e56d>\u67E5\u770B\u66F4\u591A</button></div><div data-v-cc70e56d></div></div>`);
      _push(ssrRenderComponent(unref(Swiper), {
        loop: true,
        slidesPerView: unref(slidesPerView),
        spaceBetween: 24,
        pagination,
        navigation,
        modules,
        class: "mySwiper"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(CardData), (card, index2) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: card.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: `/stories/${__props.categoryId}-${index2}`,
                      class: "card_wrapper c_btn"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="img_wrapper" data-v-cc70e56d${_scopeId3}><div class="cover" data-v-cc70e56d${_scopeId3}></div><img${ssrRenderAttr("src", card.download_url)} alt="" data-v-cc70e56d${_scopeId3}></div><div class="title" data-v-cc70e56d${_scopeId3}> \u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF\u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF\u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF </div><div class="info_wrapper d-flex align-items-center justify-content-between" data-v-cc70e56d${_scopeId3}><div class="time" data-v-cc70e56d${_scopeId3}>1945-8-6</div><div class="read d-flex align-items-center" data-v-cc70e56d${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "mdi:eye",
                            class: "me-1"
                          }, null, _parent4, _scopeId3));
                          _push4(` 235 </div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "img_wrapper" }, [
                              createVNode("div", { class: "cover" }),
                              createVNode("img", {
                                src: card.download_url,
                                alt: ""
                              }, null, 8, ["src"])
                            ]),
                            createVNode("div", { class: "title" }, " \u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF\u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF\u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF "),
                            createVNode("div", { class: "info_wrapper d-flex align-items-center justify-content-between" }, [
                              createVNode("div", { class: "time" }, "1945-8-6"),
                              createVNode("div", { class: "read d-flex align-items-center" }, [
                                createVNode(_component_Icon, {
                                  name: "mdi:eye",
                                  class: "me-1"
                                }),
                                createTextVNode(" 235 ")
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtLink, {
                        to: `/stories/${__props.categoryId}-${index2}`,
                        class: "card_wrapper c_btn"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "img_wrapper" }, [
                            createVNode("div", { class: "cover" }),
                            createVNode("img", {
                              src: card.download_url,
                              alt: ""
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", { class: "title" }, " \u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF\u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF\u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF "),
                          createVNode("div", { class: "info_wrapper d-flex align-items-center justify-content-between" }, [
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
                        _: 2
                      }, 1032, ["to"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--><button type="button" class="c_btn next" data-v-cc70e56d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:chevron-right" }, null, _parent2, _scopeId));
            _push2(`</button><button type="button" class="c_btn prev" data-v-cc70e56d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:chevron-left" }, null, _parent2, _scopeId));
            _push2(`</button>`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(CardData), (card, index2) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: card.id
                }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtLink, {
                      to: `/stories/${__props.categoryId}-${index2}`,
                      class: "card_wrapper c_btn"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "img_wrapper" }, [
                          createVNode("div", { class: "cover" }),
                          createVNode("img", {
                            src: card.download_url,
                            alt: ""
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "title" }, " \u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF\u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF\u5302\u4E3C\u8FBB\u8FBC\u51E7\u6763\u67A0\u7551\u6803\u6802\u5CE0\u4FE3\u7C7E\u7560\u96EB\u7B39\u5840\u6919\u7872\u86EF\u55B0\u643E\u698A\u50CD\u7CC0\u9786\u69C7\u6A2B\u9D2B\u567A\u7C17\u9EBF "),
                        createVNode("div", { class: "info_wrapper d-flex align-items-center justify-content-between" }, [
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
                      _: 2
                    }, 1032, ["to"])
                  ]),
                  _: 2
                }, 1024);
              }), 128)),
              createVNode("button", {
                type: "button",
                class: "c_btn next"
              }, [
                createVNode(_component_Icon, { name: "fa6-solid:chevron-right" })
              ]),
              createVNode("button", {
                type: "button",
                class: "c_btn prev"
              }, [
                createVNode(_component_Icon, { name: "fa6-solid:chevron-left" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/CardSwiper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-cc70e56d"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const categories = [
      {
        article_category_id: 10,
        article_category_name: "\u6700\u65B0\u6D88\u606F"
      },
      {
        article_category_id: 20,
        article_category_name: "\u5275\u696D\u76F8\u95DC"
      },
      {
        article_category_id: 30,
        article_category_name: "\u501F\u5740\u767B\u8A18"
      },
      {
        article_category_id: 40,
        article_category_name: "\u5171\u4EAB\u7A7A\u9593"
      },
      {
        article_category_id: 50,
        article_category_name: "\u5DE5\u5546\u767B\u8A18"
      }
    ];
    const categoryLast = {
      article_category_id: 60,
      article_category_name: "\u5176\u4ED6\u9805\u76EE"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardSwiper = __nuxt_component_0;
      const _component_CardList = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home_root container-xl" }, _attrs))} data-v-e0be43d4><!--[-->`);
      ssrRenderList(categories, (category, index2) => {
        _push(ssrRenderComponent(_component_CardSwiper, {
          key: index2,
          title: category.article_category_name,
          categoryId: category.article_category_id
        }, null, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_CardList, {
        title: categoryLast.article_category_name,
        categoryId: categoryLast.article_category_id
      }, null, _parent));
      _push(`<div class="more_wrapper" data-v-e0be43d4><div class="c_btn more" data-v-e0be43d4>\u67E5\u770B\u66F4\u591A\u6587\u7AE0</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e0be43d4"]]);

export { index as default };
//# sourceMappingURL=index.4b0fbfd7.mjs.map
