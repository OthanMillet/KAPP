var gapi = window.gapi = window.gapi || {};
gapi._bs = new Date().getTime();
(function() {
	var m = this,
		aa = function(a, b, c) {
			return a.call.apply(a.bind, arguments)
		},
		ba = function(a, b, c) {
			if (!a) throw Error();
			if (2 < arguments.length) {
				var d = Array.prototype.slice.call(arguments, 2);
				return function() {
					var c = Array.prototype.slice.call(arguments);
					Array.prototype.unshift.apply(c, d);
					return a.apply(b, c)
				}
			}
			return function() {
				return a.apply(b, arguments)
			}
		},
		ca = function(a, b, c) {
			ca = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
			return ca.apply(null, arguments)
		},
		da = function(a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.ea = b.prototype;
			a.prototype = new c;
			a.prototype.constructor = a;
			a.w = function(a, c, f) {
				for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
				return b.prototype[c].apply(a, d)
			}
		};
	/*
	 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
	var p = window,
		t = document,
		ea = p.location,
		fa = function() {},
		ha = /\[native code\]/,
		v = function(a, b, c) {
			return a[b] = a[b] || c
		},
		ia = function(a) {
			for (var b = 0; b < this.length; b++)
				if (this[b] === a) return b;
			return -1
		},
		ja = function(a) {
			a = a.sort();
			for (var b = [], c = void 0, d = 0; d < a.length; d++) {
				var e = a[d];
				e != c && b.push(e);
				c = e
			}
			return b
		},
		ka = /&/g,
		la = /</g,
		ma = />/g,
		na = /"/g,
		oa = /'/g,
		pa = function(a) {
			return String(a).replace(ka, "&amp;").replace(la, "&lt;").replace(ma, "&gt;").replace(na, "&quot;").replace(oa, "&#39;")
		},
		w = function() {
			var a;
			if ((a = Object.create) && ha.test(a)) a = a(null);
			else {
				a = {};
				for (var b in a) a[b] = void 0
			}
			return a
		},
		x = function(a, b) {
			return Object.prototype.hasOwnProperty.call(a, b)
		},
		qa = function(a) {
			if (ha.test(Object.keys)) return Object.keys(a);
			var b = [],
				c;
			for (c in a) x(a, c) && b.push(c);
			return b
		},
		z = function(a, b) {
			a = a || {};
			for (var c in a) x(a, c) && (b[c] = a[c])
		},
		ra = function(a) {
			return function() {
				p.setTimeout(a, 0)
			}
		},
		A = function(a, b) {
			if (!a) throw Error(b || "");
		},
		B = v(p, "gapi", {});
	var C = function(a, b, c) {
			var d = new RegExp("([#].*&|[#])" + b + "=([^&#]*)", "g");
			b = new RegExp("([?#].*&|[?#])" + b + "=([^&#]*)", "g");
			if (a = a && (d.exec(a) || b.exec(a))) try {
				c = decodeURIComponent(a[2])
			} catch (e) {}
			return c
		},
		sa = new RegExp(/^/.source + /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source + /(\/\/[^\/?#]*)?/.source + /([^?#]*)?/.source + /(\?([^#]*))?/.source + /(#((#|[^#])*))?/.source + /$/.source),
		ta = /[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g,
		ua = new RegExp(/(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source + /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source, "g"),
		va = /%([a-f]|[0-9a-fA-F][a-f])/g,
		wa = /^(https?|ftp|file|chrome-extension):$/i,
		D = function(a) {
			a = String(a);
			a = a.replace(ta, function(a) {
				try {
					return encodeURIComponent(a)
				} catch (f) {
					return encodeURIComponent(a.replace(/^[^%]+$/g, "\ufffd"))
				}
			}).replace(ua, function(a) {
				return a.replace(/%/g, "%25")
			}).replace(va, function(a) {
				return a.toUpperCase()
			});
			a = a.match(sa) || [];
			var b = w(),
				c = function(a) {
					return a.replace(/\\/g, "%5C").replace(/\^/g, "%5E").replace(/`/g, "%60").replace(/\{/g, "%7B").replace(/\|/g, "%7C").replace(/\}/g, "%7D")
				},
				d = !!(a[1] || "").match(wa);
			b.w = c((a[1] || "") + (a[2] || "") + (a[3] || (a[2] && d ? "/" : "")));
			d = function(a) {
				return c(a.replace(/\?/g, "%3F").replace(/#/g, "%23"))
			};
			b.query = a[5] ? [d(a[5])] : [];
			b.g = a[7] ? [d(a[7])] : [];
			return b
		},
		xa = function(a) {
			return a.w + (0 < a.query.length ? "?" + a.query.join("&") : "") + (0 < a.g.length ? "#" + a.g.join("&") : "")
		},
		ya = function(a, b) {
			var c = [];
			if (a)
				for (var d in a)
					if (x(a, d) && null != a[d]) {
						var e = b ? b(a[d]) : a[d];
						c.push(encodeURIComponent(d) + "=" + encodeURIComponent(e))
					}
			return c
		},
		za = function(a, b, c, d) {
			a = D(a);
			a.query.push.apply(a.query, ya(b, d));
			a.g.push.apply(a.g, ya(c, d));
			return xa(a)
		},
		Ba = new RegExp(/\/?\??#?/.source + "(" + /[\/?#]/i.source + "|" + /[\uD800-\uDBFF]/i.source + "|" + /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source + "|" + /%[0-9a-f]?/i.source + ")$", "i"),
		Ca = function(a, b) {
			var c = D(b);
			b = c.w;
			c.query.length && (b += "?" + c.query.join(""));
			c.g.length && (b += "#" + c.g.join(""));
			var d = "";
			2E3 < b.length && (c = b, b = b.substr(0, 2E3), b = b.replace(Ba, ""), d = c.substr(b.length));
			var e = a.createElement("div");
			a = a.createElement("a");
			c = D(b);
			b = c.w;
			c.query.length && (b += "?" + c.query.join(""));
			c.g.length && (b += "#" + c.g.join(""));
			a.href = b;
			e.appendChild(a);
			e.innerHTML = e.innerHTML;
			b = String(e.firstChild.href);
			e.parentNode && e.parentNode.removeChild(e);
			c = D(b + d);
			b = c.w;
			c.query.length && (b += "?" + c.query.join(""));
			c.g.length && (b += "#" + c.g.join(""));
			return b
		},
		Da = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
	var Ea = function(a, b, c, d) {
			if (p[c + "EventListener"]) p[c + "EventListener"](a, b, !1);
			else if (p[d + "tachEvent"]) p[d + "tachEvent"]("on" + a, b)
		},
		Fa = function() {
			var a = t.readyState;
			return "complete" === a || "interactive" === a && -1 == navigator.userAgent.indexOf("MSIE")
		},
		Ia = function(a) {
			var b = Ga;
			if (!Fa()) try {
				b()
			} catch (c) {}
			Ha(a)
		},
		Ha = function(a) {
			if (Fa()) a();
			else {
				var b = !1,
					c = function() {
						if (!b) return b = !0, a.apply(this, arguments)
					};
				p.addEventListener ? (p.addEventListener("load", c, !1), p.addEventListener("DOMContentLoaded", c, !1)) : p.attachEvent && (p.attachEvent("onreadystatechange", function() {
					Fa() && c.apply(this, arguments)
				}), p.attachEvent("onload", c))
			}
		},
		Ja = function(a) {
			for (; a.firstChild;) a.removeChild(a.firstChild)
		},
		Ka = {
			button: !0,
			div: !0,
			span: !0
		};
	var F;
	F = v(p, "___jsl", w());
	v(F, "I", 0);
	v(F, "hel", 10);
	var La = function(a) {
			return F.dpo ? F.h : C(a, "jsh", F.h)
		},
		Ma = function(a) {
			var b = v(F, "sws", []);
			b.push.apply(b, a)
		},
		Na = function(a) {
			return v(F, "watt", w())[a]
		},
		Oa = function(a) {
			var b = v(F, "PQ", []);
			F.PQ = [];
			var c = b.length;
			if (0 === c) a();
			else
				for (var d = 0, e = function() {
						++d === c && a()
					}, f = 0; f < c; f++) b[f](e)
		},
		Pa = function(a) {
			return v(v(F, "H", w()), a, w())
		};
	var Qa = v(F, "perf", w()),
		Ra = v(Qa, "g", w()),
		Sa = v(Qa, "i", w());
	v(Qa, "r", []);
	w();
	w();
	var Ta = function(a, b, c) {
			var d = Qa.r;
			"function" === typeof d ? d(a, b, c) : d.push([a, b, c])
		},
		G = function(a, b, c) {
			Ra[a] = !b && Ra[a] || c || (new Date).getTime();
			Ta(a)
		},
		Va = function(a, b, c) {
			b && 0 < b.length && (b = Ua(b), c && 0 < c.length && (b += "___" + Ua(c)), 28 < b.length && (b = b.substr(0, 28) + (b.length - 28)), c = b, b = v(Sa, "_p", w()), v(b, c, w())[a] = (new Date).getTime(), Ta(a, "_p", c))
		},
		Ua = function(a) {
			return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/,/g, "_")
		};
	var Wa = w(),
		H = [],
		J = function(a) {
			throw Error("Bad hint" + (a ? ": " + a : ""));
		};
	H.push(["jsl", function(a) {
		for (var b in a)
			if (x(a, b)) {
				var c = a[b];
				"object" == typeof c ? F[b] = v(F, b, []).concat(c) : v(F, b, c)
			}
		if (b = a.u) a = v(F, "us", []), a.push(b), (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1])
	}]);
	var Xa = /^(\/[a-zA-Z0-9_\-]+)+$/,
		Ya = [/\/amp\//, /\/amp$/, /^\/amp$/],
		Za = /^[a-zA-Z0-9\-_\.,!]+$/,
		$a = /^gapi\.loaded_[0-9]+$/,
		ab = /^[a-zA-Z0-9,._-]+$/,
		eb = function(a, b, c, d) {
			var e = a.split(";"),
				f = e.shift(),
				g = Wa[f],
				h = null;
			g ? h = g(e, b, c, d) : J("no hint processor for: " + f);
			h || J("failed to generate load url");
			b = h;
			c = b.match(bb);
			(d = b.match(cb)) && 1 === d.length && db.test(b) && c && 1 === c.length || J("failed sanity: " + a);
			return h
		},
		hb = function(a, b, c, d) {
			a = fb(a);
			$a.test(c) || J("invalid_callback");
			b = gb(b);
			d = d && d.length ? gb(d) : null;
			var e = function(a) {
				return encodeURIComponent(a).replace(/%2C/g, ",")
			};
			return [encodeURIComponent(a.pathPrefix).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", e(a.version), "/m=", e(b), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.L ? "/am=" + e(a.L) : "", a.T ? "/rs=" + e(a.T) : "", a.V ? "/t=" + e(a.V) : "", "/cb=", e(c)].join("")
		},
		fb = function(a) {
			"/" !== a.charAt(0) && J("relative path");
			for (var b = a.substring(1).split("/"), c = []; b.length;) {
				a = b.shift();
				if (!a.length || 0 == a.indexOf(".")) J("empty/relative directory");
				else if (0 < a.indexOf("=")) {
					b.unshift(a);
					break
				}
				c.push(a)
			}
			a = {};
			for (var d = 0, e = b.length; d < e; ++d) {
				var f = b[d].split("="),
					g = decodeURIComponent(f[0]),
					h = decodeURIComponent(f[1]);
				2 == f.length && g && h && (a[g] = a[g] || h)
			}
			b = "/" + c.join("/");
			Xa.test(b) || J("invalid_prefix");
			c = 0;
			for (d = Ya.length; c < d; ++c) Ya[c].test(b) && J("invalid_prefix");
			c = ib(a, "k", !0);
			d = ib(a, "am");
			e = ib(a, "rs");
			a = ib(a, "t");
			return {
				pathPrefix: b,
				version: c,
				L: d,
				T: e,
				V: a
			}
		},
		gb = function(a) {
			for (var b = [], c = 0, d = a.length; c < d; ++c) {
				var e = a[c].replace(/\./g, "_").replace(/-/g, "_");
				ab.test(e) && b.push(e)
			}
			return b.join(",")
		},
		ib = function(a, b, c) {
			a = a[b];
			!a && c && J("missing: " + b);
			if (a) {
				if (Za.test(a)) return a;
				J("invalid: " + b)
			}
			return null
		},
		db = /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
		cb = /\/cb=/g,
		bb = /\/\//g,
		jb = function() {
			var a = La(ea.href);
			if (!a) throw Error("Bad hint");
			return a
		};
	Wa.m = function(a, b, c, d) {
		(a = a[0]) || J("missing_hint");
		return "https://apis.google.com" + hb(a, b, c, d)
	};
	var K = decodeURI("%73cript"),
		kb = /^[-+_0-9\/A-Za-z]+={0,2}$/,
		lb = function(a, b) {
			for (var c = [], d = 0; d < a.length; ++d) {
				var e = a[d];
				e && 0 > ia.call(b, e) && c.push(e)
			}
			return c
		},
		mb = function() {
			var a = F.nonce;
			if (void 0 !== a) return a && a === String(a) && a.match(kb) ? a : F.nonce = null;
			var b = v(F, "us", []);
			if (!b || !b.length) return F.nonce = null;
			for (var c = t.getElementsByTagName(K), d = 0, e = c.length; d < e; ++d) {
				var f = c[d];
				if (f.src && (a = String(f.nonce || f.getAttribute("nonce") || "") || null)) {
					for (var g = 0, h = b.length; g < h && b[g] !== f.src; ++g);
					if (g !== h && a && a === String(a) && a.match(kb)) return F.nonce = a
				}
			}
			return null
		},
		ob = function(a) {
			if ("loading" != t.readyState) nb(a);
			else {
				var b = mb(),
					c = "";
				null !== b && (c = ' nonce="' + b + '"');
				t.write("<" + K + ' src="' + encodeURI(a) + '"' + c + "></" + K + ">")
			}
		},
		nb = function(a) {
			var b = t.createElement(K);
			b.setAttribute("src", a);
			a = mb();
			null !== a && b.setAttribute("nonce", a);
			b.async = "true";
			(a = t.getElementsByTagName(K)[0]) ? a.parentNode.insertBefore(b, a): (t.head || t.body || t.documentElement).appendChild(b)
		},
		pb = function(a, b) {
			var c = b && b._c;
			if (c)
				for (var d = 0; d < H.length; d++) {
					var e = H[d][0],
						f = H[d][1];
					f && x(c, e) && f(c[e], a, b)
				}
		},
		rb = function(a, b, c) {
			qb(function() {
				var c = b === La(ea.href) ? v(B, "_", w()) : w();
				c = v(Pa(b), "_", c);
				a(c)
			}, c)
		},
		L = function(a, b) {
			var c = b || {};
			"function" == typeof b && (c = {}, c.callback = b);
			pb(a, c);
			b = a ? a.split(":") : [];
			var d = c.h || jb(),
				e = v(F, "ah", w());
			if (e["::"] && b.length) {
				a = [];
				for (var f = null; f = b.shift();) {
					var g = f.split(".");
					g = e[f] || e[g[1] && "ns:" + g[0] || ""] || d;
					var h = a.length && a[a.length - 1] || null,
						k = h;
					h && h.hint == g || (k = {
						hint: g,
						O: []
					}, a.push(k));
					k.O.push(f)
				}
				var l = a.length;
				if (1 < l) {
					var q = c.callback;
					q && (c.callback = function() {
						0 == --l && q()
					})
				}
				for (; b = a.shift();) sb(b.O, c, b.hint)
			} else sb(b || [], c, d)
		},
		sb = function(a, b, c) {
			a = ja(a) || [];
			var d = b.callback,
				e = b.config,
				f = b.timeout,
				g = b.ontimeout,
				h = b.onerror,
				k = void 0;
			"function" == typeof h && (k = h);
			var l = null,
				q = !1;
			if (f && !g || !f && g) throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
			h = v(Pa(c), "r", []).sort();
			var n = v(Pa(c), "L", []).sort(),
				r = [].concat(h),
				u = function(a, b) {
					if (q) return 0;
					p.clearTimeout(l);
					n.push.apply(n, y);
					var d = ((B || {}).config || {}).update;
					d ? d(e) : e && v(F, "cu", []).push(e);
					if (b) {
						Va("me0", a, r);
						try {
							rb(b, c, k)
						} finally {
							Va("me1", a, r)
						}
					}
					return 1
				};
			0 < f && (l = p.setTimeout(function() {
				q = !0;
				g()
			}, f));
			var y = lb(a, n);
			if (y.length) {
				y = lb(a, h);
				var E = v(F, "CP", []),
					I = E.length;
				E[I] = function(a) {
					if (!a) return 0;
					Va("ml1", y, r);
					var b = function(b) {
							E[I] = null;
							u(y, a) && Oa(function() {
								d && d();
								b()
							})
						},
						c = function() {
							var a = E[I + 1];
							a && a()
						};
					0 < I && E[I - 1] ? E[I] = function() {
						b(c)
					} : b(c)
				};
				if (y.length) {
					var Aa = "loaded_" + F.I++;
					B[Aa] = function(a) {
						E[I](a);
						B[Aa] = null
					};
					a = eb(c, y, "gapi." + Aa, h);
					h.push.apply(h, y);
					Va("ml0", y, r);
					b.sync || p.___gapisync ? ob(a) : nb(a)
				} else E[I](fa)
			} else u(y) && d && d()
		};
	var qb = function(a, b) {
		if (F.hee && 0 < F.hel) try {
			return a()
		} catch (c) {
			b && b(c), F.hel--, L("debug_error", function() {
				try {
					window.___jsl.hefn(c)
				} catch (d) {
					throw c;
				}
			})
		} else try {
			return a()
		} catch (c) {
			throw b && b(c), c;
		}
	};
	B.load = function(a, b) {
		return qb(function() {
			return L(a, b)
		})
	};
	var M = function(a) {
			var b = window.___jsl = window.___jsl || {};
			b[a] = b[a] || [];
			return b[a]
		},
		N = function(a) {
			var b = window.___jsl = window.___jsl || {};
			b.cfg = !a && b.cfg || {};
			return b.cfg
		},
		tb = function(a) {
			return "object" === typeof a && /\[native code\]/.test(a.push)
		},
		O = function(a, b, c) {
			if (b && "object" === typeof b)
				for (var d in b) !Object.prototype.hasOwnProperty.call(b, d) || c && "___goc" === d && "undefined" === typeof b[d] || (a[d] && b[d] && "object" === typeof a[d] && "object" === typeof b[d] && !tb(a[d]) && !tb(b[d]) ? O(a[d], b[d]) : b[d] && "object" === typeof b[d] ? (a[d] = tb(b[d]) ? [] : {}, O(a[d], b[d])) : a[d] = b[d])
		},
		ub = function(a) {
			if (a && !/^\s+$/.test(a)) {
				for (; 0 == a.charCodeAt(a.length - 1);) a = a.substring(0, a.length - 1);
				try {
					var b = window.JSON.parse(a)
				} catch (c) {}
				if ("object" === typeof b) return b;
				try {
					b = (new Function("return (" + a + "\n)"))()
				} catch (c) {}
				if ("object" === typeof b) return b;
				try {
					b = (new Function("return ({" + a + "\n})"))()
				} catch (c) {}
				return "object" === typeof b ? b : {}
			}
		},
		vb = function(a, b) {
			var c = {
				___goc: void 0
			};
			a.length && a[a.length - 1] && Object.hasOwnProperty.call(a[a.length - 1], "___goc") && "undefined" === typeof a[a.length - 1].___goc && (c = a.pop());
			O(c, b);
			a.push(c)
		},
		wb = function(a) {
			N(!0);
			var b = window.___gcfg,
				c = M("cu"),
				d = window.___gu;
			b && b !== d && (vb(c, b), window.___gu = b);
			b = M("cu");
			var e = document.scripts || document.getElementsByTagName("script") || [];
			d = [];
			var f = [];
			f.push.apply(f, M("us"));
			for (var g = 0; g < e.length; ++g)
				for (var h = e[g], k = 0; k < f.length; ++k) h.src && 0 == h.src.indexOf(f[k]) && d.push(h);
			0 == d.length && 0 < e.length && e[e.length - 1].src && d.push(e[e.length - 1]);
			for (e = 0; e < d.length; ++e) d[e].getAttribute("gapi_processed") || (d[e].setAttribute("gapi_processed", !0), (f = d[e]) ? (g = f.nodeType, f = 3 == g || 4 == g ? f.nodeValue : f.textContent || f.innerText || f.innerHTML || "") : f = void 0, (f = ub(f)) && b.push(f));
			a && vb(c, a);
			d = M("cd");
			a = 0;
			for (b = d.length; a < b; ++a) O(N(), d[a], !0);
			d = M("ci");
			a = 0;
			for (b = d.length; a < b; ++a) O(N(), d[a], !0);
			a = 0;
			for (b = c.length; a < b; ++a) O(N(), c[a], !0)
		},
		P = function(a) {
			var b = N();
			if (!a) return b;
			a = a.split("/");
			for (var c = 0, d = a.length; b && "object" === typeof b && c < d; ++c) b = b[a[c]];
			return c === a.length && void 0 !== b ? b : void 0
		},
		xb = function(a, b) {
			var c;
			if ("string" === typeof a) {
				var d = c = {};
				a = a.split("/");
				for (var e = 0, f = a.length; e < f - 1; ++e) {
					var g = {};
					d = d[a[e]] = g
				}
				d[a[e]] = b
			} else c = a;
			wb(c)
		};
	var yb = function() {
		var a = window.__GOOGLEAPIS;
		a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis), v(F, "ci", []).push(a), window.__GOOGLEAPIS = void 0)
	};
	var zb = {
			apppackagename: 1,
			callback: 1,
			clientid: 1,
			cookiepolicy: 1,
			openidrealm: -1,
			includegrantedscopes: -1,
			requestvisibleactions: 1,
			scope: 1
		},
		Ab = !1,
		Bb = w(),
		Cb = function() {
			if (!Ab) {
				for (var a = document.getElementsByTagName("meta"), b = 0; b < a.length; ++b) {
					var c = a[b].name.toLowerCase();
					if (0 == c.lastIndexOf("google-signin-", 0)) {
						c = c.substring(14);
						var d = a[b].content;
						zb[c] && d && (Bb[c] = d)
					}
				}
				if (window.self !== window.top) {
					a = document.location.toString();
					for (var e in zb) 0 < zb[e] && (b = C(a, e, "")) && (Bb[e] = b)
				}
				Ab = !0
			}
			e = w();
			z(Bb, e);
			return e
		},
		Db = function(a) {
			return !!(a.clientid && a.scope && a.callback)
		};
	var Eb = window.console,
		Fb = function(a) {
			Eb && Eb.log && Eb.log(a)
		};
	var Gb = function() {
			return !!F.oa
		},
		Hb = function() {};
	var Q = v(F, "rw", w()),
		Ib = function(a) {
			for (var b in Q) a(Q[b])
		},
		Jb = function(a, b) {
			(a = Q[a]) && a.state < b && (a.state = b)
		};
	var Kb;
	var Lb = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//,
		Mb = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/b\/(\d{10,21})\//,
		Nb = function(a) {
			var b = P("googleapis.config/sessionIndex");
			"string" === typeof b && 254 < b.length && (b = null);
			null == b && (b = window.__X_GOOG_AUTHUSER);
			"string" === typeof b && 254 < b.length && (b = null);
			if (null == b) {
				var c = window.google;
				c && (b = c.authuser)
			}
			"string" === typeof b && 254 < b.length && (b = null);
			null == b && (a = a || window.location.href, b = C(a, "authuser") || null, null == b && (b = (b = a.match(Lb)) ? b[1] : null));
			if (null == b) return null;
			b = String(b);
			254 < b.length && (b = null);
			return b
		},
		Ob = function(a) {
			var b = P("googleapis.config/sessionDelegate");
			"string" === typeof b && 21 < b.length && (b = null);
			null == b && (b = (a = (a || window.location.href).match(Mb)) ? a[1] : null);
			if (null == b) return null;
			b = String(b);
			21 < b.length && (b = null);
			return b
		};
	var Pb, R, S = void 0,
		T = function(a) {
			try {
				return m.JSON.parse.call(m.JSON, a)
			} catch (b) {
				return !1
			}
		},
		U = function(a) {
			return Object.prototype.toString.call(a)
		},
		Qb = U(0),
		Rb = U(new Date(0)),
		Sb = U(!0),
		Tb = U(""),
		Ub = U({}),
		Vb = U([]),
		V = function(a, b) {
			if (b)
				for (var c = 0, d = b.length; c < d; ++c)
					if (a === b[c]) throw new TypeError("Converting circular structure to JSON");
			d = typeof a;
			if ("undefined" !== d) {
				c = Array.prototype.slice.call(b || [], 0);
				c[c.length] = a;
				b = [];
				var e = U(a);
				if (null != a && "function" === typeof a.toJSON && (Object.prototype.hasOwnProperty.call(a, "toJSON") || (e !== Vb || a.constructor !== Array && a.constructor !== Object) && (e !== Ub || a.constructor !== Array && a.constructor !== Object) && e !== Tb && e !== Qb && e !== Sb && e !== Rb)) return V(a.toJSON.call(a), c);
				if (null == a) b[b.length] = "null";
				else if (e === Qb) a = Number(a), isNaN(a) || isNaN(a - a) ? a = "null" : -0 === a && 0 > 1 / a && (a = "-0"), b[b.length] = String(a);
				else if (e === Sb) b[b.length] = String(!!Number(a));
				else {
					if (e === Rb) return V(a.toISOString.call(a), c);
					if (e === Vb && U(a.length) === Qb) {
						b[b.length] = "[";
						var f = 0;
						for (d = Number(a.length) >> 0; f < d; ++f) f && (b[b.length] = ","), b[b.length] = V(a[f], c) || "null";
						b[b.length] = "]"
					} else if (e == Tb && U(a.length) === Qb) {
						b[b.length] = '"';
						f = 0;
						for (c = Number(a.length) >> 0; f < c; ++f) d = String.prototype.charAt.call(a, f), e = String.prototype.charCodeAt.call(a, f), b[b.length] = "\b" === d ? "\\b" : "\f" === d ? "\\f" : "\n" === d ? "\\n" : "\r" === d ? "\\r" : "\t" === d ? "\\t" : "\\" === d || '"' === d ? "\\" + d : 31 >= e ? "\\u" + (e + 65536).toString(16).substr(1) : 32 <= e && 65535 >= e ? d : "\ufffd";
						b[b.length] = '"'
					} else if ("object" === d) {
						b[b.length] = "{";
						d = 0;
						for (f in a) Object.prototype.hasOwnProperty.call(a, f) && (e = V(a[f], c), void 0 !== e && (d++ && (b[b.length] = ","), b[b.length] = V(f), b[b.length] = ":", b[b.length] = e));
						b[b.length] = "}"
					} else return
				}
				return b.join("")
			}
		},
		Wb = /[\0-\x07\x0b\x0e-\x1f]/,
		Xb = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/,
		Yb = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/,
		Zb = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/,
		$b = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g,
		ac = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g,
		bc = /[ \t\n\r]+/g,
		cc = /[^"]:/,
		dc = /""/g,
		ec = /true|false|null/g,
		fc = /00/,
		gc = /[\{]([^0\}]|0[^:])/,
		hc = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/,
		ic = /[^\[,:][\[\{]/,
		jc = /^(\{|\}|\[|\]|,|:|0)+/,
		kc = /\u2028/g,
		lc = /\u2029/g,
		mc = function(a) {
			a = String(a);
			if (Wb.test(a) || Xb.test(a) || Yb.test(a) || Zb.test(a)) return !1;
			var b = a.replace($b, '""');
			b = b.replace(ac, "0");
			b = b.replace(bc, "");
			if (cc.test(b)) return !1;
			b = b.replace(dc, "0");
			b = b.replace(ec, "0");
			if (fc.test(b) || gc.test(b) || hc.test(b) || ic.test(b) || !b || (b = b.replace(jc, ""))) return !1;
			a = a.replace(kc, "\\u2028").replace(lc, "\\u2029");
			b = void 0;
			try {
				b = S ? [T(a)] : eval("(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" + a + "\n)")
			} catch (c) {
				return !1
			}
			return b && 1 === b.length ? b[0] : !1
		},
		nc = function() {
			var a = ((m.document || {}).scripts || []).length;
			if ((void 0 === Pb || void 0 === S || R !== a) && -1 !== R) {
				Pb = S = !1;
				R = -1;
				try {
					try {
						S = !!m.JSON && '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' === m.JSON.stringify.call(m.JSON, {
							a: [3, !0, new Date(0)],
							c: function() {}
						}) && !0 === T("true") && 3 === T('[{"a":3}]')[0].a
					} catch (b) {}
					Pb = S && !T("[00]") && !T('"\u0007"') && !T('"\\0"') && !T('"\\v"')
				} finally {
					R = a
				}
			}
		},
		oc = function(a) {
			if (-1 === R) return !1;
			nc();
			return (Pb ? T : mc)(a)
		},
		pc = function(a) {
			if (-1 !== R) return nc(), S ? m.JSON.stringify.call(m.JSON, a) : V(a)
		},
		qc = !Date.prototype.toISOString || "function" !== typeof Date.prototype.toISOString || "1970-01-01T00:00:00.000Z" !== (new Date(0)).toISOString(),
		rc = function() {
			var a = Date.prototype.getUTCFullYear.call(this);
			return [0 > a ? "-" + String(1E6 - a).substr(1) : 9999 >= a ? String(1E4 + a).substr(1) : "+" + String(1E6 + a).substr(1), "-", String(101 + Date.prototype.getUTCMonth.call(this)).substr(1), "-", String(100 + Date.prototype.getUTCDate.call(this)).substr(1), "T", String(100 + Date.prototype.getUTCHours.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1), ".", String(1E3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1), "Z"].join("")
		};
	Date.prototype.toISOString = qc ? rc : Date.prototype.toISOString;
	var sc = function() {
		this.j = -1
	};
	var W = function() {
		this.j = 64;
		this.b = [];
		this.F = [];
		this.W = [];
		this.B = [];
		this.B[0] = 128;
		for (var a = 1; a < this.j; ++a) this.B[a] = 0;
		this.C = this.o = 0;
		this.reset()
	};
	da(W, sc);
	W.prototype.reset = function() {
		this.b[0] = 1732584193;
		this.b[1] = 4023233417;
		this.b[2] = 2562383102;
		this.b[3] = 271733878;
		this.b[4] = 3285377520;
		this.C = this.o = 0
	};
	var tc = function(a, b, c) {
		c || (c = 0);
		var d = a.W;
		if ("string" == typeof b)
			for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
		else
			for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
		for (e = 16; 80 > e; e++) {
			var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
			d[e] = (f << 1 | f >>> 31) & 4294967295
		}
		b = a.b[0];
		c = a.b[1];
		var g = a.b[2],
			h = a.b[3],
			k = a.b[4];
		for (e = 0; 80 > e; e++) {
			if (40 > e)
				if (20 > e) {
					f = h ^ c & (g ^ h);
					var l = 1518500249
				} else f = c ^ g ^ h, l = 1859775393;
			else 60 > e ? (f = c & g | h & (c | g), l = 2400959708) : (f = c ^ g ^ h, l = 3395469782);
			f = (b << 5 | b >>> 27) + f + k + l + d[e] & 4294967295;
			k = h;
			h = g;
			g = (c << 30 | c >>> 2) & 4294967295;
			c = b;
			b = f
		}
		a.b[0] = a.b[0] + b & 4294967295;
		a.b[1] = a.b[1] + c & 4294967295;
		a.b[2] = a.b[2] + g & 4294967295;
		a.b[3] = a.b[3] + h & 4294967295;
		a.b[4] = a.b[4] + k & 4294967295
	};
	W.prototype.update = function(a, b) {
		if (null != a) {
			void 0 === b && (b = a.length);
			for (var c = b - this.j, d = 0, e = this.F, f = this.o; d < b;) {
				if (0 == f)
					for (; d <= c;) tc(this, a, d), d += this.j;
				if ("string" == typeof a)
					for (; d < b;) {
						if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.j) {
							tc(this, e);
							f = 0;
							break
						}
					} else
						for (; d < b;)
							if (e[f] = a[d], ++f, ++d, f == this.j) {
								tc(this, e);
								f = 0;
								break
							}
			}
			this.o = f;
			this.C += b
		}
	};
	W.prototype.digest = function() {
		var a = [],
			b = 8 * this.C;
		56 > this.o ? this.update(this.B, 56 - this.o) : this.update(this.B, this.j - (this.o - 56));
		for (var c = this.j - 1; 56 <= c; c--) this.F[c] = b & 255, b /= 256;
		tc(this, this.F);
		for (c = b = 0; 5 > c; c++)
			for (var d = 24; 0 <= d; d -= 8) a[b] = this.b[c] >> d & 255, ++b;
		return a
	};
	var uc = function() {
		this.J = new W
	};
	uc.prototype.reset = function() {
		this.J.reset()
	};
	var vc = p.crypto,
		wc = !1,
		xc = 0,
		yc = 0,
		zc = 1,
		Ac = 0,
		Bc = "",
		Cc = function(a) {
			a = a || p.event;
			var b = a.screenX + a.clientX << 16;
			b += a.screenY + a.clientY;
			b *= (new Date).getTime() % 1E6;
			zc = zc * b % Ac;
			0 < xc && ++yc == xc && Ea("mousemove", Cc, "remove", "de")
		},
		Dc = function(a) {
			var b = new uc;
			a = unescape(encodeURIComponent(a));
			for (var c = [], d = 0, e = a.length; d < e; ++d) c.push(a.charCodeAt(d));
			b.J.update(c);
			b = b.J.digest();
			a = "";
			for (c = 0; c < b.length; c++) a += "0123456789ABCDEF".charAt(Math.floor(b[c] / 16)) + "0123456789ABCDEF".charAt(b[c] % 16);
			return a
		};
	wc = !!vc && "function" == typeof vc.getRandomValues;
	wc || (Ac = 1E6 * (screen.width * screen.width + screen.height), Bc = Dc(t.cookie + "|" + t.location + "|" + (new Date).getTime() + "|" + Math.random()), xc = P("random/maxObserveMousemove") || 0, 0 != xc && Ea("mousemove", Cc, "add", "at"));
	var Ec = function() {
			var a = zc;
			a += parseInt(Bc.substr(0, 20), 16);
			Bc = Dc(Bc);
			return a / (Ac + Math.pow(16, 20))
		},
		Fc = function() {
			var a = new p.Uint32Array(1);
			vc.getRandomValues(a);
			return Number("0." + a[0])
		};
	var Gc = function() {
			var a = F.onl;
			if (!a) {
				a = w();
				F.onl = a;
				var b = w();
				a.e = function(a) {
					var c = b[a];
					c && (delete b[a], c())
				};
				a.a = function(a, d) {
					b[a] = d
				};
				a.r = function(a) {
					delete b[a]
				}
			}
			return a
		},
		Hc = function(a, b) {
			b = b.onload;
			return "function" === typeof b ? (Gc().a(a, b), b) : null
		},
		Ic = function(a) {
			A(/^\w+$/.test(a), "Unsupported id - " + a);
			Gc();
			return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"'
		},
		Jc = function(a) {
			Gc().r(a)
		};
	var Kc = {
			allowtransparency: "true",
			frameborder: "0",
			hspace: "0",
			marginheight: "0",
			marginwidth: "0",
			scrolling: "no",
			style: "",
			tabindex: "0",
			vspace: "0",
			width: "100%"
		},
		Lc = {
			allowtransparency: !0,
			onload: !0
		},
		Mc = 0,
		Nc = function(a) {
			A(!a || Da.test(a), "Illegal url for new iframe - " + a)
		},
		Oc = function(a, b, c, d, e) {
			Nc(c.src);
			var f, g = Hc(d, c),
				h = g ? Ic(d) : "";
			try {
				document.all && (f = a.createElement('<iframe frameborder="' + pa(String(c.frameborder)) + '" scrolling="' + pa(String(c.scrolling)) + '" ' + h + ' name="' + pa(String(c.name)) + '"/>'))
			} catch (l) {} finally {
				f || (f = a.createElement("iframe"), g && (f.onload = function() {
					f.onload = null;
					g.call(this)
				}, Jc(d)))
			}
			f.setAttribute("ng-non-bindable", "");
			for (var k in c) a = c[k], "style" === k && "object" === typeof a ? z(a, f.style) : Lc[k] || f.setAttribute(k, String(a));
			(k = e && e.beforeNode || null) || e && e.dontclear || Ja(b);
			b.insertBefore(f, k);
			f = k ? k.previousSibling : b.lastChild;
			c.allowtransparency && (f.allowTransparency = !0);
			return f
		};
	var Pc = /^:[\w]+$/,
		Qc = /:([a-zA-Z_]+):/g,
		Rc = function() {
			var a = Nb() || "0",
				b = Ob();
			var c = Nb(void 0) || a;
			var d = Ob(void 0),
				e = "";
			c && (e += "u/" + encodeURIComponent(String(c)) + "/");
			d && (e += "b/" + encodeURIComponent(String(d)) + "/");
			c = e || null;
			(e = (d = !1 === P("isLoggedIn")) ? "_/im/" : "") && (c = "");
			var f = P("iframes/:socialhost:"),
				g = P("iframes/:im_socialhost:");
			return Kb = {
				socialhost: f,
				ctx_socialhost: d ? g : f,
				session_index: a,
				session_delegate: b,
				session_prefix: c,
				im_prefix: e
			}
		},
		Sc = function(a, b) {
			return Rc()[b] || ""
		},
		Tc = function(a) {
			return function(b, c) {
				return a ? Rc()[c] || a[c] || "" : Rc()[c] || ""
			}
		};
	var Uc = function(a) {
			var b;
			a.match(/^https?%3A/i) && (b = decodeURIComponent(a));
			return Ca(document, b ? b : a)
		},
		Vc = function(a) {
			a = a || "canonical";
			for (var b = document.getElementsByTagName("link"), c = 0, d = b.length; c < d; c++) {
				var e = b[c],
					f = e.getAttribute("rel");
				if (f && f.toLowerCase() == a && (e = e.getAttribute("href")) && (e = Uc(e)) && null != e.match(/^https?:\/\/[\w\-_\.]+/i)) return e
			}
			return window.location.href
		};
	var Wc = {
			se: "0"
		},
		Xc = {
			post: !0
		},
		Yc = {
			style: "position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"
		},
		Zc = "onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" "),
		$c = v(F, "WI", w()),
		ad = function(a, b, c) {
			var d;
			var e = {};
			var f = d = a;
			"plus" == a && b.action && (d = a + "_" + b.action, f = a + "/" + b.action);
			(d = P("iframes/" + d + "/url")) || (d = ":im_socialhost:/:session_prefix::im_prefix:_/widget/render/" + f + "?usegapi=1");
			for (var g in Wc) e[g] = g + "/" + (b[g] || Wc[g]) + "/";
			e = Ca(t, d.replace(Qc, Tc(e)));
			g = "iframes/" + a + "/params/";
			f = {};
			z(b, f);
			(d = P("lang") || P("gwidget/lang")) && (f.hl = d);
			Xc[a] || (f.origin = window.location.origin || window.location.protocol + "//" + window.location.host);
			f.exp = P(g + "exp");
			if (g = P(g + "location"))
				for (d = 0; d < g.length; d++) {
					var h = g[d];
					f[h] = p.location[h]
				}
			switch (a) {
				case "plus":
				case "follow":
					g = f.href;
					d = b.action ? void 0 : "publisher";
					g = (g = "string" == typeof g ? g : void 0) ? Uc(g) : Vc(d);
					f.url = g;
					delete f.href;
					break;
				case "plusone":
					g = (g = b.href) ? Uc(g) : Vc();
					f.url = g;
					g = b.db;
					d = P();
					null == g && d && (g = d.db, null == g && (g = d.gwidget && d.gwidget.db));
					f.db = g || void 0;
					g = b.ecp;
					d = P();
					null == g && d && (g = d.ecp, null == g && (g = d.gwidget && d.gwidget.ecp));
					f.ecp = g || void 0;
					delete f.href;
					break;
				case "signin":
					f.url = Vc()
			}
			F.ILI && (f.iloader = "1");
			delete f["data-onload"];
			delete f.rd;
			for (var k in Wc) f[k] && delete f[k];
			f.gsrc = P("iframes/:source:");
			k = P("inline/css");
			"undefined" !== typeof k && 0 < c && k >= c && (f.ic = "1");
			k = /^#|^fr-/;
			c = {};
			for (var l in f) x(f, l) && k.test(l) && (c[l.replace(k, "")] = f[l], delete f[l]);
			l = "q" == P("iframes/" + a + "/params/si") ? f : c;
			k = Cb();
			for (var q in k) !x(k, q) || x(f, q) || x(c, q) || (l[q] = k[q]);
			q = [].concat(Zc);
			(l = P("iframes/" + a + "/methods")) && "object" === typeof l && ha.test(l.push) && (q = q.concat(l));
			for (var n in b) x(b, n) && /^on/.test(n) && ("plus" != a || "onconnect" != n) && (q.push(n), delete f[n]);
			delete f.callback;
			c._methods = q.join(",");
			return za(e, f, c)
		},
		bd = ["style", "data-gapiscan"],
		dd = function(a) {
			for (var b = w(), c = 0 != a.nodeName.toLowerCase().indexOf("g:"), d = 0, e = a.attributes.length; d < e; d++) {
				var f = a.attributes[d],
					g = f.name,
					h = f.value;
				0 <= ia.call(bd, g) || c && 0 != g.indexOf("data-") || "null" === h || "specified" in f && !f.specified || (c && (g = g.substr(5)), b[g.toLowerCase()] = h)
			}
			a = a.style;
			(c = cd(a && a.height)) && (b.height = String(c));
			(a = cd(a && a.width)) && (b.width = String(a));
			return b
		},
		cd = function(a) {
			var b = void 0;
			"number" === typeof a ? b = a : "string" === typeof a && (b = parseInt(a, 10));
			return b
		},
		fd = function() {
			var a = F.drw;
			Ib(function(b) {
				if (a !== b.id && 4 != b.state && "share" != b.type) {
					var c = b.id,
						d = b.type,
						e = b.url;
					b = b.userParams;
					var f = t.getElementById(c);
					if (f) {
						var g = ad(d, b, 0);
						g ? (f = f.parentNode, e.replace(/#.*/, "").replace(/(\?|&)ic=1/, "") !== g.replace(/#.*/, "").replace(/(\?|&)ic=1/, "") && (b.dontclear = !0, b.rd = !0, b.ri = !0, b.type = d, ed(f, b), (d = Q[f.lastChild.id]) && (d.oid = c), Jb(c, 4))) : delete Q[c]
					} else delete Q[c]
				}
			})
		};
	var gd, hd, X, id, jd, kd = /(?:^|\s)g-((\S)*)(?:$|\s)/,
		ld = {
			plusone: !0,
			autocomplete: !0,
			profile: !0,
			signin: !0,
			signin2: !0
		};
	gd = v(F, "SW", w());
	hd = v(F, "SA", w());
	X = v(F, "SM", w());
	id = v(F, "FW", []);
	jd = null;
	var nd = function(a, b) {
			md(void 0, !1, a, b)
		},
		md = function(a, b, c, d) {
			G("ps0", !0);
			c = ("string" === typeof c ? document.getElementById(c) : c) || t;
			var e = t.documentMode;
			if (c.querySelectorAll && (!e || 8 < e)) {
				e = d ? [d] : qa(gd).concat(qa(hd)).concat(qa(X));
				for (var f = [], g = 0; g < e.length; g++) {
					var h = e[g];
					f.push(".g-" + h, "g\\:" + h)
				}
				e = c.querySelectorAll(f.join(","))
			} else e = c.getElementsByTagName("*");
			c = w();
			for (f = 0; f < e.length; f++) {
				g = e[f];
				var k = g;
				h = d;
				var l = k.nodeName.toLowerCase(),
					q = void 0;
				if (k.getAttribute("data-gapiscan")) h = null;
				else {
					var n = l.indexOf("g:");
					0 == n ? q = l.substr(2) : (n = (n = String(k.className || k.getAttribute("class"))) && kd.exec(n)) && (q = n[1]);
					h = !q || !(gd[q] || hd[q] || X[q]) || h && q !== h ? null : q
				}
				h && (ld[h] || 0 == g.nodeName.toLowerCase().indexOf("g:") || 0 != qa(dd(g)).length) && (g.setAttribute("data-gapiscan", !0), v(c, h, []).push(g))
			}
			if (b)
				for (var r in c)
					for (b = c[r], d = 0; d < b.length; d++) b[d].setAttribute("data-onload", !0);
			for (var u in c) id.push(u);
			G("ps1", !0);
			if ((r = id.join(":")) || a) try {
				B.load(r, a)
			} catch (E) {
				Fb(E);
				return
			}
			if (od(jd || {}))
				for (var y in c) {
					a = c[y];
					u = 0;
					for (b = a.length; u < b; u++) a[u].removeAttribute("data-gapiscan");
					pd(y)
				} else {
					d = [];
					for (y in c)
						for (a = c[y], u = 0, b = a.length; u < b; u++) e = a[u], qd(y, e, dd(e), d, b);
					rd(r, d)
				}
		},
		sd = function(a) {
			var b = v(B, a, {});
			b.go || (b.go = function(b) {
				return nd(b, a)
			}, b.render = function(b, d) {
				d = d || {};
				d.type = a;
				return ed(b, d)
			})
		},
		td = function(a) {
			gd[a] = !0
		},
		ud = function(a) {
			hd[a] = !0
		},
		vd = function(a) {
			X[a] = !0
		};
	var pd = function(a, b) {
			var c = Na(a);
			b && c ? (c(b), (c = b.iframeNode) && c.setAttribute("data-gapiattached", !0)) : B.load(a, function() {
				var c = Na(a),
					e = b && b.iframeNode,
					f = b && b.userParams;
				e && c ? (c(b), e.setAttribute("data-gapiattached", !0)) : (c = B[a].go, "signin2" == a ? c(e, f) : c(e && e.parentNode, f))
			})
		},
		od = function() {
			return !1
		},
		rd = function() {},
		qd = function(a, b, c, d, e, f, g) {
			switch (wd(b, a, f)) {
				case 0:
					a = X[a] ? a + "_annotation" : a;
					d = {};
					d.iframeNode = b;
					d.userParams = c;
					pd(a, d);
					break;
				case 1:
					if (b.parentNode) {
						for (var h in c) {
							if (f = x(c, h)) f = c[h],
								f = !!f && "object" === typeof f && (!f.toString || f.toString === Object.prototype.toString || f.toString === Array.prototype.toString);
							if (f) try {
								c[h] = pc(c[h])
							} catch (y) {
								delete c[h]
							}
						}
						f = !0;
						c.dontclear && (f = !1);
						delete c.dontclear;
						Hb();
						h = ad(a, c, e);
						e = g || {};
						e.allowPost = 1;
						e.attributes = Yc;
						e.dontclear = !f;
						g = {};
						g.userParams = c;
						g.url = h;
						g.type = a;
						if (c.rd) var k = b;
						else k = document.createElement("div"), b.setAttribute("data-gapistub", !0), k.style.cssText = "position:absolute;width:450px;left:-10000px;", b.parentNode.insertBefore(k, b);
						g.siteElement = k;
						k.id || (b = k, v($c, a, 0), f = "___" + a + "_" + $c[a]++, b.id = f);
						b = w();
						b[">type"] = a;
						z(c, b);
						f = h;
						c = k;
						h = e || {};
						b = h.attributes || {};
						A(!(h.allowPost || h.forcePost) || !b.onload, "onload is not supported by post iframe (allowPost or forcePost)");
						e = b = f;
						Pc.test(b) && (e = P("iframes/" + e.substring(1) + "/url"), A(!!e, "Unknown iframe url config for - " + b));
						f = Ca(t, e.replace(Qc, Sc));
						b = c.ownerDocument || t;
						k = 0;
						do e = h.id || ["I", Mc++, "_", (new Date).getTime()].join(""); while (b.getElementById(e) && 5 > ++k);
						A(5 > k, "Error creating iframe id");
						k = {};
						var l = {};
						b.documentMode && 9 > b.documentMode && (k.hostiemode = b.documentMode);
						z(h.queryParams || {}, k);
						z(h.fragmentParams || {}, l);
						var q = h.pfname;
						var n = w();
						P("iframes/dropLegacyIdParam") || (n.id = e);
						n._gfid = e;
						n.parent = b.location.protocol + "//" + b.location.host;
						var r = C(b.location.href, "parent");
						q = q || "";
						!q && r && (r = C(b.location.href, "_gfid", "") || C(b.location.href, "id", ""), q = C(b.location.href, "pfname", ""), q = r ? q + "/" + r : "");
						q || (r = oc(C(b.location.href, "jcp", ""))) && "object" == typeof r && (q = (q = r.id) ? r.pfname + "/" + q : "");
						n.pfname = q;
						h.connectWithJsonParam && (r = {}, r.jcp = pc(n), n = r);
						r = C(f, "rpctoken") || k.rpctoken || l.rpctoken;
						r || (r = h.rpctoken || String(Math.round(1E8 * (wc ? Fc() : Ec()))), n.rpctoken = r);
						h.rpctoken = r;
						z(n, h.connectWithQueryParams ? k : l);
						r = b.location.href;
						n = w();
						(q = C(r, "_bsh", F.bsh)) && (n._bsh = q);
						(r = La(r)) && (n.jsh = r);
						h.hintInFragment ? z(n, l) : z(n, k);
						f = za(f, k, l, h.paramsSerializer);
						l = w();
						z(Kc, l);
						z(h.attributes, l);
						l.name = l.id = e;
						l.src = f;
						h.eurl = f;
						k = h || {};
						n = !!k.allowPost;
						if (k.forcePost || n && 2E3 < f.length) {
							k = D(f);
							l.src = "";
							l["data-postorigin"] = f;
							f = Oc(b, c, l, e);
							if (-1 != navigator.userAgent.indexOf("WebKit")) {
								var u = f.contentWindow.document;
								u.open();
								l = u.createElement("div");
								n = {};
								r = e + "_inner";
								n.name = r;
								n.src = "";
								n.style = "display:none";
								Oc(b, l, n, r, h)
							}
							l = (h = k.query[0]) ? h.split("&") : [];
							h = [];
							for (n = 0; n < l.length; n++) r = l[n].split("=", 2), h.push([decodeURIComponent(r[0]), decodeURIComponent(r[1])]);
							k.query = [];
							l = xa(k);
							A(Da.test(l), "Invalid URL: " + l);
							k = b.createElement("form");
							k.action = l;
							k.method = "POST";
							k.target = e;
							k.style.display = "none";
							for (e = 0; e < h.length; e++) l = b.createElement("input"), l.type = "hidden", l.name = h[e][0], l.value = h[e][1], k.appendChild(l);
							c.appendChild(k);
							k.submit();
							k.parentNode.removeChild(k);
							u && u.close();
							u = f
						} else u = Oc(b, c, l, e, h);
						g.iframeNode = u;
						g.id = u.getAttribute("id");
						u = g.id;
						c = w();
						c.id = u;
						c.userParams = g.userParams;
						c.url = g.url;
						c.type = g.type;
						c.state = 1;
						Q[u] = c;
						u = g
					} else u = null;
					u && ((g = u.id) && d.push(g), pd(a, u))
			}
		},
		wd = function(a, b, c) {
			if (a && 1 === a.nodeType && b) {
				if (c) return 1;
				if (X[b]) {
					if (Ka[a.nodeName.toLowerCase()]) return (a = a.innerHTML) && a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") ? 0 : 1
				} else {
					if (hd[b]) return 0;
					if (gd[b]) return 1
				}
			}
			return null
		},
		ed = function(a, b) {
			var c = b.type;
			delete b.type;
			var d = ("string" === typeof a ? document.getElementById(a) : a) || void 0;
			if (d) {
				a = {};
				for (var e in b) x(b, e) && (a[e.toLowerCase()] = b[e]);
				a.rd = 1;
				(b = !!a.ri) && delete a.ri;
				e = [];
				qd(c, d, a, e, 0, b, void 0);
				rd(c, e)
			} else Fb("string" === "gapi." + c + ".render: missing element " + typeof a ? a : "")
		};
	v(B, "platform", {}).go = nd;
	od = function(a) {
		for (var b = ["_c", "jsl", "h"], c = 0; c < b.length && a; c++) a = a[b[c]];
		b = La(ea.href);
		return !a || 0 != a.indexOf("n;") && 0 != b.indexOf("n;") && a !== b
	};
	rd = function(a, b) {
		xd(a, b)
	};
	var Ga = function(a) {
			md(a, !0)
		},
		yd = function(a, b) {
			b = b || [];
			for (var c = 0; c < b.length; ++c) a(b[c]);
			for (a = 0; a < b.length; a++) sd(b[a])
		};
	H.push(["platform", function(a, b, c) {
		jd = c;
		b && id.push(b);
		yd(td, a);
		yd(ud, c._c.annotation);
		yd(vd, c._c.bimodal);
		yb();
		wb();
		if ("explicit" != P("parsetags")) {
			Ma(a);
			Db(Cb()) && !P("disableRealtimeCallback") && Hb();
			if (c && (a = c.callback)) {
				var d = ra(a);
				delete c.callback
			}
			Ia(function() {
				Ga(d)
			})
		}
	}]);
	B._pl = !0;
	var zd = function(a) {
		a = (a = Q[a]) ? a.oid : void 0;
		if (a) {
			var b = t.getElementById(a);
			b && b.parentNode.removeChild(b);
			delete Q[a];
			zd(a)
		}
	};
	var Ad = /^\{h:'/,
		Bd = /^!_/,
		Cd = "",
		xd = function(a, b) {
			function c() {
				Ea("message", d, "remove", "de")
			}

			function d(d) {
				var f = d.data,
					h = d.origin;
				if (Dd(f, b)) {
					var k = e;
					e = !1;
					k && G("rqe");
					Ed(a, function() {
						k && G("rqd");
						c();
						for (var a = v(F, "RPMQ", []), b = 0; b < a.length; b++) a[b]({
							data: f,
							origin: h
						})
					})
				}
			}
			if (0 !== b.length) {
				Cd = C(ea.href, "pfname", "");
				var e = !0;
				Ea("message", d, "add", "at");
				L(a, c)
			}
		},
		Dd = function(a, b) {
			a = String(a);
			if (Ad.test(a)) return !0;
			var c = !1;
			Bd.test(a) && (c = !0, a = a.substr(2));
			if (!/^\{/.test(a)) return !1;
			var d = oc(a);
			if (!d) return !1;
			a = d.f;
			if (d.s && a && -1 != ia.call(b, a)) {
				if ("_renderstart" === d.s || d.s === Cd + "/" + a + "::_renderstart")
					if (d = d.a && d.a[c ? 0 : 1], b = t.getElementById(a), Jb(a, 2), d && b && d.width && d.height) {
						a: {
							c = b.parentNode;a = d || {};
							if (Gb()) {
								var e = b.id;
								if (e) {
									d = (d = Q[e]) ? d.state : void 0;
									if (1 === d || 4 === d) break a;
									zd(e)
								}
							}(d = c.nextSibling) && d.getAttribute && d.getAttribute("data-gapistub") && (c.parentNode.removeChild(d), c.style.cssText = "");d = a.width;
							var f = a.height,
								g = c.style;g.textIndent = "0";g.margin = "0";g.padding = "0";g.background = "transparent";g.borderStyle = "none";g.cssFloat = "none";g.styleFloat = "none";g.lineHeight = "normal";g.fontSize = "1px";g.verticalAlign = "baseline";c = c.style;c.display = "inline-block";g = b.style;g.position = "static";g.left = "0";g.top = "0";g.visibility = "visible";d && (c.width = g.width = d + "px");f && (c.height = g.height = f + "px");a.verticalAlign && (c.verticalAlign = a.verticalAlign);e && Jb(e, 3)
						}
						b["data-csi-wdt"] = (new Date).getTime()
					}
				return !0
			}
			return !1
		},
		Ed = function(a, b) {
			L(a, b)
		};
	var Fd = function(a, b) {
			this.H = a;
			a = b || {};
			this.Y = Number(a.maxAge) || 0;
			this.N = a.domain;
			this.R = a.path;
			this.Z = !!a.secure
		},
		Gd = /^[-+/_=.:|%&a-zA-Z0-9@]*$/,
		Hd = /^[A-Z_][A-Z0-9_]{0,63}$/;
	Fd.prototype.read = function() {
		for (var a = this.H + "=", b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
			var d = b[c];
			if (0 == d.indexOf(a)) return d.substr(a.length)
		}
	};
	Fd.prototype.write = function(a, b) {
		if (!Hd.test(this.H)) throw "Invalid cookie name";
		if (!Gd.test(a)) throw "Invalid cookie value";
		a = this.H + "=" + a;
		this.N && (a += ";domain=" + this.N);
		this.R && (a += ";path=" + this.R);
		b = "number" === typeof b ? b : this.Y;
		if (0 <= b) {
			var c = new Date;
			c.setSeconds(c.getSeconds() + b);
			a += ";expires=" + c.toUTCString()
		}
		this.Z && (a += ";secure");
		document.cookie = a;
		return !0
	};
	Fd.prototype.clear = function() {
		this.write("", 0)
	};
	Fd.iterate = function(a) {
		for (var b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
			var d = b[c].split("="),
				e = d.shift();
			a(e, d.join("="))
		}
	};
	var Id = function(a) {
			this.A = a
		},
		Y = {};
	Id.prototype.read = function() {
		if (Y.hasOwnProperty(this.A)) return Y[this.A]
	};
	Id.prototype.write = function(a) {
		Y[this.A] = a;
		return !0
	};
	Id.prototype.clear = function() {
		delete Y[this.A]
	};
	Id.iterate = function(a) {
		for (var b in Y) Y.hasOwnProperty(b) && a(b, Y[b])
	};
	var Jd = "https:" === window.location.protocol,
		Kd = Jd || "http:" === window.location.protocol ? Fd : Id,
		Ld = function(a) {
			var b = a.substr(1),
				c = "",
				d = window.location.hostname;
			if ("" !== b) {
				c = parseInt(b, 10);
				if (isNaN(c)) return null;
				b = d.split(".");
				if (b.length < c - 1) return null;
				b.length == c - 1 && (d = "." + d)
			} else d = "";
			return {
				i: "S" == a.charAt(0),
				domain: d,
				l: c
			}
		},
		Md = function() {
			var a, b = null;
			Kd.iterate(function(c, d) {
				0 === c.indexOf("G_AUTHUSER_") && (c = Ld(c.substring(11)), !a || c.i && !a.i || c.i == a.i && c.l > a.l) && (a = c, b = d)
			});
			return {
				X: a,
				D: b
			}
		};
	var Nd = function(a) {
			if (0 !== a.indexOf("GCSC")) return null;
			var b = {
				P: !1
			};
			a = a.substr(4);
			if (!a) return b;
			var c = a.charAt(0);
			a = a.substr(1);
			var d = a.lastIndexOf("_");
			if (-1 == d) return b;
			var e = Ld(a.substr(d + 1));
			if (null == e) return b;
			a = a.substring(0, d);
			if ("_" !== a.charAt(0)) return b;
			d = "E" === c && e.i;
			return !d && ("U" !== c || e.i) || d && !Jd ? b : {
				P: !0,
				i: d,
				ba: a.substr(1),
				domain: e.domain,
				l: e.l
			}
		},
		Od = function(a) {
			if (!a) return [];
			a = a.split("=");
			return a[1] ? a[1].split("|") : []
		},
		Pd = function(a) {
			a = a.split(":");
			return {
				clientId: a[0].split("=")[1],
				aa: Od(a[1]),
				da: Od(a[2]),
				ca: Od(a[3])
			}
		},
		Qd = function() {
			var a = Md(),
				b = a.X;
			a = a.D;
			if (null !== a) {
				var c;
				Kd.iterate(function(a, d) {
					(a = Nd(a)) && a.P && a.i == b.i && a.l == b.l && (c = d)
				});
				if (c) {
					var d = Pd(c),
						e = d && d.aa[Number(a)];
					d = d && d.clientId;
					if (e) return {
						D: a,
						$: e,
						clientId: d
					}
				}
			}
			return null
		};
	var Z = function() {
		this.M = Rd
	};
	Z.prototype.v = 0;
	Z.prototype.K = 2;
	Z.prototype.M = null;
	Z.prototype.G = !1;
	Z.prototype.U = function() {
		this.G || (this.v = 0, this.G = !0, this.S())
	};
	Z.prototype.S = function() {
		this.G && (this.M() ? this.v = this.K : this.v = Math.min(2 * (this.v || this.K), 120), window.setTimeout(ca(this.S, this), 1E3 * this.v))
	};
	for (var Sd = 0; 64 > Sd; ++Sd);
	var Td = null;
	Gb = function() {
		return F.oa = !0
	};
	Hb = function() {
		F.oa = !0;
		var a = Qd();
		(a = a && a.D) && xb("googleapis.config/sessionIndex", a);
		Td || (Td = v(F, "ss", new Z));
		a = Td;
		a.U && a.U()
	};
	var Rd = function() {
		var a = Qd(),
			b = a && a.$ || null,
			c = a && a.clientId;
		L("auth", {
			callback: function() {
				var a = p.gapi.auth,
					e = {
						client_id: c,
						session_state: b
					};
				a.checkSessionState(e, function(b) {
					var c = e.session_state,
						d = P("isLoggedIn");
					b = P("debug/forceIm") ? !1 : c && b || !c && !b;
					if (d = d != b) xb("isLoggedIn", b), Hb(), fd(), b || ((b = a.signOut) ? b() : (b = a.setToken) && b(null));
					b = Cb();
					var f = P("savedUserState");
					c = a._guss(b.cookiepolicy);
					f = f != c && "undefined" != typeof f;
					xb("savedUserState", c);
					(d || f) && Db(b) && !P("disableRealtimeCallback") && a._pimf(b, !0)
				})
			}
		});
		return !0
	};
	G("bs0", !0, window.gapi._bs);
	G("bs1", !0);
	delete window.gapi._bs;
}).call(this);
gapi.load("", {
	callback: window["gapi_onload"],
	_c: {
		"jsl": {
			"ci": {
				"deviceType": "mobile",
				"oauth-flow": {
					"authUrl": "https://accounts.google.com/o/oauth2/auth",
					"proxyUrl": "https://accounts.google.com/o/oauth2/postmessageRelay",
					"disableOpt": true,
					"idpIframeUrl": "https://accounts.google.com/o/oauth2/iframe",
					"usegapi": false
				},
				"debug": {
					"reportExceptionRate": 0.05,
					"forceIm": false,
					"rethrowException": false,
					"host": "https://apis.google.com"
				},
				"enableMultilogin": true,
				"googleapis.config": {
					"auth": {
						"useFirstPartyAuthV2": true
					}
				},
				"isPlusUser": false,
				"inline": {
					"css": 1
				},
				"disableRealtimeCallback": false,
				"drive_share": {
					"skipInitCommand": true
				},
				"csi": {
					"rate": 0.01
				},
				"client": {
					"cors": false
				},
				"isLoggedIn": true,
				"signInDeprecation": {
					"rate": 0.0
				},
				"include_granted_scopes": true,
				"llang": "en",
				"iframes": {
					"ytsubscribe": {
						"url": "https://www.youtube.com/subscribe_embed?usegapi\u003d1"
					},
					"plus_share": {
						"params": {
							"url": ""
						},
						"url": ":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1"
					},
					":source:": "3p",
					"playemm": {
						"url": "https://play.google.com/work/embedded/search?usegapi\u003d1\u0026usegapi\u003d1"
					},
					"partnersbadge": {
						"url": "https://www.gstatic.com/partners/badge/templates/badge.html?usegapi\u003d1"
					},
					"dataconnector": {
						"url": "https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi\u003d1"
					},
					"shortlists": {
						"url": ""
					},
					"plus_followers": {
						"params": {
							"url": ""
						},
						"url": ":socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1"
					},
					"post": {
						"params": {
							"url": ""
						},
						"url": ":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi\u003d1"
					},
					"signin": {
						"params": {
							"url": ""
						},
						"url": ":socialhost:/:session_prefix:_/widget/render/signin?usegapi\u003d1",
						"methods": ["onauth"]
					},
					"donation": {
						"url": "https://onetoday.google.com/home/donationWidget?usegapi\u003d1"
					},
					"plusone": {
						"params": {
							"count": "",
							"size": "",
							"url": ""
						},
						"url": ":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi\u003d1"
					},
					":im_socialhost:": "https://plus.googleapis.com",
					"backdrop": {
						"url": "https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi\u003d1"
					},
					"visibility": {
						"params": {
							"url": ""
						},
						"url": ":socialhost:/:session_prefix:_/widget/render/visibility?usegapi\u003d1"
					},
					"additnow": {
						"url": "https://apis.google.com/additnow/additnow.html?usegapi\u003d1",
						"methods": ["launchurl"]
					},
					":signuphost:": "https://plus.google.com",
					"community": {
						"url": ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi\u003d1"
					},
					"plus": {
						"url": ":socialhost:/:session_prefix:_/widget/render/badge?usegapi\u003d1"
					},
					"commentcount": {
						"url": ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1"
					},
					"zoomableimage": {
						"url": "https://ssl.gstatic.com/microscope/embed/"
					},
					"appfinder": {
						"url": "https://gsuite.google.com/:session_prefix:marketplace/appfinder?usegapi\u003d1"
					},
					"person": {
						"url": ":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1"
					},
					"savetodrive": {
						"url": "https://drive.google.com/savetodrivebutton?usegapi\u003d1",
						"methods": ["save"]
					},
					"page": {
						"url": ":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1"
					},
					"card": {
						"url": ":socialhost:/:session_prefix:_/hovercard/card"
					},
					"youtube": {
						"params": {
							"location": ["search", "hash"]
						},
						"url": ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi\u003d1",
						"methods": ["scroll", "openwindow"]
					},
					"plus_circle": {
						"params": {
							"url": ""
						},
						"url": ":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi\u003d1"
					},
					"rbr_s": {
						"params": {
							"url": ""
						},
						"url": ":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"
					},
					"udc_webconsentflow": {
						"params": {
							"url": ""
						},
						"url": "https://myaccount.google.com/webconsent?usegapi\u003d1"
					},
					"savetoandroidpay": {
						"url": "https://androidpay.google.com/a/widget/save"
					},
					"blogger": {
						"params": {
							"location": ["search", "hash"]
						},
						"url": ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi\u003d1",
						"methods": ["scroll", "openwindow"]
					},
					"evwidget": {
						"params": {
							"url": ""
						},
						"url": ":socialhost:/:session_prefix:_/events/widget?usegapi\u003d1"
					},
					"surveyoptin": {
						"url": "https://www.google.com/shopping/customerreviews/optin?usegapi\u003d1"
					},
					":socialhost:": "https://apis.google.com",
					"hangout": {
						"url": "https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"
					},
					":gplus_url:": "https://plus.google.com",
					"rbr_i": {
						"params": {
							"url": ""
						},
						"url": ":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"
					},
					"share": {
						"url": ":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi\u003d1"
					},
					"comments": {
						"params": {
							"location": ["search", "hash"]
						},
						"url": ":socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1",
						"methods": ["scroll", "openwindow"]
					},
					"autocomplete": {
						"params": {
							"url": ""
						},
						"url": ":socialhost:/:session_prefix:_/widget/render/autocomplete"
					},
					"ratingbadge": {
						"url": "https://www.google.com/shopping/customerreviews/badge?usegapi\u003d1"
					},
					"appcirclepicker": {
						"url": ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
					},
					"follow": {
						"url": ":socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1"
					},
					"sharetoclassroom": {
						"url": "https://www.gstatic.com/classroom/sharewidget/widget_stable.html?usegapi\u003d1"
					},
					"ytshare": {
						"params": {
							"url": ""
						},
						"url": ":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi\u003d1"
					},
					"family_creation": {
						"params": {
							"url": ""
						},
						"url": "https://families.google.com/webcreation?usegapi\u003d1\u0026usegapi\u003d1"
					},
					"configurator": {
						"url": ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi\u003d1"
					},
					"savetowallet": {
						"url": "https://androidpay.google.com/a/widget/save"
					}
				}
			},
			"h": "m;/_/scs/apps-static/_/js/k\u003doz.gapi.en.weFNIW1Pfew.O/m\u003d__features__/am\u003dAQ/rt\u003dj/d\u003d1/rs\u003dAGLTcCMAueq3vNMBVl-sj3FkggVSA3DLkg",
			"u": "https://apis.google.com/js/platform.js",
			"hee": true,
			"fp": "8123c53e616cb53d6da390586753615ce6490686",
			"dpo": false
		},
		"platform": ["additnow", "backdrop", "blogger", "comments", "commentcount", "community", "family_creation", "follow", "hangout", "page", "partnersbadge", "person", "playemm", "playreview", "plus", "plusone", "post", "savetoandroidpay", "savetodrive", "savetowallet", "shortlists", "signin2", "udc_webconsentflow", "visibility", "youtube", "ytsubscribe", "zoomableimage", "sharetoclassroom", "donation", "ratingbadge", "surveyoptin"],
		"fp": "8123c53e616cb53d6da390586753615ce6490686",
		"annotation": ["interactivepost", "recobar", "signin2", "autocomplete", "profile"],
		"bimodal": ["signin", "share"]
	}
});