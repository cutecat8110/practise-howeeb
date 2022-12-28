globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, getRequestHeaders, setResponseHeader, createError, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, joinURL, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routeRules":{"/__nuxt_error":{"cache":false}},"envPrefix":"NUXT_"},"public":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
const timingMiddleware = eventHandler((event) => {
  const start = globalTiming.start();
  const _end = event.res.end;
  event.res.end = function(chunk, encoding, cb) {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!event.res.headersSent) {
      event.res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(event.res, chunk, encoding, cb);
    return this;
  }.bind(event.res);
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(createRouter({ routes: config.nitro.routeRules }));
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(event, routeRules.redirect.to, routeRules.redirect.statusCode);
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(path);
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      if (validate(entry)) {
        useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    let _resSendBody;
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      },
      end(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      write(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      writeHead(statusCode, headers2) {
        this.statusCode = statusCode;
        if (headers2) {
          for (const header in headers2) {
            this.setHeader(header, headers2[header]);
          }
        }
        return this;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event) || _resSendBody;
    const headers = event.res.getHeaders();
    headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
    headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["cache-control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-iYOZKjAWMvN3FC6w3ptxJcenyXo\"",
    "mtime": "2022-12-28T01:42:05.907Z",
    "size": 6148,
    "path": "../public/.DS_Store"
  },
  "/img/logo.png": {
    "type": "image/png",
    "etag": "\"1839-VZlNhVRPMcmGoeRcBp1ZqwCz6A8\"",
    "mtime": "2022-12-28T01:42:05.905Z",
    "size": 6201,
    "path": "../public/img/logo.png"
  },
  "/_nuxt/CardList.5b780296.js": {
    "type": "application/javascript",
    "etag": "\"b85-ZI/E8jI3YrDyu9yzyEwhmKAjDWI\"",
    "mtime": "2022-12-28T01:42:05.903Z",
    "size": 2949,
    "path": "../public/_nuxt/CardList.5b780296.js"
  },
  "/_nuxt/CardList.aed59b77.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"791-06f9S+PT6tlEh9kkwBXZUqIVRTc\"",
    "mtime": "2022-12-28T01:42:05.902Z",
    "size": 1937,
    "path": "../public/_nuxt/CardList.aed59b77.css"
  },
  "/_nuxt/Icon.294af607.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"43-5Uom3aokUJYiRMTfQx0OPoBaxqs\"",
    "mtime": "2022-12-28T01:42:05.901Z",
    "size": 67,
    "path": "../public/_nuxt/Icon.294af607.css"
  },
  "/_nuxt/Icon.8c0aa00d.js": {
    "type": "application/javascript",
    "etag": "\"666a-/4cAoZPlL1//l714x3R7LLy7MsA\"",
    "mtime": "2022-12-28T01:42:05.901Z",
    "size": 26218,
    "path": "../public/_nuxt/Icon.8c0aa00d.js"
  },
  "/_nuxt/PageScrollTop.bae914b9.js": {
    "type": "application/javascript",
    "etag": "\"28a9-0IYxpIeoAzET5xKFAgZ1cEqNDO0\"",
    "mtime": "2022-12-28T01:42:05.900Z",
    "size": 10409,
    "path": "../public/_nuxt/PageScrollTop.bae914b9.js"
  },
  "/_nuxt/PageScrollTop.ca52123a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2594-PYz9ZYRrXdbzSq495YK/crTylz8\"",
    "mtime": "2022-12-28T01:42:05.899Z",
    "size": 9620,
    "path": "../public/_nuxt/PageScrollTop.ca52123a.css"
  },
  "/_nuxt/PingFang-Light.2acce16d.ttf": {
    "type": "font/ttf",
    "etag": "\"a55f38-CDrlcqPrXu8PckZ1N0+3TSTaNXE\"",
    "mtime": "2022-12-28T01:42:05.885Z",
    "size": 10837816,
    "path": "../public/_nuxt/PingFang-Light.2acce16d.ttf"
  },
  "/_nuxt/PingFang-Medium.f10f9595.ttf": {
    "type": "font/ttf",
    "etag": "\"a42110-3vFaYWUiUvho86ybb+fIrhQPKVY\"",
    "mtime": "2022-12-28T01:42:05.811Z",
    "size": 10756368,
    "path": "../public/_nuxt/PingFang-Medium.f10f9595.ttf"
  },
  "/_nuxt/PingFang-Regular.2ea6bd26.ttf": {
    "type": "font/ttf",
    "etag": "\"a4d174-I0xg+D40CDP/NVpON5SlLCrVpDw\"",
    "mtime": "2022-12-28T01:42:05.755Z",
    "size": 10801524,
    "path": "../public/_nuxt/PingFang-Regular.2ea6bd26.ttf"
  },
  "/_nuxt/PingFang-Semibold.7889590a.ttf": {
    "type": "font/ttf",
    "etag": "\"a3c0a8-s2n/EvrhJefUMEfrwIUynH6MmBc\"",
    "mtime": "2022-12-28T01:42:05.582Z",
    "size": 10731688,
    "path": "../public/_nuxt/PingFang-Semibold.7889590a.ttf"
  },
  "/_nuxt/PingFang-Thin.9ec23259.ttf": {
    "type": "font/ttf",
    "etag": "\"a5ae08-/1WWjkbbUlxsmL5EiLqscWChDP4\"",
    "mtime": "2022-12-28T01:42:05.543Z",
    "size": 10857992,
    "path": "../public/_nuxt/PingFang-Thin.9ec23259.ttf"
  },
  "/_nuxt/PingFang-Ultralight.b06475ab.ttf": {
    "type": "font/ttf",
    "etag": "\"a5d790-qSSqZkwmLIvQBXSwMo131iPK334\"",
    "mtime": "2022-12-28T01:42:05.513Z",
    "size": 10868624,
    "path": "../public/_nuxt/PingFang-Ultralight.b06475ab.ttf"
  },
  "/_nuxt/_...slug_.a1835caf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"632-IbB0rYqTHFNkeBYX25+ZjptC2MU\"",
    "mtime": "2022-12-28T01:42:05.496Z",
    "size": 1586,
    "path": "../public/_nuxt/_...slug_.a1835caf.css"
  },
  "/_nuxt/_...slug_.a5d32094.js": {
    "type": "application/javascript",
    "etag": "\"31e-KmoG0p7vVlH59Vy76prQV4J00iQ\"",
    "mtime": "2022-12-28T01:42:05.495Z",
    "size": 798,
    "path": "../public/_nuxt/_...slug_.a5d32094.js"
  },
  "/_nuxt/_id_.65b697b7.js": {
    "type": "application/javascript",
    "etag": "\"199d-2MQCgSww6+R78887h7NywJajbro\"",
    "mtime": "2022-12-28T01:42:05.495Z",
    "size": 6557,
    "path": "../public/_nuxt/_id_.65b697b7.js"
  },
  "/_nuxt/_id_.89e0d72f.js": {
    "type": "application/javascript",
    "etag": "\"d8-ml6KQb8WHOrcdpGAPheqvMFsMLk\"",
    "mtime": "2022-12-28T01:42:05.494Z",
    "size": 216,
    "path": "../public/_nuxt/_id_.89e0d72f.js"
  },
  "/_nuxt/_id_.abf66f42.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ebc-bJLRRw5W/N5JkCH3hWfsAFPbwFA\"",
    "mtime": "2022-12-28T01:42:05.494Z",
    "size": 3772,
    "path": "../public/_nuxt/_id_.abf66f42.css"
  },
  "/_nuxt/_plugin-vue_export-helper.a1a6add7.js": {
    "type": "application/javascript",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2022-12-28T01:42:05.493Z",
    "size": 91,
    "path": "../public/_nuxt/_plugin-vue_export-helper.a1a6add7.js"
  },
  "/_nuxt/about.ba4fc61b.js": {
    "type": "application/javascript",
    "etag": "\"d4-Q3sS17kuESn7HhGpKcrCTGoZrjk\"",
    "mtime": "2022-12-28T01:42:05.493Z",
    "size": 212,
    "path": "../public/_nuxt/about.ba4fc61b.js"
  },
  "/_nuxt/composables.7286ef8c.js": {
    "type": "application/javascript",
    "etag": "\"5c-m50xvT0oooVxHfXZTR0e/PqOMjE\"",
    "mtime": "2022-12-28T01:42:05.492Z",
    "size": 92,
    "path": "../public/_nuxt/composables.7286ef8c.js"
  },
  "/_nuxt/contact.39d66e19.js": {
    "type": "application/javascript",
    "etag": "\"d6-2RtkGBrz2sNZPegcXiPHl7ZlXXI\"",
    "mtime": "2022-12-28T01:42:05.492Z",
    "size": 214,
    "path": "../public/_nuxt/contact.39d66e19.js"
  },
  "/_nuxt/default.62605150.js": {
    "type": "application/javascript",
    "etag": "\"519-s3OAK7yYjd1WFd4xjp0j7/4MiNk\"",
    "mtime": "2022-12-28T01:42:05.492Z",
    "size": 1305,
    "path": "../public/_nuxt/default.62605150.js"
  },
  "/_nuxt/default.6358cd22.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1fb-xMndEMvYozrmDpfvAirQ/Xi9Dqw\"",
    "mtime": "2022-12-28T01:42:05.491Z",
    "size": 507,
    "path": "../public/_nuxt/default.6358cd22.css"
  },
  "/_nuxt/email.6c6ecbc3.svg": {
    "type": "image/svg+xml",
    "etag": "\"26e6-6QKBeXPBCZfA9ICWCRjYeEfJy8A\"",
    "mtime": "2022-12-28T01:42:05.491Z",
    "size": 9958,
    "path": "../public/_nuxt/email.6c6ecbc3.svg"
  },
  "/_nuxt/entry.d5061304.js": {
    "type": "application/javascript",
    "etag": "\"709e9-n9FE5Ck9CbfPqtCMj7PjBD3IOJU\"",
    "mtime": "2022-12-28T01:42:05.490Z",
    "size": 461289,
    "path": "../public/_nuxt/entry.d5061304.js"
  },
  "/_nuxt/entry.d8657b95.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"336cc-KJ0Ri165tUUm4zbvxkpHtoQX0AI\"",
    "mtime": "2022-12-28T01:42:05.489Z",
    "size": 210636,
    "path": "../public/_nuxt/entry.d8657b95.css"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2022-12-28T01:42:05.488Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.75a72852.js": {
    "type": "application/javascript",
    "etag": "\"909-/TahMeM+oHRyldCjJW3Q0E1a43M\"",
    "mtime": "2022-12-28T01:42:05.488Z",
    "size": 2313,
    "path": "../public/_nuxt/error-404.75a72852.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2022-12-28T01:42:05.487Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-500.df5d33c9.js": {
    "type": "application/javascript",
    "etag": "\"7b2-jIMPzW9raThy9HF8XoFRHO3u0L4\"",
    "mtime": "2022-12-28T01:42:05.487Z",
    "size": 1970,
    "path": "../public/_nuxt/error-500.df5d33c9.js"
  },
  "/_nuxt/error-component.2a445fb2.js": {
    "type": "application/javascript",
    "etag": "\"501-DuOpwNBCkzMpT8ELMKHcP8ghOlI\"",
    "mtime": "2022-12-28T01:42:05.486Z",
    "size": 1281,
    "path": "../public/_nuxt/error-component.2a445fb2.js"
  },
  "/_nuxt/error.98382bce.svg": {
    "type": "image/svg+xml",
    "etag": "\"aae-jkg0PKd2+OE4SM8105DaJui3nT4\"",
    "mtime": "2022-12-28T01:42:05.486Z",
    "size": 2734,
    "path": "../public/_nuxt/error.98382bce.svg"
  },
  "/_nuxt/facebook.5b3b11f2.svg": {
    "type": "image/svg+xml",
    "etag": "\"1a3c-8oDPOvxH+sZCDi5SmlnHg1YVAZM\"",
    "mtime": "2022-12-28T01:42:05.486Z",
    "size": 6716,
    "path": "../public/_nuxt/facebook.5b3b11f2.svg"
  },
  "/_nuxt/fetch.0617103f.js": {
    "type": "application/javascript",
    "etag": "\"2bd1-BRjV5W2ySveLSAkqGyyl+3j2v/E\"",
    "mtime": "2022-12-28T01:42:05.485Z",
    "size": 11217,
    "path": "../public/_nuxt/fetch.0617103f.js"
  },
  "/_nuxt/home.b2b56b2c.js": {
    "type": "application/javascript",
    "etag": "\"24d-EUkytKHvkC7j2T85ITrCawid7BM\"",
    "mtime": "2022-12-28T01:42:05.485Z",
    "size": 589,
    "path": "../public/_nuxt/home.b2b56b2c.js"
  },
  "/_nuxt/home.e378ebf5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a1-ct1TxckJq3dskYCXlzjqFcQA7Mw\"",
    "mtime": "2022-12-28T01:42:05.484Z",
    "size": 161,
    "path": "../public/_nuxt/home.e378ebf5.css"
  },
  "/_nuxt/index.99ae44da.js": {
    "type": "application/javascript",
    "etag": "\"f72-FTPUlcrth914SvXsbCccjW3Qi5o\"",
    "mtime": "2022-12-28T01:42:05.484Z",
    "size": 3954,
    "path": "../public/_nuxt/index.99ae44da.js"
  },
  "/_nuxt/index.bb01269c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c58-bFv8b+SOpp8MRBi0HLl5BBd+UmI\"",
    "mtime": "2022-12-28T01:42:05.484Z",
    "size": 3160,
    "path": "../public/_nuxt/index.bb01269c.css"
  },
  "/_nuxt/instagram.f4f09b5b.svg": {
    "type": "image/svg+xml",
    "etag": "\"28d8-aYJhF2gXNBb5w1loJM6eKAF6HTM\"",
    "mtime": "2022-12-28T01:42:05.483Z",
    "size": 10456,
    "path": "../public/_nuxt/instagram.f4f09b5b.svg"
  },
  "/_nuxt/phone.0d891743.svg": {
    "type": "image/svg+xml",
    "etag": "\"2012-pc7Sl2R366/PwiT9LD7IqP+QF4I\"",
    "mtime": "2022-12-28T01:42:05.483Z",
    "size": 8210,
    "path": "../public/_nuxt/phone.0d891743.svg"
  },
  "/_nuxt/privacy.5c41ab22.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"207-/C21ADvxULtmb5a8cqsC9r6garg\"",
    "mtime": "2022-12-28T01:42:05.482Z",
    "size": 519,
    "path": "../public/_nuxt/privacy.5c41ab22.css"
  },
  "/_nuxt/privacy.b0211c1b.js": {
    "type": "application/javascript",
    "etag": "\"2ea6-g/CnRVtenRydsvGkh6F9fWJWGK8\"",
    "mtime": "2022-12-28T01:42:05.482Z",
    "size": 11942,
    "path": "../public/_nuxt/privacy.b0211c1b.js"
  },
  "/_nuxt/privacy.b9f3de0d.svg": {
    "type": "image/svg+xml",
    "etag": "\"48e-7kz9L6vqTC3eCVo3RkC8XK56Bb4\"",
    "mtime": "2022-12-28T01:42:05.481Z",
    "size": 1166,
    "path": "../public/_nuxt/privacy.b9f3de0d.svg"
  },
  "/_nuxt/swiper-slide.4b94b2b3.js": {
    "type": "application/javascript",
    "etag": "\"480d-f6kD1ExgfRZNIMz8n/0DZqf01Ck\"",
    "mtime": "2022-12-28T01:42:05.481Z",
    "size": 18445,
    "path": "../public/_nuxt/swiper-slide.4b94b2b3.js"
  },
  "/_nuxt/useAssets.e1ea67b0.js": {
    "type": "application/javascript",
    "etag": "\"54d-eKUqExVNH8pK9JPCKFCsjSRMObA\"",
    "mtime": "2022-12-28T01:42:05.480Z",
    "size": 1357,
    "path": "../public/_nuxt/useAssets.e1ea67b0.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort().concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end();
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end();
      return;
    }
  }
  if (asset.type && !event.res.getHeader("Content-Type")) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.getHeader("ETag")) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.getHeader("Last-Modified")) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.res.getHeader("Content-Encoding")) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size && !event.res.getHeader("Content-Length")) {
    event.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_GBYKsN = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_GBYKsN, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_GBYKsN, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(h.route.replace(/:\w+|\*\*/g, "_"));
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
