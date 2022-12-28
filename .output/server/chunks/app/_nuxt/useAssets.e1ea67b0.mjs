const email = "" + globalThis.__buildAssetsURL("email.6c6ecbc3.svg");
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: email
}, Symbol.toStringTag, { value: "Module" }));
const error = "" + globalThis.__buildAssetsURL("error.98382bce.svg");
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: error
}, Symbol.toStringTag, { value: "Module" }));
const facebook = "" + globalThis.__buildAssetsURL("facebook.5b3b11f2.svg");
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: facebook
}, Symbol.toStringTag, { value: "Module" }));
const instagram = "" + globalThis.__buildAssetsURL("instagram.f4f09b5b.svg");
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: instagram
}, Symbol.toStringTag, { value: "Module" }));
const phone = "" + globalThis.__buildAssetsURL("phone.0d891743.svg");
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: phone
}, Symbol.toStringTag, { value: "Module" }));
const privacy = "" + globalThis.__buildAssetsURL("privacy.b9f3de0d.svg");
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: privacy
}, Symbol.toStringTag, { value: "Module" }));
const useAssets = () => {
  const svgs = /* @__PURE__ */ Object.assign({ "../assets/icon/email.svg": __vite_glob_0_0, "../assets/icon/error.svg": __vite_glob_0_1, "../assets/icon/facebook.svg": __vite_glob_0_2, "../assets/icon/instagram.svg": __vite_glob_0_3, "../assets/icon/phone.svg": __vite_glob_0_4, "../assets/icon/privacy.svg": __vite_glob_0_5 });
  const icon = (pathArray) => {
    const temp = {};
    pathArray.forEach((path) => {
      temp[path] = svgs[`../assets/icon/${path}.svg`].default;
    });
    return temp;
  };
  return {
    ...icon([
      "email",
      "instagram",
      "facebook",
      "phone",
      "error",
      "privacy"
    ])
  };
};

export { useAssets as u };
//# sourceMappingURL=useAssets.e1ea67b0.mjs.map
