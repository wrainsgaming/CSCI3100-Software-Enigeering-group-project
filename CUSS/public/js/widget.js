!function () {
    "use strict";
    var t,
        e = function (t, r) {
            return (e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                }
                || function (t, e) {
                    for (var r in e)
                        e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, r)
        };
    var r = 32;
    var i = ((t = {})["color-brand"] = "#2196f3", t["color-gull-gray"] = "#9db2bd", t["color-scooter"] = "#38acdb", t["color-curious-blue"] = "#299dcd", t);
    var n = document.createElement("a");
    function o(t) {
        n.href = t,
        n.host || (n.href = n.href);
        var e = n.host;
        n.pathname;
        return "http:" === n.protocol && (e = e.replace(/:80$/, "")),
        "https:" === n.protocol && (e = e.replace(/:443$/, "")), {
            host: e,
            pathname: ("/" === n.pathname[0] ? "" : "/") + n.pathname,
            href: n.href
        }
    }
    var a,
        s,
        c = {
            events: {
                width: 510,
                height: 600,
                isTransparent: !1,
                hideImportanceIndicator: !1,
                autosize: !1
            },
            hotlists: {
                width: 400,
                height: 600,
                isTransparent: !1,
                dateRange: "12m"
            },
            screener: {
                width: 1100,
                height: 512,
                defaultColumn: "overview",
                defaultScreen: "general",
                market: "forex",
                showToolbar: !0,
                isTransparent: !1
            },
            tickers: {
                isTransparent: !1
            },
            financials: {
                width: 480,
                height: 830,
                autosize: !1,
                symbol: "NASDAQ:AAPL",
                isTransparent: !1,
                displayMode: "regular",
                largeChartUrl: ""
            },
            "crypto-mkt-screener": {
                width: 1e3,
                height: 490,
                defaultColumn: "overview",
                market: "crypto",
                screener_type: "crypto_mkt",
                displayCurrency: "USD",
                isTransparent: !1
            },
            "forex-cross-rates": {
                width: 770,
                height: 400,
                isTransparent: !1,
                currencies: ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD", "CNY"],
                frameElementId: null,
                autosize: !1
            },
            "forex-heat-map": {
                width: 770,
                height: 400,
                isTransparent: !1,
                currencies: ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD", "CNY"],
                frameElementId: null,
                autosize: !1
            },
            "market-overview": {
                width: 400,
                height: 650,
                isTransparent: !1,
                dateRange: "12m"
            },
            "market-quotes": {
                width: 770,
                height: 450,
                isTransparent: !1
            },
            "mini-symbol-overview": {
                width: 350,
                height: 220,
                symbol: "FX:EURUSD",
                dateRange: "12m",
                trendLineColor: "#37a6ef",
                underLineColor: "#e3f2fd",
                isTransparent: !1,
                autosize: !1,
                largeChartUrl: ""
            },
            "single-quote": {
                width: 350,
                symbol: "FX:EURUSD",
                isTransparent: !1
            },
            "symbol-profile": {
                width: 480,
                height: 650,
                symbol: "NASDAQ:AAPL",
                isTransparent: !1
            },
            "symbol-info": {
                width: 1e3,
                symbol: "NASDAQ:AAPL",
                isTransparent: !1
            },
            "technical-analysis": {
                interval: "1m",
                width: 425,
                isTransparent: !1,
                height: 450,
                symbol: "NASDAQ:AAPL",
                showIntervalTabs: !0
            },
            "ticker-tape": {
                isTransparent: !1,
                displayMode: "adaptive"
            }
        };
    !function (t) {
        !function (t) {
            t.SetSymbol = "set-symbol",
                t.SetInterval = "set-interval"
        }
        (t.Names || (t.Names = {}))
    }
    (a || (a = {})),
        function (t) {
            !function (t) {
                t.SymbolClick = "tv-widget-symbol-click",
                    t.WidgetLoad = "tv-widget-load",
                    t.ResizeIframe = "tv-widget-resize-iframe",
                    t.NoData = "tv-widget-no-data"
            }
            (t.Names || (t.Names = {}))
        }
        (s || (s = {}));
    var h = ["locale", "symbol"],
        l = function () {
            var t = this;
            this._getScriptsInfo().forEach(function (e) {
                t._replaceScript(e)
            })
        },
        d = {
            widgetId: {
                configurable: !0
            },
            widgetUtmName: {
                configurable: !0
            },
            defaultSettings: {
                configurable: !0
            },
            propertiesToWorkWith: {
                configurable: !0
            },
            propertiesToSkipInHash: {
                configurable: !0
            },
            propertiesToAddToGetParams: {
                configurable: !0
            }
        };
    d.widgetId.get = function () {
        throw new Error("Method must be overridden")
    },
        d.widgetUtmName.get = function () {
            return this.widgetId
        },
        d.defaultSettings.get = function () {
            return c[this.widgetId]
        },
        d.propertiesToWorkWith.get = function () {
            return []
        },
        l.prototype.filterRawSettings = function (t) {
            var e = this,
                r = {};
            return Object.keys(t).forEach(function (i) {
                -1 !== e.propertiesToWorkWith.indexOf(i) && (r[i] = t[i])
            }),
                r
        },
        d.propertiesToSkipInHash.get = function () {
            return ["customer", "locale"]
        },
        d.propertiesToAddToGetParams.get = function () {
            return ["locale"]
        },
        l.prototype._getScriptsInfo = function () {
            var t = function () {
                if (document.currentScript)
                    return document.currentScript.src;
                for (var t = document.getElementsByTagName("script"), e = 0; e < t.length; e++)
                    if ("interactive" === t[e].readyState)
                        return t[e].src;
                try {
                    throw new Error
                } catch (t) {
                    var r = /\((.*?):\d+:\d+\)\s*$/m.exec(t.stack);
                    if (r)
                        return r[1]
                }
                return null
            }
            ();
            if (!t)
                return console.error("Could not self-replace the script, widget embedding has been aborted"), [];
            for (var e = o(t), r = e.host, i = e.href, n = document.getElementsByTagName("script"), a = [], s = 0; s < n.length; s++) {
                var c = n.item(s);
                c.src && o(c.src).href === i && a.push(c)
            }
            var h,
                l = (void 0 === (h = r) && (h = location.host), -1 !== ["i18n.tradingview.com", "partial.tradingview.com", "www.tradingview.com", "wwwcn.tradingview.com"].indexOf(h) || -1 !== ["d33t3vvu2t2yu5.cloudfront.net", "dwq4do82y8xi7.cloudfront.net", "s.tradingview.com", "s3.tradingview.com"].indexOf(h) || h.match(/^[a-z]{2}\.tradingview\.com/) || h.match(/prod-[^.]+.tradingview.com/) ? "battle" : -1 !== h.indexOf("tradingview.com") ? "staging" : h.match(/webcharts/) ? "staging_local" : (h.match(/^localhost(:\d+)?$/), "local"));
            return a.map(function (t) {
                return {
                    scriptHost: r,
                    scriptEnv: l,
                    scriptElement: t
                }
            })
        },
        l.prototype._replaceScript = function (t) {
            var e = this,
                n = t.scriptEnv,
                o = t.scriptHost,
                a = t.scriptElement;
            this.script = a;
            var c = this._scriptContentToJSON(),
                h = function (t) {
                    if (null === t)
                        return null;
                    var e = t.querySelector("#tradingview-copyright"),
                        r = t.querySelector("#tradingview-quotes"),
                        i = e || r;
                    return i && t.removeChild(i),
                        i
                }
                (this.script.parentNode),
                l = !!this.script.parentNode.querySelector(".tradingview-widget-copyright");
            this.hasCopyright = h || l,
            c && (this.settings = this.filterRawSettings(c)),
            c && this._isValidSettings() || (console.error("Invalid settings provided, fall back to defaults"), this.settings = this.filterRawSettings(this.defaultSettings));
            var d,
                p = r + "px",
                g = isNaN(this.settings.height) ? this.settings.height : this.settings.height + "px",
                u = isNaN(this.settings.width) ? this.settings.width : this.settings.width + "px",
                m = this.script.parentNode.classList.contains("tradingview-widget-container");
            this.script.parentNode && m ? this.iframeContainer = this.script.parentNode : this.iframeContainer = document.createElement("div"),
                this.iframeContainer.style.width = u,
                this.iframeContainer.style.height = g,
                this.iframeContainer.appendChild(((d = document.createElement("style")).innerHTML = "\n\t.tradingview-widget-copyright {\n\t\tfont-size: 13px !important;\n\t\tline-height: 32px !important;\n\t\ttext-align: center !important;\n\t\tvertical-align: middle !important;\n\t\tfont-family: 'Trebuchet MS', Arial, sans-serif !important;\n\t\tcolor: " + i["color-gull-gray"] + " !important;\n\t}\n\n\t.tradingview-widget-copyright .blue-text {\n\t\tcolor: " + i["color-brand"] + " !important;\n\t}\n\n\t.tradingview-widget-copyright a {\n\t\ttext-decoration: none !important;\n\t\tcolor: " + i["color-gull-gray"] + " !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited {\n\t\tcolor: " + i["color-gull-gray"] + " !important;\n\t}\n\n\t.tradingview-widget-copyright a:hover .blue-text {\n\t\tcolor: " + i["color-scooter"] + " !important;\n\t}\n\n\t.tradingview-widget-copyright a:active .blue-text {\n\t\tcolor: " + i["color-curious-blue"] + " !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited .blue-text {\n\t\tcolor: " + i["color-brand"] + " !important;\n\t}\n\t", d));
            var f = h && !this.settings.whitelabel,
                w = this.hasCopyright ? "calc(" + g + " - " + p + ")" : g;
            this.settings.utm_source = location.hostname,
                this.settings.utm_medium = l ? "widget_new" : "widget",
                this.settings.utm_campaign = this.widgetUtmName,
                this.iframe = this._createIframe(w, u, o, n, a.id);
            var y = this.iframeContainer.querySelector(".tradingview-widget-container__widget");
            if (y ? (this.script.parentNode.replaceChild(this.iframe, y), this.script.parentNode.removeChild(this.script)) : m ? (this.iframeContainer.appendChild(this.iframe), this.script.parentNode.removeChild(this.script)) : (this.iframeContainer.appendChild(this.iframe), this.script.parentNode.replaceChild(this.iframeContainer, this.script)), function (t, e, r) {
                var i = e.contentWindow;
                if (!i)
                    return console.error("Cannot listen to the event from the provided iframe, contentWindow is not available") , function () {};
                function n(e) {
                    e.source && e.source === i && e.data && e.data.name && e.data.name === t && r(e.data.data)
                }
                window.addEventListener("message", n, !1)
            }
            (s.Names.ResizeIframe, this.iframe, function (t) {
                t.width && (e.iframe.style.width = t.width + "px", e.iframeContainer.style.width = t.width + "px"),
                    e.iframe.style.height = t.height + "px",
                    e.iframeContainer.style.height = t.height + (e.hasCopyright ? r : 0) + "px"
            }), f) {
                var v = document.createElement("div");
                v.style.height = p,
                    v.style.lineHeight = p,
                    v.style.width = u,
                    v.style.textAlign = "center",
                    v.style.verticalAlign = "middle",
                    v.innerHTML = h.innerHTML,
                    this.iframeContainer.appendChild(v)
            }
        },
        l.prototype._iframeSrcBase = function (t, e) {
            var r = "https://s.tradingview.com";
            return "local" === e ? r = "http://" + t : "staging" === e && (r = -1 !== t.indexOf("beta.tradingview.com") ? "https://betacdn.tradingview.com" : "https://" + t),
                r += "/embed-widget/" + this.widgetId + "/",
            this.settings.customer && -1 !== this.propertiesToSkipInHash.indexOf("customer") && (r += this.settings.customer + "/"),
                r
        },
        l.prototype._isValidSettings = function () {
            var t = function (t) {
                if (void 0 === t)
                    return !0;
                var e = parseInt(t) + "%" == t + "";
                return parseInt(t) + "" == t + "" || e || "auto" === t
            };
            return t(this.settings.width) && t(this.settings.height)
        },
        l.prototype._buildGetQueryString = function () {
            var t = this.propertiesToAddToGetParams.filter(function (t) {
                return -1 !== h.indexOf(t)
            });
            return 0 === t.length ? "" : "?" + function (t) {
                var e = [];
                for (var r in t)
                    t.hasOwnProperty(r) && null != t[r] && e.push({
                        key: r,
                        pair: encodeURIComponent(r) + "=" + encodeURIComponent(t[r])
                    });
                return e.sort(function (t, e) {
                    return t.key > e.key ? 1 : t.key < e.key ? -1 : 0
                }).map(function (t) {
                    return t.pair
                }).join("&")
            }
            (function (t, e) {
                for (var r = Object.create(Object.getPrototypeOf(t)), i = 0, n = e; i < n.length; i++) {
                    var o = n[i];
                    Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o])
                }
                return r
            }
            (this.settings, t))
        },
        l.prototype._buildHashString = function (t) {
            var e = this,
                r = {};
            return t && (r.frameElementId = t),
                Object.keys(this.settings).forEach(function (t) {
                    -1 === e.propertiesToSkipInHash.indexOf(t) && (r[t] = e.settings[t])
                }),
                Object.keys(r).length > 0 ? "#" + encodeURIComponent(JSON.stringify(r)) : ""
        },
        l.prototype._scriptContentToJSON = function () {
            var t = this.script.innerHTML.trim();
            try {
                return JSON.parse(t)
            } catch (t) {
                return console.error("Widget settings parse error: " + t),
                    null
            }
        },
        l.prototype._createIframe = function (t, e, r, i, n) {
            var o = document.createElement("iframe");
            n && (o.id = n),
            this.settings.enableScrolling || o.setAttribute("scrolling", "no"),
                o.setAttribute("allowtransparency", !0),
                o.setAttribute("frameborder", 0),
                o.style.boxSizing = "border-box",
                o.style.height = t,
                o.style.width = e;
            var a = this._iframeSrcBase(r, i) + this._buildGetQueryString() + this._buildHashString(n);
            return o.setAttribute("src", a),
                o
        },
        Object.defineProperties(l.prototype, d);
    var p,
        g = 767,
        u = 1;
    !function (t) {
        t.Adaptive = "adaptive",
            t.Regular = "regular",
            t.Compact = "compact"
    }
    (p || (p = {}));
    var m = g;
    new(function (t) {
        function i() {
            return null !== t && t.apply(this, arguments) || this
        }
        return function (t, r) {
            function i() {
                this.constructor = t
            }
            e(t, r),
                t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
        (i, t),
            Object.defineProperty(i.prototype, "widgetId", {
                get: function () {
                    return "ticker-tape"
                },
                enumerable: !0,
                configurable: !0
            }),
            i.prototype.filterRawSettings = function (e) {
                void 0 !== e.theme && (e.colorTheme = e.theme);
                var i,
                    n,
                    o,
                    a,
                    s,
                    c,
                    h = t.prototype.filterRawSettings.call(this, e);
                h.width = "100%";
                try {
                    i = this.script.parentNode.getBoundingClientRect().width
                }
                finally {
                    h.height = (n = e.displayMode, o = e.isTransparent, a = this.hasCopyright, s = i, c = function (t) {
                        return t ? 72 : 44
                    }
                    (n === p.Adaptive && s ? s <= m : n === p.Compact), o || (c += 2 * u), a && (c += r), c)
                }
                return h
            },
            Object.defineProperty(i.prototype, "propertiesToWorkWith", {
                get: function () {
                    return ["symbols", "colorTheme", "isTransparent", "locale", "largeChartUrl", "displayMode", "customer"]
                },
                enumerable: !0,
                configurable: !0
            }),
            i
    }
    (l))
}
();