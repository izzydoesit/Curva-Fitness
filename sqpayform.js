! function(e) {
    function t(s) {
        if (n[s])
            return n[s].exports;
        var o = n[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return e[s].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    var n = {};
    t.m = e,
        t.c = n,
        t.d = function(e, n, s) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: s
            })
        },
        t.n = function(e) {
            var n = e && e.__esModule ? function() { return e.default } : function() { return e };
            return t.d(n, "a", n), n
        },
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        t.p = "",
        t(t.s = 9)
}([function(e, t, n) {
        "use strict";
        e.exports = {
            getWindow: function() {
                return window
            },
            getDocument: function() {
                return window.document
            },
            getReadyState: function() {
                return this.getDocument().readyState
            },
            getSiblingIframe: function(e) {
                return window.parent.frames[e]
            },
            getOrigin: function() {
                var e = this.getWindow().location;
                return e.origin ? e.origin : e.protocol + "//" + e.host
            }
        }
    },
    function(e, t, n) {
        "use strict";
        t.TIMEOUT_MS = 1e4,
            t.post = function(e, n, s) {
                s || "function" != typeof n || (s = n, n = {}), n || (n = {}), "function" != typeof s && (s = function() {});
                var o = new XMLHttpRequest;
                if (o.open("POST", e, !0), o.timeout = n.timeout || t.TIMEOUT_MS, n.headers)
                    for (var r in n.headers)
                        o.setRequestHeader(r, n.headers[r]);
                n.json && (o.setRequestHeader("Accept", "application/json"), o.setRequestHeader("Content-Type", "application/json; charset=utf-8")), o.onerror = function() { s(new Error("Unexpected error during request (" + e + ")")) }, o.onreadystatechange = function() {
                    if (4 === o.readyState) {
                        var e = o.responseText;
                        if (e && n.json) try { e = JSON.parse(e) } catch (e) { return s(e) }
                        var r = { headers: t.parseHeaders(o.getAllResponseHeaders()), status: o.status, statusText: o.statusText };
                        s(null, r, e)
                    }
                }, o.ontimeout = function() { s(new Error("Request timeout exceeded (" + o.timeout + "ms; " + e + ")")) }, n.body && n.json && (n.body = null), o.send(n.body || JSON.stringify(n.json))
            }, t.parseHeaders = function(e) {
                var t = {};
                return e ? (e.split("\r\n").forEach(function(e) {
                    var n = e.indexOf(": ");
                    if (n > 0) {
                        var s = e.substring(0, n),
                            o = e.substring(n + 2);
                        t[s] = o
                    }
                }), t) : t
            }
    },
    function(e, t, n) {
        "use strict";
        var s = n(0);
        e.exports.embeddingAllowed = function(e, t) { return /localhost$/.test(t.hostname) || "development" === e.name || "file:" === t.protocol || "https:" === t.protocol }, e.exports.isSupportedBrowser = function() {
            var e = s.getWindow(),
                t = s.getDocument();
            return void 0 !== e.postMessage && void 0 !== e.XMLHttpRequest && void 0 !== t.createElement("a").classList
        }, e.exports.cloneObject = function(e) { var t = {}; for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t }, e.exports.isIE10 = function() { return !!s.getDocument().documentElement.doScroll }
    },
    function(e, t, n) {
        "use strict";

        function s(e) { return "https://docs.connect.squareup.com/articles/adding-payment-form/" + (e || "") }
        var o = s("#settinguppaymentform"),
            r = s("#stylingcardform");
        e.exports = {
            ELEMENT_NOT_FOUND: function(e) {
                return "SqPaymentForm element with id `" + e + "` not found. Has the DOM finished loading?\nSee: " + s("#generatingpaymentform")
            },
            HTTPS: "SqPaymentForm can only be embedded on sites that use HTTPS. See: " + s(),
            BUILD_AFTER_DESTROY: "Cannot call SqPaymentForm#build after SqPaymentForm#destroy. Create a new SqPaymentForm instance instead.",
            NONCE_AFTER_DESTROY: "Cannot call SqPaymentForm#requestCardNonce after SqPaymentForm#destroy. Create a new SqPaymentForm instance instead.",
            NONCE_BEFORE_READY: "Cannot call SqPaymentForm#requestCardNonce before SqPaymentForm is ready. See: " + s("#sqpaymentformcallbacks"),
            REBUILD: "SqPaymentForm#build called more than once. Did you mean to call SqPaymentForm#destroy first?\nSee: " + s("#destroyingpaymentform"),
            OPTIONS_INVALID: "The SqPaymentForm `options` argument must be an object.\nSee: " + o,
            OPTIONS_MISSING: "The SqPaymentForm `options` argument is required.\nSee: " + o,
            OPTION_INVALID: function(e) { return "The SqPaymentForm `" + e + "` option value is invalid.\n See: " + o },
            OPTION_MISSING: function(e) { return "The SqPaymentForm `" + e + "` option is required.\n See: " + o },
            ELEMENT_ID_MISSING: function(e) { return "The SqPaymentForm `elementId` option is required for `" + e + "`.\n See: " + o },
            INPUT_TYPE_MISSING: function(e) { return this.OPTION_MISSING(e) },
            CALLBACK_MISSING: function(e) { return "The SqPaymentForm `" + e + "` callback is required.\nSee: " + o },
            CALLBACK_INVALID: function(e) { return "The SqPaymentForm `" + e + "` callback is must be a function.\nSee: " + o },
            INPUT_STYLES_INVALID: "The SqPaymentForm `inputStyles` option must be an array.\nSee: " + o,
            PROPERTY_INVALID: function(e) { return "Invalid InputStyle property: `" + e + "`.\nSee: " + r },
            VALUE_INVALID: function(e, t) { return "Invalid InputStyle value `" + e + "` for property `" + t + "`.\nSee: " + r },
            BROWSER: "Browser not supported.\nSee: " + s("#unsupportedbrowsers")
        }
    },
    function(e, t, n) {
        "use strict";

        function s(e) {
            this.options = e || {},
                this.env = this.options.env,
                this.source = this.options.source,
                this.applicationId = this.options.applicationId,
                this.ignoreError = 0;
            var t = this.options.endpoint || i,
                n = this.options.baseURL || this.env.serviceUrl();
            this.url = n + t,
                this.options.captureUncaughtExceptions && this.install(o.getWindow())
        }
        var o = n(0),
            r = n(1),
            i = "/v2/js-error";
        e.exports = s,
            s.prototype.destroy = function() {
                this.originalOnerror && (o.getWindow().onerror = this.originalOnerror,
                    this.originalOnerror = null)
            }, s.prototype.ignoreNextError = function() { this.ignoreError += 1, o.getWindow().setTimeout(function() { this.ignoreError -= 1 }.bind(this), 0) }, s.prototype.wrap = function(e) {
                function t() {
                    var t = [].slice.call(arguments);
                    try {
                        return e.apply(this, t)
                    } catch (e) {
                        throw n.capture(e), e
                    }
                }
                var n = this;
                return e.__inner__ ? e : (t.__inner__ = e, t)
            }, s.prototype.capture = function(e) {
                (e.name || e.message) && "development" !== this.env.name && (this.ignoreNextError(), this._send(this._createPayload(e.name, e.message || "[unknown]", e.fileName || "[unknown]", e.lineNumber || -1, e.stack)))
            }, s.prototype.install = function(e) {
                e.__error_logger__ || (e.__error_logger__ = !0,
                    this.originalOnerror = e.onerror,
                    e.onerror = function(t, n, s, o, r) {
                        if (!this.ignoreError && !/Script error/.test(t))
                            return this.capture(r),
                                "function" == typeof this.originalOnerror && this.originalOnerror.apply(e, [].slice.call(arguments))
                    }.bind(this))
            },
            s.prototype._createPayload = function(e, t, n, s, r) {
                var i = o.getWindow();
                return { app_id: this.applicationId, timestamp: Date.now(), type: e, message: t, stack: r, ua: i.navigator.userAgent, host: i.location.hostname, source: this.source }
            },
            s.prototype._send = function(e) {
                r.post(this.url, { json: e },
                    this._handleResponse.bind(this))
            },
            s.prototype._handleResponse = function() {}
    },
    function(e, t, n) {
        "use strict";

        function s(e, t, n) {
            return encodeURI(e + (t || "") + (n || ""))
        }
        var o = { production: { js: "https://js.squareup.com", service: "https://connect.squareup.com" }, staging: { js: "https://js.squareupstaging.com", service: "https://connect.squareupstaging.com" }, development: { js: "http://localhost:9090", service: "http://localhost:9090" }, test: { js: "http://localhost:9090", service: "http://localhost:9090" } },
            r = { production: { js: "https://static.masterpass.com/integration/merchant.js" }, staging: { js: "https://sandbox.static.masterpass.com/integration/merchant.js" }, development: { js: "https://sandbox.static.masterpass.com/integration/merchant.js" }, test: { js: "https://sandbox.static.masterpass.com/integration/merchant.js" } };
        e.exports = function(e) { o[e] || (e = "production"); var t = o[e]; return { name: e, masterpassJsUrl: r[e].js, jsUrl: function(e, n) { return s(t.js, e, n) }, serviceUrl: function(e, n) { return s(t.service, e, n) } } }
    }, , , ,
    function(e, t, n) {
        "use strict";
        n(0).getWindow().SqPaymentForm = n(10)
    },
    function(e, t, n) {
        "use strict";

        function s(e) {
            this.options = e, this.env = c(e ? e.env : "production"), this.errorLogger = new o({ applicationId: this.options && this.options.applicationId, captureUncaughtExceptions: !1, source: "SqPaymentForm", env: this.env });
            var t = this.validateOptions(this.options);
            if (t) throw this.errorLogger.capture(t), t;
            if (0 === this.options.applicationId.indexOf("sandbox-") && console.log("SqPaymentForm initialized in Sandbox Mode. See https://docs.connect.squareup.com/articles/using-sandbox/"), !p.embeddingAllowed(this.env, l.getWindow().location)) { var n = new Error(a.HTTPS); throw this.errorLogger.capture(n), n }
            var s = p.cloneObject(this.options);
            s.env = this.env, s.errorLogger = this.errorLogger, this.clientController = new r(s), this._handleDomContentLoaded = this.build.bind(this), p.isIE10() ? l.getWindow().addEventListener("load", this._handleDomContentLoaded) : "loading" === l.getReadyState() && l.getDocument().addEventListener("DOMContentLoaded", this._handleDomContentLoaded), d.post(this.env.serviceUrl("/v2/v"), { json: { a: this.options.applicationId, d: i.getHash(), t: Date.now(), s: "SqPaymentForm" } })
        }
        var o = n(4),
            r = n(11),
            i = n(13),
            a = n(3),
            c = n(5),
            p = n(2),
            l = n(0),
            d = n(1);
        s.prototype.build = function() {
                if (this.detachLoadEvent(), this.build = function() {
                        var e = Error(a.REBUILD);
                        throw this.errorLogger.capture(e), e
                    }, !p.isSupportedBrowser())
                    return this.errorLogger.capture(new Error(a.BROWSER)), void(this.options.callbacks && "function" == typeof this.options.callbacks.unsupportedBrowserDetected && this.options.callbacks.unsupportedBrowserDetected());
                try {
                    this.clientController.build()
                } catch (e) {
                    throw this.errorLogger.capture(e), e
                }
            },
            s.prototype.destroy = function() {
                this.detachLoadEvent(),
                    this.clientController && (this.clientController.destroy(), this.clientController = null),
                    this.errorLogger.destroy(),
                    this.errorLogger = null,
                    this.build = function() {
                        throw new Error(a.BUILD_AFTER_DESTROY)
                    },
                    this.requestCardNonce = function() {
                        throw new Error(a.NONCE_AFTER_DESTROY)
                    }
            },
            s.prototype.requestCardNonce = function() {
                if (!this.clientController) {
                    var e = new Error(a.NONCE_BEFORE_READY);
                    throw this.errorLogger.capture(e), e
                }
                this.clientController.requestCardNonceIfValidForm()
            },
            s.prototype.setPostalCode = function(e) {
                this.clientController.setPostalCode(e)
            },
            s.prototype.detachLoadEvent = function() {
                this._handleDomContentLoaded && (l.getDocument().removeEventListener("DOMContentLoaded",
                        this._handleDomContentLoaded),
                    l.getWindow().removeEventListener("load",
                        this._handleDomContentLoaded),
                    this._handleDomContentLoaded = null)
            },
            s.prototype.validateOptions = function(e) {
                if (!e)
                    return new Error(a.OPTIONS_MISSING);
                if ("[object Object]" !== Object.prototype.toString.call(e))
                    return new Error(a.OPTIONS_INVALID);
                if (!e.applicationId)
                    return new Error(a.OPTION_MISSING("applicationId"));
                if (!e.inputClass)
                    return new Error(a.OPTION_MISSING("inputClass"));
                if (-1 !== e.inputClass.indexOf(" "))
                    return new Error(a.OPTION_INVALID("inputClass"));
                if (!e.callbacks)
                    return new Error(a.OPTION_MISSING("callbacks"));
                for (var t, n = Object.keys(r.INPUT_TYPES), s = 0; n.length, t = n[s]; s += 1) {
                    var o = r.INPUT_TYPES[t],
                        i = this.validateInputType(o, e);
                    if (i)
                        return i
                }
                if (!e.callbacks.cardNonceResponseReceived) return new Error(a.CALLBACK_MISSING("cardNonceResponseReceived"));
                if ("function" != typeof e.callbacks.cardNonceResponseReceived) return new Error(a.CALLBACK_INVALID("cardNonceResponseReceived"));
                if (e.inputStyles && !Array.isArray(e.inputStyles)) return new Error(a.INPUT_STYLES_INVALID);
                if (e.applePay) { if (!e.locationId) return new Error(a.OPTION_MISSING("locationId")); if (!e.applePay.elementId) return new Error(a.ELEMENT_ID_MISSING("applePay")); if (!e.callbacks.createPaymentRequest) return new Error(a.CALLBACK_MISSING("createPaymentRequest")); if ("function" != typeof e.callbacks.createPaymentRequest) return new Error(a.CALLBACK_INVALID("createPaymentRequest")); if (!e.callbacks.methodsSupported) return new Error(a.CALLBACK_MISSING("methodsSupported")); if ("function" != typeof e.callbacks.methodsSupported) return new Error(a.CALLBACK_INVALID("methodsSupported")) }
            }, s.prototype.validateInputType = function(e, t) { if (e !== r.INPUT_TYPES.POSTAL_CODE || !1 !== t[e]) return t[e] ? t[e].elementId ? void 0 : new Error(a.ELEMENT_ID_MISSING(e)) : new Error(a.INPUT_TYPE_MISSING(e)) }, e.exports = s
    },
    function(e, t, n) {
        "use strict";

        function s(e) { this.options = e, this.env = e.env, this.errorLogger = e.errorLogger, this.callbacks = this.options.callbacks, this.iframeControllers = {}, this.loadedIframes = [], this.inputTypes = i.cloneObject(s.INPUT_TYPES), !1 === this.options[this.inputTypes.POSTAL_CODE] && delete this.inputTypes.POSTAL_CODE, this.masterpassCheckoutId = "", this.masterpassCartId = "", this.masterpassWindow = null }
        var o = n(3),
            r = n(12),
            i = n(2),
            a = n(0);
        s.RESIZE_TIMEOUT_MS = 250, s.INPUT_TYPES = { CARD_NUMBER: "cardNumber", CVV: "cvv", EXPIRATION_DATE: "expirationDate", POSTAL_CODE: "postalCode" }, s.prototype.build = function() { Object.keys(this.iframeControllers).length > 0 || (this.buildIframeControllers(), this.addPostMessageEventListeners(), this.addResizeEventListener(), this.initializeApplePay(), this.initializeMasterpass()) }, s.prototype.enableMethod = function(e, t) {
                var n = {};
                n[e] = t, this.callbacks && "function" == typeof this.callbacks.methodsSupported && this.callbacks.methodsSupported(n)
            }, s.prototype.initializeApplePay = function() {
                var e = this;
                if ("undefined" == typeof ApplePaySession || !this.options.applePay || "function" != typeof this.callbacks.createPaymentRequest) return e.enableMethod("applePay", !1), !1;
                var t = this.options.applePay.elementId,
                    n = a.getDocument().getElementById(t);
                if (!n) throw new Error(o.ELEMENT_NOT_FOUND(t));
                return ApplePaySession.canMakePaymentsWithActiveCard(this.options.applicationId).then(function(t) { return t ? (n.addEventListener("click", e.requestApplePayment.bind(e)), e.enableMethod("applePay", !0), !0) : (e.enableMethod("applePay", !1), !1) }).catch(function() { return e.enableMethod("applePay", !1), !1 })
            }, s.prototype.requestApplePayment = function() {
                var e = this,
                    t = this.callbacks.createPaymentRequest(),
                    n = { currencyCode: t.currencyCode, countryCode: t.countryCode, total: t.total, lineItems: t.lineItems, shippingContact: t.shippingContact };
                n.supportedNetworks = ["visa", "masterCard", "discover", "amex"], n.merchantCapabilities = ["supports3DS"], n.requiredBillingContactFields = ["postalAddress"], t.requestShippingAddress && (n.requiredShippingContactFields = ["postalAddress", "name", "email"]);
                var s = ApplePaySession.supportsVersion(2) ? 2 : 1;
                this.session = new ApplePaySession(s, n), this.session.onvalidatemerchant = function(t) { e._validateMerchant(t.validationURL) }, "function" == typeof e.callbacks.validateShippingContact && (this.session.onshippingcontactselected = function(t) { e._validateShippingContact(t.shippingContact, n) }), this.session.onpaymentauthorized = function(t) { e._paymentAuthorized(t.payment) }, this.session.begin()
            }, s.prototype._validateShippingContact = function(e, t) {
                var n = [],
                    s = "function" == typeof this.callbacks.validateShippingContact && this.callbacks.validateShippingContact(e);
                if (!s)
                    return this.session.completeShippingContactSelection(ApplePaySession.STATUS_SUCCESS, n, t.total, t.lineItems);
                if ("function" != typeof ApplePayError)
                    return this.session.completeShippingContactSelection(ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS, n, t.total, t.lineItems);
                var o = {
                        country: "countryCode",
                        state: "administrativeArea",
                        city: "locality",
                        address: "addressLines",
                        zip: "postalCode"
                    },
                    r = Object.keys(s).map(function(e) {
                        return new ApplePayError("shippingContactInvalid", o[e], s[e].message)
                    });
                this.session.completeShippingContactSelection(r, [], t.total, t.lineItems)
            },
            s.prototype._validateMerchant = function(e) {
                this.requestApplePayMerchantValidity({
                    client_id: this.options.applicationId,
                    location_id: this.options.locationId,
                    validation_url: e,
                    source_url: location.href
                })
            },
            s.prototype.requestApplePayMerchantValidity = function(e) {
                this.sendIframeMessage({
                    eventName: "requestApplePayMerchantValidity",
                    payload: e
                })
            },
            s.prototype.receiveApplePayValidMerchant = function(e) {
                e.error ? (this.callbacks.cardNonceResponseReceived([{ detail: "Unable to start Apple Pay session." }]), this.session.abort()) : this.session.completeMerchantValidation(JSON.parse(e.session))
            },
            s.prototype._paymentAuthorized = function(e) {
                this.requestApplePayCardNonce({
                    client_id: this.options.applicationId,
                    applepay_data: e
                })
            },
            s.prototype.requestApplePayCardNonce = function(e) {
                this.sendIframeMessage({
                    eventName: "requestApplePayCardNonce",
                    payload: e
                })
            },
            s.prototype.receiveApplePayCardNonce = function(e) {
                var t = e.nonceResponse;
                if (t.errors)
                    return this.session.completePayment(this.session.STATUS_FAILURE), "function" == typeof this.callbacks.cardNonceResponseReceived && this.callbacks.cardNonceResponseReceived(t.errors), !1;
                this.session.completePayment(this.session.STATUS_SUCCESS), "function" == typeof this.callbacks.cardNonceResponseReceived && this.callbacks.cardNonceResponseReceived(null, t.card_nonce, t.card, t.shipping_contact)
            }, s.prototype.initializeMasterpass = function() {
                var e = this;
                if (!this.options.masterpass || !this.callbacks || "function" != typeof this.callbacks.createPaymentRequest) return e.enableMethod("masterpass", !1), !1;
                var t = this.options.masterpass.elementId,
                    n = a.getDocument().getElementById(t);
                if (!n) throw new Error(o.ELEMENT_NOT_FOUND(t));
                return n.addEventListener("click", e._requestMasterpassPayment.bind(e)), e.enableMethod("masterpass", !0), !0
            }, s.prototype._createMasterpassCartId = function() {
                function e() { return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) }
                return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
            }, s.prototype._requestMasterpassPayment = function() {
                var e = this;
                if (!e.masterpassWindow || e.masterpassWindow.closed) {
                    var t = e.callbacks.createPaymentRequest();
                    e.masterpassCartId = e._createMasterpassCartId();
                    var n = a.getWindow().screen.width / 2 - 510,
                        s = a.getWindow().screen.height / 2 - 450;
                    e.masterpassWindow = a.getWindow().open("", "Masterpass", "width=1000,height=800,left=" + n + ",top=" + s + ",screenX=" + n + ",screenY=" + s + ",toolbar=no,menubar=no,scrollbars=no,location=yes,directories=no");
                    var o = e.masterpassWindow.document;
                    e._buildMasterpassWindowContent(e.env, t, o)
                } else e.masterpassWindow.focus()
            }, s.prototype._buildMasterpassWindowContent = function(e, t, n) {
                var s = t.total.amount,
                    o = t.currencyCode,
                    r = e.serviceUrl("/v2/masterpass/callback"),
                    i = n.createElement("script");
                i.setAttribute("type", "text/javascript");
                var a = { checkoutId: this.masterpassCheckoutId, allowedCardTypes: ["visa", "masterCard", "discover", "amex", "jcb"], amount: s, currency: o, suppress3Ds: !1, suppressShippingAddress: !0, cartId: this.masterpassCartId, callbackUrl: r };
                i.innerText = "function start() { masterpass.checkout(" + JSON.stringify(a) + "); }";
                var c = n.createElement("script");
                c.setAttribute("type", "text/javascript"), c.setAttribute("src", e.masterpassJsUrl), c.setAttribute("onload", "start()");
                var p = n.createElement("body");
                p.appendChild(i), p.appendChild(c), n.body = p
            }, s.prototype.receiveMasterpassTransaction = function(e) {
                if (this.masterpassWindow && (this.masterpassWindow.close(), this.masterpassWindow = null), "success" !== e.status) return !1;
                this.sendIframeMessage({ eventName: "requestMasterpassCardNonce", payload: { client_id: this.options.applicationId, masterpass_data: { transaction_id: e.transactionId, cart_id: this.masterpassCartId } } })
            }, s.prototype.buildIframeControllers = function() {
                for (var e in this.inputTypes) {
                    var t = this.inputTypes[e];
                    this.buildIframeController(t)
                }
            }, s.prototype.buildIframeController = function(e) {
                var t = this.options[e].elementId,
                    n = a.getDocument().getElementById(t);
                if (!n) throw new Error(o.ELEMENT_NOT_FOUND(t));
                var s = i.cloneObject(this.options[e]);
                s.inputClass = this.options.inputClass, s.inheritedClassName = n.className, s.env = this.env, s.applicationId = this.options.applicationId, this.iframeControllers[e] = new r(e, s, this.iframeCallbacks()), this.iframeControllers[e].originalElement = n, n.parentElement.replaceChild(this.iframeControllers[e].element, n)
            }, s.prototype.destroy = function() { this.removePostMessageEventListeners(), this.removeTouchStartEventListener(), this.removeResizeEventListener(); for (var e in this.iframeControllers) this.iframeControllers[e].destroy(), delete this.iframeControllers[e] }, s.prototype.iframeCallbacks = function() { return { onload: function(e) { this.addLoadedFrame(e) }.bind(this) } }, s.prototype.addLoadedFrame = function(e) {-1 === this.loadedIframes.indexOf(e) && this.loadedIframes.push(e), this.loadedIframes.length === Object.keys(this.inputTypes).length && this.loadFormController() }, s.prototype.addLogoIframe = function(e) {
                var t = a.getDocument().createElement("iframe");
                t.src = this.env.serviceUrl("/v2/logo.html", "?s=" + encodeURIComponent(e || "")), t.id = "sq-logo", t.width = "0", t.height = "0", t.frameBorder = "0", t.tabIndex = "-1";
                var n = this.iframeControllers.postalCode.element;
                n.parentNode.insertBefore(t, n.nextSibling)
            }, s.prototype.receiveMessageCallback = function(e) {
                var t;
                if (e.origin === this.env.serviceUrl()) switch (e.data.eventName) {
                    case "cardNonceResponseReceived":
                        this.options.callbacks && "function" == typeof this.options.callbacks.cardNonceResponseReceived && this.options.callbacks.cardNonceResponseReceived(e.data.value.errors, e.data.value.card_nonce, e.data.value.card);
                        break;
                    case "receiveApplePayValidMerchant":
                        this.receiveApplePayValidMerchant(e.data.payload);
                        break;
                    case "receiveApplePayCardNonce":
                        this.receiveApplePayCardNonce(e.data.payload);
                        break;
                    case "receiveMasterpassTransaction":
                        this.receiveMasterpassTransaction(e.data.payload);
                        break;
                    case "inputEventReceived":
                        var n = this.iframeControllers[e.data.inputEvent.field];
                        switch (e.data.inputEvent.eventType) {
                            case "errorClassAdded":
                                t = this.classNameForClassType("error"), n.addClass(t);
                                break;
                            case "errorClassRemoved":
                                t = this.classNameForClassType("error"), n.removeClass(t);
                                break;
                            case "focusClassAdded":
                                t = this.classNameForClassType("focus"), n.addClass(t);
                                break;
                            case "focusClassRemoved":
                                t = this.classNameForClassType("focus"), n.removeClass(t)
                        }
                        this.options.callbacks && "function" == typeof this.options.callbacks.inputEventReceived && this.options.callbacks.inputEventReceived(e.data.inputEvent);
                        break;
                    case "setInputHeight":
                        this.iframeControllers[e.data.inputType].element.setAttribute("height", e.data.inputHeight);
                        break;
                    case "setSessionId":
                        break;
                    case "setMasterpassCheckoutId":
                        this.masterpassCheckoutId = e.data.checkoutId;
                        break;
                    case "paymentFormLoaded":
                        this.addTouchStartEventListener(), this.options.callbacks && "function" == typeof this.options.callbacks.paymentFormLoaded && this.options.callbacks.paymentFormLoaded()
                }
            }, s.prototype.updateStylesOnResize = function() { clearTimeout(this.fireOnResizeEnd), this.fireOnResizeEnd = setTimeout(this.buildStylesForScreenWidth.bind(this), s.RESIZE_TIMEOUT_MS) }, s.prototype.addPostMessageEventListeners = function() { this._messageCallback = this.receiveMessageCallback.bind(this), a.getWindow().addEventListener("message", this._messageCallback) }, s.prototype.removePostMessageEventListeners = function() { a.getWindow().removeEventListener("message", this._messageCallback) }, s.prototype.addTouchStartEventListener = function() { this._touchstartCallback = this.blurAllInputs.bind(this), a.getWindow().addEventListener("touchstart", this._touchstartCallback) }, s.prototype.removeTouchStartEventListener = function() { a.getWindow().removeEventListener("touchstart", this._touchstartCallback) }, s.prototype.addResizeEventListener = function() { this._resizeCallback = this.updateStylesOnResize.bind(this), a.getWindow().addEventListener("resize", this._resizeCallback) }, s.prototype.removeResizeEventListener = function() { a.getWindow().removeEventListener("resize", this._resizeCallback) }, s.prototype.classNameForClassType = function(e) { return this.options.inputClass + "--" + e }, s.prototype.sendIframeMessage = function(e) {
                var t = this.env.serviceUrl();
                this.iframeControllers.cardNumber.element.contentWindow.postMessage(e, t)
            }, s.prototype.loadFormController = function() {
                var e = { eventName: "loadFormController", iframes: r.IFRAME_NAMES, options: { envName: this.env.name, applicationId: this.options.applicationId, websiteUrl: this.options.websiteUrl, hostOrigin: a.getOrigin(), cardNumber: this.options.cardNumber, cvv: this.options.cvv, expirationDate: this.options.expirationDate, postalCode: this.options.postalCode, inputStyles: this.options.inputStyles }, initialScreenWidth: a.getWindow().innerWidth };
                this.sendIframeMessage(e)
            }, s.prototype.requestCardNonceIfValidForm = function() {
                this.sendIframeMessage({
                    eventName: "requestCardNonceIfValidForm"
                })
            },
            s.prototype.buildStylesForScreenWidth = function() {
                this.sendIframeMessage({
                    eventName: "buildStylesForScreenWidth",
                    screenWidth: a.getWindow().innerWidth
                })
            },
            s.prototype.blurAllInputs = function() {
                this.sendIframeMessage({
                    eventName: "blurAllInputs"
                })
            },
            s.prototype.setPostalCode = function(e) {
                var t = typeof e;
                "string" !== t && "number" !== t || this.sendIframeMessage({ eventName: "setPostalCode", postalCode: "" + e })
            },
            e.exports = s
    },
    function(e, t, n) {
        "use strict";

        function s(e, t, n) {
            this.type = e,
                this.options = t,
                this.callbacks = n,
                this.env = this.options.env,
                this.element = o.getDocument().createElement("iframe"),
                this.element.onload = this.onload.bind(this),
                this.setDefaultAttributes()
        }
        var o = n(0);
        s.IFRAME_NAMES = {
                cardNumber: "sq-card-number-iframe",
                cvv: "sq-cvv-iframe",
                expirationDate: "sq-expiration-date-iframe",
                postalCode: "sq-postal-code-iframe"
            },
            s.prototype.onload = function() {
                "function" == typeof this.callbacks.onload && this.callbacks.onload(this.type)
            },
            s.prototype.destroy = function() {
                this.element.parentNode && this.element.parentNode.replaceChild(this.originalElement, this.element),
                    this.originalElement = null,
                    this.element = null
            },
            s.prototype.setDefaultAttributes = function() {
                var e = this.element,
                    t = s.IFRAME_NAMES[this.type];
                e.setAttribute("id", this.options.elementId), e.setAttribute("name", t), e.setAttribute("class", this.combinedClassName()),
                    e.setAttribute("frameBorder", "0"),
                    e.setAttribute("width", "100%"),
                    e.setAttribute("scrolling", "no"),
                    e.setAttribute("height", this.estimatedInputHeight()),
                    e.setAttribute("src", this.iframeSRC())
            },
            s.prototype.combinedClassName = function() {
                var e = [];
                return this.options.inputClass && e.push(this.options.inputClass),
                    this.options.inheritedClassName && e.push(this.options.inheritedClassName),
                    e.join(" ")
            },
            s.prototype.estimatedInputHeight = function() {
                return 15
            },
            s.prototype.iframeSRC = function() {
                return this.env.serviceUrl("/v2/iframe",
                    this.queryString())
            },
            s.prototype.queryString = function() {
                var e = "?type=" + this.type;
                return "cardNumber" === this.type && (e += "&app_id=" + this.options.applicationId), e
            },
            s.prototype.addClass = function(e) {
                this.element.classList.add(e)
            },
            s.prototype.removeClass = function(e) {
                this.element.classList.remove(e)
            },
            e.exports = s
    },
    function(e, t, n) {
        "use strict";
        e.exports = { getHash: function() { return "eyJzIjoiN2FjOTg1OTgiLCJiIjoxNTEwMzU2MjkwNjYwLCJ2IjoiMC4xLjEifQ==" } }
    }
]);