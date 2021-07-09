/*! 🤙 emojicom widget (2021-4-26_22-34-24 c05cd210d37db5224208)  */ !(function (
  e
) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 80));
})([
  ,
  function (e, t) {
    e.exports = function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  },
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var r = n(7);
    function o(e, t) {
      if (e) {
        if ("string" == typeof e) return Object(r.a)(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? Object(r.a)(e, t)
            : void 0
        );
      }
    }
  },
  ,
  function (e, t, n) {
    "use strict";
    function r(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    n.d(t, "a", function () {
      return r;
    });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.RATE_URL =
        t.CLOSE_TIMEOUT =
        t.FIRST_PAGE_LOAD_KEY_PREFIX =
        t.SESSION_PREFIX =
        t.CLOSED_KEY_PREFIX =
        t.SENT_KEY_PREFIX =
        t.OPTIONS_KEY_PREFIX =
        t.STORAGE_KEY_PREFIX =
        t.LOG_PREFIX =
          void 0);
    t.LOG_PREFIX = "[emojicom 🤙]";
    t.STORAGE_KEY_PREFIX = "__emojicom_campaign";
    var r = "".concat("__emojicom_campaign", "_options_");
    t.OPTIONS_KEY_PREFIX = r;
    var o = "".concat("__emojicom_campaign", "_sent_");
    t.SENT_KEY_PREFIX = o;
    var a = "".concat("__emojicom_campaign", "_closed_");
    t.CLOSED_KEY_PREFIX = a;
    var i = "".concat("__emojicom_campaign", "_session_");
    t.SESSION_PREFIX = i;
    var c = "".concat("__emojicom_campaign", "_firstload_");
    t.FIRST_PAGE_LOAD_KEY_PREFIX = c;
    t.CLOSE_TIMEOUT = 3e3;
    t.RATE_URL = "https://emojicom.io/api/submit";
  },
  function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function o(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function a(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? o(Object(n), !0).forEach(function (t) {
              r(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : o(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    n.r(t),
      n.d(t, "default", function () {
        return a;
      });
  },
  ,
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "default", function () {
        return o;
      });
    var r = n(5);
    function o(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          }
        })(e, t) ||
        Object(r.a)(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.logDebug = t.isDebug = void 0);
    var r = n(8),
      o = function () {
        return (
          !0 === window.__DEBUG ||
          window.location.href.indexOf("emojicom-debug") > 0
        );
      };
    t.isDebug = o;
    t.logDebug = function () {
      for (var e, t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return o() && (e = console).log.apply(e, [r.LOG_PREFIX].concat(n));
    };
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    function r(e) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    n.r(t),
      n.d(t, "default", function () {
        return r;
      });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "default", function () {
        return a;
      });
    var r = n(7);
    var o = n(5);
    function a(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return Object(r.a)(e);
        })(e) ||
        (function (e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        })(e) ||
        Object(o.a)(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r = {
        title: "Give us your feedback",
        comments_title: "Anything we can improve?",
        comments_placeholder: "Optional",
        thank_you: "Thanks for your feedback 🙏",
        submit: "Send feedback",
        email_label: "Email",
        email_placeholder: "Optional",
      },
      o = {
        position: "float",
        align: "left",
        emojiset: "default",
        emojiSize: 0,
        triggerMode: "onload",
        titleEnabled: !0,
        commentsEnabled: !0,
        brandingEnabled: !0,
        rateInterval: 20160,
        texts: (0, n(1)(n(9)).default)({}, r),
      };
    e.exports = {
      DEFAULT_TEXTS: r,
      CAMPAIGN_DEFAULTS: o,
      DEFAULT_RATE_INTERVAL: 20160,
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getTextColorBaseOnBackgroundColor = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "#fff",
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "#000",
          r = e.startsWith("#") ? e.substring(1, 7) : e,
          o = parseInt(r.substring(0, 2), 16),
          a = parseInt(r.substring(2, 4), 16),
          i = parseInt(r.substring(4, 6), 16);
        return 0.299 * o + 0.587 * a + 0.114 * i > 186 ? n : t;
      });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    e.exports = n(38);
  },
  function (e, t, n) {
    "use strict";
    function r(e, t, n, r, o, a, i) {
      try {
        var c = e[a](i),
          u = c.value;
      } catch (e) {
        return void n(e);
      }
      c.done ? t(u) : Promise.resolve(u).then(r, o);
    }
    function o(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (o, a) {
          var i = e.apply(t, n);
          function c(e) {
            r(i, o, a, c, u, "next", e);
          }
          function u(e) {
            r(i, o, a, c, u, "throw", e);
          }
          c(void 0);
        });
      };
    }
    n.r(t),
      n.d(t, "default", function () {
        return o;
      });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1)(n(9)),
      o = n(43).parseFirestoreFields,
      a = n(26).CAMPAIGN_DEFAULTS;
    function i() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      for (var r = 0, o = t; r < o.length; r++) {
        var a = o[r];
        if (null != a) return a;
      }
      return null;
    }
    function c(e) {
      var t = (0, r.default)({}, e, { texts: (0, r.default)({}, e.texts) });
      return (
        (!t.thankYouText && !t.texts.thankyou) ||
          t.texts.thank_you ||
          (t.texts.thank_you = t.thankYouText || t.texts.thankyou),
        t.followUp &&
          !t.texts.comments_title &&
          (t.texts.comments_title = t.followUp),
        t.title && !t.texts.title && (t.texts.title = t.title),
        t.texts.followup_negative &&
          (t.texts.comments_title_negative = t.texts.followup_negative),
        t
      );
    }
    e.exports = {
      fetchOptions: function (e) {
        if (!e) throw new Error("Invalid campaign id: ".concat(e));
        var t = "https://emojicom.io/api/campaign/{id}",
          n = t.replace("{id}", e);
        return fetch(n, {
          cache: "no-store",
          mode: "cors",
          headers: { accept: "application/json" },
        })
          .then(function (t) {
            if (!t.ok)
              throw new Error(
                "Loading campaign "
                  .concat(e, " failed: ")
                  .concat(t.statusText, " (")
                  .concat(t.status, ")")
              );
            return t.json();
          })
          .then(function (e) {
            return o(e.fields);
          })
          .then(c)
          .catch(function (e) {
            throw e;
          });
      },
      documentToPublicCampaign: function (e) {
        var t = {
          domain: e.domain || null,
          position: e.position || a.position,
          align: e.align || a.align,
          launcherEnabled: e.launcherEnabled || !1,
          triggerMode: e.triggerMode || "onload",
          triggerValue: e.triggerValue || null,
          emojiset: e.emojiset || "default",
          emojis: e.emojis || null,
          titleEnabled: e.titleEnabled || !1,
          commentsEnabled: e.commentsEnabled || !1,
          emailEnabled: e.emailEnabled || !1,
          brandingEnabled: i(e.brandingEnabled, !0),
          texts: (0, r.default)({}, e.texts || {}),
          themeColor: e.themeColor || null,
          themePreset: e.themePreset || null,
          type: e.type || "feedback",
        };
        return (
          t.launcherEnabled && (t.launcherType = e.launcherType || "button"), t
        );
      },
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var n = (function (e, t) {
              var n = e[1] || "",
                r = e[3];
              if (!r) return n;
              if (t && "function" == typeof btoa) {
                var o =
                    ((i = r),
                    (c = btoa(unescape(encodeURIComponent(JSON.stringify(i))))),
                    (u =
                      "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                        c
                      )),
                    "/*# ".concat(u, " */")),
                  a = r.sources.map(function (e) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot || "")
                      .concat(e, " */");
                  });
                return [n].concat(a).concat([o]).join("\n");
              }
              var i, c, u;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
          }).join("");
        }),
        (t.i = function (e, n, r) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var o = {};
          if (r)
            for (var a = 0; a < this.length; a++) {
              var i = this[a][0];
              null != i && (o[i] = !0);
            }
          for (var c = 0; c < e.length; c++) {
            var u = [].concat(e[c]);
            (r && o[u[0]]) ||
              (n &&
                (u[2]
                  ? (u[2] = "".concat(n, " and ").concat(u[2]))
                  : (u[2] = n)),
              t.push(u));
          }
        }),
        t
      );
    };
  },
  function (e, t, n) {
    var r =
        (function () {
          return this || ("object" == typeof self && self);
        })() || Function("return this")(),
      o =
        r.regeneratorRuntime &&
        Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
      a = o && r.regeneratorRuntime;
    if (((r.regeneratorRuntime = void 0), (e.exports = n(39)), o))
      r.regeneratorRuntime = a;
    else
      try {
        delete r.regeneratorRuntime;
      } catch (e) {
        r.regeneratorRuntime = void 0;
      }
  },
  function (e, t) {
    !(function (t) {
      "use strict";
      var n,
        r = Object.prototype,
        o = r.hasOwnProperty,
        a = "function" == typeof Symbol ? Symbol : {},
        i = a.iterator || "@@iterator",
        c = a.asyncIterator || "@@asyncIterator",
        u = a.toStringTag || "@@toStringTag",
        l = "object" == typeof e,
        s = t.regeneratorRuntime;
      if (s) l && (e.exports = s);
      else {
        (s = t.regeneratorRuntime = l ? e.exports : {}).wrap = v;
        var f = "suspendedStart",
          m = "suspendedYield",
          d = "executing",
          p = "completed",
          h = {},
          _ = {};
        _[i] = function () {
          return this;
        };
        var g = Object.getPrototypeOf,
          b = g && g(g(k([])));
        b && b !== r && o.call(b, i) && (_ = b);
        var y = (O.prototype = x.prototype = Object.create(_));
        (E.prototype = y.constructor = O),
          (O.constructor = E),
          (O[u] = E.displayName = "GeneratorFunction"),
          (s.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === E || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (s.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, O)
                : ((e.__proto__ = O), u in e || (e[u] = "GeneratorFunction")),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (s.awrap = function (e) {
            return { __await: e };
          }),
          j(P.prototype),
          (P.prototype[c] = function () {
            return this;
          }),
          (s.AsyncIterator = P),
          (s.async = function (e, t, n, r) {
            var o = new P(v(e, t, n, r));
            return s.isGeneratorFunction(t)
              ? o
              : o.next().then(function (e) {
                  return e.done ? e.value : o.next();
                });
          }),
          j(y),
          (y[u] = "Generator"),
          (y[i] = function () {
            return this;
          }),
          (y.toString = function () {
            return "[object Generator]";
          }),
          (s.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var r = t.pop();
                  if (r in e) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (s.values = k),
          (L.prototype = {
            constructor: L,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = n),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = n),
                this.tryEntries.forEach(F),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    o.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = n);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(r, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (t.next = r),
                  o && ((t.method = "next"), (t.arg = n)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  c = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var u = o.call(i, "catchLoc"),
                    l = o.call(i, "finallyLoc");
                  if (u && l) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  o.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var a = r;
                  break;
                }
              }
              a &&
                ("break" === e || "continue" === e) &&
                a.tryLoc <= t &&
                t <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), h)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                h
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), F(n), h;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    F(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: k(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = n),
                h
              );
            },
          });
      }
      function v(e, t, n, r) {
        var o = t && t.prototype instanceof x ? t : x,
          a = Object.create(o.prototype),
          i = new L(r || []);
        return (
          (a._invoke = (function (e, t, n) {
            var r = f;
            return function (o, a) {
              if (r === d) throw new Error("Generator is already running");
              if (r === p) {
                if ("throw" === o) throw a;
                return A();
              }
              for (n.method = o, n.arg = a; ; ) {
                var i = n.delegate;
                if (i) {
                  var c = S(i, n);
                  if (c) {
                    if (c === h) continue;
                    return c;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (r === f) throw ((r = p), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = d;
                var u = w(e, t, n);
                if ("normal" === u.type) {
                  if (((r = n.done ? p : m), u.arg === h)) continue;
                  return { value: u.arg, done: n.done };
                }
                "throw" === u.type &&
                  ((r = p), (n.method = "throw"), (n.arg = u.arg));
              }
            };
          })(e, n, i)),
          a
        );
      }
      function w(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      function x() {}
      function E() {}
      function O() {}
      function j(e) {
        ["next", "throw", "return"].forEach(function (t) {
          e[t] = function (e) {
            return this._invoke(t, e);
          };
        });
      }
      function P(e) {
        var t;
        this._invoke = function (n, r) {
          function a() {
            return new Promise(function (t, a) {
              !(function t(n, r, a, i) {
                var c = w(e[n], e, r);
                if ("throw" !== c.type) {
                  var u = c.arg,
                    l = u.value;
                  return l && "object" == typeof l && o.call(l, "__await")
                    ? Promise.resolve(l.__await).then(
                        function (e) {
                          t("next", e, a, i);
                        },
                        function (e) {
                          t("throw", e, a, i);
                        }
                      )
                    : Promise.resolve(l).then(
                        function (e) {
                          (u.value = e), a(u);
                        },
                        function (e) {
                          return t("throw", e, a, i);
                        }
                      );
                }
                i(c.arg);
              })(n, r, t, a);
            });
          }
          return (t = t ? t.then(a, a) : a());
        };
      }
      function S(e, t) {
        var r = e.iterator[t.method];
        if (r === n) {
          if (((t.delegate = null), "throw" === t.method)) {
            if (
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = n),
              S(e, t),
              "throw" === t.method)
            )
              return h;
            (t.method = "throw"),
              (t.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return h;
        }
        var o = w(r, e.iterator, t.arg);
        if ("throw" === o.type)
          return (t.method = "throw"), (t.arg = o.arg), (t.delegate = null), h;
        var a = o.arg;
        return a
          ? a.done
            ? ((t[e.resultName] = a.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = n)),
              (t.delegate = null),
              h)
            : a
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            h);
      }
      function I(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function F(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function L(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(I, this),
          this.reset(!0);
      }
      function k(e) {
        if (e) {
          var t = e[i];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var r = -1,
              a = function t() {
                for (; ++r < e.length; )
                  if (o.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                return (t.value = n), (t.done = !0), t;
              };
            return (a.next = a);
          }
        }
        return { next: A };
      }
      function A() {
        return { value: n, done: !0 };
      }
    })(
      (function () {
        return this || ("object" == typeof self && self);
      })() || Function("return this")()
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.initFrame = function (e) {
        var t,
          n,
          r = e.campaignId,
          o = (e.align, e.position),
          i = e.target,
          u = void 0 === i ? null : i,
          l = new Promise(function (e) {
            t = e;
          }),
          s = new Promise(function (e) {
            n = e;
          }),
          f =
            (window.EMOJICOM_BASE_PATH || "https://cdn.emojicom.io/embed") +
            "/index.html",
          m = document.createElement("iframe");
        (m.title = "Emojicom feedback widget"),
          (m.src = f),
          (m.className = [p, a.default.frame, "intrinsic-ignore"].join(" ")),
          (m.frameBorder = 0),
          (m.style.display = "none"),
          (m.height = 1),
          (m.width = 1),
          (m.onload = function () {
            return t(m);
          }),
          (m.__setFrameReady = function () {
            return n(m);
          }),
          (m.__frameLoaded = l),
          r && (m.dataset.campaign = r);
        (0, c.isDebug)() && (m.style.outline = "2px solid red");
        (0, c.logDebug)("Iframe src:", f);
        var d = function () {
          if (u) u.appendChild(m);
          else {
            if ("inline" === o) {
              var e = document.getElementById(h);
              e
                ? e.appendChild(m)
                : (0, c.logDebug)(
                    'No inline with ID "'.concat(
                      h,
                      '" found so frame will not be added'
                    )
                  );
            }
            "float" === o && document.body.appendChild(m);
          }
        };
        "loading" === document.readyState
          ? document.addEventListener("DOMContentLoaded", d)
          : d();
        return { frame: m, frameLoaded: l, frameReady: s };
      }),
      (t.setFramePosition = function (e, t) {
        var n = t.position,
          r = t.align,
          i = t.topOffset,
          l = t.middleOffset,
          p = t.bottomOffset,
          h = t.leftOffset,
          _ = t.rightOffset;
        if (
          ((0, c.logDebug)("Set frame position:", {
            position: n,
            align: r,
            topOffset: i,
            middleOffset: l,
            bottomOffset: p,
            leftOffset: h,
            rightOffset: _,
          }),
          e.classList.add("".concat(a.default.frame, "_").concat(n)),
          "float" === n)
        ) {
          var g = (0, u.getPositionAlignParts)(r),
            b = (0, o.default)(g, 2),
            y = b[0],
            v = b[1];
          if (
            ((e.style.transformOrigin = "".concat(v, " bottom")),
            (e.dataset.position = "float"),
            (e.style.position = "fixed"),
            (e.width = f),
            (e.height = m),
            (e.style.top = ""),
            (e.style.bottom = ""),
            (e.style.left = ""),
            (e.style.right = ""),
            (0, s.useFullscreen)())
          )
            (e.style.minHeight = "100vh"),
              (e.style.height = "100%"),
              (e.style.width = "100%"),
              (e.style.top = "0px"),
              (e.style.left = "0px");
          else {
            switch (y) {
              case "top":
                e.style.top = (0, u.toPixel)(i);
                break;
              case "middle":
                e.style.bottom = (0, u.toPixel)(l);
                break;
              case "bottom":
                e.style.bottom = (0, u.toPixel)(p);
                break;
              default:
                (0, c.logDebug)("Invalid align Y:", y);
            }
            switch (v) {
              case "left":
                e.style.left = (0, u.toPixel)(h);
                break;
              case "right":
                e.style.right = (0, u.toPixel)(_);
                break;
              default:
                (0, c.logDebug)("Invalid align X:", v);
            }
          }
        }
        "inline" === n &&
          ((e.dataset.position = "inline"),
          (e.width = "100%"),
          (e.height = d),
          (e.style.position = ""),
          (e.style.bottom = ""));
      }),
      (t.sendFramePayload = function (e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        (0, c.logDebug)("Send frame action:", t, n);
        var r = JSON.stringify({ action: t, payload: n });
        e.contentWindow.postMessage(r, "*");
      }),
      (t.setFrameVisible = _),
      (t.isFrameVisible = g),
      (t.toggleFrameVisible = function (e) {
        var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        g(e) ? _(e, !1, t) : _(e, !0, t);
      }),
      (t.getFrameByCampaignId = function (e) {
        return document.querySelector(
          "iframe.".concat(p, '[data-campaign="').concat(e, '"]')
        );
      }),
      (t.getFrames = function () {
        return [].slice.call(document.querySelectorAll("iframe.".concat(p)));
      }),
      (t.destroyFrame = function (e) {
        e && (e.remove(), (0, c.logDebug)("Frame destroyed"));
      });
    var o = r(n(11)),
      a = r(n(81)),
      i = n(41),
      c = n(12),
      u = n(76),
      l = n(75),
      s = n(42),
      f = 320,
      m = 110,
      d = 110,
      p = "emojicom-widget",
      h = "emojicom-widget-inline";
    function _(e, t) {
      var n =
        !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      (0, c.logDebug)("Set frame visibility:", { visible: t, animated: n });
      var r = e._emojicom.options,
        s = (0, i.usesLauncher)(r),
        f = r.launcherType;
      if (!n)
        return (e.style.display = t ? "block" : "none"), Promise.resolve(e);
      var m = "bubble" === f ? "bounce" : "slide",
        d = t ? "in" : "out",
        p = "emojicom_animation_frame_".concat(m, "_").concat(d);
      if ("slide" === m) {
        var h = (0, u.getPositionAlignParts)(r.align),
          _ = (0, o.default)(h, 2),
          g = _[0],
          b = _[1],
          y = "bottom" === g ? "y" : "x";
        s && (y = "x");
        var v = "in" === d ? "from" : "to";
        e.style.setProperty("--animation-from-x", "0px"),
          e.style.setProperty("--animation-from-y", "0px"),
          e.style.setProperty("--animation-to-x", "0px"),
          e.style.setProperty("--animation-to-y", "0px"),
          "x" === y
            ? e.style.setProperty(
                "--animation-".concat(v, "-x"),
                "".concat("left" === b ? "-" : "", "20px")
              )
            : e.style.setProperty("--animation-".concat(v, "-y"), "20px");
      }
      var w = (0, l.animationEnd)(e, p),
        x = "frame_float_".concat(d, "_").concat(m),
        E = a.default[x];
      return (
        e.classList.add(E),
        t && (e.style.display = "block"),
        w.then(function () {
          return (
            t || (e.style.display = "none"),
            (e.style.animationName = ""),
            e.classList.remove(E),
            e
          );
        })
      );
    }
    function g(e) {
      return "block" === e.style.display;
    }
  },
  function (e, t, n) {
    "use strict";
    var r = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.usesLauncher = function (e) {
        if (!e) throw new Error("campaignOptions argument is required.");
        var t = e.launcherEnabled,
          n = e.launcherType;
        if ("float" !== e.position) return !1;
        if (t && n) return !0;
        return (0, s.isTinyScreen)();
      }),
      (t.getLauncherOffsets = function (e) {
        var t = (0, u.getPositionAlignParts)(e.align),
          n = (0, o.default)(t, 2)[1],
          r = document.getElementById(f);
        if (!r) return (0, c.logDebug)("Launcher not found"), null;
        var a,
          i = r.getBoundingClientRect();
        a = "left" === n ? i.x + i.width : window.innerWidth - i.x;
        var l = i.height;
        return { x: a, y: l };
      }),
      (t.getLauncherElement = function (e) {
        !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        var t = e.align,
          n = e.launcherType,
          r = e.launcherEmoji,
          i = e.texts.launcher;
        i || (i = "Feedback");
        var s = document.getElementById(f);
        if (s) return s;
        var m = (0, u.getPositionAlignParts)(t),
          d = (0, o.default)(m, 2),
          p = d[0],
          h = d[1];
        r || i || (r = "👋");
        var _ = document.createElement("button");
        if (
          ((_.id = f),
          _.classList.add(
            a.default.launcher,
            a.default["launcher_".concat(n)],
            a.default["launcher_".concat(n, "_").concat(h)],
            a.default["launcher_".concat(n, "_").concat(p)],
            "wp-exclude-emoji"
          ),
          (_.style.transformOrigin = ""),
          "button" === n)
        ) {
          var g = "rotate(-90deg)",
            b = "";
          "left" === h &&
            ((b = "0 100%"), (g = " rotate(90deg) translateX(-100%)")),
            "right" === h &&
              ((b = "100% 100%"), (g = "rotate(-90deg) translateX(100%)")),
            (_.style.transform = g),
            (_.style.transformOrigin = b);
        }
        var y = e.themeColor || "#dadada";
        (_.style.top = ""),
          (_.style.bottom = ""),
          (_.style.left = ""),
          (_.style.right = ""),
          (_.style.backgroundColor = y),
          (_.style.color = (0, l.getTextColorBaseOnBackgroundColor)(y));
        var v = "button" === n ? "10vh" : 20,
          w = "button" === n ? -2 : 20;
        switch (p) {
          case "top":
            _.style.top = (0, u.toPixel)(v);
            break;
          case "middle":
            _.style.bottom = "50vh";
            break;
          case "bottom":
            _.style.bottom = (0, u.toPixel)(v);
            break;
          default:
            (0, c.logDebug)("Invalid align Y:", p);
        }
        switch (h) {
          case "left":
            _.style.left = (0, u.toPixel)(w);
            break;
          case "right":
            _.style.right = (0, u.toPixel)(w);
            break;
          default:
            (0, c.logDebug)("Invalid align X:", h);
        }
        if (r && "bubble" === n) {
          var x = document.createElement("span");
          x.classList.add(a.default.launcher_emoji),
            (x.innerText = r),
            _.appendChild(x);
        }
        if (i) {
          var E = document.createElement("span");
          E.classList.add(a.default.launcher_text),
            (E.innerText = i),
            _.appendChild(E);
        }
        return (
          document.body.appendChild(_),
          (0, c.logDebug)("Append launcher:", _),
          _
        );
      }),
      (t.setLauncherVisible = function (e) {
        !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        var t = document.getElementById(f);
        if (!t) return Promise.resolve();
        var n = e ? "in" : "out",
          r = (0, i.animationEnd)(t, "emojicom_animation_bubble_" + n);
        return (
          t.classList.toggle(a.default.bubble_in, e),
          t.classList.toggle(a.default.bubble_out, !e),
          r.then(function () {})
        );
      }),
      (t.isLauncherVisible = function () {
        return !!document.getElementById(f);
      }),
      (t.destroyLauncher = function () {
        var e = document.getElementById(f);
        e && (e.remove(), (0, c.logDebug)("Bubble destroyed"));
      }),
      (t.LAUNCHER_ELEMENT_ID = void 0);
    var o = r(n(11)),
      a = r(n(83)),
      i = n(75),
      c = n(12),
      u = n(76),
      l = n(27),
      s = n(42),
      f = "emojicom-trigger";
    t.LAUNCHER_ELEMENT_ID = f;
  },
  function (e, t, n) {
    "use strict";
    function r() {
      return window.innerWidth < 500;
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isTinyScreen = r),
      (t.useFullscreen = function () {
        return r();
      });
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      var t = Object.keys(e)[0];
      switch (t) {
        case "geoPointValue":
          return [e.geoPointValue.latitude, e.geoPointValue.longitude];
        case "arrayValue":
          return void 0 !== e.arrayValue.values
            ? e.arrayValue.values.map(r)
            : [];
        case "mapValue":
          return o(e.mapValue.fields);
        case "integerValue":
        case "doubleValue":
          return Number(e[t]);
        default:
          return e[t];
      }
    }
    function o(e) {
      var t = {};
      if (!e) return t;
      for (var n = Object.keys(e), o = 0, a = n.length; o < a; o++) {
        var i = n[o];
        t[i] = r(e[i]);
      }
      return t;
    }
    e.exports = { parseFirestoreFields: o };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.fetchOptionsCached = function (e) {
        var t = "".concat(r.OPTIONS_KEY_PREFIX).concat(e),
          n = sessionStorage.getItem(t);
        if (n)
          try {
            var a = JSON.parse(n);
            return Promise.resolve((0, o.fixLegacyOptions)(a));
          } catch (e) {}
        return (0, o.fetchOptions)(e).then(function (e) {
          return sessionStorage.setItem(t, JSON.stringify(e)), e;
        });
      });
    var r = n(8),
      o = n(36);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r,
      o = function () {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        );
      },
      a = (function () {
        var e = {};
        return function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        };
      })(),
      i = [];
    function c(e) {
      for (var t = -1, n = 0; n < i.length; n++)
        if (i[n].identifier === e) {
          t = n;
          break;
        }
      return t;
    }
    function u(e, t) {
      for (var n = {}, r = [], o = 0; o < e.length; o++) {
        var a = e[o],
          u = t.base ? a[0] + t.base : a[0],
          l = n[u] || 0,
          s = "".concat(u, " ").concat(l);
        n[u] = l + 1;
        var f = c(s),
          m = { css: a[1], media: a[2], sourceMap: a[3] };
        -1 !== f
          ? (i[f].references++, i[f].updater(m))
          : i.push({ identifier: s, updater: _(m, t), references: 1 }),
          r.push(s);
      }
      return r;
    }
    function l(e) {
      var t = document.createElement("style"),
        r = e.attributes || {};
      if (void 0 === r.nonce) {
        var o = n.nc;
        o && (r.nonce = o);
      }
      if (
        (Object.keys(r).forEach(function (e) {
          t.setAttribute(e, r[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var i = a(e.insert || "head");
        if (!i)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        i.appendChild(t);
      }
      return t;
    }
    var s,
      f =
        ((s = []),
        function (e, t) {
          return (s[e] = t), s.filter(Boolean).join("\n");
        });
    function m(e, t, n, r) {
      var o = n
        ? ""
        : r.media
        ? "@media ".concat(r.media, " {").concat(r.css, "}")
        : r.css;
      if (e.styleSheet) e.styleSheet.cssText = f(t, o);
      else {
        var a = document.createTextNode(o),
          i = e.childNodes;
        i[t] && e.removeChild(i[t]),
          i.length ? e.insertBefore(a, i[t]) : e.appendChild(a);
      }
    }
    function d(e, t, n) {
      var r = n.css,
        o = n.media,
        a = n.sourceMap;
      if (
        (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
        a &&
          "undefined" != typeof btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = r;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(r));
      }
    }
    var p = null,
      h = 0;
    function _(e, t) {
      var n, r, o;
      if (t.singleton) {
        var a = h++;
        (n = p || (p = l(t))),
          (r = m.bind(null, n, a, !1)),
          (o = m.bind(null, n, a, !0));
      } else
        (n = l(t)),
          (r = d.bind(null, n, t)),
          (o = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          });
      return (
        r(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            r((e = t));
          } else o();
        }
      );
    }
    e.exports = function (e, t) {
      (t = t || {}).singleton ||
        "boolean" == typeof t.singleton ||
        (t.singleton = o());
      var n = u((e = e || []), t);
      return function (e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var r = 0; r < n.length; r++) {
            var o = c(n[r]);
            i[o].references--;
          }
          for (var a = u(e, t), l = 0; l < n.length; l++) {
            var s = c(n[l]);
            0 === i[s].references && (i[s].updater(), i.splice(s, 1));
          }
          n = a;
        }
      };
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.animationEnd = function (e, t) {
        return new Promise(function (n) {
          var r = setTimeout(function () {
            console.warn('Animation "'.concat(t, '" never ended.'));
          }, 5e3);
          e.addEventListener("animationend", function o(a) {
            a.animationName === t &&
              (clearTimeout(r), e.removeEventListener("animationend", o), n(e));
          });
        });
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getPositionAlignParts = function (e) {
        var t = e.split("-");
        if (1 === t.length) return ["bottom", e];
        return t;
      }),
      (t.toPixel = function (e) {
        return "number" == typeof e ? "".concat(e, "px") : e;
      });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isFirstPageLoad = function (e) {
        return !localStorage.getItem(
          "".concat(a.FIRST_PAGE_LOAD_KEY_PREFIX).concat(e)
        );
      }),
      (t.setFirstPageLoad = function (e) {
        localStorage.setItem(
          "".concat(a.FIRST_PAGE_LOAD_KEY_PREFIX).concat(e),
          Date.now().toString()
        );
      }),
      (t.setHasSentFeedback = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "*",
          n = "".concat(a.SENT_KEY_PREFIX).concat(e),
          r = [];
        if (localStorage.getItem(n))
          try {
            var i = JSON.parse(localStorage.getItem(n));
            r = Array.isArray(i.urls) ? i.urls : [];
          } catch (e) {
            console.error(e);
          }
        var u = {
          time: Date.now(),
          urls: [].concat((0, o.default)(r), [t]).filter(c),
        };
        localStorage.setItem(n, JSON.stringify(u));
      }),
      (t.clearSentState = l),
      (t.hasSentFeedback = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "*",
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i,
          r = localStorage.getItem("".concat(a.SENT_KEY_PREFIX).concat(e));
        if (!r) return !1;
        var o = JSON.parse(r),
          c = Array.isArray(o.urls) ? o.urls : [];
        if (u(parseInt(o.time), n)) return l(e), !1;
        return c.includes(t);
      }),
      (t.setWidgetWasClosed = function (e) {
        localStorage.setItem(
          "".concat(a.CLOSED_KEY_PREFIX).concat(e),
          Date.now()
        );
      }),
      (t.widgetWasClosed = function (e) {
        var t = localStorage.getItem("".concat(a.CLOSED_KEY_PREFIX).concat(e));
        return !!t && !u(parseInt(t), i);
      });
    var o = r(n(23)),
      a = n(8),
      i = 20160;
    function c(e, t, n) {
      return n.indexOf(e) === t;
    }
    function u(e, t) {
      if (!e) return !0;
      var n = Date.now();
      return Math.floor((n - e) / 1e3 / 60) >= t;
    }
    function l(e) {
      localStorage.removeItem("".concat(a.SENT_KEY_PREFIX).concat(e));
    }
  },
  function (e, t, n) {
    "use strict";
    var r = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var o = r(n(34)),
      a = r(n(15)),
      i = r(n(11)),
      c = r(n(9)),
      u = r(n(35)),
      l = n(8),
      s = n(12),
      f = n(42),
      m = n(36),
      d = n(44),
      p = n(41),
      h = n(77),
      _ = r(n(86)),
      g = n(40),
      b = n(79);
    function y(e, t) {
      var n = 0,
        r = 0,
        o = 0,
        a = 22,
        i = 22;
      if ((0, p.usesLauncher)(t) && (0, p.isLauncherVisible)()) {
        var c = t.launcherType,
          u = (0, p.getLauncherOffsets)(t).x;
        (i = u),
          (a = u),
          "button" === c &&
            ((n = "calc(10vh)"),
            (r = "calc(50vh - 29px)"),
            (o = "calc(10vh - 29px)")),
          "bubble" === c &&
            ((i = a = 60),
            (n = "calc(10vh)"),
            (r = "calc(50vh + 25px)"),
            (o = "calc(10vh - 52px)"));
      }
      (0, g.setFramePosition)(e, {
        position: t.position,
        align: t.align,
        topOffset: n,
        bottomOffset: o,
        middleOffset: r,
        leftOffset: i,
        rightOffset: a,
      });
    }
    function v(e) {
      var t = e.campaignId,
        n = e.frame,
        r = e.options,
        o = e.context,
        a = e.forceShow,
        i = void 0 !== a && a,
        c = e.animated,
        u = void 0 !== c && c;
      (0, s.logDebug)("Maybe show widget triggered");
      var l = r.triggerMode,
        f = void 0 === l ? "onload" : l,
        m = !1;
      if ((0, g.isFrameVisible)(n)) return !1;
      var d = (0, p.usesLauncher)(r);
      if (d && (0, p.isLauncherVisible)()) return !1;
      if (i || "float" !== r.position || !(0, h.hasSentFeedback)(t)) {
        if (i)
          (0, s.logDebug)("Show widget: Force show enabled, so show widget"),
            (m = !0);
        else {
          var b = (0, h.widgetWasClosed)(t);
          (0, s.logDebug)("Show widget: No, widget was closed by user"),
            b || (m = _.default[f]({ campaignId: t, options: r, context: o }));
        }
        if (((0, s.logDebug)("Show widget:", m), m)) {
          if (((0, s.logDebug)("Uses launcher:", d), d))
            (0, p.getLauncherElement)(r).addEventListener("click", function () {
              (0, g.toggleFrameVisible)(n);
            });
          if ((y(n, r), d)) return !0;
          switch (r.position) {
            case "inline":
              n.style.display = "block";
              break;
            case "float":
              n.__frameLoaded.then(function () {
                setTimeout(function () {
                  (0, g.setFrameVisible)(n, !0, u);
                }, 250);
              });
          }
        }
        return m;
      }
      (0, s.logDebug)("Campaign has already sent feedback, so don't show");
    }
    function w() {
      return (w = (0, u.default)(
        o.default.mark(function e(t) {
          var n,
            r,
            u,
            p,
            _,
            w,
            x,
            E,
            O,
            j,
            P,
            S,
            I,
            F,
            L,
            k,
            A,
            R,
            T,
            D,
            C,
            M,
            N,
            X,
            V,
            Y,
            B,
            G,
            K,
            U,
            W,
            H,
            J,
            q,
            z,
            $,
            Z,
            Q;
          return o.default.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = t.campaign),
                      (r = t.campaignId),
                      (u = t.target),
                      (p = t.cache),
                      (_ = void 0 === p || p),
                      (w = t.canClose),
                      (x = void 0 === w || w),
                      (E = t.show),
                      (O = void 0 === E || E),
                      (j = t.preview),
                      (P = void 0 !== j && j),
                      (S = t.clientRef),
                      (I = void 0 === S ? null : S),
                      (F = t.overrideOptions),
                      (L = void 0 === F ? null : F),
                      (k = t.onSubmit),
                      (A = t.onClose),
                      (r = r || n),
                      P || (r && "string" == typeof r))
                    ) {
                      e.next = 4;
                      break;
                    }
                    throw new Error(l.LOG_PREFIX + " Invalid campaign: " + n);
                  case 4:
                    if (!r) {
                      e.next = 9;
                      break;
                    }
                    if (!(0, g.getFrameByCampaignId)(r)) {
                      e.next = 9;
                      break;
                    }
                    return (
                      (0, s.logDebug)(
                        "Widget frame already exists for campaign:",
                        r
                      ),
                      e.abrupt("return")
                    );
                  case 9:
                    return (
                      P && (0, s.logDebug)("Preview mode"),
                      (R = P
                        ? function () {
                            return Promise.resolve({ position: "float" });
                          }
                        : function () {
                            return _
                              ? (0, d.fetchOptionsCached)(r)
                              : (0, m.fetchOptions)(r);
                          }),
                      (e.prev = 11),
                      (e.next = 14),
                      R()
                    );
                  case 14:
                    (T = e.sent),
                      (0, s.logDebug)("Campaign options loaded:", T),
                      (e.next = 21);
                    break;
                  case 18:
                    return (
                      (e.prev = 18),
                      (e.t0 = e.catch(11)),
                      e.abrupt("return", Promise.reject(e.t0))
                    );
                  case 21:
                    if (!L) {
                      e.next = 33;
                      break;
                    }
                    L.texts &&
                      (T.texts = (0, c.default)({}, T.texts, {}, L.texts)),
                      (D = 0),
                      (C = Object.entries(L));
                  case 24:
                    if (!(D < C.length)) {
                      e.next = 33;
                      break;
                    }
                    if (
                      ((M = (0, i.default)(C[D], 2)),
                      (N = M[0]),
                      (X = M[1]),
                      "object" !== (0, a.default)(X))
                    ) {
                      e.next = 28;
                      break;
                    }
                    return e.abrupt("continue", 30);
                  case 28:
                    (0, s.logDebug)("Override option:", N, "=", X), (T[N] = X);
                  case 30:
                    D++, (e.next = 24);
                    break;
                  case 33:
                    return (
                      (0, f.isTinyScreen)() &&
                        "float" === T.postion &&
                        ((T.launcherType = T.launcherType || "button"),
                        (T.texts.launcher = T.texts.launcher || "Feedback")),
                      (V = (0, g.initFrame)({
                        campaignId: r,
                        position: T.position,
                        align: T.align,
                        target: u,
                      })),
                      (Y = V.frame),
                      (B = V.frameLoaded),
                      (G = V.frameReady),
                      (Y._emojicom = {
                        campaign: n,
                        preview: P,
                        options: T,
                        onClose: A,
                        onSubmit: k,
                        show: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            t = e.animated,
                            n = void 0 !== t && t;
                          return (0, g.setFrameVisible)(Y, !0, n);
                        },
                        hide: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            t = e.animated,
                            n = void 0 !== t && t;
                          return (0, g.setFrameVisible)(Y, !1, n);
                        },
                        close: function () {
                          return (0, g.setFrameVisible)(Y, !1, !0).then(
                            function () {
                              (0, g.destroyFrame)(Y);
                            }
                          );
                        },
                        destroy: function () {
                          return (0, g.destroyFrame)(Y);
                        },
                      }),
                      B.then(function (e) {
                        (0, s.logDebug)("Frame loaded:", e);
                      }),
                      G.then(function (e) {
                        (0, s.logDebug)("Frame ready:", e);
                      }),
                      (K = window),
                      (U = K.location),
                      (W = K.innerWidth),
                      P ||
                        ((H = (0, b.getCanonical)() || (0, b.getHref)()),
                        (J = {
                          href: H,
                          ref: document.referrer,
                          pathname: U.pathname,
                          screenWidth: W,
                          debug: (0, s.isDebug)(),
                          ctx: (0, b.getCtx)(),
                          clientRef: I,
                        }),
                        (q = (0, h.isFirstPageLoad)(r)) &&
                          ((0, h.setFirstPageLoad)(r),
                          (0, s.logDebug)("First page load")),
                        (z = "always" === O),
                        B.then(function () {
                          y(Y, T);
                          v({
                            campaignId: r,
                            frame: Y,
                            options: T,
                            context: J,
                            forceShow: z,
                            animated: q,
                          });
                        }),
                        ($ = setInterval(function () {
                          v({
                            campaignId: r,
                            frame: Y,
                            options: T,
                            context: J,
                            animated: !0,
                          }) && clearInterval($);
                        }, 61e3)),
                        "number" == typeof T.sentExpires && (Z = T.sentExpires),
                        "number" == typeof T.rateInterval &&
                          (Z = T.rateInterval),
                        (Q = (0, h.hasSentFeedback)(
                          r,
                          "float" === T.position ? "*" : H,
                          Z
                        )),
                        T.launcherType,
                        B.then(function (e) {
                          (0,
                          g.sendFramePayload)(e, "init", { campaignId: r, options: T, didRate: Q, config: { canClose: x }, href: J.href, screenWidth: J.screenWidth, debug: J.debug, context: J.ctx, clientRef: J.clientRef });
                        })),
                      e.abrupt(
                        "return",
                        B.then(function (e) {
                          return {
                            frame: Y,
                            show: function () {
                              (0, g.setFrameVisible)(e, !0, !1);
                            },
                            hide: function () {
                              (0, g.setFrameVisible)(e, !1, !1);
                            },
                            close: function () {
                              return (0, g.setFrameVisible)(e, !1, !0).then(
                                function () {
                                  (0, g.destroyFrame)(e);
                                }
                              );
                            },
                            destroy: function () {
                              (0, g.destroyFrame)(e);
                            },
                            __init: function (t) {
                              var n = t.options,
                                r = n.position,
                                o = n.align;
                              (0, g.setFramePosition)(e, {
                                position: r,
                                align: o,
                              }),
                                (0, g.sendFramePayload)(e, "init", t);
                            },
                            __dispatch: function (t) {
                              var n =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : {};
                              (0, g.sendFramePayload)(e, t, n);
                            },
                          };
                        })
                      )
                    );
                  case 41:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[11, 18]]
          );
        })
      )).apply(this, arguments);
    }
    var x = {
      createWidget: function (e) {
        return w.apply(this, arguments);
      },
    };
    t.default = x;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getCanonical = function () {
        var e = document.querySelector("link[rel='canonical']");
        if (e && e.href) return e.href;
        var t = document.querySelector("meta[property='og:url']");
        return t && t.content ? t.content : null;
      }),
      (t.getHref = function () {
        if ("medium.com" === location.hostname)
          return location.href.split("#")[0];
        return "".concat(location.origin).concat(location.pathname);
      }),
      (t.getCtx = function () {
        return new URLSearchParams(location.search).get("ctx");
      });
  },
  function (e, t, n) {
    "use strict";
    var r,
      o = n(1),
      a = o(n(15)),
      i = o(n(11)),
      c = o(n(9)),
      u = o(n(34)),
      l = o(n(35)),
      s = n(8),
      f = n(12),
      m = n(40),
      d = n(41),
      p = n(85),
      h = n(77),
      _ = o(n(78)),
      g = n(79),
      b = n(87),
      y = "https://cdn.emojicom.io/embed",
      v = document.currentScript;
    v &&
      v.src &&
      ((r = v.getAttribute("data-campaign")),
      (y = v.src.substring(0, v.src.lastIndexOf("/"))),
      (r = v.getAttribute("data-campaign"))),
      (window.EMOJICOM_BASE_PATH = y),
      (0, p.preloadResources)();
    var w,
      x,
      E = {
        set_size: function (e) {
          var t = e.frame,
            n = e.width,
            r = e.height,
            o = e.animated,
            a = void 0 !== o && o,
            i = r > parseInt(t.style.height);
          (t.style.transition = a
            ? "height ".concat(i ? 100 : 200, "ms ").concat(i ? 0 : 100, "ms")
            : ""),
            n && (t.style.width = n + "px"),
            r && (t.style.height = r + "px");
        },
        set_position: function (e) {
          var t = e.frame,
            n = e.position,
            r = e.align;
          (0, m.setFramePosition)(t, { position: n, align: r });
        },
        will_close:
          ((x = (0, l.default)(
            u.default.mark(function e(t) {
              var n, r, o, a, i, c;
              return u.default.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = t.frame),
                        (0, f.logDebug)("Event: will_close"),
                        (r = n._emojicom),
                        (o = r.campaign),
                        (a = r.preview),
                        (i = r.options),
                        (c = r.onClose),
                        !(
                          a ||
                          ("function" == typeof c && !1 === c({ type: "USER" }))
                        ))
                      ) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt("return");
                    case 5:
                      return (
                        i.launcherEnabled || (0, h.setWidgetWasClosed)(o),
                        e.abrupt("return", (0, m.setFrameVisible)(n, !1))
                      );
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          function (e) {
            return x.apply(this, arguments);
          }),
        will_submit: function (e) {
          var t = e.frame._emojicom,
            n = t.campaign,
            r = t.preview,
            o = t.options;
          if (!r) {
            var a = (0, g.getCanonical)() || (0, g.getHref)();
            (0, h.setHasSentFeedback)(n, "float" === o.position ? "*" : a);
          }
        },
        select_rating: function (e) {
          var t = e.frame,
            n = e.rating,
            r = t._emojicom.campaign;
          t.__rating = n;
          var o = new CustomEvent("emojicom:didSelectRating", {
            detail: { rating: n, campaignId: r },
          });
          t.dispatchEvent(o);
        },
        did_submit:
          ((w = (0, l.default)(
            u.default.mark(function e(t) {
              var n, r, o, a, i, c;
              return u.default.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = t.frame),
                        (r = t.answer),
                        (o = n._emojicom),
                        (a = o.onClose),
                        (i = o.onSubmit),
                        (c = o.options),
                        (n.__sent = !0),
                        "function" == typeof i && i({ answer: r }),
                        "float" !== c.position)
                      ) {
                        e.next = 8;
                        break;
                      }
                      if (
                        "function" != typeof a ||
                        !1 !== a({ type: "SUBMIT" })
                      ) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt("return");
                    case 7:
                      return e.abrupt(
                        "return",
                        (0, m.setFrameVisible)(n, !1).then(function () {
                          if (((0, m.destroyFrame)(n), (0, d.usesLauncher)(c)))
                            return new Promise(function (e) {
                              setTimeout(e, 100);
                            }).then(function () {
                              return (0, d.setLauncherVisible)(!1).then(
                                d.destroyLauncher
                              );
                            });
                        })
                      );
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          function (e) {
            return w.apply(this, arguments);
          }),
        widget_did_mount: function (e) {
          var t = e.frame;
          (0, f.logDebug)("Widget did mount"), t.__setFrameReady();
        },
      };
    function O() {
      return (O = (0, l.default)(
        u.default.mark(function e() {
          var t, n, o, c, l, d, p;
          return u.default.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((t = location),
                    (n = t.href),
                    (o = function (e) {
                      Array.isArray(e) ||
                        (0, f.logDebug)("Invalid API action arguments:", e);
                      var t = (0, i.default)(e, 2),
                        n = t[0],
                        r = t[1];
                      b.API_ACTIONS.hasOwnProperty(n)
                        ? ((0, f.logDebug)(
                            'Run API action "'.concat(n, '" with payload:'),
                            null != r ? r : {}
                          ),
                          b.API_ACTIONS[n](r))
                        : (0, f.logDebug)("Invalid API action:", n);
                    }),
                    Array.isArray(window.$emojicom)
                      ? ((0, f.logDebug)("Enable Array API mode"),
                        window.$emojicom.map(o))
                      : (window.$emojicom = []),
                    (window.$emojicom.push = function (e) {
                      o(e);
                    }),
                    window.emojicom
                      ? ((0, f.logDebug)("Enable function API mode"),
                        "function" == typeof window.emojicom &&
                          window.emojicom(_.default))
                      : (window.emojicom = function () {
                          return _.default;
                        }),
                    (c = window.emojicom_widget || window.EMOJICOM_WIDGET),
                    !r && "object" !== (0, a.default)(c))
                  ) {
                    e.next = 16;
                    break;
                  }
                  if (((l = r), c.campaign && (l = c.campaign), l)) {
                    e.next = 12;
                    break;
                  }
                  return (
                    console.error(s.LOG_PREFIX, "Missing campaign"),
                    e.abrupt("return")
                  );
                case 12:
                  (0, f.logDebug)("Embed code mode"),
                    (d = n.indexOf("emojicom-nocache") > 0) &&
                      (0, f.logDebug)("Skipping cache"),
                    _.default
                      .createWidget({
                        campaign: l,
                        cache: !d,
                        clientRef: c.clientRef,
                        overrideOptions: c.overrideOptions || null,
                        onSubmit: null == c ? void 0 : c.onSubmit,
                        onClose: null == c ? void 0 : c.onClose,
                      })
                      .then(function (e) {
                        (c.widget = e),
                          window.addEventListener("beforeunload", function (e) {
                            (0, m.getFrames)().forEach(function (e) {
                              if ("number" == typeof e.__rating && !e.__sent) {
                                var t = e._emojicom,
                                  n = t.campaign,
                                  r = t.options,
                                  o = (0, g.getCanonical)() || (0, g.getHref)(),
                                  a = {
                                    cid: n,
                                    r: e.__rating,
                                    src: o,
                                    ctx: "widget/unload",
                                  },
                                  i = new Blob([JSON.stringify(a)], {
                                    type: "text/plain",
                                  });
                                navigator.sendBeacon(s.RATE_URL, i),
                                  (0, h.setHasSentFeedback)(
                                    n,
                                    "float" === r.position ? "*" : o
                                  );
                              }
                            });
                          });
                      })
                      .catch(function (e) {
                        console.error(
                          s.LOG_PREFIX,
                          "Creation of the widget failed:\n",
                          e
                        );
                      });
                case 16:
                  n.indexOf("__emojicom-widget-verify__") > 0 &&
                    ((p = {
                      action: "verify_callback",
                      campaign_id: "",
                      verified: !0,
                    }),
                    window.opener.postMessage(JSON.stringify(p), "*"),
                    setTimeout(function () {
                      window.close();
                    }, 200));
                case 17:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    window.addEventListener("message", function (e) {
      var t;
      try {
        t = JSON.parse(e.data);
      } catch (e) {
        return;
      }
      if (t.action && t.payload && E.hasOwnProperty(t.action)) {
        var n = (0, m.getFrames)().find(function (t) {
          return t.contentWindow === e.source;
        });
        n
          ? E[t.action]((0, c.default)({}, t.payload, { frame: n }))
          : console.error(s.LOG_PREFIX, "Widget frame not found:", e);
      }
    }),
      (function () {
        O.apply(this, arguments);
      })();
  },
  function (e, t, n) {
    var r = n(74),
      o = n(82);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[e.i, o, ""]]);
    var a = { insert: "head", singleton: !1 };
    r(o, a);
    e.exports = o.locals || {};
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(37),
      o = n.n(r)()(!1);
    o.push([
      e.i,
      "\n/* animation-timing-function: cubic-bezier(.23, 1, .32, 1); */\n/* animation-timing-function: cubic-bezier(0.600, 0.040, 0.980, 0.335); */\n\n.frame_frame__1TrAq {\n  max-width: 600px;\n  margin: 0 auto;\n  animation-fill-mode: forwards;\n  z-index: 2147483647;\n  /* transition-timing-function: ease-in; */\n}\n  .frame_frame_float_in_bounce__36KRq {\n    animation-duration: 450ms;\n    animation-fill-mode: ease-in;\n    animation-name: emojicom_animation_frame_bounce_in;\n  }\n\n  .frame_frame_float_out_bounce__3045d {\n    animation-duration: 300ms;\n    animation-fill-mode: ease-in;\n    animation-name: emojicom_animation_frame_bounce_out;\n  }\n\n  .frame_frame_float_in_slide__ctT8f {\n    animation: 750ms cubic-bezier(0.43, -0.165, 0.265, 1.55);\n    animation-name: emojicom_animation_frame_slide_in;\n  }\n\n  /*\n    animation: 400ms emojicom_animation_frame_slide_out forwards;\n  */\n  .frame_frame_float_out_slide__1LKg4 {\n    animation: 300ms cubic-bezier(0.430, -0.165, 0.265, 1.550);\n    animation-name: emojicom_animation_frame_slide_out;\n  }\n\n\n  .frame_frame_float__Hcslk {\n    opacity: 0;\n    pointer-events: none;\n  }\n\n  .frame_frame_inline__XiZlR {\n  }\n\n\n@keyframes emojicom_animation_frame_bounce_in {\n  0% {\n    opacity: 0;\n    transform: scale(0, 0);\n  }\n  50% {\n    transform: scale(1.04, 1.04);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1, 1);\n    pointer-events: auto;\n  }\n}\n\n@keyframes emojicom_animation_frame_bounce_out {\n  0% {\n    opacity: 1;\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0, 0);\n  }\n}\n\n@keyframes emojicom_animation_frame_slide_in {\n  0% {\n    opacity: 0;\n    transform: translateX(var(--animation-from-x)) translateY(var(--animation-from-y));\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n@keyframes emojicom_animation_frame_slide_out {\n  0% {\n    opacity: 1;\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    /* transform: translateY(50px); */\n    transform: translateX(var(--animation-to-x)) translateY(var(--animation-to-y));\n  }\n}\n",
      "",
    ]),
      (o.locals = {
        frame: "frame_frame__1TrAq",
        frame_float_in_bounce: "frame_frame_float_in_bounce__36KRq",
        emojicom_animation_frame_bounce_in:
          "emojicom_animation_frame_bounce_in",
        frame_float_out_bounce: "frame_frame_float_out_bounce__3045d",
        emojicom_animation_frame_bounce_out:
          "emojicom_animation_frame_bounce_out",
        frame_float_in_slide: "frame_frame_float_in_slide__ctT8f",
        emojicom_animation_frame_slide_in: "emojicom_animation_frame_slide_in",
        frame_float_out_slide: "frame_frame_float_out_slide__1LKg4",
        emojicom_animation_frame_slide_out:
          "emojicom_animation_frame_slide_out",
        frame_float: "frame_frame_float__Hcslk",
        frame_inline: "frame_frame_inline__XiZlR",
      }),
      (t.default = o);
  },
  function (e, t, n) {
    var r = n(74),
      o = n(84);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[e.i, o, ""]]);
    var a = { insert: "head", singleton: !1 };
    r(o, a);
    e.exports = o.locals || {};
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(37),
      o = n.n(r)()(!1);
    o.push([
      e.i,
      "\n.launcher_launcher__240V9 {\n  all: initial;\n  /* display: none; */\n  font: 400 14px/1.25 system-ui, sans-serif;\n  position: fixed;\n  cursor: pointer;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  padding: 6px 12px;\n  background: #dde0ee;\n  color: #000000;\n  height: 32px;\n  transition: 150ms ease-out;\n  z-index: 2147483646;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  -webkit-appearance: none;\n  appearance: none;\n  -webkit-tap-highlight-color: transparent; /* for removing the highlight */\n}\n\n.launcher_launcher_emoji__24SeF {}\n\n.launcher_launcher_text__YdqFB {}\n\n.launcher_launcher_button__1m5gR {\n}\n  .launcher_launcher_button__1m5gR:hover {}\n\n  /*\n  .launcher_button_left {\n    transform: rotate(90deg); /* translateX(50%);* /\n  }\n  .launcher_button_left.launcher_button_top {\n    transform: rotate(90deg) translateX(50%);\n  }\n\n\n  .launcher_button_right {\n    transform: rotate(-90deg);\n  }\n  .launcher_button_right.launcher_button_top {\n    transform: rotate(-90deg) translateX(-50%);\n  }\n  */\n\n    .launcher_launcher_button_left__1K-zf:hover {\n      left: 0 !important;\n    }\n    .launcher_launcher_button_right__3BX_Z:hover {\n      right: 0 !important;\n    }\n\n    /* .launcher_button .launcher_emoji {\n      margin-right: 6px;\n      transform: rotate(90deg);\n    } */\n\n\n.launcher_launcher_bubble__3AV8r {\n  display: flex;\n  text-align: center;\n  align-content: center;\n  justify-content: center;\n  transition: all 150ms ease-out;\n  background-color: #fff;\n  background-image: linear-gradient(315deg, #efefef 0%, #fff 75%);\n  box-shadow:\n    0 0 10px 1px rgba(0, 0, 0, 0.08),\n    2px 2px 5px rgba(0, 0, 0, 0.1);\n  transition-timing-function: ease-in;\n  /* animation-fill-mode: forwards; */\n  animation-name: emojicom_animation_bubble_in;\n  transform-origin: center;\n  -webkit-tap-highlight-color: transparent;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  box-sizing: border-box;\n}\n  .launcher_launcher_bubble__3AV8r:hover {\n    transform: scale(1.1);\n  }\n\n  .launcher_launcher_bubble__3AV8r:active {\n    transform: scale(1.05);\n  }\n\n  .launcher_launcher_bubble_left__oHPOb {}\n  .launcher_launcher_bubble_right__IY9wG {}\n\n  .launcher_launcher_bubble__3AV8r .launcher_launcher_emoji__24SeF {\n    font-size: 30px;\n  }\n\n  .launcher_launcher_bubble__3AV8r .launcher_launcher_text__YdqFB {\n    display: none;\n  }\n\n  /* .bubble_align_left { left: 20px; }\n  .bubble_align_right { right: 20px; } */\n\n  .launcher_bubble_in__vtd-u {\n    animation-duration: 400ms;\n    animation-name: emojicom_animation_bubble_in;\n  }\n\n  .launcher_bubble_out__2m2js {\n    animation-duration: 250ms;\n    animation-fill-mode: forwards;\n    animation-name: emojicom_animation_bubble_out;\n  }\n\n@keyframes emojicom_animation_bubble_in {\n  0% {\n    display: block;\n    opacity: 0;\n    transform: scale(0, 0);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.04, 1.04);\n  }\n  100% {\n    opacity: 1;\n    /* transform: scale(1, 1); */\n\n  }\n}\n\n@keyframes emojicom_animation_bubble_out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0, 0);\n    display: block;\n  }\n}\n\n/*\n@keyframes emojicom_bubble_out {\n  0% {\n    opacity: 0;\n    transform: scale(0, 0);\n  }\n  50% {\n    transform: scale(1.04, 1.04);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1, 1);\n    pointer-events: auto;\n  }\n} */\n",
      "",
    ]),
      (o.locals = {
        launcher: "launcher_launcher__240V9",
        launcher_emoji: "launcher_launcher_emoji__24SeF",
        launcher_text: "launcher_launcher_text__YdqFB",
        launcher_button: "launcher_launcher_button__1m5gR",
        launcher_button_left: "launcher_launcher_button_left__1K-zf",
        launcher_button_right: "launcher_launcher_button_right__3BX_Z",
        launcher_bubble: "launcher_launcher_bubble__3AV8r",
        emojicom_animation_bubble_in: "emojicom_animation_bubble_in",
        launcher_bubble_left: "launcher_launcher_bubble_left__oHPOb",
        launcher_bubble_right: "launcher_launcher_bubble_right__IY9wG",
        bubble_in: "launcher_bubble_in__vtd-u",
        bubble_out: "launcher_bubble_out__2m2js",
        emojicom_animation_bubble_out: "emojicom_animation_bubble_out",
      }),
      (t.default = o);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.preloadResources = function () {
        r.forEach(function (e) {
          var t = document.createElement("link");
          (t.href = e), (t.rel = "preconnect"), document.head.appendChild(t);
        }),
          o.forEach(function (e) {
            var t = document.createElement("link");
            (t.href = e), (t.rel = "prefetch"), document.head.appendChild(t);
          });
      });
    var r = [
        "https://firestore.googleapis.com",
        "https://cdn.emojicom.io",
        "https://us-central1-emojicom-io.cloudfunctions.net",
      ],
      o = ["https://cdn.emojicom.io/embed/index.html"];
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var r = n(8),
      o = n(12),
      a = {
        onload: function () {
          return !0;
        },
        manual: function () {
          return !1;
        },
        magic: function (e) {
          var t = e.campaignId,
            n = e.options,
            a = (e.context, parseInt(n.triggerValue) || 2),
            i = "".concat(r.SESSION_PREFIX).concat(t),
            c = parseInt(sessionStorage.getItem(i));
          if (isNaN(c)) {
            var u = +new Date();
            sessionStorage.setItem(i, u), (c = u);
          }
          var l = Date.now(),
            s = Math.floor((l - c) / 1e3 / 60);
          return a <= s
            ? ((0, o.logDebug)("Delay trigger: Show:", !0, {
                showAfterMinutes: a,
                minutesSinceStarted: s,
              }),
              !0)
            : ((0, o.logDebug)("Delay trigger: Show:", !1, {
                showAfterMinutes: a,
                minutesSinceStarted: s,
              }),
              !1);
        },
        page: function (e) {
          var t = e.options,
            n = e.context,
            a = t.triggerValue;
          if (!a) return (0, o.logDebug)("No trigger value provided"), !1;
          var i,
            c = a
              .replace(/\*/g, "STARMATCHER")
              .replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
              .replace(/STARMATCHER/g, ".+")
              .split(";"),
            u = 1 === c.length ? c[0] : "[".concat(c.join("|"), "]");
          try {
            i = new RegExp(u, "i");
          } catch (e) {
            return (
              console.error(
                r.LOG_PREFIX,
                "Error while creating page trigger:",
                e
              ),
              !0
            );
          }
          return i.test(n.href);
        },
      };
    t.default = a;
  },
  function (e, t, n) {
    "use strict";
    var r = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.API_ACTIONS = void 0);
    var o = r(n(78)),
      a = n(40),
      i = n(12);
    function c(e) {
      if (e && !(0, a.getFrameByCampaignId)(e))
        return (
          (0, i.logDebug)(
            'Frame with campaign id: "'.concat(e, '" was not found')
          ),
          null
        );
      var t = (0, a.getFrames)();
      if (0 !== t.length)
        return 1 === t.length
          ? t[0]
          : void (
              0 === t.length &&
              (0, i.logDebug)(
                'Multiple frames found. Please provide "campaignId" to match a specific widget.'
              )
            );
      (0, i.logDebug)("No frames found");
    }
    var u = function (e) {
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.campaignId,
            r = c(n);
          if (r) {
            if (r._emojicom.hasOwnProperty(e)) return r._emojicom[e](t);
            (0, i.logDebug)("Invalid frame method:", e);
          }
        };
      },
      l = {
        create: function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          o.default.createWidget(e);
        },
        show: u("show"),
        hide: u("hide"),
        close: u("close"),
        destroy: u("destroy"),
      };
    t.API_ACTIONS = l;
  },
]);
