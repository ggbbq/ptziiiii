import { Console } from 'node:console';
import { importModule } from 'local-pkg';

var node = {
  name: "node",
  async setup(global) {
    global.console.Console = Console;
    return {
      teardown(global2) {
        delete global2.console.Console;
      }
    };
  }
};

const LIVING_KEYS = [
  "DOMException",
  "URL",
  "URLSearchParams",
  "EventTarget",
  "NamedNodeMap",
  "Node",
  "Attr",
  "Element",
  "DocumentFragment",
  "DOMImplementation",
  "Document",
  "XMLDocument",
  "CharacterData",
  "Text",
  "CDATASection",
  "ProcessingInstruction",
  "Comment",
  "DocumentType",
  "NodeList",
  "RadioNodeList",
  "HTMLCollection",
  "HTMLOptionsCollection",
  "DOMStringMap",
  "DOMTokenList",
  "StyleSheetList",
  "HTMLElement",
  "HTMLHeadElement",
  "HTMLTitleElement",
  "HTMLBaseElement",
  "HTMLLinkElement",
  "HTMLMetaElement",
  "HTMLStyleElement",
  "HTMLBodyElement",
  "HTMLHeadingElement",
  "HTMLParagraphElement",
  "HTMLHRElement",
  "HTMLPreElement",
  "HTMLUListElement",
  "HTMLOListElement",
  "HTMLLIElement",
  "HTMLMenuElement",
  "HTMLDListElement",
  "HTMLDivElement",
  "HTMLAnchorElement",
  "HTMLAreaElement",
  "HTMLBRElement",
  "HTMLButtonElement",
  "HTMLCanvasElement",
  "HTMLDataElement",
  "HTMLDataListElement",
  "HTMLDetailsElement",
  "HTMLDialogElement",
  "HTMLDirectoryElement",
  "HTMLFieldSetElement",
  "HTMLFontElement",
  "HTMLFormElement",
  "HTMLHtmlElement",
  "HTMLImageElement",
  "HTMLInputElement",
  "HTMLLabelElement",
  "HTMLLegendElement",
  "HTMLMapElement",
  "HTMLMarqueeElement",
  "HTMLMediaElement",
  "HTMLMeterElement",
  "HTMLModElement",
  "HTMLOptGroupElement",
  "HTMLOptionElement",
  "HTMLOutputElement",
  "HTMLPictureElement",
  "HTMLProgressElement",
  "HTMLQuoteElement",
  "HTMLScriptElement",
  "HTMLSelectElement",
  "HTMLSlotElement",
  "HTMLSourceElement",
  "HTMLSpanElement",
  "HTMLTableCaptionElement",
  "HTMLTableCellElement",
  "HTMLTableColElement",
  "HTMLTableElement",
  "HTMLTimeElement",
  "HTMLTableRowElement",
  "HTMLTableSectionElement",
  "HTMLTemplateElement",
  "HTMLTextAreaElement",
  "HTMLUnknownElement",
  "HTMLFrameElement",
  "HTMLFrameSetElement",
  "HTMLIFrameElement",
  "HTMLEmbedElement",
  "HTMLObjectElement",
  "HTMLParamElement",
  "HTMLVideoElement",
  "HTMLAudioElement",
  "HTMLTrackElement",
  "HTMLFormControlsCollection",
  "SVGElement",
  "SVGGraphicsElement",
  "SVGSVGElement",
  "SVGTitleElement",
  "SVGAnimatedString",
  "SVGNumber",
  "SVGStringList",
  "Event",
  "CloseEvent",
  "CustomEvent",
  "MessageEvent",
  "ErrorEvent",
  "HashChangeEvent",
  "PopStateEvent",
  "StorageEvent",
  "ProgressEvent",
  "PageTransitionEvent",
  "UIEvent",
  "FocusEvent",
  "InputEvent",
  "MouseEvent",
  "KeyboardEvent",
  "TouchEvent",
  "CompositionEvent",
  "WheelEvent",
  "BarProp",
  "External",
  "Location",
  "History",
  "Screen",
  "Crypto",
  "Performance",
  "Navigator",
  "PluginArray",
  "MimeTypeArray",
  "Plugin",
  "MimeType",
  "FileReader",
  "Blob",
  "File",
  "FileList",
  "ValidityState",
  "DOMParser",
  "XMLSerializer",
  "FormData",
  "XMLHttpRequestEventTarget",
  "XMLHttpRequestUpload",
  "XMLHttpRequest",
  "WebSocket",
  "NodeFilter",
  "NodeIterator",
  "TreeWalker",
  "AbstractRange",
  "Range",
  "StaticRange",
  "Selection",
  "Storage",
  "CustomElementRegistry",
  "ShadowRoot",
  "MutationObserver",
  "MutationRecord",
  "Headers",
  "AbortController",
  "AbortSignal",
  "ArrayBuffer",
  // not specified in docs, but is available
  "Image",
  "Audio",
  "Option"
];
const OTHER_KEYS = [
  "addEventListener",
  "alert",
  "atob",
  "blur",
  "btoa",
  "cancelAnimationFrame",
  /* 'clearInterval', */
  /* 'clearTimeout', */
  "close",
  "confirm",
  /* 'console', */
  "createPopup",
  "dispatchEvent",
  "document",
  "focus",
  "frames",
  "getComputedStyle",
  "history",
  "innerHeight",
  "innerWidth",
  "length",
  "location",
  "matchMedia",
  "moveBy",
  "moveTo",
  "name",
  "navigator",
  "open",
  "outerHeight",
  "outerWidth",
  "pageXOffset",
  "pageYOffset",
  "parent",
  "postMessage",
  "print",
  "prompt",
  "removeEventListener",
  "requestAnimationFrame",
  "resizeBy",
  "resizeTo",
  "screen",
  "screenLeft",
  "screenTop",
  "screenX",
  "screenY",
  "scroll",
  "scrollBy",
  "scrollLeft",
  "scrollTo",
  "scrollTop",
  "scrollX",
  "scrollY",
  "self",
  /* 'setInterval', */
  /* 'setTimeout', */
  "stop",
  /* 'toString', */
  "top",
  "Window",
  "window"
];
const KEYS = LIVING_KEYS.concat(OTHER_KEYS);

const skipKeys = [
  "window",
  "self",
  "top",
  "parent"
];
function getWindowKeys(global, win) {
  const keys = new Set(KEYS.concat(Object.getOwnPropertyNames(win)).filter((k) => {
    if (skipKeys.includes(k))
      return false;
    if (k in global)
      return KEYS.includes(k);
    return true;
  }));
  return keys;
}
function isClassLikeName(name) {
  return name[0] === name[0].toUpperCase();
}
function populateGlobal(global, win, options = {}) {
  const { bindFunctions = false } = options;
  const keys = getWindowKeys(global, win);
  const originals = /* @__PURE__ */ new Map();
  const overrideObject = /* @__PURE__ */ new Map();
  for (const key of keys) {
    const boundFunction = bindFunctions && typeof win[key] === "function" && !isClassLikeName(key) && win[key].bind(win);
    if (KEYS.includes(key) && key in global)
      originals.set(key, global[key]);
    Object.defineProperty(global, key, {
      get() {
        if (overrideObject.has(key))
          return overrideObject.get(key);
        if (boundFunction)
          return boundFunction;
        return win[key];
      },
      set(v) {
        overrideObject.set(key, v);
      },
      configurable: true
    });
  }
  global.window = global;
  global.self = global;
  global.top = global;
  global.parent = global;
  if (global.global)
    global.global = global;
  if (global.document && global.document.defaultView) {
    Object.defineProperty(global.document, "defaultView", {
      get: () => global,
      enumerable: true,
      configurable: true
    });
  }
  skipKeys.forEach((k) => keys.add(k));
  return {
    keys,
    skipKeys,
    originals
  };
}

function catchWindowErrors(window) {
  let userErrorListenerCount = 0;
  function throwUnhandlerError(e) {
    if (userErrorListenerCount === 0 && e.error != null)
      process.emit("uncaughtException", e.error);
  }
  const addEventListener = window.addEventListener.bind(window);
  const removeEventListener = window.removeEventListener.bind(window);
  window.addEventListener("error", throwUnhandlerError);
  window.addEventListener = function(...args) {
    if (args[0] === "error")
      userErrorListenerCount++;
    return addEventListener.apply(this, args);
  };
  window.removeEventListener = function(...args) {
    if (args[0] === "error" && userErrorListenerCount)
      userErrorListenerCount--;
    return removeEventListener.apply(this, args);
  };
  return function clearErrorHandlers() {
    window.removeEventListener("error", throwUnhandlerError);
  };
}
var jsdom = {
  name: "jsdom",
  async setup(global, { jsdom = {} }) {
    const {
      CookieJar,
      JSDOM,
      ResourceLoader,
      VirtualConsole
    } = await importModule("jsdom");
    const {
      html = "<!DOCTYPE html>",
      userAgent,
      url = "http://localhost:3000",
      contentType = "text/html",
      pretendToBeVisual = true,
      includeNodeLocations = false,
      runScripts = "dangerously",
      resources,
      console = false,
      cookieJar = false,
      ...restOptions
    } = jsdom;
    const dom = new JSDOM(
      html,
      {
        pretendToBeVisual,
        resources: resources ?? (userAgent ? new ResourceLoader({ userAgent }) : void 0),
        runScripts,
        url,
        virtualConsole: console && global.console ? new VirtualConsole().sendTo(global.console) : void 0,
        cookieJar: cookieJar ? new CookieJar() : void 0,
        includeNodeLocations,
        contentType,
        userAgent,
        ...restOptions
      }
    );
    const { keys, originals } = populateGlobal(global, dom.window, { bindFunctions: true });
    const clearWindowErrors = catchWindowErrors(global);
    return {
      teardown(global2) {
        clearWindowErrors();
        dom.window.close();
        keys.forEach((key) => delete global2[key]);
        originals.forEach((v, k) => global2[k] = v);
      }
    };
  }
};

var happy = {
  name: "happy-dom",
  async setup(global) {
    const { Window, GlobalWindow } = await importModule("happy-dom");
    const win = new (GlobalWindow || Window)();
    const { keys, originals } = populateGlobal(global, win, { bindFunctions: true });
    return {
      teardown(global2) {
        win.happyDOM.cancelAsync();
        keys.forEach((key) => delete global2[key]);
        originals.forEach((v, k) => global2[k] = v);
      }
    };
  }
};

var edge = {
  name: "edge-runtime",
  async setup(global) {
    const { EdgeVM } = await importModule("@edge-runtime/vm");
    const vm = new EdgeVM({
      extend: (context) => {
        context.global = context;
        context.Buffer = Buffer;
        return context;
      }
    });
    const { keys, originals } = populateGlobal(global, vm.context, { bindFunctions: true });
    return {
      teardown(global2) {
        keys.forEach((key) => delete global2[key]);
        originals.forEach((v, k) => global2[k] = v);
      }
    };
  }
};

const environments = {
  node,
  jsdom,
  "happy-dom": happy,
  "edge-runtime": edge
};
const envPackageNames = {
  "jsdom": "jsdom",
  "happy-dom": "happy-dom",
  "edge-runtime": "@edge-runtime/vm"
};
function getEnvPackageName(env) {
  if (env === "node")
    return null;
  if (env in envPackageNames)
    return envPackageNames[env];
  return `vitest-environment-${env}`;
}

export { environments as e, getEnvPackageName as g, populateGlobal as p };
