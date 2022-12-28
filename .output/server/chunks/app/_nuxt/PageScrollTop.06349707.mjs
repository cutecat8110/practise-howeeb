import { u as useNuxtApp, b as useRoute, c as __nuxt_component_0$1, e as useCounter } from '../server.mjs';
import __nuxt_component_0$2 from './Icon.bfa5f0c3.mjs';
import { useSSRContext, ref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref, withAsyncContext, openBlock, createBlock, Fragment, renderList, watch } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';
import { u as useFetch } from './fetch.2f5b0080.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { u as useAssets } from './useAssets.e1ea67b0.mjs';

const _sfc_main$5 = {
  __name: "PageSearchModal",
  __ssrInlineRender: true,
  setup(__props) {
    const tags = new Array(7).fill({ name: "\u865B\u64EC\u8CA8\u5E63" });
    const searchResults = ref([]);
    const wrapper = ref("");
    watch(searchResults, () => {
      wrapper.value = searchResults.value.length === 0 ? "" : "result_wrapper";
    });
    const searchValue = ref("");
    const addRed = (text) => {
      return text.replace(searchValue.value, `<span class="text_red">${searchValue.value}</span>`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "modal fade",
        id: "exampleModal",
        tabindex: "-1",
        "aria-hidden": "true"
      }, _attrs))} data-v-20ba35e0><div class="modal-dialog modal-fullscreen-xl-down modal-dialog-scrollable" data-v-20ba35e0><div class="modal-content" data-v-20ba35e0><div class="modal-header" data-v-20ba35e0><form action="" data-v-20ba35e0><label for="search" class="search_wrapper" data-v-20ba35e0><input id="search" type="text"${ssrRenderAttr("value", unref(searchValue))} placeholder="\u641C\u5C0B\u6587\u7AE0\u6A19\u984C\u6216\u95DC\u9375\u5B57" inputmode="search" data-v-20ba35e0>`);
      if (unref(searchValue)) {
        _push(`<button type="button" class="c_btn clear" data-v-20ba35e0>`);
        _push(ssrRenderComponent(_component_Icon, { name: "ion:close-circle-sharp" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit" class="c_btn search" data-v-20ba35e0>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa:search" }, null, _parent));
      _push(`</button></label></form><button type="button" class="hamburger_wrapper d-block d-xl-none" data-bs-dismiss="modal" aria-label="Close" data-v-20ba35e0><div class="hamburger is-active" data-v-20ba35e0><span class="line" data-v-20ba35e0></span><span class="line" data-v-20ba35e0></span><span class="line" data-v-20ba35e0></span></div></button></div><div class="${ssrRenderClass([unref(wrapper), "modal-body"])}" data-v-20ba35e0>`);
      if (unref(searchResults).length === 0) {
        _push(`<!--[--><div class="tips mb-2" data-v-20ba35e0>\u71B1\u9580\u6587\u7AE0\u641C\u5C0B</div><div class="tag_content" data-v-20ba35e0><!--[-->`);
        ssrRenderList(unref(tags), (tag, index) => {
          _push(`<div class="c_btn tag" data-v-20ba35e0> # ${ssrInterpolate(tag.name)}</div>`);
        });
        _push(`<!--]--></div><!--]-->`);
      } else {
        _push(`<!--[--><div class="result_content" data-v-20ba35e0><!--[-->`);
        ssrRenderList(unref(searchResults), (result, index) => {
          _push(`<div class="c_btn result" data-v-20ba35e0>${addRed(result.name)}</div>`);
        });
        _push(`<!--]--></div><button class="more" data-v-20ba35e0>\u67E5\u770B\u66F4\u591A\u7D50\u679C</button><!--]-->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/PageSearchModal.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-20ba35e0"]]);
const _imports_0 = "" + globalThis.__publicAssetsURL("img/logo.png");
const _sfc_main$4 = {
  __name: "PageHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const navbar = ref([
      {
        name: "\u6700\u65B0\u6D88\u606F",
        path: "/category/news"
      },
      {
        name: "\u95DC\u65BC\u6211\u5011",
        path: "/about"
      },
      {
        name: "\u5275\u696D\u76F8\u95DC",
        path: "/category/start-up"
      },
      {
        name: "\u501F\u5740\u767B\u8A18",
        path: "/category/register"
      },
      {
        name: "\u5171\u4EAB\u7A7A\u9593",
        path: "/category/co-work"
      },
      {
        name: "\u5DE5\u5546\u767B\u8A18",
        path: "/category/business"
      },
      {
        name: "\u5176\u4ED6\u9805\u76EE",
        path: "/category/other"
      }
    ]);
    useNuxtApp();
    ref(null);
    useRoute();
    const active = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0$2;
      const _component_PageSearchModal = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "header_root" }, _attrs))} data-v-7e8a861a><nav class="navbar navbar-expand-xl fixed-top p-0" data-v-7e8a861a><div class="container-xl" data-v-7e8a861a><div class="navbar_content \\" data-v-7e8a861a><div class="container-xl" data-v-7e8a861a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "navbar-brand",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="logo"${ssrRenderAttr("src", _imports_0)} alt="logo" data-v-7e8a861a${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "logo",
                src: _imports_0,
                alt: "logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="navbar-toggler" data-v-7e8a861a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "c_btn",
        to: "/contact"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("contact"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("contact")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="hamburger_wrapper" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" data-v-7e8a861a><div class="${ssrRenderClass([unref(active), "hamburger"])}" data-v-7e8a861a><span class="line" data-v-7e8a861a></span><span class="line" data-v-7e8a861a></span><span class="line" data-v-7e8a861a></span></div></button></div></div></div><div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" data-v-7e8a861a><div class="offcanvas-body" data-v-7e8a861a><ul class="navbar-nav ms-auto" data-v-7e8a861a><li class="d-block d-xl-none" data-v-7e8a861a><button type="button" class="c_btn p-2" data-v-7e8a861a>\u641C\u5C0B</button></li><!--[-->`);
      ssrRenderList(unref(navbar), (link, index) => {
        _push(`<li data-v-7e8a861a>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "c_btn page-nav-link p-2",
          to: link.path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--><li class="d-none d-xl-block" data-v-7e8a861a><button type="button" class="search-wrapper c_btn p-2 c_btn p-2" data-v-7e8a861a>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa:search" }, null, _parent));
      _push(`</button></li><li class="d-none d-xl-block" data-v-7e8a861a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "c_btn contact",
        to: "/contact"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("contact"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("contact")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></div></nav>`);
      _push(ssrRenderComponent(_component_PageSearchModal, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/PageHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-7e8a861a"]]);
const _sfc_main$3 = {
  __name: "PageBanner",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const modules = [Autoplay, EffectFade, Navigation, Pagination];
    const pagination = {
      clickable: true
    };
    const navigation = {
      nextEl: ".next",
      prevEl: ".prev"
    };
    const autoplay = {
      delay: 4500,
      disableOnInteraction: false
    };
    const {
      data: bannerData,
      pending,
      error,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://picsum.photos/v2/list?page=3&limit=5", "$VtDvEloUxF")), __temp = await __temp, __restore(), __temp);
    const finishRender = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      if (unref(finishRender)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "banner_root" }, _attrs))} data-v-dfb988b7><div class="container-xl" data-v-dfb988b7>`);
        _push(ssrRenderComponent(unref(Swiper), {
          loop: true,
          autoplay,
          spaceBetween: 30,
          effect: "fade",
          pagination,
          navigation,
          modules,
          class: "mySwiper"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(bannerData), (banner) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), {
                  key: banner.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", banner.download_url)} alt="" data-v-dfb988b7${_scopeId2}><h1 class="slogan" data-v-dfb988b7${_scopeId2}>${ssrInterpolate(`\u5C0F\u7537\u5B69x\u4E0D\u7D66\u7CD6\u5C31\u6417\u86CB T\u03C9T`)}</h1>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: banner.download_url,
                          alt: ""
                        }, null, 8, ["src"]),
                        createVNode("h1", { class: "slogan" }, toDisplayString(`\u5C0F\u7537\u5B69x\u4E0D\u7D66\u7CD6\u5C31\u6417\u86CB T\u03C9T`))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--><button type="button" class="c_btn prev" data-v-dfb988b7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:chevron-left" }, null, _parent2, _scopeId));
              _push2(`</button><button type="button" class="c_btn next" data-v-dfb988b7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:chevron-right" }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(bannerData), (banner) => {
                  return openBlock(), createBlock(unref(SwiperSlide), {
                    key: banner.id
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: banner.download_url,
                        alt: ""
                      }, null, 8, ["src"]),
                      createVNode("h1", { class: "slogan" }, toDisplayString(`\u5C0F\u7537\u5B69x\u4E0D\u7D66\u7CD6\u5C31\u6417\u86CB T\u03C9T`))
                    ]),
                    _: 2
                  }, 1024);
                }), 128)),
                createVNode("button", {
                  type: "button",
                  class: "c_btn prev"
                }, [
                  createVNode(_component_Icon, { name: "fa6-solid:chevron-left" })
                ]),
                createVNode("button", {
                  type: "button",
                  class: "c_btn next"
                }, [
                  createVNode(_component_Icon, { name: "fa6-solid:chevron-right" })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/PageBanner.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-dfb988b7"]]);
const _sfc_main$2 = {
  __name: "PageFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const assets = useAssets();
    const infos = ref([
      {
        icon: assets.email,
        info: "hahaha@youxiang.com"
      },
      {
        icon: assets.instagram,
        info: "xiaojingjing"
      },
      {
        icon: assets.facebook,
        info: "xiaojingjing"
      },
      {
        icon: assets.phone,
        info: "0979-344-566"
      }
    ]);
    const links = ref([
      { name: "\u95DC\u65BC\u6211\u5011", path: "/about" },
      { name: "\u5275\u696D\u76F8\u95DC", path: "/category/start-up" },
      { name: "\u501F\u5740\u767B\u8A18", path: "/category/register" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(_attrs)} data-v-2aeff2e8><div class="footer_top" data-v-2aeff2e8><div class="container-md" data-v-2aeff2e8><div class="info-title" data-v-2aeff2e8> \u806F\u7D61\u6211\u5011 <div class="line" data-v-2aeff2e8></div></div><ul class="info_wrapper" data-v-2aeff2e8><!--[-->`);
      ssrRenderList(unref(infos), (info, index) => {
        _push(`<li class="info" data-v-2aeff2e8><div class="img_wrapper" data-v-2aeff2e8><img${ssrRenderAttr("src", info.icon)} alt="seal.email" data-v-2aeff2e8></div><span data-v-2aeff2e8>${ssrInterpolate(info.info)}</span></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="footer_bottom container-md" data-v-2aeff2e8><div class="logo_wrapper" data-v-2aeff2e8><img${ssrRenderAttr("src", _imports_0)} alt="logo" data-v-2aeff2e8></div><ul class="map" data-v-2aeff2e8><!--[-->`);
      ssrRenderList(unref(links), (link, index) => {
        _push(`<li data-v-2aeff2e8>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "c_btn",
          to: link.path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul><div class="copy" data-v-2aeff2e8>\xA9 Copyright All Rights reserved</div></div></footer>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/PageFooter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2aeff2e8"]]);
const _sfc_main$1 = {
  __name: "PagePrivacy",
  __ssrInlineRender: true,
  setup(__props) {
    const counterStore = useCounter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (!unref(counterStore).privacy) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          id: "privacyTool",
          class: "page_privacy_root"
        }, _attrs))} data-v-5ab60790><div class="text_wrapper" data-v-5ab60790> \u7576\u60A8\u4F7F\u7528\u6211\u5011\u7684\u7DB2\u7AD9\uFF0C\u5373\u8868\u793A\u60A8\u540C\u610F\u6211\u5011\u4F7F\u7528cookie\u3002 `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "c_btn privacy",
          to: "/privacy"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u96B1\u79C1\u6B0A\u653F\u7B56 `);
            } else {
              return [
                createTextVNode(" \u96B1\u79C1\u6B0A\u653F\u7B56 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><button type="button" class="c_btn tool" data-v-5ab60790>\u540C\u610F</button></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/PagePrivacy.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5ab60790"]]);
const _sfc_main = {
  __name: "PageScrollTop",
  __ssrInlineRender: true,
  setup(__props) {
    const hide = ref(false);
    const pageScrollTop = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      const _component_PagePrivacy = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "pageScrollTop",
        ref: pageScrollTop,
        class: "page_scroll_top_root"
      }, _attrs))} data-v-1ae1f215><div class="container-xl" data-v-1ae1f215>`);
      if (unref(hide)) {
        _push(`<button type="button" class="c_btn" data-v-1ae1f215>`);
        _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:chevron-up" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_PagePrivacy, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/PageScrollTop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1ae1f215"]]);

export { __nuxt_component_0 as _, __nuxt_component_1$1 as a, __nuxt_component_2 as b, __nuxt_component_3 as c };
//# sourceMappingURL=PageScrollTop.06349707.mjs.map
