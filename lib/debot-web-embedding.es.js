var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var commonjsGlobal$1 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var react = { exports: {} };
var react_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$2 = objectAssign, n$2 = 60103, p$2 = 60106;
react_production_min.Fragment = 60107;
react_production_min.StrictMode = 60108;
react_production_min.Profiler = 60114;
var q$2 = 60109, r$3 = 60110, t$1 = 60112;
react_production_min.Suspense = 60113;
var u$1 = 60115, v$2 = 60116;
if (typeof Symbol === "function" && Symbol.for) {
  var w$2 = Symbol.for;
  n$2 = w$2("react.element");
  p$2 = w$2("react.portal");
  react_production_min.Fragment = w$2("react.fragment");
  react_production_min.StrictMode = w$2("react.strict_mode");
  react_production_min.Profiler = w$2("react.profiler");
  q$2 = w$2("react.provider");
  r$3 = w$2("react.context");
  t$1 = w$2("react.forward_ref");
  react_production_min.Suspense = w$2("react.suspense");
  u$1 = w$2("react.memo");
  v$2 = w$2("react.lazy");
}
var x$2 = typeof Symbol === "function" && Symbol.iterator;
function y$3(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = x$2 && a[x$2] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
function z$2(a) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var A$2 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, B$2 = {};
function C$1(a, b2, c2) {
  this.props = a;
  this.context = b2;
  this.refs = B$2;
  this.updater = c2 || A$2;
}
C$1.prototype.isReactComponent = {};
C$1.prototype.setState = function(a, b2) {
  if (typeof a !== "object" && typeof a !== "function" && a != null)
    throw Error(z$2(85));
  this.updater.enqueueSetState(this, a, b2, "setState");
};
C$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function D$2() {
}
D$2.prototype = C$1.prototype;
function E$2(a, b2, c2) {
  this.props = a;
  this.context = b2;
  this.refs = B$2;
  this.updater = c2 || A$2;
}
var F$2 = E$2.prototype = new D$2();
F$2.constructor = E$2;
l$2(F$2, C$1.prototype);
F$2.isPureReactComponent = true;
var G$2 = { current: null }, H$2 = Object.prototype.hasOwnProperty, I$2 = { key: true, ref: true, __self: true, __source: true };
function J(a, b2, c2) {
  var e2, d2 = {}, k2 = null, h2 = null;
  if (b2 != null)
    for (e2 in b2.ref !== void 0 && (h2 = b2.ref), b2.key !== void 0 && (k2 = "" + b2.key), b2)
      H$2.call(b2, e2) && !I$2.hasOwnProperty(e2) && (d2[e2] = b2[e2]);
  var g2 = arguments.length - 2;
  if (g2 === 1)
    d2.children = c2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    d2.children = f2;
  }
  if (a && a.defaultProps)
    for (e2 in g2 = a.defaultProps, g2)
      d2[e2] === void 0 && (d2[e2] = g2[e2]);
  return { $$typeof: n$2, type: a, key: k2, ref: h2, props: d2, _owner: G$2.current };
}
function K(a, b2) {
  return { $$typeof: n$2, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
}
function L(a) {
  return typeof a === "object" && a !== null && a.$$typeof === n$2;
}
function escape(a) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b2[a2];
  });
}
var M$1 = /\/+/g;
function N$1(a, b2) {
  return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b2.toString(36);
}
function O$1(a, b2, c2, e2, d2) {
  var k2 = typeof a;
  if (k2 === "undefined" || k2 === "boolean")
    a = null;
  var h2 = false;
  if (a === null)
    h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case n$2:
          case p$2:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a, d2 = d2(h2), a = e2 === "" ? "." + N$1(h2, 0) : e2, Array.isArray(d2) ? (c2 = "", a != null && (c2 = a.replace(M$1, "$&/") + "/"), O$1(d2, b2, c2, "", function(a2) {
      return a2;
    })) : d2 != null && (L(d2) && (d2 = K(d2, c2 + (!d2.key || h2 && h2.key === d2.key ? "" : ("" + d2.key).replace(M$1, "$&/") + "/") + a)), b2.push(d2)), 1;
  h2 = 0;
  e2 = e2 === "" ? "." : e2 + ":";
  if (Array.isArray(a))
    for (var g2 = 0; g2 < a.length; g2++) {
      k2 = a[g2];
      var f2 = e2 + N$1(k2, g2);
      h2 += O$1(k2, b2, c2, f2, d2);
    }
  else if (f2 = y$3(a), typeof f2 === "function")
    for (a = f2.call(a), g2 = 0; !(k2 = a.next()).done; )
      k2 = k2.value, f2 = e2 + N$1(k2, g2++), h2 += O$1(k2, b2, c2, f2, d2);
  else if (k2 === "object")
    throw b2 = "" + a, Error(z$2(31, b2 === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2));
  return h2;
}
function P$1(a, b2, c2) {
  if (a == null)
    return a;
  var e2 = [], d2 = 0;
  O$1(a, e2, "", "", function(a2) {
    return b2.call(c2, a2, d2++);
  });
  return e2;
}
function Q(a) {
  if (a._status === -1) {
    var b2 = a._result;
    b2 = b2();
    a._status = 0;
    a._result = b2;
    b2.then(function(b3) {
      a._status === 0 && (b3 = b3.default, a._status = 1, a._result = b3);
    }, function(b3) {
      a._status === 0 && (a._status = 2, a._result = b3);
    });
  }
  if (a._status === 1)
    return a._result;
  throw a._result;
}
var R$1 = { current: null };
function S$1() {
  var a = R$1.current;
  if (a === null)
    throw Error(z$2(321));
  return a;
}
var T$1 = { ReactCurrentDispatcher: R$1, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: G$2, IsSomeRendererActing: { current: false }, assign: l$2 };
react_production_min.Children = { map: P$1, forEach: function(a, b2, c2) {
  P$1(a, function() {
    b2.apply(this, arguments);
  }, c2);
}, count: function(a) {
  var b2 = 0;
  P$1(a, function() {
    b2++;
  });
  return b2;
}, toArray: function(a) {
  return P$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!L(a))
    throw Error(z$2(143));
  return a;
} };
react_production_min.Component = C$1;
react_production_min.PureComponent = E$2;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T$1;
react_production_min.cloneElement = function(a, b2, c2) {
  if (a === null || a === void 0)
    throw Error(z$2(267, a));
  var e2 = l$2({}, a.props), d2 = a.key, k2 = a.ref, h2 = a._owner;
  if (b2 != null) {
    b2.ref !== void 0 && (k2 = b2.ref, h2 = G$2.current);
    b2.key !== void 0 && (d2 = "" + b2.key);
    if (a.type && a.type.defaultProps)
      var g2 = a.type.defaultProps;
    for (f2 in b2)
      H$2.call(b2, f2) && !I$2.hasOwnProperty(f2) && (e2[f2] = b2[f2] === void 0 && g2 !== void 0 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (f2 === 1)
    e2.children = c2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    e2.children = g2;
  }
  return {
    $$typeof: n$2,
    type: a.type,
    key: d2,
    ref: k2,
    props: e2,
    _owner: h2
  };
};
react_production_min.createContext = function(a, b2) {
  b2 === void 0 && (b2 = null);
  a = { $$typeof: r$3, _calculateChangedBits: b2, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };
  a.Provider = { $$typeof: q$2, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = J;
react_production_min.createFactory = function(a) {
  var b2 = J.bind(null, a);
  b2.type = a;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: t$1, render: a };
};
react_production_min.isValidElement = L;
react_production_min.lazy = function(a) {
  return { $$typeof: v$2, _payload: { _status: -1, _result: a }, _init: Q };
};
react_production_min.memo = function(a, b2) {
  return { $$typeof: u$1, type: a, compare: b2 === void 0 ? null : b2 };
};
react_production_min.useCallback = function(a, b2) {
  return S$1().useCallback(a, b2);
};
react_production_min.useContext = function(a, b2) {
  return S$1().useContext(a, b2);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useEffect = function(a, b2) {
  return S$1().useEffect(a, b2);
};
react_production_min.useImperativeHandle = function(a, b2, c2) {
  return S$1().useImperativeHandle(a, b2, c2);
};
react_production_min.useLayoutEffect = function(a, b2) {
  return S$1().useLayoutEffect(a, b2);
};
react_production_min.useMemo = function(a, b2) {
  return S$1().useMemo(a, b2);
};
react_production_min.useReducer = function(a, b2, c2) {
  return S$1().useReducer(a, b2, c2);
};
react_production_min.useRef = function(a) {
  return S$1().useRef(a);
};
react_production_min.useState = function(a) {
  return S$1().useState(a);
};
react_production_min.version = "17.0.2";
{
  react.exports = react_production_min;
}
var React$1 = react.exports;
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  var f2, g2, h2, k2;
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    var t2 = null, u2 = null, w2 = function() {
      if (t2 !== null)
        try {
          var a = exports.unstable_now();
          t2(true, a);
          t2 = null;
        } catch (b2) {
          throw setTimeout(w2, 0), b2;
        }
    };
    f2 = function(a) {
      t2 !== null ? setTimeout(f2, 0, a) : (t2 = a, setTimeout(w2, 0));
    };
    g2 = function(a, b2) {
      u2 = setTimeout(a, b2);
    };
    h2 = function() {
      clearTimeout(u2);
    };
    exports.unstable_shouldYield = function() {
      return false;
    };
    k2 = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var x = window.setTimeout, y2 = window.clearTimeout;
    if (typeof console !== "undefined") {
      var z2 = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      typeof z2 !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A2 = false, B2 = null, C2 = -1, D2 = 5, E2 = 0;
    exports.unstable_shouldYield = function() {
      return exports.unstable_now() >= E2;
    };
    k2 = function() {
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D2 = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    var F2 = new MessageChannel(), G2 = F2.port2;
    F2.port1.onmessage = function() {
      if (B2 !== null) {
        var a = exports.unstable_now();
        E2 = a + D2;
        try {
          B2(true, a) ? G2.postMessage(null) : (A2 = false, B2 = null);
        } catch (b2) {
          throw G2.postMessage(null), b2;
        }
      } else
        A2 = false;
    };
    f2 = function(a) {
      B2 = a;
      A2 || (A2 = true, G2.postMessage(null));
    };
    g2 = function(a, b2) {
      C2 = x(function() {
        a(exports.unstable_now());
      }, b2);
    };
    h2 = function() {
      y2(C2);
      C2 = -1;
    };
  }
  function H2(a, b2) {
    var c2 = a.length;
    a.push(b2);
    a:
      for (; ; ) {
        var d2 = c2 - 1 >>> 1, e2 = a[d2];
        if (e2 !== void 0 && 0 < I2(e2, b2))
          a[d2] = b2, a[c2] = e2, c2 = d2;
        else
          break a;
      }
  }
  function J2(a) {
    a = a[0];
    return a === void 0 ? null : a;
  }
  function K2(a) {
    var b2 = a[0];
    if (b2 !== void 0) {
      var c2 = a.pop();
      if (c2 !== b2) {
        a[0] = c2;
        a:
          for (var d2 = 0, e2 = a.length; d2 < e2; ) {
            var m2 = 2 * (d2 + 1) - 1, n2 = a[m2], v2 = m2 + 1, r2 = a[v2];
            if (n2 !== void 0 && 0 > I2(n2, c2))
              r2 !== void 0 && 0 > I2(r2, n2) ? (a[d2] = r2, a[v2] = c2, d2 = v2) : (a[d2] = n2, a[m2] = c2, d2 = m2);
            else if (r2 !== void 0 && 0 > I2(r2, c2))
              a[d2] = r2, a[v2] = c2, d2 = v2;
            else
              break a;
          }
      }
      return b2;
    }
    return null;
  }
  function I2(a, b2) {
    var c2 = a.sortIndex - b2.sortIndex;
    return c2 !== 0 ? c2 : a.id - b2.id;
  }
  var L2 = [], M2 = [], N2 = 1, O2 = null, P2 = 3, Q2 = false, R2 = false, S2 = false;
  function T2(a) {
    for (var b2 = J2(M2); b2 !== null; ) {
      if (b2.callback === null)
        K2(M2);
      else if (b2.startTime <= a)
        K2(M2), b2.sortIndex = b2.expirationTime, H2(L2, b2);
      else
        break;
      b2 = J2(M2);
    }
  }
  function U2(a) {
    S2 = false;
    T2(a);
    if (!R2)
      if (J2(L2) !== null)
        R2 = true, f2(V2);
      else {
        var b2 = J2(M2);
        b2 !== null && g2(U2, b2.startTime - a);
      }
  }
  function V2(a, b2) {
    R2 = false;
    S2 && (S2 = false, h2());
    Q2 = true;
    var c2 = P2;
    try {
      T2(b2);
      for (O2 = J2(L2); O2 !== null && (!(O2.expirationTime > b2) || a && !exports.unstable_shouldYield()); ) {
        var d2 = O2.callback;
        if (typeof d2 === "function") {
          O2.callback = null;
          P2 = O2.priorityLevel;
          var e2 = d2(O2.expirationTime <= b2);
          b2 = exports.unstable_now();
          typeof e2 === "function" ? O2.callback = e2 : O2 === J2(L2) && K2(L2);
          T2(b2);
        } else
          K2(L2);
        O2 = J2(L2);
      }
      if (O2 !== null)
        var m2 = true;
      else {
        var n2 = J2(M2);
        n2 !== null && g2(U2, n2.startTime - b2);
        m2 = false;
      }
      return m2;
    } finally {
      O2 = null, P2 = c2, Q2 = false;
    }
  }
  var W2 = k2;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    R2 || Q2 || (R2 = true, f2(V2));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return P2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return J2(L2);
  };
  exports.unstable_next = function(a) {
    switch (P2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = P2;
    }
    var c2 = P2;
    P2 = b2;
    try {
      return a();
    } finally {
      P2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W2;
  exports.unstable_runWithPriority = function(a, b2) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c2 = P2;
    P2 = a;
    try {
      return b2();
    } finally {
      P2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a, b2, c2) {
    var d2 = exports.unstable_now();
    typeof c2 === "object" && c2 !== null ? (c2 = c2.delay, c2 = typeof c2 === "number" && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a = { id: N2++, callback: b2, priorityLevel: a, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a.sortIndex = c2, H2(M2, a), J2(L2) === null && a === J2(M2) && (S2 ? h2() : S2 = true, g2(U2, c2 - d2))) : (a.sortIndex = e2, H2(L2, a), R2 || Q2 || (R2 = true, f2(V2)));
    return a;
  };
  exports.unstable_wrapCallback = function(a) {
    var b2 = P2;
    return function() {
      var c2 = P2;
      P2 = b2;
      try {
        return a.apply(this, arguments);
      } finally {
        P2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = react.exports, m$2 = objectAssign, r$2 = scheduler.exports;
function y$2(a) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!aa)
  throw Error(y$2(227));
var ba = new Set(), ca = {};
function da(a, b2) {
  ea(a, b2);
  ea(a + "Capture", b2);
}
function ea(a, b2) {
  ca[a] = b2;
  for (a = 0; a < b2.length; a++)
    ba.add(b2[a]);
}
var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined"), ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ia = Object.prototype.hasOwnProperty, ja = {}, ka = {};
function la(a) {
  if (ia.call(ka, a))
    return true;
  if (ia.call(ja, a))
    return false;
  if (ha.test(a))
    return ka[a] = true;
  ja[a] = true;
  return false;
}
function ma(a, b2, c2, d2) {
  if (c2 !== null && c2.type === 0)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2)
        return false;
      if (c2 !== null)
        return !c2.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return a !== "data-" && a !== "aria-";
    default:
      return false;
  }
}
function na(a, b2, c2, d2) {
  if (b2 === null || typeof b2 === "undefined" || ma(a, b2, c2, d2))
    return true;
  if (d2)
    return false;
  if (c2 !== null)
    switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return b2 === false;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function B$1(a, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = b2 === 2 || b2 === 3 || b2 === 4;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var D$1 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  D$1[a] = new B$1(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b2 = a[0];
  D$1[b2] = new B$1(b2, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  D$1[a] = new B$1(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  D$1[a] = new B$1(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  D$1[a] = new B$1(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  D$1[a] = new B$1(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  D$1[a] = new B$1(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  D$1[a] = new B$1(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  D$1[a] = new B$1(a, 5, false, a.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b2 = a.replace(oa, pa);
  D$1[b2] = new B$1(b2, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b2 = a.replace(oa, pa);
  D$1[b2] = new B$1(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b2 = a.replace(oa, pa);
  D$1[b2] = new B$1(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  D$1[a] = new B$1(a, 1, false, a.toLowerCase(), null, false, false);
});
D$1.xlinkHref = new B$1("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  D$1[a] = new B$1(a, 1, false, a.toLowerCase(), null, true, true);
});
function qa(a, b2, c2, d2) {
  var e2 = D$1.hasOwnProperty(b2) ? D$1[b2] : null;
  var f2 = e2 !== null ? e2.type === 0 : d2 ? false : !(2 < b2.length) || b2[0] !== "o" && b2[0] !== "O" || b2[1] !== "n" && b2[1] !== "N" ? false : true;
  f2 || (na(b2, c2, e2, d2) && (c2 = null), d2 || e2 === null ? la(b2) && (c2 === null ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a[e2.propertyName] = c2 === null ? e2.type === 3 ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, c2 === null ? a.removeAttribute(b2) : (e2 = e2.type, c2 = e2 === 3 || e2 === 4 && c2 === true ? "" : "" + c2, d2 ? a.setAttributeNS(d2, b2, c2) : a.setAttribute(b2, c2))));
}
var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, sa = 60103, ta = 60106, ua$1 = 60107, wa = 60108, xa = 60114, ya = 60109, za = 60110, Aa = 60112, Ba = 60113, Ca = 60120, Da = 60115, Ea = 60116, Fa = 60121, Ga = 60128, Ha = 60129, Ia = 60130, Ja = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  var E$1 = Symbol.for;
  sa = E$1("react.element");
  ta = E$1("react.portal");
  ua$1 = E$1("react.fragment");
  wa = E$1("react.strict_mode");
  xa = E$1("react.profiler");
  ya = E$1("react.provider");
  za = E$1("react.context");
  Aa = E$1("react.forward_ref");
  Ba = E$1("react.suspense");
  Ca = E$1("react.suspense_list");
  Da = E$1("react.memo");
  Ea = E$1("react.lazy");
  Fa = E$1("react.block");
  E$1("react.scope");
  Ga = E$1("react.opaque.id");
  Ha = E$1("react.debug_trace_mode");
  Ia = E$1("react.offscreen");
  Ja = E$1("react.legacy_hidden");
}
var Ka = typeof Symbol === "function" && Symbol.iterator;
function La(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = Ka && a[Ka] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
var Ma;
function Na(a) {
  if (Ma === void 0)
    try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      Ma = b2 && b2[1] || "";
    }
  return "\n" + Ma + a;
}
var Oa = false;
function Pa(a, b2) {
  if (!a || Oa)
    return "";
  Oa = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (k2) {
          var d2 = k2;
        }
        Reflect.construct(a, [], b2);
      } else {
        try {
          b2.call();
        } catch (k2) {
          d2 = k2;
        }
        a.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k2) {
        d2 = k2;
      }
      a();
    }
  } catch (k2) {
    if (k2 && d2 && typeof k2.stack === "string") {
      for (var e2 = k2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e2[g2] !== f2[h2]) {
          if (g2 !== 1 || h2 !== 1) {
            do
              if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2])
                return "\n" + e2[g2].replace(" at new ", " at ");
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c2;
  }
  return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
}
function Qa(a) {
  switch (a.tag) {
    case 5:
      return Na(a.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Pa(a.type, false), a;
    case 11:
      return a = Pa(a.type.render, false), a;
    case 22:
      return a = Pa(a.type._render, false), a;
    case 1:
      return a = Pa(a.type, true), a;
    default:
      return "";
  }
}
function Ra(a) {
  if (a == null)
    return null;
  if (typeof a === "function")
    return a.displayName || a.name || null;
  if (typeof a === "string")
    return a;
  switch (a) {
    case ua$1:
      return "Fragment";
    case ta:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if (typeof a === "object")
    switch (a.$$typeof) {
      case za:
        return (a.displayName || "Context") + ".Consumer";
      case ya:
        return (a._context.displayName || "Context") + ".Provider";
      case Aa:
        var b2 = a.render;
        b2 = b2.displayName || b2.name || "";
        return a.displayName || (b2 !== "" ? "ForwardRef(" + b2 + ")" : "ForwardRef");
      case Da:
        return Ra(a.type);
      case Fa:
        return Ra(a._render);
      case Ea:
        b2 = a._payload;
        a = a._init;
        try {
          return Ra(a(b2));
        } catch (c2) {
        }
    }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b2 = a.type;
  return (a = a.nodeName) && a.toLowerCase() === "input" && (b2 === "checkbox" || b2 === "radio");
}
function Ua(a) {
  var b2 = Ta(a) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d2 = "" + a[b2];
  if (!a.hasOwnProperty(b2) && typeof c2 !== "undefined" && typeof c2.get === "function" && typeof c2.set === "function") {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a2) {
      d2 = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a2) {
      d2 = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b2];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b2 = a._valueTracker;
  if (!b2)
    return true;
  var c2 = b2.getValue();
  var d2 = "";
  a && (d2 = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d2;
  return a !== c2 ? (b2.setValue(a), true) : false;
}
function Xa(a) {
  a = a || (typeof document !== "undefined" ? document : void 0);
  if (typeof a === "undefined")
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b2) {
    return a.body;
  }
}
function Ya(a, b2) {
  var c2 = b2.checked;
  return m$2({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c2 != null ? c2 : a._wrapperState.initialChecked });
}
function Za(a, b2) {
  var c2 = b2.defaultValue == null ? "" : b2.defaultValue, d2 = b2.checked != null ? b2.checked : b2.defaultChecked;
  c2 = Sa(b2.value != null ? b2.value : c2);
  a._wrapperState = { initialChecked: d2, initialValue: c2, controlled: b2.type === "checkbox" || b2.type === "radio" ? b2.checked != null : b2.value != null };
}
function $a(a, b2) {
  b2 = b2.checked;
  b2 != null && qa(a, "checked", b2, false);
}
function ab(a, b2) {
  $a(a, b2);
  var c2 = Sa(b2.value), d2 = b2.type;
  if (c2 != null)
    if (d2 === "number") {
      if (c2 === 0 && a.value === "" || a.value != c2)
        a.value = "" + c2;
    } else
      a.value !== "" + c2 && (a.value = "" + c2);
  else if (d2 === "submit" || d2 === "reset") {
    a.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? bb(a, b2.type, c2) : b2.hasOwnProperty("defaultValue") && bb(a, b2.type, Sa(b2.defaultValue));
  b2.checked == null && b2.defaultChecked != null && (a.defaultChecked = !!b2.defaultChecked);
}
function cb(a, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!(d2 !== "submit" && d2 !== "reset" || b2.value !== void 0 && b2.value !== null))
      return;
    b2 = "" + a._wrapperState.initialValue;
    c2 || b2 === a.value || (a.value = b2);
    a.defaultValue = b2;
  }
  c2 = a.name;
  c2 !== "" && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  c2 !== "" && (a.name = c2);
}
function bb(a, b2, c2) {
  if (b2 !== "number" || Xa(a.ownerDocument) !== a)
    c2 == null ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c2 && (a.defaultValue = "" + c2);
}
function db(a) {
  var b2 = "";
  aa.Children.forEach(a, function(a2) {
    a2 != null && (b2 += a2);
  });
  return b2;
}
function eb(a, b2) {
  a = m$2({ children: void 0 }, b2);
  if (b2 = db(b2.children))
    a.children = b2;
  return a;
}
function fb(a, b2, c2, d2) {
  a = a.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++)
      b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a.length; c2++)
      e2 = b2.hasOwnProperty("$" + a[c2].value), a[c2].selected !== e2 && (a[c2].selected = e2), e2 && d2 && (a[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa(c2);
    b2 = null;
    for (e2 = 0; e2 < a.length; e2++) {
      if (a[e2].value === c2) {
        a[e2].selected = true;
        d2 && (a[e2].defaultSelected = true);
        return;
      }
      b2 !== null || a[e2].disabled || (b2 = a[e2]);
    }
    b2 !== null && (b2.selected = true);
  }
}
function gb(a, b2) {
  if (b2.dangerouslySetInnerHTML != null)
    throw Error(y$2(91));
  return m$2({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b2) {
  var c2 = b2.value;
  if (c2 == null) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (c2 != null) {
      if (b2 != null)
        throw Error(y$2(92));
      if (Array.isArray(c2)) {
        if (!(1 >= c2.length))
          throw Error(y$2(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    b2 == null && (b2 = "");
    c2 = b2;
  }
  a._wrapperState = { initialValue: Sa(c2) };
}
function ib(a, b2) {
  var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
  c2 != null && (c2 = "" + c2, c2 !== a.value && (a.value = c2), b2.defaultValue == null && a.defaultValue !== c2 && (a.defaultValue = c2));
  d2 != null && (a.defaultValue = "" + d2);
}
function jb(a) {
  var b2 = a.textContent;
  b2 === a._wrapperState.initialValue && b2 !== "" && b2 !== null && (a.value = b2);
}
var kb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function lb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a, b2) {
  return a == null || a === "http://www.w3.org/1999/xhtml" ? lb(b2) : a === "http://www.w3.org/2000/svg" && b2 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a;
}
var nb, ob = function(a) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b2, c2, d2, e2);
    });
  } : a;
}(function(a, b2) {
  if (a.namespaceURI !== kb.svg || "innerHTML" in a)
    a.innerHTML = b2;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = nb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b2.firstChild; )
      a.appendChild(b2.firstChild);
  }
});
function pb(a, b2) {
  if (b2) {
    var c2 = a.firstChild;
    if (c2 && c2 === a.lastChild && c2.nodeType === 3) {
      c2.nodeValue = b2;
      return;
    }
  }
  a.textContent = b2;
}
var qb = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, rb = ["Webkit", "ms", "Moz", "O"];
Object.keys(qb).forEach(function(a) {
  rb.forEach(function(b2) {
    b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
    qb[b2] = qb[a];
  });
});
function sb(a, b2, c2) {
  return b2 == null || typeof b2 === "boolean" || b2 === "" ? "" : c2 || typeof b2 !== "number" || b2 === 0 || qb.hasOwnProperty(a) && qb[a] ? ("" + b2).trim() : b2 + "px";
}
function tb(a, b2) {
  a = a.style;
  for (var c2 in b2)
    if (b2.hasOwnProperty(c2)) {
      var d2 = c2.indexOf("--") === 0, e2 = sb(c2, b2[c2], d2);
      c2 === "float" && (c2 = "cssFloat");
      d2 ? a.setProperty(c2, e2) : a[c2] = e2;
    }
}
var ub = m$2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function vb(a, b2) {
  if (b2) {
    if (ub[a] && (b2.children != null || b2.dangerouslySetInnerHTML != null))
      throw Error(y$2(137, a));
    if (b2.dangerouslySetInnerHTML != null) {
      if (b2.children != null)
        throw Error(y$2(60));
      if (!(typeof b2.dangerouslySetInnerHTML === "object" && "__html" in b2.dangerouslySetInnerHTML))
        throw Error(y$2(61));
    }
    if (b2.style != null && typeof b2.style !== "object")
      throw Error(y$2(62));
  }
}
function wb(a, b2) {
  if (a.indexOf("-") === -1)
    return typeof b2.is === "string";
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return a.nodeType === 3 ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if (typeof yb !== "function")
      throw Error(y$2(280));
    var b2 = a.stateNode;
    b2 && (b2 = Db(b2), yb(a.stateNode, a.type, b2));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a);
    if (b2)
      for (a = 0; a < b2.length; a++)
        Bb(b2[a]);
  }
}
function Gb(a, b2) {
  return a(b2);
}
function Hb(a, b2, c2, d2, e2) {
  return a(b2, c2, d2, e2);
}
function Ib() {
}
var Jb = Gb, Kb = false, Lb = false;
function Mb() {
  if (zb !== null || Ab !== null)
    Ib(), Fb();
}
function Nb(a, b2, c2) {
  if (Lb)
    return a(b2, c2);
  Lb = true;
  try {
    return Jb(a, b2, c2);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a, b2) {
  var c2 = a.stateNode;
  if (c2 === null)
    return null;
  var d2 = Db(c2);
  if (d2 === null)
    return null;
  c2 = d2[b2];
  a:
    switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d2 = !d2.disabled) || (a = a.type, d2 = !(a === "button" || a === "input" || a === "select" || a === "textarea"));
        a = !d2;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c2 && typeof c2 !== "function")
    throw Error(y$2(231, b2, typeof c2));
  return c2;
}
var Pb = false;
if (fa)
  try {
    var Qb = {};
    Object.defineProperty(Qb, "passive", { get: function() {
      Pb = true;
    } });
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a) {
    Pb = false;
  }
function Rb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (n2) {
    this.onError(n2);
  }
}
var Sb = false, Tb = null, Ub = false, Vb = null, Wb = { onError: function(a) {
  Sb = true;
  Tb = a;
} };
function Xb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l2 = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y$2(198));
    Ub || (Ub = true, Vb = l2);
  }
}
function Zb(a) {
  var b2 = a, c2 = a;
  if (a.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a = b2;
    do
      b2 = a, (b2.flags & 1026) !== 0 && (c2 = b2.return), a = b2.return;
    while (a);
  }
  return b2.tag === 3 ? c2 : null;
}
function $b(a) {
  if (a.tag === 13) {
    var b2 = a.memoizedState;
    b2 === null && (a = a.alternate, a !== null && (b2 = a.memoizedState));
    if (b2 !== null)
      return b2.dehydrated;
  }
  return null;
}
function ac(a) {
  if (Zb(a) !== a)
    throw Error(y$2(188));
}
function bc(a) {
  var b2 = a.alternate;
  if (!b2) {
    b2 = Zb(a);
    if (b2 === null)
      throw Error(y$2(188));
    return b2 !== a ? null : a;
  }
  for (var c2 = a, d2 = b2; ; ) {
    var e2 = c2.return;
    if (e2 === null)
      break;
    var f2 = e2.alternate;
    if (f2 === null) {
      d2 = e2.return;
      if (d2 !== null) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2)
          return ac(e2), a;
        if (f2 === d2)
          return ac(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(y$2(188));
    }
    if (c2.return !== d2.return)
      c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(y$2(189));
      }
    }
    if (c2.alternate !== d2)
      throw Error(y$2(190));
  }
  if (c2.tag !== 3)
    throw Error(y$2(188));
  return c2.stateNode.current === c2 ? a : b2;
}
function cc(a) {
  a = bc(a);
  if (!a)
    return null;
  for (var b2 = a; ; ) {
    if (b2.tag === 5 || b2.tag === 6)
      return b2;
    if (b2.child)
      b2.child.return = b2, b2 = b2.child;
    else {
      if (b2 === a)
        break;
      for (; !b2.sibling; ) {
        if (!b2.return || b2.return === a)
          return null;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return null;
}
function dc(a, b2) {
  for (var c2 = a.alternate; b2 !== null; ) {
    if (b2 === a || b2 === c2)
      return true;
    b2 = b2.return;
  }
  return false;
}
var ec, fc, gc, hc, ic = false, jc = [], kc = null, lc = null, mc = null, nc = new Map(), oc = new Map(), pc = [], qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a, b2, c2, d2, e2) {
  return { blockedOn: a, domEventName: b2, eventSystemFlags: c2 | 16, nativeEvent: e2, targetContainers: [d2] };
}
function sc(a, b2) {
  switch (a) {
    case "focusin":
    case "focusout":
      kc = null;
      break;
    case "dragenter":
    case "dragleave":
      lc = null;
      break;
    case "mouseover":
    case "mouseout":
      mc = null;
      break;
    case "pointerover":
    case "pointerout":
      nc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b2.pointerId);
  }
}
function tc(a, b2, c2, d2, e2, f2) {
  if (a === null || a.nativeEvent !== f2)
    return a = rc(b2, c2, d2, e2, f2), b2 !== null && (b2 = Cb(b2), b2 !== null && fc(b2)), a;
  a.eventSystemFlags |= d2;
  b2 = a.targetContainers;
  e2 !== null && b2.indexOf(e2) === -1 && b2.push(e2);
  return a;
}
function uc(a, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return kc = tc(kc, a, b2, c2, d2, e2), true;
    case "dragenter":
      return lc = tc(lc, a, b2, c2, d2, e2), true;
    case "mouseover":
      return mc = tc(mc, a, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      nc.set(f2, tc(nc.get(f2) || null, a, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, oc.set(f2, tc(oc.get(f2) || null, a, b2, c2, d2, e2)), true;
  }
  return false;
}
function vc(a) {
  var b2 = wc(a.target);
  if (b2 !== null) {
    var c2 = Zb(b2);
    if (c2 !== null) {
      if (b2 = c2.tag, b2 === 13) {
        if (b2 = $b(c2), b2 !== null) {
          a.blockedOn = b2;
          hc(a.lanePriority, function() {
            r$2.unstable_runWithPriority(a.priority, function() {
              gc(c2);
            });
          });
          return;
        }
      } else if (b2 === 3 && c2.stateNode.hydrate) {
        a.blockedOn = c2.tag === 3 ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function xc(a) {
  if (a.blockedOn !== null)
    return false;
  for (var b2 = a.targetContainers; 0 < b2.length; ) {
    var c2 = yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
    if (c2 !== null)
      return b2 = Cb(c2), b2 !== null && fc(b2), a.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function zc(a, b2, c2) {
  xc(a) && c2.delete(b2);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a = jc[0];
    if (a.blockedOn !== null) {
      a = Cb(a.blockedOn);
      a !== null && ec(a);
      break;
    }
    for (var b2 = a.targetContainers; 0 < b2.length; ) {
      var c2 = yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
      if (c2 !== null) {
        a.blockedOn = c2;
        break;
      }
      b2.shift();
    }
    a.blockedOn === null && jc.shift();
  }
  kc !== null && xc(kc) && (kc = null);
  lc !== null && xc(lc) && (lc = null);
  mc !== null && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a, b2) {
  a.blockedOn === b2 && (a.blockedOn = null, ic || (ic = true, r$2.unstable_scheduleCallback(r$2.unstable_NormalPriority, Ac)));
}
function Cc(a) {
  function b2(b3) {
    return Bc(b3, a);
  }
  if (0 < jc.length) {
    Bc(jc[0], a);
    for (var c2 = 1; c2 < jc.length; c2++) {
      var d2 = jc[c2];
      d2.blockedOn === a && (d2.blockedOn = null);
    }
  }
  kc !== null && Bc(kc, a);
  lc !== null && Bc(lc, a);
  mc !== null && Bc(mc, a);
  nc.forEach(b2);
  oc.forEach(b2);
  for (c2 = 0; c2 < pc.length; c2++)
    d2 = pc[c2], d2.blockedOn === a && (d2.blockedOn = null);
  for (; 0 < pc.length && (c2 = pc[0], c2.blockedOn === null); )
    vc(c2), c2.blockedOn === null && pc.shift();
}
function Dc(a, b2) {
  var c2 = {};
  c2[a.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a] = "webkit" + b2;
  c2["Moz" + a] = "moz" + b2;
  return c2;
}
var Ec = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") }, Fc = {}, Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a) {
  if (Fc[a])
    return Fc[a];
  if (!Ec[a])
    return a;
  var b2 = Ec[a], c2;
  for (c2 in b2)
    if (b2.hasOwnProperty(c2) && c2 in Gc)
      return Fc[a] = b2[c2];
  return a;
}
var Ic = Hc("animationend"), Jc = Hc("animationiteration"), Kc = Hc("animationstart"), Lc = Hc("transitionend"), Mc = new Map(), Nc = new Map(), Oc = [
  "abort",
  "abort",
  Ic,
  "animationEnd",
  Jc,
  "animationIteration",
  Kc,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Lc,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Pc(a, b2) {
  for (var c2 = 0; c2 < a.length; c2 += 2) {
    var d2 = a[c2], e2 = a[c2 + 1];
    e2 = "on" + (e2[0].toUpperCase() + e2.slice(1));
    Nc.set(d2, b2);
    Mc.set(d2, e2);
    da(e2, [d2]);
  }
}
var Qc = r$2.unstable_now;
Qc();
var F$1 = 8;
function Rc(a) {
  if ((1 & a) !== 0)
    return F$1 = 15, 1;
  if ((2 & a) !== 0)
    return F$1 = 14, 2;
  if ((4 & a) !== 0)
    return F$1 = 13, 4;
  var b2 = 24 & a;
  if (b2 !== 0)
    return F$1 = 12, b2;
  if ((a & 32) !== 0)
    return F$1 = 11, 32;
  b2 = 192 & a;
  if (b2 !== 0)
    return F$1 = 10, b2;
  if ((a & 256) !== 0)
    return F$1 = 9, 256;
  b2 = 3584 & a;
  if (b2 !== 0)
    return F$1 = 8, b2;
  if ((a & 4096) !== 0)
    return F$1 = 7, 4096;
  b2 = 4186112 & a;
  if (b2 !== 0)
    return F$1 = 6, b2;
  b2 = 62914560 & a;
  if (b2 !== 0)
    return F$1 = 5, b2;
  if (a & 67108864)
    return F$1 = 4, 67108864;
  if ((a & 134217728) !== 0)
    return F$1 = 3, 134217728;
  b2 = 805306368 & a;
  if (b2 !== 0)
    return F$1 = 2, b2;
  if ((1073741824 & a) !== 0)
    return F$1 = 1, 1073741824;
  F$1 = 8;
  return a;
}
function Sc(a) {
  switch (a) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Tc(a) {
  switch (a) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y$2(358, a));
  }
}
function Uc(a, b2) {
  var c2 = a.pendingLanes;
  if (c2 === 0)
    return F$1 = 0;
  var d2 = 0, e2 = 0, f2 = a.expiredLanes, g2 = a.suspendedLanes, h2 = a.pingedLanes;
  if (f2 !== 0)
    d2 = f2, e2 = F$1 = 15;
  else if (f2 = c2 & 134217727, f2 !== 0) {
    var k2 = f2 & ~g2;
    k2 !== 0 ? (d2 = Rc(k2), e2 = F$1) : (h2 &= f2, h2 !== 0 && (d2 = Rc(h2), e2 = F$1));
  } else
    f2 = c2 & ~g2, f2 !== 0 ? (d2 = Rc(f2), e2 = F$1) : h2 !== 0 && (d2 = Rc(h2), e2 = F$1);
  if (d2 === 0)
    return 0;
  d2 = 31 - Vc(d2);
  d2 = c2 & ((0 > d2 ? 0 : 1 << d2) << 1) - 1;
  if (b2 !== 0 && b2 !== d2 && (b2 & g2) === 0) {
    Rc(b2);
    if (e2 <= F$1)
      return b2;
    F$1 = e2;
  }
  b2 = a.entangledLanes;
  if (b2 !== 0)
    for (a = a.entanglements, b2 &= d2; 0 < b2; )
      c2 = 31 - Vc(b2), e2 = 1 << c2, d2 |= a[c2], b2 &= ~e2;
  return d2;
}
function Wc(a) {
  a = a.pendingLanes & -1073741825;
  return a !== 0 ? a : a & 1073741824 ? 1073741824 : 0;
}
function Xc(a, b2) {
  switch (a) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a = Yc(24 & ~b2), a === 0 ? Xc(10, b2) : a;
    case 10:
      return a = Yc(192 & ~b2), a === 0 ? Xc(8, b2) : a;
    case 8:
      return a = Yc(3584 & ~b2), a === 0 && (a = Yc(4186112 & ~b2), a === 0 && (a = 512)), a;
    case 2:
      return b2 = Yc(805306368 & ~b2), b2 === 0 && (b2 = 268435456), b2;
  }
  throw Error(y$2(358, a));
}
function Yc(a) {
  return a & -a;
}
function Zc(a) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++)
    b2.push(a);
  return b2;
}
function $c(a, b2, c2) {
  a.pendingLanes |= b2;
  var d2 = b2 - 1;
  a.suspendedLanes &= d2;
  a.pingedLanes &= d2;
  a = a.eventTimes;
  b2 = 31 - Vc(b2);
  a[b2] = c2;
}
var Vc = Math.clz32 ? Math.clz32 : ad, bd = Math.log, cd = Math.LN2;
function ad(a) {
  return a === 0 ? 32 : 31 - (bd(a) / cd | 0) | 0;
}
var dd = r$2.unstable_UserBlockingPriority, ed = r$2.unstable_runWithPriority, fd = true;
function gd(a, b2, c2, d2) {
  Kb || Ib();
  var e2 = hd, f2 = Kb;
  Kb = true;
  try {
    Hb(e2, a, b2, c2, d2);
  } finally {
    (Kb = f2) || Mb();
  }
}
function id(a, b2, c2, d2) {
  ed(dd, hd.bind(null, a, b2, c2, d2));
}
function hd(a, b2, c2, d2) {
  if (fd) {
    var e2;
    if ((e2 = (b2 & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a))
      a = rc(null, a, b2, c2, d2), jc.push(a);
    else {
      var f2 = yc(a, b2, c2, d2);
      if (f2 === null)
        e2 && sc(a, d2);
      else {
        if (e2) {
          if (-1 < qc.indexOf(a)) {
            a = rc(f2, a, b2, c2, d2);
            jc.push(a);
            return;
          }
          if (uc(f2, a, b2, c2, d2))
            return;
          sc(a, d2);
        }
        jd(a, b2, d2, null, c2);
      }
    }
  }
}
function yc(a, b2, c2, d2) {
  var e2 = xb(d2);
  e2 = wc(e2);
  if (e2 !== null) {
    var f2 = Zb(e2);
    if (f2 === null)
      e2 = null;
    else {
      var g2 = f2.tag;
      if (g2 === 13) {
        e2 = $b(f2);
        if (e2 !== null)
          return e2;
        e2 = null;
      } else if (g2 === 3) {
        if (f2.stateNode.hydrate)
          return f2.tag === 3 ? f2.stateNode.containerInfo : null;
        e2 = null;
      } else
        f2 !== e2 && (e2 = null);
    }
  }
  jd(a, b2, d2, e2, c2);
  return null;
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a = 0; a < c2 && b2[a] === e2[a]; a++)
    ;
  var g2 = c2 - a;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
    ;
  return md = e2.slice(a, 1 < d2 ? 1 - d2 : void 0);
}
function od(a) {
  var b2 = a.keyCode;
  "charCode" in a ? (a = a.charCode, a === 0 && b2 === 13 && (a = 13)) : a = b2;
  a === 10 && (a = 13);
  return 32 <= a || a === 13 ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a)
      a.hasOwnProperty(c2) && (b3 = a[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (f2.defaultPrevented != null ? f2.defaultPrevented : f2.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  m$2(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : typeof a2.returnValue !== "unknown" && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : typeof a2.cancelBubble !== "unknown" && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = m$2({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = m$2({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && a.type === "mousemove" ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = m$2({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = m$2({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = m$2({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = m$2({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = m$2({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
}
function zd() {
  return Pd;
}
var Qd = m$2({}, ud, { key: function(a) {
  if (a.key) {
    var b2 = Md[a.key] || a.key;
    if (b2 !== "Unidentified")
      return b2;
  }
  return a.type === "keypress" ? (a = od(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return a.type === "keypress" ? od(a) : 0;
}, keyCode: function(a) {
  return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
}, which: function(a) {
  return a.type === "keypress" ? od(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = m$2({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = m$2({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = m$2({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = m$2({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = fa && "CompositionEvent" in window, be = null;
fa && "documentMode" in document && (be = document.documentMode);
var ce = fa && "TextEvent" in window && !be, de = fa && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b2) {
  switch (a) {
    case "keyup":
      return $d.indexOf(b2.keyCode) !== -1;
    case "keydown":
      return b2.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return typeof a === "object" && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b2) {
  switch (a) {
    case "compositionend":
      return he(b2);
    case "keypress":
      if (b2.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b2.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b2) {
  if (ie)
    return a === "compositionend" || !ae && ge(a, b2) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de && b2.locale !== "ko" ? null : b2.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return b2 === "input" ? !!le[a.type] : b2 === "textarea" ? true : false;
}
function ne(a, b2, c2, d2) {
  Eb(d2);
  b2 = oe(b2, "onChange");
  0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a.push({ event: c2, listeners: b2 }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b2 = ue(a);
  if (Wa(b2))
    return a;
}
function ve(a, b2) {
  if (a === "change")
    return b2;
}
var we = false;
if (fa) {
  var xe;
  if (fa) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = typeof ze.oninput === "function";
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if (a.propertyName === "value" && te(qe)) {
    var b2 = [];
    ne(b2, qe, a, xb(a));
    a = re;
    if (Kb)
      a(b2);
    else {
      Kb = true;
      try {
        Gb(a, b2);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a, b2, c2) {
  a === "focusin" ? (Ae(), pe = b2, qe = c2, pe.attachEvent("onpropertychange", Be)) : a === "focusout" && Ae();
}
function De(a) {
  if (a === "selectionchange" || a === "keyup" || a === "keydown")
    return te(qe);
}
function Ee(a, b2) {
  if (a === "click")
    return te(b2);
}
function Fe(a, b2) {
  if (a === "input" || a === "change")
    return te(b2);
}
function Ge(a, b2) {
  return a === b2 && (a !== 0 || 1 / a === 1 / b2) || a !== a && b2 !== b2;
}
var He = typeof Object.is === "function" ? Object.is : Ge, Ie = Object.prototype.hasOwnProperty;
function Je(a, b2) {
  if (He(a, b2))
    return true;
  if (typeof a !== "object" || a === null || typeof b2 !== "object" || b2 === null)
    return false;
  var c2 = Object.keys(a), d2 = Object.keys(b2);
  if (c2.length !== d2.length)
    return false;
  for (d2 = 0; d2 < c2.length; d2++)
    if (!Ie.call(b2, c2[d2]) || !He(a[c2[d2]], b2[c2[d2]]))
      return false;
  return true;
}
function Ke(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Le(a, b2) {
  var c2 = Ke(a);
  a = 0;
  for (var d2; c2; ) {
    if (c2.nodeType === 3) {
      d2 = a + c2.textContent.length;
      if (a <= b2 && d2 >= b2)
        return { node: c2, offset: b2 - a };
      a = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Ke(c2);
  }
}
function Me(a, b2) {
  return a && b2 ? a === b2 ? true : a && a.nodeType === 3 ? false : b2 && b2.nodeType === 3 ? Me(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
}
function Ne() {
  for (var a = window, b2 = Xa(); b2 instanceof a.HTMLIFrameElement; ) {
    try {
      var c2 = typeof b2.contentWindow.location.href === "string";
    } catch (d2) {
      c2 = false;
    }
    if (c2)
      a = b2.contentWindow;
    else
      break;
    b2 = Xa(a.document);
  }
  return b2;
}
function Oe(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return b2 && (b2 === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || b2 === "textarea" || a.contentEditable === "true");
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : c2.nodeType === 9 ? c2 : c2.ownerDocument;
  Te || Qe == null || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Oe(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se && Je(Se, d2) || (Se = d2, d2 = oe(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a.push({ event: b2, listeners: d2 }), b2.target = Qe)));
}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
  Nc.set(Ve[We], 0);
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a, b2, c2) {
  var d2 = a.type || "unknown-event";
  a.currentTarget = c2;
  Yb(d2, b2, void 0, a);
  a.currentTarget = null;
}
function se(a, b2) {
  b2 = (b2 & 4) !== 0;
  for (var c2 = 0; c2 < a.length; c2++) {
    var d2 = a[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          Ze(e2, h2, l2);
          f2 = k2;
        }
      else
        for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          Ze(e2, h2, l2);
          f2 = k2;
        }
    }
  }
  if (Ub)
    throw a = Vb, Ub = false, Vb = null, a;
}
function G$1(a, b2) {
  var c2 = $e(b2), d2 = a + "__bubble";
  c2.has(d2) || (af(b2, a, 2, false), c2.add(d2));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a) {
  a[bf] || (a[bf] = true, ba.forEach(function(b2) {
    Ye.has(b2) || df(b2, false, a, null);
    df(b2, true, a, null);
  }));
}
function df(a, b2, c2, d2) {
  var e2 = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f2 = c2;
  a === "selectionchange" && c2.nodeType !== 9 && (f2 = c2.ownerDocument);
  if (d2 !== null && !b2 && Ye.has(a)) {
    if (a !== "scroll")
      return;
    e2 |= 2;
    f2 = d2;
  }
  var g2 = $e(f2), h2 = a + "__" + (b2 ? "capture" : "bubble");
  g2.has(h2) || (b2 && (e2 |= 4), af(f2, a, e2, b2), g2.add(h2));
}
function af(a, b2, c2, d2) {
  var e2 = Nc.get(b2);
  switch (e2 === void 0 ? 2 : e2) {
    case 0:
      e2 = gd;
      break;
    case 1:
      e2 = id;
      break;
    default:
      e2 = hd;
  }
  c2 = e2.bind(null, b2, c2, a);
  e2 = void 0;
  !Pb || b2 !== "touchstart" && b2 !== "touchmove" && b2 !== "wheel" || (e2 = true);
  d2 ? e2 !== void 0 ? a.addEventListener(b2, c2, { capture: true, passive: e2 }) : a.addEventListener(b2, c2, true) : e2 !== void 0 ? a.addEventListener(b2, c2, { passive: e2 }) : a.addEventListener(b2, c2, false);
}
function jd(a, b2, c2, d2, e2) {
  var f2 = d2;
  if ((b2 & 1) === 0 && (b2 & 2) === 0 && d2 !== null)
    a:
      for (; ; ) {
        if (d2 === null)
          return;
        var g2 = d2.tag;
        if (g2 === 3 || g2 === 4) {
          var h2 = d2.stateNode.containerInfo;
          if (h2 === e2 || h2.nodeType === 8 && h2.parentNode === e2)
            break;
          if (g2 === 4)
            for (g2 = d2.return; g2 !== null; ) {
              var k2 = g2.tag;
              if (k2 === 3 || k2 === 4) {
                if (k2 = g2.stateNode.containerInfo, k2 === e2 || k2.nodeType === 8 && k2.parentNode === e2)
                  return;
              }
              g2 = g2.return;
            }
          for (; h2 !== null; ) {
            g2 = wc(h2);
            if (g2 === null)
              return;
            k2 = g2.tag;
            if (k2 === 5 || k2 === 6) {
              d2 = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d2 = d2.return;
      }
  Nb(function() {
    var d3 = f2, e3 = xb(c2), g3 = [];
    a: {
      var h3 = Mc.get(a);
      if (h3 !== void 0) {
        var k3 = td, x = a;
        switch (a) {
          case "keypress":
            if (od(c2) === 0)
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            x = "focus";
            k3 = Fd;
            break;
          case "focusout":
            x = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (c2.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k3 = Hd;
            break;
          case Lc:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var w2 = (b2 & 4) !== 0, z2 = !w2 && a === "scroll", u2 = w2 ? h3 !== null ? h3 + "Capture" : null : h3;
        w2 = [];
        for (var t2 = d3, q2; t2 !== null; ) {
          q2 = t2;
          var v2 = q2.stateNode;
          q2.tag === 5 && v2 !== null && (q2 = v2, u2 !== null && (v2 = Ob(t2, u2), v2 != null && w2.push(ef(t2, v2, q2))));
          if (z2)
            break;
          t2 = t2.return;
        }
        0 < w2.length && (h3 = new k3(h3, x, null, c2, e3), g3.push({ event: h3, listeners: w2 }));
      }
    }
    if ((b2 & 7) === 0) {
      a: {
        h3 = a === "mouseover" || a === "pointerover";
        k3 = a === "mouseout" || a === "pointerout";
        if (h3 && (b2 & 16) === 0 && (x = c2.relatedTarget || c2.fromElement) && (wc(x) || x[ff]))
          break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (x = c2.relatedTarget || c2.toElement, k3 = d3, x = x ? wc(x) : null, x !== null && (z2 = Zb(x), x !== z2 || x.tag !== 5 && x.tag !== 6))
              x = null;
          } else
            k3 = null, x = d3;
          if (k3 !== x) {
            w2 = Bd;
            v2 = "onMouseLeave";
            u2 = "onMouseEnter";
            t2 = "mouse";
            if (a === "pointerout" || a === "pointerover")
              w2 = Td, v2 = "onPointerLeave", u2 = "onPointerEnter", t2 = "pointer";
            z2 = k3 == null ? h3 : ue(k3);
            q2 = x == null ? h3 : ue(x);
            h3 = new w2(v2, t2 + "leave", k3, c2, e3);
            h3.target = z2;
            h3.relatedTarget = q2;
            v2 = null;
            wc(e3) === d3 && (w2 = new w2(u2, t2 + "enter", x, c2, e3), w2.target = q2, w2.relatedTarget = z2, v2 = w2);
            z2 = v2;
            if (k3 && x)
              b: {
                w2 = k3;
                u2 = x;
                t2 = 0;
                for (q2 = w2; q2; q2 = gf(q2))
                  t2++;
                q2 = 0;
                for (v2 = u2; v2; v2 = gf(v2))
                  q2++;
                for (; 0 < t2 - q2; )
                  w2 = gf(w2), t2--;
                for (; 0 < q2 - t2; )
                  u2 = gf(u2), q2--;
                for (; t2--; ) {
                  if (w2 === u2 || u2 !== null && w2 === u2.alternate)
                    break b;
                  w2 = gf(w2);
                  u2 = gf(u2);
                }
                w2 = null;
              }
            else
              w2 = null;
            k3 !== null && hf(g3, h3, k3, w2, false);
            x !== null && z2 !== null && hf(g3, z2, x, w2, true);
          }
        }
      }
      a: {
        h3 = d3 ? ue(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if (k3 === "select" || k3 === "input" && h3.type === "file")
          var J2 = ve;
        else if (me(h3))
          if (we)
            J2 = Fe;
          else {
            J2 = De;
            var K2 = Ce;
          }
        else
          (k3 = h3.nodeName) && k3.toLowerCase() === "input" && (h3.type === "checkbox" || h3.type === "radio") && (J2 = Ee);
        if (J2 && (J2 = J2(a, d3))) {
          ne(g3, J2, c2, e3);
          break a;
        }
        K2 && K2(a, h3, d3);
        a === "focusout" && (K2 = h3._wrapperState) && K2.controlled && h3.type === "number" && bb(h3, "number", h3.value);
      }
      K2 = d3 ? ue(d3) : window;
      switch (a) {
        case "focusin":
          if (me(K2) || K2.contentEditable === "true")
            Qe = K2, Re = d3, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g3, c2, e3);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g3, c2, e3);
      }
      var Q2;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var L2 = "onCompositionStart";
              break b;
            case "compositionend":
              L2 = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L2 = "onCompositionUpdate";
              break b;
          }
          L2 = void 0;
        }
      else
        ie ? ge(a, c2) && (L2 = "onCompositionEnd") : a === "keydown" && c2.keyCode === 229 && (L2 = "onCompositionStart");
      L2 && (de && c2.locale !== "ko" && (ie || L2 !== "onCompositionStart" ? L2 === "onCompositionEnd" && ie && (Q2 = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K2 = oe(d3, L2), 0 < K2.length && (L2 = new Ld(L2, a, null, c2, e3), g3.push({ event: L2, listeners: K2 }), Q2 ? L2.data = Q2 : (Q2 = he(c2), Q2 !== null && (L2.data = Q2))));
      if (Q2 = ce ? je(a, c2) : ke(a, c2))
        d3 = oe(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = Q2);
    }
    se(g3, b2);
  });
}
function ef(a, b2, c2) {
  return { instance: a, listener: b2, currentTarget: c2 };
}
function oe(a, b2) {
  for (var c2 = b2 + "Capture", d2 = []; a !== null; ) {
    var e2 = a, f2 = e2.stateNode;
    e2.tag === 5 && f2 !== null && (e2 = f2, f2 = Ob(a, c2), f2 != null && d2.unshift(ef(a, f2, e2)), f2 = Ob(a, b2), f2 != null && d2.push(ef(a, f2, e2)));
    a = a.return;
  }
  return d2;
}
function gf(a) {
  if (a === null)
    return null;
  do
    a = a.return;
  while (a && a.tag !== 5);
  return a ? a : null;
}
function hf(a, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; c2 !== null && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (k2 !== null && k2 === d2)
      break;
    h2.tag === 5 && l2 !== null && (h2 = l2, e2 ? (k2 = Ob(c2, f2), k2 != null && g2.unshift(ef(c2, k2, h2))) : e2 || (k2 = Ob(c2, f2), k2 != null && g2.push(ef(c2, k2, h2))));
    c2 = c2.return;
  }
  g2.length !== 0 && a.push({ event: b2, listeners: g2 });
}
function jf() {
}
var kf = null, lf = null;
function mf(a, b2) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b2.autoFocus;
  }
  return false;
}
function nf(a, b2) {
  return a === "textarea" || a === "option" || a === "noscript" || typeof b2.children === "string" || typeof b2.children === "number" || typeof b2.dangerouslySetInnerHTML === "object" && b2.dangerouslySetInnerHTML !== null && b2.dangerouslySetInnerHTML.__html != null;
}
var of = typeof setTimeout === "function" ? setTimeout : void 0, pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
function qf(a) {
  a.nodeType === 1 ? a.textContent = "" : a.nodeType === 9 && (a = a.body, a != null && (a.textContent = ""));
}
function rf(a) {
  for (; a != null; a = a.nextSibling) {
    var b2 = a.nodeType;
    if (b2 === 1 || b2 === 3)
      break;
  }
  return a;
}
function sf(a) {
  a = a.previousSibling;
  for (var b2 = 0; a; ) {
    if (a.nodeType === 8) {
      var c2 = a.data;
      if (c2 === "$" || c2 === "$!" || c2 === "$?") {
        if (b2 === 0)
          return a;
        b2--;
      } else
        c2 === "/$" && b2++;
    }
    a = a.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a) {
  return { $$typeof: Ga, toString: a, valueOf: a };
}
var vf = Math.random().toString(36).slice(2), wf = "__reactFiber$" + vf, xf = "__reactProps$" + vf, ff = "__reactContainer$" + vf, yf = "__reactEvents$" + vf;
function wc(a) {
  var b2 = a[wf];
  if (b2)
    return b2;
  for (var c2 = a.parentNode; c2; ) {
    if (b2 = c2[ff] || c2[wf]) {
      c2 = b2.alternate;
      if (b2.child !== null || c2 !== null && c2.child !== null)
        for (a = sf(a); a !== null; ) {
          if (c2 = a[wf])
            return c2;
          a = sf(a);
        }
      return b2;
    }
    a = c2;
    c2 = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[wf] || a[ff];
  return !a || a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3 ? null : a;
}
function ue(a) {
  if (a.tag === 5 || a.tag === 6)
    return a.stateNode;
  throw Error(y$2(33));
}
function Db(a) {
  return a[xf] || null;
}
function $e(a) {
  var b2 = a[yf];
  b2 === void 0 && (b2 = a[yf] = new Set());
  return b2;
}
var zf = [], Af = -1;
function Bf(a) {
  return { current: a };
}
function H$1(a) {
  0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
}
function I$1(a, b2) {
  Af++;
  zf[Af] = a.current;
  a.current = b2;
}
var Cf = {}, M = Bf(Cf), N = Bf(false), Df = Cf;
function Ef(a, b2) {
  var c2 = a.type.contextTypes;
  if (!c2)
    return Cf;
  var d2 = a.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2)
    e2[f2] = b2[f2];
  d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Ff(a) {
  a = a.childContextTypes;
  return a !== null && a !== void 0;
}
function Gf() {
  H$1(N);
  H$1(M);
}
function Hf(a, b2, c2) {
  if (M.current !== Cf)
    throw Error(y$2(168));
  I$1(M, b2);
  I$1(N, c2);
}
function If(a, b2, c2) {
  var d2 = a.stateNode;
  a = b2.childContextTypes;
  if (typeof d2.getChildContext !== "function")
    return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2)
    if (!(e2 in a))
      throw Error(y$2(108, Ra(b2) || "Unknown", e2));
  return m$2({}, c2, d2);
}
function Jf(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I$1(M, a);
  I$1(N, N.current);
  return true;
}
function Kf(a, b2, c2) {
  var d2 = a.stateNode;
  if (!d2)
    throw Error(y$2(169));
  c2 ? (a = If(a, b2, Df), d2.__reactInternalMemoizedMergedChildContext = a, H$1(N), H$1(M), I$1(M, a)) : H$1(N);
  I$1(N, c2);
}
var Lf = null, Mf = null, Nf = r$2.unstable_runWithPriority, Of = r$2.unstable_scheduleCallback, Pf = r$2.unstable_cancelCallback, Qf = r$2.unstable_shouldYield, Rf = r$2.unstable_requestPaint, Sf = r$2.unstable_now, Tf = r$2.unstable_getCurrentPriorityLevel, Uf = r$2.unstable_ImmediatePriority, Vf = r$2.unstable_UserBlockingPriority, Wf = r$2.unstable_NormalPriority, Xf = r$2.unstable_LowPriority, Yf = r$2.unstable_IdlePriority, Zf = {}, $f = Rf !== void 0 ? Rf : function() {
}, ag = null, bg = null, cg = false, dg = Sf(), O = 1e4 > dg ? Sf : function() {
  return Sf() - dg;
};
function eg() {
  switch (Tf()) {
    case Uf:
      return 99;
    case Vf:
      return 98;
    case Wf:
      return 97;
    case Xf:
      return 96;
    case Yf:
      return 95;
    default:
      throw Error(y$2(332));
  }
}
function fg(a) {
  switch (a) {
    case 99:
      return Uf;
    case 98:
      return Vf;
    case 97:
      return Wf;
    case 96:
      return Xf;
    case 95:
      return Yf;
    default:
      throw Error(y$2(332));
  }
}
function gg(a, b2) {
  a = fg(a);
  return Nf(a, b2);
}
function hg(a, b2, c2) {
  a = fg(a);
  return Of(a, b2, c2);
}
function ig() {
  if (bg !== null) {
    var a = bg;
    bg = null;
    Pf(a);
  }
  jg();
}
function jg() {
  if (!cg && ag !== null) {
    cg = true;
    var a = 0;
    try {
      var b2 = ag;
      gg(99, function() {
        for (; a < b2.length; a++) {
          var c2 = b2[a];
          do
            c2 = c2(true);
          while (c2 !== null);
        }
      });
      ag = null;
    } catch (c2) {
      throw ag !== null && (ag = ag.slice(a + 1)), Of(Uf, ig), c2;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a, b2) {
  if (a && a.defaultProps) {
    b2 = m$2({}, b2);
    a = a.defaultProps;
    for (var c2 in a)
      b2[c2] === void 0 && (b2[c2] = a[c2]);
    return b2;
  }
  return b2;
}
var mg = Bf(null), ng = null, og = null, pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a) {
  var b2 = mg.current;
  H$1(mg);
  a.type._context._currentValue = b2;
}
function sg(a, b2) {
  for (; a !== null; ) {
    var c2 = a.alternate;
    if ((a.childLanes & b2) === b2)
      if (c2 === null || (c2.childLanes & b2) === b2)
        break;
      else
        c2.childLanes |= b2;
    else
      a.childLanes |= b2, c2 !== null && (c2.childLanes |= b2);
    a = a.return;
  }
}
function tg(a, b2) {
  ng = a;
  pg = og = null;
  a = a.dependencies;
  a !== null && a.firstContext !== null && ((a.lanes & b2) !== 0 && (ug = true), a.firstContext = null);
}
function vg(a, b2) {
  if (pg !== a && b2 !== false && b2 !== 0) {
    if (typeof b2 !== "number" || b2 === 1073741823)
      pg = a, b2 = 1073741823;
    b2 = { context: a, observedBits: b2, next: null };
    if (og === null) {
      if (ng === null)
        throw Error(y$2(308));
      og = b2;
      ng.dependencies = { lanes: 0, firstContext: b2, responders: null };
    } else
      og = og.next = b2;
  }
  return a._currentValue;
}
var wg = false;
function xg(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
}
function yg(a, b2) {
  a = a.updateQueue;
  b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function zg(a, b2) {
  return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function Ag(a, b2) {
  a = a.updateQueue;
  if (a !== null) {
    a = a.shared;
    var c2 = a.pending;
    c2 === null ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
    a.pending = b2;
  }
}
function Bg(a, b2) {
  var c2 = a.updateQueue, d2 = a.alternate;
  if (d2 !== null && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (c2 !== null) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        f2 === null ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (c2 !== null);
      f2 === null ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else
      e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a.updateQueue = c2;
    return;
  }
  a = c2.lastBaseUpdate;
  a === null ? c2.firstBaseUpdate = b2 : a.next = b2;
  c2.lastBaseUpdate = b2;
}
function Cg(a, b2, c2, d2) {
  var e2 = a.updateQueue;
  wg = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (h2 !== null) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    g2 === null ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var n2 = a.alternate;
    if (n2 !== null) {
      n2 = n2.updateQueue;
      var A2 = n2.lastBaseUpdate;
      A2 !== g2 && (A2 === null ? n2.firstBaseUpdate = l2 : A2.next = l2, n2.lastBaseUpdate = k2);
    }
  }
  if (f2 !== null) {
    A2 = e2.baseState;
    g2 = 0;
    n2 = l2 = k2 = null;
    do {
      h2 = f2.lane;
      var p2 = f2.eventTime;
      if ((d2 & h2) === h2) {
        n2 !== null && (n2 = n2.next = {
          eventTime: p2,
          lane: 0,
          tag: f2.tag,
          payload: f2.payload,
          callback: f2.callback,
          next: null
        });
        a: {
          var C2 = a, x = f2;
          h2 = b2;
          p2 = c2;
          switch (x.tag) {
            case 1:
              C2 = x.payload;
              if (typeof C2 === "function") {
                A2 = C2.call(p2, A2, h2);
                break a;
              }
              A2 = C2;
              break a;
            case 3:
              C2.flags = C2.flags & -4097 | 64;
            case 0:
              C2 = x.payload;
              h2 = typeof C2 === "function" ? C2.call(p2, A2, h2) : C2;
              if (h2 === null || h2 === void 0)
                break a;
              A2 = m$2({}, A2, h2);
              break a;
            case 2:
              wg = true;
          }
        }
        f2.callback !== null && (a.flags |= 32, h2 = e2.effects, h2 === null ? e2.effects = [f2] : h2.push(f2));
      } else
        p2 = { eventTime: p2, lane: h2, tag: f2.tag, payload: f2.payload, callback: f2.callback, next: null }, n2 === null ? (l2 = n2 = p2, k2 = A2) : n2 = n2.next = p2, g2 |= h2;
      f2 = f2.next;
      if (f2 === null)
        if (h2 = e2.shared.pending, h2 === null)
          break;
        else
          f2 = h2.next, h2.next = null, e2.lastBaseUpdate = h2, e2.shared.pending = null;
    } while (1);
    n2 === null && (k2 = A2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = n2;
    Dg |= g2;
    a.lanes = g2;
    a.memoizedState = A2;
  }
}
function Eg(a, b2, c2) {
  a = b2.effects;
  b2.effects = null;
  if (a !== null)
    for (b2 = 0; b2 < a.length; b2++) {
      var d2 = a[b2], e2 = d2.callback;
      if (e2 !== null) {
        d2.callback = null;
        d2 = c2;
        if (typeof e2 !== "function")
          throw Error(y$2(191, e2));
        e2.call(d2);
      }
    }
}
var Fg = new aa.Component().refs;
function Gg(a, b2, c2, d2) {
  b2 = a.memoizedState;
  c2 = c2(d2, b2);
  c2 = c2 === null || c2 === void 0 ? b2 : m$2({}, b2, c2);
  a.memoizedState = c2;
  a.lanes === 0 && (a.updateQueue.baseState = c2);
}
var Kg = { isMounted: function(a) {
  return (a = a._reactInternals) ? Zb(a) === a : false;
}, enqueueSetState: function(a, b2, c2) {
  a = a._reactInternals;
  var d2 = Hg(), e2 = Ig(a), f2 = zg(d2, e2);
  f2.payload = b2;
  c2 !== void 0 && c2 !== null && (f2.callback = c2);
  Ag(a, f2);
  Jg(a, e2, d2);
}, enqueueReplaceState: function(a, b2, c2) {
  a = a._reactInternals;
  var d2 = Hg(), e2 = Ig(a), f2 = zg(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  c2 !== void 0 && c2 !== null && (f2.callback = c2);
  Ag(a, f2);
  Jg(a, e2, d2);
}, enqueueForceUpdate: function(a, b2) {
  a = a._reactInternals;
  var c2 = Hg(), d2 = Ig(a), e2 = zg(c2, d2);
  e2.tag = 2;
  b2 !== void 0 && b2 !== null && (e2.callback = b2);
  Ag(a, e2);
  Jg(a, d2, c2);
} };
function Lg(a, b2, c2, d2, e2, f2, g2) {
  a = a.stateNode;
  return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Je(c2, d2) || !Je(e2, f2) : true;
}
function Mg(a, b2, c2) {
  var d2 = false, e2 = Cf;
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? f2 = vg(f2) : (e2 = Ff(b2) ? Df : M.current, d2 = b2.contextTypes, f2 = (d2 = d2 !== null && d2 !== void 0) ? Ef(a, e2) : Cf);
  b2 = new b2(c2, f2);
  a.memoizedState = b2.state !== null && b2.state !== void 0 ? b2.state : null;
  b2.updater = Kg;
  a.stateNode = b2;
  b2._reactInternals = a;
  d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Ng(a, b2, c2, d2) {
  a = b2.state;
  typeof b2.componentWillReceiveProps === "function" && b2.componentWillReceiveProps(c2, d2);
  typeof b2.UNSAFE_componentWillReceiveProps === "function" && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a && Kg.enqueueReplaceState(b2, b2.state, null);
}
function Og(a, b2, c2, d2) {
  var e2 = a.stateNode;
  e2.props = c2;
  e2.state = a.memoizedState;
  e2.refs = Fg;
  xg(a);
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? e2.context = vg(f2) : (f2 = Ff(b2) ? Df : M.current, e2.context = Ef(a, f2));
  Cg(a, c2, e2, d2);
  e2.state = a.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  typeof f2 === "function" && (Gg(a, b2, f2, c2), e2.state = a.memoizedState);
  typeof b2.getDerivedStateFromProps === "function" || typeof e2.getSnapshotBeforeUpdate === "function" || typeof e2.UNSAFE_componentWillMount !== "function" && typeof e2.componentWillMount !== "function" || (b2 = e2.state, typeof e2.componentWillMount === "function" && e2.componentWillMount(), typeof e2.UNSAFE_componentWillMount === "function" && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Kg.enqueueReplaceState(e2, e2.state, null), Cg(a, c2, e2, d2), e2.state = a.memoizedState);
  typeof e2.componentDidMount === "function" && (a.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a, b2, c2) {
  a = c2.ref;
  if (a !== null && typeof a !== "function" && typeof a !== "object") {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (c2.tag !== 1)
          throw Error(y$2(309));
        var d2 = c2.stateNode;
      }
      if (!d2)
        throw Error(y$2(147, a));
      var e2 = "" + a;
      if (b2 !== null && b2.ref !== null && typeof b2.ref === "function" && b2.ref._stringRef === e2)
        return b2.ref;
      b2 = function(a2) {
        var b3 = d2.refs;
        b3 === Fg && (b3 = d2.refs = {});
        a2 === null ? delete b3[e2] : b3[e2] = a2;
      };
      b2._stringRef = e2;
      return b2;
    }
    if (typeof a !== "string")
      throw Error(y$2(284));
    if (!c2._owner)
      throw Error(y$2(290, a));
  }
  return a;
}
function Rg(a, b2) {
  if (a.type !== "textarea")
    throw Error(y$2(31, Object.prototype.toString.call(b2) === "[object Object]" ? "object with keys {" + Object.keys(b2).join(", ") + "}" : b2));
}
function Sg(a) {
  function b2(b3, c3) {
    if (a) {
      var d3 = b3.lastEffect;
      d3 !== null ? (d3.nextEffect = c3, b3.lastEffect = c3) : b3.firstEffect = b3.lastEffect = c3;
      c3.nextEffect = null;
      c3.flags = 8;
    }
  }
  function c2(c3, d3) {
    if (!a)
      return null;
    for (; d3 !== null; )
      b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a2, b3) {
    for (a2 = new Map(); b3 !== null; )
      b3.key !== null ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
    return a2;
  }
  function e2(a2, b3) {
    a2 = Tg(a2, b3);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a)
      return c3;
    d3 = b3.alternate;
    if (d3 !== null)
      return d3 = d3.index, d3 < c3 ? (b3.flags = 2, c3) : d3;
    b3.flags = 2;
    return c3;
  }
  function g2(b3) {
    a && b3.alternate === null && (b3.flags = 2);
    return b3;
  }
  function h2(a2, b3, c3, d3) {
    if (b3 === null || b3.tag !== 6)
      return b3 = Ug(c3, a2.mode, d3), b3.return = a2, b3;
    b3 = e2(b3, c3);
    b3.return = a2;
    return b3;
  }
  function k2(a2, b3, c3, d3) {
    if (b3 !== null && b3.elementType === c3.type)
      return d3 = e2(b3, c3.props), d3.ref = Qg(a2, b3, c3), d3.return = a2, d3;
    d3 = Vg(c3.type, c3.key, c3.props, null, a2.mode, d3);
    d3.ref = Qg(a2, b3, c3);
    d3.return = a2;
    return d3;
  }
  function l2(a2, b3, c3, d3) {
    if (b3 === null || b3.tag !== 4 || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
      return b3 = Wg(c3, a2.mode, d3), b3.return = a2, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a2;
    return b3;
  }
  function n2(a2, b3, c3, d3, f3) {
    if (b3 === null || b3.tag !== 7)
      return b3 = Xg(c3, a2.mode, d3, f3), b3.return = a2, b3;
    b3 = e2(b3, c3);
    b3.return = a2;
    return b3;
  }
  function A2(a2, b3, c3) {
    if (typeof b3 === "string" || typeof b3 === "number")
      return b3 = Ug("" + b3, a2.mode, c3), b3.return = a2, b3;
    if (typeof b3 === "object" && b3 !== null) {
      switch (b3.$$typeof) {
        case sa:
          return c3 = Vg(b3.type, b3.key, b3.props, null, a2.mode, c3), c3.ref = Qg(a2, null, b3), c3.return = a2, c3;
        case ta:
          return b3 = Wg(b3, a2.mode, c3), b3.return = a2, b3;
      }
      if (Pg(b3) || La(b3))
        return b3 = Xg(b3, a2.mode, c3, null), b3.return = a2, b3;
      Rg(a2, b3);
    }
    return null;
  }
  function p2(a2, b3, c3, d3) {
    var e3 = b3 !== null ? b3.key : null;
    if (typeof c3 === "string" || typeof c3 === "number")
      return e3 !== null ? null : h2(a2, b3, "" + c3, d3);
    if (typeof c3 === "object" && c3 !== null) {
      switch (c3.$$typeof) {
        case sa:
          return c3.key === e3 ? c3.type === ua$1 ? n2(a2, b3, c3.props.children, d3, e3) : k2(a2, b3, c3, d3) : null;
        case ta:
          return c3.key === e3 ? l2(a2, b3, c3, d3) : null;
      }
      if (Pg(c3) || La(c3))
        return e3 !== null ? null : n2(a2, b3, c3, d3, null);
      Rg(a2, c3);
    }
    return null;
  }
  function C2(a2, b3, c3, d3, e3) {
    if (typeof d3 === "string" || typeof d3 === "number")
      return a2 = a2.get(c3) || null, h2(b3, a2, "" + d3, e3);
    if (typeof d3 === "object" && d3 !== null) {
      switch (d3.$$typeof) {
        case sa:
          return a2 = a2.get(d3.key === null ? c3 : d3.key) || null, d3.type === ua$1 ? n2(b3, a2, d3.props.children, e3, d3.key) : k2(b3, a2, d3, e3);
        case ta:
          return a2 = a2.get(d3.key === null ? c3 : d3.key) || null, l2(b3, a2, d3, e3);
      }
      if (Pg(d3) || La(d3))
        return a2 = a2.get(c3) || null, n2(b3, a2, d3, e3, null);
      Rg(b3, d3);
    }
    return null;
  }
  function x(e3, g3, h3, k3) {
    for (var l3 = null, t2 = null, u2 = g3, z2 = g3 = 0, q2 = null; u2 !== null && z2 < h3.length; z2++) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var n3 = p2(e3, u2, h3[z2], k3);
      if (n3 === null) {
        u2 === null && (u2 = q2);
        break;
      }
      a && u2 && n3.alternate === null && b2(e3, u2);
      g3 = f2(n3, g3, z2);
      t2 === null ? l3 = n3 : t2.sibling = n3;
      t2 = n3;
      u2 = q2;
    }
    if (z2 === h3.length)
      return c2(e3, u2), l3;
    if (u2 === null) {
      for (; z2 < h3.length; z2++)
        u2 = A2(e3, h3[z2], k3), u2 !== null && (g3 = f2(u2, g3, z2), t2 === null ? l3 = u2 : t2.sibling = u2, t2 = u2);
      return l3;
    }
    for (u2 = d2(e3, u2); z2 < h3.length; z2++)
      q2 = C2(u2, e3, z2, h3[z2], k3), q2 !== null && (a && q2.alternate !== null && u2.delete(q2.key === null ? z2 : q2.key), g3 = f2(q2, g3, z2), t2 === null ? l3 = q2 : t2.sibling = q2, t2 = q2);
    a && u2.forEach(function(a2) {
      return b2(e3, a2);
    });
    return l3;
  }
  function w2(e3, g3, h3, k3) {
    var l3 = La(h3);
    if (typeof l3 !== "function")
      throw Error(y$2(150));
    h3 = l3.call(h3);
    if (h3 == null)
      throw Error(y$2(151));
    for (var t2 = l3 = null, u2 = g3, z2 = g3 = 0, q2 = null, n3 = h3.next(); u2 !== null && !n3.done; z2++, n3 = h3.next()) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var w3 = p2(e3, u2, n3.value, k3);
      if (w3 === null) {
        u2 === null && (u2 = q2);
        break;
      }
      a && u2 && w3.alternate === null && b2(e3, u2);
      g3 = f2(w3, g3, z2);
      t2 === null ? l3 = w3 : t2.sibling = w3;
      t2 = w3;
      u2 = q2;
    }
    if (n3.done)
      return c2(e3, u2), l3;
    if (u2 === null) {
      for (; !n3.done; z2++, n3 = h3.next())
        n3 = A2(e3, n3.value, k3), n3 !== null && (g3 = f2(n3, g3, z2), t2 === null ? l3 = n3 : t2.sibling = n3, t2 = n3);
      return l3;
    }
    for (u2 = d2(e3, u2); !n3.done; z2++, n3 = h3.next())
      n3 = C2(u2, e3, z2, n3.value, k3), n3 !== null && (a && n3.alternate !== null && u2.delete(n3.key === null ? z2 : n3.key), g3 = f2(n3, g3, z2), t2 === null ? l3 = n3 : t2.sibling = n3, t2 = n3);
    a && u2.forEach(function(a2) {
      return b2(e3, a2);
    });
    return l3;
  }
  return function(a2, d3, f3, h3) {
    var k3 = typeof f3 === "object" && f3 !== null && f3.type === ua$1 && f3.key === null;
    k3 && (f3 = f3.props.children);
    var l3 = typeof f3 === "object" && f3 !== null;
    if (l3)
      switch (f3.$$typeof) {
        case sa:
          a: {
            l3 = f3.key;
            for (k3 = d3; k3 !== null; ) {
              if (k3.key === l3) {
                switch (k3.tag) {
                  case 7:
                    if (f3.type === ua$1) {
                      c2(a2, k3.sibling);
                      d3 = e2(k3, f3.props.children);
                      d3.return = a2;
                      a2 = d3;
                      break a;
                    }
                    break;
                  default:
                    if (k3.elementType === f3.type) {
                      c2(a2, k3.sibling);
                      d3 = e2(k3, f3.props);
                      d3.ref = Qg(a2, k3, f3);
                      d3.return = a2;
                      a2 = d3;
                      break a;
                    }
                }
                c2(a2, k3);
                break;
              } else
                b2(a2, k3);
              k3 = k3.sibling;
            }
            f3.type === ua$1 ? (d3 = Xg(f3.props.children, a2.mode, h3, f3.key), d3.return = a2, a2 = d3) : (h3 = Vg(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = Qg(a2, d3, f3), h3.return = a2, a2 = h3);
          }
          return g2(a2);
        case ta:
          a: {
            for (k3 = f3.key; d3 !== null; ) {
              if (d3.key === k3)
                if (d3.tag === 4 && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a2, d3.sibling);
                  d3 = e2(d3, f3.children || []);
                  d3.return = a2;
                  a2 = d3;
                  break a;
                } else {
                  c2(a2, d3);
                  break;
                }
              else
                b2(a2, d3);
              d3 = d3.sibling;
            }
            d3 = Wg(f3, a2.mode, h3);
            d3.return = a2;
            a2 = d3;
          }
          return g2(a2);
      }
    if (typeof f3 === "string" || typeof f3 === "number")
      return f3 = "" + f3, d3 !== null && d3.tag === 6 ? (c2(a2, d3.sibling), d3 = e2(d3, f3), d3.return = a2, a2 = d3) : (c2(a2, d3), d3 = Ug(f3, a2.mode, h3), d3.return = a2, a2 = d3), g2(a2);
    if (Pg(f3))
      return x(a2, d3, f3, h3);
    if (La(f3))
      return w2(a2, d3, f3, h3);
    l3 && Rg(a2, f3);
    if (typeof f3 === "undefined" && !k3)
      switch (a2.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y$2(152, Ra(a2.type) || "Component"));
      }
    return c2(a2, d3);
  };
}
var Yg = Sg(true), Zg = Sg(false), $g = {}, ah = Bf($g), bh = Bf($g), ch = Bf($g);
function dh(a) {
  if (a === $g)
    throw Error(y$2(174));
  return a;
}
function eh(a, b2) {
  I$1(ch, b2);
  I$1(bh, a);
  I$1(ah, $g);
  a = b2.nodeType;
  switch (a) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : mb(null, "");
      break;
    default:
      a = a === 8 ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = mb(b2, a);
  }
  H$1(ah);
  I$1(ah, b2);
}
function fh() {
  H$1(ah);
  H$1(bh);
  H$1(ch);
}
function gh(a) {
  dh(ch.current);
  var b2 = dh(ah.current);
  var c2 = mb(b2, a.type);
  b2 !== c2 && (I$1(bh, a), I$1(ah, c2));
}
function hh(a) {
  bh.current === a && (H$1(ah), H$1(bh));
}
var P = Bf(0);
function ih(a) {
  for (var b2 = a; b2 !== null; ) {
    if (b2.tag === 13) {
      var c2 = b2.memoizedState;
      if (c2 !== null && (c2 = c2.dehydrated, c2 === null || c2.data === "$?" || c2.data === "$!"))
        return b2;
    } else if (b2.tag === 19 && b2.memoizedProps.revealOrder !== void 0) {
      if ((b2.flags & 64) !== 0)
        return b2;
    } else if (b2.child !== null) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a)
      break;
    for (; b2.sibling === null; ) {
      if (b2.return === null || b2.return === a)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var jh = null, kh = null, lh = false;
function mh(a, b2) {
  var c2 = nh(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.type = "DELETED";
  c2.stateNode = b2;
  c2.return = a;
  c2.flags = 8;
  a.lastEffect !== null ? (a.lastEffect.nextEffect = c2, a.lastEffect = c2) : a.firstEffect = a.lastEffect = c2;
}
function oh(a, b2) {
  switch (a.tag) {
    case 5:
      var c2 = a.type;
      b2 = b2.nodeType !== 1 || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return b2 !== null ? (a.stateNode = b2, true) : false;
    case 6:
      return b2 = a.pendingProps === "" || b2.nodeType !== 3 ? null : b2, b2 !== null ? (a.stateNode = b2, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a) {
  if (lh) {
    var b2 = kh;
    if (b2) {
      var c2 = b2;
      if (!oh(a, b2)) {
        b2 = rf(c2.nextSibling);
        if (!b2 || !oh(a, b2)) {
          a.flags = a.flags & -1025 | 2;
          lh = false;
          jh = a;
          return;
        }
        mh(jh, c2);
      }
      jh = a;
      kh = rf(b2.firstChild);
    } else
      a.flags = a.flags & -1025 | 2, lh = false, jh = a;
  }
}
function qh(a) {
  for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
    a = a.return;
  jh = a;
}
function rh(a) {
  if (a !== jh)
    return false;
  if (!lh)
    return qh(a), lh = true, false;
  var b2 = a.type;
  if (a.tag !== 5 || b2 !== "head" && b2 !== "body" && !nf(b2, a.memoizedProps))
    for (b2 = kh; b2; )
      mh(a, b2), b2 = rf(b2.nextSibling);
  qh(a);
  if (a.tag === 13) {
    a = a.memoizedState;
    a = a !== null ? a.dehydrated : null;
    if (!a)
      throw Error(y$2(317));
    a: {
      a = a.nextSibling;
      for (b2 = 0; a; ) {
        if (a.nodeType === 8) {
          var c2 = a.data;
          if (c2 === "/$") {
            if (b2 === 0) {
              kh = rf(a.nextSibling);
              break a;
            }
            b2--;
          } else
            c2 !== "$" && c2 !== "$!" && c2 !== "$?" || b2++;
        }
        a = a.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a = 0; a < th.length; a++)
    th[a]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var vh = ra.ReactCurrentDispatcher, wh = ra.ReactCurrentBatchConfig, xh = 0, R = null, S = null, T = null, yh = false, zh = false;
function Ah() {
  throw Error(y$2(321));
}
function Bh(a, b2) {
  if (b2 === null)
    return false;
  for (var c2 = 0; c2 < b2.length && c2 < a.length; c2++)
    if (!He(a[c2], b2[c2]))
      return false;
  return true;
}
function Ch(a, b2, c2, d2, e2, f2) {
  xh = f2;
  R = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  vh.current = a === null || a.memoizedState === null ? Dh : Eh;
  a = c2(d2, e2);
  if (zh) {
    f2 = 0;
    do {
      zh = false;
      if (!(25 > f2))
        throw Error(y$2(301));
      f2 += 1;
      T = S = null;
      b2.updateQueue = null;
      vh.current = Fh;
      a = c2(d2, e2);
    } while (zh);
  }
  vh.current = Gh;
  b2 = S !== null && S.next !== null;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b2)
    throw Error(y$2(300));
  return a;
}
function Hh() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  T === null ? R.memoizedState = T = a : T = T.next = a;
  return T;
}
function Ih() {
  if (S === null) {
    var a = R.alternate;
    a = a !== null ? a.memoizedState : null;
  } else
    a = S.next;
  var b2 = T === null ? R.memoizedState : T.next;
  if (b2 !== null)
    T = b2, S = a;
  else {
    if (a === null)
      throw Error(y$2(310));
    S = a;
    a = { memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null };
    T === null ? R.memoizedState = T = a : T = T.next = a;
  }
  return T;
}
function Jh(a, b2) {
  return typeof b2 === "function" ? b2(a) : b2;
}
function Kh(a) {
  var b2 = Ih(), c2 = b2.queue;
  if (c2 === null)
    throw Error(y$2(311));
  c2.lastRenderedReducer = a;
  var d2 = S, e2 = d2.baseQueue, f2 = c2.pending;
  if (f2 !== null) {
    if (e2 !== null) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (e2 !== null) {
    e2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = f2 = null, k2 = e2;
    do {
      var l2 = k2.lane;
      if ((xh & l2) === l2)
        h2 !== null && (h2 = h2.next = { lane: 0, action: k2.action, eagerReducer: k2.eagerReducer, eagerState: k2.eagerState, next: null }), d2 = k2.eagerReducer === a ? k2.eagerState : a(d2, k2.action);
      else {
        var n2 = {
          lane: l2,
          action: k2.action,
          eagerReducer: k2.eagerReducer,
          eagerState: k2.eagerState,
          next: null
        };
        h2 === null ? (g2 = h2 = n2, f2 = d2) : h2 = h2.next = n2;
        R.lanes |= l2;
        Dg |= l2;
      }
      k2 = k2.next;
    } while (k2 !== null && k2 !== e2);
    h2 === null ? f2 = d2 : h2.next = g2;
    He(d2, b2.memoizedState) || (ug = true);
    b2.memoizedState = d2;
    b2.baseState = f2;
    b2.baseQueue = h2;
    c2.lastRenderedState = d2;
  }
  return [b2.memoizedState, c2.dispatch];
}
function Lh(a) {
  var b2 = Ih(), c2 = b2.queue;
  if (c2 === null)
    throw Error(y$2(311));
  c2.lastRenderedReducer = a;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (e2 !== null) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    He(f2, b2.memoizedState) || (ug = true);
    b2.memoizedState = f2;
    b2.baseQueue === null && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function Mh(a, b2, c2) {
  var d2 = b2._getVersion;
  d2 = d2(b2._source);
  var e2 = b2._workInProgressVersionPrimary;
  if (e2 !== null)
    a = e2 === d2;
  else if (a = a.mutableReadLanes, a = (xh & a) === a)
    b2._workInProgressVersionPrimary = d2, th.push(b2);
  if (a)
    return c2(b2._source);
  th.push(b2);
  throw Error(y$2(350));
}
function Nh(a, b2, c2, d2) {
  var e2 = U;
  if (e2 === null)
    throw Error(y$2(349));
  var f2 = b2._getVersion, g2 = f2(b2._source), h2 = vh.current, k2 = h2.useState(function() {
    return Mh(e2, b2, c2);
  }), l2 = k2[1], n2 = k2[0];
  k2 = T;
  var A2 = a.memoizedState, p2 = A2.refs, C2 = p2.getSnapshot, x = A2.source;
  A2 = A2.subscribe;
  var w2 = R;
  a.memoizedState = { refs: p2, source: b2, subscribe: d2 };
  h2.useEffect(function() {
    p2.getSnapshot = c2;
    p2.setSnapshot = l2;
    var a2 = f2(b2._source);
    if (!He(g2, a2)) {
      a2 = c2(b2._source);
      He(n2, a2) || (l2(a2), a2 = Ig(w2), e2.mutableReadLanes |= a2 & e2.pendingLanes);
      a2 = e2.mutableReadLanes;
      e2.entangledLanes |= a2;
      for (var d3 = e2.entanglements, h3 = a2; 0 < h3; ) {
        var k3 = 31 - Vc(h3), v2 = 1 << k3;
        d3[k3] |= a2;
        h3 &= ~v2;
      }
    }
  }, [c2, b2, d2]);
  h2.useEffect(function() {
    return d2(b2._source, function() {
      var a2 = p2.getSnapshot, c3 = p2.setSnapshot;
      try {
        c3(a2(b2._source));
        var d3 = Ig(w2);
        e2.mutableReadLanes |= d3 & e2.pendingLanes;
      } catch (q2) {
        c3(function() {
          throw q2;
        });
      }
    });
  }, [b2, d2]);
  He(C2, c2) && He(x, b2) && He(A2, d2) || (a = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n2 }, a.dispatch = l2 = Oh.bind(null, R, a), k2.queue = a, k2.baseQueue = null, n2 = Mh(e2, b2, c2), k2.memoizedState = k2.baseState = n2);
  return n2;
}
function Ph(a, b2, c2) {
  var d2 = Ih();
  return Nh(d2, a, b2, c2);
}
function Qh(a) {
  var b2 = Hh();
  typeof a === "function" && (a = a());
  b2.memoizedState = b2.baseState = a;
  a = b2.queue = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a };
  a = a.dispatch = Oh.bind(null, R, a);
  return [b2.memoizedState, a];
}
function Rh(a, b2, c2, d2) {
  a = { tag: a, create: b2, destroy: c2, deps: d2, next: null };
  b2 = R.updateQueue;
  b2 === null ? (b2 = { lastEffect: null }, R.updateQueue = b2, b2.lastEffect = a.next = a) : (c2 = b2.lastEffect, c2 === null ? b2.lastEffect = a.next = a : (d2 = c2.next, c2.next = a, a.next = d2, b2.lastEffect = a));
  return a;
}
function Sh(a) {
  var b2 = Hh();
  a = { current: a };
  return b2.memoizedState = a;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a, b2, c2, d2) {
  var e2 = Hh();
  R.flags |= a;
  e2.memoizedState = Rh(1 | b2, c2, void 0, d2 === void 0 ? null : d2);
}
function Vh(a, b2, c2, d2) {
  var e2 = Ih();
  d2 = d2 === void 0 ? null : d2;
  var f2 = void 0;
  if (S !== null) {
    var g2 = S.memoizedState;
    f2 = g2.destroy;
    if (d2 !== null && Bh(d2, g2.deps)) {
      Rh(b2, c2, f2, d2);
      return;
    }
  }
  R.flags |= a;
  e2.memoizedState = Rh(1 | b2, c2, f2, d2);
}
function Wh(a, b2) {
  return Uh(516, 4, a, b2);
}
function Xh(a, b2) {
  return Vh(516, 4, a, b2);
}
function Yh(a, b2) {
  return Vh(4, 2, a, b2);
}
function Zh(a, b2) {
  if (typeof b2 === "function")
    return a = a(), b2(a), function() {
      b2(null);
    };
  if (b2 !== null && b2 !== void 0)
    return a = a(), b2.current = a, function() {
      b2.current = null;
    };
}
function $h(a, b2, c2) {
  c2 = c2 !== null && c2 !== void 0 ? c2.concat([a]) : null;
  return Vh(4, 2, Zh.bind(null, b2, a), c2);
}
function ai() {
}
function bi(a, b2) {
  var c2 = Ih();
  b2 = b2 === void 0 ? null : b2;
  var d2 = c2.memoizedState;
  if (d2 !== null && b2 !== null && Bh(b2, d2[1]))
    return d2[0];
  c2.memoizedState = [a, b2];
  return a;
}
function ci(a, b2) {
  var c2 = Ih();
  b2 = b2 === void 0 ? null : b2;
  var d2 = c2.memoizedState;
  if (d2 !== null && b2 !== null && Bh(b2, d2[1]))
    return d2[0];
  a = a();
  c2.memoizedState = [a, b2];
  return a;
}
function di(a, b2) {
  var c2 = eg();
  gg(98 > c2 ? 98 : c2, function() {
    a(true);
  });
  gg(97 < c2 ? 97 : c2, function() {
    var c3 = wh.transition;
    wh.transition = 1;
    try {
      a(false), b2();
    } finally {
      wh.transition = c3;
    }
  });
}
function Oh(a, b2, c2) {
  var d2 = Hg(), e2 = Ig(a), f2 = { lane: e2, action: c2, eagerReducer: null, eagerState: null, next: null }, g2 = b2.pending;
  g2 === null ? f2.next = f2 : (f2.next = g2.next, g2.next = f2);
  b2.pending = f2;
  g2 = a.alternate;
  if (a === R || g2 !== null && g2 === R)
    zh = yh = true;
  else {
    if (a.lanes === 0 && (g2 === null || g2.lanes === 0) && (g2 = b2.lastRenderedReducer, g2 !== null))
      try {
        var h2 = b2.lastRenderedState, k2 = g2(h2, c2);
        f2.eagerReducer = g2;
        f2.eagerState = k2;
        if (He(k2, h2))
          return;
      } catch (l2) {
      } finally {
      }
    Jg(a, e2, d2);
  }
}
var Gh = { readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false }, Dh = { readContext: vg, useCallback: function(a, b2) {
  Hh().memoizedState = [a, b2 === void 0 ? null : b2];
  return a;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a, b2, c2) {
  c2 = c2 !== null && c2 !== void 0 ? c2.concat([a]) : null;
  return Uh(4, 2, Zh.bind(null, b2, a), c2);
}, useLayoutEffect: function(a, b2) {
  return Uh(4, 2, a, b2);
}, useMemo: function(a, b2) {
  var c2 = Hh();
  b2 = b2 === void 0 ? null : b2;
  a = a();
  c2.memoizedState = [a, b2];
  return a;
}, useReducer: function(a, b2, c2) {
  var d2 = Hh();
  b2 = c2 !== void 0 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a = d2.queue = { pending: null, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
  a = a.dispatch = Oh.bind(null, R, a);
  return [d2.memoizedState, a];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a) {
  var b2 = Qh(a), c2 = b2[0], d2 = b2[1];
  Wh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d2(a);
    } finally {
      wh.transition = b3;
    }
  }, [a]);
  return c2;
}, useTransition: function() {
  var a = Qh(false), b2 = a[0];
  a = di.bind(null, a[1]);
  Sh(a);
  return [a, b2];
}, useMutableSource: function(a, b2, c2) {
  var d2 = Hh();
  d2.memoizedState = { refs: { getSnapshot: b2, setSnapshot: null }, source: a, subscribe: c2 };
  return Nh(d2, a, b2, c2);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a = false, b2 = uf(function() {
      a || (a = true, c2("r:" + (tf++).toString(36)));
      throw Error(y$2(355));
    }), c2 = Qh(b2)[1];
    (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
      c2("r:" + (tf++).toString(36));
    }, void 0, null));
    return b2;
  }
  b2 = "r:" + (tf++).toString(36);
  Qh(b2);
  return b2;
}, unstable_isNewReconciler: false }, Eh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b2 = Kh(Jh), c2 = b2[0], d2 = b2[1];
  Xh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d2(a);
    } finally {
      wh.transition = b3;
    }
  }, [a]);
  return c2;
}, useTransition: function() {
  var a = Kh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false }, Fh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b2 = Lh(Jh), c2 = b2[0], d2 = b2[1];
  Xh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d2(a);
    } finally {
      wh.transition = b3;
    }
  }, [a]);
  return c2;
}, useTransition: function() {
  var a = Lh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false }, ei = ra.ReactCurrentOwner, ug = false;
function fi(a, b2, c2, d2) {
  b2.child = a === null ? Zg(b2, null, c2, d2) : Yg(b2, a.child, c2, d2);
}
function gi(a, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  tg(b2, e2);
  d2 = Ch(a, b2, c2, d2, f2, e2);
  if (a !== null && !ug)
    return b2.updateQueue = a.updateQueue, b2.flags &= -517, a.lanes &= ~e2, hi(a, b2, e2);
  b2.flags |= 1;
  fi(a, b2, d2, e2);
  return b2.child;
}
function ii(a, b2, c2, d2, e2, f2) {
  if (a === null) {
    var g2 = c2.type;
    if (typeof g2 === "function" && !ji(g2) && g2.defaultProps === void 0 && c2.compare === null && c2.defaultProps === void 0)
      return b2.tag = 15, b2.type = g2, ki(a, b2, g2, d2, e2, f2);
    a = Vg(c2.type, null, d2, b2, b2.mode, f2);
    a.ref = b2.ref;
    a.return = b2;
    return b2.child = a;
  }
  g2 = a.child;
  if ((e2 & f2) === 0 && (e2 = g2.memoizedProps, c2 = c2.compare, c2 = c2 !== null ? c2 : Je, c2(e2, d2) && a.ref === b2.ref))
    return hi(a, b2, f2);
  b2.flags |= 1;
  a = Tg(g2, d2);
  a.ref = b2.ref;
  a.return = b2;
  return b2.child = a;
}
function ki(a, b2, c2, d2, e2, f2) {
  if (a !== null && Je(a.memoizedProps, d2) && a.ref === b2.ref)
    if (ug = false, (f2 & e2) !== 0)
      (a.flags & 16384) !== 0 && (ug = true);
    else
      return b2.lanes = a.lanes, hi(a, b2, f2);
  return li(a, b2, c2, d2, f2);
}
function mi(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = a !== null ? a.memoizedState : null;
  if (d2.mode === "hidden" || d2.mode === "unstable-defer-without-hiding")
    if ((b2.mode & 4) === 0)
      b2.memoizedState = { baseLanes: 0 }, ni(b2, c2);
    else if ((c2 & 1073741824) !== 0)
      b2.memoizedState = { baseLanes: 0 }, ni(b2, f2 !== null ? f2.baseLanes : c2);
    else
      return a = f2 !== null ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a }, ni(b2, a), null;
  else
    f2 !== null ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, ni(b2, d2);
  fi(a, b2, e2, c2);
  return b2.child;
}
function oi(a, b2) {
  var c2 = b2.ref;
  if (a === null && c2 !== null || a !== null && a.ref !== c2)
    b2.flags |= 128;
}
function li(a, b2, c2, d2, e2) {
  var f2 = Ff(c2) ? Df : M.current;
  f2 = Ef(b2, f2);
  tg(b2, e2);
  c2 = Ch(a, b2, c2, d2, f2, e2);
  if (a !== null && !ug)
    return b2.updateQueue = a.updateQueue, b2.flags &= -517, a.lanes &= ~e2, hi(a, b2, e2);
  b2.flags |= 1;
  fi(a, b2, c2, e2);
  return b2.child;
}
function pi(a, b2, c2, d2, e2) {
  if (Ff(c2)) {
    var f2 = true;
    Jf(b2);
  } else
    f2 = false;
  tg(b2, e2);
  if (b2.stateNode === null)
    a !== null && (a.alternate = null, b2.alternate = null, b2.flags |= 2), Mg(b2, c2, d2), Og(b2, c2, d2, e2), d2 = true;
  else if (a === null) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    typeof l2 === "object" && l2 !== null ? l2 = vg(l2) : (l2 = Ff(c2) ? Df : M.current, l2 = Ef(b2, l2));
    var n2 = c2.getDerivedStateFromProps, A2 = typeof n2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function";
    A2 || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== d2 || k2 !== l2) && Ng(b2, g2, d2, l2);
    wg = false;
    var p2 = b2.memoizedState;
    g2.state = p2;
    Cg(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || p2 !== k2 || N.current || wg ? (typeof n2 === "function" && (Gg(b2, c2, n2, d2), k2 = b2.memoizedState), (h2 = wg || Lg(b2, c2, h2, d2, p2, k2, l2)) ? (A2 || typeof g2.UNSAFE_componentWillMount !== "function" && typeof g2.componentWillMount !== "function" || (typeof g2.componentWillMount === "function" && g2.componentWillMount(), typeof g2.UNSAFE_componentWillMount === "function" && g2.UNSAFE_componentWillMount()), typeof g2.componentDidMount === "function" && (b2.flags |= 4)) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4), d2 = false);
  } else {
    g2 = b2.stateNode;
    yg(a, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : lg(b2.type, h2);
    g2.props = l2;
    A2 = b2.pendingProps;
    p2 = g2.context;
    k2 = c2.contextType;
    typeof k2 === "object" && k2 !== null ? k2 = vg(k2) : (k2 = Ff(c2) ? Df : M.current, k2 = Ef(b2, k2));
    var C2 = c2.getDerivedStateFromProps;
    (n2 = typeof C2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function") || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== A2 || p2 !== k2) && Ng(b2, g2, d2, k2);
    wg = false;
    p2 = b2.memoizedState;
    g2.state = p2;
    Cg(b2, d2, g2, e2);
    var x = b2.memoizedState;
    h2 !== A2 || p2 !== x || N.current || wg ? (typeof C2 === "function" && (Gg(b2, c2, C2, d2), x = b2.memoizedState), (l2 = wg || Lg(b2, c2, l2, d2, p2, x, k2)) ? (n2 || typeof g2.UNSAFE_componentWillUpdate !== "function" && typeof g2.componentWillUpdate !== "function" || (typeof g2.componentWillUpdate === "function" && g2.componentWillUpdate(d2, x, k2), typeof g2.UNSAFE_componentWillUpdate === "function" && g2.UNSAFE_componentWillUpdate(d2, x, k2)), typeof g2.componentDidUpdate === "function" && (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate === "function" && (b2.flags |= 256)) : (typeof g2.componentDidUpdate !== "function" || h2 === a.memoizedProps && p2 === a.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a.memoizedProps && p2 === a.memoizedState || (b2.flags |= 256), b2.memoizedProps = d2, b2.memoizedState = x), g2.props = d2, g2.state = x, g2.context = k2, d2 = l2) : (typeof g2.componentDidUpdate !== "function" || h2 === a.memoizedProps && p2 === a.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a.memoizedProps && p2 === a.memoizedState || (b2.flags |= 256), d2 = false);
  }
  return qi(a, b2, c2, d2, f2, e2);
}
function qi(a, b2, c2, d2, e2, f2) {
  oi(a, b2);
  var g2 = (b2.flags & 64) !== 0;
  if (!d2 && !g2)
    return e2 && Kf(b2, c2, false), hi(a, b2, f2);
  d2 = b2.stateNode;
  ei.current = b2;
  var h2 = g2 && typeof c2.getDerivedStateFromError !== "function" ? null : d2.render();
  b2.flags |= 1;
  a !== null && g2 ? (b2.child = Yg(b2, a.child, null, f2), b2.child = Yg(b2, null, h2, f2)) : fi(a, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && Kf(b2, c2, true);
  return b2.child;
}
function ri(a) {
  var b2 = a.stateNode;
  b2.pendingContext ? Hf(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && Hf(a, b2.context, false);
  eh(a, b2.containerInfo);
}
var si = { dehydrated: null, retryLane: 0 };
function ti(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = P.current, f2 = false, g2;
  (g2 = (b2.flags & 64) !== 0) || (g2 = a !== null && a.memoizedState === null ? false : (e2 & 2) !== 0);
  g2 ? (f2 = true, b2.flags &= -65) : a !== null && a.memoizedState === null || d2.fallback === void 0 || d2.unstable_avoidThisFallback === true || (e2 |= 1);
  I$1(P, e2 & 1);
  if (a === null) {
    d2.fallback !== void 0 && ph(b2);
    a = d2.children;
    e2 = d2.fallback;
    if (f2)
      return a = ui(b2, a, e2, c2), b2.child.memoizedState = { baseLanes: c2 }, b2.memoizedState = si, a;
    if (typeof d2.unstable_expectedLoadTime === "number")
      return a = ui(b2, a, e2, c2), b2.child.memoizedState = { baseLanes: c2 }, b2.memoizedState = si, b2.lanes = 33554432, a;
    c2 = vi({ mode: "visible", children: a }, b2.mode, c2, null);
    c2.return = b2;
    return b2.child = c2;
  }
  if (a.memoizedState !== null) {
    if (f2)
      return d2 = wi(a, b2, d2.children, d2.fallback, c2), f2 = b2.child, e2 = a.child.memoizedState, f2.memoizedState = e2 === null ? { baseLanes: c2 } : { baseLanes: e2.baseLanes | c2 }, f2.childLanes = a.childLanes & ~c2, b2.memoizedState = si, d2;
    c2 = xi(a, b2, d2.children, c2);
    b2.memoizedState = null;
    return c2;
  }
  if (f2)
    return d2 = wi(a, b2, d2.children, d2.fallback, c2), f2 = b2.child, e2 = a.child.memoizedState, f2.memoizedState = e2 === null ? { baseLanes: c2 } : { baseLanes: e2.baseLanes | c2 }, f2.childLanes = a.childLanes & ~c2, b2.memoizedState = si, d2;
  c2 = xi(a, b2, d2.children, c2);
  b2.memoizedState = null;
  return c2;
}
function ui(a, b2, c2, d2) {
  var e2 = a.mode, f2 = a.child;
  b2 = { mode: "hidden", children: b2 };
  (e2 & 2) === 0 && f2 !== null ? (f2.childLanes = 0, f2.pendingProps = b2) : f2 = vi(b2, e2, 0, null);
  c2 = Xg(c2, e2, d2, null);
  f2.return = a;
  c2.return = a;
  f2.sibling = c2;
  a.child = f2;
  return c2;
}
function xi(a, b2, c2, d2) {
  var e2 = a.child;
  a = e2.sibling;
  c2 = Tg(e2, { mode: "visible", children: c2 });
  (b2.mode & 2) === 0 && (c2.lanes = d2);
  c2.return = b2;
  c2.sibling = null;
  a !== null && (a.nextEffect = null, a.flags = 8, b2.firstEffect = b2.lastEffect = a);
  return b2.child = c2;
}
function wi(a, b2, c2, d2, e2) {
  var f2 = b2.mode, g2 = a.child;
  a = g2.sibling;
  var h2 = { mode: "hidden", children: c2 };
  (f2 & 2) === 0 && b2.child !== g2 ? (c2 = b2.child, c2.childLanes = 0, c2.pendingProps = h2, g2 = c2.lastEffect, g2 !== null ? (b2.firstEffect = c2.firstEffect, b2.lastEffect = g2, g2.nextEffect = null) : b2.firstEffect = b2.lastEffect = null) : c2 = Tg(g2, h2);
  a !== null ? d2 = Tg(a, d2) : (d2 = Xg(d2, f2, e2, null), d2.flags |= 2);
  d2.return = b2;
  c2.return = b2;
  c2.sibling = d2;
  b2.child = c2;
  return d2;
}
function yi(a, b2) {
  a.lanes |= b2;
  var c2 = a.alternate;
  c2 !== null && (c2.lanes |= b2);
  sg(a.return, b2);
}
function zi(a, b2, c2, d2, e2, f2) {
  var g2 = a.memoizedState;
  g2 === null ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2, lastEffect: f2 } : (g2.isBackwards = b2, g2.rendering = null, g2.renderingStartTime = 0, g2.last = d2, g2.tail = c2, g2.tailMode = e2, g2.lastEffect = f2);
}
function Ai(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  fi(a, b2, d2.children, c2);
  d2 = P.current;
  if ((d2 & 2) !== 0)
    d2 = d2 & 1 | 2, b2.flags |= 64;
  else {
    if (a !== null && (a.flags & 64) !== 0)
      a:
        for (a = b2.child; a !== null; ) {
          if (a.tag === 13)
            a.memoizedState !== null && yi(a, c2);
          else if (a.tag === 19)
            yi(a, c2);
          else if (a.child !== null) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b2)
            break a;
          for (; a.sibling === null; ) {
            if (a.return === null || a.return === b2)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d2 &= 1;
  }
  I$1(P, d2);
  if ((b2.mode & 2) === 0)
    b2.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c2 = b2.child;
        for (e2 = null; c2 !== null; )
          a = c2.alternate, a !== null && ih(a) === null && (e2 = c2), c2 = c2.sibling;
        c2 = e2;
        c2 === null ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
        zi(b2, false, e2, c2, f2, b2.lastEffect);
        break;
      case "backwards":
        c2 = null;
        e2 = b2.child;
        for (b2.child = null; e2 !== null; ) {
          a = e2.alternate;
          if (a !== null && ih(a) === null) {
            b2.child = e2;
            break;
          }
          a = e2.sibling;
          e2.sibling = c2;
          c2 = e2;
          e2 = a;
        }
        zi(b2, true, c2, null, f2, b2.lastEffect);
        break;
      case "together":
        zi(b2, false, null, null, void 0, b2.lastEffect);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function hi(a, b2, c2) {
  a !== null && (b2.dependencies = a.dependencies);
  Dg |= b2.lanes;
  if ((c2 & b2.childLanes) !== 0) {
    if (a !== null && b2.child !== a.child)
      throw Error(y$2(153));
    if (b2.child !== null) {
      a = b2.child;
      c2 = Tg(a, a.pendingProps);
      b2.child = c2;
      for (c2.return = b2; a.sibling !== null; )
        a = a.sibling, c2 = c2.sibling = Tg(a, a.pendingProps), c2.return = b2;
      c2.sibling = null;
    }
    return b2.child;
  }
  return null;
}
var Bi, Ci, Di, Ei;
Bi = function(a, b2) {
  for (var c2 = b2.child; c2 !== null; ) {
    if (c2.tag === 5 || c2.tag === 6)
      a.appendChild(c2.stateNode);
    else if (c2.tag !== 4 && c2.child !== null) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; c2.sibling === null; ) {
      if (c2.return === null || c2.return === b2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Ci = function() {
};
Di = function(a, b2, c2, d2) {
  var e2 = a.memoizedProps;
  if (e2 !== d2) {
    a = b2.stateNode;
    dh(ah.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Ya(a, e2);
        d2 = Ya(a, d2);
        f2 = [];
        break;
      case "option":
        e2 = eb(a, e2);
        d2 = eb(a, d2);
        f2 = [];
        break;
      case "select":
        e2 = m$2({}, e2, { value: void 0 });
        d2 = m$2({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a, e2);
        d2 = gb(a, d2);
        f2 = [];
        break;
      default:
        typeof e2.onClick !== "function" && typeof d2.onClick === "function" && (a.onclick = jf);
    }
    vb(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2)
      if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && e2[l2] != null)
        if (l2 === "style") {
          var h2 = e2[l2];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
        } else
          l2 !== "dangerouslySetInnerHTML" && l2 !== "children" && l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && l2 !== "autoFocus" && (ca.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = e2 != null ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (k2 != null || h2 != null))
        if (l2 === "style")
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
            for (g2 in k2)
              k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
          } else
            c2 || (f2 || (f2 = []), f2.push(l2, c2)), c2 = k2;
        else
          l2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, k2 != null && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : l2 === "children" ? typeof k2 !== "string" && typeof k2 !== "number" || (f2 = f2 || []).push(l2, "" + k2) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (ca.hasOwnProperty(l2) ? (k2 != null && l2 === "onScroll" && G$1("scroll", a), f2 || h2 === k2 || (f2 = [])) : typeof k2 === "object" && k2 !== null && k2.$$typeof === Ga ? k2.toString() : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Ei = function(a, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Fi(a, b2) {
  if (!lh)
    switch (a.tailMode) {
      case "hidden":
        b2 = a.tail;
        for (var c2 = null; b2 !== null; )
          b2.alternate !== null && (c2 = b2), b2 = b2.sibling;
        c2 === null ? a.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a.tail;
        for (var d2 = null; c2 !== null; )
          c2.alternate !== null && (d2 = c2), c2 = c2.sibling;
        d2 === null ? b2 || a.tail === null ? a.tail = null : a.tail.sibling = null : d2.sibling = null;
    }
}
function Gi(a, b2, c2) {
  var d2 = b2.pendingProps;
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return Ff(b2.type) && Gf(), null;
    case 3:
      fh();
      H$1(N);
      H$1(M);
      uh();
      d2 = b2.stateNode;
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (a === null || a.child === null)
        rh(b2) ? b2.flags |= 4 : d2.hydrate || (b2.flags |= 256);
      Ci(b2);
      return null;
    case 5:
      hh(b2);
      var e2 = dh(ch.current);
      c2 = b2.type;
      if (a !== null && b2.stateNode != null)
        Di(a, b2, c2, d2, e2), a.ref !== b2.ref && (b2.flags |= 128);
      else {
        if (!d2) {
          if (b2.stateNode === null)
            throw Error(y$2(166));
          return null;
        }
        a = dh(ah.current);
        if (rh(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[wf] = b2;
          d2[xf] = f2;
          switch (c2) {
            case "dialog":
              G$1("cancel", d2);
              G$1("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              G$1("load", d2);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Xe.length; a++)
                G$1(Xe[a], d2);
              break;
            case "source":
              G$1("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              G$1("error", d2);
              G$1("load", d2);
              break;
            case "details":
              G$1("toggle", d2);
              break;
            case "input":
              Za(d2, f2);
              G$1("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              G$1("invalid", d2);
              break;
            case "textarea":
              hb(d2, f2), G$1("invalid", d2);
          }
          vb(c2, f2);
          a = null;
          for (var g2 in f2)
            f2.hasOwnProperty(g2) && (e2 = f2[g2], g2 === "children" ? typeof e2 === "string" ? d2.textContent !== e2 && (a = ["children", e2]) : typeof e2 === "number" && d2.textContent !== "" + e2 && (a = ["children", "" + e2]) : ca.hasOwnProperty(g2) && e2 != null && g2 === "onScroll" && G$1("scroll", d2));
          switch (c2) {
            case "input":
              Va(d2);
              cb(d2, f2, true);
              break;
            case "textarea":
              Va(d2);
              jb(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f2.onClick === "function" && (d2.onclick = jf);
          }
          d2 = a;
          b2.updateQueue = d2;
          d2 !== null && (b2.flags |= 4);
        } else {
          g2 = e2.nodeType === 9 ? e2 : e2.ownerDocument;
          a === kb.html && (a = lb(c2));
          a === kb.html ? c2 === "script" ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : typeof d2.is === "string" ? a = g2.createElement(c2, { is: d2.is }) : (a = g2.createElement(c2), c2 === "select" && (g2 = a, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a = g2.createElementNS(a, c2);
          a[wf] = b2;
          a[xf] = d2;
          Bi(a, b2, false, false);
          b2.stateNode = a;
          g2 = wb(c2, d2);
          switch (c2) {
            case "dialog":
              G$1("cancel", a);
              G$1("close", a);
              e2 = d2;
              break;
            case "iframe":
            case "object":
            case "embed":
              G$1("load", a);
              e2 = d2;
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < Xe.length; e2++)
                G$1(Xe[e2], a);
              e2 = d2;
              break;
            case "source":
              G$1("error", a);
              e2 = d2;
              break;
            case "img":
            case "image":
            case "link":
              G$1("error", a);
              G$1("load", a);
              e2 = d2;
              break;
            case "details":
              G$1("toggle", a);
              e2 = d2;
              break;
            case "input":
              Za(a, d2);
              e2 = Ya(a, d2);
              G$1("invalid", a);
              break;
            case "option":
              e2 = eb(a, d2);
              break;
            case "select":
              a._wrapperState = { wasMultiple: !!d2.multiple };
              e2 = m$2({}, d2, { value: void 0 });
              G$1("invalid", a);
              break;
            case "textarea":
              hb(a, d2);
              e2 = gb(a, d2);
              G$1("invalid", a);
              break;
            default:
              e2 = d2;
          }
          vb(c2, e2);
          var h2 = e2;
          for (f2 in h2)
            if (h2.hasOwnProperty(f2)) {
              var k2 = h2[f2];
              f2 === "style" ? tb(a, k2) : f2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, k2 != null && ob(a, k2)) : f2 === "children" ? typeof k2 === "string" ? (c2 !== "textarea" || k2 !== "") && pb(a, k2) : typeof k2 === "number" && pb(a, "" + k2) : f2 !== "suppressContentEditableWarning" && f2 !== "suppressHydrationWarning" && f2 !== "autoFocus" && (ca.hasOwnProperty(f2) ? k2 != null && f2 === "onScroll" && G$1("scroll", a) : k2 != null && qa(a, f2, k2, g2));
            }
          switch (c2) {
            case "input":
              Va(a);
              cb(a, d2, false);
              break;
            case "textarea":
              Va(a);
              jb(a);
              break;
            case "option":
              d2.value != null && a.setAttribute("value", "" + Sa(d2.value));
              break;
            case "select":
              a.multiple = !!d2.multiple;
              f2 = d2.value;
              f2 != null ? fb(a, !!d2.multiple, f2, false) : d2.defaultValue != null && fb(a, !!d2.multiple, d2.defaultValue, true);
              break;
            default:
              typeof e2.onClick === "function" && (a.onclick = jf);
          }
          mf(c2, d2) && (b2.flags |= 4);
        }
        b2.ref !== null && (b2.flags |= 128);
      }
      return null;
    case 6:
      if (a && b2.stateNode != null)
        Ei(a, b2, a.memoizedProps, d2);
      else {
        if (typeof d2 !== "string" && b2.stateNode === null)
          throw Error(y$2(166));
        c2 = dh(ch.current);
        dh(ah.current);
        rh(b2) ? (d2 = b2.stateNode, c2 = b2.memoizedProps, d2[wf] = b2, d2.nodeValue !== c2 && (b2.flags |= 4)) : (d2 = (c2.nodeType === 9 ? c2 : c2.ownerDocument).createTextNode(d2), d2[wf] = b2, b2.stateNode = d2);
      }
      return null;
    case 13:
      H$1(P);
      d2 = b2.memoizedState;
      if ((b2.flags & 64) !== 0)
        return b2.lanes = c2, b2;
      d2 = d2 !== null;
      c2 = false;
      a === null ? b2.memoizedProps.fallback !== void 0 && rh(b2) : c2 = a.memoizedState !== null;
      if (d2 && !c2 && (b2.mode & 2) !== 0)
        if (a === null && b2.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
          V === 0 && (V = 3);
        else {
          if (V === 0 || V === 3)
            V = 4;
          U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
        }
      if (d2 || c2)
        b2.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b2), a === null && cf(b2.stateNode.containerInfo), null;
    case 10:
      return rg(b2), null;
    case 17:
      return Ff(b2.type) && Gf(), null;
    case 19:
      H$1(P);
      d2 = b2.memoizedState;
      if (d2 === null)
        return null;
      f2 = (b2.flags & 64) !== 0;
      g2 = d2.rendering;
      if (g2 === null)
        if (f2)
          Fi(d2, false);
        else {
          if (V !== 0 || a !== null && (a.flags & 64) !== 0)
            for (a = b2.child; a !== null; ) {
              g2 = ih(a);
              if (g2 !== null) {
                b2.flags |= 64;
                Fi(d2, false);
                f2 = g2.updateQueue;
                f2 !== null && (b2.updateQueue = f2, b2.flags |= 4);
                d2.lastEffect === null && (b2.firstEffect = null);
                b2.lastEffect = d2.lastEffect;
                d2 = c2;
                for (c2 = b2.child; c2 !== null; )
                  f2 = c2, a = d2, f2.flags &= 2, f2.nextEffect = null, f2.firstEffect = null, f2.lastEffect = null, g2 = f2.alternate, g2 === null ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }), c2 = c2.sibling;
                I$1(P, P.current & 1 | 2);
                return b2.child;
              }
              a = a.sibling;
            }
          d2.tail !== null && O() > Ji && (b2.flags |= 64, f2 = true, Fi(d2, false), b2.lanes = 33554432);
        }
      else {
        if (!f2)
          if (a = ih(g2), a !== null) {
            if (b2.flags |= 64, f2 = true, c2 = a.updateQueue, c2 !== null && (b2.updateQueue = c2, b2.flags |= 4), Fi(d2, true), d2.tail === null && d2.tailMode === "hidden" && !g2.alternate && !lh)
              return b2 = b2.lastEffect = d2.lastEffect, b2 !== null && (b2.nextEffect = null), null;
          } else
            2 * O() - d2.renderingStartTime > Ji && c2 !== 1073741824 && (b2.flags |= 64, f2 = true, Fi(d2, false), b2.lanes = 33554432);
        d2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = d2.last, c2 !== null ? c2.sibling = g2 : b2.child = g2, d2.last = g2);
      }
      return d2.tail !== null ? (c2 = d2.tail, d2.rendering = c2, d2.tail = c2.sibling, d2.lastEffect = b2.lastEffect, d2.renderingStartTime = O(), c2.sibling = null, b2 = P.current, I$1(P, f2 ? b2 & 1 | 2 : b2 & 1), c2) : null;
    case 23:
    case 24:
      return Ki(), a !== null && a.memoizedState !== null !== (b2.memoizedState !== null) && d2.mode !== "unstable-defer-without-hiding" && (b2.flags |= 4), null;
  }
  throw Error(y$2(156, b2.tag));
}
function Li(a) {
  switch (a.tag) {
    case 1:
      Ff(a.type) && Gf();
      var b2 = a.flags;
      return b2 & 4096 ? (a.flags = b2 & -4097 | 64, a) : null;
    case 3:
      fh();
      H$1(N);
      H$1(M);
      uh();
      b2 = a.flags;
      if ((b2 & 64) !== 0)
        throw Error(y$2(285));
      a.flags = b2 & -4097 | 64;
      return a;
    case 5:
      return hh(a), null;
    case 13:
      return H$1(P), b2 = a.flags, b2 & 4096 ? (a.flags = b2 & -4097 | 64, a) : null;
    case 19:
      return H$1(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Qa(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b2, stack: e2 };
}
function Ni(a, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Oi = typeof WeakMap === "function" ? WeakMap : Map;
function Pi(a, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Qi || (Qi = true, Ri = d2);
    Ni(a, b2);
  };
  return c2;
}
function Si(a, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  var d2 = a.type.getDerivedStateFromError;
  if (typeof d2 === "function") {
    var e2 = b2.value;
    c2.payload = function() {
      Ni(a, b2);
      return d2(e2);
    };
  }
  var f2 = a.stateNode;
  f2 !== null && typeof f2.componentDidCatch === "function" && (c2.callback = function() {
    typeof d2 !== "function" && (Ti === null ? Ti = new Set([this]) : Ti.add(this), Ni(a, b2));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: c3 !== null ? c3 : "" });
  });
  return c2;
}
var Ui = typeof WeakSet === "function" ? WeakSet : Set;
function Vi(a) {
  var b2 = a.ref;
  if (b2 !== null)
    if (typeof b2 === "function")
      try {
        b2(null);
      } catch (c2) {
        Wi(a, c2);
      }
    else
      b2.current = null;
}
function Xi(a, b2) {
  switch (b2.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b2.flags & 256 && a !== null) {
        var c2 = a.memoizedProps, d2 = a.memoizedState;
        a = b2.stateNode;
        b2 = a.getSnapshotBeforeUpdate(b2.elementType === b2.type ? c2 : lg(b2.type, c2), d2);
        a.__reactInternalSnapshotBeforeUpdate = b2;
      }
      return;
    case 3:
      b2.flags & 256 && qf(b2.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y$2(163));
}
function Yi(a, b2, c2) {
  switch (c2.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b2 = c2.updateQueue;
      b2 = b2 !== null ? b2.lastEffect : null;
      if (b2 !== null) {
        a = b2 = b2.next;
        do {
          if ((a.tag & 3) === 3) {
            var d2 = a.create;
            a.destroy = d2();
          }
          a = a.next;
        } while (a !== b2);
      }
      b2 = c2.updateQueue;
      b2 = b2 !== null ? b2.lastEffect : null;
      if (b2 !== null) {
        a = b2 = b2.next;
        do {
          var e2 = a;
          d2 = e2.next;
          e2 = e2.tag;
          (e2 & 4) !== 0 && (e2 & 1) !== 0 && (Zi(c2, a), $i(c2, a));
          a = d2;
        } while (a !== b2);
      }
      return;
    case 1:
      a = c2.stateNode;
      c2.flags & 4 && (b2 === null ? a.componentDidMount() : (d2 = c2.elementType === c2.type ? b2.memoizedProps : lg(c2.type, b2.memoizedProps), a.componentDidUpdate(d2, b2.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
      b2 = c2.updateQueue;
      b2 !== null && Eg(c2, b2, a);
      return;
    case 3:
      b2 = c2.updateQueue;
      if (b2 !== null) {
        a = null;
        if (c2.child !== null)
          switch (c2.child.tag) {
            case 5:
              a = c2.child.stateNode;
              break;
            case 1:
              a = c2.child.stateNode;
          }
        Eg(c2, b2, a);
      }
      return;
    case 5:
      a = c2.stateNode;
      b2 === null && c2.flags & 4 && mf(c2.type, c2.memoizedProps) && a.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      c2.memoizedState === null && (c2 = c2.alternate, c2 !== null && (c2 = c2.memoizedState, c2 !== null && (c2 = c2.dehydrated, c2 !== null && Cc(c2))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y$2(163));
}
function aj(a, b2) {
  for (var c2 = a; ; ) {
    if (c2.tag === 5) {
      var d2 = c2.stateNode;
      if (b2)
        d2 = d2.style, typeof d2.setProperty === "function" ? d2.setProperty("display", "none", "important") : d2.display = "none";
      else {
        d2 = c2.stateNode;
        var e2 = c2.memoizedProps.style;
        e2 = e2 !== void 0 && e2 !== null && e2.hasOwnProperty("display") ? e2.display : null;
        d2.style.display = sb("display", e2);
      }
    } else if (c2.tag === 6)
      c2.stateNode.nodeValue = b2 ? "" : c2.memoizedProps;
    else if ((c2.tag !== 23 && c2.tag !== 24 || c2.memoizedState === null || c2 === a) && c2.child !== null) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === a)
      break;
    for (; c2.sibling === null; ) {
      if (c2.return === null || c2.return === a)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
}
function bj(a, b2) {
  if (Mf && typeof Mf.onCommitFiberUnmount === "function")
    try {
      Mf.onCommitFiberUnmount(Lf, b2);
    } catch (f2) {
    }
  switch (b2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a = b2.updateQueue;
      if (a !== null && (a = a.lastEffect, a !== null)) {
        var c2 = a = a.next;
        do {
          var d2 = c2, e2 = d2.destroy;
          d2 = d2.tag;
          if (e2 !== void 0)
            if ((d2 & 4) !== 0)
              Zi(b2, c2);
            else {
              d2 = b2;
              try {
                e2();
              } catch (f2) {
                Wi(d2, f2);
              }
            }
          c2 = c2.next;
        } while (c2 !== a);
      }
      break;
    case 1:
      Vi(b2);
      a = b2.stateNode;
      if (typeof a.componentWillUnmount === "function")
        try {
          a.props = b2.memoizedProps, a.state = b2.memoizedState, a.componentWillUnmount();
        } catch (f2) {
          Wi(b2, f2);
        }
      break;
    case 5:
      Vi(b2);
      break;
    case 4:
      cj(a, b2);
  }
}
function dj(a) {
  a.alternate = null;
  a.child = null;
  a.dependencies = null;
  a.firstEffect = null;
  a.lastEffect = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.return = null;
  a.updateQueue = null;
}
function ej(a) {
  return a.tag === 5 || a.tag === 3 || a.tag === 4;
}
function fj(a) {
  a: {
    for (var b2 = a.return; b2 !== null; ) {
      if (ej(b2))
        break a;
      b2 = b2.return;
    }
    throw Error(y$2(160));
  }
  var c2 = b2;
  b2 = c2.stateNode;
  switch (c2.tag) {
    case 5:
      var d2 = false;
      break;
    case 3:
      b2 = b2.containerInfo;
      d2 = true;
      break;
    case 4:
      b2 = b2.containerInfo;
      d2 = true;
      break;
    default:
      throw Error(y$2(161));
  }
  c2.flags & 16 && (pb(b2, ""), c2.flags &= -17);
  a:
    b:
      for (c2 = a; ; ) {
        for (; c2.sibling === null; ) {
          if (c2.return === null || ej(c2.return)) {
            c2 = null;
            break a;
          }
          c2 = c2.return;
        }
        c2.sibling.return = c2.return;
        for (c2 = c2.sibling; c2.tag !== 5 && c2.tag !== 6 && c2.tag !== 18; ) {
          if (c2.flags & 2)
            continue b;
          if (c2.child === null || c2.tag === 4)
            continue b;
          else
            c2.child.return = c2, c2 = c2.child;
        }
        if (!(c2.flags & 2)) {
          c2 = c2.stateNode;
          break a;
        }
      }
  d2 ? gj(a, c2, b2) : hj(a, c2, b2);
}
function gj(a, b2, c2) {
  var d2 = a.tag, e2 = d2 === 5 || d2 === 6;
  if (e2)
    a = e2 ? a.stateNode : a.stateNode.instance, b2 ? c2.nodeType === 8 ? c2.parentNode.insertBefore(a, b2) : c2.insertBefore(a, b2) : (c2.nodeType === 8 ? (b2 = c2.parentNode, b2.insertBefore(a, c2)) : (b2 = c2, b2.appendChild(a)), c2 = c2._reactRootContainer, c2 !== null && c2 !== void 0 || b2.onclick !== null || (b2.onclick = jf));
  else if (d2 !== 4 && (a = a.child, a !== null))
    for (gj(a, b2, c2), a = a.sibling; a !== null; )
      gj(a, b2, c2), a = a.sibling;
}
function hj(a, b2, c2) {
  var d2 = a.tag, e2 = d2 === 5 || d2 === 6;
  if (e2)
    a = e2 ? a.stateNode : a.stateNode.instance, b2 ? c2.insertBefore(a, b2) : c2.appendChild(a);
  else if (d2 !== 4 && (a = a.child, a !== null))
    for (hj(a, b2, c2), a = a.sibling; a !== null; )
      hj(a, b2, c2), a = a.sibling;
}
function cj(a, b2) {
  for (var c2 = b2, d2 = false, e2, f2; ; ) {
    if (!d2) {
      d2 = c2.return;
      a:
        for (; ; ) {
          if (d2 === null)
            throw Error(y$2(160));
          e2 = d2.stateNode;
          switch (d2.tag) {
            case 5:
              f2 = false;
              break a;
            case 3:
              e2 = e2.containerInfo;
              f2 = true;
              break a;
            case 4:
              e2 = e2.containerInfo;
              f2 = true;
              break a;
          }
          d2 = d2.return;
        }
      d2 = true;
    }
    if (c2.tag === 5 || c2.tag === 6) {
      a:
        for (var g2 = a, h2 = c2, k2 = h2; ; )
          if (bj(g2, k2), k2.child !== null && k2.tag !== 4)
            k2.child.return = k2, k2 = k2.child;
          else {
            if (k2 === h2)
              break a;
            for (; k2.sibling === null; ) {
              if (k2.return === null || k2.return === h2)
                break a;
              k2 = k2.return;
            }
            k2.sibling.return = k2.return;
            k2 = k2.sibling;
          }
      f2 ? (g2 = e2, h2 = c2.stateNode, g2.nodeType === 8 ? g2.parentNode.removeChild(h2) : g2.removeChild(h2)) : e2.removeChild(c2.stateNode);
    } else if (c2.tag === 4) {
      if (c2.child !== null) {
        e2 = c2.stateNode.containerInfo;
        f2 = true;
        c2.child.return = c2;
        c2 = c2.child;
        continue;
      }
    } else if (bj(a, c2), c2.child !== null) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; c2.sibling === null; ) {
      if (c2.return === null || c2.return === b2)
        return;
      c2 = c2.return;
      c2.tag === 4 && (d2 = false);
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
}
function ij(a, b2) {
  switch (b2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c2 = b2.updateQueue;
      c2 = c2 !== null ? c2.lastEffect : null;
      if (c2 !== null) {
        var d2 = c2 = c2.next;
        do
          (d2.tag & 3) === 3 && (a = d2.destroy, d2.destroy = void 0, a !== void 0 && a()), d2 = d2.next;
        while (d2 !== c2);
      }
      return;
    case 1:
      return;
    case 5:
      c2 = b2.stateNode;
      if (c2 != null) {
        d2 = b2.memoizedProps;
        var e2 = a !== null ? a.memoizedProps : d2;
        a = b2.type;
        var f2 = b2.updateQueue;
        b2.updateQueue = null;
        if (f2 !== null) {
          c2[xf] = d2;
          a === "input" && d2.type === "radio" && d2.name != null && $a(c2, d2);
          wb(a, e2);
          b2 = wb(a, d2);
          for (e2 = 0; e2 < f2.length; e2 += 2) {
            var g2 = f2[e2], h2 = f2[e2 + 1];
            g2 === "style" ? tb(c2, h2) : g2 === "dangerouslySetInnerHTML" ? ob(c2, h2) : g2 === "children" ? pb(c2, h2) : qa(c2, g2, h2, b2);
          }
          switch (a) {
            case "input":
              ab(c2, d2);
              break;
            case "textarea":
              ib(c2, d2);
              break;
            case "select":
              a = c2._wrapperState.wasMultiple, c2._wrapperState.wasMultiple = !!d2.multiple, f2 = d2.value, f2 != null ? fb(c2, !!d2.multiple, f2, false) : a !== !!d2.multiple && (d2.defaultValue != null ? fb(c2, !!d2.multiple, d2.defaultValue, true) : fb(c2, !!d2.multiple, d2.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (b2.stateNode === null)
        throw Error(y$2(162));
      b2.stateNode.nodeValue = b2.memoizedProps;
      return;
    case 3:
      c2 = b2.stateNode;
      c2.hydrate && (c2.hydrate = false, Cc(c2.containerInfo));
      return;
    case 12:
      return;
    case 13:
      b2.memoizedState !== null && (jj = O(), aj(b2.child, true));
      kj(b2);
      return;
    case 19:
      kj(b2);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b2, b2.memoizedState !== null);
      return;
  }
  throw Error(y$2(163));
}
function kj(a) {
  var b2 = a.updateQueue;
  if (b2 !== null) {
    a.updateQueue = null;
    var c2 = a.stateNode;
    c2 === null && (c2 = a.stateNode = new Ui());
    b2.forEach(function(b3) {
      var d2 = lj.bind(null, a, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function mj(a, b2) {
  return a !== null && (a = a.memoizedState, a === null || a.dehydrated !== null) ? (b2 = b2.memoizedState, b2 !== null && b2.dehydrated === null) : false;
}
var nj = Math.ceil, oj = ra.ReactCurrentDispatcher, pj = ra.ReactCurrentOwner, X = 0, U = null, Y = null, W = 0, qj = 0, rj = Bf(0), V = 0, sj = null, tj = 0, Dg = 0, Hi = 0, uj = 0, vj = null, jj = 0, Ji = Infinity;
function wj() {
  Ji = O() + 500;
}
var Z = null, Qi = false, Ri = null, Ti = null, xj = false, yj = null, zj = 90, Aj = [], Bj = [], Cj = null, Dj = 0, Ej = null, Fj = -1, Gj = 0, Hj = 0, Ij = null, Jj = false;
function Hg() {
  return (X & 48) !== 0 ? O() : Fj !== -1 ? Fj : Fj = O();
}
function Ig(a) {
  a = a.mode;
  if ((a & 2) === 0)
    return 1;
  if ((a & 4) === 0)
    return eg() === 99 ? 1 : 2;
  Gj === 0 && (Gj = tj);
  if (kg.transition !== 0) {
    Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
    a = Gj;
    var b2 = 4186112 & ~Hj;
    b2 &= -b2;
    b2 === 0 && (a = 4186112 & ~a, b2 = a & -a, b2 === 0 && (b2 = 8192));
    return b2;
  }
  a = eg();
  (X & 4) !== 0 && a === 98 ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
  return a;
}
function Jg(a, b2, c2) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y$2(185));
  a = Kj(a, b2);
  if (a === null)
    return null;
  $c(a, b2, c2);
  a === U && (Hi |= b2, V === 4 && Ii(a, W));
  var d2 = eg();
  b2 === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a) : (Mj(a, c2), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d2 !== 98 && d2 !== 99 || (Cj === null ? Cj = new Set([a]) : Cj.add(a)), Mj(a, c2));
  vj = a;
}
function Kj(a, b2) {
  a.lanes |= b2;
  var c2 = a.alternate;
  c2 !== null && (c2.lanes |= b2);
  c2 = a;
  for (a = a.return; a !== null; )
    a.childLanes |= b2, c2 = a.alternate, c2 !== null && (c2.childLanes |= b2), c2 = a, a = a.return;
  return c2.tag === 3 ? c2.stateNode : null;
}
function Mj(a, b2) {
  for (var c2 = a.callbackNode, d2 = a.suspendedLanes, e2 = a.pingedLanes, f2 = a.expirationTimes, g2 = a.pendingLanes; 0 < g2; ) {
    var h2 = 31 - Vc(g2), k2 = 1 << h2, l2 = f2[h2];
    if (l2 === -1) {
      if ((k2 & d2) === 0 || (k2 & e2) !== 0) {
        l2 = b2;
        Rc(k2);
        var n2 = F$1;
        f2[h2] = 10 <= n2 ? l2 + 250 : 6 <= n2 ? l2 + 5e3 : -1;
      }
    } else
      l2 <= b2 && (a.expiredLanes |= k2);
    g2 &= ~k2;
  }
  d2 = Uc(a, a === U ? W : 0);
  b2 = F$1;
  if (d2 === 0)
    c2 !== null && (c2 !== Zf && Pf(c2), a.callbackNode = null, a.callbackPriority = 0);
  else {
    if (c2 !== null) {
      if (a.callbackPriority === b2)
        return;
      c2 !== Zf && Pf(c2);
    }
    b2 === 15 ? (c2 = Lj.bind(null, a), ag === null ? (ag = [c2], bg = Of(Uf, jg)) : ag.push(c2), c2 = Zf) : b2 === 14 ? c2 = hg(99, Lj.bind(null, a)) : (c2 = Tc(b2), c2 = hg(c2, Nj.bind(null, a)));
    a.callbackPriority = b2;
    a.callbackNode = c2;
  }
}
function Nj(a) {
  Fj = -1;
  Hj = Gj = 0;
  if ((X & 48) !== 0)
    throw Error(y$2(327));
  var b2 = a.callbackNode;
  if (Oj() && a.callbackNode !== b2)
    return null;
  var c2 = Uc(a, a === U ? W : 0);
  if (c2 === 0)
    return null;
  var d2 = c2;
  var e2 = X;
  X |= 16;
  var f2 = Pj();
  if (U !== a || W !== d2)
    wj(), Qj(a, d2);
  do
    try {
      Rj();
      break;
    } catch (h2) {
      Sj(a, h2);
    }
  while (1);
  qg();
  oj.current = f2;
  X = e2;
  Y !== null ? d2 = 0 : (U = null, W = 0, d2 = V);
  if ((tj & Hi) !== 0)
    Qj(a, 0);
  else if (d2 !== 0) {
    d2 === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), c2 = Wc(a), c2 !== 0 && (d2 = Tj(a, c2)));
    if (d2 === 1)
      throw b2 = sj, Qj(a, 0), Ii(a, c2), Mj(a, O()), b2;
    a.finishedWork = a.current.alternate;
    a.finishedLanes = c2;
    switch (d2) {
      case 0:
      case 1:
        throw Error(y$2(345));
      case 2:
        Uj(a);
        break;
      case 3:
        Ii(a, c2);
        if ((c2 & 62914560) === c2 && (d2 = jj + 500 - O(), 10 < d2)) {
          if (Uc(a, 0) !== 0)
            break;
          e2 = a.suspendedLanes;
          if ((e2 & c2) !== c2) {
            Hg();
            a.pingedLanes |= a.suspendedLanes & e2;
            break;
          }
          a.timeoutHandle = of(Uj.bind(null, a), d2);
          break;
        }
        Uj(a);
        break;
      case 4:
        Ii(a, c2);
        if ((c2 & 4186112) === c2)
          break;
        d2 = a.eventTimes;
        for (e2 = -1; 0 < c2; ) {
          var g2 = 31 - Vc(c2);
          f2 = 1 << g2;
          g2 = d2[g2];
          g2 > e2 && (e2 = g2);
          c2 &= ~f2;
        }
        c2 = e2;
        c2 = O() - c2;
        c2 = (120 > c2 ? 120 : 480 > c2 ? 480 : 1080 > c2 ? 1080 : 1920 > c2 ? 1920 : 3e3 > c2 ? 3e3 : 4320 > c2 ? 4320 : 1960 * nj(c2 / 1960)) - c2;
        if (10 < c2) {
          a.timeoutHandle = of(Uj.bind(null, a), c2);
          break;
        }
        Uj(a);
        break;
      case 5:
        Uj(a);
        break;
      default:
        throw Error(y$2(329));
    }
  }
  Mj(a, O());
  return a.callbackNode === b2 ? Nj.bind(null, a) : null;
}
function Ii(a, b2) {
  b2 &= ~uj;
  b2 &= ~Hi;
  a.suspendedLanes |= b2;
  a.pingedLanes &= ~b2;
  for (a = a.expirationTimes; 0 < b2; ) {
    var c2 = 31 - Vc(b2), d2 = 1 << c2;
    a[c2] = -1;
    b2 &= ~d2;
  }
}
function Lj(a) {
  if ((X & 48) !== 0)
    throw Error(y$2(327));
  Oj();
  if (a === U && (a.expiredLanes & W) !== 0) {
    var b2 = W;
    var c2 = Tj(a, b2);
    (tj & Hi) !== 0 && (b2 = Uc(a, b2), c2 = Tj(a, b2));
  } else
    b2 = Uc(a, 0), c2 = Tj(a, b2);
  a.tag !== 0 && c2 === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), b2 = Wc(a), b2 !== 0 && (c2 = Tj(a, b2)));
  if (c2 === 1)
    throw c2 = sj, Qj(a, 0), Ii(a, b2), Mj(a, O()), c2;
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b2;
  Uj(a);
  Mj(a, O());
  return null;
}
function Vj() {
  if (Cj !== null) {
    var a = Cj;
    Cj = null;
    a.forEach(function(a2) {
      a2.expiredLanes |= 24 & a2.pendingLanes;
      Mj(a2, O());
    });
  }
  ig();
}
function Wj(a, b2) {
  var c2 = X;
  X |= 1;
  try {
    return a(b2);
  } finally {
    X = c2, X === 0 && (wj(), ig());
  }
}
function Xj(a, b2) {
  var c2 = X;
  X &= -2;
  X |= 8;
  try {
    return a(b2);
  } finally {
    X = c2, X === 0 && (wj(), ig());
  }
}
function ni(a, b2) {
  I$1(rj, qj);
  qj |= b2;
  tj |= b2;
}
function Ki() {
  qj = rj.current;
  H$1(rj);
}
function Qj(a, b2) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c2 = a.timeoutHandle;
  c2 !== -1 && (a.timeoutHandle = -1, pf(c2));
  if (Y !== null)
    for (c2 = Y.return; c2 !== null; ) {
      var d2 = c2;
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          d2 !== null && d2 !== void 0 && Gf();
          break;
        case 3:
          fh();
          H$1(N);
          H$1(M);
          uh();
          break;
        case 5:
          hh(d2);
          break;
        case 4:
          fh();
          break;
        case 13:
          H$1(P);
          break;
        case 19:
          H$1(P);
          break;
        case 10:
          rg(d2);
          break;
        case 23:
        case 24:
          Ki();
      }
      c2 = c2.return;
    }
  U = a;
  Y = Tg(a.current, null);
  W = qj = tj = b2;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a, b2) {
  do {
    var c2 = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d2 = R.memoizedState; d2 !== null; ) {
          var e2 = d2.queue;
          e2 !== null && (e2.pending = null);
          d2 = d2.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (c2 === null || c2.return === null) {
        V = 1;
        sj = b2;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = W;
        h2.flags |= 2048;
        h2.firstEffect = h2.lastEffect = null;
        if (k2 !== null && typeof k2 === "object" && typeof k2.then === "function") {
          var l2 = k2;
          if ((h2.mode & 2) === 0) {
            var n2 = h2.alternate;
            n2 ? (h2.updateQueue = n2.updateQueue, h2.memoizedState = n2.memoizedState, h2.lanes = n2.lanes) : (h2.updateQueue = null, h2.memoizedState = null);
          }
          var A2 = (P.current & 1) !== 0, p2 = g2;
          do {
            var C2;
            if (C2 = p2.tag === 13) {
              var x = p2.memoizedState;
              if (x !== null)
                C2 = x.dehydrated !== null ? true : false;
              else {
                var w2 = p2.memoizedProps;
                C2 = w2.fallback === void 0 ? false : w2.unstable_avoidThisFallback !== true ? true : A2 ? false : true;
              }
            }
            if (C2) {
              var z2 = p2.updateQueue;
              if (z2 === null) {
                var u2 = new Set();
                u2.add(l2);
                p2.updateQueue = u2;
              } else
                z2.add(l2);
              if ((p2.mode & 2) === 0) {
                p2.flags |= 64;
                h2.flags |= 16384;
                h2.flags &= -2981;
                if (h2.tag === 1)
                  if (h2.alternate === null)
                    h2.tag = 17;
                  else {
                    var t2 = zg(-1, 1);
                    t2.tag = 2;
                    Ag(h2, t2);
                  }
                h2.lanes |= 1;
                break a;
              }
              k2 = void 0;
              h2 = b2;
              var q2 = f2.pingCache;
              q2 === null ? (q2 = f2.pingCache = new Oi(), k2 = new Set(), q2.set(l2, k2)) : (k2 = q2.get(l2), k2 === void 0 && (k2 = new Set(), q2.set(l2, k2)));
              if (!k2.has(h2)) {
                k2.add(h2);
                var v2 = Yj.bind(null, f2, l2, h2);
                l2.then(v2, v2);
              }
              p2.flags |= 4096;
              p2.lanes = b2;
              break a;
            }
            p2 = p2.return;
          } while (p2 !== null);
          k2 = Error((Ra(h2.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        V !== 5 && (V = 2);
        k2 = Mi(k2, h2);
        p2 = g2;
        do {
          switch (p2.tag) {
            case 3:
              f2 = k2;
              p2.flags |= 4096;
              b2 &= -b2;
              p2.lanes |= b2;
              var J2 = Pi(p2, f2, b2);
              Bg(p2, J2);
              break a;
            case 1:
              f2 = k2;
              var K2 = p2.type, Q2 = p2.stateNode;
              if ((p2.flags & 64) === 0 && (typeof K2.getDerivedStateFromError === "function" || Q2 !== null && typeof Q2.componentDidCatch === "function" && (Ti === null || !Ti.has(Q2)))) {
                p2.flags |= 4096;
                b2 &= -b2;
                p2.lanes |= b2;
                var L2 = Si(p2, f2, b2);
                Bg(p2, L2);
                break a;
              }
          }
          p2 = p2.return;
        } while (p2 !== null);
      }
      Zj(c2);
    } catch (va) {
      b2 = va;
      Y === c2 && c2 !== null && (Y = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a = oj.current;
  oj.current = Gh;
  return a === null ? Gh : a;
}
function Tj(a, b2) {
  var c2 = X;
  X |= 16;
  var d2 = Pj();
  U === a && W === b2 || Qj(a, b2);
  do
    try {
      ak();
      break;
    } catch (e2) {
      Sj(a, e2);
    }
  while (1);
  qg();
  X = c2;
  oj.current = d2;
  if (Y !== null)
    throw Error(y$2(261));
  U = null;
  W = 0;
  return V;
}
function ak() {
  for (; Y !== null; )
    bk(Y);
}
function Rj() {
  for (; Y !== null && !Qf(); )
    bk(Y);
}
function bk(a) {
  var b2 = ck(a.alternate, a, qj);
  a.memoizedProps = a.pendingProps;
  b2 === null ? Zj(a) : Y = b2;
  pj.current = null;
}
function Zj(a) {
  var b2 = a;
  do {
    var c2 = b2.alternate;
    a = b2.return;
    if ((b2.flags & 2048) === 0) {
      c2 = Gi(c2, b2, qj);
      if (c2 !== null) {
        Y = c2;
        return;
      }
      c2 = b2;
      if (c2.tag !== 24 && c2.tag !== 23 || c2.memoizedState === null || (qj & 1073741824) !== 0 || (c2.mode & 4) === 0) {
        for (var d2 = 0, e2 = c2.child; e2 !== null; )
          d2 |= e2.lanes | e2.childLanes, e2 = e2.sibling;
        c2.childLanes = d2;
      }
      a !== null && (a.flags & 2048) === 0 && (a.firstEffect === null && (a.firstEffect = b2.firstEffect), b2.lastEffect !== null && (a.lastEffect !== null && (a.lastEffect.nextEffect = b2.firstEffect), a.lastEffect = b2.lastEffect), 1 < b2.flags && (a.lastEffect !== null ? a.lastEffect.nextEffect = b2 : a.firstEffect = b2, a.lastEffect = b2));
    } else {
      c2 = Li(b2);
      if (c2 !== null) {
        c2.flags &= 2047;
        Y = c2;
        return;
      }
      a !== null && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
    }
    b2 = b2.sibling;
    if (b2 !== null) {
      Y = b2;
      return;
    }
    Y = b2 = a;
  } while (b2 !== null);
  V === 0 && (V = 5);
}
function Uj(a) {
  var b2 = eg();
  gg(99, dk.bind(null, a, b2));
  return null;
}
function dk(a, b2) {
  do
    Oj();
  while (yj !== null);
  if ((X & 48) !== 0)
    throw Error(y$2(327));
  var c2 = a.finishedWork;
  if (c2 === null)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c2 === a.current)
    throw Error(y$2(177));
  a.callbackNode = null;
  var d2 = c2.lanes | c2.childLanes, e2 = d2, f2 = a.pendingLanes & ~e2;
  a.pendingLanes = e2;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= e2;
  a.mutableReadLanes &= e2;
  a.entangledLanes &= e2;
  e2 = a.entanglements;
  for (var g2 = a.eventTimes, h2 = a.expirationTimes; 0 < f2; ) {
    var k2 = 31 - Vc(f2), l2 = 1 << k2;
    e2[k2] = 0;
    g2[k2] = -1;
    h2[k2] = -1;
    f2 &= ~l2;
  }
  Cj !== null && (d2 & 24) === 0 && Cj.has(a) && Cj.delete(a);
  a === U && (Y = U = null, W = 0);
  1 < c2.flags ? c2.lastEffect !== null ? (c2.lastEffect.nextEffect = c2, d2 = c2.firstEffect) : d2 = c2 : d2 = c2.firstEffect;
  if (d2 !== null) {
    e2 = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g2 = Ne();
    if (Oe(g2)) {
      if ("selectionStart" in g2)
        h2 = { start: g2.selectionStart, end: g2.selectionEnd };
      else
        a:
          if (h2 = (h2 = g2.ownerDocument) && h2.defaultView || window, (l2 = h2.getSelection && h2.getSelection()) && l2.rangeCount !== 0) {
            h2 = l2.anchorNode;
            f2 = l2.anchorOffset;
            k2 = l2.focusNode;
            l2 = l2.focusOffset;
            try {
              h2.nodeType, k2.nodeType;
            } catch (va) {
              h2 = null;
              break a;
            }
            var n2 = 0, A2 = -1, p2 = -1, C2 = 0, x = 0, w2 = g2, z2 = null;
            b:
              for (; ; ) {
                for (var u2; ; ) {
                  w2 !== h2 || f2 !== 0 && w2.nodeType !== 3 || (A2 = n2 + f2);
                  w2 !== k2 || l2 !== 0 && w2.nodeType !== 3 || (p2 = n2 + l2);
                  w2.nodeType === 3 && (n2 += w2.nodeValue.length);
                  if ((u2 = w2.firstChild) === null)
                    break;
                  z2 = w2;
                  w2 = u2;
                }
                for (; ; ) {
                  if (w2 === g2)
                    break b;
                  z2 === h2 && ++C2 === f2 && (A2 = n2);
                  z2 === k2 && ++x === l2 && (p2 = n2);
                  if ((u2 = w2.nextSibling) !== null)
                    break;
                  w2 = z2;
                  z2 = w2.parentNode;
                }
                w2 = u2;
              }
            h2 = A2 === -1 || p2 === -1 ? null : { start: A2, end: p2 };
          } else
            h2 = null;
      h2 = h2 || { start: 0, end: 0 };
    } else
      h2 = null;
    lf = { focusedElem: g2, selectionRange: h2 };
    fd = false;
    Ij = null;
    Jj = false;
    Z = d2;
    do
      try {
        ek();
      } catch (va) {
        if (Z === null)
          throw Error(y$2(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Ij = null;
    Z = d2;
    do
      try {
        for (g2 = a; Z !== null; ) {
          var t2 = Z.flags;
          t2 & 16 && pb(Z.stateNode, "");
          if (t2 & 128) {
            var q2 = Z.alternate;
            if (q2 !== null) {
              var v2 = q2.ref;
              v2 !== null && (typeof v2 === "function" ? v2(null) : v2.current = null);
            }
          }
          switch (t2 & 1038) {
            case 2:
              fj(Z);
              Z.flags &= -3;
              break;
            case 6:
              fj(Z);
              Z.flags &= -3;
              ij(Z.alternate, Z);
              break;
            case 1024:
              Z.flags &= -1025;
              break;
            case 1028:
              Z.flags &= -1025;
              ij(Z.alternate, Z);
              break;
            case 4:
              ij(Z.alternate, Z);
              break;
            case 8:
              h2 = Z;
              cj(g2, h2);
              var J2 = h2.alternate;
              dj(h2);
              J2 !== null && dj(J2);
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y$2(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    v2 = lf;
    q2 = Ne();
    t2 = v2.focusedElem;
    g2 = v2.selectionRange;
    if (q2 !== t2 && t2 && t2.ownerDocument && Me(t2.ownerDocument.documentElement, t2)) {
      g2 !== null && Oe(t2) && (q2 = g2.start, v2 = g2.end, v2 === void 0 && (v2 = q2), "selectionStart" in t2 ? (t2.selectionStart = q2, t2.selectionEnd = Math.min(v2, t2.value.length)) : (v2 = (q2 = t2.ownerDocument || document) && q2.defaultView || window, v2.getSelection && (v2 = v2.getSelection(), h2 = t2.textContent.length, J2 = Math.min(g2.start, h2), g2 = g2.end === void 0 ? J2 : Math.min(g2.end, h2), !v2.extend && J2 > g2 && (h2 = g2, g2 = J2, J2 = h2), h2 = Le(t2, J2), f2 = Le(t2, g2), h2 && f2 && (v2.rangeCount !== 1 || v2.anchorNode !== h2.node || v2.anchorOffset !== h2.offset || v2.focusNode !== f2.node || v2.focusOffset !== f2.offset) && (q2 = q2.createRange(), q2.setStart(h2.node, h2.offset), v2.removeAllRanges(), J2 > g2 ? (v2.addRange(q2), v2.extend(f2.node, f2.offset)) : (q2.setEnd(f2.node, f2.offset), v2.addRange(q2))))));
      q2 = [];
      for (v2 = t2; v2 = v2.parentNode; )
        v2.nodeType === 1 && q2.push({ element: v2, left: v2.scrollLeft, top: v2.scrollTop });
      typeof t2.focus === "function" && t2.focus();
      for (t2 = 0; t2 < q2.length; t2++)
        v2 = q2[t2], v2.element.scrollLeft = v2.left, v2.element.scrollTop = v2.top;
    }
    fd = !!kf;
    lf = kf = null;
    a.current = c2;
    Z = d2;
    do
      try {
        for (t2 = a; Z !== null; ) {
          var K2 = Z.flags;
          K2 & 36 && Yi(t2, Z.alternate, Z);
          if (K2 & 128) {
            q2 = void 0;
            var Q2 = Z.ref;
            if (Q2 !== null) {
              var L2 = Z.stateNode;
              switch (Z.tag) {
                case 5:
                  q2 = L2;
                  break;
                default:
                  q2 = L2;
              }
              typeof Q2 === "function" ? Q2(q2) : Q2.current = q2;
            }
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y$2(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Z = null;
    $f();
    X = e2;
  } else
    a.current = c2;
  if (xj)
    xj = false, yj = a, zj = b2;
  else
    for (Z = d2; Z !== null; )
      b2 = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K2 = Z, K2.sibling = null, K2.stateNode = null), Z = b2;
  d2 = a.pendingLanes;
  d2 === 0 && (Ti = null);
  d2 === 1 ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
  c2 = c2.stateNode;
  if (Mf && typeof Mf.onCommitFiberRoot === "function")
    try {
      Mf.onCommitFiberRoot(Lf, c2, void 0, (c2.current.flags & 64) === 64);
    } catch (va) {
    }
  Mj(a, O());
  if (Qi)
    throw Qi = false, a = Ri, Ri = null, a;
  if ((X & 8) !== 0)
    return null;
  ig();
  return null;
}
function ek() {
  for (; Z !== null; ) {
    var a = Z.alternate;
    Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a, Z) && dc(Z, Ij) && (Jj = true));
    var b2 = Z.flags;
    (b2 & 256) !== 0 && Xi(a, Z);
    (b2 & 512) === 0 || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (zj !== 90) {
    var a = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a, fk);
  }
  return false;
}
function $i(a, b2) {
  Aj.push(b2, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a, b2) {
  Bj.push(b2, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (yj === null)
    return false;
  var a = yj;
  yj = null;
  if ((X & 48) !== 0)
    throw Error(y$2(331));
  var b2 = X;
  X |= 32;
  var c2 = Bj;
  Bj = [];
  for (var d2 = 0; d2 < c2.length; d2 += 2) {
    var e2 = c2[d2], f2 = c2[d2 + 1], g2 = e2.destroy;
    e2.destroy = void 0;
    if (typeof g2 === "function")
      try {
        g2();
      } catch (k2) {
        if (f2 === null)
          throw Error(y$2(330));
        Wi(f2, k2);
      }
  }
  c2 = Aj;
  Aj = [];
  for (d2 = 0; d2 < c2.length; d2 += 2) {
    e2 = c2[d2];
    f2 = c2[d2 + 1];
    try {
      var h2 = e2.create;
      e2.destroy = h2();
    } catch (k2) {
      if (f2 === null)
        throw Error(y$2(330));
      Wi(f2, k2);
    }
  }
  for (h2 = a.current.firstEffect; h2 !== null; )
    a = h2.nextEffect, h2.nextEffect = null, h2.flags & 8 && (h2.sibling = null, h2.stateNode = null), h2 = a;
  X = b2;
  ig();
  return true;
}
function gk(a, b2, c2) {
  b2 = Mi(c2, b2);
  b2 = Pi(a, b2, 1);
  Ag(a, b2);
  b2 = Hg();
  a = Kj(a, 1);
  a !== null && ($c(a, 1, b2), Mj(a, b2));
}
function Wi(a, b2) {
  if (a.tag === 3)
    gk(a, a, b2);
  else
    for (var c2 = a.return; c2 !== null; ) {
      if (c2.tag === 3) {
        gk(c2, a, b2);
        break;
      } else if (c2.tag === 1) {
        var d2 = c2.stateNode;
        if (typeof c2.type.getDerivedStateFromError === "function" || typeof d2.componentDidCatch === "function" && (Ti === null || !Ti.has(d2))) {
          a = Mi(b2, a);
          var e2 = Si(c2, a, 1);
          Ag(c2, e2);
          e2 = Hg();
          c2 = Kj(c2, 1);
          if (c2 !== null)
            $c(c2, 1, e2), Mj(c2, e2);
          else if (typeof d2.componentDidCatch === "function" && (Ti === null || !Ti.has(d2)))
            try {
              d2.componentDidCatch(b2, a);
            } catch (f2) {
            }
          break;
        }
      }
      c2 = c2.return;
    }
}
function Yj(a, b2, c2) {
  var d2 = a.pingCache;
  d2 !== null && d2.delete(b2);
  b2 = Hg();
  a.pingedLanes |= a.suspendedLanes & c2;
  U === a && (W & c2) === c2 && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a, 0) : uj |= c2);
  Mj(a, b2);
}
function lj(a, b2) {
  var c2 = a.stateNode;
  c2 !== null && c2.delete(b2);
  b2 = 0;
  b2 === 0 && (b2 = a.mode, (b2 & 2) === 0 ? b2 = 1 : (b2 & 4) === 0 ? b2 = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b2 = Yc(62914560 & ~Gj), b2 === 0 && (b2 = 4194304)));
  c2 = Hg();
  a = Kj(a, b2);
  a !== null && ($c(a, b2, c2), Mj(a, c2));
}
var ck;
ck = function(a, b2, c2) {
  var d2 = b2.lanes;
  if (a !== null)
    if (a.memoizedProps !== b2.pendingProps || N.current)
      ug = true;
    else if ((c2 & d2) !== 0)
      ug = (a.flags & 16384) !== 0 ? true : false;
    else {
      ug = false;
      switch (b2.tag) {
        case 3:
          ri(b2);
          sh();
          break;
        case 5:
          gh(b2);
          break;
        case 1:
          Ff(b2.type) && Jf(b2);
          break;
        case 4:
          eh(b2, b2.stateNode.containerInfo);
          break;
        case 10:
          d2 = b2.memoizedProps.value;
          var e2 = b2.type._context;
          I$1(mg, e2._currentValue);
          e2._currentValue = d2;
          break;
        case 13:
          if (b2.memoizedState !== null) {
            if ((c2 & b2.child.childLanes) !== 0)
              return ti(a, b2, c2);
            I$1(P, P.current & 1);
            b2 = hi(a, b2, c2);
            return b2 !== null ? b2.sibling : null;
          }
          I$1(P, P.current & 1);
          break;
        case 19:
          d2 = (c2 & b2.childLanes) !== 0;
          if ((a.flags & 64) !== 0) {
            if (d2)
              return Ai(a, b2, c2);
            b2.flags |= 64;
          }
          e2 = b2.memoizedState;
          e2 !== null && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
          I$1(P, P.current);
          if (d2)
            break;
          else
            return null;
        case 23:
        case 24:
          return b2.lanes = 0, mi(a, b2, c2);
      }
      return hi(a, b2, c2);
    }
  else
    ug = false;
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      d2 = b2.type;
      a !== null && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
      a = b2.pendingProps;
      e2 = Ef(b2, M.current);
      tg(b2, c2);
      e2 = Ch(null, b2, d2, a, e2, c2);
      b2.flags |= 1;
      if (typeof e2 === "object" && e2 !== null && typeof e2.render === "function" && e2.$$typeof === void 0) {
        b2.tag = 1;
        b2.memoizedState = null;
        b2.updateQueue = null;
        if (Ff(d2)) {
          var f2 = true;
          Jf(b2);
        } else
          f2 = false;
        b2.memoizedState = e2.state !== null && e2.state !== void 0 ? e2.state : null;
        xg(b2);
        var g2 = d2.getDerivedStateFromProps;
        typeof g2 === "function" && Gg(b2, d2, g2, a);
        e2.updater = Kg;
        b2.stateNode = e2;
        e2._reactInternals = b2;
        Og(b2, d2, a, c2);
        b2 = qi(null, b2, d2, true, f2, c2);
      } else
        b2.tag = 0, fi(null, b2, e2, c2), b2 = b2.child;
      return b2;
    case 16:
      e2 = b2.elementType;
      a: {
        a !== null && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
        a = b2.pendingProps;
        f2 = e2._init;
        e2 = f2(e2._payload);
        b2.type = e2;
        f2 = b2.tag = hk(e2);
        a = lg(e2, a);
        switch (f2) {
          case 0:
            b2 = li(null, b2, e2, a, c2);
            break a;
          case 1:
            b2 = pi(null, b2, e2, a, c2);
            break a;
          case 11:
            b2 = gi(null, b2, e2, a, c2);
            break a;
          case 14:
            b2 = ii(null, b2, e2, lg(e2.type, a), d2, c2);
            break a;
        }
        throw Error(y$2(306, e2, ""));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), li(a, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), pi(a, b2, d2, e2, c2);
    case 3:
      ri(b2);
      d2 = b2.updateQueue;
      if (a === null || d2 === null)
        throw Error(y$2(282));
      d2 = b2.pendingProps;
      e2 = b2.memoizedState;
      e2 = e2 !== null ? e2.element : null;
      yg(a, b2);
      Cg(b2, d2, null, c2);
      d2 = b2.memoizedState.element;
      if (d2 === e2)
        sh(), b2 = hi(a, b2, c2);
      else {
        e2 = b2.stateNode;
        if (f2 = e2.hydrate)
          kh = rf(b2.stateNode.containerInfo.firstChild), jh = b2, f2 = lh = true;
        if (f2) {
          a = e2.mutableSourceEagerHydrationData;
          if (a != null)
            for (e2 = 0; e2 < a.length; e2 += 2)
              f2 = a[e2], f2._workInProgressVersionPrimary = a[e2 + 1], th.push(f2);
          c2 = Zg(b2, null, d2, c2);
          for (b2.child = c2; c2; )
            c2.flags = c2.flags & -3 | 1024, c2 = c2.sibling;
        } else
          fi(a, b2, d2, c2), sh();
        b2 = b2.child;
      }
      return b2;
    case 5:
      return gh(b2), a === null && ph(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = a !== null ? a.memoizedProps : null, g2 = e2.children, nf(d2, e2) ? g2 = null : f2 !== null && nf(d2, f2) && (b2.flags |= 16), oi(a, b2), fi(a, b2, g2, c2), b2.child;
    case 6:
      return a === null && ph(b2), null;
    case 13:
      return ti(a, b2, c2);
    case 4:
      return eh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, a === null ? b2.child = Yg(b2, null, d2, c2) : fi(a, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), gi(a, b2, d2, e2, c2);
    case 7:
      return fi(a, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return fi(a, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return fi(a, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        g2 = b2.memoizedProps;
        f2 = e2.value;
        var h2 = b2.type._context;
        I$1(mg, h2._currentValue);
        h2._currentValue = f2;
        if (g2 !== null)
          if (h2 = g2.value, f2 = He(h2, f2) ? 0 : (typeof d2._calculateChangedBits === "function" ? d2._calculateChangedBits(h2, f2) : 1073741823) | 0, f2 === 0) {
            if (g2.children === e2.children && !N.current) {
              b2 = hi(a, b2, c2);
              break a;
            }
          } else
            for (h2 = b2.child, h2 !== null && (h2.return = b2); h2 !== null; ) {
              var k2 = h2.dependencies;
              if (k2 !== null) {
                g2 = h2.child;
                for (var l2 = k2.firstContext; l2 !== null; ) {
                  if (l2.context === d2 && (l2.observedBits & f2) !== 0) {
                    h2.tag === 1 && (l2 = zg(-1, c2 & -c2), l2.tag = 2, Ag(h2, l2));
                    h2.lanes |= c2;
                    l2 = h2.alternate;
                    l2 !== null && (l2.lanes |= c2);
                    sg(h2.return, c2);
                    k2.lanes |= c2;
                    break;
                  }
                  l2 = l2.next;
                }
              } else
                g2 = h2.tag === 10 ? h2.type === b2.type ? null : h2.child : h2.child;
              if (g2 !== null)
                g2.return = h2;
              else
                for (g2 = h2; g2 !== null; ) {
                  if (g2 === b2) {
                    g2 = null;
                    break;
                  }
                  h2 = g2.sibling;
                  if (h2 !== null) {
                    h2.return = g2.return;
                    g2 = h2;
                    break;
                  }
                  g2 = g2.return;
                }
              h2 = g2;
            }
        fi(a, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, f2 = b2.pendingProps, d2 = f2.children, tg(b2, c2), e2 = vg(e2, f2.unstable_observedBits), d2 = d2(e2), b2.flags |= 1, fi(a, b2, d2, c2), b2.child;
    case 14:
      return e2 = b2.type, f2 = lg(e2, b2.pendingProps), f2 = lg(e2.type, f2), ii(a, b2, e2, f2, d2, c2);
    case 15:
      return ki(a, b2, b2.type, b2.pendingProps, d2, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), a !== null && (a.alternate = null, b2.alternate = null, b2.flags |= 2), b2.tag = 1, Ff(d2) ? (a = true, Jf(b2)) : a = false, tg(b2, c2), Mg(b2, d2, e2), Og(b2, d2, e2, c2), qi(null, b2, d2, true, a, c2);
    case 19:
      return Ai(a, b2, c2);
    case 23:
      return mi(a, b2, c2);
    case 24:
      return mi(a, b2, c2);
  }
  throw Error(y$2(156, b2.tag));
};
function ik(a, b2, c2, d2) {
  this.tag = a;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a, b2, c2, d2) {
  return new ik(a, b2, c2, d2);
}
function ji(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function hk(a) {
  if (typeof a === "function")
    return ji(a) ? 1 : 0;
  if (a !== void 0 && a !== null) {
    a = a.$$typeof;
    if (a === Aa)
      return 11;
    if (a === Da)
      return 14;
  }
  return 2;
}
function Tg(a, b2) {
  var c2 = a.alternate;
  c2 === null ? (c2 = nh(a.tag, b2, a.key, a.mode), c2.elementType = a.elementType, c2.type = a.type, c2.stateNode = a.stateNode, c2.alternate = a, a.alternate = c2) : (c2.pendingProps = b2, c2.type = a.type, c2.flags = 0, c2.nextEffect = null, c2.firstEffect = null, c2.lastEffect = null);
  c2.childLanes = a.childLanes;
  c2.lanes = a.lanes;
  c2.child = a.child;
  c2.memoizedProps = a.memoizedProps;
  c2.memoizedState = a.memoizedState;
  c2.updateQueue = a.updateQueue;
  b2 = a.dependencies;
  c2.dependencies = b2 === null ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a.sibling;
  c2.index = a.index;
  c2.ref = a.ref;
  return c2;
}
function Vg(a, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a;
  if (typeof a === "function")
    ji(a) && (g2 = 1);
  else if (typeof a === "string")
    g2 = 5;
  else
    a:
      switch (a) {
        case ua$1:
          return Xg(c2.children, e2, f2, b2);
        case Ha:
          g2 = 8;
          e2 |= 16;
          break;
        case wa:
          g2 = 8;
          e2 |= 1;
          break;
        case xa:
          return a = nh(12, c2, b2, e2 | 8), a.elementType = xa, a.type = xa, a.lanes = f2, a;
        case Ba:
          return a = nh(13, c2, b2, e2), a.type = Ba, a.elementType = Ba, a.lanes = f2, a;
        case Ca:
          return a = nh(19, c2, b2, e2), a.elementType = Ca, a.lanes = f2, a;
        case Ia:
          return vi(c2, e2, f2, b2);
        case Ja:
          return a = nh(24, c2, b2, e2), a.elementType = Ja, a.lanes = f2, a;
        default:
          if (typeof a === "object" && a !== null)
            switch (a.$$typeof) {
              case ya:
                g2 = 10;
                break a;
              case za:
                g2 = 9;
                break a;
              case Aa:
                g2 = 11;
                break a;
              case Da:
                g2 = 14;
                break a;
              case Ea:
                g2 = 16;
                d2 = null;
                break a;
              case Fa:
                g2 = 22;
                break a;
            }
          throw Error(y$2(130, a == null ? a : typeof a, ""));
      }
  b2 = nh(g2, c2, b2, e2);
  b2.elementType = a;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function Xg(a, b2, c2, d2) {
  a = nh(7, a, d2, b2);
  a.lanes = c2;
  return a;
}
function vi(a, b2, c2, d2) {
  a = nh(23, a, d2, b2);
  a.elementType = Ia;
  a.lanes = c2;
  return a;
}
function Ug(a, b2, c2) {
  a = nh(6, a, null, b2);
  a.lanes = c2;
  return a;
}
function Wg(a, b2, c2) {
  b2 = nh(4, a.children !== null ? a.children : [], a.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b2;
}
function jk(a, b2, c2) {
  this.tag = b2;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c2;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a, b2, c2) {
  var d2 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ta, key: d2 == null ? null : "" + d2, children: a, containerInfo: b2, implementation: c2 };
}
function lk(a, b2, c2, d2) {
  var e2 = b2.current, f2 = Hg(), g2 = Ig(e2);
  a:
    if (c2) {
      c2 = c2._reactInternals;
      b: {
        if (Zb(c2) !== c2 || c2.tag !== 1)
          throw Error(y$2(170));
        var h2 = c2;
        do {
          switch (h2.tag) {
            case 3:
              h2 = h2.stateNode.context;
              break b;
            case 1:
              if (Ff(h2.type)) {
                h2 = h2.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h2 = h2.return;
        } while (h2 !== null);
        throw Error(y$2(171));
      }
      if (c2.tag === 1) {
        var k2 = c2.type;
        if (Ff(k2)) {
          c2 = If(c2, k2, h2);
          break a;
        }
      }
      c2 = h2;
    } else
      c2 = Cf;
  b2.context === null ? b2.context = c2 : b2.pendingContext = c2;
  b2 = zg(f2, g2);
  b2.payload = { element: a };
  d2 = d2 === void 0 ? null : d2;
  d2 !== null && (b2.callback = d2);
  Ag(e2, b2);
  Jg(e2, g2, f2);
  return g2;
}
function mk(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function nk(a, b2) {
  a = a.memoizedState;
  if (a !== null && a.dehydrated !== null) {
    var c2 = a.retryLane;
    a.retryLane = c2 !== 0 && c2 < b2 ? c2 : b2;
  }
}
function ok(a, b2) {
  nk(a, b2);
  (a = a.alternate) && nk(a, b2);
}
function pk() {
  return null;
}
function qk(a, b2, c2) {
  var d2 = c2 != null && c2.hydrationOptions != null && c2.hydrationOptions.mutableSources || null;
  c2 = new jk(a, b2, c2 != null && c2.hydrate === true);
  b2 = nh(3, null, null, b2 === 2 ? 7 : b2 === 1 ? 3 : 0);
  c2.current = b2;
  b2.stateNode = c2;
  xg(b2);
  a[ff] = c2.current;
  cf(a.nodeType === 8 ? a.parentNode : a);
  if (d2)
    for (a = 0; a < d2.length; a++) {
      b2 = d2[a];
      var e2 = b2._getVersion;
      e2 = e2(b2._source);
      c2.mutableSourceEagerHydrationData == null ? c2.mutableSourceEagerHydrationData = [b2, e2] : c2.mutableSourceEagerHydrationData.push(b2, e2);
    }
  this._internalRoot = c2;
}
qk.prototype.render = function(a) {
  lk(a, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a = this._internalRoot, b2 = a.containerInfo;
  lk(null, a, null, function() {
    b2[ff] = null;
  });
};
function rk(a) {
  return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11 && (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "));
}
function sk(a, b2) {
  b2 || (b2 = a ? a.nodeType === 9 ? a.documentElement : a.firstChild : null, b2 = !(!b2 || b2.nodeType !== 1 || !b2.hasAttribute("data-reactroot")));
  if (!b2)
    for (var c2; c2 = a.lastChild; )
      a.removeChild(c2);
  return new qk(a, 0, b2 ? { hydrate: true } : void 0);
}
function tk(a, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2._internalRoot;
    if (typeof e2 === "function") {
      var h2 = e2;
      e2 = function() {
        var a2 = mk(g2);
        h2.call(a2);
      };
    }
    lk(b2, g2, a, e2);
  } else {
    f2 = c2._reactRootContainer = sk(c2, d2);
    g2 = f2._internalRoot;
    if (typeof e2 === "function") {
      var k2 = e2;
      e2 = function() {
        var a2 = mk(g2);
        k2.call(a2);
      };
    }
    Xj(function() {
      lk(b2, g2, a, e2);
    });
  }
  return mk(g2);
}
ec = function(a) {
  if (a.tag === 13) {
    var b2 = Hg();
    Jg(a, 4, b2);
    ok(a, 4);
  }
};
fc = function(a) {
  if (a.tag === 13) {
    var b2 = Hg();
    Jg(a, 67108864, b2);
    ok(a, 67108864);
  }
};
gc = function(a) {
  if (a.tag === 13) {
    var b2 = Hg(), c2 = Ig(a);
    Jg(a, c2, b2);
    ok(a, c2);
  }
};
hc = function(a, b2) {
  return b2();
};
yb = function(a, b2, c2) {
  switch (b2) {
    case "input":
      ab(a, c2);
      b2 = c2.name;
      if (c2.type === "radio" && b2 != null) {
        for (c2 = a; c2.parentNode; )
          c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a && d2.form === a.form) {
            var e2 = Db(d2);
            if (!e2)
              throw Error(y$2(90));
            Wa(d2);
            ab(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c2);
      break;
    case "select":
      b2 = c2.value, b2 != null && fb(a, !!c2.multiple, b2, false);
  }
};
Gb = Wj;
Hb = function(a, b2, c2, d2, e2) {
  var f2 = X;
  X |= 4;
  try {
    return gg(98, a.bind(null, b2, c2, d2, e2));
  } finally {
    X = f2, X === 0 && (wj(), ig());
  }
};
Ib = function() {
  (X & 49) === 0 && (Vj(), Oj());
};
Jb = function(a, b2) {
  var c2 = X;
  X |= 2;
  try {
    return a(b2);
  } finally {
    X = c2, X === 0 && (wj(), ig());
  }
};
function uk(a, b2) {
  var c2 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rk(b2))
    throw Error(y$2(200));
  return kk(a, b2, null, c2);
}
var vk = { Events: [Cb, ue, Db, Eb, Fb, Oj, { current: false }] }, wk = { findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" };
var xk = { bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = cc(a);
  return a === null ? null : a.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
reactDom_production_min.createPortal = uk;
reactDom_production_min.findDOMNode = function(a) {
  if (a == null)
    return null;
  if (a.nodeType === 1)
    return a;
  var b2 = a._reactInternals;
  if (b2 === void 0) {
    if (typeof a.render === "function")
      throw Error(y$2(188));
    throw Error(y$2(268, Object.keys(a)));
  }
  a = cc(b2);
  a = a === null ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a, b2) {
  var c2 = X;
  if ((c2 & 48) !== 0)
    return a(b2);
  X |= 1;
  try {
    if (a)
      return gg(99, a.bind(null, b2));
  } finally {
    X = c2, ig();
  }
};
reactDom_production_min.hydrate = function(a, b2, c2) {
  if (!rk(b2))
    throw Error(y$2(200));
  return tk(null, a, b2, true, c2);
};
reactDom_production_min.render = function(a, b2, c2) {
  if (!rk(b2))
    throw Error(y$2(200));
  return tk(null, a, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!rk(a))
    throw Error(y$2(40));
  return a._reactRootContainer ? (Xj(function() {
    tk(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[ff] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Wj;
reactDom_production_min.unstable_createPortal = function(a, b2) {
  return uk(a, b2, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b2, c2, d2) {
  if (!rk(c2))
    throw Error(y$2(200));
  if (a == null || a._reactInternals === void 0)
    throw Error(y$2(38));
  return tk(a, b2, c2, false, d2);
};
reactDom_production_min.version = "17.0.2";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var ReactDOM = reactDom.exports;
var reactComponentSymbol = Symbol.for("r2wc.reactComponent");
var renderSymbol = Symbol.for("r2wc.reactRender");
var shouldRenderSymbol = Symbol.for("r2wc.shouldRender");
var define = {
  expando: function(receiver, key, value) {
    Object.defineProperty(receiver, key, {
      enumerable: true,
      get: function() {
        return value;
      },
      set: function(newValue) {
        value = newValue;
        this[renderSymbol]();
      }
    });
    receiver[renderSymbol]();
  }
};
function reactToWebComponent(ReactComponent, React2, ReactDOM2, options = {}) {
  var renderAddedProperties = { isConnected: "isConnected" in HTMLElement.prototype };
  var rendering = false;
  var WebComponent = function() {
    var self2 = Reflect.construct(HTMLElement, arguments, this.constructor);
    if (options.shadow) {
      self2.attachShadow({ mode: "open" });
    }
    return self2;
  };
  var targetPrototype = Object.create(HTMLElement.prototype);
  targetPrototype.constructor = WebComponent;
  var proxyPrototype = new Proxy(targetPrototype, {
    has: function(target, key) {
      return key in ReactComponent.propTypes || key in targetPrototype;
    },
    set: function(target, key, value, receiver) {
      if (rendering) {
        renderAddedProperties[key] = true;
      }
      if (typeof key === "symbol" || renderAddedProperties[key] || key in target) {
        return Reflect.set(target, key, value, receiver);
      } else {
        define.expando(receiver, key, value);
      }
      return true;
    },
    getOwnPropertyDescriptor: function(target, key) {
      var own = Reflect.getOwnPropertyDescriptor(target, key);
      if (own) {
        return own;
      }
      if (key in ReactComponent.propTypes) {
        return { configurable: true, enumerable: true, writable: true, value: void 0 };
      }
    }
  });
  WebComponent.prototype = proxyPrototype;
  targetPrototype.connectedCallback = function() {
    this[shouldRenderSymbol] = true;
    this[renderSymbol]();
  };
  targetPrototype[renderSymbol] = function() {
    if (this[shouldRenderSymbol] === true) {
      var data = {};
      Object.keys(this).forEach(function(key) {
        if (renderAddedProperties[key] !== false) {
          data[key] = this[key];
        }
      }, this);
      rendering = true;
      const container = options.shadow ? this.shadowRoot : this;
      this[reactComponentSymbol] = ReactDOM2.render(React2.createElement(ReactComponent, data), container);
      rendering = false;
    }
  };
  if (ReactComponent.propTypes) {
    WebComponent.observedAttributes = Object.keys(ReactComponent.propTypes);
    targetPrototype.attributeChangedCallback = function(name, oldValue, newValue) {
      this[name] = newValue;
    };
  }
  return WebComponent;
}
const DEBOT_PREFIX = "DEBOT_";
const CLIENT_PREFIX = "CLIENT_";
const WALLET_PREFIX = "WALLET_";
const EVENTS = {
  DEBOT: {
    RUN_FAILED: `${DEBOT_PREFIX}RUN_FAILED`,
    FUNCTION_CALLED: `${DEBOT_PREFIX}FUNCTION_CALLED`,
    FUNCTION_EXECUTED: `${DEBOT_PREFIX}FUNCTION_EXECUTED`,
    FUNCTION_EXECUTION_FAILED: `${DEBOT_PREFIX}FUNCTION_EXECUTION_FAILED`,
    SIGNING_BOX_REGISTRATION_CALLED: `${DEBOT_PREFIX}SIGNING_BOX_REGISTRATION_CALLED`,
    SIGNING_BOX_REGISTERED: `${CLIENT_PREFIX}SIGNING_BOX_REGISTERED`,
    SIGNING_BOX_REGISTRATION_FAILED: `${CLIENT_PREFIX}SIGNING_BOX_REGISTRATION_FAILED`,
    SIGNING_BOX_CALLED: `${DEBOT_PREFIX}SIGNING_BOX_CALLED`,
    APPROVE_CALLED: `${DEBOT_PREFIX}APPROVE_CALLED`
  },
  WALLET: {
    CONNECTED: `${WALLET_PREFIX}CONNECTED`,
    CONNECTION_ERROR: `${WALLET_PREFIX}CONNECTION_ERROR`,
    PERMISSIONS_CHANGED: `${WALLET_PREFIX}PERMISSIONS_CHANGED`,
    DISCONNECTED: `${WALLET_PREFIX}DISCONNECTED`
  },
  CLIENT: {
    EXECUTE_FUNCTION: `${CLIENT_PREFIX}EXECUTE_FUNCTION`,
    EXECUTE_APPROVE: `${CLIENT_PREFIX}EXECUTE_APPROVE`,
    REGISTER_SIGNING_BOX: `${CLIENT_PREFIX}REGISTER_SIGNING_BOX`
  }
};
const ADDRESS_INPUT_ID = "d7ed1bd8e6230871116f4522e58df0a93c5520c56f4ade23ef3d8919a984653b";
const AMOUNT_INPUT_ID = "a1d347099e29c1624c8890619daf207bde18e92df5220a54bcc6d858309ece84";
const CONFIRM_INPUT_ID = "16653eaf34c921467120f2685d425ff963db5cbb5aa676a62a2e33bfc3f6828a";
const ECHO_ID = "f6927c0d4bdb69e1b52d27f018d156ff04152f00558042ff674f0fec32e4369d";
const MEDIA_ID = "59cdc2aafe53760937dac5b1c4b89ce12950f56a56298108a987cfe49b7c84b5";
const MENU_ID = "ac1a4d3ecea232e49783df4a23a81823cdca3205dc58cd20c4db259c25605b48";
const NUMBER_INPUT_ID = "c5a9558b2664aed7dc3e6123436d544f13ffe69ab0e259412f48c6d1c8588401";
const SIGNING_BOX_INPUT_ID = "c13024e101c95e71afb1f5fa6d72f633d51e721de0320d73dfd6121a54e4d40a";
const STDOUT_ID = "c91dcc3fddb30485a3a07eb7c1e5e2aceaf75f4bc2678111de1f25291cdda80b";
const TERMINAL_ID = "8796536366ee21852db56dccb60bc564598b618c865fc50c8b1ab740bba128e3";
const USERINFO_ID = "a56115147709ed3437efb89460b94a120b7fe94379c795d1ebb0435a847ee580";
const DEBOT_INTERFACE_ID = {
  ADDRESS_INPUT: ADDRESS_INPUT_ID,
  AMOUNT_INPUT: AMOUNT_INPUT_ID,
  CONFIRM_INPUT: CONFIRM_INPUT_ID,
  ECHO: ECHO_ID,
  MEDIA: MEDIA_ID,
  MENU: MENU_ID,
  NUMBER_INPUT: NUMBER_INPUT_ID,
  SIGNING_BOX_INPUT: SIGNING_BOX_INPUT_ID,
  STDOUT: STDOUT_ID,
  TERMINAL: TERMINAL_ID,
  USERINFO: USERINFO_ID
};
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var PropTypes = propTypes.exports;
var ReactReduxContext = /* @__PURE__ */ React$1.createContext(null);
function defaultNoopBatch(callback) {
  callback();
}
var batch = defaultNoopBatch;
var setBatch = function setBatch2(newBatch) {
  return batch = newBatch;
};
var getBatch = function getBatch2() {
  return batch;
};
function createListenerCollection() {
  var batch2 = getBatch();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify2() {
      batch2(function() {
        var listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get2() {
      var listeners = [];
      var listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null)
          return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
var nullListeners = {
  notify: function notify() {
  },
  get: function get() {
    return [];
  }
};
function createSubscription(store2, parentSub) {
  var unsubscribe;
  var listeners = nullListeners;
  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return Boolean(unsubscribe);
  }
  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store2.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  var subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: function getListeners() {
      return listeners;
    }
  };
  return subscription;
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? react.exports.useLayoutEffect : react.exports.useEffect;
function Provider(_ref) {
  var store2 = _ref.store, context2 = _ref.context, children = _ref.children;
  var contextValue = react.exports.useMemo(function() {
    var subscription = createSubscription(store2);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store2,
      subscription
    };
  }, [store2]);
  var previousState = react.exports.useMemo(function() {
    return store2.getState();
  }, [store2]);
  useIsomorphicLayoutEffect(function() {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();
    if (previousState !== store2.getState()) {
      subscription.notifyNestedSubs();
    }
    return function() {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context2 || ReactReduxContext;
  return /* @__PURE__ */ React$1.createElement(Context.Provider, {
    value: contextValue
  }, children);
}
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var reactIs$1 = { exports: {} };
var reactIs_production_min$1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1 = typeof Symbol === "function" && Symbol.for, c$1 = b$1 ? Symbol.for("react.element") : 60103, d$1 = b$1 ? Symbol.for("react.portal") : 60106, e$1 = b$1 ? Symbol.for("react.fragment") : 60107, f$1 = b$1 ? Symbol.for("react.strict_mode") : 60108, g$1 = b$1 ? Symbol.for("react.profiler") : 60114, h$1 = b$1 ? Symbol.for("react.provider") : 60109, k$1 = b$1 ? Symbol.for("react.context") : 60110, l$1 = b$1 ? Symbol.for("react.async_mode") : 60111, m$1 = b$1 ? Symbol.for("react.concurrent_mode") : 60111, n$1 = b$1 ? Symbol.for("react.forward_ref") : 60112, p$1 = b$1 ? Symbol.for("react.suspense") : 60113, q$1 = b$1 ? Symbol.for("react.suspense_list") : 60120, r$1 = b$1 ? Symbol.for("react.memo") : 60115, t = b$1 ? Symbol.for("react.lazy") : 60116, v$1 = b$1 ? Symbol.for("react.block") : 60121, w$1 = b$1 ? Symbol.for("react.fundamental") : 60117, x$1 = b$1 ? Symbol.for("react.responder") : 60118, y$1 = b$1 ? Symbol.for("react.scope") : 60119;
function z$1(a) {
  if (typeof a === "object" && a !== null) {
    var u2 = a.$$typeof;
    switch (u2) {
      case c$1:
        switch (a = a.type, a) {
          case l$1:
          case m$1:
          case e$1:
          case g$1:
          case f$1:
          case p$1:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k$1:
              case n$1:
              case t:
              case r$1:
              case h$1:
                return a;
              default:
                return u2;
            }
        }
      case d$1:
        return u2;
    }
  }
}
function A$1(a) {
  return z$1(a) === m$1;
}
reactIs_production_min$1.AsyncMode = l$1;
reactIs_production_min$1.ConcurrentMode = m$1;
reactIs_production_min$1.ContextConsumer = k$1;
reactIs_production_min$1.ContextProvider = h$1;
reactIs_production_min$1.Element = c$1;
reactIs_production_min$1.ForwardRef = n$1;
reactIs_production_min$1.Fragment = e$1;
reactIs_production_min$1.Lazy = t;
reactIs_production_min$1.Memo = r$1;
reactIs_production_min$1.Portal = d$1;
reactIs_production_min$1.Profiler = g$1;
reactIs_production_min$1.StrictMode = f$1;
reactIs_production_min$1.Suspense = p$1;
reactIs_production_min$1.isAsyncMode = function(a) {
  return A$1(a) || z$1(a) === l$1;
};
reactIs_production_min$1.isConcurrentMode = A$1;
reactIs_production_min$1.isContextConsumer = function(a) {
  return z$1(a) === k$1;
};
reactIs_production_min$1.isContextProvider = function(a) {
  return z$1(a) === h$1;
};
reactIs_production_min$1.isElement = function(a) {
  return typeof a === "object" && a !== null && a.$$typeof === c$1;
};
reactIs_production_min$1.isForwardRef = function(a) {
  return z$1(a) === n$1;
};
reactIs_production_min$1.isFragment = function(a) {
  return z$1(a) === e$1;
};
reactIs_production_min$1.isLazy = function(a) {
  return z$1(a) === t;
};
reactIs_production_min$1.isMemo = function(a) {
  return z$1(a) === r$1;
};
reactIs_production_min$1.isPortal = function(a) {
  return z$1(a) === d$1;
};
reactIs_production_min$1.isProfiler = function(a) {
  return z$1(a) === g$1;
};
reactIs_production_min$1.isStrictMode = function(a) {
  return z$1(a) === f$1;
};
reactIs_production_min$1.isSuspense = function(a) {
  return z$1(a) === p$1;
};
reactIs_production_min$1.isValidElementType = function(a) {
  return typeof a === "string" || typeof a === "function" || a === e$1 || a === m$1 || a === g$1 || a === f$1 || a === p$1 || a === q$1 || typeof a === "object" && a !== null && (a.$$typeof === t || a.$$typeof === r$1 || a.$$typeof === h$1 || a.$$typeof === k$1 || a.$$typeof === n$1 || a.$$typeof === w$1 || a.$$typeof === x$1 || a.$$typeof === y$1 || a.$$typeof === v$1);
};
reactIs_production_min$1.typeOf = z$1;
{
  reactIs$1.exports = reactIs_production_min$1;
}
var reactIs = reactIs$1.exports;
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
var reactIs_production_min = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = 60103, c = 60106, d = 60107, e = 60108, f = 60114, g = 60109, h = 60110, k = 60112, l = 60113, m = 60120, n = 60115, p = 60116, q = 60121, r = 60122, u = 60117, v = 60129, w = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  var x = Symbol.for;
  b = x("react.element");
  c = x("react.portal");
  d = x("react.fragment");
  e = x("react.strict_mode");
  f = x("react.profiler");
  g = x("react.provider");
  h = x("react.context");
  k = x("react.forward_ref");
  l = x("react.suspense");
  m = x("react.suspense_list");
  n = x("react.memo");
  p = x("react.lazy");
  q = x("react.block");
  r = x("react.server.block");
  u = x("react.fundamental");
  v = x("react.debug_trace_mode");
  w = x("react.legacy_hidden");
}
function y(a) {
  if (typeof a === "object" && a !== null) {
    var t2 = a.$$typeof;
    switch (t2) {
      case b:
        switch (a = a.type, a) {
          case d:
          case f:
          case e:
          case l:
          case m:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case h:
              case k:
              case p:
              case n:
              case g:
                return a;
              default:
                return t2;
            }
        }
      case c:
        return t2;
    }
  }
}
var z = g, A = b, B = k, C = d, D = p, E = n, F = c, G = f, H = e, I = l;
reactIs_production_min.ContextConsumer = h;
reactIs_production_min.ContextProvider = z;
reactIs_production_min.Element = A;
reactIs_production_min.ForwardRef = B;
reactIs_production_min.Fragment = C;
reactIs_production_min.Lazy = D;
reactIs_production_min.Memo = E;
reactIs_production_min.Portal = F;
reactIs_production_min.Profiler = G;
reactIs_production_min.StrictMode = H;
reactIs_production_min.Suspense = I;
reactIs_production_min.isAsyncMode = function() {
  return false;
};
reactIs_production_min.isConcurrentMode = function() {
  return false;
};
reactIs_production_min.isContextConsumer = function(a) {
  return y(a) === h;
};
reactIs_production_min.isContextProvider = function(a) {
  return y(a) === g;
};
reactIs_production_min.isElement = function(a) {
  return typeof a === "object" && a !== null && a.$$typeof === b;
};
reactIs_production_min.isForwardRef = function(a) {
  return y(a) === k;
};
reactIs_production_min.isFragment = function(a) {
  return y(a) === d;
};
reactIs_production_min.isLazy = function(a) {
  return y(a) === p;
};
reactIs_production_min.isMemo = function(a) {
  return y(a) === n;
};
reactIs_production_min.isPortal = function(a) {
  return y(a) === c;
};
reactIs_production_min.isProfiler = function(a) {
  return y(a) === f;
};
reactIs_production_min.isStrictMode = function(a) {
  return y(a) === e;
};
reactIs_production_min.isSuspense = function(a) {
  return y(a) === l;
};
reactIs_production_min.isValidElementType = function(a) {
  return typeof a === "string" || typeof a === "function" || a === d || a === f || a === v || a === e || a === l || a === m || a === w || typeof a === "object" && a !== null && (a.$$typeof === p || a.$$typeof === n || a.$$typeof === g || a.$$typeof === h || a.$$typeof === k || a.$$typeof === u || a.$$typeof === q || a[0] === r) ? true : false;
};
reactIs_production_min.typeOf = y;
function useReduxContext() {
  var contextValue = react.exports.useContext(ReactReduxContext);
  return contextValue;
}
function createStoreHook(context2) {
  if (context2 === void 0) {
    context2 = ReactReduxContext;
  }
  var useReduxContext$1 = context2 === ReactReduxContext ? useReduxContext : function() {
    return react.exports.useContext(context2);
  };
  return function useStore2() {
    var _useReduxContext = useReduxContext$1(), store2 = _useReduxContext.store;
    return store2;
  };
}
var useStore = /* @__PURE__ */ createStoreHook();
function createDispatchHook(context2) {
  if (context2 === void 0) {
    context2 = ReactReduxContext;
  }
  var useStore$1 = context2 === ReactReduxContext ? useStore : createStoreHook(context2);
  return function useDispatch2() {
    var store2 = useStore$1();
    return store2.dispatch;
  };
}
var useDispatch$1 = /* @__PURE__ */ createDispatchHook();
var refEquality = function refEquality2(a, b2) {
  return a === b2;
};
function useSelectorWithStoreAndSubscription(selector, equalityFn, store2, contextSub) {
  var _useReducer = react.exports.useReducer(function(s) {
    return s + 1;
  }, 0), forceRender = _useReducer[1];
  var subscription = react.exports.useMemo(function() {
    return createSubscription(store2, contextSub);
  }, [store2, contextSub]);
  var latestSubscriptionCallbackError = react.exports.useRef();
  var latestSelector = react.exports.useRef();
  var latestStoreState = react.exports.useRef();
  var latestSelectedState = react.exports.useRef();
  var storeState = store2.getState();
  var selectedState;
  try {
    if (selector !== latestSelector.current || storeState !== latestStoreState.current || latestSubscriptionCallbackError.current) {
      var newSelectedState = selector(storeState);
      if (latestSelectedState.current === void 0 || !equalityFn(newSelectedState, latestSelectedState.current)) {
        selectedState = newSelectedState;
      } else {
        selectedState = latestSelectedState.current;
      }
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }
    throw err;
  }
  useIsomorphicLayoutEffect(function() {
    latestSelector.current = selector;
    latestStoreState.current = storeState;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = void 0;
  });
  useIsomorphicLayoutEffect(function() {
    function checkForUpdates() {
      try {
        var newStoreState = store2.getState();
        if (newStoreState === latestStoreState.current) {
          return;
        }
        var _newSelectedState = latestSelector.current(newStoreState);
        if (equalityFn(_newSelectedState, latestSelectedState.current)) {
          return;
        }
        latestSelectedState.current = _newSelectedState;
        latestStoreState.current = newStoreState;
      } catch (err) {
        latestSubscriptionCallbackError.current = err;
      }
      forceRender();
    }
    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function() {
      return subscription.tryUnsubscribe();
    };
  }, [store2, subscription]);
  return selectedState;
}
function createSelectorHook(context2) {
  if (context2 === void 0) {
    context2 = ReactReduxContext;
  }
  var useReduxContext$1 = context2 === ReactReduxContext ? useReduxContext : function() {
    return react.exports.useContext(context2);
  };
  return function useSelector2(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }
    var _useReduxContext = useReduxContext$1(), store2 = _useReduxContext.store, contextSub = _useReduxContext.subscription;
    var selectedState = useSelectorWithStoreAndSubscription(selector, equalityFn, store2, contextSub);
    react.exports.useDebugValue(selectedState);
    return selectedState;
  };
}
var useSelector$1 = /* @__PURE__ */ createSelectorHook();
setBatch(reactDom.exports.unstable_batchedUpdates);
function _setPrototypeOf$1(o, p2) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf$1(o, p2);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf$1(subClass, superClass);
}
function isAbsolute(pathname) {
  return pathname.charAt(0) === "/";
}
function spliceOne(list, index2) {
  for (var i = index2, k2 = i + 1, n2 = list.length; k2 < n2; i += 1, k2 += 1) {
    list[i] = list[k2];
  }
  list.pop();
}
function resolvePathname(to, from) {
  if (from === void 0)
    from = "";
  var toParts = to && to.split("/") || [];
  var fromParts = from && from.split("/") || [];
  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;
  if (to && isAbsolute(to)) {
    fromParts = toParts;
  } else if (toParts.length) {
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }
  if (!fromParts.length)
    return "/";
  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === "." || last === ".." || last === "";
  } else {
    hasTrailingSlash = false;
  }
  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];
    if (part === ".") {
      spliceOne(fromParts, i);
    } else if (part === "..") {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }
  if (!mustEndAbs)
    for (; up--; up)
      fromParts.unshift("..");
  if (mustEndAbs && fromParts[0] !== "" && (!fromParts[0] || !isAbsolute(fromParts[0])))
    fromParts.unshift("");
  var result = fromParts.join("/");
  if (hasTrailingSlash && result.substr(-1) !== "/")
    result += "/";
  return result;
}
function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}
function valueEqual(a, b2) {
  if (a === b2)
    return true;
  if (a == null || b2 == null)
    return false;
  if (Array.isArray(a)) {
    return Array.isArray(b2) && a.length === b2.length && a.every(function(item, index2) {
      return valueEqual(item, b2[index2]);
    });
  }
  if (typeof a === "object" || typeof b2 === "object") {
    var aValue = valueOf(a);
    var bValue = valueOf(b2);
    if (aValue !== a || bValue !== b2)
      return valueEqual(aValue, bValue);
    return Object.keys(Object.assign({}, a, b2)).every(function(key) {
      return valueEqual(a[key], b2[key]);
    });
  }
  return false;
}
var isProduction = true;
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? prefix + ": " + provided : prefix;
  throw new Error(value);
}
function parsePath$1(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }
  var searchIndex = pathname.indexOf("?");
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }
  return {
    pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}
function createPath$1(location) {
  var pathname = location.pathname, search = location.search, hash = location.hash;
  var path = pathname || "/";
  if (search && search !== "?")
    path += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    path += hash.charAt(0) === "#" ? hash : "#" + hash;
  return path;
}
function createLocation$1(path, state, key, currentLocation) {
  var location;
  if (typeof path === "string") {
    location = parsePath$1(path);
    location.state = state;
  } else {
    location = _extends$1({}, path);
    if (location.pathname === void 0)
      location.pathname = "";
    if (location.search) {
      if (location.search.charAt(0) !== "?")
        location.search = "?" + location.search;
    } else {
      location.search = "";
    }
    if (location.hash) {
      if (location.hash.charAt(0) !== "#")
        location.hash = "#" + location.hash;
    } else {
      location.hash = "";
    }
    if (state !== void 0 && location.state === void 0)
      location.state = state;
  }
  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e2) {
    if (e2 instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.');
    } else {
      throw e2;
    }
  }
  if (key)
    location.key = key;
  if (currentLocation) {
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== "/") {
      location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
    }
  } else {
    if (!location.pathname) {
      location.pathname = "/";
    }
  }
  return location;
}
function locationsAreEqual(a, b2) {
  return a.pathname === b2.pathname && a.search === b2.search && a.hash === b2.hash && a.key === b2.key && valueEqual(a.state, b2.state);
}
function createTransitionManager$1() {
  var prompt = null;
  function setPrompt(nextPrompt) {
    prompt = nextPrompt;
    return function() {
      if (prompt === nextPrompt)
        prompt = null;
    };
  }
  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    if (prompt != null) {
      var result = typeof prompt === "function" ? prompt(location, action) : prompt;
      if (typeof result === "string") {
        if (typeof getUserConfirmation === "function") {
          getUserConfirmation(result, callback);
        } else {
          callback(true);
        }
      } else {
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }
  var listeners = [];
  function appendListener(fn) {
    var isActive = true;
    function listener() {
      if (isActive)
        fn.apply(void 0, arguments);
    }
    listeners.push(listener);
    return function() {
      isActive = false;
      listeners = listeners.filter(function(item) {
        return item !== listener;
      });
    };
  }
  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    listeners.forEach(function(listener) {
      return listener.apply(void 0, args);
    });
  }
  return {
    setPrompt,
    confirmTransitionTo,
    appendListener,
    notifyListeners
  };
}
function clamp(n2, lowerBound, upperBound) {
  return Math.min(Math.max(n2, lowerBound), upperBound);
}
function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }
  var _props = props, getUserConfirmation = _props.getUserConfirmation, _props$initialEntries = _props.initialEntries, initialEntries = _props$initialEntries === void 0 ? ["/"] : _props$initialEntries, _props$initialIndex = _props.initialIndex, initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex, _props$keyLength = _props.keyLength, keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager$1();
  function setState(nextState) {
    _extends$1(history, nextState);
    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }
  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }
  var index2 = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function(entry) {
    return typeof entry === "string" ? createLocation$1(entry, void 0, createKey()) : createLocation$1(entry, void 0, entry.key || createKey());
  });
  var createHref = createPath$1;
  function push(path, state) {
    var action = "PUSH";
    var location = createLocation$1(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }
      setState({
        action,
        location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }
  function replace(path, state) {
    var action = "REPLACE";
    var location = createLocation$1(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      history.entries[history.index] = location;
      setState({
        action,
        location
      });
    });
  }
  function go(n2) {
    var nextIndex = clamp(history.index + n2, 0, history.entries.length - 1);
    var action = "POP";
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
      if (ok2) {
        setState({
          action,
          location,
          index: nextIndex
        });
      } else {
        setState();
      }
    });
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }
  function canGo(n2) {
    var nextIndex = history.index + n2;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }
  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }
    return transitionManager.setPrompt(prompt);
  }
  function listen(listener) {
    return transitionManager.appendListener(listener);
  }
  var history = {
    length: entries.length,
    action: "POP",
    location: entries[index2],
    index: index2,
    entries,
    createHref,
    push,
    replace,
    go,
    goBack,
    goForward,
    canGo,
    block,
    listen
  };
  return history;
}
var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
function getUniqueId$1() {
  var key = "__global_unique_id__";
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
}
function objectIs(x, y2) {
  if (x === y2) {
    return x !== 0 || 1 / x === 1 / y2;
  } else {
    return x !== x && y2 !== y2;
  }
}
function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function(h2) {
        return h2 !== handler;
      });
    },
    get: function get2() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function(handler) {
        return handler(value, changedBits);
      });
    }
  };
}
function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}
function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;
  var contextProp = "__create-react-context-" + getUniqueId$1() + "__";
  var Provider2 = /* @__PURE__ */ function(_Component) {
    _inheritsLoose(Provider3, _Component);
    function Provider3() {
      var _this;
      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }
    var _proto = Provider3.prototype;
    _proto.getChildContext = function getChildContext() {
      var _ref;
      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };
    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;
        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === "function" ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          changedBits |= 0;
          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };
    _proto.render = function render() {
      return this.props.children;
    };
    return Provider3;
  }(react.exports.Component);
  Provider2.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = PropTypes.object.isRequired, _Provider$childContex);
  var Consumer = /* @__PURE__ */ function(_Component2) {
    _inheritsLoose(Consumer2, _Component2);
    function Consumer2() {
      var _this2;
      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };
      _this2.onUpdate = function(newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };
      return _this2;
    }
    var _proto2 = Consumer2.prototype;
    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === void 0 || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };
    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === void 0 || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };
    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };
    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };
    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };
    return Consumer2;
  }(react.exports.Component);
  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = PropTypes.object, _Consumer$contextType);
  return {
    Provider: Provider2,
    Consumer
  };
}
var index$k = React$1.createContext || createReactContext;
var pathToRegexp$2 = { exports: {} };
var isarray$1 = Array.isArray || function(arr) {
  return Object.prototype.toString.call(arr) == "[object Array]";
};
var isarray = isarray$1;
pathToRegexp$2.exports = pathToRegexp;
pathToRegexp$2.exports.parse = parse;
pathToRegexp$2.exports.compile = compile;
pathToRegexp$2.exports.tokensToFunction = tokensToFunction;
pathToRegexp$2.exports.tokensToRegExp = tokensToRegExp;
var PATH_REGEXP = new RegExp([
  "(\\\\.)",
  "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
].join("|"), "g");
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index2 = 0;
  var path = "";
  var defaultDelimiter = options && options.delimiter || "/";
  var res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m2 = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index2, offset);
    index2 = offset + m2.length;
    if (escaped) {
      path += escaped[1];
      continue;
    }
    var next = str[index2];
    var prefix2 = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];
    if (path) {
      tokens.push(path);
      path = "";
    }
    var partial = prefix2 != null && next != null && next !== prefix2;
    var repeat = modifier === "+" || modifier === "*";
    var optional = modifier === "?" || modifier === "*";
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix2 || "",
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? ".*" : "[^" + escapeString(delimiter) + "]+?"
    });
  }
  if (index2 < str.length) {
    path += str.substr(index2);
  }
  if (path) {
    tokens.push(path);
  }
  return tokens;
}
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function(c2) {
    return "%" + c2.charCodeAt(0).toString(16).toUpperCase();
  });
}
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function(c2) {
    return "%" + c2.charCodeAt(0).toString(16).toUpperCase();
  });
}
function tokensToFunction(tokens, options) {
  var matches = new Array(tokens.length);
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === "object") {
      matches[i] = new RegExp("^(?:" + tokens[i].pattern + ")$", flags(options));
    }
  }
  return function(obj, opts) {
    var path = "";
    var data = obj || {};
    var options2 = opts || {};
    var encode = options2.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (var i2 = 0; i2 < tokens.length; i2++) {
      var token = tokens[i2];
      if (typeof token === "string") {
        path += token;
        continue;
      }
      var value = data[token.name];
      var segment;
      if (value == null) {
        if (token.optional) {
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + "`");
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i2].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + "`");
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i2].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, "\\$1");
}
function attachKeys(re2, keys) {
  re2.keys = keys;
  return re2;
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function regexpToRegexp(path, keys) {
  var groups = path.source.match(/\((?!\?)/g);
  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }
  return attachKeys(path, keys);
}
function arrayToRegexp(path, keys, options) {
  var parts = [];
  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }
  var regexp = new RegExp("(?:" + parts.join("|") + ")", flags(options));
  return attachKeys(regexp, keys);
}
function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}
function tokensToRegExp(tokens, keys, options) {
  if (!isarray(keys)) {
    options = keys || options;
    keys = [];
  }
  options = options || {};
  var strict = options.strict;
  var end = options.end !== false;
  var route = "";
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];
    if (typeof token === "string") {
      route += escapeString(token);
    } else {
      var prefix2 = escapeString(token.prefix);
      var capture = "(?:" + token.pattern + ")";
      keys.push(token);
      if (token.repeat) {
        capture += "(?:" + prefix2 + capture + ")*";
      }
      if (token.optional) {
        if (!token.partial) {
          capture = "(?:" + prefix2 + "(" + capture + "))?";
        } else {
          capture = prefix2 + "(" + capture + ")?";
        }
      } else {
        capture = prefix2 + "(" + capture + ")";
      }
      route += capture;
    }
  }
  var delimiter = escapeString(options.delimiter || "/");
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + "(?:" + delimiter + "(?=$))?";
  }
  if (end) {
    route += "$";
  } else {
    route += strict && endsWithDelimiter ? "" : "(?=" + delimiter + "|$)";
  }
  return attachKeys(new RegExp("^" + route, flags(options)), keys);
}
function pathToRegexp(path, keys, options) {
  if (!isarray(keys)) {
    options = keys || options;
    keys = [];
  }
  options = options || {};
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys);
  }
  if (isarray(path)) {
    return arrayToRegexp(path, keys, options);
  }
  return stringToRegexp(path, keys, options);
}
var pathToRegexp$1 = pathToRegexp$2.exports;
var createNamedContext = function createNamedContext2(name) {
  var context2 = index$k();
  context2.displayName = name;
  return context2;
};
var historyContext = /* @__PURE__ */ createNamedContext("Router-History");
var context = /* @__PURE__ */ createNamedContext("Router");
var Router = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Router2, _React$Component);
  Router2.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };
  function Router2(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    };
    _this._isMounted = false;
    _this._pendingLocation = null;
    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function(location) {
        if (_this._isMounted) {
          _this.setState({
            location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }
    return _this;
  }
  var _proto = Router2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
      this._isMounted = false;
      this._pendingLocation = null;
    }
  };
  _proto.render = function render() {
    return /* @__PURE__ */ React$1.createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router2.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, /* @__PURE__ */ React$1.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };
  return Router2;
}(React$1.Component);
/* @__PURE__ */ (function(_React$Component) {
  _inheritsLoose(MemoryRouter, _React$Component);
  function MemoryRouter() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createMemoryHistory(_this.props);
    return _this;
  }
  var _proto = MemoryRouter.prototype;
  _proto.render = function render() {
    return /* @__PURE__ */ React$1.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };
  return MemoryRouter;
})(React$1.Component);
var Lifecycle = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Lifecycle2, _React$Component);
  function Lifecycle2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Lifecycle2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount)
      this.props.onMount.call(this, this);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate)
      this.props.onUpdate.call(this, this, prevProps);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount)
      this.props.onUnmount.call(this, this);
  };
  _proto.render = function render() {
    return null;
  };
  return Lifecycle2;
}(React$1.Component);
var cache = {};
var cacheLimit = 1e4;
var cacheCount = 0;
function compilePath(path) {
  if (cache[path])
    return cache[path];
  var generator = pathToRegexp$1.compile(path);
  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }
  return generator;
}
function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }
  if (params === void 0) {
    params = {};
  }
  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}
function Redirect(_ref) {
  var computedMatch = _ref.computedMatch, to = _ref.to, _ref$push = _ref.push, push = _ref$push === void 0 ? false : _ref$push;
  return /* @__PURE__ */ React$1.createElement(context.Consumer, null, function(context2) {
    !context2 ? invariant(false) : void 0;
    var history = context2.history, staticContext = context2.staticContext;
    var method = push ? history.push : history.replace;
    var location = createLocation$1(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : _extends$1({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to);
    if (staticContext) {
      method(location);
      return null;
    }
    return /* @__PURE__ */ React$1.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self2, prevProps) {
        var prevLocation = createLocation$1(prevProps.to);
        if (!locationsAreEqual(prevLocation, _extends$1({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to
    });
  });
}
var cache$1 = {};
var cacheLimit$1 = 1e4;
var cacheCount$1 = 0;
function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path])
    return pathCache[path];
  var keys = [];
  var regexp = pathToRegexp$1(path, keys, options);
  var result = {
    regexp,
    keys
  };
  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }
  return result;
}
function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }
  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }
  var _options = options, path = _options.path, _options$exact = _options.exact, exact = _options$exact === void 0 ? false : _options$exact, _options$strict = _options.strict, strict = _options$strict === void 0 ? false : _options$strict, _options$sensitive = _options.sensitive, sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function(matched, path2) {
    if (!path2 && path2 !== "")
      return null;
    if (matched)
      return matched;
    var _compilePath = compilePath$1(path2, {
      end: exact,
      strict,
      sensitive
    }), regexp = _compilePath.regexp, keys = _compilePath.keys;
    var match = regexp.exec(pathname);
    if (!match)
      return null;
    var url = match[0], values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact)
      return null;
    return {
      path: path2,
      url: path2 === "/" && url === "" ? "/" : url,
      isExact,
      params: keys.reduce(function(memo, key, index2) {
        memo[key.name] = values[index2];
        return memo;
      }, {})
    };
  }, null);
}
function isEmptyChildren(children) {
  return React$1.Children.count(children) === 0;
}
var Route = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Route2, _React$Component);
  function Route2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Route2.prototype;
  _proto.render = function render() {
    var _this = this;
    return /* @__PURE__ */ React$1.createElement(context.Consumer, null, function(context$1) {
      !context$1 ? invariant(false) : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;
      var props = _extends$1({}, context$1, {
        location,
        match
      });
      var _this$props = _this.props, children = _this$props.children, component = _this$props.component, render2 = _this$props.render;
      if (Array.isArray(children) && isEmptyChildren(children)) {
        children = null;
      }
      return /* @__PURE__ */ React$1.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ? children(props) : children : component ? /* @__PURE__ */ React$1.createElement(component, props) : render2 ? render2(props) : null : typeof children === "function" ? children(props) : null);
    });
  };
  return Route2;
}(React$1.Component);
function addLeadingSlash$1(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}
function addBasename(basename, location) {
  if (!basename)
    return location;
  return _extends$1({}, location, {
    pathname: addLeadingSlash$1(basename) + location.pathname
  });
}
function stripBasename$1(basename, location) {
  if (!basename)
    return location;
  var base = addLeadingSlash$1(basename);
  if (location.pathname.indexOf(base) !== 0)
    return location;
  return _extends$1({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}
function createURL(location) {
  return typeof location === "string" ? location : createPath$1(location);
}
function staticHandler(methodName) {
  return function() {
    invariant(false);
  };
}
function noop() {
}
/* @__PURE__ */ (function(_React$Component) {
  _inheritsLoose(StaticRouter, _React$Component);
  function StaticRouter() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.handlePush = function(location) {
      return _this.navigateTo(location, "PUSH");
    };
    _this.handleReplace = function(location) {
      return _this.navigateTo(location, "REPLACE");
    };
    _this.handleListen = function() {
      return noop;
    };
    _this.handleBlock = function() {
      return noop;
    };
    return _this;
  }
  var _proto = StaticRouter.prototype;
  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props, _this$props$basename = _this$props.basename, basename = _this$props$basename === void 0 ? "" : _this$props$basename, _this$props$context = _this$props.context, context2 = _this$props$context === void 0 ? {} : _this$props$context;
    context2.action = action;
    context2.location = addBasename(basename, createLocation$1(location));
    context2.url = createURL(context2.location);
  };
  _proto.render = function render() {
    var _this$props2 = this.props, _this$props2$basename = _this$props2.basename, basename = _this$props2$basename === void 0 ? "" : _this$props2$basename, _this$props2$context = _this$props2.context, context2 = _this$props2$context === void 0 ? {} : _this$props2$context, _this$props2$location = _this$props2.location, location = _this$props2$location === void 0 ? "/" : _this$props2$location, rest = _objectWithoutPropertiesLoose$1(_this$props2, ["basename", "context", "location"]);
    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash$1(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename$1(basename, createLocation$1(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler(),
      goBack: staticHandler(),
      goForward: staticHandler(),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return /* @__PURE__ */ React$1.createElement(Router, _extends$1({}, rest, {
      history,
      staticContext: context2
    }));
  };
  return StaticRouter;
})(React$1.Component);
var Switch = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Switch2, _React$Component);
  function Switch2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Switch2.prototype;
  _proto.render = function render() {
    var _this = this;
    return /* @__PURE__ */ React$1.createElement(context.Consumer, null, function(context2) {
      !context2 ? invariant(false) : void 0;
      var location = _this.props.location || context2.location;
      var element, match;
      React$1.Children.forEach(_this.props.children, function(child) {
        if (match == null && /* @__PURE__ */ React$1.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, _extends$1({}, child.props, {
            path
          })) : context2.match;
        }
      });
      return match ? /* @__PURE__ */ React$1.cloneElement(element, {
        location,
        computedMatch: match
      }) : null;
    });
  };
  return Switch2;
}(React$1.Component);
var useContext = React$1.useContext;
function useHistory() {
  return useContext(historyContext);
}
function useLocation() {
  return useContext(context).location;
}
function useRouteMatch(path) {
  var location = useLocation();
  var match = useContext(context).match;
  return path ? matchPath(location.pathname, path) : match;
}
function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === "/" ? path.substr(1) : path;
}
function hasBasename(path, prefix2) {
  return path.toLowerCase().indexOf(prefix2.toLowerCase()) === 0 && "/?#".indexOf(path.charAt(prefix2.length)) !== -1;
}
function stripBasename(path, prefix2) {
  return hasBasename(path, prefix2) ? path.substr(prefix2.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === "/" ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }
  var searchIndex = pathname.indexOf("?");
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }
  return {
    pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}
function createPath(location) {
  var pathname = location.pathname, search = location.search, hash = location.hash;
  var path = pathname || "/";
  if (search && search !== "?")
    path += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    path += hash.charAt(0) === "#" ? hash : "#" + hash;
  return path;
}
function createLocation(path, state, key, currentLocation) {
  var location;
  if (typeof path === "string") {
    location = parsePath(path);
    location.state = state;
  } else {
    location = _extends$1({}, path);
    if (location.pathname === void 0)
      location.pathname = "";
    if (location.search) {
      if (location.search.charAt(0) !== "?")
        location.search = "?" + location.search;
    } else {
      location.search = "";
    }
    if (location.hash) {
      if (location.hash.charAt(0) !== "#")
        location.hash = "#" + location.hash;
    } else {
      location.hash = "";
    }
    if (state !== void 0 && location.state === void 0)
      location.state = state;
  }
  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e2) {
    if (e2 instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.');
    } else {
      throw e2;
    }
  }
  if (key)
    location.key = key;
  if (currentLocation) {
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== "/") {
      location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
    }
  } else {
    if (!location.pathname) {
      location.pathname = "/";
    }
  }
  return location;
}
function createTransitionManager() {
  var prompt = null;
  function setPrompt(nextPrompt) {
    prompt = nextPrompt;
    return function() {
      if (prompt === nextPrompt)
        prompt = null;
    };
  }
  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    if (prompt != null) {
      var result = typeof prompt === "function" ? prompt(location, action) : prompt;
      if (typeof result === "string") {
        if (typeof getUserConfirmation === "function") {
          getUserConfirmation(result, callback);
        } else {
          callback(true);
        }
      } else {
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }
  var listeners = [];
  function appendListener(fn) {
    var isActive = true;
    function listener() {
      if (isActive)
        fn.apply(void 0, arguments);
    }
    listeners.push(listener);
    return function() {
      isActive = false;
      listeners = listeners.filter(function(item) {
        return item !== listener;
      });
    };
  }
  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    listeners.forEach(function(listener) {
      return listener.apply(void 0, args);
    });
  }
  return {
    setPrompt,
    confirmTransitionTo,
    appendListener,
    notifyListeners
  };
}
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message));
}
function supportsHistory() {
  var ua2 = window.navigator.userAgent;
  if ((ua2.indexOf("Android 2.") !== -1 || ua2.indexOf("Android 4.0") !== -1) && ua2.indexOf("Mobile Safari") !== -1 && ua2.indexOf("Chrome") === -1 && ua2.indexOf("Windows Phone") === -1)
    return false;
  return window.history && "pushState" in window.history;
}
function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf("Trident") === -1;
}
function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf("Firefox") === -1;
}
function isExtraneousPopstateEvent(event) {
  return event.state === void 0 && navigator.userAgent.indexOf("CriOS") === -1;
}
var PopStateEvent = "popstate";
var HashChangeEvent = "hashchange";
function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e2) {
    return {};
  }
}
function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }
  !canUseDOM ? invariant(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props, _props$forceRefresh = _props.forceRefresh, forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh, _props$getUserConfirm = _props.getUserConfirmation, getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm, _props$keyLength = _props.keyLength, keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : "";
  function getDOMLocation(historyState) {
    var _ref = historyState || {}, key = _ref.key, state = _ref.state;
    var _window$location = window.location, pathname = _window$location.pathname, search = _window$location.search, hash = _window$location.hash;
    var path = pathname + search + hash;
    if (basename)
      path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }
  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }
  var transitionManager = createTransitionManager();
  function setState(nextState) {
    _extends$1(history, nextState);
    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }
  function handlePopState(event) {
    if (isExtraneousPopstateEvent(event))
      return;
    handlePop(getDOMLocation(event.state));
  }
  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }
  var forceNextPop = false;
  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = "POP";
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
        if (ok2) {
          setState({
            action,
            location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }
  function revertPop(fromLocation) {
    var toLocation = history.location;
    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1)
      toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1)
      fromIndex = 0;
    var delta = toIndex - fromIndex;
    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }
  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];
  function createHref(location) {
    return basename + createPath(location);
  }
  function push(path, state) {
    var action = "PUSH";
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var href = createHref(location);
      var key = location.key, state2 = location.state;
      if (canUseHistory) {
        globalHistory.pushState({
          key,
          state: state2
        }, null, href);
        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action,
            location
          });
        }
      } else {
        window.location.href = href;
      }
    });
  }
  function replace(path, state) {
    var action = "REPLACE";
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var href = createHref(location);
      var key = location.key, state2 = location.state;
      if (canUseHistory) {
        globalHistory.replaceState({
          key,
          state: state2
        }, null, href);
        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1)
            allKeys[prevIndex] = location.key;
          setState({
            action,
            location
          });
        }
      } else {
        window.location.replace(href);
      }
    });
  }
  function go(n2) {
    globalHistory.go(n2);
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }
  var listenerCount = 0;
  function checkDOMListeners(delta) {
    listenerCount += delta;
    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener)
        window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener)
        window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }
  var isBlocked = false;
  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }
    var unblock = transitionManager.setPrompt(prompt);
    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }
    return function() {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }
      return unblock();
    };
  }
  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function() {
      checkDOMListeners(-1);
      unlisten();
    };
  }
  var history = {
    length: globalHistory.length,
    action: "POP",
    location: initialLocation,
    createHref,
    push,
    replace,
    go,
    goBack,
    goForward,
    block,
    listen
  };
  return history;
}
var HashChangeEvent$1 = "hashchange";
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === "!" ? path : "!/" + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === "!" ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};
function stripHash(url) {
  var hashIndex = url.indexOf("#");
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}
function getHashPath() {
  var href = window.location.href;
  var hashIndex = href.indexOf("#");
  return hashIndex === -1 ? "" : href.substring(hashIndex + 1);
}
function pushHashPath(path) {
  window.location.hash = path;
}
function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + "#" + path);
}
function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }
  !canUseDOM ? invariant(false) : void 0;
  var globalHistory = window.history;
  supportsGoWithoutReloadUsingHash();
  var _props = props, _props$getUserConfirm = _props.getUserConfirmation, getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm, _props$hashType = _props.hashType, hashType = _props$hashType === void 0 ? "slash" : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : "";
  var _HashPathCoders$hashT = HashPathCoders[hashType], encodePath2 = _HashPathCoders$hashT.encodePath, decodePath2 = _HashPathCoders$hashT.decodePath;
  function getDOMLocation() {
    var path2 = decodePath2(getHashPath());
    if (basename)
      path2 = stripBasename(path2, basename);
    return createLocation(path2);
  }
  var transitionManager = createTransitionManager();
  function setState(nextState) {
    _extends$1(history, nextState);
    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }
  var forceNextPop = false;
  var ignorePath = null;
  function locationsAreEqual$$1(a, b2) {
    return a.pathname === b2.pathname && a.search === b2.search && a.hash === b2.hash;
  }
  function handleHashChange() {
    var path2 = getHashPath();
    var encodedPath2 = encodePath2(path2);
    if (path2 !== encodedPath2) {
      replaceHashPath(encodedPath2);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location))
        return;
      if (ignorePath === createPath(location))
        return;
      ignorePath = null;
      handlePop(location);
    }
  }
  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = "POP";
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
        if (ok2) {
          setState({
            action,
            location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }
  function revertPop(fromLocation) {
    var toLocation = history.location;
    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1)
      toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1)
      fromIndex = 0;
    var delta = toIndex - fromIndex;
    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }
  var path = getHashPath();
  var encodedPath = encodePath2(path);
  if (path !== encodedPath)
    replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)];
  function createHref(location) {
    var baseTag = document.querySelector("base");
    var href = "";
    if (baseTag && baseTag.getAttribute("href")) {
      href = stripHash(window.location.href);
    }
    return href + "#" + encodePath2(basename + createPath(location));
  }
  function push(path2, state) {
    var action = "PUSH";
    var location = createLocation(path2, void 0, void 0, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var path3 = createPath(location);
      var encodedPath2 = encodePath2(basename + path3);
      var hashChanged = getHashPath() !== encodedPath2;
      if (hashChanged) {
        ignorePath = path3;
        pushHashPath(encodedPath2);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path3);
        allPaths = nextPaths;
        setState({
          action,
          location
        });
      } else {
        setState();
      }
    });
  }
  function replace(path2, state) {
    var action = "REPLACE";
    var location = createLocation(path2, void 0, void 0, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var path3 = createPath(location);
      var encodedPath2 = encodePath2(basename + path3);
      var hashChanged = getHashPath() !== encodedPath2;
      if (hashChanged) {
        ignorePath = path3;
        replaceHashPath(encodedPath2);
      }
      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1)
        allPaths[prevIndex] = path3;
      setState({
        action,
        location
      });
    });
  }
  function go(n2) {
    globalHistory.go(n2);
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }
  var listenerCount = 0;
  function checkDOMListeners(delta) {
    listenerCount += delta;
    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }
  var isBlocked = false;
  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }
    var unblock = transitionManager.setPrompt(prompt);
    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }
    return function() {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }
      return unblock();
    };
  }
  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function() {
      checkDOMListeners(-1);
      unlisten();
    };
  }
  var history = {
    length: globalHistory.length,
    action: "POP",
    location: initialLocation,
    createHref,
    push,
    replace,
    go,
    goBack,
    goForward,
    block,
    listen
  };
  return history;
}
var BrowserRouter = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(BrowserRouter2, _React$Component);
  function BrowserRouter2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createBrowserHistory(_this.props);
    return _this;
  }
  var _proto = BrowserRouter2.prototype;
  _proto.render = function render() {
    return /* @__PURE__ */ React$1.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };
  return BrowserRouter2;
}(React$1.Component);
/* @__PURE__ */ (function(_React$Component) {
  _inheritsLoose(HashRouter, _React$Component);
  function HashRouter() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createHashHistory(_this.props);
    return _this;
  }
  var _proto = HashRouter.prototype;
  _proto.render = function render() {
    return /* @__PURE__ */ React$1.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };
  return HashRouter;
})(React$1.Component);
var resolveToLocation = function resolveToLocation2(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation2(to, currentLocation) {
  return typeof to === "string" ? createLocation(to, null, null, currentLocation) : to;
};
var forwardRefShim = function forwardRefShim2(C2) {
  return C2;
};
var forwardRef = React$1.forwardRef;
if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var LinkAnchor = forwardRef(function(_ref, forwardedRef) {
  var innerRef = _ref.innerRef, navigate = _ref.navigate, _onClick = _ref.onClick, rest = _objectWithoutPropertiesLoose$1(_ref, ["innerRef", "navigate", "onClick"]);
  var target = rest.target;
  var props = _extends$1({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick)
          _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }
      if (!event.defaultPrevented && event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event)) {
        event.preventDefault();
        navigate();
      }
    }
  });
  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  return /* @__PURE__ */ React$1.createElement("a", props);
});
var Link = forwardRef(function(_ref2, forwardedRef) {
  var _ref2$component = _ref2.component, component = _ref2$component === void 0 ? LinkAnchor : _ref2$component, replace = _ref2.replace, to = _ref2.to, innerRef = _ref2.innerRef, rest = _objectWithoutPropertiesLoose$1(_ref2, ["component", "replace", "to", "innerRef"]);
  return /* @__PURE__ */ React$1.createElement(context.Consumer, null, function(context2) {
    !context2 ? invariant(false) : void 0;
    var history = context2.history;
    var location = normalizeToLocation(resolveToLocation(to, context2.location), context2.location);
    var href = location ? history.createHref(location) : "";
    var props = _extends$1({}, rest, {
      href,
      navigate: function navigate() {
        var location2 = resolveToLocation(to, context2.location);
        var isDuplicateNavigation = createPath(context2.location) === createPath(normalizeToLocation(location2));
        var method = replace || isDuplicateNavigation ? history.replace : history.push;
        method(location2);
      }
    });
    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }
    return /* @__PURE__ */ React$1.createElement(component, props);
  });
});
var forwardRefShim$1 = function forwardRefShim3(C2) {
  return C2;
};
var forwardRef$1 = React$1.forwardRef;
if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}
function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }
  return classnames.filter(function(i) {
    return i;
  }).join(" ");
}
forwardRef$1(function(_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"], ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent, _ref$activeClassName = _ref.activeClassName, activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName, activeStyle = _ref.activeStyle, classNameProp = _ref.className, exact = _ref.exact, isActiveProp = _ref.isActive, locationProp = _ref.location, sensitive = _ref.sensitive, strict = _ref.strict, styleProp = _ref.style, to = _ref.to, innerRef = _ref.innerRef, rest = _objectWithoutPropertiesLoose$1(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);
  return /* @__PURE__ */ React$1.createElement(context.Consumer, null, function(context2) {
    !context2 ? invariant(false) : void 0;
    var currentLocation = locationProp || context2.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname;
    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? matchPath(currentLocation.pathname, {
      path: escapedPath,
      exact,
      sensitive,
      strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = typeof classNameProp === "function" ? classNameProp(isActive) : classNameProp;
    var style = typeof styleProp === "function" ? styleProp(isActive) : styleProp;
    if (isActive) {
      className = joinClassnames(className, activeClassName);
      style = _extends$1({}, style, activeStyle);
    }
    var props = _extends$1({
      "aria-current": isActive && ariaCurrent || null,
      className,
      style,
      to: toLocation
    }, rest);
    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }
    return /* @__PURE__ */ React$1.createElement(Link, props);
  });
});
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or use the non-minified dev environment for full errors. ";
}
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function createStore(reducer2, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage(0));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage(1));
    }
    return enhancer(createStore)(reducer2, preloadedState);
  }
  if (typeof reducer2 !== "function") {
    throw new Error(formatProdErrorMessage(2));
  }
  var currentReducer = reducer2;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(3));
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(formatProdErrorMessage(4));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(5));
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage(6));
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index2 = nextListeners.indexOf(listener);
      nextListeners.splice(index2, 1);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error(formatProdErrorMessage(7));
    }
    if (typeof action.type === "undefined") {
      throw new Error(formatProdErrorMessage(8));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(9));
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage(10));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(formatProdErrorMessage(11));
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function(key) {
    var reducer2 = reducers[key];
    var initialState2 = reducer2(void 0, {
      type: ActionTypes.INIT
    });
    if (typeof initialState2 === "undefined") {
      throw new Error(formatProdErrorMessage(12));
    }
    if (typeof reducer2(void 0, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error(formatProdErrorMessage(13));
    }
  });
}
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);
  var shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e2) {
    shapeAssertionError = e2;
  }
  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer2 = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer2(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        action && action.type;
        throw new Error(formatProdErrorMessage(14));
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function(arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function(a, b2) {
    return function() {
      return a(b2.apply(void 0, arguments));
    };
  });
}
const SET_WALLET = "account/SET_WALLET";
const SET_CONNECT_WALLET_MODAL = "account/SET_CONNECT_WALLET_MODAL";
const setWallet = (payload) => ({
  type: SET_WALLET,
  payload
});
const setConnectWalletModal = (payload) => ({
  type: SET_CONNECT_WALLET_MODAL,
  payload
});
const MAIN_NETWORK = "main.ton.dev";
const DEV_NETWORK = "net.ton.dev";
const FLD_NETWORK = "fld.ton.dev";
const USER_DEBOTS_LS_FIELD = "USER_DEBOTS_LS_FIELD";
const USER_ENV_LS_FIELD = "USER_ENV_LS_FIELD";
const TON_NETWORK_LS_FIELD = "TON_NETWORK_LS_FIELD";
const WALLET_LS_FIELD = "WALLET_LS_FIELD";
const EXPLORER_BASE_URL = "https://ton.live/accounts/accountDetails?id=";
const DEBOT_ADDRESS_SEARCH_PARAM = "debotAddress";
const DEBOT_WC = -31;
const INTERFACE_ADDRESS_PREFIX = `${DEBOT_WC}:`;
const MNEMONIC_WORD_COUNT = 12;
const DERIVATION_PATH = "m/44'/396'/0'/0/0";
const COMPONENTS_BINDINGS = {
  TEXT: "Text",
  INPUT: "Input",
  TEXTAREA: "Textarea",
  AMOUNT_INPUT: "AmountInput",
  CONFIRM_INPUT: "ConfirmInput",
  ADDRESS_INPUT: "AddressInput",
  TOKENS_INPUT: "TokensInput",
  MENU: "Menu",
  STDOUT: "Stdout",
  MEDIA: "Media"
};
const MEDIA_STATUS = {
  Success: 0,
  UnsupportedMediaType: 1,
  InvalidDataScheme: 2
};
const initialState$3 = {
  connectWalletModal: null,
  wallet: JSON.parse(localStorage.getItem(WALLET_LS_FIELD)) || null
};
function reducer$2(state = initialState$3, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_WALLET: {
      if (payload)
        localStorage.setItem(WALLET_LS_FIELD, JSON.stringify(payload));
      else
        localStorage.removeItem(WALLET_LS_FIELD);
      return __spreadProps(__spreadValues({}, state), {
        wallet: payload
      });
    }
    case SET_CONNECT_WALLET_MODAL: {
      return __spreadProps(__spreadValues({}, state), {
        connectWalletModal: payload
      });
    }
    default:
      return state;
  }
}
const PUSH_ITEM_TO_STAGE = "debot/PUSH_ITEM_TO_STAGE";
const CLEAR_STAGE = "debot/CLEAR_STAGE";
const SET_SIGNING_BOX = "debot/SET_SIGNING_BOX";
const SET_APPROVE_WINDOW = "debot/SET_APPROVE_WINDOW";
const SET_DEBOTS_FILTER_KEY = "debot/SET_DEBOTS_FILTER_KEY";
const SET_LOCAL_DEBOTS_LIST = "debot/SET_LOCAL_DEBOTS_LIST";
const SET_IS_DEBOT_ERROR = "debot/SET_IS_DEBOT_ERROR";
const pushItemToStage = (item) => ({
  type: PUSH_ITEM_TO_STAGE,
  payload: item
});
const clearStage = () => ({ type: CLEAR_STAGE });
const setSigningBox = (signingBoxInfo) => ({
  type: SET_SIGNING_BOX,
  payload: signingBoxInfo
});
const setApproveWindow = (approveWindowInfo) => ({
  type: SET_APPROVE_WINDOW,
  payload: approveWindowInfo
});
const setDebotsFilterKey = (filterValue) => ({
  type: SET_DEBOTS_FILTER_KEY,
  payload: filterValue
});
const setLocalDebotsList = (debotsList) => ({
  type: SET_LOCAL_DEBOTS_LIST,
  payload: debotsList
});
const setIsDebotError = (isError) => ({
  type: SET_IS_DEBOT_ERROR,
  payload: isError
});
const initialState$2 = {
  stage: [],
  signingBox: null,
  approveWindow: null,
  filterKey: "",
  debotsList: [
    { title: "DeNS", address: "0:c22300f9851e4fc9c246c3b605c521415407d95b272f0624a5e8f0d01ef25f27", network: MAIN_NETWORK },
    { title: "Crystal Fever", address: "0:a7115bb9984210697943d409c7bbc77e1db6e2021bb38cb2ebc88d7fdfdf528c", network: MAIN_NETWORK },
    { title: "Multisig", address: "0:c69a0ed4a11b467ec1a981f29139dc3ff6af47eeacd2cd93e67a6cfc6f771cfb", network: MAIN_NETWORK }
  ],
  localDebotsList: JSON.parse(localStorage.getItem(USER_DEBOTS_LS_FIELD)) || [],
  isDebotError: false
};
function reducer$1(state = initialState$2, action) {
  const { type, payload } = action;
  switch (type) {
    case PUSH_ITEM_TO_STAGE: {
      const stage = [...state.stage, payload];
      return __spreadProps(__spreadValues({}, state), {
        stage
      });
    }
    case CLEAR_STAGE: {
      return __spreadProps(__spreadValues({}, state), {
        stage: [],
        isDebotError: false
      });
    }
    case SET_SIGNING_BOX: {
      return __spreadProps(__spreadValues({}, state), {
        signingBox: payload
      });
    }
    case SET_APPROVE_WINDOW: {
      return __spreadProps(__spreadValues({}, state), {
        approveWindow: payload
      });
    }
    case SET_DEBOTS_FILTER_KEY: {
      const filterKey = payload.toLowerCase();
      return __spreadProps(__spreadValues({}, state), {
        filterKey
      });
    }
    case SET_LOCAL_DEBOTS_LIST: {
      return __spreadProps(__spreadValues({}, state), {
        localDebotsList: payload
      });
    }
    case SET_IS_DEBOT_ERROR: {
      return __spreadProps(__spreadValues({}, state), {
        isDebotError: payload
      });
    }
    default:
      return state;
  }
}
const SET_ENVIRONMENT_VARIABLE = "debot/SET_ENVIRONMENT_VARIABLES";
const setEnvironmentVariables = (variables) => ({
  type: SET_ENVIRONMENT_VARIABLE,
  payload: variables
});
const initialState$1 = {
  variables: JSON.parse(localStorage.getItem(USER_ENV_LS_FIELD)) || {}
};
function reducer(state = initialState$1, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ENVIRONMENT_VARIABLE: {
      return __spreadProps(__spreadValues({}, state), {
        variables: payload
      });
    }
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  account: reducer$2,
  debot: reducer$1,
  environment: reducer
});
const initialState = {};
const enhancers = [];
const composedEnhancers = compose(...enhancers);
const store = createStore(rootReducer, initialState, composedEnhancers);
var dist$1 = {};
var modules = {};
(function(exports) {
  var __awaiter2 = commonjsGlobal$1 && commonjsGlobal$1.__awaiter || function(thisArg, _arguments, P2, generator) {
    function adopt(value) {
      return value instanceof P2 ? value : new P2(function(resolve) {
        resolve(value);
      });
    }
    return new (P2 || (P2 = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e2) {
          reject(e2);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e2) {
          reject(e2);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.processingEventFetchNextBlockFailed = exports.processingEventWillFetchNextBlock = exports.processingEventSendFailed = exports.processingEventDidSend = exports.processingEventWillSend = exports.processingEventFetchFirstBlockFailed = exports.processingEventWillFetchFirstBlock = exports.ProcessingErrorCode = exports.BocModule = exports.builderOpCellBoc = exports.builderOpCell = exports.builderOpBitString = exports.builderOpInteger = exports.BocErrorCode = exports.bocCacheTypeUnpinned = exports.bocCacheTypePinned = exports.AbiModule = exports.messageSourceEncodingParams = exports.messageSourceEncoded = exports.stateInitSourceTvc = exports.stateInitSourceStateInit = exports.stateInitSourceMessage = exports.MessageBodyType = exports.signerSigningBox = exports.signerKeys = exports.signerExternal = exports.signerNone = exports.abiSerialized = exports.abiHandle = exports.abiJson = exports.abiContract = exports.AbiErrorCode = exports.CryptoModule = exports.resultOfAppEncryptionBoxDecrypt = exports.resultOfAppEncryptionBoxEncrypt = exports.resultOfAppEncryptionBoxGetInfo = exports.paramsOfAppEncryptionBoxDecrypt = exports.paramsOfAppEncryptionBoxEncrypt = exports.paramsOfAppEncryptionBoxGetInfo = exports.resultOfAppSigningBoxSign = exports.resultOfAppSigningBoxGetPublicKey = exports.paramsOfAppSigningBoxSign = exports.paramsOfAppSigningBoxGetPublicKey = exports.CipherMode = exports.encryptionAlgorithmAES = exports.CryptoErrorCode = exports.ClientModule = exports.appRequestResultOk = exports.appRequestResultError = exports.ClientErrorCode = void 0;
  exports.ProofsModule = exports.ProofsErrorCode = exports.DebotModule = exports.resultOfAppDebotBrowserApprove = exports.resultOfAppDebotBrowserInvokeDebot = exports.resultOfAppDebotBrowserGetSigningBox = exports.resultOfAppDebotBrowserInput = exports.paramsOfAppDebotBrowserApprove = exports.paramsOfAppDebotBrowserSend = exports.paramsOfAppDebotBrowserInvokeDebot = exports.paramsOfAppDebotBrowserGetSigningBox = exports.paramsOfAppDebotBrowserInput = exports.paramsOfAppDebotBrowserShowAction = exports.paramsOfAppDebotBrowserSwitchCompleted = exports.paramsOfAppDebotBrowserSwitch = exports.paramsOfAppDebotBrowserLog = exports.debotActivityTransaction = exports.DebotErrorCode = exports.NetModule = exports.AggregationFn = exports.paramsOfQueryOperationQueryCounterparties = exports.paramsOfQueryOperationAggregateCollection = exports.paramsOfQueryOperationWaitForCollection = exports.paramsOfQueryOperationQueryCollection = exports.SortDirection = exports.NetErrorCode = exports.TvmModule = exports.accountForExecutorAccount = exports.accountForExecutorUninit = exports.accountForExecutorNone = exports.TvmErrorCode = exports.UtilsModule = exports.AccountAddressType = exports.addressStringFormatBase64 = exports.addressStringFormatHex = exports.addressStringFormatAccountId = exports.ProcessingModule = exports.processingEventMessageExpired = void 0;
  (function(ClientErrorCode) {
    ClientErrorCode[ClientErrorCode["NotImplemented"] = 1] = "NotImplemented";
    ClientErrorCode[ClientErrorCode["InvalidHex"] = 2] = "InvalidHex";
    ClientErrorCode[ClientErrorCode["InvalidBase64"] = 3] = "InvalidBase64";
    ClientErrorCode[ClientErrorCode["InvalidAddress"] = 4] = "InvalidAddress";
    ClientErrorCode[ClientErrorCode["CallbackParamsCantBeConvertedToJson"] = 5] = "CallbackParamsCantBeConvertedToJson";
    ClientErrorCode[ClientErrorCode["WebsocketConnectError"] = 6] = "WebsocketConnectError";
    ClientErrorCode[ClientErrorCode["WebsocketReceiveError"] = 7] = "WebsocketReceiveError";
    ClientErrorCode[ClientErrorCode["WebsocketSendError"] = 8] = "WebsocketSendError";
    ClientErrorCode[ClientErrorCode["HttpClientCreateError"] = 9] = "HttpClientCreateError";
    ClientErrorCode[ClientErrorCode["HttpRequestCreateError"] = 10] = "HttpRequestCreateError";
    ClientErrorCode[ClientErrorCode["HttpRequestSendError"] = 11] = "HttpRequestSendError";
    ClientErrorCode[ClientErrorCode["HttpRequestParseError"] = 12] = "HttpRequestParseError";
    ClientErrorCode[ClientErrorCode["CallbackNotRegistered"] = 13] = "CallbackNotRegistered";
    ClientErrorCode[ClientErrorCode["NetModuleNotInit"] = 14] = "NetModuleNotInit";
    ClientErrorCode[ClientErrorCode["InvalidConfig"] = 15] = "InvalidConfig";
    ClientErrorCode[ClientErrorCode["CannotCreateRuntime"] = 16] = "CannotCreateRuntime";
    ClientErrorCode[ClientErrorCode["InvalidContextHandle"] = 17] = "InvalidContextHandle";
    ClientErrorCode[ClientErrorCode["CannotSerializeResult"] = 18] = "CannotSerializeResult";
    ClientErrorCode[ClientErrorCode["CannotSerializeError"] = 19] = "CannotSerializeError";
    ClientErrorCode[ClientErrorCode["CannotConvertJsValueToJson"] = 20] = "CannotConvertJsValueToJson";
    ClientErrorCode[ClientErrorCode["CannotReceiveSpawnedResult"] = 21] = "CannotReceiveSpawnedResult";
    ClientErrorCode[ClientErrorCode["SetTimerError"] = 22] = "SetTimerError";
    ClientErrorCode[ClientErrorCode["InvalidParams"] = 23] = "InvalidParams";
    ClientErrorCode[ClientErrorCode["ContractsAddressConversionFailed"] = 24] = "ContractsAddressConversionFailed";
    ClientErrorCode[ClientErrorCode["UnknownFunction"] = 25] = "UnknownFunction";
    ClientErrorCode[ClientErrorCode["AppRequestError"] = 26] = "AppRequestError";
    ClientErrorCode[ClientErrorCode["NoSuchRequest"] = 27] = "NoSuchRequest";
    ClientErrorCode[ClientErrorCode["CanNotSendRequestResult"] = 28] = "CanNotSendRequestResult";
    ClientErrorCode[ClientErrorCode["CanNotReceiveRequestResult"] = 29] = "CanNotReceiveRequestResult";
    ClientErrorCode[ClientErrorCode["CanNotParseRequestResult"] = 30] = "CanNotParseRequestResult";
    ClientErrorCode[ClientErrorCode["UnexpectedCallbackResponse"] = 31] = "UnexpectedCallbackResponse";
    ClientErrorCode[ClientErrorCode["CanNotParseNumber"] = 32] = "CanNotParseNumber";
    ClientErrorCode[ClientErrorCode["InternalError"] = 33] = "InternalError";
    ClientErrorCode[ClientErrorCode["InvalidHandle"] = 34] = "InvalidHandle";
    ClientErrorCode[ClientErrorCode["LocalStorageError"] = 35] = "LocalStorageError";
  })(exports.ClientErrorCode || (exports.ClientErrorCode = {}));
  function appRequestResultError(text) {
    return {
      type: "Error",
      text
    };
  }
  exports.appRequestResultError = appRequestResultError;
  function appRequestResultOk(result) {
    return {
      type: "Ok",
      result
    };
  }
  exports.appRequestResultOk = appRequestResultOk;
  class ClientModule {
    constructor(client2) {
      this.client = client2;
    }
    get_api_reference() {
      return this.client.request("client.get_api_reference");
    }
    version() {
      return this.client.request("client.version");
    }
    build_info() {
      return this.client.request("client.build_info");
    }
    resolve_app_request(params) {
      return this.client.request("client.resolve_app_request", params);
    }
  }
  exports.ClientModule = ClientModule;
  (function(CryptoErrorCode) {
    CryptoErrorCode[CryptoErrorCode["InvalidPublicKey"] = 100] = "InvalidPublicKey";
    CryptoErrorCode[CryptoErrorCode["InvalidSecretKey"] = 101] = "InvalidSecretKey";
    CryptoErrorCode[CryptoErrorCode["InvalidKey"] = 102] = "InvalidKey";
    CryptoErrorCode[CryptoErrorCode["InvalidFactorizeChallenge"] = 106] = "InvalidFactorizeChallenge";
    CryptoErrorCode[CryptoErrorCode["InvalidBigInt"] = 107] = "InvalidBigInt";
    CryptoErrorCode[CryptoErrorCode["ScryptFailed"] = 108] = "ScryptFailed";
    CryptoErrorCode[CryptoErrorCode["InvalidKeySize"] = 109] = "InvalidKeySize";
    CryptoErrorCode[CryptoErrorCode["NaclSecretBoxFailed"] = 110] = "NaclSecretBoxFailed";
    CryptoErrorCode[CryptoErrorCode["NaclBoxFailed"] = 111] = "NaclBoxFailed";
    CryptoErrorCode[CryptoErrorCode["NaclSignFailed"] = 112] = "NaclSignFailed";
    CryptoErrorCode[CryptoErrorCode["Bip39InvalidEntropy"] = 113] = "Bip39InvalidEntropy";
    CryptoErrorCode[CryptoErrorCode["Bip39InvalidPhrase"] = 114] = "Bip39InvalidPhrase";
    CryptoErrorCode[CryptoErrorCode["Bip32InvalidKey"] = 115] = "Bip32InvalidKey";
    CryptoErrorCode[CryptoErrorCode["Bip32InvalidDerivePath"] = 116] = "Bip32InvalidDerivePath";
    CryptoErrorCode[CryptoErrorCode["Bip39InvalidDictionary"] = 117] = "Bip39InvalidDictionary";
    CryptoErrorCode[CryptoErrorCode["Bip39InvalidWordCount"] = 118] = "Bip39InvalidWordCount";
    CryptoErrorCode[CryptoErrorCode["MnemonicGenerationFailed"] = 119] = "MnemonicGenerationFailed";
    CryptoErrorCode[CryptoErrorCode["MnemonicFromEntropyFailed"] = 120] = "MnemonicFromEntropyFailed";
    CryptoErrorCode[CryptoErrorCode["SigningBoxNotRegistered"] = 121] = "SigningBoxNotRegistered";
    CryptoErrorCode[CryptoErrorCode["InvalidSignature"] = 122] = "InvalidSignature";
    CryptoErrorCode[CryptoErrorCode["EncryptionBoxNotRegistered"] = 123] = "EncryptionBoxNotRegistered";
    CryptoErrorCode[CryptoErrorCode["InvalidIvSize"] = 124] = "InvalidIvSize";
    CryptoErrorCode[CryptoErrorCode["UnsupportedCipherMode"] = 125] = "UnsupportedCipherMode";
    CryptoErrorCode[CryptoErrorCode["CannotCreateCipher"] = 126] = "CannotCreateCipher";
    CryptoErrorCode[CryptoErrorCode["EncryptDataError"] = 127] = "EncryptDataError";
    CryptoErrorCode[CryptoErrorCode["DecryptDataError"] = 128] = "DecryptDataError";
    CryptoErrorCode[CryptoErrorCode["IvRequired"] = 129] = "IvRequired";
  })(exports.CryptoErrorCode || (exports.CryptoErrorCode = {}));
  function encryptionAlgorithmAES(params) {
    return Object.assign({ type: "AES" }, params);
  }
  exports.encryptionAlgorithmAES = encryptionAlgorithmAES;
  (function(CipherMode) {
    CipherMode["CBC"] = "CBC";
    CipherMode["CFB"] = "CFB";
    CipherMode["CTR"] = "CTR";
    CipherMode["ECB"] = "ECB";
    CipherMode["OFB"] = "OFB";
  })(exports.CipherMode || (exports.CipherMode = {}));
  function paramsOfAppSigningBoxGetPublicKey() {
    return {
      type: "GetPublicKey"
    };
  }
  exports.paramsOfAppSigningBoxGetPublicKey = paramsOfAppSigningBoxGetPublicKey;
  function paramsOfAppSigningBoxSign(unsigned) {
    return {
      type: "Sign",
      unsigned
    };
  }
  exports.paramsOfAppSigningBoxSign = paramsOfAppSigningBoxSign;
  function resultOfAppSigningBoxGetPublicKey(public_key) {
    return {
      type: "GetPublicKey",
      public_key
    };
  }
  exports.resultOfAppSigningBoxGetPublicKey = resultOfAppSigningBoxGetPublicKey;
  function resultOfAppSigningBoxSign(signature) {
    return {
      type: "Sign",
      signature
    };
  }
  exports.resultOfAppSigningBoxSign = resultOfAppSigningBoxSign;
  function paramsOfAppEncryptionBoxGetInfo() {
    return {
      type: "GetInfo"
    };
  }
  exports.paramsOfAppEncryptionBoxGetInfo = paramsOfAppEncryptionBoxGetInfo;
  function paramsOfAppEncryptionBoxEncrypt(data) {
    return {
      type: "Encrypt",
      data
    };
  }
  exports.paramsOfAppEncryptionBoxEncrypt = paramsOfAppEncryptionBoxEncrypt;
  function paramsOfAppEncryptionBoxDecrypt(data) {
    return {
      type: "Decrypt",
      data
    };
  }
  exports.paramsOfAppEncryptionBoxDecrypt = paramsOfAppEncryptionBoxDecrypt;
  function resultOfAppEncryptionBoxGetInfo(info) {
    return {
      type: "GetInfo",
      info
    };
  }
  exports.resultOfAppEncryptionBoxGetInfo = resultOfAppEncryptionBoxGetInfo;
  function resultOfAppEncryptionBoxEncrypt(data) {
    return {
      type: "Encrypt",
      data
    };
  }
  exports.resultOfAppEncryptionBoxEncrypt = resultOfAppEncryptionBoxEncrypt;
  function resultOfAppEncryptionBoxDecrypt(data) {
    return {
      type: "Decrypt",
      data
    };
  }
  exports.resultOfAppEncryptionBoxDecrypt = resultOfAppEncryptionBoxDecrypt;
  function dispatchAppSigningBox(obj, params, app_request_id, client2) {
    return __awaiter2(this, void 0, void 0, function* () {
      try {
        let result = {};
        switch (params.type) {
          case "GetPublicKey":
            result = yield obj.get_public_key();
            break;
          case "Sign":
            result = yield obj.sign(params);
            break;
        }
        client2.resolve_app_request(app_request_id, Object.assign({ type: params.type }, result));
      } catch (error) {
        client2.reject_app_request(app_request_id, error);
      }
    });
  }
  function dispatchAppEncryptionBox(obj, params, app_request_id, client2) {
    return __awaiter2(this, void 0, void 0, function* () {
      try {
        let result = {};
        switch (params.type) {
          case "GetInfo":
            result = yield obj.get_info();
            break;
          case "Encrypt":
            result = yield obj.encrypt(params);
            break;
          case "Decrypt":
            result = yield obj.decrypt(params);
            break;
        }
        client2.resolve_app_request(app_request_id, Object.assign({ type: params.type }, result));
      } catch (error) {
        client2.reject_app_request(app_request_id, error);
      }
    });
  }
  class CryptoModule {
    constructor(client2) {
      this.client = client2;
    }
    factorize(params) {
      return this.client.request("crypto.factorize", params);
    }
    modular_power(params) {
      return this.client.request("crypto.modular_power", params);
    }
    ton_crc16(params) {
      return this.client.request("crypto.ton_crc16", params);
    }
    generate_random_bytes(params) {
      return this.client.request("crypto.generate_random_bytes", params);
    }
    convert_public_key_to_ton_safe_format(params) {
      return this.client.request("crypto.convert_public_key_to_ton_safe_format", params);
    }
    generate_random_sign_keys() {
      return this.client.request("crypto.generate_random_sign_keys");
    }
    sign(params) {
      return this.client.request("crypto.sign", params);
    }
    verify_signature(params) {
      return this.client.request("crypto.verify_signature", params);
    }
    sha256(params) {
      return this.client.request("crypto.sha256", params);
    }
    sha512(params) {
      return this.client.request("crypto.sha512", params);
    }
    scrypt(params) {
      return this.client.request("crypto.scrypt", params);
    }
    nacl_sign_keypair_from_secret_key(params) {
      return this.client.request("crypto.nacl_sign_keypair_from_secret_key", params);
    }
    nacl_sign(params) {
      return this.client.request("crypto.nacl_sign", params);
    }
    nacl_sign_open(params) {
      return this.client.request("crypto.nacl_sign_open", params);
    }
    nacl_sign_detached(params) {
      return this.client.request("crypto.nacl_sign_detached", params);
    }
    nacl_sign_detached_verify(params) {
      return this.client.request("crypto.nacl_sign_detached_verify", params);
    }
    nacl_box_keypair() {
      return this.client.request("crypto.nacl_box_keypair");
    }
    nacl_box_keypair_from_secret_key(params) {
      return this.client.request("crypto.nacl_box_keypair_from_secret_key", params);
    }
    nacl_box(params) {
      return this.client.request("crypto.nacl_box", params);
    }
    nacl_box_open(params) {
      return this.client.request("crypto.nacl_box_open", params);
    }
    nacl_secret_box(params) {
      return this.client.request("crypto.nacl_secret_box", params);
    }
    nacl_secret_box_open(params) {
      return this.client.request("crypto.nacl_secret_box_open", params);
    }
    mnemonic_words(params) {
      return this.client.request("crypto.mnemonic_words", params);
    }
    mnemonic_from_random(params) {
      return this.client.request("crypto.mnemonic_from_random", params);
    }
    mnemonic_from_entropy(params) {
      return this.client.request("crypto.mnemonic_from_entropy", params);
    }
    mnemonic_verify(params) {
      return this.client.request("crypto.mnemonic_verify", params);
    }
    mnemonic_derive_sign_keys(params) {
      return this.client.request("crypto.mnemonic_derive_sign_keys", params);
    }
    hdkey_xprv_from_mnemonic(params) {
      return this.client.request("crypto.hdkey_xprv_from_mnemonic", params);
    }
    hdkey_derive_from_xprv(params) {
      return this.client.request("crypto.hdkey_derive_from_xprv", params);
    }
    hdkey_derive_from_xprv_path(params) {
      return this.client.request("crypto.hdkey_derive_from_xprv_path", params);
    }
    hdkey_secret_from_xprv(params) {
      return this.client.request("crypto.hdkey_secret_from_xprv", params);
    }
    hdkey_public_from_xprv(params) {
      return this.client.request("crypto.hdkey_public_from_xprv", params);
    }
    chacha20(params) {
      return this.client.request("crypto.chacha20", params);
    }
    register_signing_box(obj) {
      return this.client.request("crypto.register_signing_box", void 0, (params, responseType) => {
        if (responseType === 3) {
          dispatchAppSigningBox(obj, params.request_data, params.app_request_id, this.client);
        } else if (responseType === 4) {
          dispatchAppSigningBox(obj, params, null, this.client);
        }
      });
    }
    get_signing_box(params) {
      return this.client.request("crypto.get_signing_box", params);
    }
    signing_box_get_public_key(params) {
      return this.client.request("crypto.signing_box_get_public_key", params);
    }
    signing_box_sign(params) {
      return this.client.request("crypto.signing_box_sign", params);
    }
    remove_signing_box(params) {
      return this.client.request("crypto.remove_signing_box", params);
    }
    register_encryption_box(obj) {
      return this.client.request("crypto.register_encryption_box", void 0, (params, responseType) => {
        if (responseType === 3) {
          dispatchAppEncryptionBox(obj, params.request_data, params.app_request_id, this.client);
        } else if (responseType === 4) {
          dispatchAppEncryptionBox(obj, params, null, this.client);
        }
      });
    }
    remove_encryption_box(params) {
      return this.client.request("crypto.remove_encryption_box", params);
    }
    encryption_box_get_info(params) {
      return this.client.request("crypto.encryption_box_get_info", params);
    }
    encryption_box_encrypt(params) {
      return this.client.request("crypto.encryption_box_encrypt", params);
    }
    encryption_box_decrypt(params) {
      return this.client.request("crypto.encryption_box_decrypt", params);
    }
    create_encryption_box(params) {
      return this.client.request("crypto.create_encryption_box", params);
    }
  }
  exports.CryptoModule = CryptoModule;
  (function(AbiErrorCode) {
    AbiErrorCode[AbiErrorCode["RequiredAddressMissingForEncodeMessage"] = 301] = "RequiredAddressMissingForEncodeMessage";
    AbiErrorCode[AbiErrorCode["RequiredCallSetMissingForEncodeMessage"] = 302] = "RequiredCallSetMissingForEncodeMessage";
    AbiErrorCode[AbiErrorCode["InvalidJson"] = 303] = "InvalidJson";
    AbiErrorCode[AbiErrorCode["InvalidMessage"] = 304] = "InvalidMessage";
    AbiErrorCode[AbiErrorCode["EncodeDeployMessageFailed"] = 305] = "EncodeDeployMessageFailed";
    AbiErrorCode[AbiErrorCode["EncodeRunMessageFailed"] = 306] = "EncodeRunMessageFailed";
    AbiErrorCode[AbiErrorCode["AttachSignatureFailed"] = 307] = "AttachSignatureFailed";
    AbiErrorCode[AbiErrorCode["InvalidTvcImage"] = 308] = "InvalidTvcImage";
    AbiErrorCode[AbiErrorCode["RequiredPublicKeyMissingForFunctionHeader"] = 309] = "RequiredPublicKeyMissingForFunctionHeader";
    AbiErrorCode[AbiErrorCode["InvalidSigner"] = 310] = "InvalidSigner";
    AbiErrorCode[AbiErrorCode["InvalidAbi"] = 311] = "InvalidAbi";
    AbiErrorCode[AbiErrorCode["InvalidFunctionId"] = 312] = "InvalidFunctionId";
    AbiErrorCode[AbiErrorCode["InvalidData"] = 313] = "InvalidData";
    AbiErrorCode[AbiErrorCode["EncodeInitialDataFailed"] = 314] = "EncodeInitialDataFailed";
  })(exports.AbiErrorCode || (exports.AbiErrorCode = {}));
  function abiContract(value) {
    return {
      type: "Contract",
      value
    };
  }
  exports.abiContract = abiContract;
  function abiJson(value) {
    return {
      type: "Json",
      value
    };
  }
  exports.abiJson = abiJson;
  function abiHandle(value) {
    return {
      type: "Handle",
      value
    };
  }
  exports.abiHandle = abiHandle;
  function abiSerialized(value) {
    return {
      type: "Serialized",
      value
    };
  }
  exports.abiSerialized = abiSerialized;
  function signerNone() {
    return {
      type: "None"
    };
  }
  exports.signerNone = signerNone;
  function signerExternal(public_key) {
    return {
      type: "External",
      public_key
    };
  }
  exports.signerExternal = signerExternal;
  function signerKeys(keys) {
    return {
      type: "Keys",
      keys
    };
  }
  exports.signerKeys = signerKeys;
  function signerSigningBox(handle) {
    return {
      type: "SigningBox",
      handle
    };
  }
  exports.signerSigningBox = signerSigningBox;
  (function(MessageBodyType) {
    MessageBodyType["Input"] = "Input";
    MessageBodyType["Output"] = "Output";
    MessageBodyType["InternalOutput"] = "InternalOutput";
    MessageBodyType["Event"] = "Event";
  })(exports.MessageBodyType || (exports.MessageBodyType = {}));
  function stateInitSourceMessage(source) {
    return {
      type: "Message",
      source
    };
  }
  exports.stateInitSourceMessage = stateInitSourceMessage;
  function stateInitSourceStateInit(code, data, library) {
    return {
      type: "StateInit",
      code,
      data,
      library
    };
  }
  exports.stateInitSourceStateInit = stateInitSourceStateInit;
  function stateInitSourceTvc(tvc, public_key, init_params) {
    return {
      type: "Tvc",
      tvc,
      public_key,
      init_params
    };
  }
  exports.stateInitSourceTvc = stateInitSourceTvc;
  function messageSourceEncoded(message, abi) {
    return {
      type: "Encoded",
      message,
      abi
    };
  }
  exports.messageSourceEncoded = messageSourceEncoded;
  function messageSourceEncodingParams(params) {
    return Object.assign({ type: "EncodingParams" }, params);
  }
  exports.messageSourceEncodingParams = messageSourceEncodingParams;
  class AbiModule {
    constructor(client2) {
      this.client = client2;
    }
    encode_message_body(params) {
      return this.client.request("abi.encode_message_body", params);
    }
    attach_signature_to_message_body(params) {
      return this.client.request("abi.attach_signature_to_message_body", params);
    }
    encode_message(params) {
      return this.client.request("abi.encode_message", params);
    }
    encode_internal_message(params) {
      return this.client.request("abi.encode_internal_message", params);
    }
    attach_signature(params) {
      return this.client.request("abi.attach_signature", params);
    }
    decode_message(params) {
      return this.client.request("abi.decode_message", params);
    }
    decode_message_body(params) {
      return this.client.request("abi.decode_message_body", params);
    }
    encode_account(params) {
      return this.client.request("abi.encode_account", params);
    }
    decode_account_data(params) {
      return this.client.request("abi.decode_account_data", params);
    }
    update_initial_data(params) {
      return this.client.request("abi.update_initial_data", params);
    }
    decode_initial_data(params) {
      return this.client.request("abi.decode_initial_data", params);
    }
    decode_boc(params) {
      return this.client.request("abi.decode_boc", params);
    }
  }
  exports.AbiModule = AbiModule;
  function bocCacheTypePinned(pin) {
    return {
      type: "Pinned",
      pin
    };
  }
  exports.bocCacheTypePinned = bocCacheTypePinned;
  function bocCacheTypeUnpinned() {
    return {
      type: "Unpinned"
    };
  }
  exports.bocCacheTypeUnpinned = bocCacheTypeUnpinned;
  (function(BocErrorCode) {
    BocErrorCode[BocErrorCode["InvalidBoc"] = 201] = "InvalidBoc";
    BocErrorCode[BocErrorCode["SerializationError"] = 202] = "SerializationError";
    BocErrorCode[BocErrorCode["InappropriateBlock"] = 203] = "InappropriateBlock";
    BocErrorCode[BocErrorCode["MissingSourceBoc"] = 204] = "MissingSourceBoc";
    BocErrorCode[BocErrorCode["InsufficientCacheSize"] = 205] = "InsufficientCacheSize";
    BocErrorCode[BocErrorCode["BocRefNotFound"] = 206] = "BocRefNotFound";
    BocErrorCode[BocErrorCode["InvalidBocRef"] = 207] = "InvalidBocRef";
  })(exports.BocErrorCode || (exports.BocErrorCode = {}));
  function builderOpInteger(size, value) {
    return {
      type: "Integer",
      size,
      value
    };
  }
  exports.builderOpInteger = builderOpInteger;
  function builderOpBitString(value) {
    return {
      type: "BitString",
      value
    };
  }
  exports.builderOpBitString = builderOpBitString;
  function builderOpCell(builder) {
    return {
      type: "Cell",
      builder
    };
  }
  exports.builderOpCell = builderOpCell;
  function builderOpCellBoc(boc) {
    return {
      type: "CellBoc",
      boc
    };
  }
  exports.builderOpCellBoc = builderOpCellBoc;
  class BocModule {
    constructor(client2) {
      this.client = client2;
    }
    parse_message(params) {
      return this.client.request("boc.parse_message", params);
    }
    parse_transaction(params) {
      return this.client.request("boc.parse_transaction", params);
    }
    parse_account(params) {
      return this.client.request("boc.parse_account", params);
    }
    parse_block(params) {
      return this.client.request("boc.parse_block", params);
    }
    parse_shardstate(params) {
      return this.client.request("boc.parse_shardstate", params);
    }
    get_blockchain_config(params) {
      return this.client.request("boc.get_blockchain_config", params);
    }
    get_boc_hash(params) {
      return this.client.request("boc.get_boc_hash", params);
    }
    get_boc_depth(params) {
      return this.client.request("boc.get_boc_depth", params);
    }
    get_code_from_tvc(params) {
      return this.client.request("boc.get_code_from_tvc", params);
    }
    cache_get(params) {
      return this.client.request("boc.cache_get", params);
    }
    cache_set(params) {
      return this.client.request("boc.cache_set", params);
    }
    cache_unpin(params) {
      return this.client.request("boc.cache_unpin", params);
    }
    encode_boc(params) {
      return this.client.request("boc.encode_boc", params);
    }
    get_code_salt(params) {
      return this.client.request("boc.get_code_salt", params);
    }
    set_code_salt(params) {
      return this.client.request("boc.set_code_salt", params);
    }
    decode_tvc(params) {
      return this.client.request("boc.decode_tvc", params);
    }
    encode_tvc(params) {
      return this.client.request("boc.encode_tvc", params);
    }
    get_compiler_version(params) {
      return this.client.request("boc.get_compiler_version", params);
    }
  }
  exports.BocModule = BocModule;
  (function(ProcessingErrorCode) {
    ProcessingErrorCode[ProcessingErrorCode["MessageAlreadyExpired"] = 501] = "MessageAlreadyExpired";
    ProcessingErrorCode[ProcessingErrorCode["MessageHasNotDestinationAddress"] = 502] = "MessageHasNotDestinationAddress";
    ProcessingErrorCode[ProcessingErrorCode["CanNotBuildMessageCell"] = 503] = "CanNotBuildMessageCell";
    ProcessingErrorCode[ProcessingErrorCode["FetchBlockFailed"] = 504] = "FetchBlockFailed";
    ProcessingErrorCode[ProcessingErrorCode["SendMessageFailed"] = 505] = "SendMessageFailed";
    ProcessingErrorCode[ProcessingErrorCode["InvalidMessageBoc"] = 506] = "InvalidMessageBoc";
    ProcessingErrorCode[ProcessingErrorCode["MessageExpired"] = 507] = "MessageExpired";
    ProcessingErrorCode[ProcessingErrorCode["TransactionWaitTimeout"] = 508] = "TransactionWaitTimeout";
    ProcessingErrorCode[ProcessingErrorCode["InvalidBlockReceived"] = 509] = "InvalidBlockReceived";
    ProcessingErrorCode[ProcessingErrorCode["CanNotCheckBlockShard"] = 510] = "CanNotCheckBlockShard";
    ProcessingErrorCode[ProcessingErrorCode["BlockNotFound"] = 511] = "BlockNotFound";
    ProcessingErrorCode[ProcessingErrorCode["InvalidData"] = 512] = "InvalidData";
    ProcessingErrorCode[ProcessingErrorCode["ExternalSignerMustNotBeUsed"] = 513] = "ExternalSignerMustNotBeUsed";
  })(exports.ProcessingErrorCode || (exports.ProcessingErrorCode = {}));
  function processingEventWillFetchFirstBlock() {
    return {
      type: "WillFetchFirstBlock"
    };
  }
  exports.processingEventWillFetchFirstBlock = processingEventWillFetchFirstBlock;
  function processingEventFetchFirstBlockFailed(error) {
    return {
      type: "FetchFirstBlockFailed",
      error
    };
  }
  exports.processingEventFetchFirstBlockFailed = processingEventFetchFirstBlockFailed;
  function processingEventWillSend(shard_block_id, message_id, message) {
    return {
      type: "WillSend",
      shard_block_id,
      message_id,
      message
    };
  }
  exports.processingEventWillSend = processingEventWillSend;
  function processingEventDidSend(shard_block_id, message_id, message) {
    return {
      type: "DidSend",
      shard_block_id,
      message_id,
      message
    };
  }
  exports.processingEventDidSend = processingEventDidSend;
  function processingEventSendFailed(shard_block_id, message_id, message, error) {
    return {
      type: "SendFailed",
      shard_block_id,
      message_id,
      message,
      error
    };
  }
  exports.processingEventSendFailed = processingEventSendFailed;
  function processingEventWillFetchNextBlock(shard_block_id, message_id, message) {
    return {
      type: "WillFetchNextBlock",
      shard_block_id,
      message_id,
      message
    };
  }
  exports.processingEventWillFetchNextBlock = processingEventWillFetchNextBlock;
  function processingEventFetchNextBlockFailed(shard_block_id, message_id, message, error) {
    return {
      type: "FetchNextBlockFailed",
      shard_block_id,
      message_id,
      message,
      error
    };
  }
  exports.processingEventFetchNextBlockFailed = processingEventFetchNextBlockFailed;
  function processingEventMessageExpired(message_id, message, error) {
    return {
      type: "MessageExpired",
      message_id,
      message,
      error
    };
  }
  exports.processingEventMessageExpired = processingEventMessageExpired;
  class ProcessingModule {
    constructor(client2) {
      this.client = client2;
    }
    send_message(params, responseHandler) {
      return this.client.request("processing.send_message", params, responseHandler);
    }
    wait_for_transaction(params, responseHandler) {
      return this.client.request("processing.wait_for_transaction", params, responseHandler);
    }
    process_message(params, responseHandler) {
      return this.client.request("processing.process_message", params, responseHandler);
    }
  }
  exports.ProcessingModule = ProcessingModule;
  function addressStringFormatAccountId() {
    return {
      type: "AccountId"
    };
  }
  exports.addressStringFormatAccountId = addressStringFormatAccountId;
  function addressStringFormatHex() {
    return {
      type: "Hex"
    };
  }
  exports.addressStringFormatHex = addressStringFormatHex;
  function addressStringFormatBase64(url, test, bounce) {
    return {
      type: "Base64",
      url,
      test,
      bounce
    };
  }
  exports.addressStringFormatBase64 = addressStringFormatBase64;
  (function(AccountAddressType) {
    AccountAddressType["AccountId"] = "AccountId";
    AccountAddressType["Hex"] = "Hex";
    AccountAddressType["Base64"] = "Base64";
  })(exports.AccountAddressType || (exports.AccountAddressType = {}));
  class UtilsModule {
    constructor(client2) {
      this.client = client2;
    }
    convert_address(params) {
      return this.client.request("utils.convert_address", params);
    }
    get_address_type(params) {
      return this.client.request("utils.get_address_type", params);
    }
    calc_storage_fee(params) {
      return this.client.request("utils.calc_storage_fee", params);
    }
    compress_zstd(params) {
      return this.client.request("utils.compress_zstd", params);
    }
    decompress_zstd(params) {
      return this.client.request("utils.decompress_zstd", params);
    }
  }
  exports.UtilsModule = UtilsModule;
  (function(TvmErrorCode) {
    TvmErrorCode[TvmErrorCode["CanNotReadTransaction"] = 401] = "CanNotReadTransaction";
    TvmErrorCode[TvmErrorCode["CanNotReadBlockchainConfig"] = 402] = "CanNotReadBlockchainConfig";
    TvmErrorCode[TvmErrorCode["TransactionAborted"] = 403] = "TransactionAborted";
    TvmErrorCode[TvmErrorCode["InternalError"] = 404] = "InternalError";
    TvmErrorCode[TvmErrorCode["ActionPhaseFailed"] = 405] = "ActionPhaseFailed";
    TvmErrorCode[TvmErrorCode["AccountCodeMissing"] = 406] = "AccountCodeMissing";
    TvmErrorCode[TvmErrorCode["LowBalance"] = 407] = "LowBalance";
    TvmErrorCode[TvmErrorCode["AccountFrozenOrDeleted"] = 408] = "AccountFrozenOrDeleted";
    TvmErrorCode[TvmErrorCode["AccountMissing"] = 409] = "AccountMissing";
    TvmErrorCode[TvmErrorCode["UnknownExecutionError"] = 410] = "UnknownExecutionError";
    TvmErrorCode[TvmErrorCode["InvalidInputStack"] = 411] = "InvalidInputStack";
    TvmErrorCode[TvmErrorCode["InvalidAccountBoc"] = 412] = "InvalidAccountBoc";
    TvmErrorCode[TvmErrorCode["InvalidMessageType"] = 413] = "InvalidMessageType";
    TvmErrorCode[TvmErrorCode["ContractExecutionError"] = 414] = "ContractExecutionError";
  })(exports.TvmErrorCode || (exports.TvmErrorCode = {}));
  function accountForExecutorNone() {
    return {
      type: "None"
    };
  }
  exports.accountForExecutorNone = accountForExecutorNone;
  function accountForExecutorUninit() {
    return {
      type: "Uninit"
    };
  }
  exports.accountForExecutorUninit = accountForExecutorUninit;
  function accountForExecutorAccount(boc, unlimited_balance) {
    return {
      type: "Account",
      boc,
      unlimited_balance
    };
  }
  exports.accountForExecutorAccount = accountForExecutorAccount;
  class TvmModule {
    constructor(client2) {
      this.client = client2;
    }
    run_executor(params) {
      return this.client.request("tvm.run_executor", params);
    }
    run_tvm(params) {
      return this.client.request("tvm.run_tvm", params);
    }
    run_get(params) {
      return this.client.request("tvm.run_get", params);
    }
  }
  exports.TvmModule = TvmModule;
  (function(NetErrorCode) {
    NetErrorCode[NetErrorCode["QueryFailed"] = 601] = "QueryFailed";
    NetErrorCode[NetErrorCode["SubscribeFailed"] = 602] = "SubscribeFailed";
    NetErrorCode[NetErrorCode["WaitForFailed"] = 603] = "WaitForFailed";
    NetErrorCode[NetErrorCode["GetSubscriptionResultFailed"] = 604] = "GetSubscriptionResultFailed";
    NetErrorCode[NetErrorCode["InvalidServerResponse"] = 605] = "InvalidServerResponse";
    NetErrorCode[NetErrorCode["ClockOutOfSync"] = 606] = "ClockOutOfSync";
    NetErrorCode[NetErrorCode["WaitForTimeout"] = 607] = "WaitForTimeout";
    NetErrorCode[NetErrorCode["GraphqlError"] = 608] = "GraphqlError";
    NetErrorCode[NetErrorCode["NetworkModuleSuspended"] = 609] = "NetworkModuleSuspended";
    NetErrorCode[NetErrorCode["WebsocketDisconnected"] = 610] = "WebsocketDisconnected";
    NetErrorCode[NetErrorCode["NotSupported"] = 611] = "NotSupported";
    NetErrorCode[NetErrorCode["NoEndpointsProvided"] = 612] = "NoEndpointsProvided";
    NetErrorCode[NetErrorCode["GraphqlWebsocketInitError"] = 613] = "GraphqlWebsocketInitError";
    NetErrorCode[NetErrorCode["NetworkModuleResumed"] = 614] = "NetworkModuleResumed";
  })(exports.NetErrorCode || (exports.NetErrorCode = {}));
  (function(SortDirection) {
    SortDirection["ASC"] = "ASC";
    SortDirection["DESC"] = "DESC";
  })(exports.SortDirection || (exports.SortDirection = {}));
  function paramsOfQueryOperationQueryCollection(params) {
    return Object.assign({ type: "QueryCollection" }, params);
  }
  exports.paramsOfQueryOperationQueryCollection = paramsOfQueryOperationQueryCollection;
  function paramsOfQueryOperationWaitForCollection(params) {
    return Object.assign({ type: "WaitForCollection" }, params);
  }
  exports.paramsOfQueryOperationWaitForCollection = paramsOfQueryOperationWaitForCollection;
  function paramsOfQueryOperationAggregateCollection(params) {
    return Object.assign({ type: "AggregateCollection" }, params);
  }
  exports.paramsOfQueryOperationAggregateCollection = paramsOfQueryOperationAggregateCollection;
  function paramsOfQueryOperationQueryCounterparties(params) {
    return Object.assign({ type: "QueryCounterparties" }, params);
  }
  exports.paramsOfQueryOperationQueryCounterparties = paramsOfQueryOperationQueryCounterparties;
  (function(AggregationFn) {
    AggregationFn["COUNT"] = "COUNT";
    AggregationFn["MIN"] = "MIN";
    AggregationFn["MAX"] = "MAX";
    AggregationFn["SUM"] = "SUM";
    AggregationFn["AVERAGE"] = "AVERAGE";
  })(exports.AggregationFn || (exports.AggregationFn = {}));
  class NetModule {
    constructor(client2) {
      this.client = client2;
    }
    query(params) {
      return this.client.request("net.query", params);
    }
    batch_query(params) {
      return this.client.request("net.batch_query", params);
    }
    query_collection(params) {
      return this.client.request("net.query_collection", params);
    }
    aggregate_collection(params) {
      return this.client.request("net.aggregate_collection", params);
    }
    wait_for_collection(params) {
      return this.client.request("net.wait_for_collection", params);
    }
    unsubscribe(params) {
      return this.client.request("net.unsubscribe", params);
    }
    subscribe_collection(params, responseHandler) {
      return this.client.request("net.subscribe_collection", params, responseHandler);
    }
    suspend() {
      return this.client.request("net.suspend");
    }
    resume() {
      return this.client.request("net.resume");
    }
    find_last_shard_block(params) {
      return this.client.request("net.find_last_shard_block", params);
    }
    fetch_endpoints() {
      return this.client.request("net.fetch_endpoints");
    }
    set_endpoints(params) {
      return this.client.request("net.set_endpoints", params);
    }
    get_endpoints() {
      return this.client.request("net.get_endpoints");
    }
    query_counterparties(params) {
      return this.client.request("net.query_counterparties", params);
    }
    query_transaction_tree(params) {
      return this.client.request("net.query_transaction_tree", params);
    }
    create_block_iterator(params) {
      return this.client.request("net.create_block_iterator", params);
    }
    resume_block_iterator(params) {
      return this.client.request("net.resume_block_iterator", params);
    }
    create_transaction_iterator(params) {
      return this.client.request("net.create_transaction_iterator", params);
    }
    resume_transaction_iterator(params) {
      return this.client.request("net.resume_transaction_iterator", params);
    }
    iterator_next(params) {
      return this.client.request("net.iterator_next", params);
    }
    remove_iterator(params) {
      return this.client.request("net.remove_iterator", params);
    }
  }
  exports.NetModule = NetModule;
  (function(DebotErrorCode) {
    DebotErrorCode[DebotErrorCode["DebotStartFailed"] = 801] = "DebotStartFailed";
    DebotErrorCode[DebotErrorCode["DebotFetchFailed"] = 802] = "DebotFetchFailed";
    DebotErrorCode[DebotErrorCode["DebotExecutionFailed"] = 803] = "DebotExecutionFailed";
    DebotErrorCode[DebotErrorCode["DebotInvalidHandle"] = 804] = "DebotInvalidHandle";
    DebotErrorCode[DebotErrorCode["DebotInvalidJsonParams"] = 805] = "DebotInvalidJsonParams";
    DebotErrorCode[DebotErrorCode["DebotInvalidFunctionId"] = 806] = "DebotInvalidFunctionId";
    DebotErrorCode[DebotErrorCode["DebotInvalidAbi"] = 807] = "DebotInvalidAbi";
    DebotErrorCode[DebotErrorCode["DebotGetMethodFailed"] = 808] = "DebotGetMethodFailed";
    DebotErrorCode[DebotErrorCode["DebotInvalidMsg"] = 809] = "DebotInvalidMsg";
    DebotErrorCode[DebotErrorCode["DebotExternalCallFailed"] = 810] = "DebotExternalCallFailed";
    DebotErrorCode[DebotErrorCode["DebotBrowserCallbackFailed"] = 811] = "DebotBrowserCallbackFailed";
    DebotErrorCode[DebotErrorCode["DebotOperationRejected"] = 812] = "DebotOperationRejected";
  })(exports.DebotErrorCode || (exports.DebotErrorCode = {}));
  function debotActivityTransaction(msg, dst, out, fee, setcode, signkey, signing_box_handle) {
    return {
      type: "Transaction",
      msg,
      dst,
      out,
      fee,
      setcode,
      signkey,
      signing_box_handle
    };
  }
  exports.debotActivityTransaction = debotActivityTransaction;
  function paramsOfAppDebotBrowserLog(msg) {
    return {
      type: "Log",
      msg
    };
  }
  exports.paramsOfAppDebotBrowserLog = paramsOfAppDebotBrowserLog;
  function paramsOfAppDebotBrowserSwitch(context_id) {
    return {
      type: "Switch",
      context_id
    };
  }
  exports.paramsOfAppDebotBrowserSwitch = paramsOfAppDebotBrowserSwitch;
  function paramsOfAppDebotBrowserSwitchCompleted() {
    return {
      type: "SwitchCompleted"
    };
  }
  exports.paramsOfAppDebotBrowserSwitchCompleted = paramsOfAppDebotBrowserSwitchCompleted;
  function paramsOfAppDebotBrowserShowAction(action) {
    return {
      type: "ShowAction",
      action
    };
  }
  exports.paramsOfAppDebotBrowserShowAction = paramsOfAppDebotBrowserShowAction;
  function paramsOfAppDebotBrowserInput(prompt) {
    return {
      type: "Input",
      prompt
    };
  }
  exports.paramsOfAppDebotBrowserInput = paramsOfAppDebotBrowserInput;
  function paramsOfAppDebotBrowserGetSigningBox() {
    return {
      type: "GetSigningBox"
    };
  }
  exports.paramsOfAppDebotBrowserGetSigningBox = paramsOfAppDebotBrowserGetSigningBox;
  function paramsOfAppDebotBrowserInvokeDebot(debot_addr, action) {
    return {
      type: "InvokeDebot",
      debot_addr,
      action
    };
  }
  exports.paramsOfAppDebotBrowserInvokeDebot = paramsOfAppDebotBrowserInvokeDebot;
  function paramsOfAppDebotBrowserSend(message) {
    return {
      type: "Send",
      message
    };
  }
  exports.paramsOfAppDebotBrowserSend = paramsOfAppDebotBrowserSend;
  function paramsOfAppDebotBrowserApprove(activity) {
    return {
      type: "Approve",
      activity
    };
  }
  exports.paramsOfAppDebotBrowserApprove = paramsOfAppDebotBrowserApprove;
  function resultOfAppDebotBrowserInput(value) {
    return {
      type: "Input",
      value
    };
  }
  exports.resultOfAppDebotBrowserInput = resultOfAppDebotBrowserInput;
  function resultOfAppDebotBrowserGetSigningBox(signing_box) {
    return {
      type: "GetSigningBox",
      signing_box
    };
  }
  exports.resultOfAppDebotBrowserGetSigningBox = resultOfAppDebotBrowserGetSigningBox;
  function resultOfAppDebotBrowserInvokeDebot() {
    return {
      type: "InvokeDebot"
    };
  }
  exports.resultOfAppDebotBrowserInvokeDebot = resultOfAppDebotBrowserInvokeDebot;
  function resultOfAppDebotBrowserApprove(approved) {
    return {
      type: "Approve",
      approved
    };
  }
  exports.resultOfAppDebotBrowserApprove = resultOfAppDebotBrowserApprove;
  function dispatchAppDebotBrowser(obj, params, app_request_id, client2) {
    return __awaiter2(this, void 0, void 0, function* () {
      try {
        let result = {};
        switch (params.type) {
          case "Log":
            obj.log(params);
            break;
          case "Switch":
            obj.switch(params);
            break;
          case "SwitchCompleted":
            obj.switch_completed();
            break;
          case "ShowAction":
            obj.show_action(params);
            break;
          case "Input":
            result = yield obj.input(params);
            break;
          case "GetSigningBox":
            result = yield obj.get_signing_box();
            break;
          case "InvokeDebot":
            yield obj.invoke_debot(params);
            break;
          case "Send":
            obj.send(params);
            break;
          case "Approve":
            result = yield obj.approve(params);
            break;
        }
        client2.resolve_app_request(app_request_id, Object.assign({ type: params.type }, result));
      } catch (error) {
        client2.reject_app_request(app_request_id, error);
      }
    });
  }
  class DebotModule {
    constructor(client2) {
      this.client = client2;
    }
    init(params, obj) {
      return this.client.request("debot.init", params, (params2, responseType) => {
        if (responseType === 3) {
          dispatchAppDebotBrowser(obj, params2.request_data, params2.app_request_id, this.client);
        } else if (responseType === 4) {
          dispatchAppDebotBrowser(obj, params2, null, this.client);
        }
      });
    }
    start(params) {
      return this.client.request("debot.start", params);
    }
    fetch(params) {
      return this.client.request("debot.fetch", params);
    }
    execute(params) {
      return this.client.request("debot.execute", params);
    }
    send(params) {
      return this.client.request("debot.send", params);
    }
    remove(params) {
      return this.client.request("debot.remove", params);
    }
  }
  exports.DebotModule = DebotModule;
  (function(ProofsErrorCode) {
    ProofsErrorCode[ProofsErrorCode["InvalidData"] = 901] = "InvalidData";
    ProofsErrorCode[ProofsErrorCode["ProofCheckFailed"] = 902] = "ProofCheckFailed";
    ProofsErrorCode[ProofsErrorCode["InternalError"] = 903] = "InternalError";
    ProofsErrorCode[ProofsErrorCode["DataDiffersFromProven"] = 904] = "DataDiffersFromProven";
  })(exports.ProofsErrorCode || (exports.ProofsErrorCode = {}));
  class ProofsModule {
    constructor(client2) {
      this.client = client2;
    }
    proof_block_data(params) {
      return this.client.request("proofs.proof_block_data", params);
    }
    proof_transaction_data(params) {
      return this.client.request("proofs.proof_transaction_data", params);
    }
  }
  exports.ProofsModule = ProofsModule;
})(modules);
var client = {};
var bin = {};
var errors = {};
Object.defineProperty(errors, "__esModule", { value: true });
errors.TonClientError = void 0;
class TonClientError extends Error {
  constructor(code, message, data) {
    super(message);
    this.code = code;
    this.data = data;
  }
}
errors.TonClientError = TonClientError;
(function(exports) {
  var __awaiter2 = commonjsGlobal$1 && commonjsGlobal$1.__awaiter || function(thisArg, _arguments, P2, generator) {
    function adopt(value) {
      return value instanceof P2 ? value : new P2(function(resolve) {
        resolve(value);
      });
    }
    return new (P2 || (P2 = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e2) {
          reject(e2);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e2) {
          reject(e2);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CommonBinaryBridge = exports.useLibrary = exports.getBridge = exports.ResponseType = void 0;
  const errors_1 = errors;
  var ResponseType;
  (function(ResponseType2) {
    ResponseType2[ResponseType2["Success"] = 0] = "Success";
    ResponseType2[ResponseType2["Error"] = 1] = "Error";
    ResponseType2[ResponseType2["Nop"] = 2] = "Nop";
    ResponseType2[ResponseType2["AppRequest"] = 3] = "AppRequest";
    ResponseType2[ResponseType2["AppNotify"] = 4] = "AppNotify";
    ResponseType2[ResponseType2["Custom"] = 100] = "Custom";
  })(ResponseType = exports.ResponseType || (exports.ResponseType = {}));
  let bridge = void 0;
  function getBridge() {
    if (!bridge) {
      throw new errors_1.TonClientError(1, "TON Client binary bridge isn't set.");
    }
    return bridge;
  }
  exports.getBridge = getBridge;
  function useLibrary(loader) {
    if ("createContext" in loader) {
      bridge = loader;
    } else {
      bridge = new CommonBinaryBridge(loader);
    }
  }
  exports.useLibrary = useLibrary;
  class BinaryLibraryAdapter {
    constructor(library) {
      this.library = library;
    }
    setResponseParamsHandler(handler) {
      if (handler === void 0) {
        this.library.setResponseHandler(void 0);
      } else {
        this.library.setResponseHandler((requestId, paramsJson, responseType, finished) => handler(requestId, paramsJson !== "" ? JSON.parse(paramsJson) : void 0, responseType, finished));
      }
    }
    sendRequestParams(context2, requestId, functionName, functionParams) {
      const paramsJson = functionParams === void 0 || functionParams === null ? "" : JSON.stringify(functionParams, (_, value) => typeof value === "bigint" ? value < Number.MAX_SAFE_INTEGER && value > Number.MIN_SAFE_INTEGER ? Number(value) : value.toString() : value);
      this.library.sendRequest(context2, requestId, functionName, paramsJson);
    }
    createContext(configJson) {
      return this.library.createContext(configJson);
    }
    destroyContext(context2) {
      this.library.destroyContext(context2);
    }
  }
  class CommonBinaryBridge {
    constructor(loader) {
      this.loading = void 0;
      this.loadError = void 0;
      this.library = void 0;
      this.requests = new Map();
      this.nextRequestId = 1;
      this.contextCount = 0;
      this.responseHandlerAssigned = false;
      this.loading = [];
      loader().then((library, error) => {
        const saveLoading = this.loading;
        this.loading = void 0;
        if (library) {
          let libraryWithParams = "setResponseParamsHandler" in library ? library : new BinaryLibraryAdapter(library);
          this.library = libraryWithParams;
          saveLoading === null || saveLoading === void 0 ? void 0 : saveLoading.forEach((x) => x.resolve(libraryWithParams));
        } else {
          this.loadError = error !== null && error !== void 0 ? error : void 0;
          saveLoading === null || saveLoading === void 0 ? void 0 : saveLoading.forEach((x) => x.reject(error));
        }
      });
    }
    checkResponseHandler() {
      var _a, _b;
      const mustBeAssigned = this.contextCount > 0 || this.requests.size > 0;
      if (this.responseHandlerAssigned !== mustBeAssigned) {
        if (mustBeAssigned) {
          (_a = this.library) === null || _a === void 0 ? void 0 : _a.setResponseParamsHandler((requestId, params, responseType, finished) => this.handleLibraryResponse(requestId, params, responseType, finished));
        } else {
          (_b = this.library) === null || _b === void 0 ? void 0 : _b.setResponseParamsHandler();
        }
        this.responseHandlerAssigned = mustBeAssigned;
      }
    }
    createContext(config) {
      return __awaiter2(this, void 0, void 0, function* () {
        const lib2 = this.library || (yield this.loadRequired());
        this.contextCount += 1;
        return CommonBinaryBridge.parseResult(yield lib2.createContext(JSON.stringify(config)));
      });
    }
    destroyContext(context2) {
      var _a;
      this.contextCount = Math.max(this.contextCount - 1, 0);
      this.checkResponseHandler();
      (_a = this.library) === null || _a === void 0 ? void 0 : _a.destroyContext(context2);
    }
    request(context2, functionName, functionParams, responseHandler) {
      var _a;
      return __awaiter2(this, void 0, void 0, function* () {
        const lib2 = (_a = this.library) !== null && _a !== void 0 ? _a : yield this.loadRequired();
        return new Promise((resolve, reject) => {
          const request = {
            resolve,
            reject,
            responseHandler
          };
          const requestId = this.generateRequestId();
          this.requests.set(requestId, request);
          this.checkResponseHandler();
          lib2.sendRequestParams(context2, requestId, functionName, functionParams);
        });
      });
    }
    loadRequired() {
      if (this.library !== void 0) {
        return Promise.resolve(this.library);
      }
      if (this.loadError !== void 0) {
        return Promise.reject(this.loadError);
      }
      if (this.loading === void 0) {
        return Promise.reject(new errors_1.TonClientError(1, "TON Client binary library isn't set."));
      }
      return new Promise((resolve, reject) => {
        var _a;
        (_a = this.loading) === null || _a === void 0 ? void 0 : _a.push({
          resolve,
          reject
        });
      });
    }
    generateRequestId() {
      const id2 = this.nextRequestId;
      do {
        this.nextRequestId += 1;
        if (this.nextRequestId >= Number.MAX_SAFE_INTEGER) {
          this.nextRequestId = 1;
        }
      } while (this.requests.has(this.nextRequestId));
      return id2;
    }
    handleLibraryResponse(requestId, params, responseType, finished) {
      const request = this.requests.get(requestId);
      if (!request) {
        return;
      }
      if (finished) {
        this.requests.delete(requestId);
        this.checkResponseHandler();
      }
      switch (responseType) {
        case ResponseType.Success:
          request.resolve(params);
          break;
        case ResponseType.Error:
          request.reject(params);
          break;
        default:
          const isAppObjectOrCustom = responseType === ResponseType.AppNotify || responseType === ResponseType.AppRequest || responseType >= ResponseType.Custom;
          if (isAppObjectOrCustom && request.responseHandler) {
            request.responseHandler(params, responseType);
          }
      }
    }
    static parseResult(resultJson) {
      const result = JSON.parse(resultJson);
      if ("error" in result) {
        throw new errors_1.TonClientError(result.error.code, result.error.message, result.error.data);
      }
      return result.result;
    }
  }
  exports.CommonBinaryBridge = CommonBinaryBridge;
})(bin);
var __awaiter = commonjsGlobal$1 && commonjsGlobal$1.__awaiter || function(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(client, "__esModule", { value: true });
client.TonClient = void 0;
const modules_1 = modules;
const bin_1 = bin;
class TonClient$1 {
  constructor(config) {
    this.context = null;
    this.config = config !== null && config !== void 0 ? config : {};
    this.client = new modules_1.ClientModule(this);
    this.crypto = new modules_1.CryptoModule(this);
    this.abi = new modules_1.AbiModule(this);
    this.boc = new modules_1.BocModule(this);
    this.processing = new modules_1.ProcessingModule(this);
    this.utils = new modules_1.UtilsModule(this);
    this.net = new modules_1.NetModule(this);
    this.tvm = new modules_1.TvmModule(this);
    this.proofs = new modules_1.ProofsModule(this);
  }
  static set default(client2) {
    this._default = client2;
  }
  static get default() {
    if (this._default === null) {
      this._default = new TonClient$1(this._defaultConfig);
    }
    return this._default;
  }
  static set defaultConfig(config) {
    this._defaultConfig = config;
  }
  static get defaultConfig() {
    return this._defaultConfig;
  }
  static useBinaryLibrary(loader) {
    (0, bin_1.useLibrary)(loader);
  }
  static toKey(d2) {
    return toHex(d2, 256);
  }
  static toHash64(d2) {
    return toHex(d2, 64);
  }
  static toHash128(d2) {
    return toHex(d2, 128);
  }
  static toHash256(d2) {
    return toHex(d2, 256);
  }
  static toHash512(d2) {
    return toHex(d2, 512);
  }
  static toHex(dec, bits = 0) {
    return toHex(dec, bits);
  }
  close() {
    const context2 = this.context;
    if (context2 !== null) {
      this.context = null;
      (0, bin_1.getBridge)().destroyContext(context2);
    }
  }
  resolveError(functionName, params, err) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
      if (err.code !== 23 || !((_a = err.data) === null || _a === void 0 ? void 0 : _a.suggest_use_helper_for)) {
        return err;
      }
      try {
        let walkParameters = function(valueTypeInfo, value, path) {
          switch (valueTypeInfo.type) {
            case "Array":
              if (Array.isArray(value)) {
                value.forEach((v2) => walkParameters(valueTypeInfo.array_item, v2, `${path}[i]`));
              }
              break;
            case "Struct":
              valueTypeInfo.struct_fields.forEach((sf2) => walkParameters(sf2, value[sf2.name], path ? `${path}.${sf2.name}` : sf2.name));
              break;
            case "Optional":
              if (value) {
                walkParameters(valueTypeInfo.optional_inner, value, path);
              }
              break;
            case "Ref":
              if (valueTypeInfo.ref_name != "Value" && valueTypeInfo.ref_name != "API" && valueTypeInfo.ref_name != "AbiParam") {
                walkParameters(allTypesDict[valueTypeInfo.ref_name], value, path);
              }
              break;
            case "EnumOfTypes":
              if (valueTypeInfo.enum_types.some((et) => et.name == value.type)) {
                return;
              }
              let parameterName = valueTypeInfo.name.toLowerCase();
              let helperFunctions = [];
              valueTypeInfo.enum_types.forEach((et) => helperFunctions.push(parameterName + et.name));
              err.message = `Consider using one of the helper methods (${helperFunctions.join(", ")}) for the "${path}" parameter
` + err.message;
              break;
            default:
              break;
          }
        };
        const [modName, funcName] = functionName.split(".");
        const api2 = (yield this.client.get_api_reference()).api;
        const allTypesArray = api2.modules.reduce((accumulator, element) => accumulator.concat(element.types), []);
        const allTypesDict = {};
        allTypesArray.forEach((element) => allTypesDict[element.name] = element);
        const module = api2.modules.find((x) => x.name === modName);
        const func = module.functions.find((x) => x.name === funcName);
        const param = func.params[1];
        if (!param || param.generic_name == "AppObject") {
          return err;
        }
        const paramTypeInfo = allTypesDict[param.ref_name];
        walkParameters(paramTypeInfo, params, "");
      } catch (e2) {
        err.message = (_b = e2.message) !== null && _b !== void 0 ? _b : `${e2}`;
      }
      return err;
    });
  }
  request(functionName, functionParams, responseHandler) {
    return __awaiter(this, void 0, void 0, function* () {
      let context2;
      if (this.context !== null) {
        context2 = this.context;
      } else {
        context2 = yield (0, bin_1.getBridge)().createContext(this.config);
        this.context = context2;
      }
      return (0, bin_1.getBridge)().request(context2, functionName, functionParams, responseHandler !== null && responseHandler !== void 0 ? responseHandler : () => {
      }).catch((reason) => __awaiter(this, void 0, void 0, function* () {
        throw yield this.resolveError(functionName, functionParams, reason);
      }));
    });
  }
  resolve_app_request(app_request_id, result) {
    return __awaiter(this, void 0, void 0, function* () {
      if (app_request_id) {
        yield this.client.resolve_app_request({
          app_request_id,
          result: {
            type: "Ok",
            result
          }
        });
      }
    });
  }
  reject_app_request(app_request_id, error) {
    return __awaiter(this, void 0, void 0, function* () {
      if (app_request_id) {
        yield this.client.resolve_app_request({
          app_request_id,
          result: {
            type: "Error",
            text: error.message
          }
        });
      }
    });
  }
}
client.TonClient = TonClient$1;
TonClient$1._defaultConfig = {};
TonClient$1._default = null;
function toHex(value, bits) {
  let hex;
  if (typeof value === "number" || typeof value === "bigint") {
    hex = value.toString(16);
  } else if (typeof value === "string") {
    if (value.startsWith("0x")) {
      hex = value.substr(2);
    } else {
      hex = decToHex(value);
    }
  } else {
    hex = value.toString();
  }
  let len = bits / 4;
  while (hex.length > len && hex.startsWith("0")) {
    hex = hex.substr(1);
  }
  return hex.padStart(len, "0");
}
function decToHex(dec) {
  var _a;
  let bigNum = [];
  for (let i = 0; i < dec.length; i += 1) {
    const d2 = ((_a = dec.codePointAt(i)) !== null && _a !== void 0 ? _a : 0) - 48;
    const mul8 = shl(bigNum, 3);
    const mul2 = shl(bigNum, 1);
    const mul10 = add(mul8, mul2);
    bigNum = add(mul10, [d2]);
  }
  let hex = "";
  for (let i = bigNum.length - 1; i >= 0; i -= 1) {
    hex += bigNum[i].toString(16).padStart(4, "0");
  }
  return hex;
}
function shl(bigNum, bits) {
  let rest = 0;
  const result = [];
  for (let i = 0; i < bigNum.length; i += 1) {
    let v2 = (bigNum[i] << bits) + rest;
    result.push(v2 & 65535);
    rest = v2 >> 16 & 65535;
  }
  if (rest > 0) {
    result.push(rest);
  }
  return result;
}
function add(a, b2) {
  let rest = 0;
  const result = [];
  const len = Math.max(a.length, b2.length);
  for (let i = 0; i < len; i += 1) {
    let v2 = (i < a.length ? a[i] : 0) + (i < b2.length ? b2[i] : 0) + rest;
    result.push(v2 & 65535);
    rest = v2 >> 16 & 65535;
  }
  if (rest > 0) {
    result.push(rest);
  }
  return result;
}
(function(exports) {
  var __createBinding = commonjsGlobal$1 && commonjsGlobal$1.__createBinding || (Object.create ? function(o, m2, k2, k22) {
    if (k22 === void 0)
      k22 = k2;
    Object.defineProperty(o, k22, { enumerable: true, get: function() {
      return m2[k2];
    } });
  } : function(o, m2, k2, k22) {
    if (k22 === void 0)
      k22 = k2;
    o[k22] = m2[k2];
  });
  var __exportStar = commonjsGlobal$1 && commonjsGlobal$1.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(modules, exports);
  __exportStar(client, exports);
})(dist$1);
const workerScript = `let wasm;

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

let cachegetFloat64Memory0 = null;
function getFloat64Memory0() {
    if (cachegetFloat64Memory0 === null || cachegetFloat64Memory0.buffer !== wasm.memory.buffer) {
        cachegetFloat64Memory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachegetFloat64Memory0;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  \`\${val}\`;
    }
    if (type == 'string') {
        return \`"\${val}"\`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return \`Symbol(\${description})\`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return \`Function(\${name})\`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of \`val\`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return \`\${val.name}: \${val.message}\\n\${val.stack}\`;
    }
    // TODO we could test for more things here, like \`Set\`s and \`Map\`s.
    return className;
}

function makeClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        try {
            return f(state.a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_2.get(state.dtor)(state.a, state.b);
                state.a = 0;

            }
        }
    };
    real.original = state;

    return real;
}
function __wbg_adapter_36(arg0, arg1) {
    wasm._dyn_core__ops__function__Fn_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1fa6f697486a56a1(arg0, arg1);
}

function __wbg_adapter_39(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha32dc3f79a57c2cd(arg0, arg1, addHeapObject(arg2));
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);

            } else {
                state.a = a;
            }
        }
    };
    real.original = state;

    return real;
}
function __wbg_adapter_42(arg0, arg1) {
    wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd9a0b6f4cca32007(arg0, arg1);
}

function __wbg_adapter_45(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hae514c21aae774ce(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_48(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h19e3fec1e61ad903(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_51(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hfae40d9031478a98(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_54(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h19330f2e7f5e7964(arg0, arg1, addHeapObject(arg2));
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
/**
* @param {string} config_json
* @returns {string}
*/
function core_create_context(config_json) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = passStringToWasm0(config_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.core_create_context(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(r0, r1);
    }
}

/**
* @param {number} context
*/
function core_destroy_context(context) {
    wasm.core_destroy_context(context);
}

/**
* @param {number} context
* @param {string} function_name
* @param {any} params
* @param {number} request_id
*/
function core_request(context, function_name, params, request_id) {
    var ptr0 = passStringToWasm0(function_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    wasm.core_request(context, ptr0, len0, addHeapObject(params), request_id);
}

async function load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

async function init(input) {
    if (typeof input === 'undefined') {    }
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_new_342a24ca698edd87 = function(arg0, arg1) {
        var ret = new Error(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        var ret = getStringFromWasm0(arg0, arg1);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_memory = function() {
        var ret = wasm.memory;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_buffer_397eaa4d72ee94dd = function(arg0) {
        var ret = getObject(arg0).buffer;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_newwithbyteoffsetandlength_4b9b8c4e3f5adbff = function(arg0, arg1, arg2) {
        var ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbg_newwithlength_75ee2b96c288e6bc = function(arg0) {
        var ret = new Array(arg0 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_1820441f7fb79aad = function(arg0, arg1, arg2) {
        getObject(arg0)[arg1 >>> 0] = takeObject(arg2);
    };
    imports.wbg.__wbg_newwithu8arraysequence_e3572952e11d9ef1 = function() { return handleError(function (arg0) {
        var ret = new Blob(getObject(arg0));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_instanceof_ArrayBuffer_764b6d4119231cb3 = function(arg0) {
        var ret = getObject(arg0) instanceof ArrayBuffer;
        return ret;
    };
    imports.wbg.__wbindgen_is_object = function(arg0) {
        const val = getObject(arg0);
        var ret = typeof(val) === 'object' && val !== null;
        return ret;
    };
    imports.wbg.__wbg_new_a7ce447f15ff496f = function(arg0) {
        var ret = new Uint8Array(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
        var ret = getObject(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_keys_d04c3f75630840d9 = function(arg0) {
        var ret = Object.keys(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_length_42e02f5a04d67464 = function(arg0) {
        var ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbg_get_67189fe0b323d288 = function(arg0, arg1) {
        var ret = getObject(arg0)[arg1 >>> 0];
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
        const obj = getObject(arg1);
        var ret = typeof(obj) === 'string' ? obj : undefined;
        var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_new0_fd3a3a290b25cdac = function() {
        var ret = new Date();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getTime_10d33f4f2959e5dd = function(arg0) {
        var ret = getObject(arg0).getTime();
        return ret;
    };
    imports.wbg.__wbg_target_cc69dde6c2d9ec90 = function(arg0) {
        var ret = getObject(arg0).target;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_item_d484f20b1661eb1a = function(arg0, arg1, arg2) {
        var ret = getObject(arg1).item(arg2 >>> 0);
        var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_objectStore_c94a6ee2208cf88e = function() { return handleError(function (arg0, arg1, arg2) {
        var ret = getObject(arg0).objectStore(getStringFromWasm0(arg1, arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_readyState_4a1f107ba6e1bba7 = function(arg0) {
        var ret = getObject(arg0).readyState;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_setonsuccess_d00fc7d1a2cdf06b = function(arg0, arg1) {
        getObject(arg0).onsuccess = getObject(arg1);
    };
    imports.wbg.__wbg_setonerror_eb65293e086348c9 = function(arg0, arg1) {
        getObject(arg0).onerror = getObject(arg1);
    };
    imports.wbg.__wbg_transaction_be883c58674a5b6f = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        var ret = getObject(arg0).transaction(getStringFromWasm0(arg1, arg2), takeObject(arg3));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_setoncomplete_24bfa579663d2a14 = function(arg0, arg1) {
        getObject(arg0).oncomplete = getObject(arg1);
    };
    imports.wbg.__wbg_setonerror_d82a816c9a57e04d = function(arg0, arg1) {
        getObject(arg0).onerror = getObject(arg1);
    };
    imports.wbg.__wbg_setonabort_8803e75b6faf7afa = function(arg0, arg1) {
        getObject(arg0).onabort = getObject(arg1);
    };
    imports.wbg.__wbindgen_cb_drop = function(arg0) {
        const obj = takeObject(arg0).original;
        if (obj.cnt-- == 1) {
            obj.a = 0;
            return true;
        }
        var ret = false;
        return ret;
    };
    imports.wbg.__wbg_next_7720502039b96d00 = function() { return handleError(function (arg0) {
        var ret = getObject(arg0).next();
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_done_b06cf0578e89ff68 = function(arg0) {
        var ret = getObject(arg0).done;
        return ret;
    };
    imports.wbg.__wbg_value_e74a542443d92451 = function(arg0) {
        var ret = getObject(arg0).value;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_iterator_4fc4ce93e6b92958 = function() {
        var ret = Symbol.iterator;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_function = function(arg0) {
        var ret = typeof(getObject(arg0)) === 'function';
        return ret;
    };
    imports.wbg.__wbg_call_888d259a5fefc347 = function() { return handleError(function (arg0, arg1) {
        var ret = getObject(arg0).call(getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_next_c4151d46d5fa7097 = function(arg0) {
        var ret = getObject(arg0).next;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_self_c6fbdfc2918d5e58 = function() { return handleError(function () {
        var ret = self.self;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_window_baec038b5ab35c54 = function() { return handleError(function () {
        var ret = window.window;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_globalThis_3f735a5746d41fbd = function() { return handleError(function () {
        var ret = globalThis.globalThis;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_global_1bc0b39582740e95 = function() { return handleError(function () {
        var ret = global.global;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
        var ret = getObject(arg0) === undefined;
        return ret;
    };
    imports.wbg.__wbg_newnoargs_be86524d73f67598 = function(arg0, arg1) {
        var ret = new Function(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_969ad0a60e51d320 = function(arg0, arg1, arg2) {
        getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    };
    imports.wbg.__wbg_length_1eb8fc608a0d4cdb = function(arg0) {
        var ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbg_get_4d0f21c2f823742e = function() { return handleError(function (arg0, arg1) {
        var ret = Reflect.get(getObject(arg0), getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_set_82a4e8a85e31ac42 = function() { return handleError(function (arg0, arg1, arg2) {
        var ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_stringify_d4507a59932eed0c = function() { return handleError(function (arg0) {
        var ret = JSON.stringify(getObject(arg0));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_self_86b4b13392c7af56 = function() { return handleError(function () {
        var ret = self.self;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_crypto_b8c92eaac23d0d80 = function(arg0) {
        var ret = getObject(arg0).crypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_msCrypto_9ad6677321a08dd8 = function(arg0) {
        var ret = getObject(arg0).msCrypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_static_accessor_MODULE_452b4680e8614c81 = function() {
        var ret = module;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_require_f5521a5b85ad2542 = function(arg0, arg1, arg2) {
        var ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getRandomValues_dd27e6b0652b3236 = function(arg0) {
        var ret = getObject(arg0).getRandomValues;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_newwithlength_929232475839a482 = function(arg0) {
        var ret = new Uint8Array(arg0 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_randomFillSync_d2ba53160aec6aba = function(arg0, arg1, arg2) {
        getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
    };
    imports.wbg.__wbg_subarray_8b658422a224f479 = function(arg0, arg1, arg2) {
        var ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getRandomValues_e57c9b75ddead065 = function(arg0, arg1) {
        getObject(arg0).getRandomValues(getObject(arg1));
    };
    imports.wbg.__wbindgen_number_new = function(arg0) {
        var ret = arg0;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_null = function(arg0) {
        var ret = getObject(arg0) === null;
        return ret;
    };
    imports.wbg.__wbindgen_boolean_get = function(arg0) {
        const v = getObject(arg0);
        var ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
        return ret;
    };
    imports.wbg.__wbindgen_number_get = function(arg0, arg1) {
        const obj = getObject(arg1);
        var ret = typeof(obj) === 'number' ? obj : undefined;
        getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
        getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
    };
    imports.wbg.__wbg_instanceof_Uint8Array_08a1f3a179095e76 = function(arg0) {
        var ret = getObject(arg0) instanceof Uint8Array;
        return ret;
    };
    imports.wbg.__wbg_String_c8baaa0740def8c6 = function(arg0, arg1) {
        var ret = String(getObject(arg1));
        var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_setTimeout_df66d951b1726b78 = function() { return handleError(function (arg0, arg1, arg2) {
        var ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_clearTimeout_2c1ba0016d8bca41 = function(arg0, arg1) {
        getObject(arg0).clearTimeout(arg1);
    };
    imports.wbg.__wbg_new_0b83d3df67ecb33e = function() {
        var ret = new Object();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_newwithstrandinit_9b0fa00478c37287 = function() { return handleError(function (arg0, arg1, arg2) {
        var ret = new Request(getStringFromWasm0(arg0, arg1), getObject(arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_headers_4764f5445b6a6c89 = function(arg0) {
        var ret = getObject(arg0).headers;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_5357fedb30848723 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).set(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_fetch_cfe0d1dd786e9cd4 = function(arg0, arg1) {
        var ret = getObject(arg0).fetch(getObject(arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_instanceof_Response_e1b11afbefa5b563 = function(arg0) {
        var ret = getObject(arg0) instanceof Response;
        return ret;
    };
    imports.wbg.__wbg_text_8279d34d73e43c68 = function() { return handleError(function (arg0) {
        var ret = getObject(arg0).text();
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_status_6d8bb444ddc5a7b2 = function(arg0) {
        var ret = getObject(arg0).status;
        return ret;
    };
    imports.wbg.__wbg_url_50e0bdb6051741be = function(arg0, arg1) {
        var ret = getObject(arg1).url;
        var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_message_45be887bed03b068 = function(arg0, arg1) {
        var ret = getObject(arg1).message;
        var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_delete_6ec066a612baf8e1 = function() { return handleError(function (arg0, arg1) {
        var ret = getObject(arg0).delete(getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_setonversionchange_add3977ab9c282a2 = function(arg0, arg1) {
        getObject(arg0).onversionchange = getObject(arg1);
    };
    imports.wbg.__wbg_setonupgradeneeded_842bb46cfc88ed67 = function(arg0, arg1) {
        getObject(arg0).onupgradeneeded = getObject(arg1);
    };
    imports.wbg.__wbg_setonblocked_f70a673d9a6575e6 = function(arg0, arg1) {
        getObject(arg0).onblocked = getObject(arg1);
    };
    imports.wbg.__wbg_indexedDB_9775c4809e82d047 = function() { return handleError(function (arg0) {
        var ret = getObject(arg0).indexedDB;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_open_c38b94e8ddec20ef = function() { return handleError(function (arg0, arg1, arg2) {
        var ret = getObject(arg0).open(getStringFromWasm0(arg1, arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_put_c22232f9da0d42a7 = function() { return handleError(function (arg0, arg1, arg2) {
        var ret = getObject(arg0).put(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_get_d5fa3381014cf22e = function() { return handleError(function (arg0, arg1) {
        var ret = getObject(arg0).get(getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbindgen_is_string = function(arg0) {
        var ret = typeof(getObject(arg0)) === 'string';
        return ret;
    };
    imports.wbg.__wbg_instanceof_Error_561efcb1265706d8 = function(arg0) {
        var ret = getObject(arg0) instanceof Error;
        return ret;
    };
    imports.wbg.__wbg_message_9f7d15ff97fc4102 = function(arg0) {
        var ret = getObject(arg0).message;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getTimezoneOffset_d3e5a22a1b7fb1d8 = function(arg0) {
        var ret = getObject(arg0).getTimezoneOffset();
        return ret;
    };
    imports.wbg.__wbg_new_982fe22cd93d67f7 = function() { return handleError(function (arg0, arg1) {
        var ret = new WebSocket(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_newwithstr_1cb9334866ff890a = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        var ret = new WebSocket(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_setonmessage_ca5f75e4a84134ef = function(arg0, arg1) {
        getObject(arg0).onmessage = getObject(arg1);
    };
    imports.wbg.__wbg_setonopen_33b75427f7db7ce1 = function(arg0, arg1) {
        getObject(arg0).onopen = getObject(arg1);
    };
    imports.wbg.__wbg_setonerror_cb55f0521ac0da3a = function(arg0, arg1) {
        getObject(arg0).onerror = getObject(arg1);
    };
    imports.wbg.__wbg_send_503c2e7652e95bf5 = function() { return handleError(function (arg0, arg1, arg2) {
        getObject(arg0).send(getStringFromWasm0(arg1, arg2));
    }, arguments) };
    imports.wbg.__wbg_data_9e55e7d79ab13ef1 = function(arg0) {
        var ret = getObject(arg0).data;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_objectStoreNames_f030ec1236ec2ed4 = function(arg0) {
        var ret = getObject(arg0).objectStoreNames;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_createObjectStore_5ff279940bd2ec39 = function() { return handleError(function (arg0, arg1, arg2) {
        var ret = getObject(arg0).createObjectStore(getStringFromWasm0(arg1, arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_isSafeInteger_0dfc6d38b7184f06 = function(arg0) {
        var ret = Number.isSafeInteger(getObject(arg0));
        return ret;
    };
    imports.wbg.__wbg_isArray_eb7ad55f2da67dde = function(arg0) {
        var ret = Array.isArray(getObject(arg0));
        return ret;
    };
    imports.wbg.__wbg_values_364ae56c608e6824 = function(arg0) {
        var ret = getObject(arg0).values();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_has_1275b5eec3dc7a7a = function() { return handleError(function (arg0, arg1) {
        var ret = Reflect.has(getObject(arg0), getObject(arg1));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_entries_aadf9c3f38203a12 = function(arg0) {
        var ret = Object.entries(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_coreresponsehandler_ba48eae32b1e9248 = function(arg0, arg1, arg2, arg3) {
        core_response_handler(arg0 >>> 0, takeObject(arg1), arg2 >>> 0, arg3 !== 0);
    };
    imports.wbg.__wbg_new_949bbc1147195c4e = function() {
        var ret = new Array();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_push_284486ca27c6aa8b = function(arg0, arg1) {
        var ret = getObject(arg0).push(getObject(arg1));
        return ret;
    };
    imports.wbg.__wbg_new_ac32179a660db4bb = function() {
        var ret = new Map();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_a46091b120cc63e9 = function(arg0, arg1, arg2) {
        var ret = getObject(arg0).set(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_f1a4ac8f3a605b11 = function(arg0, arg1, arg2) {
        getObject(arg0)[takeObject(arg1)] = takeObject(arg2);
    };
    imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
        var ret = debugString(getObject(arg1));
        var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_rethrow = function(arg0) {
        throw takeObject(arg0);
    };
    imports.wbg.__wbg_then_2fcac196782070cc = function(arg0, arg1) {
        var ret = getObject(arg0).then(getObject(arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_then_8c2d62e8ae5978f7 = function(arg0, arg1, arg2) {
        var ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_resolve_d23068002f584f22 = function(arg0) {
        var ret = Promise.resolve(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_result_845fffb3888eb139 = function() { return handleError(function (arg0) {
        var ret = getObject(arg0).result;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_error_e6460643fc9523fb = function() { return handleError(function (arg0) {
        var ret = getObject(arg0).error;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_instanceof_Window_c4b70662a0d2c5ec = function(arg0) {
        var ret = true;
        return ret;
    };
    imports.wbg.__wbg_close_f2a10c1de90df5f0 = function() { return handleError(function (arg0) {
        getObject(arg0).close();
    }, arguments) };
    imports.wbg.__wbindgen_closure_wrapper738 = function(arg0, arg1, arg2) {
        var ret = makeClosure(arg0, arg1, 33, __wbg_adapter_36);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper771 = function(arg0, arg1, arg2) {
        var ret = makeClosure(arg0, arg1, 36, __wbg_adapter_39);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper4501 = function(arg0, arg1, arg2) {
        var ret = makeMutClosure(arg0, arg1, 205, __wbg_adapter_42);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper5105 = function(arg0, arg1, arg2) {
        var ret = makeMutClosure(arg0, arg1, 214, __wbg_adapter_45);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper6179 = function(arg0, arg1, arg2) {
        var ret = makeMutClosure(arg0, arg1, 211, __wbg_adapter_48);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper6180 = function(arg0, arg1, arg2) {
        var ret = makeMutClosure(arg0, arg1, 1145, __wbg_adapter_51);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper6181 = function(arg0, arg1, arg2) {
        var ret = makeMutClosure(arg0, arg1, 208, __wbg_adapter_54);
        return addHeapObject(ret);
    };
    imports['env'] = {
        malloc: function(size) {
            return wasm.__wbindgen_malloc(size);
        },
        free: function(ptr) {
            wasm.__wbindgen_free(ptr);
        },
        now: function() {
            return new Date().getTime();
        },
    };

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }



    const { instance, module } = await load(await input, imports);

    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;

    return wasm;
}




function replaceUndefinedWithNulls(value) {
    if (value === undefined) {
        return null;
    }
    if (value instanceof Blob) {
        return value;
    }
    if (typeof value === "object" && value !== null) {
        const result = Array.isArray(value) ? [] : {};
        for (const key in value) {
            result[key] = replaceUndefinedWithNulls(value[key]);
        }
        return result;
    }
    return value;
};

function core_response_handler(request_id, params, response_type, finished) {
    postMessage({
        type: 'response',
        requestId: request_id,
        params: replaceUndefinedWithNulls(params),
        responseType: response_type,
        finished,
    });
}

async function replaceBlobsWithArrayBuffers(value) {
    if (value instanceof Blob) {
        return await value.arrayBuffer();
    }
    if (typeof value === "bigint") {
        if (value < Number.MAX_SAFE_INTEGER && value > Number.MIN_SAFE_INTEGER) {
            return Number(value);
        } else {
            return value.toString();
        }
    }
    if (typeof value === "object" && value !== null) {
        const result = Array.isArray(value) ? [] : {};
        for (const key in value) {
            result[key] = await replaceBlobsWithArrayBuffers(value[key]);
        }
        return result;
    }
    return value;
}

self.onmessage = (e) => {
    const message = e.data;
    switch (message.type) {
    case 'init':
        (async () => {
            await init(message.wasmModule);
            postMessage({ type: 'init' });
        })();
        break;

    case 'createContext':
        postMessage({
            type: 'createContext',
            result: core_create_context(message.configJson),
            requestId: message.requestId,
        });
        break;

    case 'destroyContext':
        core_destroy_context(message.context);
        postMessage({
            type: 'destroyContext'
        });
        break;

    case 'request':
        (async () => {
            core_request(
                message.context,
                message.functionName,
                await replaceBlobsWithArrayBuffers(message.functionParams),
                message.requestId,
            );
        })();
        break;
    }
};
`;
function libWeb() {
  const workerBlob = new Blob([workerScript], { type: "application/javascript" });
  const workerUrl = URL.createObjectURL(workerBlob);
  const worker = new Worker(workerUrl);
  let nextCreateContextRequestId = 1;
  const createContextRequests = new Map();
  let initComplete = false;
  let responseHandler = null;
  const library = {
    setResponseParamsHandler: (handler) => {
      responseHandler = handler;
    },
    createContext: (configJson) => {
      return new Promise((resolve) => {
        const requestId = nextCreateContextRequestId;
        nextCreateContextRequestId += 1;
        createContextRequests.set(requestId, {
          configJson,
          resolve
        });
        if (initComplete) {
          worker.postMessage({
            type: "createContext",
            requestId,
            configJson
          });
        }
      });
    },
    destroyContext: (context2) => {
      worker.postMessage({
        type: "destroyContext",
        context: context2
      });
    },
    sendRequestParams: (context2, requestId, functionName, functionParams) => {
      worker.postMessage({
        type: "request",
        context: context2,
        requestId,
        functionName,
        functionParams
      });
    }
  };
  worker.onmessage = (evt) => {
    const message = evt.data;
    switch (message.type) {
      case "init":
        initComplete = true;
        for (const [requestId, request2] of createContextRequests.entries()) {
          worker.postMessage({
            type: "createContext",
            requestId,
            configJson: request2.configJson
          });
        }
        break;
      case "createContext":
        const request = createContextRequests.get(message.requestId);
        if (request) {
          createContextRequests.delete(message.requestId);
          request.resolve(message.result);
        }
        break;
      case "destroyContext":
        break;
      case "response":
        if (responseHandler) {
          responseHandler(message.requestId, message.params, message.responseType, message.finished);
        }
        break;
    }
  };
  worker.onerror = (evt) => {
    console.log(`Error from Web Worker: ${evt.message}`);
  };
  const loadModule = async () => {
    const fetched = fetch("/tonclient.wasm");
    if (WebAssembly.compileStreaming) {
      return await WebAssembly.compileStreaming(fetched);
    }
    return await WebAssembly.compile(await (await fetched).arrayBuffer());
  };
  (async () => {
    const wasmModule = await loadModule();
    worker.postMessage({
      type: "init",
      wasmModule
    });
  })();
  return Promise.resolve(library);
}
dist$1.TonClient.useBinaryLibrary(libWeb);
class TonClientController {
  constructor() {
    __publicField(this, "selectedNetwork", localStorage.getItem(TON_NETWORK_LS_FIELD) || MAIN_NETWORK);
    __publicField(this, "mainNetClient", new dist$1.TonClient({
      network: {
        server_address: MAIN_NETWORK
      }
    }));
    __publicField(this, "devNetClient", new dist$1.TonClient({
      network: {
        server_address: DEV_NETWORK
      }
    }));
    __publicField(this, "fldNetClient", new dist$1.TonClient({
      network: {
        server_address: FLD_NETWORK
      }
    }));
  }
  setSelectedNetwork(network) {
    localStorage.setItem(TON_NETWORK_LS_FIELD, network);
    this.selectedNetwork = network;
  }
  get client() {
    if (this.selectedNetwork === DEV_NETWORK)
      return this.devNetClient;
    if (this.selectedNetwork === FLD_NETWORK)
      return this.fldNetClient;
    return this.mainNetClient;
  }
}
var TonClient = new TonClientController();
const useDispatch = () => useDispatch$1();
const useSelector = useSelector$1;
var dist = {};
var models = {};
var utils = {};
Object.defineProperty(utils, "__esModule", { value: true });
utils.getUniqueId = utils.mergeTransactions = utils.AddressLiteral = utils.Address = void 0;
class Address {
  constructor(address) {
    this._address = address;
  }
  toString() {
    return this._address;
  }
  equals(other) {
    if (other instanceof Address) {
      return this._address == other._address;
    } else {
      return this._address == other;
    }
  }
}
utils.Address = Address;
class AddressLiteral extends Address {
  constructor(address) {
    super(address);
  }
}
utils.AddressLiteral = AddressLiteral;
function mergeTransactions(knownTransactions, newTransactions, info) {
  if (info.batchType == "old") {
    knownTransactions.push(...newTransactions);
    return knownTransactions;
  }
  if (knownTransactions.length === 0) {
    knownTransactions.push(...newTransactions);
    return knownTransactions;
  }
  let i = 0;
  while (i < knownTransactions.length && knownTransactions[i].id.lt.localeCompare(info.maxLt) >= 0) {
    ++i;
  }
  knownTransactions.splice(i, 0, ...newTransactions);
  return knownTransactions;
}
utils.mergeTransactions = mergeTransactions;
const MAX = 4294967295;
let idCounter = Math.floor(Math.random() * MAX);
function getUniqueId() {
  idCounter = (idCounter + 1) % MAX;
  return idCounter;
}
utils.getUniqueId = getUniqueId;
Object.defineProperty(models, "__esModule", { value: true });
models.parseTokensObject = models.serializeTokensObject = models.parseAccountInteraction = models.parsePermissions = models.parseMessage = models.serializeMessage = models.parseTransaction = models.serializeTransaction = void 0;
const utils_1$1 = utils;
function serializeTransaction(transaction) {
  return __spreadProps(__spreadValues({}, transaction), {
    inMessage: serializeMessage(transaction.inMessage),
    outMessages: transaction.outMessages.map(serializeMessage)
  });
}
models.serializeTransaction = serializeTransaction;
function parseTransaction(transaction) {
  return __spreadProps(__spreadValues({}, transaction), {
    inMessage: parseMessage(transaction.inMessage),
    outMessages: transaction.outMessages.map(parseMessage)
  });
}
models.parseTransaction = parseTransaction;
function serializeMessage(message) {
  return __spreadProps(__spreadValues({}, message), {
    src: message.src ? message.src.toString() : void 0,
    dst: message.dst ? message.dst.toString() : void 0
  });
}
models.serializeMessage = serializeMessage;
function parseMessage(message) {
  return __spreadProps(__spreadValues({}, message), {
    src: message.src ? new utils_1$1.Address(message.src) : void 0,
    dst: message.dst ? new utils_1$1.Address(message.dst) : void 0
  });
}
models.parseMessage = parseMessage;
function parsePermissions(permissions) {
  return __spreadProps(__spreadValues({}, permissions), {
    accountInteraction: permissions.accountInteraction ? parseAccountInteraction(permissions.accountInteraction) : void 0
  });
}
models.parsePermissions = parsePermissions;
function parseAccountInteraction(accountInteraction) {
  return __spreadProps(__spreadValues({}, accountInteraction), {
    address: new utils_1$1.Address(accountInteraction.address)
  });
}
models.parseAccountInteraction = parseAccountInteraction;
function serializeTokensObject(object) {
  return serializeTokenValue(object);
}
models.serializeTokensObject = serializeTokensObject;
function serializeTokenValue(token) {
  if (token instanceof utils_1$1.Address) {
    return token.toString();
  }
  if (Array.isArray(token)) {
    const result = [];
    for (const item of token) {
      result.push(serializeTokenValue(item));
    }
    return result;
  } else if (token != null && typeof token === "object") {
    const result = {};
    for (const [key, value] of Object.entries(token)) {
      result[key] = serializeTokenValue(value);
    }
    return result;
  } else {
    return token;
  }
}
function parseTokensObject(params, object) {
  const result = {};
  for (const param of params) {
    result[param.name] = parseTokenValue(param, object[param.name]);
  }
  return result;
}
models.parseTokensObject = parseTokensObject;
function parseTokenValue(param, token) {
  if (!param.type.startsWith("map")) {
    const isArray = param.type.endsWith("[]");
    const isOptional = !isArray && param.type.startsWith("optional");
    const rawType = isArray ? param.type.slice(0, -2) : isOptional ? param.type.slice(9, -1) : param.type;
    if (isArray) {
      const rawParam = { name: param.name, type: rawType, components: param.components };
      const result = [];
      for (const item of token) {
        result.push(parseTokenValue(rawParam, item));
      }
      return result;
    } else if (isOptional) {
      if (token == null) {
        return null;
      } else {
        const rawParam = { name: param.name, type: rawType, components: param.components };
        return parseTokenValue(rawParam, token);
      }
    } else if (rawType == "tuple") {
      const result = {};
      if (param.components != null) {
        for (const component of param.components) {
          result[component.name] = parseTokenValue(component, token[component.name]);
        }
      }
      return result;
    } else if (rawType == "address") {
      return new utils_1$1.Address(token);
    } else {
      return token;
    }
  } else {
    let [keyType, valueType] = param.type.split(",");
    keyType = keyType.slice(4);
    valueType = valueType.slice(0, -1);
    const result = [];
    for (const [key, value] of token) {
      result.push([parseTokenValue({
        name: "",
        type: keyType
      }, key), parseTokenValue({
        name: "",
        type: valueType,
        components: param.components
      }, value)]);
    }
    return result;
  }
}
var stream = {};
Object.defineProperty(stream, "__esModule", { value: true });
stream.Subscriber = void 0;
const utils_1 = utils;
class Subscriber {
  constructor(ton) {
    this.ton = ton;
    this.subscriptions = {};
    this.scanners = {};
  }
  transactions(address) {
    return this._addSubscription("transactionsFound", address);
  }
  oldTransactions(address, filter) {
    const id2 = utils_1.getUniqueId();
    return new StreamImpl(async (onData, onEnd) => {
      const scanner = new UnorderedTransactionsScanner(this.ton, __spreadValues({
        address,
        onData,
        onEnd
      }, filter));
      this.scanners[id2] = scanner;
      await scanner.start();
    }, async () => {
      const scanner = this.scanners[id2];
      delete this.scanners[id2];
      if (scanner != null) {
        await scanner.stop();
      }
    }, identity);
  }
  states(address) {
    return this._addSubscription("contractStateChanged", address);
  }
  async unsubscribe() {
    const subscriptions = Object.assign({}, this.subscriptions);
    for (const address of Object.keys(this.subscriptions)) {
      delete this.subscriptions[address];
    }
    const scanners = Object.assign({}, this.scanners);
    for (const id2 of Object.keys(this.scanners)) {
      delete this.scanners[id2];
    }
    await Promise.all(Object.values(subscriptions).map(async (item) => {
      const events = Object.assign({}, item);
      for (const event of Object.keys(events)) {
        delete item[event];
      }
      await Promise.all(Object.values(events).map((eventData) => {
        if (eventData == null) {
          return;
        }
        return eventData.subscription.then((item2) => {
          return item2.unsubscribe();
        }).catch(() => {
        });
      }));
    }).concat(Object.values(scanners).map((item) => item.stop())));
  }
  _addSubscription(event, address) {
    const id2 = utils_1.getUniqueId();
    return new StreamImpl((onData, onEnd) => {
      let subscriptions = this.subscriptions[address.toString()];
      let eventData = subscriptions === null || subscriptions === void 0 ? void 0 : subscriptions[event];
      if (eventData == null) {
        const handlers = {
          [id2]: { onData, onEnd, queue: new PromiseQueue() }
        };
        eventData = {
          subscription: this.ton.subscribe(event, {
            address
          }).then((subscription) => {
            subscription.on("data", (data) => {
              Object.values(handlers).forEach(({ onData: onData2, queue }) => {
                queue.enqueue(() => onData2(data));
              });
            });
            subscription.on("unsubscribed", () => {
              Object.values(handlers).forEach(({ onEnd: onEnd2, queue }) => {
                delete handlers[id2];
                queue.clear();
                queue.enqueue(async () => onEnd2());
              });
            });
            return subscription;
          }).catch((e2) => {
            console.error(e2);
            Object.values(handlers).forEach(({ onEnd: onEnd2, queue }) => {
              delete handlers[id2];
              queue.clear();
              queue.enqueue(() => onEnd2());
            });
            throw e2;
          }),
          handlers
        };
        if (subscriptions == null) {
          subscriptions = {
            [event]: eventData
          };
          this.subscriptions[address.toString()] = subscriptions;
        } else {
          subscriptions[event] = eventData;
        }
      } else {
        eventData.handlers[id2] = { onData, onEnd, queue: new PromiseQueue() };
      }
    }, () => {
      const subscriptions = this.subscriptions[address.toString()];
      if (subscriptions == null) {
        return;
      }
      const eventData = subscriptions[event];
      if (eventData != null) {
        delete eventData.handlers[id2];
        if (Object.keys(eventData.handlers).length === 0) {
          const subscription = eventData.subscription;
          delete subscriptions[event];
          subscription.then((subscription2) => subscription2.unsubscribe()).catch(console.debug);
        }
      }
      if (Object.keys(subscriptions).length === 0) {
        delete this.subscriptions[address.toString()];
      }
    }, identity);
  }
}
stream.Subscriber = Subscriber;
async function identity(event, handler) {
  await handler(event);
}
class StreamImpl {
  constructor(makeProducer, stopProducer, extractor) {
    this.makeProducer = makeProducer;
    this.stopProducer = stopProducer;
    this.extractor = extractor;
  }
  first() {
    return new Promise(async (resolve, reject) => {
      this.makeProducer(async (event) => {
        await this.extractor(event, (item) => {
          this.stopProducer();
          resolve(item);
        });
      }, () => reject(new Error("Subscription closed")));
    });
  }
  on(handler) {
    this.makeProducer(async (event) => {
      await this.extractor(event, handler);
    }, () => {
    });
  }
  merge(other) {
    return new StreamImpl(async (onEvent, onEnd) => {
      const state = {
        counter: 0
      };
      const checkEnd = () => {
        if (++state.counter == 2) {
          onEnd();
        }
      };
      this.makeProducer(onEvent, checkEnd);
      other.makeProducer(onEvent, checkEnd);
    }, () => {
      this.stopProducer();
      other.stopProducer();
    }, this.extractor);
  }
  filter(f2) {
    return new StreamImpl(this.makeProducer, this.stopProducer, (event, handler) => this.extractor(event, async (item) => {
      if (await f2(item)) {
        await handler(item);
      }
    }));
  }
  filterMap(f2) {
    return new StreamImpl(this.makeProducer, this.stopProducer, (event, handler) => this.extractor(event, async (item) => {
      const newItem = await f2(item);
      if (newItem !== void 0) {
        await handler(newItem);
      }
    }));
  }
  map(f2) {
    return this.filterMap(f2);
  }
  flatMap(f2) {
    return new StreamImpl(this.makeProducer, this.stopProducer, (event, handler) => this.extractor(event, async (item) => {
      const items = await f2(item);
      for (const newItem of items) {
        await handler(newItem);
      }
    }));
  }
  skip(n2) {
    const state = {
      index: 0
    };
    return new StreamImpl(this.makeProducer, this.stopProducer, (event, handler) => this.extractor(event, async (item) => {
      if (state.index >= n2) {
        await handler(item);
      } else {
        ++state.index;
      }
    }));
  }
  skipWhile(f2) {
    const state = {
      shouldSkip: true
    };
    return new StreamImpl(this.makeProducer, this.stopProducer, (event, handler) => this.extractor(event, async (item) => {
      if (!state.shouldSkip || !await f2(item)) {
        state.shouldSkip = false;
        await handler(item);
      }
    }));
  }
}
class UnorderedTransactionsScanner {
  constructor(ton, { address, onData, onEnd, fromLt, fromUtime }) {
    this.ton = ton;
    this.queue = new PromiseQueue();
    this.isRunning = false;
    this.address = address;
    this.onData = onData;
    this.onEnd = onEnd;
    this.fromLt = fromLt;
    this.fromUtime = fromUtime;
  }
  async start() {
    if (this.isRunning || this.promise != null) {
      return;
    }
    this.isRunning = true;
    this.promise = (async () => {
      while (this.isRunning) {
        try {
          const { transactions, continuation } = await this.ton.getTransactions({
            address: this.address,
            continuation: this.continuation
          });
          if (!this.isRunning || transactions.length == null) {
            break;
          }
          const filteredTransactions = transactions.filter((item) => (this.fromLt == null || item.id.lt > this.fromLt) && (this.fromUtime == null || item.createdAt > this.fromUtime));
          if (filteredTransactions.length == 0) {
            break;
          }
          const info = {
            maxLt: filteredTransactions[0].id.lt,
            minLt: filteredTransactions[filteredTransactions.length - 1].id.lt,
            batchType: "old"
          };
          this.queue.enqueue(() => this.onData({
            address: this.address,
            transactions: filteredTransactions,
            info
          }));
          if (continuation != null) {
            this.continuation = continuation;
          } else {
            break;
          }
        } catch (e2) {
          console.error(e2);
        }
      }
      this.queue.enqueue(async () => this.onEnd());
      this.isRunning = false;
      this.continuation = void 0;
    })();
  }
  async stop() {
    this.isRunning = false;
    this.queue.clear();
    if (this.promise != null) {
      await this.promise;
    } else {
      this.onEnd();
    }
  }
}
class PromiseQueue {
  constructor() {
    this.queue = [];
    this.workingOnPromise = false;
  }
  enqueue(promise) {
    this.queue.push(promise);
    this._dequeue().catch(() => {
    });
  }
  clear() {
    this.queue.length = 0;
  }
  async _dequeue() {
    if (this.workingOnPromise) {
      return;
    }
    const item = this.queue.shift();
    if (!item) {
      return;
    }
    this.workingOnPromise = true;
    item().then(() => {
      this.workingOnPromise = false;
      this._dequeue();
    }).catch(() => {
      this.workingOnPromise = false;
      this._dequeue();
    });
  }
}
var contract = {};
Object.defineProperty(contract, "__esModule", { value: true });
contract.TvmException = contract.Contract = void 0;
const models_1 = models;
class Contract {
  constructor(provider, abi, address) {
    if (!Array.isArray(abi.functions)) {
      throw new Error("Invalid abi. Functions array required");
    }
    if (!Array.isArray(abi.events)) {
      throw new Error("Invalid abi. Events array required");
    }
    this._provider = provider;
    this._abi = JSON.stringify(abi);
    this._functions = abi.functions.reduce((functions, item) => {
      functions[item.name] = { inputs: item.inputs || [], outputs: item.outputs || [] };
      return functions;
    }, {});
    this._events = abi.events.reduce((events, item) => {
      events[item.name] = { inputs: item.inputs || [] };
      return events;
    }, {});
    this._address = address;
    class ContractMethodImpl {
      constructor(provider2, functionAbi, abi2, address2, method, params) {
        this.provider = provider2;
        this.functionAbi = functionAbi;
        this.abi = abi2;
        this.address = address2;
        this.method = method;
        this.params = models_1.serializeTokensObject(params);
      }
      async send(args) {
        const { transaction } = await this.provider.rawApi.sendMessage({
          sender: args.from.toString(),
          recipient: this.address.toString(),
          amount: args.amount,
          bounce: args.bounce == null ? true : args.bounce,
          payload: {
            abi: this.abi,
            method: this.method,
            params: this.params
          }
        });
        return models_1.parseTransaction(transaction);
      }
      async estimateFees(args) {
        const { fees } = await this.provider.rawApi.estimateFees({
          sender: args.from.toString(),
          recipient: this.address.toString(),
          amount: args.amount,
          payload: {
            abi: this.abi,
            method: this.method,
            params: this.params
          }
        });
        return fees;
      }
      async sendExternal(args) {
        let method = args.withoutSignature === true ? this.provider.rawApi.sendUnsignedExternalMessage : this.provider.rawApi.sendExternalMessage;
        let { transaction, output } = await method({
          publicKey: args.publicKey,
          recipient: this.address.toString(),
          stateInit: args.stateInit,
          payload: {
            abi: this.abi,
            method: this.method,
            params: this.params
          },
          local: args.local
        });
        return {
          transaction: models_1.parseTransaction(transaction),
          output: output != null ? models_1.parseTokensObject(this.functionAbi.outputs, output) : void 0
        };
      }
      async call(args = {}) {
        let { output, code } = await this.provider.rawApi.runLocal({
          address: this.address.toString(),
          cachedState: args.cachedState,
          functionCall: {
            abi: this.abi,
            method: this.method,
            params: this.params
          }
        });
        if (output == null || code != 0) {
          throw new TvmException(code);
        } else {
          return models_1.parseTokensObject(this.functionAbi.outputs, output);
        }
      }
    }
    this._methods = new Proxy({}, {
      get: (_object, method) => {
        const rawAbi = this._functions[method];
        return (params) => new ContractMethodImpl(this._provider, rawAbi, this._abi, this._address, method, params);
      }
    });
  }
  get methods() {
    return this._methods;
  }
  get address() {
    return this._address;
  }
  get abi() {
    return this._abi;
  }
  async decodeTransaction(args) {
    try {
      const result = await this._provider.rawApi.decodeTransaction({
        transaction: models_1.serializeTransaction(args.transaction),
        abi: this._abi,
        method: args.methods
      });
      if (result == null) {
        return void 0;
      }
      let { method, input, output } = result;
      const rawAbi = this._functions[method];
      return {
        method,
        input: rawAbi.inputs != null ? models_1.parseTokensObject(rawAbi.inputs, input) : {},
        output: rawAbi.outputs != null ? models_1.parseTokensObject(rawAbi.outputs, output) : {}
      };
    } catch (_) {
      return void 0;
    }
  }
  async decodeTransactionEvents(args) {
    try {
      const { events } = await this._provider.rawApi.decodeTransactionEvents({
        transaction: models_1.serializeTransaction(args.transaction),
        abi: this._abi
      });
      const result = [];
      for (const { event, data } of events) {
        const rawAbi = this._events[event];
        result.push({
          event,
          data: rawAbi.inputs != null ? models_1.parseTokensObject(rawAbi.inputs, data) : {}
        });
      }
      return result;
    } catch (_) {
      return [];
    }
  }
  async decodeInputMessage(args) {
    try {
      const result = await this._provider.rawApi.decodeInput({
        abi: this._abi,
        body: args.body,
        internal: args.internal,
        method: args.methods
      });
      if (result == null) {
        return void 0;
      }
      let { method, input } = result;
      const rawAbi = this._functions[method];
      return {
        method,
        input: rawAbi.inputs != null ? models_1.parseTokensObject(rawAbi.inputs, input) : {}
      };
    } catch (_) {
      return void 0;
    }
  }
  async decodeOutputMessage(args) {
    try {
      const result = await this._provider.rawApi.decodeOutput({
        abi: this._abi,
        body: args.body,
        method: args.methods
      });
      if (result == null) {
        return void 0;
      }
      let { method, output } = result;
      const rawAbi = this._functions[method];
      return {
        method,
        output: rawAbi.outputs != null ? models_1.parseTokensObject(rawAbi.outputs, output) : {}
      };
    } catch (_) {
      return void 0;
    }
  }
}
contract.Contract = Contract;
class TvmException extends Error {
  constructor(code) {
    super(`TvmException: ${code}`);
    this.code = code;
  }
}
contract.TvmException = TvmException;
var api = {};
Object.defineProperty(api, "__esModule", { value: true });
(function(exports) {
  var __createBinding = commonjsGlobal$1 && commonjsGlobal$1.__createBinding || (Object.create ? function(o, m2, k2, k22) {
    if (k22 === void 0)
      k22 = k2;
    Object.defineProperty(o, k22, { enumerable: true, get: function() {
      return m2[k2];
    } });
  } : function(o, m2, k2, k22) {
    if (k22 === void 0)
      k22 = k2;
    o[k22] = m2[k2];
  });
  var __exportStar = commonjsGlobal$1 && commonjsGlobal$1.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ProviderNotFoundException = exports.ProviderRpcClient = exports.hasTonProvider = exports.mergeTransactions = exports.AddressLiteral = exports.Address = exports.Subscriber = void 0;
  const models_12 = models;
  const utils_12 = utils;
  const stream_1 = stream;
  const contract_1 = contract;
  __exportStar(api, exports);
  __exportStar(models, exports);
  __exportStar(contract, exports);
  var stream_2 = stream;
  Object.defineProperty(exports, "Subscriber", { enumerable: true, get: function() {
    return stream_2.Subscriber;
  } });
  var utils_2 = utils;
  Object.defineProperty(exports, "Address", { enumerable: true, get: function() {
    return utils_2.Address;
  } });
  Object.defineProperty(exports, "AddressLiteral", { enumerable: true, get: function() {
    return utils_2.AddressLiteral;
  } });
  Object.defineProperty(exports, "mergeTransactions", { enumerable: true, get: function() {
    return utils_2.mergeTransactions;
  } });
  let ensurePageLoaded;
  if (document.readyState == "complete") {
    ensurePageLoaded = Promise.resolve();
  } else {
    ensurePageLoaded = new Promise((resolve) => {
      window.addEventListener("load", () => {
        resolve();
      });
    });
  }
  async function hasTonProvider() {
    await ensurePageLoaded;
    return window.hasTonProvider === true;
  }
  exports.hasTonProvider = hasTonProvider;
  class ProviderRpcClient {
    constructor(properties = {}) {
      this._subscriptions = {};
      this._contractSubscriptions = {};
      this._properties = properties;
      this._api = new Proxy({}, {
        get: (_object, method) => (params) => this._ton.request({ method, params })
      });
      this._ton = window.ton;
      if (this._ton != null) {
        this._mainInitializationPromise = Promise.resolve();
      } else {
        this._mainInitializationPromise = hasTonProvider().then((hasTonProvider2) => new Promise((resolve, reject) => {
          if (!hasTonProvider2) {
            reject(new ProviderNotFoundException());
            return;
          }
          this._ton = window.ton;
          if (this._ton != null) {
            resolve();
          } else {
            window.addEventListener("ton#initialized", (_data) => {
              this._ton = window.ton;
              resolve();
            });
          }
        }));
      }
      this._mainInitializationPromise.then(() => {
        if (this._ton != null) {
          this._registerEventHandlers(this._ton);
        }
      });
    }
    async hasProvider() {
      return hasTonProvider();
    }
    async ensureInitialized() {
      try {
        await this._mainInitializationPromise;
      } catch (e2) {
        if (this._properties.fallback == null) {
          throw e2;
        }
        if (this._additionalInitializationPromise == null) {
          this._additionalInitializationPromise = this._properties.fallback().then(async (provider) => {
            this._ton = provider;
            this._registerEventHandlers(this._ton);
          });
        }
        await this._additionalInitializationPromise;
      }
    }
    get isInitialized() {
      return this._ton != null;
    }
    get raw() {
      return this._ton;
    }
    get rawApi() {
      return this._api;
    }
    createContract(abi, address) {
      return new contract_1.Contract(this, abi, address);
    }
    createSubscriber() {
      return new stream_1.Subscriber(this);
    }
    async requestPermissions(args) {
      const result = await this._api.requestPermissions({
        permissions: args.permissions
      });
      return models_12.parsePermissions(result);
    }
    async disconnect() {
      await this._api.disconnect();
    }
    async subscribe(eventName, params) {
      class SubscriptionImpl {
        constructor(_subscribe, _unsubscribe) {
          this._subscribe = _subscribe;
          this._unsubscribe = _unsubscribe;
          this._listeners = {
            ["data"]: [],
            ["subscribed"]: [],
            ["unsubscribed"]: []
          };
        }
        on(eventName2, listener) {
          this._listeners[eventName2].push(listener);
          return this;
        }
        async subscribe() {
          await this._subscribe(this);
          for (const handler of this._listeners["subscribed"]) {
            handler();
          }
        }
        async unsubscribe() {
          await this._unsubscribe();
          for (const handler of this._listeners["unsubscribed"]) {
            handler();
          }
        }
        notify(data) {
          for (const handler of this._listeners["data"]) {
            handler(data);
          }
        }
      }
      let existingSubscriptions = this._getEventSubscriptions(eventName);
      const id2 = utils_12.getUniqueId();
      switch (eventName) {
        case "disconnected":
        case "networkChanged":
        case "permissionsChanged":
        case "loggedOut": {
          const subscription = new SubscriptionImpl(async (subscription2) => {
            if (existingSubscriptions[id2] != null) {
              return;
            }
            existingSubscriptions[id2] = (data) => {
              subscription2.notify(data);
            };
          }, async () => {
            delete existingSubscriptions[id2];
          });
          await subscription.subscribe();
          return subscription;
        }
        case "transactionsFound":
        case "contractStateChanged": {
          const address = params.address.toString();
          const subscription = new SubscriptionImpl(async (subscription2) => {
            if (existingSubscriptions[id2] != null) {
              return;
            }
            existingSubscriptions[id2] = (data) => {
              if (data.address.toString() == address) {
                subscription2.notify(data);
              }
            };
            let contractSubscriptions = this._contractSubscriptions[address];
            if (contractSubscriptions == null) {
              contractSubscriptions = {};
              this._contractSubscriptions[address] = contractSubscriptions;
            }
            contractSubscriptions[id2] = {
              state: eventName == "contractStateChanged",
              transactions: eventName == "transactionsFound"
            };
            const { total, withoutExcluded } = foldSubscriptions(Object.values(contractSubscriptions), contractSubscriptions[id2]);
            try {
              if (total.transactions != withoutExcluded.transactions || total.state != withoutExcluded.state) {
                await this.rawApi.subscribe({ address, subscriptions: total });
              }
            } catch (e2) {
              delete existingSubscriptions[id2];
              delete contractSubscriptions[id2];
              throw e2;
            }
          }, async () => {
            delete existingSubscriptions[id2];
            const contractSubscriptions = this._contractSubscriptions[address];
            if (contractSubscriptions == null) {
              return;
            }
            const updates = contractSubscriptions[id2];
            const { total, withoutExcluded } = foldSubscriptions(Object.values(contractSubscriptions), updates);
            delete contractSubscriptions[id2];
            if (!withoutExcluded.transactions && !withoutExcluded.state) {
              await this.rawApi.unsubscribe({ address });
            } else if (total.transactions != withoutExcluded.transactions || total.state != withoutExcluded.state) {
              await this.rawApi.subscribe({ address, subscriptions: withoutExcluded });
            }
          });
          await subscription.subscribe();
          return subscription;
        }
        default: {
          throw new Error(`Unknown event ${eventName}`);
        }
      }
    }
    async getProviderState() {
      const state = await this._api.getProviderState();
      return __spreadProps(__spreadValues({}, state), {
        permissions: models_12.parsePermissions(state.permissions)
      });
    }
    async getFullContractState(args) {
      return await this._api.getFullContractState({
        address: args.address.toString()
      });
    }
    async getTransactions(args) {
      const { transactions, continuation, info } = await this._api.getTransactions(__spreadProps(__spreadValues({}, args), {
        address: args.address.toString()
      }));
      return {
        transactions: transactions.map(models_12.parseTransaction),
        continuation,
        info
      };
    }
    async getExpectedAddress(abi, args) {
      const { address } = await this._api.getExpectedAddress(__spreadProps(__spreadValues({
        abi: JSON.stringify(abi)
      }, args), {
        initParams: models_12.serializeTokensObject(args.initParams)
      }));
      return new utils_12.Address(address);
    }
    async getBocHash(boc) {
      return await this._api.getBocHash({
        boc
      }).then(({ hash }) => hash);
    }
    async packIntoCell(args) {
      return await this._api.packIntoCell({
        structure: args.structure,
        data: models_12.serializeTokensObject(args.data)
      });
    }
    async unpackFromCell(args) {
      const { data } = await this._api.unpackFromCell(__spreadProps(__spreadValues({}, args), {
        structure: args.structure
      }));
      return {
        data: models_12.parseTokensObject(args.structure, data)
      };
    }
    async extractPublicKey(boc) {
      const { publicKey } = await this._api.extractPublicKey({
        boc
      });
      return publicKey;
    }
    async codeToTvc(code) {
      const { tvc } = await this._api.codeToTvc({
        code
      });
      return tvc;
    }
    async splitTvc(tvc) {
      return await this._api.splitTvc({
        tvc
      });
    }
    async addAsset(args) {
      let params;
      switch (args.type) {
        case "tip3_token": {
          params = {
            rootContract: args.params.rootContract.toString()
          };
          break;
        }
        default:
          throw new Error("Unknown asset type");
      }
      return await this._api.addAsset({
        account: args.account.toString(),
        type: args.type,
        params
      });
    }
    async verifySignature(args) {
      return await this._api.verifySignature(args);
    }
    async signData(args) {
      return await this._api.signData(args);
    }
    async signDataRaw(args) {
      return await this._api.signDataRaw(args);
    }
    async sendMessage(args) {
      const { transaction } = await this._api.sendMessage(__spreadProps(__spreadValues({}, args), {
        sender: args.sender.toString(),
        recipient: args.recipient.toString(),
        payload: args.payload ? {
          abi: args.payload.abi,
          method: args.payload.method,
          params: models_12.serializeTokensObject(args.payload.params)
        } : void 0
      }));
      return {
        transaction: models_12.parseTransaction(transaction)
      };
    }
    _registerEventHandlers(provider) {
      const knownEvents = {
        "disconnected": (data) => data,
        "transactionsFound": (data) => ({
          address: new utils_12.Address(data.address),
          transactions: data.transactions.map(models_12.parseTransaction),
          info: data.info
        }),
        "contractStateChanged": (data) => ({
          address: new utils_12.Address(data.address),
          state: data.state
        }),
        "networkChanged": (data) => data,
        "permissionsChanged": (data) => ({
          permissions: models_12.parsePermissions(data.permissions)
        }),
        "loggedOut": (data) => data
      };
      for (const [eventName, extractor] of Object.entries(knownEvents)) {
        provider.addListener(eventName, (data) => {
          const handlers = this._subscriptions[eventName];
          if (handlers == null) {
            return;
          }
          const parsed = extractor(data);
          for (const handler of Object.values(handlers)) {
            handler(parsed);
          }
        });
      }
    }
    _getEventSubscriptions(eventName) {
      let existingSubscriptions = this._subscriptions[eventName];
      if (existingSubscriptions == null) {
        existingSubscriptions = {};
        this._subscriptions[eventName] = existingSubscriptions;
      }
      return existingSubscriptions;
    }
  }
  exports.ProviderRpcClient = ProviderRpcClient;
  class ProviderNotFoundException extends Error {
    constructor() {
      super("TON provider was not found");
    }
  }
  exports.ProviderNotFoundException = ProviderNotFoundException;
  function foldSubscriptions(subscriptions, except) {
    const total = { state: false, transactions: false };
    const withoutExcluded = Object.assign({}, total);
    for (const item of subscriptions) {
      if (withoutExcluded.transactions && withoutExcluded.state) {
        break;
      }
      total.state || (total.state = item.state);
      total.transactions || (total.transactions = item.transactions);
      if (item != except) {
        withoutExcluded.state || (withoutExcluded.state = item.state);
        withoutExcluded.transactions || (withoutExcluded.transactions = item.transactions);
      }
    }
    return { total, withoutExcluded };
  }
})(dist);
class EventBus {
  constructor() {
    __publicField(this, "subscribers");
    __publicField(this, "nextId", 0);
    this.subscribers = {};
  }
  dispatch(event, args) {
    const subscriber = this.subscribers[event];
    if (subscriber === void 0) {
      return;
    }
    Object.keys(subscriber).forEach((key) => subscriber[key](args));
  }
  register(event, callback) {
    const id2 = this.getNextId();
    if (!this.subscribers[event])
      this.subscribers[event] = {};
    this.subscribers[event][id2] = callback;
    return {
      unregister: () => {
        delete this.subscribers[event][id2];
        if (Object.keys(this.subscribers[event]).length === 0)
          delete this.subscribers[event];
      }
    };
  }
  getNextId() {
    return this.nextId++;
  }
}
var EventBus$1 = new EventBus();
function addLocalDebot(debotObj) {
  const localDebosFromLS = JSON.parse(localStorage.getItem(USER_DEBOTS_LS_FIELD)) || [];
  const newLocalDebots = [debotObj, ...localDebosFromLS];
  store.dispatch(setLocalDebotsList(newLocalDebots));
  localStorage.setItem(USER_DEBOTS_LS_FIELD, JSON.stringify(newLocalDebots));
}
function addEnvVariable(key, value) {
  const envFromLS = JSON.parse(localStorage.getItem(USER_ENV_LS_FIELD)) || {};
  const newEnv = __spreadProps(__spreadValues({}, envFromLS), {
    [key]: value
  });
  store.dispatch(setEnvironmentVariables(newEnv));
  localStorage.setItem(USER_ENV_LS_FIELD, JSON.stringify(newEnv));
}
const decodeString = function(encodedString) {
  if (typeof encodedString !== "string")
    return;
  const decodedString = Buffer.from(encodedString, "hex").toString();
  return decodedString;
};
const encodeString = function(decodedString) {
  if (typeof decodedString !== "string")
    return;
  const hex = unescape(encodeURIComponent(decodedString)).split("").map((char) => char.charCodeAt(0).toString(16)).join("");
  return hex;
};
function createDebotUrl(debotAddress, debotUrl) {
  const baseUrl = debotUrl || "/debot";
  return `${baseUrl}?debotAddress=${debotAddress}`;
}
function createExplorerUrl(addr) {
  return `${EXPLORER_BASE_URL}${addr}`;
}
async function checkIsValidAddress(address) {
  try {
    const result = await TonClient.client.utils.convert_address({
      address,
      output_format: {
        type: "Hex"
      }
    });
    return !!result;
  } catch (err) {
    return false;
  }
}
function formDebotFunctionFromId(id2) {
  return `0x${parseInt(id2, 10).toString(16)}`;
}
async function genKeyPairFromMnemonic(mnemonic) {
  const hdkMaster = await TonClient.client.crypto.hdkey_xprv_from_mnemonic({
    dictionary: 1,
    word_count: MNEMONIC_WORD_COUNT,
    phrase: mnemonic
  });
  const hdkRoot = await TonClient.client.crypto.hdkey_derive_from_xprv_path({
    xprv: hdkMaster.xprv,
    path: DERIVATION_PATH
  });
  const { secret } = await TonClient.client.crypto.hdkey_secret_from_xprv({
    xprv: hdkRoot.xprv
  });
  const keyPair = await TonClient.client.crypto.nacl_sign_keypair_from_secret_key({ secret });
  return {
    secret,
    public: keyPair.public
  };
}
function getEnvVariableFromInput(text) {
  if (!text.startsWith("$"))
    return;
  const varName = text.slice(1);
  const { variables } = store.getState().environment;
  return variables[varName];
}
function removeLocalDebot(debotAddress) {
  const localDebosFromLS = JSON.parse(localStorage.getItem(USER_DEBOTS_LS_FIELD)) || [];
  const newLocalDebots = localDebosFromLS.filter((debot) => debot.address !== debotAddress);
  store.dispatch(setLocalDebotsList(newLocalDebots));
  localStorage.setItem(USER_DEBOTS_LS_FIELD, JSON.stringify(newLocalDebots));
}
function removeEnvVariable(key) {
  const envFromLS = JSON.parse(localStorage.getItem(USER_ENV_LS_FIELD)) || {};
  const newEnv = __spreadValues({}, envFromLS);
  delete newEnv[key];
  store.dispatch(setEnvironmentVariables(newEnv));
  localStorage.setItem(USER_ENV_LS_FIELD, JSON.stringify(newEnv));
}
function interfaceAddressToId(address) {
  if (!address.startsWith(INTERFACE_ADDRESS_PREFIX))
    return address;
  return address.slice(INTERFACE_ADDRESS_PREFIX.length);
}
function interfaceIdToAddress(id2) {
  if (id2.startsWith(INTERFACE_ADDRESS_PREFIX))
    return id2;
  return `${INTERFACE_ADDRESS_PREFIX}${id2}`;
}
function isCustomScrollBar() {
  return !navigator.platform.toLowerCase().includes("mac");
}
function sliceAddress(address) {
  return address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "";
}
function useSearchParams() {
  return new URLSearchParams(useLocation().search);
}
function useDebotAddress() {
  const searchParams = useSearchParams();
  return searchParams.get(DEBOT_ADDRESS_SEARCH_PARAM);
}
var lib = {};
var uaParser_min = { exports: {} };
(function(module, exports) {
  (function(window2, undefined$1) {
    var LIBVERSION = "0.7.31", EMPTY = "", UNKNOWN = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", MODEL = "model", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded", UA_MAX_LENGTH = 255;
    var AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", BROWSER = "Browser", CHROME = "Chrome", EDGE = "Edge", FIREFOX = "Firefox", GOOGLE = "Google", HUAWEI = "Huawei", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", OPERA = "Opera", SAMSUNG = "Samsung", SONY = "Sony", XIAOMI = "Xiaomi", ZEBRA = "Zebra", FACEBOOK = "Facebook";
    var extend = function(regexes2, extensions) {
      var mergedRegexes = {};
      for (var i in regexes2) {
        if (extensions[i] && extensions[i].length % 2 === 0) {
          mergedRegexes[i] = extensions[i].concat(regexes2[i]);
        } else {
          mergedRegexes[i] = regexes2[i];
        }
      }
      return mergedRegexes;
    }, enumerize = function(arr) {
      var enums = {};
      for (var i = 0; i < arr.length; i++) {
        enums[arr[i].toUpperCase()] = arr[i];
      }
      return enums;
    }, has = function(str1, str2) {
      return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
    }, lowerize = function(str) {
      return str.toLowerCase();
    }, majorize = function(version) {
      return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split(".")[0] : undefined$1;
    }, trim = function(str, len) {
      if (typeof str === STR_TYPE) {
        str = str.replace(/^\s\s*/, EMPTY).replace(/\s\s*$/, EMPTY);
        return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
      }
    };
    var rgxMapper = function(ua2, arrays) {
      var i = 0, j, k2, p2, q2, matches, match;
      while (i < arrays.length && !matches) {
        var regex = arrays[i], props = arrays[i + 1];
        j = k2 = 0;
        while (j < regex.length && !matches) {
          matches = regex[j++].exec(ua2);
          if (!!matches) {
            for (p2 = 0; p2 < props.length; p2++) {
              match = matches[++k2];
              q2 = props[p2];
              if (typeof q2 === OBJ_TYPE && q2.length > 0) {
                if (q2.length === 2) {
                  if (typeof q2[1] == FUNC_TYPE) {
                    this[q2[0]] = q2[1].call(this, match);
                  } else {
                    this[q2[0]] = q2[1];
                  }
                } else if (q2.length === 3) {
                  if (typeof q2[1] === FUNC_TYPE && !(q2[1].exec && q2[1].test)) {
                    this[q2[0]] = match ? q2[1].call(this, match, q2[2]) : undefined$1;
                  } else {
                    this[q2[0]] = match ? match.replace(q2[1], q2[2]) : undefined$1;
                  }
                } else if (q2.length === 4) {
                  this[q2[0]] = match ? q2[3].call(this, match.replace(q2[1], q2[2])) : undefined$1;
                }
              } else {
                this[q2] = match ? match : undefined$1;
              }
            }
          }
        }
        i += 2;
      }
    }, strMapper = function(str, map) {
      for (var i in map) {
        if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
          for (var j = 0; j < map[i].length; j++) {
            if (has(map[i][j], str)) {
              return i === UNKNOWN ? undefined$1 : i;
            }
          }
        } else if (has(map[i], str)) {
          return i === UNKNOWN ? undefined$1 : i;
        }
      }
      return str;
    };
    var oldSafariMap = { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }, windowsVersionMap = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" };
    var regexes = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [VERSION, [NAME, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [VERSION, [NAME, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [NAME, VERSION], [/opios[\/ ]+([\w\.]+)/i], [VERSION, [NAME, OPERA + " Mini"]], [/\bopr\/([\w\.]+)/i], [VERSION, [NAME, OPERA]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i], [NAME, VERSION], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [VERSION, [NAME, "UC" + BROWSER]], [/\bqbcore\/([\w\.]+)/i], [VERSION, [NAME, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [VERSION, [NAME, "WeChat"]], [/konqueror\/([\w\.]+)/i], [VERSION, [NAME, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [VERSION, [NAME, "IE"]], [/yabrowser\/([\w\.]+)/i], [VERSION, [NAME, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[NAME, /(.+)/, "$1 Secure " + BROWSER], VERSION], [/\bfocus\/([\w\.]+)/i], [VERSION, [NAME, FIREFOX + " Focus"]], [/\bopt\/([\w\.]+)/i], [VERSION, [NAME, OPERA + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [VERSION, [NAME, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [VERSION, [NAME, "Dolphin"]], [/coast\/([\w\.]+)/i], [VERSION, [NAME, OPERA + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [VERSION, [NAME, "MIUI " + BROWSER]], [/fxios\/([-\w\.]+)/i], [VERSION, [NAME, FIREFOX]], [/\bqihu|(qi?ho?o?|360)browser/i], [[NAME, "360 " + BROWSER]], [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i], [[NAME, /(.+)/, "$1 " + BROWSER], VERSION], [/(comodo_dragon)\/([\w\.]+)/i], [[NAME, /_/g, " "], VERSION], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [NAME, VERSION], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i], [NAME], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[NAME, FACEBOOK], VERSION], [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [NAME, VERSION], [/\bgsa\/([\w\.]+) .*safari\//i], [VERSION, [NAME, "GSA"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [VERSION, [NAME, CHROME + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[NAME, CHROME + " WebView"], VERSION], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [VERSION, [NAME, "Android " + BROWSER]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [NAME, VERSION], [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i], [VERSION, [NAME, "Mobile Safari"]], [/version\/([\w\.]+) .*(mobile ?safari|safari)/i], [VERSION, NAME], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [NAME, [VERSION, strMapper, oldSafariMap]], [/(webkit|khtml)\/([\w\.]+)/i], [NAME, VERSION], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[NAME, "Netscape"], VERSION], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [VERSION, [NAME, FIREFOX + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [NAME, VERSION]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[ARCHITECTURE, "amd64"]], [/(ia32(?=;))/i], [[ARCHITECTURE, lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[ARCHITECTURE, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[ARCHITECTURE, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[ARCHITECTURE, "armhf"]], [/windows (ce|mobile); ppc;/i], [[ARCHITECTURE, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[ARCHITECTURE, /ower/, EMPTY, lowerize]], [/(sun4\w)[;\)]/i], [[ARCHITECTURE, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[ARCHITECTURE, lowerize]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]], [/\((ip(?:hone|od)[\w ]*);/i], [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [MODEL, [VENDOR, APPLE], [TYPE, TABLET]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i], [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, MOBILE]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, TABLET]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [MODEL, [VENDOR, "OPPO"], [TYPE, MOBILE]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [MODEL, [VENDOR, "Vivo"], [TYPE, MOBILE]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [MODEL, [VENDOR, "Realme"], [TYPE, MOBILE]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [MODEL, [VENDOR, LG], [TYPE, TABLET]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [MODEL, [VENDOR, LG], [TYPE, MOBILE]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [MODEL, [VENDOR, "Lenovo"], [TYPE, TABLET]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[MODEL, /_/g, " "], [VENDOR, "Nokia"], [TYPE, MOBILE]], [/(pixel c)\b/i], [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]], [/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [MODEL, [VENDOR, SONY], [TYPE, MOBILE]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[MODEL, "Xperia Tablet"], [VENDOR, SONY], [TYPE, TABLET]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [MODEL, [VENDOR, "OnePlus"], [TYPE, MOBILE]], [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[MODEL, /(.+)/g, "Fire Phone $1"], [VENDOR, AMAZON], [TYPE, MOBILE]], [/(playbook);[-\w\),; ]+(rim)/i], [MODEL, VENDOR, [TYPE, TABLET]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [MODEL, [VENDOR, ASUS], [TYPE, TABLET]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]], [/(nexus 9)/i], [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i], [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [MODEL, [VENDOR, "Meizu"], [TYPE, MOBILE]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [MODEL, [VENDOR, "Sharp"], [TYPE, MOBILE]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [VENDOR, MODEL, [TYPE, MOBILE]], [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [VENDOR, MODEL, [TYPE, TABLET]], [/(surface duo)/i], [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [MODEL, [VENDOR, "Fairphone"], [TYPE, MOBILE]], [/(u304aa)/i], [MODEL, [VENDOR, "AT&T"], [TYPE, MOBILE]], [/\bsie-(\w*)/i], [MODEL, [VENDOR, "Siemens"], [TYPE, MOBILE]], [/\b(rct\w+) b/i], [MODEL, [VENDOR, "RCA"], [TYPE, TABLET]], [/\b(venue[\d ]{2,7}) b/i], [MODEL, [VENDOR, "Dell"], [TYPE, TABLET]], [/\b(q(?:mv|ta)\w+) b/i], [MODEL, [VENDOR, "Verizon"], [TYPE, TABLET]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [MODEL, [VENDOR, "Barnes & Noble"], [TYPE, TABLET]], [/\b(tm\d{3}\w+) b/i], [MODEL, [VENDOR, "NuVision"], [TYPE, TABLET]], [/\b(k88) b/i], [MODEL, [VENDOR, "ZTE"], [TYPE, TABLET]], [/\b(nx\d{3}j) b/i], [MODEL, [VENDOR, "ZTE"], [TYPE, MOBILE]], [/\b(gen\d{3}) b.+49h/i], [MODEL, [VENDOR, "Swiss"], [TYPE, MOBILE]], [/\b(zur\d{3}) b/i], [MODEL, [VENDOR, "Swiss"], [TYPE, TABLET]], [/\b((zeki)?tb.*\b) b/i], [MODEL, [VENDOR, "Zeki"], [TYPE, TABLET]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]], [/\b(ns-?\w{0,9}) b/i], [MODEL, [VENDOR, "Insignia"], [TYPE, TABLET]], [/\b((nxa|next)-?\w{0,9}) b/i], [MODEL, [VENDOR, "NextBook"], [TYPE, TABLET]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[VENDOR, "Voice"], MODEL, [TYPE, MOBILE]], [/\b(lvtel\-)?(v1[12]) b/i], [[VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]], [/\b(ph-1) /i], [MODEL, [VENDOR, "Essential"], [TYPE, MOBILE]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [MODEL, [VENDOR, "Envizen"], [TYPE, TABLET]], [/\b(trio[-\w\. ]+) b/i], [MODEL, [VENDOR, "MachSpeed"], [TYPE, TABLET]], [/\btu_(1491) b/i], [MODEL, [VENDOR, "Rotor"], [TYPE, TABLET]], [/(shield[\w ]+) b/i], [MODEL, [VENDOR, "Nvidia"], [TYPE, TABLET]], [/(sprint) (\w+)/i], [VENDOR, MODEL, [TYPE, MOBILE]], [/(kin\.[onetw]{3})/i], [[MODEL, /\./g, " "], [VENDOR, MICROSOFT], [TYPE, MOBILE]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [VENDOR, MODEL, [TYPE, CONSOLE]], [/droid.+; (shield) bui/i], [MODEL, [VENDOR, "Nvidia"], [TYPE, CONSOLE]], [/(playstation [345portablevi]+)/i], [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]], [/smart-tv.+(samsung)/i], [VENDOR, [TYPE, SMARTTV]], [/hbbtv.+maple;(\d+)/i], [[MODEL, /^/, "SmartTV"], [VENDOR, SAMSUNG], [TYPE, SMARTTV]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[VENDOR, LG], [TYPE, SMARTTV]], [/(apple) ?tv/i], [VENDOR, [MODEL, APPLE + " TV"], [TYPE, SMARTTV]], [/crkey/i], [[MODEL, CHROME + "cast"], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [/droid.+aft(\w)( bui|\))/i], [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]], [/\(dtv[\);].+(aquos)/i], [MODEL, [VENDOR, "Sharp"], [TYPE, SMARTTV]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i], [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[TYPE, SMARTTV]], [/((pebble))app/i], [VENDOR, MODEL, [TYPE, WEARABLE]], [/droid.+; (glass) \d/i], [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]], [/droid.+; (wt63?0{2,3})\)/i], [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]], [/(quest( 2)?)/i], [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [VENDOR, [TYPE, EMBEDDED]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [MODEL, [TYPE, MOBILE]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [MODEL, [TYPE, TABLET]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[TYPE, TABLET]], [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i], [[TYPE, MOBILE]], [/(android[-\w\. ]{0,9});.+buil/i], [MODEL, [VENDOR, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [VERSION, [NAME, EDGE + "HTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [VERSION, [NAME, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i], [NAME, VERSION], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [VERSION, NAME]], os: [[/microsoft (windows) (vista|xp)/i], [NAME, VERSION], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [NAME, [VERSION, strMapper, windowsVersionMap]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[NAME, "Windows"], [VERSION, strMapper, windowsVersionMap]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i], [[VERSION, /_/g, "."], [NAME, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[NAME, "Mac OS"], [VERSION, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86)/i], [VERSION, NAME], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [NAME, VERSION], [/\(bb(10);/i], [VERSION, [NAME, BLACKBERRY]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [VERSION, [NAME, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [VERSION, [NAME, FIREFOX + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [VERSION, [NAME, "webOS"]], [/crkey\/([\d\.]+)/i], [VERSION, [NAME, CHROME + "cast"]], [/(cros) [\w]+ ([\w\.]+\w)/i], [[NAME, "Chromium OS"], VERSION], [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [NAME, VERSION], [/(sunos) ?([\w\.\d]*)/i], [[NAME, "Solaris"], VERSION], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i], [NAME, VERSION]] };
    var UAParser2 = function(ua2, extensions) {
      if (typeof ua2 === OBJ_TYPE) {
        extensions = ua2;
        ua2 = undefined$1;
      }
      if (!(this instanceof UAParser2)) {
        return new UAParser2(ua2, extensions).getResult();
      }
      var _ua = ua2 || (typeof window2 !== UNDEF_TYPE && window2.navigator && window2.navigator.userAgent ? window2.navigator.userAgent : EMPTY);
      var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
      this.getBrowser = function() {
        var _browser = {};
        _browser[NAME] = undefined$1;
        _browser[VERSION] = undefined$1;
        rgxMapper.call(_browser, _ua, _rgxmap.browser);
        _browser.major = majorize(_browser.version);
        return _browser;
      };
      this.getCPU = function() {
        var _cpu = {};
        _cpu[ARCHITECTURE] = undefined$1;
        rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
        return _cpu;
      };
      this.getDevice = function() {
        var _device = {};
        _device[VENDOR] = undefined$1;
        _device[MODEL] = undefined$1;
        _device[TYPE] = undefined$1;
        rgxMapper.call(_device, _ua, _rgxmap.device);
        return _device;
      };
      this.getEngine = function() {
        var _engine = {};
        _engine[NAME] = undefined$1;
        _engine[VERSION] = undefined$1;
        rgxMapper.call(_engine, _ua, _rgxmap.engine);
        return _engine;
      };
      this.getOS = function() {
        var _os = {};
        _os[NAME] = undefined$1;
        _os[VERSION] = undefined$1;
        rgxMapper.call(_os, _ua, _rgxmap.os);
        return _os;
      };
      this.getResult = function() {
        return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
      };
      this.getUA = function() {
        return _ua;
      };
      this.setUA = function(ua3) {
        _ua = typeof ua3 === STR_TYPE && ua3.length > UA_MAX_LENGTH ? trim(ua3, UA_MAX_LENGTH) : ua3;
        return this;
      };
      this.setUA(_ua);
      return this;
    };
    UAParser2.VERSION = LIBVERSION;
    UAParser2.BROWSER = enumerize([NAME, VERSION, MAJOR]);
    UAParser2.CPU = enumerize([ARCHITECTURE]);
    UAParser2.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
    UAParser2.ENGINE = UAParser2.OS = enumerize([NAME, VERSION]);
    {
      if (module.exports) {
        exports = module.exports = UAParser2;
      }
      exports.UAParser = UAParser2;
    }
    var $ = typeof window2 !== UNDEF_TYPE && (window2.jQuery || window2.Zepto);
    if ($ && !$.ua) {
      var parser = new UAParser2();
      $.ua = parser.getResult();
      $.ua.get = function() {
        return parser.getUA();
      };
      $.ua.set = function(ua2) {
        parser.setUA(ua2);
        var result = parser.getResult();
        for (var prop in result) {
          $.ua[prop] = result[prop];
        }
      };
    }
  })(typeof window === "object" ? window : commonjsGlobal$1);
})(uaParser_min, uaParser_min.exports);
Object.defineProperty(lib, "__esModule", { value: true });
function _interopDefault(ex) {
  return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}
var React = react.exports;
var React__default = _interopDefault(React);
var UAParser = uaParser_min.exports;
var ClientUAInstance = new UAParser();
var browser = ClientUAInstance.getBrowser();
var cpu = ClientUAInstance.getCPU();
var device = ClientUAInstance.getDevice();
var engine = ClientUAInstance.getEngine();
var os = ClientUAInstance.getOS();
var ua = ClientUAInstance.getUA();
var setUa = function setUa2(userAgentString) {
  return ClientUAInstance.setUA(userAgentString);
};
var parseUserAgent = function parseUserAgent2(userAgent) {
  if (!userAgent) {
    console.error("No userAgent string was provided");
    return;
  }
  var UserAgentInstance = new UAParser(userAgent);
  return {
    UA: UserAgentInstance,
    browser: UserAgentInstance.getBrowser(),
    cpu: UserAgentInstance.getCPU(),
    device: UserAgentInstance.getDevice(),
    engine: UserAgentInstance.getEngine(),
    os: UserAgentInstance.getOS(),
    ua: UserAgentInstance.getUA(),
    setUserAgent: function setUserAgent3(userAgentString) {
      return UserAgentInstance.setUA(userAgentString);
    }
  };
};
var UAHelper = /* @__PURE__ */ Object.freeze({
  ClientUAInstance,
  browser,
  cpu,
  device,
  engine,
  os,
  ua,
  setUa,
  parseUserAgent
});
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _possibleConstructorReturn(self2, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var DeviceTypes = {
  Mobile: "mobile",
  Tablet: "tablet",
  SmartTv: "smarttv",
  Console: "console",
  Wearable: "wearable",
  Embedded: "embedded",
  Browser: void 0
};
var BrowserTypes = {
  Chrome: "Chrome",
  Firefox: "Firefox",
  Opera: "Opera",
  Yandex: "Yandex",
  Safari: "Safari",
  InternetExplorer: "Internet Explorer",
  Edge: "Edge",
  Chromium: "Chromium",
  Ie: "IE",
  MobileSafari: "Mobile Safari",
  EdgeChromium: "Edge Chromium",
  MIUI: "MIUI Browser",
  SamsungBrowser: "Samsung Browser"
};
var OsTypes = {
  IOS: "iOS",
  Android: "Android",
  WindowsPhone: "Windows Phone",
  Windows: "Windows",
  MAC_OS: "Mac OS"
};
var InitialDeviceTypes = {
  isMobile: false,
  isTablet: false,
  isBrowser: false,
  isSmartTV: false,
  isConsole: false,
  isWearable: false
};
var checkDeviceType = function checkDeviceType2(type) {
  switch (type) {
    case DeviceTypes.Mobile:
      return {
        isMobile: true
      };
    case DeviceTypes.Tablet:
      return {
        isTablet: true
      };
    case DeviceTypes.SmartTv:
      return {
        isSmartTV: true
      };
    case DeviceTypes.Console:
      return {
        isConsole: true
      };
    case DeviceTypes.Wearable:
      return {
        isWearable: true
      };
    case DeviceTypes.Browser:
      return {
        isBrowser: true
      };
    case DeviceTypes.Embedded:
      return {
        isEmbedded: true
      };
    default:
      return InitialDeviceTypes;
  }
};
var setUserAgent = function setUserAgent2(userAgent) {
  return setUa(userAgent);
};
var setDefaults = function setDefaults2(p2) {
  var d2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none";
  return p2 ? p2 : d2;
};
var getNavigatorInstance = function getNavigatorInstance2() {
  if (typeof window !== "undefined") {
    if (window.navigator || navigator) {
      return window.navigator || navigator;
    }
  }
  return false;
};
var isIOS13Check = function isIOS13Check2(type) {
  var nav = getNavigatorInstance();
  return nav && nav.platform && (nav.platform.indexOf(type) !== -1 || nav.platform === "MacIntel" && nav.maxTouchPoints > 1 && !window.MSStream);
};
var browserPayload = function browserPayload2(isBrowser2, browser2, engine2, os2, ua2) {
  return {
    isBrowser: isBrowser2,
    browserMajorVersion: setDefaults(browser2.major),
    browserFullVersion: setDefaults(browser2.version),
    browserName: setDefaults(browser2.name),
    engineName: setDefaults(engine2.name),
    engineVersion: setDefaults(engine2.version),
    osName: setDefaults(os2.name),
    osVersion: setDefaults(os2.version),
    userAgent: setDefaults(ua2)
  };
};
var mobilePayload = function mobilePayload2(type, device2, os2, ua2) {
  return _objectSpread2({}, type, {
    vendor: setDefaults(device2.vendor),
    model: setDefaults(device2.model),
    os: setDefaults(os2.name),
    osVersion: setDefaults(os2.version),
    ua: setDefaults(ua2)
  });
};
var smartTvPayload = function smartTvPayload2(isSmartTV2, engine2, os2, ua2) {
  return {
    isSmartTV: isSmartTV2,
    engineName: setDefaults(engine2.name),
    engineVersion: setDefaults(engine2.version),
    osName: setDefaults(os2.name),
    osVersion: setDefaults(os2.version),
    userAgent: setDefaults(ua2)
  };
};
var consolePayload = function consolePayload2(isConsole2, engine2, os2, ua2) {
  return {
    isConsole: isConsole2,
    engineName: setDefaults(engine2.name),
    engineVersion: setDefaults(engine2.version),
    osName: setDefaults(os2.name),
    osVersion: setDefaults(os2.version),
    userAgent: setDefaults(ua2)
  };
};
var wearablePayload = function wearablePayload2(isWearable2, engine2, os2, ua2) {
  return {
    isWearable: isWearable2,
    engineName: setDefaults(engine2.name),
    engineVersion: setDefaults(engine2.version),
    osName: setDefaults(os2.name),
    osVersion: setDefaults(os2.version),
    userAgent: setDefaults(ua2)
  };
};
var embeddedPayload = function embeddedPayload2(isEmbedded2, device2, engine2, os2, ua2) {
  return {
    isEmbedded: isEmbedded2,
    vendor: setDefaults(device2.vendor),
    model: setDefaults(device2.model),
    engineName: setDefaults(engine2.name),
    engineVersion: setDefaults(engine2.version),
    osName: setDefaults(os2.name),
    osVersion: setDefaults(os2.version),
    userAgent: setDefaults(ua2)
  };
};
function deviceDetect(userAgent) {
  var _ref = userAgent ? parseUserAgent(userAgent) : UAHelper, device2 = _ref.device, browser2 = _ref.browser, engine2 = _ref.engine, os2 = _ref.os, ua2 = _ref.ua;
  var type = checkDeviceType(device2.type);
  var isBrowser2 = type.isBrowser, isMobile2 = type.isMobile, isTablet2 = type.isTablet, isSmartTV2 = type.isSmartTV, isConsole2 = type.isConsole, isWearable2 = type.isWearable, isEmbedded2 = type.isEmbedded;
  if (isBrowser2) {
    return browserPayload(isBrowser2, browser2, engine2, os2, ua2);
  }
  if (isSmartTV2) {
    return smartTvPayload(isSmartTV2, engine2, os2, ua2);
  }
  if (isConsole2) {
    return consolePayload(isConsole2, engine2, os2, ua2);
  }
  if (isMobile2) {
    return mobilePayload(type, device2, os2, ua2);
  }
  if (isTablet2) {
    return mobilePayload(type, device2, os2, ua2);
  }
  if (isWearable2) {
    return wearablePayload(isWearable2, engine2, os2, ua2);
  }
  if (isEmbedded2) {
    return embeddedPayload(isEmbedded2, device2, engine2, os2, ua2);
  }
}
var isMobileType = function isMobileType2(_ref) {
  var type = _ref.type;
  return type === DeviceTypes.Mobile;
};
var isTabletType = function isTabletType2(_ref2) {
  var type = _ref2.type;
  return type === DeviceTypes.Tablet;
};
var isMobileAndTabletType = function isMobileAndTabletType2(_ref3) {
  var type = _ref3.type;
  return type === DeviceTypes.Mobile || type === DeviceTypes.Tablet;
};
var isSmartTVType = function isSmartTVType2(_ref4) {
  var type = _ref4.type;
  return type === DeviceTypes.SmartTv;
};
var isBrowserType = function isBrowserType2(_ref5) {
  var type = _ref5.type;
  return type === DeviceTypes.Browser;
};
var isWearableType = function isWearableType2(_ref6) {
  var type = _ref6.type;
  return type === DeviceTypes.Wearable;
};
var isConsoleType = function isConsoleType2(_ref7) {
  var type = _ref7.type;
  return type === DeviceTypes.Console;
};
var isEmbeddedType = function isEmbeddedType2(_ref8) {
  var type = _ref8.type;
  return type === DeviceTypes.Embedded;
};
var getMobileVendor = function getMobileVendor2(_ref9) {
  var vendor = _ref9.vendor;
  return setDefaults(vendor);
};
var getMobileModel = function getMobileModel2(_ref10) {
  var model = _ref10.model;
  return setDefaults(model);
};
var getDeviceType = function getDeviceType2(_ref11) {
  var type = _ref11.type;
  return setDefaults(type, "browser");
};
var isAndroidType = function isAndroidType2(_ref12) {
  var name = _ref12.name;
  return name === OsTypes.Android;
};
var isWindowsType = function isWindowsType2(_ref13) {
  var name = _ref13.name;
  return name === OsTypes.Windows;
};
var isMacOsType = function isMacOsType2(_ref14) {
  var name = _ref14.name;
  return name === OsTypes.MAC_OS;
};
var isWinPhoneType = function isWinPhoneType2(_ref15) {
  var name = _ref15.name;
  return name === OsTypes.WindowsPhone;
};
var isIOSType = function isIOSType2(_ref16) {
  var name = _ref16.name;
  return name === OsTypes.IOS;
};
var getOsVersion = function getOsVersion2(_ref17) {
  var version = _ref17.version;
  return setDefaults(version);
};
var getOsName = function getOsName2(_ref18) {
  var name = _ref18.name;
  return setDefaults(name);
};
var isChromeType = function isChromeType2(_ref19) {
  var name = _ref19.name;
  return name === BrowserTypes.Chrome;
};
var isFirefoxType = function isFirefoxType2(_ref20) {
  var name = _ref20.name;
  return name === BrowserTypes.Firefox;
};
var isChromiumType = function isChromiumType2(_ref21) {
  var name = _ref21.name;
  return name === BrowserTypes.Chromium;
};
var isEdgeType = function isEdgeType2(_ref22) {
  var name = _ref22.name;
  return name === BrowserTypes.Edge;
};
var isYandexType = function isYandexType2(_ref23) {
  var name = _ref23.name;
  return name === BrowserTypes.Yandex;
};
var isSafariType = function isSafariType2(_ref24) {
  var name = _ref24.name;
  return name === BrowserTypes.Safari || name === BrowserTypes.MobileSafari;
};
var isMobileSafariType = function isMobileSafariType2(_ref25) {
  var name = _ref25.name;
  return name === BrowserTypes.MobileSafari;
};
var isOperaType = function isOperaType2(_ref26) {
  var name = _ref26.name;
  return name === BrowserTypes.Opera;
};
var isIEType = function isIEType2(_ref27) {
  var name = _ref27.name;
  return name === BrowserTypes.InternetExplorer || name === BrowserTypes.Ie;
};
var isMIUIType = function isMIUIType2(_ref28) {
  var name = _ref28.name;
  return name === BrowserTypes.MIUI;
};
var isSamsungBrowserType = function isSamsungBrowserType2(_ref29) {
  var name = _ref29.name;
  return name === BrowserTypes.SamsungBrowser;
};
var getBrowserFullVersion = function getBrowserFullVersion2(_ref30) {
  var version = _ref30.version;
  return setDefaults(version);
};
var getBrowserVersion = function getBrowserVersion2(_ref31) {
  var major = _ref31.major;
  return setDefaults(major);
};
var getBrowserName = function getBrowserName2(_ref32) {
  var name = _ref32.name;
  return setDefaults(name);
};
var getEngineName = function getEngineName2(_ref33) {
  var name = _ref33.name;
  return setDefaults(name);
};
var getEngineVersion = function getEngineVersion2(_ref34) {
  var version = _ref34.version;
  return setDefaults(version);
};
var isElectronType = function isElectronType2() {
  var nav = getNavigatorInstance();
  var ua2 = nav && nav.userAgent && nav.userAgent.toLowerCase();
  return typeof ua2 === "string" ? /electron/.test(ua2) : false;
};
var isEdgeChromiumType = function isEdgeChromiumType2(ua2) {
  return typeof ua2 === "string" && ua2.indexOf("Edg/") !== -1;
};
var getIOS13 = function getIOS132() {
  var nav = getNavigatorInstance();
  return nav && (/iPad|iPhone|iPod/.test(nav.platform) || nav.platform === "MacIntel" && nav.maxTouchPoints > 1) && !window.MSStream;
};
var getIPad13 = function getIPad132() {
  return isIOS13Check("iPad");
};
var getIphone13 = function getIphone132() {
  return isIOS13Check("iPhone");
};
var getIPod13 = function getIPod132() {
  return isIOS13Check("iPod");
};
var getUseragent = function getUseragent2(userAg) {
  return setDefaults(userAg);
};
function buildSelectorsObject(options) {
  var _ref = options ? options : UAHelper, device2 = _ref.device, browser2 = _ref.browser, os2 = _ref.os, engine2 = _ref.engine, ua2 = _ref.ua;
  return {
    isSmartTV: isSmartTVType(device2),
    isConsole: isConsoleType(device2),
    isWearable: isWearableType(device2),
    isEmbedded: isEmbeddedType(device2),
    isMobileSafari: isMobileSafariType(browser2) || getIPad13(),
    isChromium: isChromiumType(browser2),
    isMobile: isMobileAndTabletType(device2) || getIPad13(),
    isMobileOnly: isMobileType(device2),
    isTablet: isTabletType(device2) || getIPad13(),
    isBrowser: isBrowserType(device2),
    isDesktop: isBrowserType(device2),
    isAndroid: isAndroidType(os2),
    isWinPhone: isWinPhoneType(os2),
    isIOS: isIOSType(os2) || getIPad13(),
    isChrome: isChromeType(browser2),
    isFirefox: isFirefoxType(browser2),
    isSafari: isSafariType(browser2),
    isOpera: isOperaType(browser2),
    isIE: isIEType(browser2),
    osVersion: getOsVersion(os2),
    osName: getOsName(os2),
    fullBrowserVersion: getBrowserFullVersion(browser2),
    browserVersion: getBrowserVersion(browser2),
    browserName: getBrowserName(browser2),
    mobileVendor: getMobileVendor(device2),
    mobileModel: getMobileModel(device2),
    engineName: getEngineName(engine2),
    engineVersion: getEngineVersion(engine2),
    getUA: getUseragent(ua2),
    isEdge: isEdgeType(browser2) || isEdgeChromiumType(ua2),
    isYandex: isYandexType(browser2),
    deviceType: getDeviceType(device2),
    isIOS13: getIOS13(),
    isIPad13: getIPad13(),
    isIPhone13: getIphone13(),
    isIPod13: getIPod13(),
    isElectron: isElectronType(),
    isEdgeChromium: isEdgeChromiumType(ua2),
    isLegacyEdge: isEdgeType(browser2) && !isEdgeChromiumType(ua2),
    isWindows: isWindowsType(os2),
    isMacOs: isMacOsType(os2),
    isMIUI: isMIUIType(browser2),
    isSamsungBrowser: isSamsungBrowserType(browser2)
  };
}
var isSmartTV = isSmartTVType(device);
var isConsole = isConsoleType(device);
var isWearable = isWearableType(device);
var isEmbedded = isEmbeddedType(device);
var isMobileSafari = isMobileSafariType(browser) || getIPad13();
var isChromium = isChromiumType(browser);
var isMobile = isMobileAndTabletType(device) || getIPad13();
var isMobileOnly = isMobileType(device);
var isTablet = isTabletType(device) || getIPad13();
var isBrowser = isBrowserType(device);
var isDesktop = isBrowserType(device);
var isAndroid = isAndroidType(os);
var isWinPhone = isWinPhoneType(os);
var isIOS = isIOSType(os) || getIPad13();
var isChrome = isChromeType(browser);
var isFirefox = isFirefoxType(browser);
var isSafari = isSafariType(browser);
var isOpera = isOperaType(browser);
var isIE = isIEType(browser);
var osVersion = getOsVersion(os);
var osName = getOsName(os);
var fullBrowserVersion = getBrowserFullVersion(browser);
var browserVersion = getBrowserVersion(browser);
var browserName = getBrowserName(browser);
var mobileVendor = getMobileVendor(device);
var mobileModel = getMobileModel(device);
var engineName = getEngineName(engine);
var engineVersion = getEngineVersion(engine);
var getUA = getUseragent(ua);
var isEdge = isEdgeType(browser) || isEdgeChromiumType(ua);
var isYandex = isYandexType(browser);
var deviceType = getDeviceType(device);
var isIOS13 = getIOS13();
var isIPad13 = getIPad13();
var isIPhone13 = getIphone13();
var isIPod13 = getIPod13();
var isElectron = isElectronType();
var isEdgeChromium = isEdgeChromiumType(ua);
var isLegacyEdge = isEdgeType(browser) && !isEdgeChromiumType(ua);
var isWindows = isWindowsType(os);
var isMacOs = isMacOsType(os);
var isMIUI = isMIUIType(browser);
var isSamsungBrowser = isSamsungBrowserType(browser);
var getSelectorsByUserAgent = function getSelectorsByUserAgent2(userAgent) {
  if (!userAgent || typeof userAgent !== "string") {
    console.error("No valid user agent string was provided");
    return;
  }
  var _UAHelper$parseUserAg = parseUserAgent(userAgent), device2 = _UAHelper$parseUserAg.device, browser2 = _UAHelper$parseUserAg.browser, os2 = _UAHelper$parseUserAg.os, engine2 = _UAHelper$parseUserAg.engine, ua2 = _UAHelper$parseUserAg.ua;
  return buildSelectorsObject({
    device: device2,
    browser: browser2,
    os: os2,
    engine: engine2,
    ua: ua2
  });
};
var AndroidView = function AndroidView2(_ref) {
  var renderWithFragment = _ref.renderWithFragment, children = _ref.children, props = _objectWithoutProperties(_ref, ["renderWithFragment", "children"]);
  return isAndroid ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var BrowserView = function BrowserView2(_ref2) {
  var renderWithFragment = _ref2.renderWithFragment, children = _ref2.children, props = _objectWithoutProperties(_ref2, ["renderWithFragment", "children"]);
  return isBrowser ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var IEView = function IEView2(_ref3) {
  var renderWithFragment = _ref3.renderWithFragment, children = _ref3.children, props = _objectWithoutProperties(_ref3, ["renderWithFragment", "children"]);
  return isIE ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var IOSView = function IOSView2(_ref4) {
  var renderWithFragment = _ref4.renderWithFragment, children = _ref4.children, props = _objectWithoutProperties(_ref4, ["renderWithFragment", "children"]);
  return isIOS ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var MobileView = function MobileView2(_ref5) {
  var renderWithFragment = _ref5.renderWithFragment, children = _ref5.children, props = _objectWithoutProperties(_ref5, ["renderWithFragment", "children"]);
  return isMobile ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var TabletView = function TabletView2(_ref6) {
  var renderWithFragment = _ref6.renderWithFragment, children = _ref6.children, props = _objectWithoutProperties(_ref6, ["renderWithFragment", "children"]);
  return isTablet ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var WinPhoneView = function WinPhoneView2(_ref7) {
  var renderWithFragment = _ref7.renderWithFragment, children = _ref7.children, props = _objectWithoutProperties(_ref7, ["renderWithFragment", "children"]);
  return isWinPhone ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var MobileOnlyView = function MobileOnlyView2(_ref8) {
  var renderWithFragment = _ref8.renderWithFragment, children = _ref8.children;
  _ref8.viewClassName;
  _ref8.style;
  var props = _objectWithoutProperties(_ref8, ["renderWithFragment", "children", "viewClassName", "style"]);
  return isMobileOnly ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var SmartTVView = function SmartTVView2(_ref9) {
  var renderWithFragment = _ref9.renderWithFragment, children = _ref9.children, props = _objectWithoutProperties(_ref9, ["renderWithFragment", "children"]);
  return isSmartTV ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var ConsoleView = function ConsoleView2(_ref10) {
  var renderWithFragment = _ref10.renderWithFragment, children = _ref10.children, props = _objectWithoutProperties(_ref10, ["renderWithFragment", "children"]);
  return isConsole ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var WearableView = function WearableView2(_ref11) {
  var renderWithFragment = _ref11.renderWithFragment, children = _ref11.children, props = _objectWithoutProperties(_ref11, ["renderWithFragment", "children"]);
  return isWearable ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var CustomView = function CustomView2(_ref12) {
  var renderWithFragment = _ref12.renderWithFragment, children = _ref12.children;
  _ref12.viewClassName;
  _ref12.style;
  var condition = _ref12.condition, props = _objectWithoutProperties(_ref12, ["renderWithFragment", "children", "viewClassName", "style", "condition"]);
  return condition ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
function withOrientationChange(WrappedComponent) {
  return /* @__PURE__ */ function(_React$Component) {
    _inherits(_class, _React$Component);
    function _class(props) {
      var _this;
      _classCallCheck(this, _class);
      _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
      _this.isEventListenerAdded = false;
      _this.handleOrientationChange = _this.handleOrientationChange.bind(_assertThisInitialized(_this));
      _this.onOrientationChange = _this.onOrientationChange.bind(_assertThisInitialized(_this));
      _this.onPageLoad = _this.onPageLoad.bind(_assertThisInitialized(_this));
      _this.state = {
        isLandscape: false,
        isPortrait: false
      };
      return _this;
    }
    _createClass(_class, [{
      key: "handleOrientationChange",
      value: function handleOrientationChange() {
        if (!this.isEventListenerAdded) {
          this.isEventListenerAdded = true;
        }
        var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
        this.setState({
          isPortrait: orientation === 0,
          isLandscape: orientation === 90
        });
      }
    }, {
      key: "onOrientationChange",
      value: function onOrientationChange() {
        this.handleOrientationChange();
      }
    }, {
      key: "onPageLoad",
      value: function onPageLoad() {
        this.handleOrientationChange();
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== void 0 && isMobile) {
          if (!this.isEventListenerAdded) {
            this.handleOrientationChange();
            window.addEventListener("load", this.onPageLoad, false);
          } else {
            window.removeEventListener("load", this.onPageLoad, false);
          }
          window.addEventListener("resize", this.onOrientationChange, false);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener("resize", this.onOrientationChange, false);
      }
    }, {
      key: "render",
      value: function render() {
        return React__default.createElement(WrappedComponent, _extends({}, this.props, {
          isLandscape: this.state.isLandscape,
          isPortrait: this.state.isPortrait
        }));
      }
    }]);
    return _class;
  }(React__default.Component);
}
function useMobileOrientation() {
  var _useState = React.useState(function() {
    var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
    return {
      isPortrait: orientation === 0,
      isLandscape: orientation === 90,
      orientation: orientation === 0 ? "portrait" : "landscape"
    };
  }), _useState2 = _slicedToArray(_useState, 2), state = _useState2[0], setState = _useState2[1];
  var handleOrientationChange = React.useCallback(function() {
    var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
    var next = {
      isPortrait: orientation === 0,
      isLandscape: orientation === 90,
      orientation: orientation === 0 ? "portrait" : "landscape"
    };
    state.orientation !== next.orientation && setState(next);
  }, [state.orientation]);
  React.useEffect(function() {
    if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== void 0 && isMobile) {
      handleOrientationChange();
      window.addEventListener("load", handleOrientationChange, false);
      window.addEventListener("resize", handleOrientationChange, false);
    }
    return function() {
      window.removeEventListener("resize", handleOrientationChange, false);
      window.removeEventListener("load", handleOrientationChange, false);
    };
  }, [handleOrientationChange]);
  return state;
}
function useDeviceData(userAgent) {
  var hookUserAgent = userAgent ? userAgent : window.navigator.userAgent;
  return parseUserAgent(hookUserAgent);
}
function useDeviceSelectors(userAgent) {
  var hookUserAgent = userAgent ? userAgent : window.navigator.userAgent;
  var deviceData = useDeviceData(hookUserAgent);
  var selectors = buildSelectorsObject(deviceData);
  return [selectors, deviceData];
}
lib.AndroidView = AndroidView;
lib.BrowserTypes = BrowserTypes;
lib.BrowserView = BrowserView;
lib.ConsoleView = ConsoleView;
lib.CustomView = CustomView;
lib.IEView = IEView;
lib.IOSView = IOSView;
lib.MobileOnlyView = MobileOnlyView;
lib.MobileView = MobileView;
lib.OsTypes = OsTypes;
lib.SmartTVView = SmartTVView;
lib.TabletView = TabletView;
lib.WearableView = WearableView;
lib.WinPhoneView = WinPhoneView;
lib.browserName = browserName;
lib.browserVersion = browserVersion;
lib.deviceDetect = deviceDetect;
lib.deviceType = deviceType;
lib.engineName = engineName;
lib.engineVersion = engineVersion;
lib.fullBrowserVersion = fullBrowserVersion;
lib.getSelectorsByUserAgent = getSelectorsByUserAgent;
lib.getUA = getUA;
lib.isAndroid = isAndroid;
lib.isBrowser = isBrowser;
lib.isChrome = isChrome;
lib.isChromium = isChromium;
lib.isConsole = isConsole;
lib.isDesktop = isDesktop;
lib.isEdge = isEdge;
lib.isEdgeChromium = isEdgeChromium;
lib.isElectron = isElectron;
lib.isEmbedded = isEmbedded;
lib.isFirefox = isFirefox;
lib.isIE = isIE;
lib.isIOS = isIOS;
lib.isIOS13 = isIOS13;
lib.isIPad13 = isIPad13;
lib.isIPhone13 = isIPhone13;
lib.isIPod13 = isIPod13;
lib.isLegacyEdge = isLegacyEdge;
lib.isMIUI = isMIUI;
lib.isMacOs = isMacOs;
var isMobile_1 = lib.isMobile = isMobile;
lib.isMobileOnly = isMobileOnly;
lib.isMobileSafari = isMobileSafari;
lib.isOpera = isOpera;
lib.isSafari = isSafari;
lib.isSamsungBrowser = isSamsungBrowser;
lib.isSmartTV = isSmartTV;
lib.isTablet = isTablet;
lib.isWearable = isWearable;
lib.isWinPhone = isWinPhone;
lib.isWindows = isWindows;
lib.isYandex = isYandex;
lib.mobileModel = mobileModel;
lib.mobileVendor = mobileVendor;
lib.osName = osName;
lib.osVersion = osVersion;
lib.parseUserAgent = parseUserAgent;
lib.setUserAgent = setUserAgent;
lib.useDeviceData = useDeviceData;
lib.useDeviceSelectors = useDeviceSelectors;
lib.useMobileOrientation = useMobileOrientation;
lib.withOrientationChange = withOrientationChange;
const TERMINAL_ABI = {
  "ABI version": 2,
  "header": ["time"],
  "functions": [
    {
      "name": "input",
      "inputs": [
        { "name": "answerId", "type": "uint32" },
        { "name": "prompt", "type": "bytes" },
        { "name": "multiline", "type": "bool" }
      ],
      "outputs": [
        { "name": "value", "type": "bytes" }
      ]
    },
    {
      "name": "inputStr",
      "inputs": [
        { "name": "answerId", "type": "uint32" },
        { "name": "prompt", "type": "bytes" },
        { "name": "multiline", "type": "bool" }
      ],
      "outputs": [
        { "name": "value", "type": "bytes" }
      ]
    },
    {
      "name": "inputInt",
      "inputs": [
        { "name": "answerId", "type": "uint32" },
        { "name": "prompt", "type": "bytes" }
      ],
      "outputs": [
        { "name": "value", "type": "int256" }
      ]
    },
    {
      "name": "inputUint",
      "inputs": [
        { "name": "answerId", "type": "uint32" },
        { "name": "prompt", "type": "bytes" }
      ],
      "outputs": [
        { "name": "value", "type": "uint256" }
      ]
    },
    {
      "name": "inputTons",
      "inputs": [
        { "name": "answerId", "type": "uint32" },
        { "name": "prompt", "type": "bytes" }
      ],
      "outputs": [
        { "name": "value", "type": "uint128" }
      ]
    },
    {
      "name": "inputBoolean",
      "inputs": [
        { "name": "answerId", "type": "uint32" },
        { "name": "prompt", "type": "bytes" }
      ],
      "outputs": [
        { "name": "value", "type": "bool" }
      ]
    },
    {
      "name": "print",
      "inputs": [
        { "name": "answerId", "type": "uint32" },
        { "name": "message", "type": "bytes" }
      ],
      "outputs": []
    },
    {
      "name": "constructor",
      "inputs": [],
      "outputs": []
    }
  ],
  "data": [],
  "events": []
};
const MEDIA_ABI = {
  "ABI version": 2,
  "header": ["time"],
  "functions": [
    {
      "name": "output",
      "inputs": [
        { "name": "answerId", "type": "uint32" },
        { "name": "prompt", "type": "bytes" },
        { "name": "data", "type": "bytes" }
      ],
      "outputs": [
        { "name": "result", "type": "uint8" }
      ]
    },
    {
      "name": "getSupportedMediaTypes",
      "inputs": [
        { "name": "answerId", "type": "uint32" }
      ],
      "outputs": [
        { "name": "mediaTypes", "type": "bytes" }
      ]
    },
    {
      "name": "constructor",
      "inputs": [],
      "outputs": []
    }
  ],
  "data": [],
  "events": []
};
const MENU_ABI = {
  "ABI version": 2,
  "header": ["time"],
  "functions": [
    {
      "name": "select",
      "inputs": [
        { "name": "title", "type": "bytes" },
        { "name": "description", "type": "bytes" },
        { "components": [{ "name": "title", "type": "bytes" }, { "name": "description", "type": "bytes" }, { "name": "handlerId", "type": "uint32" }], "name": "items", "type": "tuple[]" }
      ],
      "outputs": [
        { "name": "index", "type": "uint32" }
      ]
    },
    {
      "name": "constructor",
      "inputs": [],
      "outputs": []
    }
  ],
  "data": [],
  "events": []
};
const AMOUNT_INPUT_ABI = {
  "ABI version": 2,
  "header": ["time"],
  "functions": [
    {
      "name": "get",
      "inputs": [
        { "name": "answerId", "type": "uint32" },
        { "name": "prompt", "type": "bytes" },
        { "name": "decimals", "type": "uint8" },
        { "name": "min", "type": "uint128" },
        { "name": "max", "type": "uint128" }
      ],
      "outputs": [
        { "name": "value", "type": "uint128" }
      ]
    }
  ],
  "data": [],
  "events": []
};
const CONFIRM_INPUT_ABI = {
  "ABI version": 2,
  "header": ["time"],
  "functions": [
    {
      "name": "get",
      "inputs": [
        { "name": "answerId", "type": "uint32" },
        { "name": "prompt", "type": "bytes" }
      ],
      "outputs": [
        { "name": "value", "type": "bool" }
      ]
    }
  ],
  "data": [],
  "events": []
};
const ADDRESS_INPUT_ABI = {
  "ABI version": 2,
  "header": ["time"],
  "functions": [
    {
      "name": "get",
      "inputs": [
        { "name": "answerId", "type": "uint32" },
        { "name": "prompt", "type": "bytes" }
      ],
      "outputs": [
        { "name": "value", "type": "address" }
      ]
    },
    {
      "name": "select",
      "inputs": [
        { "name": "answerId", "type": "uint32" }
      ],
      "outputs": [
        { "name": "value", "type": "address" }
      ]
    }
  ],
  "data": [],
  "events": []
};
const NUMBER_INPUT_ABI = {
  "ABI version": 2,
  "header": ["time"],
  "functions": [
    {
      "name": "get",
      "inputs": [
        { "name": "answerId", "type": "uint32" },
        { "name": "prompt", "type": "bytes" },
        { "name": "min", "type": "int256" },
        { "name": "max", "type": "int256" }
      ],
      "outputs": [
        { "name": "value", "type": "int256" }
      ]
    }
  ],
  "data": [],
  "events": []
};
const ECHO_ABI = {
  "ABI version": 2,
  "header": ["time"],
  "functions": [
    {
      "name": "echo",
      "inputs": [
        { "name": "answerId", "type": "uint32" },
        { "name": "request", "type": "bytes" }
      ],
      "outputs": [
        { "name": "response", "type": "bytes" }
      ]
    },
    {
      "name": "constructor",
      "inputs": [],
      "outputs": []
    }
  ],
  "data": [],
  "events": []
};
const STDOUT_ABI = {
  "ABI version": 2,
  "header": ["time"],
  "functions": [
    {
      "name": "print",
      "inputs": [
        { "name": "message", "type": "bytes" }
      ],
      "outputs": []
    },
    {
      "name": "constructor",
      "inputs": [],
      "outputs": []
    }
  ],
  "data": [],
  "events": []
};
const SIGNING_BOX_INPUT_ABI = {
  "ABI version": 2,
  "header": ["time"],
  "functions": [
    {
      "name": "get",
      "inputs": [
        { "name": "answerId", "type": "uint32" },
        { "name": "prompt", "type": "bytes" },
        { "name": "possiblePublicKeys", "type": "uint256[]" }
      ],
      "outputs": [
        { "name": "handle", "type": "uint32" }
      ]
    }
  ],
  "data": [],
  "events": []
};
const USERINFO_ABI = {
  "ABI version": 2,
  "header": ["time"],
  "functions": [
    {
      "name": "getAccount",
      "inputs": [
        { "name": "answerId", "type": "uint32" }
      ],
      "outputs": [
        { "name": "value", "type": "address" }
      ]
    },
    {
      "name": "getPublicKey",
      "inputs": [
        { "name": "answerId", "type": "uint32" }
      ],
      "outputs": [
        { "name": "value", "type": "uint256" }
      ]
    },
    {
      "name": "getSigningBox",
      "inputs": [
        { "name": "answerId", "type": "uint32" }
      ],
      "outputs": [
        { "name": "handle", "type": "uint32" }
      ]
    }
  ],
  "data": [],
  "events": []
};
class BaseInterface {
  constructor(id2, abi) {
    __publicField(this, "id");
    __publicField(this, "abi");
    this.id = id2;
    this.abi = abi;
  }
  async call(params) {
    try {
      const decodedMessage = await TonClient.client.abi.decode_message({
        abi: {
          type: "Contract",
          value: this.abi
        },
        message: params.message
      });
      const extendedParams = __spreadValues(__spreadValues({}, params), decodedMessage);
      try {
        this[decodedMessage.name](extendedParams);
        this.sendEvent(extendedParams);
      } catch (err) {
        throw new Error(`Function does not exist on interface: ${this.constructor.name}`);
      }
    } catch (err) {
      console.error("Interface execution failed: ", err);
      EventBus$1.dispatch(EVENTS.DEBOT.FUNCTION_EXECUTION_FAILED, {
        interfaceId: this.id,
        debotAddress: params.debotAddress,
        data: { params, message: err.message }
      });
    }
  }
  sendEvent(params) {
    const { value: { answerId }, debotAddress } = params;
    EventBus$1.dispatch(EVENTS.DEBOT.FUNCTION_CALLED, {
      interfaceId: this.id,
      debotAddress,
      functionId: answerId,
      data: params
    });
  }
}
class Terminal extends BaseInterface {
  constructor() {
    super(TERMINAL_ID, TERMINAL_ABI);
  }
  input(params) {
    return this.inputStr(params);
  }
  inputStr(params) {
    const { answerId, multiline, prompt } = params.value;
    const decodedPrompt = decodeString(prompt);
    const stageObject = {
      text: decodedPrompt,
      functionId: answerId,
      component: multiline ? COMPONENTS_BINDINGS.TEXTAREA : COMPONENTS_BINDINGS.INPUT,
      interfaceAddress: interfaceIdToAddress(this.id)
    };
    store.dispatch(pushItemToStage(stageObject));
  }
  inputInt(params) {
    const { answerId, prompt } = params.value;
    const decodedPrompt = decodeString(prompt);
    const stageObject = {
      text: decodedPrompt,
      functionId: answerId,
      component: COMPONENTS_BINDINGS.AMOUNT_INPUT,
      interfaceAddress: interfaceIdToAddress(this.id)
    };
    store.dispatch(pushItemToStage(stageObject));
  }
  inputUint(params) {
    return this.inputInt(params);
  }
  inputTons(params) {
    const { answerId, prompt } = params.value;
    const decodedPrompt = decodeString(prompt);
    const stageObject = {
      text: decodedPrompt,
      functionId: answerId,
      config: {
        min: "0",
        decimals: "9"
      },
      component: COMPONENTS_BINDINGS.TOKENS_INPUT,
      interfaceAddress: interfaceIdToAddress(this.id)
    };
    store.dispatch(pushItemToStage(stageObject));
  }
  inputBoolean(params) {
    const { answerId, prompt } = params.value;
    const decodedPrompt = decodeString(prompt);
    const stageObject = {
      text: decodedPrompt,
      functionId: answerId,
      component: COMPONENTS_BINDINGS.CONFIRM_INPUT,
      interfaceAddress: interfaceIdToAddress(this.id)
    };
    store.dispatch(pushItemToStage(stageObject));
  }
  print(params) {
    const { answerId, message } = params.value;
    const decodedMessage = decodeString(message);
    const stageObject = {
      text: decodedMessage,
      functionId: answerId,
      component: COMPONENTS_BINDINGS.TEXT,
      interfaceAddress: interfaceIdToAddress(this.id)
    };
    store.dispatch(pushItemToStage(stageObject));
  }
}
class Media$1 extends BaseInterface {
  constructor() {
    super(MEDIA_ID, MEDIA_ABI);
    __publicField(this, "mediaTypes");
    this.mediaTypes = [
      encodeString("image/png"),
      encodeString("image/jpg"),
      encodeString("image/jpeg"),
      encodeString("image/bmp"),
      encodeString("image/gif"),
      encodeString("image/webp")
    ];
  }
  async getSupportedMediaTypes(params) {
    const { value: { answerId }, debotAddress } = params;
    const interfaceAddress = interfaceIdToAddress(this.id);
    try {
      await DEngine$1.callDebotFunction(debotAddress, interfaceAddress, answerId, { mediaTypes: this.mediaTypes });
    } catch (err) {
      console.error(err.message);
    }
  }
  output(params) {
    const { answerId, data, prompt } = params.value;
    const decodedData = decodeString(data);
    const decodedDescription = decodeString(prompt);
    const stageObject = {
      functionId: answerId,
      text: decodedDescription,
      data: decodedData,
      component: COMPONENTS_BINDINGS.MEDIA,
      interfaceAddress: interfaceIdToAddress(this.id)
    };
    store.dispatch(pushItemToStage(stageObject));
  }
}
class Menu$1 extends BaseInterface {
  constructor() {
    super(MENU_ID, MENU_ABI);
  }
  select(params) {
    const { description, title, items } = params.value;
    const decodedTitle = decodeString(title);
    const decodedDescription = decodeString(description);
    const menuItems = items.map((item) => ({
      functionId: item.handlerId,
      title: decodeString(item.title),
      description: decodeString(item.description)
    }));
    const stageObject = {
      title: decodedTitle,
      text: decodedDescription,
      menuItems,
      component: COMPONENTS_BINDINGS.MENU,
      interfaceAddress: interfaceIdToAddress(this.id)
    };
    store.dispatch(pushItemToStage(stageObject));
  }
}
class AmountInput$1 extends BaseInterface {
  constructor() {
    super(AMOUNT_INPUT_ID, AMOUNT_INPUT_ABI);
  }
  get(params) {
    const _a = params.value, { answerId, prompt, min, max } = _a, config = __objRest(_a, ["answerId", "prompt", "min", "max"]);
    config.min = min;
    config.max = max;
    if (max && min && parseInt(max) < parseInt(min)) {
      config.max = min;
    }
    const decodedPrompt = decodeString(prompt);
    const stageObject = {
      text: decodedPrompt,
      functionId: answerId,
      config,
      component: COMPONENTS_BINDINGS.AMOUNT_INPUT,
      interfaceAddress: interfaceIdToAddress(this.id)
    };
    store.dispatch(pushItemToStage(stageObject));
  }
}
class ConfirmInput$1 extends BaseInterface {
  constructor() {
    super(CONFIRM_INPUT_ID, CONFIRM_INPUT_ABI);
  }
  get(params) {
    const { answerId, prompt } = params.value;
    const decodedPrompt = decodeString(prompt);
    const stageObject = {
      text: decodedPrompt,
      functionId: answerId,
      component: COMPONENTS_BINDINGS.CONFIRM_INPUT,
      interfaceAddress: interfaceIdToAddress(this.id)
    };
    store.dispatch(pushItemToStage(stageObject));
  }
}
class AddressInput$1 extends BaseInterface {
  constructor() {
    super(ADDRESS_INPUT_ID, ADDRESS_INPUT_ABI);
  }
  get(params) {
    const { answerId, prompt } = params.value;
    const decodedPrompt = prompt ? decodeString(prompt) : "";
    const stageObject = {
      text: decodedPrompt,
      functionId: answerId,
      component: COMPONENTS_BINDINGS.ADDRESS_INPUT,
      interfaceAddress: interfaceIdToAddress(this.id)
    };
    store.dispatch(pushItemToStage(stageObject));
  }
  select(params) {
    return this.get(params);
  }
}
class NumberInput extends BaseInterface {
  constructor() {
    super(NUMBER_INPUT_ID, NUMBER_INPUT_ABI);
  }
  get(params) {
    const _a = params.value, { answerId, prompt, max, min } = _a, config = __objRest(_a, ["answerId", "prompt", "max", "min"]);
    config.min = min;
    config.max = max;
    if (max && min && parseInt(max) < parseInt(min)) {
      config.max = min;
    }
    const decodedPrompt = decodeString(prompt);
    const stageObject = {
      text: decodedPrompt,
      functionId: answerId,
      config,
      component: COMPONENTS_BINDINGS.AMOUNT_INPUT,
      interfaceAddress: interfaceIdToAddress(this.id)
    };
    store.dispatch(pushItemToStage(stageObject));
  }
}
class Echo extends BaseInterface {
  constructor() {
    super(ECHO_ID, ECHO_ABI);
  }
  echo(params) {
    const { debotAddress } = params;
    const { answerId, request } = params.value;
    const decodedRequest = decodeString(request);
    const response = encodeString(decodedRequest);
    const interfaceAddress = interfaceIdToAddress(this.id);
    DEngine$1.callDebotFunction(debotAddress, interfaceAddress, answerId, { response }).catch((err) => {
      console.error(err);
      const stageObject = {
        text: err.message,
        component: COMPONENTS_BINDINGS.TEXT,
        isError: true,
        interfaceAddress
      };
      store.dispatch(pushItemToStage(stageObject));
    });
  }
}
class Stdout$1 extends BaseInterface {
  constructor() {
    super(STDOUT_ID, STDOUT_ABI);
  }
  print(params) {
    const { message } = params.value;
    const decodedMessage = decodeString(message);
    const stageObject = {
      text: decodedMessage,
      component: COMPONENTS_BINDINGS.STDOUT,
      interfaceAddress: interfaceIdToAddress(this.id)
    };
    store.dispatch(pushItemToStage(stageObject));
  }
}
class Userinfo extends BaseInterface {
  constructor() {
    super(USERINFO_ID, USERINFO_ABI);
  }
  async getAccount(params) {
    const { wallet } = store.getState().account;
    const { value: { answerId }, debotAddress } = params;
    const interfaceAddress = interfaceIdToAddress(this.id);
    try {
      await DEngine$1.callDebotFunction(debotAddress, interfaceAddress, answerId, { value: wallet.address });
    } catch (err) {
      console.error(err.message);
    }
  }
  async getPublicKey(params) {
    const { wallet } = store.getState().account;
    const { value: { answerId }, debotAddress } = params;
    const interfaceAddress = interfaceIdToAddress(this.id);
    try {
      await DEngine$1.callDebotFunction(debotAddress, interfaceAddress, answerId, { value: `0x${wallet.publicKey}` });
    } catch (err) {
      console.error(err.message);
    }
  }
  async getSigningBox(params) {
    const { value: { answerId }, debotAddress, signingBoxHandle } = params;
    const interfaceAddress = interfaceIdToAddress(this.id);
    try {
      await DEngine$1.callDebotFunction(debotAddress, interfaceAddress, answerId, { value: signingBoxHandle });
    } catch (err) {
      console.error(err.message);
    }
  }
}
class SigningBoxInput extends BaseInterface {
  constructor() {
    super(SIGNING_BOX_INPUT_ID, SIGNING_BOX_INPUT_ABI);
  }
  async get(params) {
    const { value: { answerId }, debotAddress, signingBoxHandle } = params;
    const interfaceAddress = interfaceIdToAddress(this.id);
    try {
      await DEngine$1.callDebotFunction(debotAddress, interfaceAddress, answerId, { value: signingBoxHandle });
    } catch (err) {
      console.error(err.message);
    }
  }
}
class InterfacesController {
  constructor() {
    __publicField(this, "state");
    const terminal = new Terminal();
    const menu = new Menu$1();
    const amountInput = new AmountInput$1();
    const confirmInput = new ConfirmInput$1();
    const addressInput = new AddressInput$1();
    const numberInput = new NumberInput();
    const echo = new Echo();
    const stdout = new Stdout$1();
    const userinfo = new Userinfo();
    const media = new Media$1();
    const signingBoxInput = new SigningBoxInput();
    this.state = new Map([
      [terminal.id, terminal],
      [media.id, media],
      [menu.id, menu],
      [amountInput.id, amountInput],
      [confirmInput.id, confirmInput],
      [addressInput.id, addressInput],
      [numberInput.id, numberInput],
      [echo.id, echo],
      [stdout.id, stdout],
      [userinfo.id, userinfo],
      [signingBoxInput.id, signingBoxInput]
    ]);
  }
  checkAreInterfacesSupported(interfaces) {
    for (const interfaceAddress of interfaces) {
      const interfaceId = interfaceAddress.slice(2);
      if (!this.state.has(interfaceId))
        return false;
    }
    return true;
  }
  delegateToInterface(interfaceId, params) {
    var _a;
    const _interface = this.state.get(interfaceId);
    console.log(`Calling ${(_a = _interface == null ? void 0 : _interface.constructor) == null ? void 0 : _a.name} by id: ${interfaceId}`);
    try {
      _interface.call(params);
    } catch (_) {
      console.error(`Interface with id ${interfaceId} is not implemented`);
    }
  }
}
var InterfacesController$1 = new InterfacesController();
class DebotBrowser {
  constructor() {
    __publicField(this, "debot_handle");
    __publicField(this, "debot_abi");
    __publicField(this, "info");
    __publicField(this, "signingBoxHandle");
    __publicField(this, "deprecatedMessageTimeout");
    __publicField(this, "interfacesQueue", []);
  }
  async init() {
    const shouldRegDefaultBox = isMobile_1 && !await dist.hasTonProvider();
    if (shouldRegDefaultBox) {
      this.signingBoxHandle = await this.registerDefaultSigningBox();
    } else {
      this.signingBoxHandle = await this.registerSigningBox();
    }
  }
  setDebotParams(params) {
    const { debot_handle, debot_abi, info } = params;
    this.debot_handle = debot_handle;
    this.debot_abi = debot_abi;
    this.info = info;
  }
  releaseInterfacesQueue() {
    this.interfacesQueue.shift();
    if (this.interfacesQueue.length) {
      const interfaceState = this.interfacesQueue[0];
      const { interfaceId, debotAddress, params, signingBoxHandle } = interfaceState;
      InterfacesController$1.delegateToInterface(interfaceId, __spreadValues({
        debotAddress,
        signingBoxHandle
      }, params));
    }
  }
  clearInterfacesQueue() {
    this.interfacesQueue = [];
  }
  log(loggerParams) {
    const browserParams = {
      debot_handle: this.debot_handle,
      debot_abi: this.debot_abi,
      info: this.info
    };
    console.log(browserParams, loggerParams);
    if (loggerParams.msg) {
      const stageObject = {
        text: loggerParams.msg,
        component: COMPONENTS_BINDINGS.TEXT
      };
      store.dispatch(pushItemToStage(stageObject));
    }
  }
  show_action() {
    this.showDeprecatedMessage();
  }
  async input() {
    this.showDeprecatedMessage();
    return { value: "" };
  }
  switch() {
  }
  switch_completed() {
  }
  async get_signing_box() {
    const returnObject = { signing_box: this.signingBoxHandle };
    EventBus$1.dispatch(EVENTS.DEBOT.SIGNING_BOX_CALLED, {
      data: returnObject
    });
    return returnObject;
  }
  async invoke_debot() {
    this.showDeprecatedMessage();
  }
  async send(params) {
    try {
      const parsedMessage = await TonClient.client.boc.parse_message({ boc: params.message });
      const { dst, src, dst_workchain_id } = parsedMessage.parsed;
      const [, interfaceId] = dst.split(":");
      if (dst_workchain_id === DEBOT_WC) {
        this.interfacesQueue.push({
          interfaceId,
          debotAddress: src,
          signingBoxHandle: this.signingBoxHandle,
          params
        });
        if (this.interfacesQueue.length === 1) {
          InterfacesController$1.delegateToInterface(interfaceId, __spreadValues({
            debotAddress: src,
            signingBoxHandle: this.signingBoxHandle
          }, params));
        }
      } else {
        console.log("Call other debot", parsedMessage, params);
        const browserFromStorage = DEngine$1.storage.get(dst);
        if (browserFromStorage) {
          const { debot_handle } = browserFromStorage;
          await DEngine$1.debotModule.send({ debot_handle, message: params.message });
        } else {
          const { debot_handle } = await DEngine$1.initDebot(dst);
          await DEngine$1.debotModule.send({ debot_handle, message: params.message });
        }
      }
    } catch (err) {
      console.error(err);
      const stageObject = {
        text: err.message,
        component: COMPONENTS_BINDINGS.TEXT,
        isError: true
      };
      store.dispatch(pushItemToStage(stageObject));
    }
  }
  async approve(params) {
    let approvePromiseResolve;
    const approvePromise = new Promise((resolve) => {
      approvePromiseResolve = resolve;
      store.dispatch(setApproveWindow({
        submit: resolve,
        params: params.activity
      }));
    });
    const registry = EventBus$1.register(EVENTS.CLIENT.EXECUTE_APPROVE, (args) => {
      var _a;
      if ((_a = args == null ? void 0 : args.data) == null ? void 0 : _a.approved) {
        approvePromiseResolve(true);
      } else {
        approvePromiseResolve(false);
      }
    });
    EventBus$1.dispatch(EVENTS.DEBOT.APPROVE_CALLED, {
      data: params.activity
    });
    const approved = await approvePromise;
    registry.unregister();
    store.dispatch(setApproveWindow(null));
    return { approved };
  }
  async registerSigningBox() {
    const { publicKey } = store.getState().account.wallet;
    const get_public_key = () => Promise.resolve({ public_key: publicKey });
    const sign = async (params) => {
      const { unsigned } = params;
      const signResult = await WalletService$1.sign(unsigned, publicKey);
      return { signature: signResult.signatureHex };
    };
    const signingBoxCreationObj = {
      get_public_key,
      sign
    };
    const signingBoxRegistration = await TonClient.client.crypto.register_signing_box(signingBoxCreationObj);
    return signingBoxRegistration.handle;
  }
  async registerDefaultSigningBox() {
    let signingKeysPromiseResolve;
    const keysPromise = new Promise((resolve) => {
      signingKeysPromiseResolve = resolve;
      store.dispatch(setSigningBox({
        submit: resolve
      }));
    });
    const registry = EventBus$1.register(EVENTS.CLIENT.REGISTER_SIGNING_BOX, async (args) => {
      var _a, _b;
      let keyPair;
      if ((_a = args == null ? void 0 : args.data) == null ? void 0 : _a.mnemonic) {
        keyPair = await genKeyPairFromMnemonic(args.data.mnemonic);
      }
      if ((_b = args == null ? void 0 : args.data) == null ? void 0 : _b.keys) {
        keyPair = args.data.keys;
      }
      if (keyPair) {
        signingKeysPromiseResolve(keyPair);
      } else {
        signingKeysPromiseResolve(null);
      }
    });
    EventBus$1.dispatch(EVENTS.DEBOT.SIGNING_BOX_REGISTRATION_CALLED);
    try {
      const keys = await keysPromise;
      const { handle } = await TonClient.client.crypto.get_signing_box(keys);
      registry.unregister();
      EventBus$1.dispatch(EVENTS.DEBOT.SIGNING_BOX_REGISTERED, {
        data: { signing_box: handle }
      });
      store.dispatch(setSigningBox(null));
      return handle;
    } catch (err) {
      EventBus$1.dispatch(EVENTS.DEBOT.SIGNING_BOX_REGISTRATION_FAILED, {
        data: err
      });
    }
  }
  showDeprecatedMessage() {
    if (this.deprecatedMessageTimeout)
      clearTimeout(this.deprecatedMessageTimeout);
    this.deprecatedMessageTimeout = setTimeout(() => {
      this.deprecatedMessageTimeout = void 0;
      const stageObject = {
        text: "This DeBot is deprecated and therefore no longer supported.",
        component: COMPONENTS_BINDINGS.TEXT,
        isError: true
      };
      store.dispatch(pushItemToStage(stageObject));
    }, 1e3);
  }
}
class DEngine {
  constructor() {
    __publicField(this, "storage", new Map());
    __publicField(this, "mainDebotModule", new dist$1.DebotModule(TonClient.mainNetClient));
    __publicField(this, "devDebotModule", new dist$1.DebotModule(TonClient.devNetClient));
    __publicField(this, "fldDebotModule", new dist$1.DebotModule(TonClient.fldNetClient));
    EventBus$1.register(EVENTS.CLIENT.EXECUTE_FUNCTION, (args) => {
      try {
        const { debotAddress, interfaceId, functionId, data } = args;
        if (!this.storage.has(debotAddress))
          throw new Error(debotAddress ? "Debot is not running" : "Parameter debotAddress is required");
        if (!interfaceId)
          throw new Error("Parameter interfaceId is required");
        this.callDebotFunction(debotAddress, interfaceId, functionId, data).catch((err) => {
          throw err;
        });
      } catch (err) {
        EventBus$1.dispatch(EVENTS.DEBOT.FUNCTION_EXECUTION_FAILED, {
          interfaceId: args == null ? void 0 : args.interfaceId,
          debotAddress: args == null ? void 0 : args.debotAddress,
          functionId: args == null ? void 0 : args.functionId,
          data: { message: err.message }
        });
      }
    });
  }
  get debotModule() {
    if (TonClient.selectedNetwork === DEV_NETWORK)
      return this.devDebotModule;
    if (TonClient.selectedNetwork === FLD_NETWORK)
      return this.fldDebotModule;
    return this.mainDebotModule;
  }
  async initDebot(address) {
    const debotBrowser = new DebotBrowser();
    await debotBrowser.init();
    const initParams = await this.debotModule.init({ address }, debotBrowser);
    debotBrowser.setDebotParams(initParams);
    this.storage.set(address, __spreadProps(__spreadValues({}, initParams), { browser: debotBrowser }));
    return initParams;
  }
  async runDebot(address) {
    await this.ensureWalletConnected();
    const initParams = await this.initDebot(address);
    const { debot_handle, info: { interfaces } } = initParams;
    const isDebotSupported = InterfacesController$1.checkAreInterfacesSupported(interfaces);
    if (!isDebotSupported)
      return this.showUnsupportedMessage();
    await this.debotModule.start({ debot_handle });
    return initParams;
  }
  async callDebotFunction(debotAddress, interfaceAddress, functionId, input) {
    let call_set;
    const debotParams = this.storage.get(debotAddress);
    const { debot_handle, debot_abi, browser: browser2 } = debotParams;
    if (functionId && functionId !== "0") {
      const functionName = formDebotFunctionFromId(functionId);
      call_set = {
        function_name: functionName
      };
      if (input) {
        call_set.input = input;
      }
    }
    const encodedMessage = await TonClient.client.abi.encode_internal_message({
      abi: {
        type: "Json",
        value: debot_abi
      },
      address: debotAddress,
      src_address: interfaceAddress,
      call_set,
      value: "1000000000000000"
    });
    try {
      const sendRes = await this.debotModule.send({ debot_handle, message: encodedMessage.message });
      EventBus$1.dispatch(EVENTS.DEBOT.FUNCTION_EXECUTED, {
        interfaceId: interfaceAddress ? interfaceAddressToId(interfaceAddress) : void 0,
        debotAddress,
        functionId,
        data: { call_set }
      });
      browser2.releaseInterfacesQueue();
      return sendRes;
    } catch (err) {
      console.error(err);
      EventBus$1.dispatch(EVENTS.DEBOT.FUNCTION_EXECUTION_FAILED, {
        interfaceId: interfaceAddress ? interfaceAddressToId(interfaceAddress) : void 0,
        debotAddress,
        functionId,
        data: { call_set, message: err.message }
      });
      browser2.releaseInterfacesQueue();
      store.dispatch(pushItemToStage({
        text: err.message,
        component: COMPONENTS_BINDINGS.TEXT,
        isError: true
      }));
    }
  }
  async reloadDebot(address) {
    store.dispatch(clearStage());
    store.dispatch(setApproveWindow(null));
    store.dispatch(setSigningBox(null));
    const debotParams = this.storage.get(address);
    const { browser: browser2 } = debotParams;
    browser2.clearInterfacesQueue();
    return this.runDebot(address);
  }
  showUnsupportedMessage() {
    const stageObject = {
      text: "This DeBot is not yet supported by our browser :(\nTry another browser for now and come back to us later",
      component: COMPONENTS_BINDINGS.TEXT
    };
    store.dispatch(pushItemToStage(stageObject));
  }
  async ensureWalletConnected() {
    try {
      if (!WalletService$1.isConnected) {
        const connectedWallet = await WalletService$1.connect();
        store.dispatch(setWallet(connectedWallet));
      }
    } catch (err) {
      store.dispatch(setConnectWalletModal({ message: err.message, isError: true }));
      await WalletService$1.waitForConnection();
    }
  }
}
var DEngine$1 = new DEngine();
const WalletErrors = {
  NO_PROVIDER: "Please, install Crystall Wallet extension to use this DeBot",
  INSUFFICIENT_PERMISSIONS: "Please, provide all requested permissions to use this DeBot"
};
const CrystallWalletProvider = new dist.ProviderRpcClient();
class WalletService {
  constructor() {
    __publicField(this, "isConnected", false);
    __publicField(this, "isPermissionsSubscribed", false);
    __publicField(this, "responseToConnectionWaiter", null);
    __publicField(this, "rejectToConnectionWaiter", null);
    __publicField(this, "currentDebotAddress");
  }
  async connect() {
    const hasProvider = await dist.hasTonProvider();
    if (!hasProvider) {
      EventBus$1.dispatch(EVENTS.WALLET.CONNECTION_ERROR, {
        data: { message: WalletErrors.NO_PROVIDER, type: "NO_PROVIDER" }
      });
      throw new Error(WalletErrors.NO_PROVIDER);
    }
    await CrystallWalletProvider.ensureInitialized();
    try {
      const { accountInteraction } = await CrystallWalletProvider.rawApi.requestPermissions({
        permissions: ["tonClient", "accountInteraction"]
      });
      if (!accountInteraction) {
        EventBus$1.dispatch(EVENTS.WALLET.CONNECTION_ERROR, {
          data: { message: WalletErrors.INSUFFICIENT_PERMISSIONS, type: "INSUFFICIENT_PERMISSIONS" }
        });
        throw new Error(WalletErrors.INSUFFICIENT_PERMISSIONS);
      }
      this.subscribeOnPermissions();
      this.setConnectionStatus(true);
      EventBus$1.dispatch(EVENTS.WALLET.CONNECTED, {
        data: accountInteraction
      });
      return this.formWalletData(accountInteraction);
    } catch (err) {
      EventBus$1.dispatch(EVENTS.WALLET.CONNECTION_ERROR, {
        data: { message: WalletErrors.INSUFFICIENT_PERMISSIONS, type: "INSUFFICIENT_PERMISSIONS" }
      });
      throw new Error(WalletErrors.INSUFFICIENT_PERMISSIONS);
    }
  }
  async disconnect() {
    if (!this.isConnected)
      return;
    try {
      await CrystallWalletProvider.disconnect();
      store.dispatch(setWallet(null));
      this.setConnectionStatus(false);
      EventBus$1.dispatch(EVENTS.WALLET.DISCONNECTED);
    } catch (err) {
      console.error(err);
    }
  }
  async getProviderState() {
    const currentProviderState = await CrystallWalletProvider.getProviderState();
    return currentProviderState;
  }
  async sign(data, publicKey) {
    const signed = await CrystallWalletProvider.rawApi.signDataRaw({ data, publicKey });
    return signed;
  }
  async waitForConnection() {
    const waitPromise = new Promise((res, rej) => {
      this.responseToConnectionWaiter = res;
      this.rejectToConnectionWaiter = rej;
    });
    return await waitPromise;
  }
  rejectWaitingConnections() {
    if (this.rejectToConnectionWaiter) {
      this.rejectToConnectionWaiter(WalletErrors.INSUFFICIENT_PERMISSIONS);
      this.rejectToConnectionWaiter = null;
    }
  }
  setRunningDebotAddress(debotAddress) {
    this.currentDebotAddress = debotAddress;
  }
  setConnectionStatus(isConnected) {
    this.isConnected = isConnected;
    if (isConnected && this.responseToConnectionWaiter) {
      this.responseToConnectionWaiter(true);
      this.responseToConnectionWaiter = null;
    }
  }
  subscribeOnPermissions() {
    if (this.isPermissionsSubscribed)
      return;
    this.isPermissionsSubscribed = true;
    CrystallWalletProvider.subscribe("permissionsChanged").then((permissionsSubscriber) => {
      permissionsSubscriber.on("data", (event) => {
        this.isConnected = !!event.permissions.accountInteraction;
        const searchParams = new URLSearchParams(window.location.search);
        const debotAddress = searchParams.get(DEBOT_ADDRESS_SEARCH_PARAM) || this.currentDebotAddress;
        if (debotAddress)
          DEngine$1.reloadDebot(debotAddress);
        EventBus$1.dispatch(EVENTS.WALLET.PERMISSIONS_CHANGED, {
          data: event.permissions.accountInteraction
        });
        store.dispatch(setWallet(this.formWalletData(event.permissions.accountInteraction)));
      });
    }).catch((err) => {
      this.isPermissionsSubscribed = false;
      console.error(err);
    });
  }
  formWalletData(accountInteraction) {
    if (!accountInteraction)
      return null;
    const { address, publicKey, contractType } = accountInteraction;
    const walletData = {
      address: typeof address === "string" ? address : address.toString(),
      publicKey,
      contractType
    };
    return walletData;
  }
}
var WalletService$1 = new WalletService();
const AppComponentRefContext = React$1.createContext(null);
const ControlWithPopupContext = React$1.createContext(null);
const DebotOnlyContext = React$1.createContext(null);
const DebotParamsContext = React$1.createContext(null);
const HeaderParamsContext = React$1.createContext(null);
var index$j = "";
const App = ({ children, initialDebotAddress, isEventsOnly, initialNetwork }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isDebotOnly = react.exports.useContext(DebotOnlyContext);
  const appElementRef = react.exports.useRef(null);
  const isConnectWalletModalVisible = useSelector((state) => !!state.account.connectWalletModal);
  const isSigningBoxVisible = useSelector((state) => !!state.debot.signingBox);
  const isApproveWindowVisible = useSelector((state) => !!state.debot.approveWindow);
  const hasWallet = useSelector((state) => !!state.account.wallet);
  react.exports.useLayoutEffect(() => {
    const onMount = async () => {
      const providerState = await WalletService$1.getProviderState();
      if (providerState.permissions.accountInteraction) {
        const connectedWallet = await WalletService$1.connect();
        if (connectedWallet && !hasWallet)
          dispatch(setWallet(connectedWallet));
      }
      if (initialDebotAddress) {
        const debotUrlSlug = isDebotOnly ? "/" : "/debot";
        const debotUrl = createDebotUrl(initialDebotAddress, debotUrlSlug);
        history.replace(debotUrl);
      }
    };
    if (initialNetwork)
      TonClient.setSelectedNetwork(initialNetwork);
    onMount();
  }, []);
  if (isEventsOnly)
    return /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, children);
  const isScrollDisabled = isSigningBoxVisible || isApproveWindowVisible || isConnectWalletModalVisible;
  const appClassNames = `debot-embedding ${isCustomScrollBar() ? "with-custom-scrollbar" : ""} ${isScrollDisabled ? "debot-embedding--scroll-disabled" : ""}`;
  return /* @__PURE__ */ React$1.createElement("div", {
    ref: appElementRef,
    className: appClassNames
  }, /* @__PURE__ */ React$1.createElement(AppComponentRefContext.Provider, {
    value: appElementRef
  }, isConnectWalletModalVisible && !hasWallet && /* @__PURE__ */ React$1.createElement(ConnectWallet, null), isSigningBoxVisible && /* @__PURE__ */ React$1.createElement(SigningBox, null), isApproveWindowVisible && /* @__PURE__ */ React$1.createElement(ApproveWindow, null), /* @__PURE__ */ React$1.createElement(Header, null), /* @__PURE__ */ React$1.createElement("div", {
    className: "debot-embedding__flex-wrapper"
  }, children)));
};
const Browser = () => {
  const isDebotOnly = react.exports.useContext(DebotOnlyContext);
  return /* @__PURE__ */ React$1.createElement(Switch, null, isDebotOnly ? /* @__PURE__ */ React$1.createElement(Route, {
    exact: true,
    path: "/",
    component: DebotPage
  }) : /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, /* @__PURE__ */ React$1.createElement(Route, {
    exact: true,
    path: "/",
    component: DebotsList
  }), /* @__PURE__ */ React$1.createElement(Route, {
    path: "/debot",
    component: DebotPage
  })));
};
const LensIcon = ({ onClick = () => false }) => /* @__PURE__ */ React$1.createElement("svg", {
  className: "lens-icon",
  width: "22",
  height: "22",
  viewBox: "0 0 22 22",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  onClick
}, /* @__PURE__ */ React$1.createElement("path", {
  d: "M16.8881 8.72414C16.8881 13.2678 13.2179 16.9483 8.69405 16.9483C4.17023 16.9483 0.5 13.2678 0.5 8.72414C0.5 4.18044 4.17023 0.5 8.69405 0.5C13.2179 0.5 16.8881 4.18044 16.8881 8.72414Z",
  stroke: "#6F6F6F"
}), /* @__PURE__ */ React$1.createElement("line", {
  y1: "-0.5",
  x2: "9.63903",
  y2: "-0.5",
  transform: "matrix(0.705884 0.708327 -0.705884 0.708327 14.3643 15.1724)",
  stroke: "#6F6F6F"
}));
const ArrowIcon = () => /* @__PURE__ */ React$1.createElement("svg", {
  className: "arrow-icon",
  width: "14",
  height: "9",
  viewBox: "0 0 14 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ React$1.createElement("path", {
  d: "M6.76449 9L0.338936 0.230769L13.19 0.23077L6.76449 9Z",
  fill: "#737373"
}));
const BackIcon = () => /* @__PURE__ */ React$1.createElement("svg", {
  className: "back-icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "24px",
  height: "24px",
  viewBox: "0 0 24 24"
}, /* @__PURE__ */ React$1.createElement("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M12 4l1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20l-8-8z"
}));
const CancelIcon = ({ onClick = () => false }) => /* @__PURE__ */ React$1.createElement("svg", {
  className: "cancel-icon",
  onClick,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ React$1.createElement("path", {
  d: "M9.99902 2L1.99989 9.99914",
  stroke: "#BABABA",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /* @__PURE__ */ React$1.createElement("path", {
  d: "M2.00098 2L10.0001 9.99914",
  stroke: "#BABABA",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const DevNetIcon = ({ className }) => /* @__PURE__ */ React$1.createElement("img", {
  src: "/dev-net-icon.png",
  className: className ? `network-icon ${className}` : "network-icon",
  alt: "network"
});
const MainNetIcon = ({ className }) => /* @__PURE__ */ React$1.createElement("img", {
  src: "/main-net-icon.png",
  className: className ? `network-icon ${className}` : "network-icon",
  alt: "network"
});
const FldNetIcon = ({ className }) => /* @__PURE__ */ React$1.createElement("img", {
  src: "/fld-net-icon.png",
  width: 22,
  height: 24,
  className: className ? `network-icon fld-network-icon ${className}` : "network-icon fld-network-icon ",
  alt: "network"
});
const NetworkIcon = ({ className, network }) => {
  if (network === DEV_NETWORK)
    return /* @__PURE__ */ React$1.createElement(DevNetIcon, {
      className
    });
  if (network === FLD_NETWORK)
    return /* @__PURE__ */ React$1.createElement(FldNetIcon, {
      className
    });
  if (network === MAIN_NETWORK)
    return /* @__PURE__ */ React$1.createElement(MainNetIcon, {
      className
    });
  return /* @__PURE__ */ React$1.createElement(React$1.Fragment, null);
};
const LogoutIcon = ({ width = "32", height = "32", onClick }) => /* @__PURE__ */ React$1.createElement("svg", {
  onClick,
  className: "logout-icon",
  viewBox: "0 0 32 32",
  width,
  height
}, /* @__PURE__ */ React$1.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M18.4753 18.2903H19.295H20.1146V21.5162V23.9355H15.1966L15.1967 27L13.0492 26.2799L8.11633 24.662C7.4459 24.433 7 24.2782 7 24.2782V7H8.63938C8.66196 7 8.68378 7.00459 8.70558 7.00919C8.72248 7.01275 8.73936 7.0163 8.75659 7.01772C8.76929 7.01605 8.78125 7.01267 8.79315 7.00931C8.80968 7.00464 8.8261 7 8.84424 7H17.6556H20.1146V11.8387H19.295H18.4753L18.4754 8.61267L17.6556 8.61281H13.8376H11.918L15.1966 9.41936V22.3226H18.4753V21.5162V18.2903ZM23.153 11.2686L27 15.0644C27 15.0644 26.7522 15.3194 26.4318 15.6346L23.153 18.8605L21.7541 20.2257L21.7539 15.8709H17.6556V15.0645V14.2581H21.7539L21.7541 9.90301L23.153 11.2686Z"
}));
var index$i = "";
const SearchBar = ({ isDebotOnly }) => {
  const history = useHistory();
  const dispatch = useDispatch$1();
  const [inputValue, setInputValue] = react.exports.useState("");
  const searchDebot = async () => {
    const isValidAddress = await checkIsValidAddress(inputValue);
    if (isValidAddress) {
      const debotUrlSlug = isDebotOnly ? "/" : "/debot";
      const debotUrl = createDebotUrl(inputValue, debotUrlSlug);
      dispatch(setDebotsFilterKey(""));
      return history.push(debotUrl);
    }
    dispatch(setDebotsFilterKey(inputValue));
  };
  const handleKeyPress = (event) => {
    const { shiftKey, key, altKey } = event;
    const isEnter = key === "Enter";
    const shouldSearch = isEnter && !shiftKey && !altKey;
    if (shouldSearch) {
      event.preventDefault();
      searchDebot();
    }
  };
  return /* @__PURE__ */ React$1.createElement("div", {
    className: "search-bar-container"
  }, /* @__PURE__ */ React$1.createElement("input", {
    className: "search-bar-container__input",
    type: "text",
    placeholder: "Enter debot address",
    value: inputValue,
    onChange: (e2) => setInputValue(e2.target.value),
    onKeyPress: handleKeyPress
  }), /* @__PURE__ */ React$1.createElement(LensIcon, {
    onClick: searchDebot
  }));
};
var index$h = "";
const HeaderNetworkSelector = () => {
  const [selectedNetwork, setSelectedNetwork] = react.exports.useState(TonClient.selectedNetwork);
  const match = useRouteMatch("/debot");
  react.exports.useEffect(() => {
    setSelectedNetwork(TonClient.selectedNetwork);
  }, [match]);
  const handleSelectNetwork = (network) => {
    TonClient.setSelectedNetwork(network);
    setSelectedNetwork(network);
  };
  const renderSelectedNetwork = () => /* @__PURE__ */ React$1.createElement("div", {
    className: "options-list__selected-item"
  }, /* @__PURE__ */ React$1.createElement(NetworkIcon, {
    network: selectedNetwork
  }));
  return /* @__PURE__ */ React$1.createElement(OptionsList, {
    selectedItem: renderSelectedNetwork(),
    height: 126,
    width: 200,
    isDisabled: !!match
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "options-list__list-item",
    onClick: () => handleSelectNetwork(MAIN_NETWORK)
  }, /* @__PURE__ */ React$1.createElement(MainNetIcon, null), MAIN_NETWORK), /* @__PURE__ */ React$1.createElement("div", {
    className: "options-list__list-item",
    onClick: () => handleSelectNetwork(DEV_NETWORK)
  }, /* @__PURE__ */ React$1.createElement(DevNetIcon, null), DEV_NETWORK), /* @__PURE__ */ React$1.createElement("div", {
    className: "options-list__list-item",
    onClick: () => handleSelectNetwork(FLD_NETWORK)
  }, /* @__PURE__ */ React$1.createElement(FldNetIcon, null), FLD_NETWORK));
};
const HeaderAccount = () => {
  const dispatch = useDispatch();
  const wallet = useSelector((state) => state.account.wallet);
  const handleAddAccount = async () => {
    try {
      dispatch(setConnectWalletModal({ isError: false }));
      const walletData = await WalletService$1.connect();
      dispatch(setWallet(walletData));
      dispatch(setConnectWalletModal(null));
    } catch (err) {
      dispatch(setConnectWalletModal({ message: err.message, isError: true }));
    }
  };
  const handleLogout = async () => {
    try {
      await WalletService$1.disconnect();
    } catch (err) {
      console.error(err);
    }
  };
  if (wallet) {
    return /* @__PURE__ */ React$1.createElement("div", {
      className: "header-container__account"
    }, /* @__PURE__ */ React$1.createElement("span", null, sliceAddress(wallet.address)), /* @__PURE__ */ React$1.createElement(LogoutIcon, {
      width: "22px",
      height: "22px",
      onClick: handleLogout
    }));
  }
  return /* @__PURE__ */ React$1.createElement("div", {
    className: "header-container__connect-button",
    onClick: handleAddAccount
  }, "Connect Wallet");
};
const HeaderBackButton = () => {
  const match = useRouteMatch("/debot");
  const backButtonClassName = `header-container__back-button ${!match ? "header-container__back-button--disabled" : ""}`;
  return /* @__PURE__ */ React$1.createElement(Link, {
    to: "/",
    className: backButtonClassName
  }, /* @__PURE__ */ React$1.createElement(BackIcon, null));
};
var index$g = "";
const DebotPageControls = ({ debotAddress }) => {
  const dispatch = useDispatch();
  const debotParams = react.exports.useContext(DebotParamsContext);
  const isDebotSaved = useSelector((state) => !!state.debot.localDebotsList.find((debot) => debot.address === debotAddress));
  const isNoControlls = debotParams && debotParams.hideRestart && debotParams.hideSave && debotParams.hideEnv;
  if (isNoControlls)
    return null;
  const restartDebot = async () => {
    try {
      await DEngine$1.reloadDebot(debotAddress);
    } catch (err) {
      dispatch(setIsDebotError(true));
      console.error("Error while running debot: ", err);
    }
  };
  const renderSaveButtons = () => {
    if (isDebotSaved)
      return /* @__PURE__ */ React$1.createElement("div", {
        className: "debot__controls-item",
        onClick: () => removeLocalDebot(debotAddress)
      }, "Remove from Saved");
    return /* @__PURE__ */ React$1.createElement(ControlWithPopup, {
      height: 310,
      width: 500,
      name: "Save DeBot"
    }, /* @__PURE__ */ React$1.createElement(AddDebot, {
      prefilledAddress: debotAddress
    }));
  };
  return /* @__PURE__ */ React$1.createElement("div", {
    className: "debot__controls"
  }, !(debotParams == null ? void 0 : debotParams.hideRestart) && /* @__PURE__ */ React$1.createElement("div", {
    className: "debot__controls-item",
    onClick: restartDebot
  }, "Restart DeBot"), !(debotParams == null ? void 0 : debotParams.hideSave) && renderSaveButtons(), !(debotParams == null ? void 0 : debotParams.hideEnv) && /* @__PURE__ */ React$1.createElement(ControlWithPopup, {
    height: 472,
    width: 650,
    name: "Show Environment"
  }, /* @__PURE__ */ React$1.createElement(Environment, null)));
};
const defaultParams = {
  hideBackButton: false,
  hideSearchBar: false,
  hideNetworkSelector: false,
  hideAccount: false
};
const Header = () => {
  const [hideAccountBecauseNoProvider, setHideAccountBecauseNoProvider] = react.exports.useState(false);
  const isDebotOnly = react.exports.useContext(DebotOnlyContext);
  const headerParams = react.exports.useContext(HeaderParamsContext);
  const debotParams = react.exports.useContext(DebotParamsContext);
  const hideBackButton = (headerParams == null ? void 0 : headerParams.hideBackButton) || defaultParams.hideBackButton;
  const hideSearchBar = (headerParams == null ? void 0 : headerParams.hideSearchBar) || defaultParams.hideSearchBar;
  const hideNetworkSelector = (headerParams == null ? void 0 : headerParams.hideNetworkSelector) || defaultParams.hideNetworkSelector;
  const hideAccount = (headerParams == null ? void 0 : headerParams.hideAccount) || defaultParams.hideAccount || hideAccountBecauseNoProvider;
  react.exports.useLayoutEffect(() => {
    const asyncOnMount = async () => {
      setHideAccountBecauseNoProvider(isMobile_1 && !await dist.hasTonProvider());
    };
    asyncOnMount();
  }, []);
  const renderSearchBarComponents = () => /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, !hideBackButton && /* @__PURE__ */ React$1.createElement(HeaderBackButton, null), !hideSearchBar && /* @__PURE__ */ React$1.createElement(SearchBar, {
    isDebotOnly
  }));
  return /* @__PURE__ */ React$1.createElement("header", {
    className: "header-container"
  }, (debotParams == null ? void 0 : debotParams.showControlsInHeader) && debotParams.debotAddress ? /* @__PURE__ */ React$1.createElement(DebotPageControls, {
    debotAddress: debotParams.debotAddress
  }) : renderSearchBarComponents(), /* @__PURE__ */ React$1.createElement("div", {
    className: "header-container__settings-bar"
  }, !hideNetworkSelector && /* @__PURE__ */ React$1.createElement(HeaderNetworkSelector, null), !hideAccount && /* @__PURE__ */ React$1.createElement(HeaderAccount, null)));
};
const ListItem = ({ debot, isGrey }) => {
  const linkAddress = createDebotUrl(debot.address);
  const listItemClassName = `debots-list__item ${isGrey ? "debots-list__item--grey" : ""}`;
  const handleNetworkSwitch = () => {
    if (debot.network)
      TonClient.setSelectedNetwork(debot.network);
  };
  return /* @__PURE__ */ React$1.createElement(Link, {
    to: linkAddress,
    className: listItemClassName,
    onClick: handleNetworkSwitch
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "debots-list__item-title"
  }, debot.title, debot.network && /* @__PURE__ */ React$1.createElement(NetworkIcon, {
    network: debot.network
  })), /* @__PURE__ */ React$1.createElement("div", {
    className: "debots-list__item-address"
  }, debot.address));
};
const ListControls = () => {
  const debotParams = react.exports.useContext(DebotParamsContext);
  const isNoControlls = debotParams && debotParams.hideSave && debotParams.hideEnv;
  if (isNoControlls)
    return null;
  return /* @__PURE__ */ React$1.createElement("div", {
    className: "debots-list__controls"
  }, !(debotParams == null ? void 0 : debotParams.hideSave) && /* @__PURE__ */ React$1.createElement(ControlWithPopup, {
    height: 310,
    width: 500,
    name: "Add DeBot"
  }, /* @__PURE__ */ React$1.createElement(AddDebot, null)), !(debotParams == null ? void 0 : debotParams.hideEnv) && /* @__PURE__ */ React$1.createElement(ControlWithPopup, {
    height: 472,
    width: 660,
    name: "Show Environment"
  }, /* @__PURE__ */ React$1.createElement(Environment, null)));
};
var index$f = "";
const DebotsList = () => {
  const debotsList = useSelector((state) => state.debot.debotsList);
  const localDebotsList = useSelector((state) => state.debot.localDebotsList);
  const filterKey = useSelector((state) => state.debot.filterKey);
  const filteredDebots = debotsList.filter((debot) => debot.title.toLowerCase().startsWith(filterKey) || debot.address.startsWith(filterKey));
  const filteredLocalDebots = localDebotsList.filter((debot) => debot.title.toLowerCase().startsWith(filterKey) || debot.address.startsWith(filterKey));
  const renderDebotListItems = () => filteredDebots.map((debot, index2) => /* @__PURE__ */ React$1.createElement(ListItem, {
    isGrey: index2 % 2 === 0 || index2 === 0,
    debot,
    key: `${debot.address}-${index2}`
  }));
  const renderLocalDebotListItems = () => filteredLocalDebots.map((debot, index2) => /* @__PURE__ */ React$1.createElement(ListItem, {
    isGrey: index2 % 2 === 0 || index2 === 0,
    debot,
    key: `${debot.address}-${index2}`
  }));
  const debotsListClassName = `debots-list__list ${isCustomScrollBar() ? "with-custom-scrollbar" : ""}`;
  return /* @__PURE__ */ React$1.createElement("div", {
    className: "debots-list"
  }, /* @__PURE__ */ React$1.createElement(ListControls, null), /* @__PURE__ */ React$1.createElement("div", {
    className: debotsListClassName
  }, !!filteredLocalDebots.length && /* @__PURE__ */ React$1.createElement(react.exports.Fragment, null, /* @__PURE__ */ React$1.createElement("div", {
    className: "debots-list__section-title"
  }, "Your saved DeBots"), renderLocalDebotListItems()), !!filteredDebots.length && /* @__PURE__ */ React$1.createElement(react.exports.Fragment, null, /* @__PURE__ */ React$1.createElement("div", {
    className: "debots-list__section-title"
  }, "Suggested DeBots"), renderDebotListItems()), !filteredDebots.length && !filteredLocalDebots.length && /* @__PURE__ */ React$1.createElement(Loader, {
    isFailed: true
  })));
};
const DebotPage = () => {
  const debotAddress = useDebotAddress();
  if (!debotAddress)
    return /* @__PURE__ */ React$1.createElement(Redirect, {
      to: "/"
    });
  return /* @__PURE__ */ React$1.createElement(Debot, {
    address: debotAddress
  });
};
var index$e = "";
const Text = ({ params, debotAddress }) => {
  const { text, functionId, interfaceAddress, isError } = params;
  react.exports.useEffect(() => {
    const runDebotFunction = async () => {
      try {
        await DEngine$1.callDebotFunction(debotAddress, interfaceAddress, functionId);
      } catch (err) {
        console.error(err);
      }
    };
    runDebotFunction();
  }, []);
  const textClassName = `stage-component__text ${isError ? "stage-component__text--error" : ""}`;
  return /* @__PURE__ */ React$1.createElement("div", {
    className: textClassName
  }, text);
};
var index$d = "";
const Input = ({
  params,
  type = "text",
  isMultiline = false,
  customCallback,
  customErrorText,
  setCustomErrorText,
  debotAddress
}) => {
  const [inputValue, setInputValue] = react.exports.useState("");
  const [errorText, setErrorText] = react.exports.useState("");
  const inputRef = react.exports.useRef(null);
  const { text, interfaceAddress, functionId } = params;
  react.exports.useEffect(() => {
    var _a;
    (_a = inputRef == null ? void 0 : inputRef.current) == null ? void 0 : _a.focus();
  }, []);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setErrorText("");
    if (setCustomErrorText)
      setCustomErrorText("");
  };
  const handleSend = async () => {
    if (errorText || customErrorText || !inputValue)
      return;
    try {
      if (customCallback)
        return customCallback(inputValue);
      const value = getEnvVariableFromInput(inputValue) || inputValue;
      await DEngine$1.callDebotFunction(debotAddress, interfaceAddress, functionId, { value: encodeString(value) });
    } catch (err) {
      setErrorText(err.message);
    }
  };
  const handleKeyPress = (event) => {
    const { shiftKey, key, altKey } = event;
    const isEnter = key === "Enter";
    const isSendKeyPressed = isEnter && !shiftKey && !altKey;
    if (isSendKeyPressed) {
      event.preventDefault();
      handleSend();
    }
  };
  const inputClassName = `stage-component__input ${errorText || customErrorText ? "stage-component__input--error" : ""}`;
  return /* @__PURE__ */ React$1.createElement("div", {
    className: "stage-component__input-container"
  }, !!text && /* @__PURE__ */ React$1.createElement("span", {
    className: "stage-component__input-label"
  }, text), /* @__PURE__ */ React$1.createElement("div", {
    className: "stage-component__input-flex"
  }, isMultiline ? /* @__PURE__ */ React$1.createElement("textarea", {
    className: inputClassName,
    placeholder: "Enter...",
    value: inputValue,
    onChange: handleInputChange,
    onKeyPress: handleKeyPress,
    ref: inputRef
  }) : /* @__PURE__ */ React$1.createElement("input", {
    className: inputClassName,
    autoComplete: "off",
    type,
    placeholder: "Enter...",
    value: inputValue,
    onChange: handleInputChange,
    onKeyPress: handleKeyPress,
    ref: inputRef
  }), /* @__PURE__ */ React$1.createElement("div", {
    className: "stage-component__input-send-button",
    onClick: handleSend
  }, "Send")), !!errorText && /* @__PURE__ */ React$1.createElement("span", {
    className: "stage-component__input-error"
  }, errorText), !!customErrorText && /* @__PURE__ */ React$1.createElement("span", {
    className: "stage-component__input-error"
  }, customErrorText));
};
const Textarea = ({ params, type = "text", debotAddress }) => {
  return /* @__PURE__ */ React$1.createElement(Input, {
    params,
    type,
    isMultiline: true,
    debotAddress
  });
};
const normalizeValue = (value, power) => {
  if (!power || power === "0")
    return value;
  const numPower = parseInt(power);
  return (parseFloat(value) * Math.pow(10, numPower)).toString();
};
function formStepFromDecimals(decimals) {
  if (!decimals || decimals === "0")
    return "1";
  const decimalsInt = parseInt(decimals, 10);
  let resultString = "0.";
  for (let i = 1; i < decimalsInt; i++) {
    resultString += "0";
  }
  resultString += "1";
  return resultString;
}
function formDescription(config) {
  if (!config)
    return "";
  if (config.min && config.max)
    return `Input value must be greater than (or equal) ${config.min} and less than (or equal) ${config.max}`;
  else if (config.min)
    return `Input value must be greater than (or equal) ${config.min}`;
  else if (config.max)
    return `Input value must be less than (or equal) ${config.max}`;
  else
    return "";
}
const AmountInput = ({
  params,
  customCallback,
  customErrorText,
  setCustomErrorText,
  debotAddress
}) => {
  const [inputValue, setInputValue] = react.exports.useState("");
  const [errorText, setErrorText] = react.exports.useState("");
  const inputRef = react.exports.useRef(null);
  const { text, functionId, interfaceAddress, config = {} } = params;
  const inputConfig = {
    min: config.min,
    max: config.max,
    step: formStepFromDecimals(config.decimals)
  };
  const description = formDescription(config);
  react.exports.useEffect(() => {
    var _a;
    (_a = inputRef == null ? void 0 : inputRef.current) == null ? void 0 : _a.focus();
  }, []);
  const handleInputChange = (event) => {
    const { value } = event.target;
    if (value === "") {
      setInputValue(event.target.value);
      setErrorText("");
      if (setCustomErrorText)
        setCustomErrorText("");
      return;
    }
    if (!config.decimals || config.decimals === "0") {
      if (value.includes(".")) {
        setErrorText("This input does not support decimals");
        setInputValue(event.target.value);
        return;
      }
    } else {
      const [, decimalsString] = value.split(".");
      if (decimalsString && parseInt(config.decimals) < decimalsString.length) {
        setErrorText("Too many decimals");
        setInputValue(event.target.value);
        return;
      }
    }
    const floatValue = parseFloat(value);
    const isOutOfRange = config.max && floatValue > config.max || config.min && floatValue < config.min;
    if (value.includes("e")) {
      setErrorText("Input includes not valid characters");
    } else if (isOutOfRange) {
      setErrorText(description);
    } else {
      setErrorText("");
      if (setCustomErrorText)
        setCustomErrorText("");
    }
    setInputValue(event.target.value);
  };
  const handleSend = async () => {
    if (errorText || customErrorText || !inputValue)
      return;
    try {
      if (customCallback)
        return customCallback(inputValue);
      await DEngine$1.callDebotFunction(debotAddress, interfaceAddress, functionId, { value: normalizeValue(inputValue, config.decimals) });
    } catch (err) {
      setErrorText(err.message);
    }
  };
  const handleKeyPress = (event) => {
    const { shiftKey, key, altKey } = event;
    const isEnter = key === "Enter";
    const shouldTriggerFunction = isEnter && !shiftKey && !altKey;
    if (shouldTriggerFunction) {
      event.preventDefault();
      handleSend();
    }
  };
  const inputClassName = `stage-component__input ${errorText ? "stage-component__input--error" : ""}`;
  return /* @__PURE__ */ React$1.createElement("div", {
    className: "stage-component__input-container"
  }, !!text && /* @__PURE__ */ React$1.createElement("span", {
    className: "stage-component__input-label"
  }, text), !!description && /* @__PURE__ */ React$1.createElement("div", {
    className: "stage-component__input-description"
  }, description), /* @__PURE__ */ React$1.createElement("div", {
    className: "stage-component__input-flex"
  }, /* @__PURE__ */ React$1.createElement("input", __spreadValues({
    className: inputClassName,
    type: "number",
    placeholder: "Enter...",
    value: inputValue,
    onChange: handleInputChange,
    onKeyPress: handleKeyPress,
    ref: inputRef
  }, inputConfig)), /* @__PURE__ */ React$1.createElement("div", {
    className: "stage-component__input-send-button",
    onClick: handleSend
  }, "Send")), !!errorText && /* @__PURE__ */ React$1.createElement("span", {
    className: "stage-component__input-error"
  }, errorText), !!customErrorText && /* @__PURE__ */ React$1.createElement("span", {
    className: "stage-component__input-error"
  }, customErrorText));
};
var index$c = "";
const ConfirmInput = ({ params = {}, approveCallback, debotAddress }) => {
  const { functionId, interfaceAddress, text } = params;
  const handleConfirm = async (value) => {
    try {
      if (approveCallback)
        return approveCallback(value);
      if (debotAddress && interfaceAddress && functionId)
        await DEngine$1.callDebotFunction(debotAddress, interfaceAddress, functionId, { value });
    } catch (err) {
      console.error(err);
    }
  };
  return /* @__PURE__ */ React$1.createElement("div", {
    className: "stage-component__confirm-input-container"
  }, !!text && /* @__PURE__ */ React$1.createElement("div", {
    className: "stage-component__confirm-input-label"
  }, text), /* @__PURE__ */ React$1.createElement("div", {
    onClick: () => handleConfirm(true),
    className: "stage-component__confirm-input-button"
  }, "Confirm"), /* @__PURE__ */ React$1.createElement("div", {
    onClick: () => handleConfirm(false),
    className: "stage-component__confirm-input-button stage-component__confirm-input-button--decline"
  }, "Decline"));
};
const AddressInput = ({ params, debotAddress }) => {
  const [errorText, setErrorText] = react.exports.useState("");
  const { interfaceAddress, functionId } = params;
  const handleSubmit = async (inputValue) => {
    try {
      const value = getEnvVariableFromInput(inputValue) || inputValue;
      const isValidAddress = await checkIsValidAddress(value);
      if (!isValidAddress)
        return setErrorText("Invalid address");
      await DEngine$1.callDebotFunction(debotAddress, interfaceAddress, functionId, { value });
    } catch (err) {
      setErrorText(err.message);
    }
  };
  return /* @__PURE__ */ React$1.createElement(Input, {
    customCallback: handleSubmit,
    customErrorText: errorText,
    setCustomErrorText: setErrorText,
    params,
    debotAddress
  });
};
const NANO_MODIFIER = 1e9;
const convertToNanotokens = (tokens) => (parseFloat(tokens) * NANO_MODIFIER).toString();
const TokensInput = ({ params, debotAddress }) => {
  const [errorText, setErrorText] = react.exports.useState("");
  const { functionId, interfaceAddress } = params;
  const handleSubmit = async (inputValue) => {
    try {
      const nanotokens = convertToNanotokens(inputValue);
      await DEngine$1.callDebotFunction(debotAddress, interfaceAddress, functionId, { value: nanotokens });
    } catch (err) {
      setErrorText(err.message);
    }
  };
  return /* @__PURE__ */ React$1.createElement(AmountInput, {
    params,
    customCallback: handleSubmit,
    customErrorText: errorText,
    setCustomErrorText: setErrorText,
    debotAddress
  });
};
var index$b = "";
const MAX_ITEMS = 8;
const Menu = ({ params, debotAddress }) => {
  const [errorText, setErrorText] = react.exports.useState("");
  const [menuItemsToRender, setMenuItemsToRender] = react.exports.useState();
  const [isShowAllMenuItems, setIsShowAllMenuItems] = react.exports.useState(false);
  const { text, title, interfaceAddress, menuItems } = params;
  const handleSelectItem = react.exports.useCallback(async (selectedItem, index2) => {
    try {
      await DEngine$1.callDebotFunction(debotAddress, interfaceAddress, selectedItem.functionId, { index: index2 });
    } catch (err) {
      setErrorText(err.message);
    }
  }, [debotAddress, interfaceAddress]);
  react.exports.useLayoutEffect(() => {
    let itemsToRender = menuItems.map((item, index2) => {
      let menuName = item.title;
      if (item.description)
        menuName += ` (${item.description})`;
      return /* @__PURE__ */ React$1.createElement("div", {
        onClick: () => handleSelectItem(item, index2),
        key: `${item.functionId}-${index2}`,
        className: "stage-component__menu-item"
      }, menuName);
    });
    if (itemsToRender.length > MAX_ITEMS) {
      if (isShowAllMenuItems) {
        itemsToRender.push(/* @__PURE__ */ React$1.createElement("div", {
          onClick: () => setIsShowAllMenuItems(false),
          key: "hide-btn",
          className: "stage-component__menu-item"
        }, "Hide"));
      } else {
        itemsToRender = itemsToRender.slice(0, MAX_ITEMS);
        itemsToRender.push(/* @__PURE__ */ React$1.createElement("div", {
          onClick: () => setIsShowAllMenuItems(true),
          key: "show-more-btn",
          className: "stage-component__menu-item"
        }, "Show more"));
      }
    }
    setMenuItemsToRender(itemsToRender);
  }, [menuItems, handleSelectItem, isShowAllMenuItems]);
  return /* @__PURE__ */ React$1.createElement("div", {
    className: "stage-component__menu-container"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "stage-component__menu-title"
  }, title), /* @__PURE__ */ React$1.createElement("div", {
    className: "stage-component__menu-description"
  }, text), /* @__PURE__ */ React$1.createElement("div", {
    className: "stage-component__menu-list"
  }, menuItemsToRender), errorText && /* @__PURE__ */ React$1.createElement("span", {
    className: "stage-component__menu-error"
  }, errorText));
};
var index$a = "";
const Media = ({ params, debotAddress }) => {
  const { text, data, functionId, interfaceAddress } = params;
  react.exports.useEffect(() => {
    const runDebotFunction = async () => {
      try {
        await DEngine$1.callDebotFunction(debotAddress, interfaceAddress, functionId, { result: MEDIA_STATUS.Success });
      } catch (err) {
        console.error(err);
      }
    };
    runDebotFunction();
  }, []);
  return /* @__PURE__ */ React$1.createElement("div", {
    className: "stage-component__media"
  }, /* @__PURE__ */ React$1.createElement("img", {
    src: data,
    alt: "debot source"
  }), /* @__PURE__ */ React$1.createElement("div", {
    className: "stage-component__media-description"
  }, text));
};
const Stdout = ({ params, debotAddress }) => {
  const { text, interfaceAddress } = params;
  react.exports.useEffect(() => {
    const runDebotFunction = async () => {
      try {
        await DEngine$1.callDebotFunction(debotAddress, interfaceAddress);
      } catch (err) {
        console.error(err);
      }
    };
    runDebotFunction();
  }, []);
  return /* @__PURE__ */ React$1.createElement("div", {
    className: "stage-component__text"
  }, text);
};
var index$9 = "";
const bindedComponents = {
  [COMPONENTS_BINDINGS.INPUT]: Input,
  [COMPONENTS_BINDINGS.TEXTAREA]: Textarea,
  [COMPONENTS_BINDINGS.AMOUNT_INPUT]: AmountInput,
  [COMPONENTS_BINDINGS.CONFIRM_INPUT]: ConfirmInput,
  [COMPONENTS_BINDINGS.ADDRESS_INPUT]: AddressInput,
  [COMPONENTS_BINDINGS.TOKENS_INPUT]: TokensInput,
  [COMPONENTS_BINDINGS.TEXT]: Text,
  [COMPONENTS_BINDINGS.STDOUT]: Stdout,
  [COMPONENTS_BINDINGS.MENU]: Menu,
  [COMPONENTS_BINDINGS.MEDIA]: Media
};
const Stage = ({ debotAddress }) => {
  const appElementRef = react.exports.useContext(AppComponentRefContext);
  const stage = useSelector((store2) => store2.debot.stage);
  const isDebotError = useSelector((store2) => store2.debot.isDebotError);
  const stageLength = stage.length;
  react.exports.useEffect(() => {
    if (stageLength) {
      if (appElementRef == null ? void 0 : appElementRef.current)
        setTimeout(() => appElementRef.current.scrollTop = appElementRef.current.scrollHeight, 0);
    }
  }, [stageLength]);
  if (!stageLength) {
    return /* @__PURE__ */ React$1.createElement(Loader, {
      isFailed: isDebotError
    });
  }
  const formStageComponents = () => {
    return stage.map((stageItem, index2) => {
      const Component = bindedComponents[stageItem.component];
      return /* @__PURE__ */ React$1.createElement(Component, {
        key: `${stageItem.functionId}-${index2}`,
        params: stageItem,
        debotAddress
      });
    });
  };
  const stageComponents = formStageComponents();
  return /* @__PURE__ */ React$1.createElement("div", {
    className: "stage"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "stage__container"
  }, stageComponents));
};
const Debot = ({ address, isEventsOnly }) => {
  const dispatch = useDispatch();
  const debotParams = react.exports.useContext(DebotParamsContext);
  react.exports.useEffect(() => {
    if (address) {
      WalletService$1.setRunningDebotAddress(address);
      DEngine$1.runDebot(address).catch((err) => {
        dispatch(setIsDebotError(true));
        console.error("Error while running debot: ", err);
        EventBus$1.dispatch(EVENTS.DEBOT.RUN_FAILED, {
          data: err
        });
      });
    }
    return () => {
      dispatch(clearStage());
      WalletService$1.setRunningDebotAddress(void 0);
    };
  }, [address, dispatch]);
  if (isEventsOnly)
    return null;
  return /* @__PURE__ */ React$1.createElement("div", {
    className: "debot"
  }, debotParams && !debotParams.showControlsInHeader && /* @__PURE__ */ React$1.createElement(DebotPageControls, {
    debotAddress: address
  }), /* @__PURE__ */ React$1.createElement(Stage, {
    debotAddress: address
  }));
};
var index$8 = "";
const AddDebot = ({ prefilledAddress = "" }) => {
  const popupContext = react.exports.useContext(ControlWithPopupContext);
  const [debotName, setDebotName] = react.exports.useState("");
  const [debotAddress, setDebotAddress] = react.exports.useState(prefilledAddress);
  const [selectedNetwork, setSelectedNetwork] = react.exports.useState(TonClient.selectedNetwork);
  const handleAddressChange = (e2) => setDebotAddress(e2.target.value);
  const handleLabelChange = (e2) => setDebotName(e2.target.value);
  const handleAddDebot = react.exports.useCallback(() => {
    if (debotName && debotAddress) {
      const debotObj = {
        title: debotName,
        address: debotAddress,
        network: selectedNetwork
      };
      addLocalDebot(debotObj);
      if (popupContext)
        popupContext.closePopup();
    }
  }, [debotAddress, debotName, popupContext, selectedNetwork]);
  const handlePressOnEnter = react.exports.useCallback((event) => {
    const { shiftKey, key, altKey } = event;
    const isEnter = key === "Enter";
    const shouldHandle = isEnter && !shiftKey && !altKey;
    if (shouldHandle)
      handleAddDebot();
  }, [handleAddDebot]);
  react.exports.useEffect(() => {
    document.addEventListener("keypress", handlePressOnEnter);
    return () => document.removeEventListener("keypress", handlePressOnEnter);
  }, [handlePressOnEnter]);
  const renderSelectedItem = () => /* @__PURE__ */ React$1.createElement("div", {
    className: "options-list__selected-item"
  }, /* @__PURE__ */ React$1.createElement(NetworkIcon, {
    network: selectedNetwork
  }), selectedNetwork);
  return /* @__PURE__ */ React$1.createElement("div", {
    className: "add-debot"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "add-debot__horizontal-inputs"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "add-debot__input-container"
  }, /* @__PURE__ */ React$1.createElement("span", {
    className: "add-debot__input-label"
  }, "DeBot name"), /* @__PURE__ */ React$1.createElement("input", {
    className: "add-debot__input",
    type: "text",
    placeholder: "Enter...",
    value: debotName,
    onChange: handleLabelChange
  })), /* @__PURE__ */ React$1.createElement(OptionsList, {
    selectedItem: renderSelectedItem(),
    height: 126,
    width: 200
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "options-list__list-item",
    onClick: () => setSelectedNetwork(MAIN_NETWORK)
  }, /* @__PURE__ */ React$1.createElement(MainNetIcon, null), MAIN_NETWORK), /* @__PURE__ */ React$1.createElement("div", {
    className: "options-list__list-item",
    onClick: () => setSelectedNetwork(DEV_NETWORK)
  }, /* @__PURE__ */ React$1.createElement(DevNetIcon, null), DEV_NETWORK), /* @__PURE__ */ React$1.createElement("div", {
    className: "options-list__list-item",
    onClick: () => setSelectedNetwork(FLD_NETWORK)
  }, /* @__PURE__ */ React$1.createElement(FldNetIcon, null), FLD_NETWORK))), /* @__PURE__ */ React$1.createElement("div", {
    className: "add-debot__input-container"
  }, /* @__PURE__ */ React$1.createElement("span", {
    className: "add-debot__input-label"
  }, "DeBot address"), /* @__PURE__ */ React$1.createElement("input", {
    className: "add-debot__input",
    type: "text",
    placeholder: "Enter...",
    value: debotAddress,
    onChange: handleAddressChange
  })), /* @__PURE__ */ React$1.createElement("div", {
    onClick: handleAddDebot,
    className: "add-debot__submit-button"
  }, "Add to list"));
};
var index$7 = "";
const Environment = () => {
  const envVariables = useSelector((state) => state.environment.variables);
  const envEntries = Object.entries(envVariables);
  const [envKey, setEnvKey] = react.exports.useState("");
  const [envValue, setEnvValue] = react.exports.useState("");
  const [isCopiedVisible, setIsCopiedVisible] = react.exports.useState(false);
  const handleKeyChange = (e2) => setEnvKey(e2.target.value);
  const handleValueChange = (e2) => setEnvValue(e2.target.value);
  const handleAddVariable = react.exports.useCallback(() => {
    if (envKey && envValue) {
      addEnvVariable(envKey, envValue);
      setEnvKey("");
      setEnvValue("");
    }
  }, [envKey, envValue]);
  const handleRemoveVariable = (e2, key) => {
    e2.stopPropagation();
    removeEnvVariable(key);
  };
  const handlePressOnEnter = react.exports.useCallback((event) => {
    const { shiftKey, key, altKey } = event;
    const isEnter = key === "Enter";
    const shouldHandle = isEnter && !shiftKey && !altKey;
    if (shouldHandle)
      handleAddVariable();
  }, [handleAddVariable]);
  react.exports.useEffect(() => {
    document.addEventListener("keypress", handlePressOnEnter);
    return () => document.removeEventListener("keypress", handlePressOnEnter);
  }, [handlePressOnEnter]);
  const copyToClipboard = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopiedVisible(true);
      setTimeout(() => setIsCopiedVisible(false), 2e3);
    } catch (err) {
      console.error("Clipboard API not supported");
    }
  };
  const renderVariablesTableItems = () => envEntries.map(([key, value]) => /* @__PURE__ */ React$1.createElement("div", {
    key,
    className: "environment__table-row"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "environment__table-col environment__table-col--cancel"
  }, /* @__PURE__ */ React$1.createElement(CancelIcon, {
    onClick: (e2) => handleRemoveVariable(e2, key)
  })), /* @__PURE__ */ React$1.createElement("div", {
    className: "environment__table-col environment__table-col--title"
  }, key), /* @__PURE__ */ React$1.createElement("div", {
    className: "environment__table-col environment__table-col--clickable",
    onClick: () => copyToClipboard(value)
  }, value)));
  const copiedIndicatorClassName = `environment__copied-indicator ${isCopiedVisible ? "environment__copied-indicator--visible" : ""}`;
  return /* @__PURE__ */ React$1.createElement("div", {
    className: "environment"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: `environment__table--wrapper ${isCustomScrollBar() ? "with-custom-scrollbar" : ""}`
  }, envEntries.length ? /* @__PURE__ */ React$1.createElement("div", {
    className: "environment__table"
  }, renderVariablesTableItems()) : /* @__PURE__ */ React$1.createElement("div", {
    className: "environment__image"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "environment__image-text"
  }, "Here you can store something to use later (address or public key, for example)."), /* @__PURE__ */ React$1.createElement("div", {
    className: "environment__image--flex-container"
  }, /* @__PURE__ */ React$1.createElement("img", {
    src: "/env-icon.svg",
    alt: "Environment"
  }), /* @__PURE__ */ React$1.createElement("div", {
    className: "environment__image-text"
  }, "You can access stored data as variables in inputs by adding the '$' prefix to key, or copy data to the clipboard by click on it.")), /* @__PURE__ */ React$1.createElement("div", {
    className: "environment__image-text environment__image-text--warning"
  }, "This storage is not encrypted, so you should not store private keys or seed-phrase here."))), /* @__PURE__ */ React$1.createElement("div", {
    className: "environment__input-container"
  }, /* @__PURE__ */ React$1.createElement("input", {
    className: "environment__input",
    type: "text",
    placeholder: "Key",
    value: envKey,
    onChange: handleKeyChange
  }), /* @__PURE__ */ React$1.createElement("span", {
    className: "environment__divider"
  }, ":"), /* @__PURE__ */ React$1.createElement("input", {
    className: "environment__input",
    type: "text",
    placeholder: "Value",
    value: envValue,
    onChange: handleValueChange
  })), /* @__PURE__ */ React$1.createElement("div", {
    className: "environment__footer"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: copiedIndicatorClassName
  }, "Copied to clipboard!"), /* @__PURE__ */ React$1.createElement("div", {
    onClick: handleAddVariable,
    className: "environment__submit-button"
  }, "Add variable")));
};
var index$6 = "";
const DEFAULT_WIDTH$1 = 460;
const DEFAULT_HEIGHT$1 = 252;
const ControlWithPopup = ({ children, name, height = DEFAULT_HEIGHT$1, width = DEFAULT_WIDTH$1 }) => {
  const containerRef = react.exports.useRef(null);
  const popupRef = react.exports.useRef(null);
  const [rightOffset, setRightOffset] = react.exports.useState(0);
  const [isControlOpen, setIsControlOpen] = react.exports.useState(false);
  const closePopup = () => setIsControlOpen(false);
  const handleClickOutside = react.exports.useCallback((event) => {
    const shouldHandleClick = isControlOpen && (containerRef == null ? void 0 : containerRef.current) && !containerRef.current.contains(event.target);
    if (shouldHandleClick)
      closePopup();
  }, [isControlOpen]);
  react.exports.useEffect(() => {
    if (popupRef == null ? void 0 : popupRef.current) {
      const rect = popupRef.current.getBoundingClientRect();
      const isInViewport = rect.x > 0;
      if (!isInViewport)
        setRightOffset(rect.x - 10);
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);
  const containerClassName = `control-with-popup__container ${isControlOpen ? "control-with-popup__container--visible" : ""}`;
  const switcherBlockClassName = `control-with-popup ${isControlOpen ? "control-with-popup--active" : ""}`;
  const containerStyles = {
    "--height": `${height}px`,
    "--width": `${width}px`,
    "--right": `${rightOffset}px`
  };
  return /* @__PURE__ */ React$1.createElement("div", {
    ref: containerRef,
    className: switcherBlockClassName
  }, /* @__PURE__ */ React$1.createElement("div", {
    onClick: () => setIsControlOpen(!isControlOpen),
    className: "control-with-popup__label"
  }, name), /* @__PURE__ */ React$1.createElement("div", {
    className: containerClassName,
    style: containerStyles,
    ref: popupRef
  }, /* @__PURE__ */ React$1.createElement(ControlWithPopupContext.Provider, {
    value: { closePopup }
  }, isControlOpen && children)));
};
var index$5 = "";
const DEFAULT_HEIGHT = 252;
const DEFAULT_WIDTH = 245;
const OptionsList = ({ children, selectedItem, height = DEFAULT_HEIGHT, width = DEFAULT_WIDTH, isDisabled }) => {
  const switcherBlockRef = react.exports.useRef(null);
  const [isListOpen, setIsListOpen] = react.exports.useState(false);
  const handleClickOutside = react.exports.useCallback((event) => {
    var _a;
    if (!((_a = switcherBlockRef == null ? void 0 : switcherBlockRef.current) == null ? void 0 : _a.contains(event.target)) && isListOpen)
      setIsListOpen(false);
  }, [isListOpen]);
  react.exports.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);
  const listClassName = `options-list__list ${isListOpen ? "options-list__list--visible" : ""}`;
  const switcherBlockClassName = `options-list ${isListOpen ? "options-list--active" : ""} ${isDisabled ? "options-list--disabled" : ""}`;
  return /* @__PURE__ */ React$1.createElement("div", {
    ref: switcherBlockRef,
    onClick: () => !isDisabled && setIsListOpen(!isListOpen),
    className: switcherBlockClassName,
    style: { "--width": `${width}px` }
  }, selectedItem, /* @__PURE__ */ React$1.createElement(ArrowIcon, null), /* @__PURE__ */ React$1.createElement("div", {
    className: listClassName,
    style: { "--height": `${height}px` }
  }, children));
};
var index$4 = "";
const Loader = ({ isFailed }) => {
  const imgSrc = isFailed ? "/load-failed.png" : "/loader.gif";
  const imgAlt = isFailed ? "Nothing here :(" : "Loading...";
  return /* @__PURE__ */ React$1.createElement("div", {
    className: "loader"
  }, /* @__PURE__ */ React$1.createElement("img", {
    className: "loader__content",
    src: imgSrc,
    alt: imgAlt
  }));
};
var index$3 = "";
const Modal = ({
  children,
  handleCloseModal,
  containerClassName: containerClassNameFromProps = "",
  modalClassName: modalClassNameFromProps = ""
}) => {
  const modalClassName = `abstract-modal ${modalClassNameFromProps} ${isCustomScrollBar() ? "with-custom-scrollbar" : ""}`;
  const modalContainerClassName = `abstract-modal__container ${containerClassNameFromProps} ${isCustomScrollBar() ? "with-custom-scrollbar" : ""}`;
  return /* @__PURE__ */ React$1.createElement("div", {
    className: modalClassName
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: modalContainerClassName
  }, !!handleCloseModal && /* @__PURE__ */ React$1.createElement("div", {
    className: "abstract-modal__cancel-icon"
  }, /* @__PURE__ */ React$1.createElement(CancelIcon, {
    onClick: handleCloseModal
  })), children));
};
var index$2 = "";
const SigningBox = () => {
  const [inputValue, setInputValue] = react.exports.useState("");
  const [errorText, setErrorText] = react.exports.useState("");
  const [isDropable, setIsDropable] = react.exports.useState(false);
  const [isUploadError, setIsUploadError] = react.exports.useState(false);
  const signingBox = useSelector((state) => state.debot.signingBox);
  const handleChangeInput = (e2) => {
    setInputValue(e2.target.value);
    setErrorText("");
  };
  const submitInput = async (event) => {
    const { shiftKey, key, altKey } = event;
    const isEnter = key === "Enter";
    const shouldSubmit = isEnter && !shiftKey && !altKey && inputValue;
    if (!shouldSubmit)
      return;
    try {
      const keyPair = await genKeyPairFromMnemonic(inputValue);
      signingBox == null ? void 0 : signingBox.submit(keyPair);
    } catch (err) {
      console.error("Error when getting keys from mnemonic: ", err);
      setErrorText("Error when getting keys from secret phrase");
    }
  };
  const preventEvent = (e2) => {
    e2.preventDefault();
    e2.stopPropagation();
  };
  const handleDragEnter = (e2) => {
    preventEvent(e2);
    setIsDropable(true);
  };
  const handleDragLeave = (e2) => {
    preventEvent(e2);
    setIsDropable(false);
  };
  const handleDrop = (e2) => {
    preventEvent(e2);
    setIsDropable(false);
    setIsUploadError(false);
    const { files } = e2.dataTransfer;
    if (files && files.length > 1)
      return setIsUploadError(true);
    const reader = new FileReader();
    reader.onabort = () => setIsUploadError(true);
    reader.onerror = () => setIsUploadError(true);
    reader.onload = (e22) => {
      var _a;
      try {
        const keyPair = JSON.parse((_a = e22.target) == null ? void 0 : _a.result);
        signingBox == null ? void 0 : signingBox.submit(keyPair);
        setIsUploadError(false);
      } catch (err) {
        setIsUploadError(true);
      }
    };
    reader.readAsText(files[0]);
  };
  return /* @__PURE__ */ React$1.createElement(Modal, {
    containerClassName: "signing-box"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "signing-box__header"
  }, "Signing Box"), /* @__PURE__ */ React$1.createElement("div", {
    className: "signing-box__description"
  }, "We ", /* @__PURE__ */ React$1.createElement("b", null, "DON'T"), " store your keys or seed phrase."), /* @__PURE__ */ React$1.createElement("div", {
    className: "signing-box__input-container"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "signing-box__input-label"
  }, "Enter seed phrase:"), /* @__PURE__ */ React$1.createElement("textarea", {
    className: `signing-box__input ${errorText ? "signing-box__input--error" : ""}`,
    value: inputValue,
    onChange: handleChangeInput,
    onKeyPress: submitInput
  }), errorText && /* @__PURE__ */ React$1.createElement("span", {
    className: "signing-box__input-error"
  }, errorText)), /* @__PURE__ */ React$1.createElement("div", {
    className: "signing-box__devider"
  }, "OR"), /* @__PURE__ */ React$1.createElement("div", {
    className: `signing-box__upload-keys ${isDropable ? "signing-box__upload-keys--dropable" : ""}`,
    onDragEnter: handleDragEnter,
    onDrop: handleDrop,
    onDragOver: preventEvent
  }, /* @__PURE__ */ React$1.createElement("input", {
    type: "file",
    id: "upload-input",
    hidden: true
  }), /* @__PURE__ */ React$1.createElement("label", {
    htmlFor: "upload-input"
  }, /* @__PURE__ */ React$1.createElement("img", {
    src: "/uploadKeys.jpg",
    alt: "Click here to upload"
  }), "Upload keypair file"), /* @__PURE__ */ React$1.createElement("div", {
    className: `signing-box__upload-keys-dropable-overlay ${isDropable ? "signing-box__upload-keys-dropable-overlay--active" : ""}`,
    onDragLeave: handleDragLeave
  }), isUploadError && /* @__PURE__ */ React$1.createElement("span", {
    className: "signing-box__upload-keys--error"
  }, "Not recognized")));
};
var index$1 = "";
const convertFromNano = (value) => value / 1e9;
const ApproveWindow = () => {
  const approveWindow = useSelector((state) => state.debot.approveWindow);
  const handleApprove = (isApproved) => approveWindow.submit(isApproved);
  const { dst, fee, out, setcode, signkey } = approveWindow.params;
  const hasOutgoingTransfers = !!out.length;
  return /* @__PURE__ */ React$1.createElement(Modal, {
    containerClassName: "approve-window"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "approve-window__header"
  }, "Permission Request"), /* @__PURE__ */ React$1.createElement("div", {
    className: "approve-window__description"
  }, "DeBot is going to create an onchain transaction:"), /* @__PURE__ */ React$1.createElement("div", {
    className: "approve-window__details"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "approve-window__details-row"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "approve-window__details-col approve-window__details-col--title"
  }, "Account:"), /* @__PURE__ */ React$1.createElement("div", {
    className: "approve-window__details-col"
  }, /* @__PURE__ */ React$1.createElement("a", {
    href: createExplorerUrl(dst),
    target: "_blank",
    rel: "noreferrer"
  }, dst))), /* @__PURE__ */ React$1.createElement("div", {
    className: "approve-window__details-row"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "approve-window__details-col approve-window__details-col--title"
  }, "Transaction fees:"), /* @__PURE__ */ React$1.createElement("div", {
    className: "approve-window__details-col"
  }, convertFromNano(fee), " tokens")), /* @__PURE__ */ React$1.createElement("div", {
    className: "approve-window__details-row"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "approve-window__details-col approve-window__details-col--title"
  }, "Message signer public key:"), /* @__PURE__ */ React$1.createElement("div", {
    className: "approve-window__details-col"
  }, signkey))), hasOutgoingTransfers ? /* @__PURE__ */ React$1.createElement("div", {
    className: "approve-window__details-description"
  }, "Outgoing transfers from account:") : /* @__PURE__ */ React$1.createElement("div", {
    className: "approve-window__details-description"
  }, "No outgoing transfers."), hasOutgoingTransfers && /* @__PURE__ */ React$1.createElement("div", {
    className: "approve-window__transfers"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "approve-window__transfers-row"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "approve-window__transfers-col approve-window__transfers-col--title"
  }, "Recipient"), /* @__PURE__ */ React$1.createElement("div", {
    className: "approve-window__transfers-col approve-window__transfers-col--title"
  }, "Amount")), out.map((spending, index2) => {
    const recipient = spending.recipient || spending.dst;
    return /* @__PURE__ */ React$1.createElement("div", {
      key: `${recipient}-${index2}`,
      className: "approve-window__transfers-row"
    }, /* @__PURE__ */ React$1.createElement("div", {
      className: "approve-window__transfers-col"
    }, /* @__PURE__ */ React$1.createElement("a", {
      href: createExplorerUrl(recipient),
      target: "_blank",
      rel: "noreferrer"
    }, recipient)), /* @__PURE__ */ React$1.createElement("div", {
      className: "approve-window__transfers-col"
    }, convertFromNano(spending.amount), " tokens"));
  })), !!setcode && /* @__PURE__ */ React$1.createElement("div", {
    className: "approve-window__details-description approve-window__details-description--warning"
  }, "Warning: the transaction will change the account smart contract code!"), /* @__PURE__ */ React$1.createElement("div", {
    className: "approve-window__confirm"
  }, /* @__PURE__ */ React$1.createElement(ConfirmInput, {
    approveCallback: handleApprove
  })));
};
var index = "";
const DEFAULT_MESSAGE = "Account data will be used to communicate with DeBots";
const ConnectWallet = () => {
  const dispatch = useDispatch();
  const modalData = useSelector((state) => state.account.connectWalletModal);
  const { message = DEFAULT_MESSAGE, isError } = modalData || {};
  const closeModal = () => {
    WalletService$1.rejectWaitingConnections();
    dispatch(setConnectWalletModal(null));
  };
  const retryConnect = async () => {
    try {
      dispatch(setConnectWalletModal({ isError: false }));
      const connectedWallet = await WalletService$1.connect();
      dispatch(setWallet(connectedWallet));
      closeModal();
    } catch (err) {
      dispatch(setConnectWalletModal({ message: err.message, isError: true }));
    }
  };
  const headerText = isError ? "Wallet Connect Error" : "Connect Wallet";
  return /* @__PURE__ */ React$1.createElement(Modal, {
    handleCloseModal: isError ? closeModal : null,
    containerClassName: "connect-wallet-modal"
  }, /* @__PURE__ */ React$1.createElement("div", {
    className: "connect-wallet-modal__header"
  }, headerText), /* @__PURE__ */ React$1.createElement("div", {
    className: "connect-wallet-modal__description"
  }, message), isError ? /* @__PURE__ */ React$1.createElement("div", {
    className: "connect-wallet-modal__retry",
    onClick: retryConnect
  }, "Connect Wallet") : /* @__PURE__ */ React$1.createElement(Loader, null));
};
const StandaloneBrowser = (props) => {
  const {
    hideenv,
    hiderestart,
    hidesave,
    debotonly,
    debotaddress,
    network = MAIN_NETWORK
  } = props;
  const isDebotOnly = debotonly === "true" && !!debotaddress;
  const isHideEnv = hideenv === "true";
  const isHideRestart = hiderestart === "true";
  const isHideSave = hidesave === "true";
  const headerParams = {
    hideBackButton: !!debotonly
  };
  const debotParams = {
    hideEnv: isHideEnv,
    hideRestart: isHideRestart,
    hideSave: isHideSave
  };
  return /* @__PURE__ */ React$1.createElement(Provider, {
    store
  }, /* @__PURE__ */ React$1.createElement(BrowserRouter, null, /* @__PURE__ */ React$1.createElement(HeaderParamsContext.Provider, {
    value: headerParams
  }, /* @__PURE__ */ React$1.createElement(DebotOnlyContext.Provider, {
    value: isDebotOnly
  }, /* @__PURE__ */ React$1.createElement(DebotParamsContext.Provider, {
    value: debotParams
  }, /* @__PURE__ */ React$1.createElement(App, {
    initialNetwork: network,
    initialDebotAddress: debotaddress
  }, /* @__PURE__ */ React$1.createElement(Browser, null)))))));
};
StandaloneBrowser.propTypes = {
  debotaddress: PropTypes.string,
  debotonly: PropTypes.string,
  hideenv: PropTypes.string,
  hiderestart: PropTypes.string,
  hidesave: PropTypes.string,
  network: PropTypes.string
};
const StandaloneDebot = (props) => {
  const { hiderestart, debotaddress, network = MAIN_NETWORK } = props;
  const isHideRestart = hiderestart === "true";
  const headerParams = {
    hideBackButton: true,
    hideNetworkSelector: true,
    hideSearchBar: true
  };
  const debotParams = {
    hideEnv: true,
    hideRestart: isHideRestart,
    hideSave: true,
    showControlsInHeader: true,
    debotAddress: debotaddress
  };
  return /* @__PURE__ */ React$1.createElement(Provider, {
    store
  }, /* @__PURE__ */ React$1.createElement(HeaderParamsContext.Provider, {
    value: headerParams
  }, /* @__PURE__ */ React$1.createElement(DebotParamsContext.Provider, {
    value: debotParams
  }, /* @__PURE__ */ React$1.createElement(App, {
    initialNetwork: network
  }, /* @__PURE__ */ React$1.createElement(Debot, {
    address: debotaddress
  })))));
};
StandaloneDebot.propTypes = {
  debotaddress: PropTypes.string.isRequired,
  hiderestart: PropTypes.string,
  network: PropTypes.string
};
const StandaloneDebotEvents = (props) => {
  const { debotaddress, network = MAIN_NETWORK } = props;
  return /* @__PURE__ */ React$1.createElement(Provider, {
    store
  }, /* @__PURE__ */ React$1.createElement(App, {
    initialNetwork: network,
    isEventsOnly: true
  }, /* @__PURE__ */ React$1.createElement(Debot, {
    address: debotaddress,
    isEventsOnly: true
  })));
};
StandaloneDebotEvents.propTypes = {
  debotaddress: PropTypes.string.isRequired,
  network: PropTypes.string
};
var normalize = "";
window.customElements.define("standalone-browser", reactToWebComponent(StandaloneBrowser, React$1, ReactDOM));
window.customElements.define("standalone-debot", reactToWebComponent(StandaloneDebot, React$1, ReactDOM));
window.customElements.define("standalone-debot-events", reactToWebComponent(StandaloneDebotEvents, React$1, ReactDOM));
window.DEBOT_EMBEDDING = {
  EVENT_BUS: EventBus$1,
  EVENTS,
  DEBOT_INTERFACE_ID,
  encodeString,
  decodeString
};
export { DEBOT_INTERFACE_ID, EVENTS, EventBus$1 as EventBus, decodeString, encodeString };
