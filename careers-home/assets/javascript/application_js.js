function postToTwitter(e, t) {
  window.open(
    "https://twitter.com/share?url=" + t + "&text=" + e,
    "sharer",
    "toolbar=0,status=0,width=650,height=436"
  );
}
function postToFaceBook(e, t, n, i) {
  window.open(
    "https://www.facebook.com/dialog/feed?app_id=454900355422805&display=popup&caption=" +
      encodeURIComponent(e) +
      "&description=" +
      encodeURIComponent(t) +
      "&redirect_uri=" +
      encodeURIComponent("https://facebook.com") +
      "&link=" +
      encodeURIComponent(i) +
      "&picture=" +
      encodeURIComponent(n),
    "sharer",
    "toolbar=0,status=0,width=548,height=325"
  );
}
function copyClip(e) {
  (el = document.createElement("textarea")),
    (el.value = e),
    el.setAttribute("readonly", ""),
    (el.style.position = "absolute"),
    (el.style.left = "-9999px"),
    document.body.appendChild(el),
    el.select(),
    document.execCommand("copy"),
    document.body.removeChild(el);
}
function postToTwitter(e, t, n) {
  window.open(
    "http://twitter.com/share?url=" +
      encodeURIComponent(t) +
      "&text=" +
      encodeURIComponent(e) +
      "&image-src=" +
      encodeURIComponent(n),
    "sharer",
    "toolbar=0,status=0,width=650,height=436"
  );
}
function postToFaceBook(e, t, n, i) {
  window.open(
    "http://www.facebook.com/dialog/feed?app_id=377041813598137&display=popup&name=" +
      encodeURIComponent(e) +
      "&description=" +
      encodeURIComponent(t) +
      "&redirect_uri=" +
      encodeURIComponent("http://facebook.com") +
      "&link=" +
      encodeURIComponent(i) +
      "&source=" +
      encodeURIComponent(n),
    "sharer",
    "toolbar=0,status=0,width=548,height=325"
  );
}
function postToLinkedIn(e, t, n, i) {
  window.open(
    "http://www.linkedin.com/shareArticle?mini=true&url=" +
      n +
      "&title=" +
      e +
      "&summary=" +
      t +
      "&source=" +
      i +
      ', role: "menuitem", tabindex: "-1", target= "_blank'
  );
}
!(function(e, t) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function(e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function(_, e) {
  function s(e) {
    var t = !!e && "length" in e && e.length,
      n = he.type(e);
    return (
      "function" !== n &&
      !he.isWindow(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  function t(e, n, i) {
    if (he.isFunction(n))
      return he.grep(e, function(e, t) {
        return !!n.call(e, t, e) !== i;
      });
    if (n.nodeType)
      return he.grep(e, function(e) {
        return (e === n) !== i;
      });
    if ("string" == typeof n) {
      if (_e.test(n)) return he.filter(n, e, i);
      n = he.filter(n, e);
    }
    return he.grep(e, function(e) {
      return -1 < he.inArray(e, n) !== i;
    });
  }
  function n(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function u(e) {
    var n = {};
    return (
      he.each(e.match(je) || [], function(e, t) {
        n[t] = !0;
      }),
      n
    );
  }
  function o() {
    ie.addEventListener
      ? (ie.removeEventListener("DOMContentLoaded", r),
        _.removeEventListener("load", r))
      : (ie.detachEvent("onreadystatechange", r), _.detachEvent("onload", r));
  }
  function r() {
    (ie.addEventListener ||
      "load" === _.event.type ||
      "complete" === ie.readyState) &&
      (o(), he.ready());
  }
  function l(e, t, n) {
    if (n === undefined && 1 === e.nodeType) {
      var i = "data-" + t.replace(Me, "-$1").toLowerCase();
      if ("string" == typeof (n = e.getAttribute(i))) {
        try {
          n =
            "true" === n ||
            ("false" !== n &&
              ("null" === n
                ? null
                : +n + "" === n
                ? +n
                : Le.test(n)
                ? he.parseJSON(n)
                : n));
        } catch (o) {}
        he.data(e, t, n);
      } else n = undefined;
    }
    return n;
  }
  function c(e) {
    var t;
    for (t in e)
      if (("data" !== t || !he.isEmptyObject(e[t])) && "toJSON" !== t)
        return !1;
    return !0;
  }
  function i(e, t, n, i) {
    if (Ne(e)) {
      var o,
        r,
        a = he.expando,
        s = e.nodeType,
        l = s ? he.cache : e,
        c = s ? e[a] : e[a] && a;
      if (
        (c && l[c] && (i || l[c].data)) ||
        n !== undefined ||
        "string" != typeof t
      )
        return (
          c || (c = s ? (e[a] = ne.pop() || he.guid++) : a),
          l[c] || (l[c] = s ? {} : { toJSON: he.noop }),
          ("object" != typeof t && "function" != typeof t) ||
            (i
              ? (l[c] = he.extend(l[c], t))
              : (l[c].data = he.extend(l[c].data, t))),
          (r = l[c]),
          i || (r.data || (r.data = {}), (r = r.data)),
          n !== undefined && (r[he.camelCase(t)] = n),
          "string" == typeof t
            ? null == (o = r[t]) && (o = r[he.camelCase(t)])
            : (o = r),
          o
        );
    }
  }
  function a(e, t, n) {
    if (Ne(e)) {
      var i,
        o,
        r = e.nodeType,
        a = r ? he.cache : e,
        s = r ? e[he.expando] : he.expando;
      if (a[s]) {
        if (t && (i = n ? a[s] : a[s].data)) {
          o = (t = he.isArray(t)
            ? t.concat(he.map(t, he.camelCase))
            : t in i
            ? [t]
            : (t = he.camelCase(t)) in i
            ? [t]
            : t.split(" ")).length;
          for (; o--; ) delete i[t[o]];
          if (n ? !c(i) : !he.isEmptyObject(i)) return;
        }
        (n || (delete a[s].data, c(a[s]))) &&
          (r
            ? he.cleanData([e], !0)
            : de.deleteExpando || a != a.window
            ? delete a[s]
            : (a[s] = undefined));
      }
    }
  }
  function d(e, t, n, i) {
    var o,
      r = 1,
      a = 20,
      s = i
        ? function() {
            return i.cur();
          }
        : function() {
            return he.css(e, t, "");
          },
      l = s(),
      c = (n && n[3]) || (he.cssNumber[t] ? "" : "px"),
      u = (he.cssNumber[t] || ("px" !== c && +l)) && Re.exec(he.css(e, t));
    if (u && u[3] !== c)
      for (
        c = c || u[3], n = n || [], u = +l || 1;
        (u /= r = r || ".5"),
          he.style(e, t, u + c),
          r !== (r = s() / l) && 1 !== r && --a;

      );
    return (
      n &&
        ((u = +u || +l || 0),
        (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = c), (i.start = u), (i.end = o))),
      o
    );
  }
  function m(e) {
    var t = Ve.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement) for (; t.length; ) n.createElement(t.pop());
    return n;
  }
  function v(e, t) {
    var n,
      i,
      o = 0,
      r =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : undefined;
    if (!r)
      for (r = [], n = e.childNodes || e; null != (i = n[o]); o++)
        !t || he.nodeName(i, t) ? r.push(i) : he.merge(r, v(i, t));
    return t === undefined || (t && he.nodeName(e, t)) ? he.merge([e], r) : r;
  }
  function y(e, t) {
    for (var n, i = 0; null != (n = e[i]); i++)
      he._data(n, "globalEval", !t || he._data(t[i], "globalEval"));
  }
  function w(e) {
    ze.test(e.type) && (e.defaultChecked = e.checked);
  }
  function g(e, t, n, i, o) {
    for (
      var r, a, s, l, c, u, d, f = e.length, h = m(t), p = [], g = 0;
      g < f;
      g++
    )
      if ((a = e[g]) || 0 === a)
        if ("object" === he.type(a)) he.merge(p, a.nodeType ? [a] : a);
        else if (Qe.test(a)) {
          for (
            l = l || h.appendChild(t.createElement("div")),
              c = (Fe.exec(a) || ["", ""])[1].toLowerCase(),
              d = Ye[c] || Ye._default,
              l.innerHTML = d[1] + he.htmlPrefilter(a) + d[2],
              r = d[0];
            r--;

          )
            l = l.lastChild;
          if (
            (!de.leadingWhitespace &&
              Ue.test(a) &&
              p.push(t.createTextNode(Ue.exec(a)[0])),
            !de.tbody)
          )
            for (
              r =
                (a =
                  "table" !== c || Ge.test(a)
                    ? "<table>" !== d[1] || Ge.test(a)
                      ? 0
                      : l
                    : l.firstChild) && a.childNodes.length;
              r--;

            )
              he.nodeName((u = a.childNodes[r]), "tbody") &&
                !u.childNodes.length &&
                a.removeChild(u);
          for (he.merge(p, l.childNodes), l.textContent = ""; l.firstChild; )
            l.removeChild(l.firstChild);
          l = h.lastChild;
        } else p.push(t.createTextNode(a));
    for (
      l && h.removeChild(l),
        de.appendChecked || he.grep(v(p, "input"), w),
        g = 0;
      (a = p[g++]);

    )
      if (i && -1 < he.inArray(a, i)) o && o.push(a);
      else if (
        ((s = he.contains(a.ownerDocument, a)),
        (l = v(h.appendChild(a), "script")),
        s && y(l),
        n)
      )
        for (r = 0; (a = l[r++]); ) Xe.test(a.type || "") && n.push(a);
    return (l = null), h;
  }
  function f() {
    return !0;
  }
  function h() {
    return !1;
  }
  function p() {
    try {
      return ie.activeElement;
    } catch (e) {}
  }
  function x(e, t, n, i, o, r) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((i = i || n), (n = undefined)), t))
        x(e, s, n, i, t[s], r);
      return e;
    }
    if (
      (null == i && null == o
        ? ((o = n), (i = n = undefined))
        : null == o &&
          ("string" == typeof n
            ? ((o = i), (i = undefined))
            : ((o = i), (i = n), (n = undefined))),
      !1 === o)
    )
      o = h;
    else if (!o) return e;
    return (
      1 === r &&
        ((a = o),
        ((o = function(e) {
          return he().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = he.guid++))),
      e.each(function() {
        he.event.add(this, t, o, i, n);
      })
    );
  }
  function b(e, t) {
    return he.nodeName(e, "table") &&
      he.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function C(e) {
    return (e.type = (null !== he.find.attr(e, "type")) + "/" + e.type), e;
  }
  function T(e) {
    var t = st.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function S(e, t) {
    if (1 === t.nodeType && he.hasData(e)) {
      var n,
        i,
        o,
        r = he._data(e),
        a = he._data(t, r),
        s = r.events;
      if (s)
        for (n in (delete a.handle, (a.events = {}), s))
          for (i = 0, o = s[n].length; i < o; i++) he.event.add(t, n, s[n][i]);
      a.data && (a.data = he.extend({}, a.data));
    }
  }
  function k(e, t) {
    var n, i, o;
    if (1 === t.nodeType) {
      if (((n = t.nodeName.toLowerCase()), !de.noCloneEvent && t[he.expando])) {
        for (i in (o = he._data(t)).events) he.removeEvent(t, i, o.handle);
        t.removeAttribute(he.expando);
      }
      "script" === n && t.text !== e.text
        ? ((C(t).text = e.text), T(t))
        : "object" === n
        ? (t.parentNode && (t.outerHTML = e.outerHTML),
          de.html5Clone &&
            e.innerHTML &&
            !he.trim(t.innerHTML) &&
            (t.innerHTML = e.innerHTML))
        : "input" === n && ze.test(e.type)
        ? ((t.defaultChecked = t.checked = e.checked),
          t.value !== e.value && (t.value = e.value))
        : "option" === n
        ? (t.defaultSelected = t.selected = e.defaultSelected)
        : ("input" !== n && "textarea" !== n) ||
          (t.defaultValue = e.defaultValue);
    }
  }
  function E(n, i, o, r) {
    i = re.apply([], i);
    var e,
      t,
      a,
      s,
      l,
      c,
      u = 0,
      d = n.length,
      f = d - 1,
      h = i[0],
      p = he.isFunction(h);
    if (p || (1 < d && "string" == typeof h && !de.checkClone && at.test(h)))
      return n.each(function(e) {
        var t = n.eq(e);
        p && (i[0] = h.call(this, e, t.html())), E(t, i, o, r);
      });
    if (
      d &&
      ((e = (c = g(i, n[0].ownerDocument, !1, n, r)).firstChild),
      1 === c.childNodes.length && (c = e),
      e || r)
    ) {
      for (a = (s = he.map(v(c, "script"), C)).length; u < d; u++)
        (t = c),
          u !== f &&
            ((t = he.clone(t, !0, !0)), a && he.merge(s, v(t, "script"))),
          o.call(n[u], t, u);
      if (a)
        for (l = s[s.length - 1].ownerDocument, he.map(s, T), u = 0; u < a; u++)
          (t = s[u]),
            Xe.test(t.type || "") &&
              !he._data(t, "globalEval") &&
              he.contains(l, t) &&
              (t.src
                ? he._evalUrl && he._evalUrl(t.src)
                : he.globalEval(
                    (t.text || t.textContent || t.innerHTML || "").replace(
                      lt,
                      ""
                    )
                  ));
      c = e = null;
    }
    return n;
  }
  function D(e, t, n) {
    for (var i, o = t ? he.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
      n || 1 !== i.nodeType || he.cleanData(v(i)),
        i.parentNode &&
          (n && he.contains(i.ownerDocument, i) && y(v(i, "script")),
          i.parentNode.removeChild(i));
    return e;
  }
  function $(e, t) {
    var n = he(t.createElement(e)).appendTo(t.body),
      i = he.css(n[0], "display");
    return n.detach(), i;
  }
  function j(e) {
    var t = ie,
      n = dt[e];
    return (
      n ||
        (("none" !== (n = $(e, t)) && n) ||
          ((t = (
            (ut = (
              ut || he("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(t.documentElement))[0].contentWindow ||
            ut[0].contentDocument
          ).document).write(),
          t.close(),
          (n = $(e, t)),
          ut.detach()),
        (dt[e] = n)),
      n
    );
  }
  function A(e, t) {
    return {
      get: function() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }
  function N(e) {
    if (e in kt) return e;
    for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = St.length; n--; )
      if ((e = St[n] + t) in kt) return e;
  }
  function L(e, t) {
    for (var n, i, o, r = [], a = 0, s = e.length; a < s; a++)
      (i = e[a]).style &&
        ((r[a] = he._data(i, "olddisplay")),
        (n = i.style.display),
        t
          ? (r[a] || "none" !== n || (i.style.display = ""),
            "" === i.style.display &&
              qe(i) &&
              (r[a] = he._data(i, "olddisplay", j(i.nodeName))))
          : ((o = qe(i)),
            ((n && "none" !== n) || !o) &&
              he._data(i, "olddisplay", o ? n : he.css(i, "display"))));
    for (a = 0; a < s; a++)
      (i = e[a]).style &&
        ((t && "none" !== i.style.display && "" !== i.style.display) ||
          (i.style.display = t ? r[a] || "" : "none"));
    return e;
  }
  function M(e, t, n) {
    var i = Ct.exec(t);
    return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t;
  }
  function H(e, t, n, i, o) {
    for (
      var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        a = 0;
      r < 4;
      r += 2
    )
      "margin" === n && (a += he.css(e, n + Ie[r], !0, o)),
        i
          ? ("content" === n && (a -= he.css(e, "padding" + Ie[r], !0, o)),
            "margin" !== n &&
              (a -= he.css(e, "border" + Ie[r] + "Width", !0, o)))
          : ((a += he.css(e, "padding" + Ie[r], !0, o)),
            "padding" !== n &&
              (a += he.css(e, "border" + Ie[r] + "Width", !0, o)));
    return a;
  }
  function O(e, t, n) {
    var i = !0,
      o = "width" === t ? e.offsetWidth : e.offsetHeight,
      r = mt(e),
      a = de.boxSizing && "border-box" === he.css(e, "boxSizing", !1, r);
    if (o <= 0 || null == o) {
      if (
        (((o = vt(e, t, r)) < 0 || null == o) && (o = e.style[t]), ht.test(o))
      )
        return o;
      (i = a && (de.boxSizingReliable() || o === e.style[t])),
        (o = parseFloat(o) || 0);
    }
    return o + H(e, t, n || (a ? "border" : "content"), i, r) + "px";
  }
  function B(e, t, n, i, o) {
    return new B.prototype.init(e, t, n, i, o);
  }
  function P() {
    return (
      _.setTimeout(function() {
        Et = undefined;
      }),
      (Et = he.now())
    );
  }
  function R(e, t) {
    var n,
      i = { height: e },
      o = 0;
    for (t = t ? 1 : 0; o < 4; o += 2 - t)
      i["margin" + (n = Ie[o])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function I(e, t, n) {
    for (
      var i,
        o = (z.tweeners[t] || []).concat(z.tweeners["*"]),
        r = 0,
        a = o.length;
      r < a;
      r++
    )
      if ((i = o[r].call(n, t, e))) return i;
  }
  function q(t, e, n) {
    var i,
      o,
      r,
      a,
      s,
      l,
      c,
      u = this,
      d = {},
      f = t.style,
      h = t.nodeType && qe(t),
      p = he._data(t, "fxshow");
    for (i in (n.queue ||
      (null == (s = he._queueHooks(t, "fx")).unqueued &&
        ((s.unqueued = 0),
        (l = s.empty.fire),
        (s.empty.fire = function() {
          s.unqueued || l();
        })),
      s.unqueued++,
      u.always(function() {
        u.always(function() {
          s.unqueued--, he.queue(t, "fx").length || s.empty.fire();
        });
      })),
    1 === t.nodeType &&
      ("height" in e || "width" in e) &&
      ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
      "inline" ===
        ("none" === (c = he.css(t, "display"))
          ? he._data(t, "olddisplay") || j(t.nodeName)
          : c) &&
        "none" === he.css(t, "float") &&
        (de.inlineBlockNeedsLayout && "inline" !== j(t.nodeName)
          ? (f.zoom = 1)
          : (f.display = "inline-block"))),
    n.overflow &&
      ((f.overflow = "hidden"),
      de.shrinkWrapBlocks() ||
        u.always(function() {
          (f.overflow = n.overflow[0]),
            (f.overflowX = n.overflow[1]),
            (f.overflowY = n.overflow[2]);
        })),
    e))
      if (((o = e[i]), Mt.exec(o))) {
        if (
          (delete e[i], (r = r || "toggle" === o), o === (h ? "hide" : "show"))
        ) {
          if ("show" !== o || !p || p[i] === undefined) continue;
          h = !0;
        }
        d[i] = (p && p[i]) || he.style(t, i);
      } else c = undefined;
    if (he.isEmptyObject(d))
      "inline" === ("none" === c ? j(t.nodeName) : c) && (f.display = c);
    else
      for (i in (p
        ? "hidden" in p && (h = p.hidden)
        : (p = he._data(t, "fxshow", {})),
      r && (p.hidden = !h),
      h
        ? he(t).show()
        : u.done(function() {
            he(t).hide();
          }),
      u.done(function() {
        var e;
        for (e in (he._removeData(t, "fxshow"), d)) he.style(t, e, d[e]);
      }),
      d))
        (a = I(h ? p[i] : 0, i, u)),
          i in p ||
            ((p[i] = a.start),
            h &&
              ((a.end = a.start),
              (a.start = "width" === i || "height" === i ? 1 : 0)));
  }
  function W(e, t) {
    var n, i, o, r, a;
    for (n in e)
      if (
        ((o = t[(i = he.camelCase(n))]),
        (r = e[n]),
        he.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
        n !== i && ((e[i] = r), delete e[n]),
        (a = he.cssHooks[i]) && "expand" in a)
      )
        for (n in ((r = a.expand(r)), delete e[i], r))
          n in e || ((e[n] = r[n]), (t[n] = o));
      else t[i] = o;
  }
  function z(r, e, t) {
    var n,
      a,
      i = 0,
      o = z.prefilters.length,
      s = he.Deferred().always(function() {
        delete l.elem;
      }),
      l = function() {
        if (a) return !1;
        for (
          var e = Et || P(),
            t = Math.max(0, c.startTime + c.duration - e),
            n = 1 - (t / c.duration || 0),
            i = 0,
            o = c.tweens.length;
          i < o;
          i++
        )
          c.tweens[i].run(n);
        return (
          s.notifyWith(r, [c, n, t]),
          n < 1 && o ? t : (s.resolveWith(r, [c]), !1)
        );
      },
      c = s.promise({
        elem: r,
        props: he.extend({}, e),
        opts: he.extend(
          !0,
          { specialEasing: {}, easing: he.easing._default },
          t
        ),
        originalProperties: e,
        originalOptions: t,
        startTime: Et || P(),
        duration: t.duration,
        tweens: [],
        createTween: function(e, t) {
          var n = he.Tween(
            r,
            c.opts,
            e,
            t,
            c.opts.specialEasing[e] || c.opts.easing
          );
          return c.tweens.push(n), n;
        },
        stop: function(e) {
          var t = 0,
            n = e ? c.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) c.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(r, [c, 1, 0]), s.resolveWith(r, [c, e]))
              : s.rejectWith(r, [c, e]),
            this
          );
        }
      }),
      u = c.props;
    for (W(u, c.opts.specialEasing); i < o; i++)
      if ((n = z.prefilters[i].call(c, r, u, c.opts)))
        return (
          he.isFunction(n.stop) &&
            (he._queueHooks(c.elem, c.opts.queue).stop = he.proxy(n.stop, n)),
          n
        );
    return (
      he.map(u, I, c),
      he.isFunction(c.opts.start) && c.opts.start.call(r, c),
      he.fx.timer(he.extend(l, { elem: r, anim: c, queue: c.opts.queue })),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always)
    );
  }
  function F(e) {
    return he.attr(e, "class") || "";
  }
  function X(r) {
    return function(e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        i = 0,
        o = e.toLowerCase().match(je) || [];
      if (he.isFunction(t))
        for (; (n = o[i++]); )
          "+" === n.charAt(0)
            ? ((n = n.slice(1) || "*"), (r[n] = r[n] || []).unshift(t))
            : (r[n] = r[n] || []).push(t);
    };
  }
  function U(t, o, r, a) {
    function s(e) {
      var i;
      return (
        (l[e] = !0),
        he.each(t[e] || [], function(e, t) {
          var n = t(o, r, a);
          return "string" != typeof n || c || l[n]
            ? c
              ? !(i = n)
              : void 0
            : (o.dataTypes.unshift(n), s(n), !1);
        }),
        i
      );
    }
    var l = {},
      c = t === an;
    return s(o.dataTypes[0]) || (!l["*"] && s("*"));
  }
  function V(e, t) {
    var n,
      i,
      o = he.ajaxSettings.flatOptions || {};
    for (i in t) t[i] !== undefined && ((o[i] ? e : n || (n = {}))[i] = t[i]);
    return n && he.extend(!0, e, n), e;
  }
  function Y(e, t, n) {
    for (var i, o, r, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
      l.shift(),
        o === undefined &&
          (o = e.mimeType || t.getResponseHeader("Content-Type"));
    if (o)
      for (a in s)
        if (s[a] && s[a].test(o)) {
          l.unshift(a);
          break;
        }
    if (l[0] in n) r = l[0];
    else {
      for (a in n) {
        if (!l[0] || e.converters[a + " " + l[0]]) {
          r = a;
          break;
        }
        i || (i = a);
      }
      r = r || i;
    }
    if (r) return r !== l[0] && l.unshift(r), n[r];
  }
  function Q(e, t, n, i) {
    var o,
      r,
      a,
      s,
      l,
      c = {},
      u = e.dataTypes.slice();
    if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
    for (r = u.shift(); r; )
      if (
        (e.responseFields[r] && (n[e.responseFields[r]] = t),
        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (l = r),
        (r = u.shift()))
      )
        if ("*" === r) r = l;
        else if ("*" !== l && l !== r) {
          if (!(a = c[l + " " + r] || c["* " + r]))
            for (o in c)
              if (
                (s = o.split(" "))[1] === r &&
                (a = c[l + " " + s[0]] || c["* " + s[0]])
              ) {
                !0 === a
                  ? (a = c[o])
                  : !0 !== c[o] && ((r = s[0]), u.unshift(s[1]));
                break;
              }
          if (!0 !== a)
            if (a && e["throws"]) t = a(t);
            else
              try {
                t = a(t);
              } catch (d) {
                return {
                  state: "parsererror",
                  error: a ? d : "No conversion from " + l + " to " + r
                };
              }
        }
    return { state: "success", data: t };
  }
  function G(e) {
    return (e.style && e.style.display) || he.css(e, "display");
  }
  function J(e) {
    if (!he.contains(e.ownerDocument || ie, e)) return !0;
    for (; e && 1 === e.nodeType; ) {
      if ("none" === G(e) || "hidden" === e.type) return !0;
      e = e.parentNode;
    }
    return !1;
  }
  function Z(n, e, i, o) {
    var t;
    if (he.isArray(e))
      he.each(e, function(e, t) {
        i || dn.test(n)
          ? o(n, t)
          : Z(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              i,
              o
            );
      });
    else if (i || "object" !== he.type(e)) o(n, e);
    else for (t in e) Z(n + "[" + t + "]", e[t], i, o);
  }
  function K() {
    try {
      return new _.XMLHttpRequest();
    } catch (e) {}
  }
  function ee() {
    try {
      return new _.ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
  }
  function te(e) {
    return he.isWindow(e)
      ? e
      : 9 === e.nodeType && (e.defaultView || e.parentWindow);
  }
  var ne = [],
    ie = _.document,
    oe = ne.slice,
    re = ne.concat,
    ae = ne.push,
    se = ne.indexOf,
    le = {},
    ce = le.toString,
    ue = le.hasOwnProperty,
    de = {},
    fe = "1.12.4",
    he = function(e, t) {
      return new he.fn.init(e, t);
    },
    pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ge = /^-ms-/,
    me = /-([\da-z])/gi,
    ve = function(e, t) {
      return t.toUpperCase();
    };
  (he.fn = he.prototype = {
    jquery: fe,
    constructor: he,
    selector: "",
    length: 0,
    toArray: function() {
      return oe.call(this);
    },
    get: function(e) {
      return null != e
        ? e < 0
          ? this[e + this.length]
          : this[e]
        : oe.call(this);
    },
    pushStack: function(e) {
      var t = he.merge(this.constructor(), e);
      return (t.prevObject = this), (t.context = this.context), t;
    },
    each: function(e) {
      return he.each(this, e);
    },
    map: function(n) {
      return this.pushStack(
        he.map(this, function(e, t) {
          return n.call(e, t, e);
        })
      );
    },
    slice: function() {
      return this.pushStack(oe.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    },
    push: ae,
    sort: ne.sort,
    splice: ne.splice
  }),
    (he.extend = he.fn.extend = function(e) {
      var t,
        n,
        i,
        o,
        r,
        a,
        s = e || {},
        l = 1,
        c = arguments.length,
        u = !1;
      for (
        "boolean" == typeof s && ((u = s), (s = arguments[l] || {}), l++),
          "object" == typeof s || he.isFunction(s) || (s = {}),
          l === c && ((s = this), l--);
        l < c;
        l++
      )
        if (null != (r = arguments[l]))
          for (o in r)
            (t = s[o]),
              s !== (i = r[o]) &&
                (u && i && (he.isPlainObject(i) || (n = he.isArray(i)))
                  ? (n
                      ? ((n = !1), (a = t && he.isArray(t) ? t : []))
                      : (a = t && he.isPlainObject(t) ? t : {}),
                    (s[o] = he.extend(u, a, i)))
                  : i !== undefined && (s[o] = i));
      return s;
    }),
    he.extend({
      expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
        throw new Error(e);
      },
      noop: function() {},
      isFunction: function(e) {
        return "function" === he.type(e);
      },
      isArray:
        Array.isArray ||
        function(e) {
          return "array" === he.type(e);
        },
      isWindow: function(e) {
        return null != e && e == e.window;
      },
      isNumeric: function(e) {
        var t = e && e.toString();
        return !he.isArray(e) && 0 <= t - parseFloat(t) + 1;
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      isPlainObject: function(e) {
        var t;
        if (!e || "object" !== he.type(e) || e.nodeType || he.isWindow(e))
          return !1;
        try {
          if (
            e.constructor &&
            !ue.call(e, "constructor") &&
            !ue.call(e.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (n) {
          return !1;
        }
        if (!de.ownFirst) for (t in e) return ue.call(e, t);
        for (t in e);
        return t === undefined || ue.call(e, t);
      },
      type: function(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? le[ce.call(e)] || "object"
          : typeof e;
      },
      globalEval: function(e) {
        e &&
          he.trim(e) &&
          (_.execScript ||
            function(e) {
              _.eval.call(_, e);
            })(e);
      },
      camelCase: function(e) {
        return e.replace(ge, "ms-").replace(me, ve);
      },
      nodeName: function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function(e, t) {
        var n,
          i = 0;
        if (s(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim: function(e) {
        return null == e ? "" : (e + "").replace(pe, "");
      },
      makeArray: function(e, t) {
        var n = t || [];
        return (
          null != e &&
            (s(Object(e))
              ? he.merge(n, "string" == typeof e ? [e] : e)
              : ae.call(n, e)),
          n
        );
      },
      inArray: function(e, t, n) {
        var i;
        if (t) {
          if (se) return se.call(t, e, n);
          for (
            i = t.length, n = n ? (n < 0 ? Math.max(0, i + n) : n) : 0;
            n < i;
            n++
          )
            if (n in t && t[n] === e) return n;
        }
        return -1;
      },
      merge: function(e, t) {
        for (var n = +t.length, i = 0, o = e.length; i < n; ) e[o++] = t[i++];
        if (n != n) for (; t[i] !== undefined; ) e[o++] = t[i++];
        return (e.length = o), e;
      },
      grep: function(e, t, n) {
        for (var i = [], o = 0, r = e.length, a = !n; o < r; o++)
          !t(e[o], o) !== a && i.push(e[o]);
        return i;
      },
      map: function(e, t, n) {
        var i,
          o,
          r = 0,
          a = [];
        if (s(e))
          for (i = e.length; r < i; r++)
            null != (o = t(e[r], r, n)) && a.push(o);
        else for (r in e) null != (o = t(e[r], r, n)) && a.push(o);
        return re.apply([], a);
      },
      guid: 1,
      proxy: function(e, t) {
        var n, i, o;
        return (
          "string" == typeof t && ((o = e[t]), (t = e), (e = o)),
          he.isFunction(e)
            ? ((n = oe.call(arguments, 2)),
              ((i = function() {
                return e.apply(t || this, n.concat(oe.call(arguments)));
              }).guid = e.guid = e.guid || he.guid++),
              i)
            : undefined
        );
      },
      now: function() {
        return +new Date();
      },
      support: de
    }),
    "function" == typeof Symbol &&
      (he.fn[Symbol.iterator] = ne[Symbol.iterator]),
    he.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var ye = (function(n) {
    function x(e, t, n, i) {
      var o,
        r,
        a,
        s,
        l,
        c,
        u,
        d,
        f = t && t.ownerDocument,
        h = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
      )
        return n;
      if (
        !i &&
        ((t ? t.ownerDocument || t : I) !== N && A(t), (t = t || N), M)
      ) {
        if (11 !== h && (c = ve.exec(e)))
          if ((o = c[1])) {
            if (9 === h) {
              if (!(a = t.getElementById(o))) return n;
              if (a.id === o) return n.push(a), n;
            } else if (f && (a = f.getElementById(o)) && P(t, a) && a.id === o)
              return n.push(a), n;
          } else {
            if (c[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
            if (
              (o = c[3]) &&
              v.getElementsByClassName &&
              t.getElementsByClassName
            )
              return Z.apply(n, t.getElementsByClassName(o)), n;
          }
        if (v.qsa && !X[e + " "] && (!H || !H.test(e))) {
          if (1 !== h) (f = t), (d = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            for (
              (s = t.getAttribute("id"))
                ? (s = s.replace(we, "\\$&"))
                : t.setAttribute("id", (s = R)),
                r = (u = S(e)).length,
                l = fe.test(s) ? "#" + s : "[id='" + s + "']";
              r--;

            )
              u[r] = l + " " + m(u[r]);
            (d = u.join(",")), (f = (ye.test(e) && g(t.parentNode)) || t);
          }
          if (d)
            try {
              return Z.apply(n, f.querySelectorAll(d)), n;
            } catch (p) {
            } finally {
              s === R && t.removeAttribute("id");
            }
        }
      }
      return E(e.replace(se, "$1"), t, n, i);
    }
    function e() {
      function n(e, t) {
        return (
          i.push(e + " ") > C.cacheLength && delete n[i.shift()],
          (n[e + " "] = t)
        );
      }
      var i = [];
      return n;
    }
    function l(e) {
      return (e[R] = !0), e;
    }
    function o(e) {
      var t = N.createElement("div");
      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function t(e, t) {
      for (var n = e.split("|"), i = n.length; i--; ) C.attrHandle[n[i]] = t;
    }
    function c(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          (~t.sourceIndex || V) - (~e.sourceIndex || V);
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function i(t) {
      return function(e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function r(n) {
      return function(e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function a(a) {
      return l(function(r) {
        return (
          (r = +r),
          l(function(e, t) {
            for (var n, i = a([], e.length, r), o = i.length; o--; )
              e[(n = i[o])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function g(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    function s() {}
    function m(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i;
    }
    function d(s, e, t) {
      var l = e.dir,
        c = t && "parentNode" === l,
        u = W++;
      return e.first
        ? function(e, t, n) {
            for (; (e = e[l]); ) if (1 === e.nodeType || c) return s(e, t, n);
          }
        : function(e, t, n) {
            var i,
              o,
              r,
              a = [q, u];
            if (n) {
              for (; (e = e[l]); )
                if ((1 === e.nodeType || c) && s(e, t, n)) return !0;
            } else
              for (; (e = e[l]); )
                if (1 === e.nodeType || c) {
                  if (
                    (i = (o =
                      (r = e[R] || (e[R] = {}))[e.uniqueID] ||
                      (r[e.uniqueID] = {}))[l]) &&
                    i[0] === q &&
                    i[1] === u
                  )
                    return (a[2] = i[2]);
                  if (((o[l] = a)[2] = s(e, t, n))) return !0;
                }
          };
    }
    function f(o) {
      return 1 < o.length
        ? function(e, t, n) {
            for (var i = o.length; i--; ) if (!o[i](e, t, n)) return !1;
            return !0;
          }
        : o[0];
    }
    function y(e, t, n) {
      for (var i = 0, o = t.length; i < o; i++) x(e, t[i], n);
      return n;
    }
    function b(e, t, n, i, o) {
      for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++)
        (r = e[s]) && ((n && !n(r, i, o)) || (a.push(r), c && t.push(s)));
      return a;
    }
    function w(h, p, g, m, v, e) {
      return (
        m && !m[R] && (m = w(m)),
        v && !v[R] && (v = w(v, e)),
        l(function(e, t, n, i) {
          var o,
            r,
            a,
            s = [],
            l = [],
            c = t.length,
            u = e || y(p || "*", n.nodeType ? [n] : n, []),
            d = !h || (!e && p) ? u : b(u, s, h, n, i),
            f = g ? (v || (e ? h : c || m) ? [] : t) : d;
          if ((g && g(d, f, n, i), m))
            for (o = b(f, l), m(o, [], n, i), r = o.length; r--; )
              (a = o[r]) && (f[l[r]] = !(d[l[r]] = a));
          if (e) {
            if (v || h) {
              if (v) {
                for (o = [], r = f.length; r--; )
                  (a = f[r]) && o.push((d[r] = a));
                v(null, (f = []), o, i);
              }
              for (r = f.length; r--; )
                (a = f[r]) &&
                  -1 < (o = v ? ee(e, a) : s[r]) &&
                  (e[o] = !(t[o] = a));
            }
          } else (f = b(f === t ? f.splice(c, f.length) : f)), v ? v(null, t, f, i) : Z.apply(t, f);
        })
      );
    }
    function h(e) {
      for (
        var o,
          t,
          n,
          i = e.length,
          r = C.relative[e[0].type],
          a = r || C.relative[" "],
          s = r ? 1 : 0,
          l = d(
            function(e) {
              return e === o;
            },
            a,
            !0
          ),
          c = d(
            function(e) {
              return -1 < ee(o, e);
            },
            a,
            !0
          ),
          u = [
            function(e, t, n) {
              var i =
                (!r && (n || t !== D)) ||
                ((o = t).nodeType ? l(e, t, n) : c(e, t, n));
              return (o = null), i;
            }
          ];
        s < i;
        s++
      )
        if ((t = C.relative[e[s].type])) u = [d(f(u), t)];
        else {
          if ((t = C.filter[e[s].type].apply(null, e[s].matches))[R]) {
            for (n = ++s; n < i && !C.relative[e[n].type]; n++);
            return w(
              1 < s && f(u),
              1 < s &&
                m(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(se, "$1"),
              t,
              s < n && h(e.slice(s, n)),
              n < i && h((e = e.slice(n))),
              n < i && m(e)
            );
          }
          u.push(t);
        }
      return f(u);
    }
    function u(m, v) {
      var y = 0 < v.length,
        w = 0 < m.length,
        e = function(e, t, n, i, o) {
          var r,
            a,
            s,
            l = 0,
            c = "0",
            u = e && [],
            d = [],
            f = D,
            h = e || (w && C.find.TAG("*", o)),
            p = (q += null == f ? 1 : Math.random() || 0.1),
            g = h.length;
          for (
            o && (D = t === N || t || o);
            c !== g && null != (r = h[c]);
            c++
          ) {
            if (w && r) {
              for (
                a = 0, t || r.ownerDocument === N || (A(r), (n = !M));
                (s = m[a++]);

              )
                if (s(r, t || N, n)) {
                  i.push(r);
                  break;
                }
              o && (q = p);
            }
            y && ((r = !s && r) && l--, e && u.push(r));
          }
          if (((l += c), y && c !== l)) {
            for (a = 0; (s = v[a++]); ) s(u, d, t, n);
            if (e) {
              if (0 < l) for (; c--; ) u[c] || d[c] || (d[c] = G.call(i));
              d = b(d);
            }
            Z.apply(i, d),
              o && !e && 0 < d.length && 1 < l + v.length && x.uniqueSort(i);
          }
          return o && ((q = p), (D = f)), u;
        };
      return y ? l(e) : e;
    }
    var p,
      v,
      C,
      _,
      T,
      S,
      k,
      E,
      D,
      $,
      j,
      A,
      N,
      L,
      M,
      H,
      O,
      B,
      P,
      R = "sizzle" + 1 * new Date(),
      I = n.document,
      q = 0,
      W = 0,
      z = e(),
      F = e(),
      X = e(),
      U = function(e, t) {
        return e === t && (j = !0), 0;
      },
      V = 1 << 31,
      Y = {}.hasOwnProperty,
      Q = [],
      G = Q.pop,
      J = Q.push,
      Z = Q.push,
      K = Q.slice,
      ee = function(e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      te =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ne = "[\\x20\\t\\r\\n\\f]",
      ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      oe =
        "\\[" +
        ne +
        "*(" +
        ie +
        ")(?:" +
        ne +
        "*([*^$|!~]?=)" +
        ne +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        ie +
        "))|)" +
        ne +
        "*\\]",
      re =
        ":(" +
        ie +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        oe +
        ")*)|.*)\\)|)",
      ae = new RegExp(ne + "+", "g"),
      se = new RegExp(
        "^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$",
        "g"
      ),
      le = new RegExp("^" + ne + "*," + ne + "*"),
      ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
      ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
      de = new RegExp(re),
      fe = new RegExp("^" + ie + "$"),
      he = {
        ID: new RegExp("^#(" + ie + ")"),
        CLASS: new RegExp("^\\.(" + ie + ")"),
        TAG: new RegExp("^(" + ie + "|[*])"),
        ATTR: new RegExp("^" + oe),
        PSEUDO: new RegExp("^" + re),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ne +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ne +
            "*(?:([+-]|)" +
            ne +
            "*(\\d+)|))" +
            ne +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + te + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ne +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ne +
            "*((?:-\\d)?\\d*)" +
            ne +
            "*\\)|)(?=[^-]|$)",
          "i"
        )
      },
      pe = /^(?:input|select|textarea|button)$/i,
      ge = /^h\d$/i,
      me = /^[^{]+\{\s*\[native \w/,
      ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ye = /[+~]/,
      we = /'|\\/g,
      xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
      be = function(e, t, n) {
        var i = "0x" + t - 65536;
        return i != i || n
          ? t
          : i < 0
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      Ce = function() {
        A();
      };
    try {
      Z.apply((Q = K.call(I.childNodes)), I.childNodes),
        Q[I.childNodes.length].nodeType;
    } catch (_e) {
      Z = {
        apply: Q.length
          ? function(e, t) {
              J.apply(e, K.call(t));
            }
          : function(e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            }
      };
    }
    for (p in ((v = x.support = {}),
    (T = x.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName;
    }),
    (A = x.setDocument = function(e) {
      var t,
        n,
        i = e ? e.ownerDocument || e : I;
      return (
        i !== N &&
          9 === i.nodeType &&
          i.documentElement &&
          ((L = (N = i).documentElement),
          (M = !T(N)),
          (n = N.defaultView) &&
            n.top !== n &&
            (n.addEventListener
              ? n.addEventListener("unload", Ce, !1)
              : n.attachEvent && n.attachEvent("onunload", Ce)),
          (v.attributes = o(function(e) {
            return (e.className = "i"), !e.getAttribute("className");
          })),
          (v.getElementsByTagName = o(function(e) {
            return (
              e.appendChild(N.createComment("")),
              !e.getElementsByTagName("*").length
            );
          })),
          (v.getElementsByClassName = me.test(N.getElementsByClassName)),
          (v.getById = o(function(e) {
            return (
              (L.appendChild(e).id = R),
              !N.getElementsByName || !N.getElementsByName(R).length
            );
          })),
          v.getById
            ? ((C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && M) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }),
              (C.filter.ID = function(e) {
                var t = e.replace(xe, be);
                return function(e) {
                  return e.getAttribute("id") === t;
                };
              }))
            : (delete C.find.ID,
              (C.filter.ID = function(e) {
                var n = e.replace(xe, be);
                return function(e) {
                  var t =
                    "undefined" != typeof e.getAttributeNode &&
                    e.getAttributeNode("id");
                  return t && t.value === n;
                };
              })),
          (C.find.TAG = v.getElementsByTagName
            ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName
                  ? t.getElementsByTagName(e)
                  : v.qsa
                  ? t.querySelectorAll(e)
                  : void 0;
              }
            : function(e, t) {
                var n,
                  i = [],
                  o = 0,
                  r = t.getElementsByTagName(e);
                if ("*" !== e) return r;
                for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                return i;
              }),
          (C.find.CLASS =
            v.getElementsByClassName &&
            function(e, t) {
              if ("undefined" != typeof t.getElementsByClassName && M)
                return t.getElementsByClassName(e);
            }),
          (O = []),
          (H = []),
          (v.qsa = me.test(N.querySelectorAll)) &&
            (o(function(e) {
              (L.appendChild(e).innerHTML =
                "<a id='" +
                R +
                "'></a><select id='" +
                R +
                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                e.querySelectorAll("[msallowcapture^='']").length &&
                  H.push("[*^$]=" + ne + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length ||
                  H.push("\\[" + ne + "*(?:value|" + te + ")"),
                e.querySelectorAll("[id~=" + R + "-]").length || H.push("~="),
                e.querySelectorAll(":checked").length || H.push(":checked"),
                e.querySelectorAll("a#" + R + "+*").length ||
                  H.push(".#.+[+~]");
            }),
            o(function(e) {
              var t = N.createElement("input");
              t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length &&
                  H.push("name" + ne + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length ||
                  H.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                H.push(",.*:");
            })),
          (v.matchesSelector = me.test(
            (B =
              L.matches ||
              L.webkitMatchesSelector ||
              L.mozMatchesSelector ||
              L.oMatchesSelector ||
              L.msMatchesSelector)
          )) &&
            o(function(e) {
              (v.disconnectedMatch = B.call(e, "div")),
                B.call(e, "[s!='']:x"),
                O.push("!=", re);
            }),
          (H = H.length && new RegExp(H.join("|"))),
          (O = O.length && new RegExp(O.join("|"))),
          (t = me.test(L.compareDocumentPosition)),
          (P =
            t || me.test(L.contains)
              ? function(e, t) {
                  var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                  return (
                    e === i ||
                    !(
                      !i ||
                      1 !== i.nodeType ||
                      !(n.contains
                        ? n.contains(i)
                        : e.compareDocumentPosition &&
                          16 & e.compareDocumentPosition(i))
                    )
                  );
                }
              : function(e, t) {
                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                  return !1;
                }),
          (U = t
            ? function(e, t) {
                if (e === t) return (j = !0), 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return (
                  n ||
                  (1 &
                    (n =
                      (e.ownerDocument || e) === (t.ownerDocument || t)
                        ? e.compareDocumentPosition(t)
                        : 1) ||
                  (!v.sortDetached && t.compareDocumentPosition(e) === n)
                    ? e === N || (e.ownerDocument === I && P(I, e))
                      ? -1
                      : t === N || (t.ownerDocument === I && P(I, t))
                      ? 1
                      : $
                      ? ee($, e) - ee($, t)
                      : 0
                    : 4 & n
                    ? -1
                    : 1)
                );
              }
            : function(e, t) {
                if (e === t) return (j = !0), 0;
                var n,
                  i = 0,
                  o = e.parentNode,
                  r = t.parentNode,
                  a = [e],
                  s = [t];
                if (!o || !r)
                  return e === N
                    ? -1
                    : t === N
                    ? 1
                    : o
                    ? -1
                    : r
                    ? 1
                    : $
                    ? ee($, e) - ee($, t)
                    : 0;
                if (o === r) return c(e, t);
                for (n = e; (n = n.parentNode); ) a.unshift(n);
                for (n = t; (n = n.parentNode); ) s.unshift(n);
                for (; a[i] === s[i]; ) i++;
                return i ? c(a[i], s[i]) : a[i] === I ? -1 : s[i] === I ? 1 : 0;
              })),
        N
      );
    }),
    (x.matches = function(e, t) {
      return x(e, null, null, t);
    }),
    (x.matchesSelector = function(e, t) {
      if (
        ((e.ownerDocument || e) !== N && A(e),
        (t = t.replace(ue, "='$1']")),
        v.matchesSelector &&
          M &&
          !X[t + " "] &&
          (!O || !O.test(t)) &&
          (!H || !H.test(t)))
      )
        try {
          var n = B.call(e, t);
          if (
            n ||
            v.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (_e) {}
      return 0 < x(t, N, null, [e]).length;
    }),
    (x.contains = function(e, t) {
      return (e.ownerDocument || e) !== N && A(e), P(e, t);
    }),
    (x.attr = function(e, t) {
      (e.ownerDocument || e) !== N && A(e);
      var n = C.attrHandle[t.toLowerCase()],
        i =
          n && Y.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !M) : undefined;
      return i !== undefined
        ? i
        : v.attributes || !M
        ? e.getAttribute(t)
        : (i = e.getAttributeNode(t)) && i.specified
        ? i.value
        : null;
    }),
    (x.error = function(e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (x.uniqueSort = function(e) {
      var t,
        n = [],
        i = 0,
        o = 0;
      if (
        ((j = !v.detectDuplicates),
        ($ = !v.sortStable && e.slice(0)),
        e.sort(U),
        j)
      ) {
        for (; (t = e[o++]); ) t === e[o] && (i = n.push(o));
        for (; i--; ) e.splice(n[i], 1);
      }
      return ($ = null), e;
    }),
    (_ = x.getText = function(e) {
      var t,
        n = "",
        i = 0,
        o = e.nodeType;
      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += _(e);
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else for (; (t = e[i++]); ) n += _(t);
      return n;
    }),
    ((C = x.selectors = {
      cacheLength: 50,
      createPseudo: l,
      match: he,
      attrHandle: {},
      find: {},
      relative: {
        ">": { dir: "parentNode", first: !0 },
        " ": { dir: "parentNode" },
        "+": { dir: "previousSibling", first: !0 },
        "~": { dir: "previousSibling" }
      },
      preFilter: {
        ATTR: function(e) {
          return (
            (e[1] = e[1].replace(xe, be)),
            (e[3] = (e[3] || e[4] || e[5] || "").replace(xe, be)),
            "~=" === e[2] && (e[3] = " " + e[3] + " "),
            e.slice(0, 4)
          );
        },
        CHILD: function(e) {
          return (
            (e[1] = e[1].toLowerCase()),
            "nth" === e[1].slice(0, 3)
              ? (e[3] || x.error(e[0]),
                (e[4] = +(e[4]
                  ? e[5] + (e[6] || 1)
                  : 2 * ("even" === e[3] || "odd" === e[3]))),
                (e[5] = +(e[7] + e[8] || "odd" === e[3])))
              : e[3] && x.error(e[0]),
            e
          );
        },
        PSEUDO: function(e) {
          var t,
            n = !e[6] && e[2];
          return he.CHILD.test(e[0])
            ? null
            : (e[3]
                ? (e[2] = e[4] || e[5] || "")
                : n &&
                  de.test(n) &&
                  (t = S(n, !0)) &&
                  (t = n.indexOf(")", n.length - t) - n.length) &&
                  ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
              e.slice(0, 3));
        }
      },
      filter: {
        TAG: function(e) {
          var t = e.replace(xe, be).toLowerCase();
          return "*" === e
            ? function() {
                return !0;
              }
            : function(e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
        },
        CLASS: function(e) {
          var t = z[e + " "];
          return (
            t ||
            ((t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) &&
              z(e, function(e) {
                return t.test(
                  ("string" == typeof e.className && e.className) ||
                    ("undefined" != typeof e.getAttribute &&
                      e.getAttribute("class")) ||
                    ""
                );
              }))
          );
        },
        ATTR: function(n, i, o) {
          return function(e) {
            var t = x.attr(e, n);
            return null == t
              ? "!=" === i
              : !i ||
                  ((t += ""),
                  "=" === i
                    ? t === o
                    : "!=" === i
                    ? t !== o
                    : "^=" === i
                    ? o && 0 === t.indexOf(o)
                    : "*=" === i
                    ? o && -1 < t.indexOf(o)
                    : "$=" === i
                    ? o && t.slice(-o.length) === o
                    : "~=" === i
                    ? -1 < (" " + t.replace(ae, " ") + " ").indexOf(o)
                    : "|=" === i &&
                      (t === o || t.slice(0, o.length + 1) === o + "-"));
          };
        },
        CHILD: function(p, e, t, g, m) {
          var v = "nth" !== p.slice(0, 3),
            y = "last" !== p.slice(-4),
            w = "of-type" === e;
          return 1 === g && 0 === m
            ? function(e) {
                return !!e.parentNode;
              }
            : function(e, t, n) {
                var i,
                  o,
                  r,
                  a,
                  s,
                  l,
                  c = v !== y ? "nextSibling" : "previousSibling",
                  u = e.parentNode,
                  d = w && e.nodeName.toLowerCase(),
                  f = !n && !w,
                  h = !1;
                if (u) {
                  if (v) {
                    for (; c; ) {
                      for (a = e; (a = a[c]); )
                        if (
                          w ? a.nodeName.toLowerCase() === d : 1 === a.nodeType
                        )
                          return !1;
                      l = c = "only" === p && !l && "nextSibling";
                    }
                    return !0;
                  }
                  if (((l = [y ? u.firstChild : u.lastChild]), y && f)) {
                    for (
                      h =
                        (s =
                          (i =
                            (o =
                              (r = (a = u)[R] || (a[R] = {}))[a.uniqueID] ||
                              (r[a.uniqueID] = {}))[p] || [])[0] === q &&
                          i[1]) && i[2],
                        a = s && u.childNodes[s];
                      (a = (++s && a && a[c]) || (h = s = 0) || l.pop());

                    )
                      if (1 === a.nodeType && ++h && a === e) {
                        o[p] = [q, s, h];
                        break;
                      }
                  } else if (
                    (f &&
                      (h = s =
                        (i =
                          (o =
                            (r = (a = e)[R] || (a[R] = {}))[a.uniqueID] ||
                            (r[a.uniqueID] = {}))[p] || [])[0] === q && i[1]),
                    !1 === h)
                  )
                    for (
                      ;
                      (a = (++s && a && a[c]) || (h = s = 0) || l.pop()) &&
                      ((w
                        ? a.nodeName.toLowerCase() !== d
                        : 1 !== a.nodeType) ||
                        !++h ||
                        (f &&
                          ((o =
                            (r = a[R] || (a[R] = {}))[a.uniqueID] ||
                            (r[a.uniqueID] = {}))[p] = [q, h]),
                        a !== e));

                    );
                  return (h -= m) === g || (h % g == 0 && 0 <= h / g);
                }
              };
        },
        PSEUDO: function(e, r) {
          var t,
            a =
              C.pseudos[e] ||
              C.setFilters[e.toLowerCase()] ||
              x.error("unsupported pseudo: " + e);
          return a[R]
            ? a(r)
            : 1 < a.length
            ? ((t = [e, e, "", r]),
              C.setFilters.hasOwnProperty(e.toLowerCase())
                ? l(function(e, t) {
                    for (var n, i = a(e, r), o = i.length; o--; )
                      e[(n = ee(e, i[o]))] = !(t[n] = i[o]);
                  })
                : function(e) {
                    return a(e, 0, t);
                  })
            : a;
        }
      },
      pseudos: {
        not: l(function(e) {
          var i = [],
            o = [],
            s = k(e.replace(se, "$1"));
          return s[R]
            ? l(function(e, t, n, i) {
                for (var o, r = s(e, null, i, []), a = e.length; a--; )
                  (o = r[a]) && (e[a] = !(t[a] = o));
              })
            : function(e, t, n) {
                return (i[0] = e), s(i, null, n, o), (i[0] = null), !o.pop();
              };
        }),
        has: l(function(t) {
          return function(e) {
            return 0 < x(t, e).length;
          };
        }),
        contains: l(function(t) {
          return (
            (t = t.replace(xe, be)),
            function(e) {
              return -1 < (e.textContent || e.innerText || _(e)).indexOf(t);
            }
          );
        }),
        lang: l(function(n) {
          return (
            fe.test(n || "") || x.error("unsupported lang: " + n),
            (n = n.replace(xe, be).toLowerCase()),
            function(e) {
              var t;
              do {
                if (
                  (t = M
                    ? e.lang
                    : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                )
                  return (
                    (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                  );
              } while ((e = e.parentNode) && 1 === e.nodeType);
              return !1;
            }
          );
        }),
        target: function(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function(e) {
          return e === L;
        },
        focus: function(e) {
          return (
            e === N.activeElement &&
            (!N.hasFocus || N.hasFocus()) &&
            !!(e.type || e.href || ~e.tabIndex)
          );
        },
        enabled: function(e) {
          return !1 === e.disabled;
        },
        disabled: function(e) {
          return !0 === e.disabled;
        },
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return (
            ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
          );
        },
        selected: function(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function(e) {
          return !C.pseudos.empty(e);
        },
        header: function(e) {
          return ge.test(e.nodeName);
        },
        input: function(e) {
          return pe.test(e.nodeName);
        },
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t && "button" === e.type) || "button" === t;
        },
        text: function(e) {
          var t;
          return (
            "input" === e.nodeName.toLowerCase() &&
            "text" === e.type &&
            (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          );
        },
        first: a(function() {
          return [0];
        }),
        last: a(function(e, t) {
          return [t - 1];
        }),
        eq: a(function(e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: a(function(e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: a(function(e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: a(function(e, t, n) {
          for (var i = n < 0 ? n + t : n; 0 <= --i; ) e.push(i);
          return e;
        }),
        gt: a(function(e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
          return e;
        })
      }
    }).pseudos.nth = C.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      C.pseudos[p] = i(p);
    for (p in { submit: !0, reset: !0 }) C.pseudos[p] = r(p);
    return (
      (s.prototype = C.filters = C.pseudos),
      (C.setFilters = new s()),
      (S = x.tokenize = function(e, t) {
        var n,
          i,
          o,
          r,
          a,
          s,
          l,
          c = F[e + " "];
        if (c) return t ? 0 : c.slice(0);
        for (a = e, s = [], l = C.preFilter; a; ) {
          for (r in ((n && !(i = le.exec(a))) ||
            (i && (a = a.slice(i[0].length) || a), s.push((o = []))),
          (n = !1),
          (i = ce.exec(a)) &&
            ((n = i.shift()),
            o.push({ value: n, type: i[0].replace(se, " ") }),
            (a = a.slice(n.length))),
          C.filter))
            !(i = he[r].exec(a)) ||
              (l[r] && !(i = l[r](i))) ||
              ((n = i.shift()),
              o.push({ value: n, type: r, matches: i }),
              (a = a.slice(n.length)));
          if (!n) break;
        }
        return t ? a.length : a ? x.error(e) : F(e, s).slice(0);
      }),
      (k = x.compile = function(e, t) {
        var n,
          i = [],
          o = [],
          r = X[e + " "];
        if (!r) {
          for (t || (t = S(e)), n = t.length; n--; )
            (r = h(t[n]))[R] ? i.push(r) : o.push(r);
          (r = X(e, u(o, i))).selector = e;
        }
        return r;
      }),
      (E = x.select = function(e, t, n, i) {
        var o,
          r,
          a,
          s,
          l,
          c = "function" == typeof e && e,
          u = !i && S((e = c.selector || e));
        if (((n = n || []), 1 === u.length)) {
          if (
            2 < (r = u[0] = u[0].slice(0)).length &&
            "ID" === (a = r[0]).type &&
            v.getById &&
            9 === t.nodeType &&
            M &&
            C.relative[r[1].type]
          ) {
            if (!(t = (C.find.ID(a.matches[0].replace(xe, be), t) || [])[0]))
              return n;
            c && (t = t.parentNode), (e = e.slice(r.shift().value.length));
          }
          for (
            o = he.needsContext.test(e) ? 0 : r.length;
            o-- && ((a = r[o]), !C.relative[(s = a.type)]);

          )
            if (
              (l = C.find[s]) &&
              (i = l(
                a.matches[0].replace(xe, be),
                (ye.test(r[0].type) && g(t.parentNode)) || t
              ))
            ) {
              if ((r.splice(o, 1), !(e = i.length && m(r))))
                return Z.apply(n, i), n;
              break;
            }
        }
        return (
          (c || k(e, u))(
            i,
            t,
            !M,
            n,
            !t || (ye.test(e) && g(t.parentNode)) || t
          ),
          n
        );
      }),
      (v.sortStable =
        R.split("")
          .sort(U)
          .join("") === R),
      (v.detectDuplicates = !!j),
      A(),
      (v.sortDetached = o(function(e) {
        return 1 & e.compareDocumentPosition(N.createElement("div"));
      })),
      o(function(e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        t("type|href|height|width", function(e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (v.attributes &&
        o(function(e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        t("value", function(e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      o(function(e) {
        return null == e.getAttribute("disabled");
      }) ||
        t(te, function(e, t, n) {
          var i;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
        }),
      x
    );
  })(_);
  (he.find = ye),
    (he.expr = ye.selectors),
    (he.expr[":"] = he.expr.pseudos),
    (he.uniqueSort = he.unique = ye.uniqueSort),
    (he.text = ye.getText),
    (he.isXMLDoc = ye.isXML),
    (he.contains = ye.contains);
  var we = function(e, t, n) {
      for (var i = [], o = n !== undefined; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (o && he(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    xe = function(e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    be = he.expr.match.needsContext,
    Ce = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    _e = /^.[^:#\[\.,]*$/;
  (he.filter = function(e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? he.find.matchesSelector(i, e)
          ? [i]
          : []
        : he.find.matches(
            e,
            he.grep(t, function(e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    he.fn.extend({
      find: function(e) {
        var t,
          n = [],
          i = this,
          o = i.length;
        if ("string" != typeof e)
          return this.pushStack(
            he(e).filter(function() {
              for (t = 0; t < o; t++) if (he.contains(i[t], this)) return !0;
            })
          );
        for (t = 0; t < o; t++) he.find(e, i[t], n);
        return (
          ((n = this.pushStack(1 < o ? he.unique(n) : n)).selector = this
            .selector
            ? this.selector + " " + e
            : e),
          n
        );
      },
      filter: function(e) {
        return this.pushStack(t(this, e || [], !1));
      },
      not: function(e) {
        return this.pushStack(t(this, e || [], !0));
      },
      is: function(e) {
        return !!t(
          this,
          "string" == typeof e && be.test(e) ? he(e) : e || [],
          !1
        ).length;
      }
    });
  var Te,
    Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((he.fn.init = function(e, t, n) {
    var i, o;
    if (!e) return this;
    if (((n = n || Te), "string" != typeof e))
      return e.nodeType
        ? ((this.context = this[0] = e), (this.length = 1), this)
        : he.isFunction(e)
        ? "undefined" != typeof n.ready
          ? n.ready(e)
          : e(he)
        : (e.selector !== undefined &&
            ((this.selector = e.selector), (this.context = e.context)),
          he.makeArray(e, this));
    if (
      !(i =
        "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length
          ? [null, e, null]
          : Se.exec(e)) ||
      (!i[1] && t)
    )
      return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
    if (i[1]) {
      if (
        ((t = t instanceof he ? t[0] : t),
        he.merge(
          this,
          he.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)
        ),
        Ce.test(i[1]) && he.isPlainObject(t))
      )
        for (i in t)
          he.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
      return this;
    }
    if ((o = ie.getElementById(i[2])) && o.parentNode) {
      if (o.id !== i[2]) return Te.find(e);
      (this.length = 1), (this[0] = o);
    }
    return (this.context = ie), (this.selector = e), this;
  }).prototype = he.fn),
    (Te = he(ie));
  var ke = /^(?:parents|prev(?:Until|All))/,
    Ee = { children: !0, contents: !0, next: !0, prev: !0 };
  he.fn.extend({
    has: function(e) {
      var t,
        n = he(e, this),
        i = n.length;
      return this.filter(function() {
        for (t = 0; t < i; t++) if (he.contains(this, n[t])) return !0;
      });
    },
    closest: function(e, t) {
      for (
        var n,
          i = 0,
          o = this.length,
          r = [],
          a = be.test(e) || "string" != typeof e ? he(e, t || this.context) : 0;
        i < o;
        i++
      )
        for (n = this[i]; n && n !== t; n = n.parentNode)
          if (
            n.nodeType < 11 &&
            (a
              ? -1 < a.index(n)
              : 1 === n.nodeType && he.find.matchesSelector(n, e))
          ) {
            r.push(n);
            break;
          }
      return this.pushStack(1 < r.length ? he.uniqueSort(r) : r);
    },
    index: function(e) {
      return e
        ? "string" == typeof e
          ? he.inArray(this[0], he(e))
          : he.inArray(e.jquery ? e[0] : e, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function(e, t) {
      return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))));
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }),
    he.each(
      {
        parent: function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
          return we(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
          return we(e, "parentNode", n);
        },
        next: function(e) {
          return n(e, "nextSibling");
        },
        prev: function(e) {
          return n(e, "previousSibling");
        },
        nextAll: function(e) {
          return we(e, "nextSibling");
        },
        prevAll: function(e) {
          return we(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
          return we(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
          return we(e, "previousSibling", n);
        },
        siblings: function(e) {
          return xe((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
          return xe(e.firstChild);
        },
        contents: function(e) {
          return he.nodeName(e, "iframe")
            ? e.contentDocument || e.contentWindow.document
            : he.merge([], e.childNodes);
        }
      },
      function(i, o) {
        he.fn[i] = function(e, t) {
          var n = he.map(this, o, e);
          return (
            "Until" !== i.slice(-5) && (t = e),
            t && "string" == typeof t && (n = he.filter(t, n)),
            1 < this.length &&
              (Ee[i] || (n = he.uniqueSort(n)),
              ke.test(i) && (n = n.reverse())),
            this.pushStack(n)
          );
        };
      }
    );
  var De,
    $e,
    je = /\S+/g;
  for ($e in ((he.Callbacks = function(i) {
    i = "string" == typeof i ? u(i) : he.extend({}, i);
    var o,
      e,
      t,
      n,
      r = [],
      a = [],
      s = -1,
      l = function() {
        for (n = i.once, t = o = !0; a.length; s = -1)
          for (e = a.shift(); ++s < r.length; )
            !1 === r[s].apply(e[0], e[1]) &&
              i.stopOnFalse &&
              ((s = r.length), (e = !1));
        i.memory || (e = !1), (o = !1), n && (r = e ? [] : "");
      },
      c = {
        add: function() {
          return (
            r &&
              (e && !o && ((s = r.length - 1), a.push(e)),
              (function n(e) {
                he.each(e, function(e, t) {
                  he.isFunction(t)
                    ? (i.unique && c.has(t)) || r.push(t)
                    : t && t.length && "string" !== he.type(t) && n(t);
                });
              })(arguments),
              e && !o && l()),
            this
          );
        },
        remove: function() {
          return (
            he.each(arguments, function(e, t) {
              for (var n; -1 < (n = he.inArray(t, r, n)); )
                r.splice(n, 1), n <= s && s--;
            }),
            this
          );
        },
        has: function(e) {
          return e ? -1 < he.inArray(e, r) : 0 < r.length;
        },
        empty: function() {
          return r && (r = []), this;
        },
        disable: function() {
          return (n = a = []), (r = e = ""), this;
        },
        disabled: function() {
          return !r;
        },
        lock: function() {
          return (n = !0), e || c.disable(), this;
        },
        locked: function() {
          return !!n;
        },
        fireWith: function(e, t) {
          return (
            n ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              a.push(t),
              o || l()),
            this
          );
        },
        fire: function() {
          return c.fireWith(this, arguments), this;
        },
        fired: function() {
          return !!t;
        }
      };
    return c;
  }),
  he.extend({
    Deferred: function(e) {
      var r = [
          ["resolve", "done", he.Callbacks("once memory"), "resolved"],
          ["reject", "fail", he.Callbacks("once memory"), "rejected"],
          ["notify", "progress", he.Callbacks("memory")]
        ],
        o = "pending",
        a = {
          state: function() {
            return o;
          },
          always: function() {
            return s.done(arguments).fail(arguments), this;
          },
          then: function() {
            var o = arguments;
            return he
              .Deferred(function(i) {
                he.each(r, function(e, t) {
                  var n = he.isFunction(o[e]) && o[e];
                  s[t[1]](function() {
                    var e = n && n.apply(this, arguments);
                    e && he.isFunction(e.promise)
                      ? e
                          .promise()
                          .progress(i.notify)
                          .done(i.resolve)
                          .fail(i.reject)
                      : i[t[0] + "With"](
                          this === a ? i.promise() : this,
                          n ? [e] : arguments
                        );
                  });
                }),
                  (o = null);
              })
              .promise();
          },
          promise: function(e) {
            return null != e ? he.extend(e, a) : a;
          }
        },
        s = {};
      return (
        (a.pipe = a.then),
        he.each(r, function(e, t) {
          var n = t[2],
            i = t[3];
          (a[t[1]] = n.add),
            i &&
              n.add(
                function() {
                  o = i;
                },
                r[1 ^ e][2].disable,
                r[2][2].lock
              ),
            (s[t[0]] = function() {
              return s[t[0] + "With"](this === s ? a : this, arguments), this;
            }),
            (s[t[0] + "With"] = n.fireWith);
        }),
        a.promise(s),
        e && e.call(s, s),
        s
      );
    },
    when: function(e) {
      var o,
        t,
        n,
        i = 0,
        r = oe.call(arguments),
        a = r.length,
        s = 1 !== a || (e && he.isFunction(e.promise)) ? a : 0,
        l = 1 === s ? e : he.Deferred(),
        c = function(t, n, i) {
          return function(e) {
            (n[t] = this),
              (i[t] = 1 < arguments.length ? oe.call(arguments) : e),
              i === o ? l.notifyWith(n, i) : --s || l.resolveWith(n, i);
          };
        };
      if (1 < a)
        for (o = new Array(a), t = new Array(a), n = new Array(a); i < a; i++)
          r[i] && he.isFunction(r[i].promise)
            ? r[i]
                .promise()
                .progress(c(i, t, o))
                .done(c(i, n, r))
                .fail(l.reject)
            : --s;
      return s || l.resolveWith(n, r), l.promise();
    }
  }),
  (he.fn.ready = function(e) {
    return he.ready.promise().done(e), this;
  }),
  he.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
      e ? he.readyWait++ : he.ready(!0);
    },
    ready: function(e) {
      (!0 === e ? --he.readyWait : he.isReady) ||
        ((he.isReady = !0) !== e && 0 < --he.readyWait) ||
        (De.resolveWith(ie, [he]),
        he.fn.triggerHandler &&
          (he(ie).triggerHandler("ready"), he(ie).off("ready")));
    }
  }),
  (he.ready.promise = function(e) {
    if (!De)
      if (
        ((De = he.Deferred()),
        "complete" === ie.readyState ||
          ("loading" !== ie.readyState && !ie.documentElement.doScroll))
      )
        _.setTimeout(he.ready);
      else if (ie.addEventListener)
        ie.addEventListener("DOMContentLoaded", r),
          _.addEventListener("load", r);
      else {
        ie.attachEvent("onreadystatechange", r), _.attachEvent("onload", r);
        var t = !1;
        try {
          t = null == _.frameElement && ie.documentElement;
        } catch (n) {}
        t &&
          t.doScroll &&
          (function i() {
            if (!he.isReady) {
              try {
                t.doScroll("left");
              } catch (n) {
                return _.setTimeout(i, 50);
              }
              o(), he.ready();
            }
          })();
      }
    return De.promise(e);
  }),
  he.ready.promise(),
  he(de)))
    break;
  (de.ownFirst = "0" === $e),
    (de.inlineBlockNeedsLayout = !1),
    he(function() {
      var e, t, n, i;
      (n = ie.getElementsByTagName("body")[0]) &&
        n.style &&
        ((t = ie.createElement("div")),
        ((i = ie.createElement("div")).style.cssText =
          "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
        n.appendChild(i).appendChild(t),
        "undefined" != typeof t.style.zoom &&
          ((t.style.cssText =
            "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
          (de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth),
          e && (n.style.zoom = 1)),
        n.removeChild(i));
    }),
    (function() {
      var e = ie.createElement("div");
      de.deleteExpando = !0;
      try {
        delete e.test;
      } catch (t) {
        de.deleteExpando = !1;
      }
      e = null;
    })();
  var Ae,
    Ne = function(e) {
      var t = he.noData[(e.nodeName + " ").toLowerCase()],
        n = +e.nodeType || 1;
      return (
        (1 === n || 9 === n) &&
        (!t || (!0 !== t && e.getAttribute("classid") === t))
      );
    },
    Le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Me = /([A-Z])/g;
  he.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(e) {
      return (
        !!(e = e.nodeType ? he.cache[e[he.expando]] : e[he.expando]) && !c(e)
      );
    },
    data: function(e, t, n) {
      return i(e, t, n);
    },
    removeData: function(e, t) {
      return a(e, t);
    },
    _data: function(e, t, n) {
      return i(e, t, n, !0);
    },
    _removeData: function(e, t) {
      return a(e, t, !0);
    }
  }),
    he.fn.extend({
      data: function(e, t) {
        var n,
          i,
          o,
          r = this[0],
          a = r && r.attributes;
        if (e !== undefined)
          return "object" == typeof e
            ? this.each(function() {
                he.data(this, e);
              })
            : 1 < arguments.length
            ? this.each(function() {
                he.data(this, e, t);
              })
            : r
            ? l(r, e, he.data(r, e))
            : undefined;
        if (
          this.length &&
          ((o = he.data(r)), 1 === r.nodeType && !he._data(r, "parsedAttrs"))
        ) {
          for (n = a.length; n--; )
            a[n] &&
              0 === (i = a[n].name).indexOf("data-") &&
              l(r, (i = he.camelCase(i.slice(5))), o[i]);
          he._data(r, "parsedAttrs", !0);
        }
        return o;
      },
      removeData: function(e) {
        return this.each(function() {
          he.removeData(this, e);
        });
      }
    }),
    he.extend({
      queue: function(e, t, n) {
        var i;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (i = he._data(e, t)),
            n &&
              (!i || he.isArray(n)
                ? (i = he._data(e, t, he.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var n = he.queue(e, t),
          i = n.length,
          o = n.shift(),
          r = he._queueHooks(e, t),
          a = function() {
            he.dequeue(e, t);
          };
        "inprogress" === o && ((o = n.shift()), i--),
          o &&
            ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            o.call(e, a, r)),
          !i && r && r.empty.fire();
      },
      _queueHooks: function(e, t) {
        var n = t + "queueHooks";
        return (
          he._data(e, n) ||
          he._data(e, n, {
            empty: he.Callbacks("once memory").add(function() {
              he._removeData(e, t + "queue"), he._removeData(e, n);
            })
          })
        );
      }
    }),
    he.fn.extend({
      queue: function(t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? he.queue(this[0], t)
            : n === undefined
            ? this
            : this.each(function() {
                var e = he.queue(this, t, n);
                he._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && he.dequeue(this, t);
              })
        );
      },
      dequeue: function(e) {
        return this.each(function() {
          he.dequeue(this, e);
        });
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", []);
      },
      promise: function(e, t) {
        var n,
          i = 1,
          o = he.Deferred(),
          r = this,
          a = this.length,
          s = function() {
            --i || o.resolveWith(r, [r]);
          };
        for (
          "string" != typeof e && ((t = e), (e = undefined)), e = e || "fx";
          a--;

        )
          (n = he._data(r[a], e + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(s));
        return s(), o.promise(t);
      }
    }),
    (de.shrinkWrapBlocks = function() {
      return null != Ae
        ? Ae
        : ((Ae = !1),
          (t = ie.getElementsByTagName("body")[0]) && t.style
            ? ((e = ie.createElement("div")),
              ((n = ie.createElement("div")).style.cssText =
                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
              t.appendChild(n).appendChild(e),
              "undefined" != typeof e.style.zoom &&
                ((e.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                (e.appendChild(ie.createElement("div")).style.width = "5px"),
                (Ae = 3 !== e.offsetWidth)),
              t.removeChild(n),
              Ae)
            : void 0);
      var e, t, n;
    });
  var He,
    Oe,
    Be,
    Pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Re = new RegExp("^(?:([+-])=|)(" + Pe + ")([a-z%]*)$", "i"),
    Ie = ["Top", "Right", "Bottom", "Left"],
    qe = function(e, t) {
      return (
        (e = t || e),
        "none" === he.css(e, "display") || !he.contains(e.ownerDocument, e)
      );
    },
    We = function(e, t, n, i, o, r, a) {
      var s = 0,
        l = e.length,
        c = null == n;
      if ("object" === he.type(n))
        for (s in ((o = !0), n)) We(e, t, s, n[s], !0, r, a);
      else if (
        i !== undefined &&
        ((o = !0),
        he.isFunction(i) || (a = !0),
        c &&
          (a
            ? (t.call(e, i), (t = null))
            : ((c = t),
              (t = function(e, t, n) {
                return c.call(he(e), n);
              }))),
        t)
      )
        for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
      return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
    },
    ze = /^(?:checkbox|radio)$/i,
    Fe = /<([\w:-]+)/,
    Xe = /^$|\/(?:java|ecma)script/i,
    Ue = /^\s+/,
    Ve =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
  (He = ie.createElement("div")),
    (Oe = ie.createDocumentFragment()),
    (Be = ie.createElement("input")),
    (He.innerHTML =
      "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
    (de.leadingWhitespace = 3 === He.firstChild.nodeType),
    (de.tbody = !He.getElementsByTagName("tbody").length),
    (de.htmlSerialize = !!He.getElementsByTagName("link").length),
    (de.html5Clone =
      "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML),
    (Be.type = "checkbox"),
    (Be.checked = !0),
    Oe.appendChild(Be),
    (de.appendChecked = Be.checked),
    (He.innerHTML = "<textarea>x</textarea>"),
    (de.noCloneChecked = !!He.cloneNode(!0).lastChild.defaultValue),
    Oe.appendChild(He),
    (Be = ie.createElement("input")).setAttribute("type", "radio"),
    Be.setAttribute("checked", "checked"),
    Be.setAttribute("name", "t"),
    He.appendChild(Be),
    (de.checkClone = He.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (de.noCloneEvent = !!He.addEventListener),
    (He[he.expando] = 1),
    (de.attributes = !He.getAttribute(he.expando));
  var Ye = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  };
  (Ye.optgroup = Ye.option),
    (Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead),
    (Ye.th = Ye.td);
  var Qe = /<|&#?\w+;/,
    Ge = /<tbody/i;
  !(function() {
    var e,
      t,
      n = ie.createElement("div");
    for (e in { submit: !0, change: !0, focusin: !0 })
      (t = "on" + e),
        (de[e] = t in _) ||
          (n.setAttribute(t, "t"), (de[e] = !1 === n.attributes[t].expando));
    n = null;
  })();
  var Je = /^(?:input|select|textarea)$/i,
    Ze = /^key/,
    Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    et = /^(?:focusinfocus|focusoutblur)$/,
    tt = /^([^.]*)(?:\.(.+)|)/;
  (he.event = {
    global: {},
    add: function(e, t, n, i, o) {
      var r,
        a,
        s,
        l,
        c,
        u,
        d,
        f,
        h,
        p,
        g,
        m = he._data(e);
      if (m) {
        for (
          n.handler && ((n = (l = n).handler), (o = l.selector)),
            n.guid || (n.guid = he.guid++),
            (a = m.events) || (a = m.events = {}),
            (u = m.handle) ||
              ((u = m.handle = function(e) {
                return void 0 === he || (e && he.event.triggered === e.type)
                  ? undefined
                  : he.event.dispatch.apply(u.elem, arguments);
              }).elem = e),
            s = (t = (t || "").match(je) || [""]).length;
          s--;

        )
          (h = g = (r = tt.exec(t[s]) || [])[1]),
            (p = (r[2] || "").split(".").sort()),
            h &&
              ((c = he.event.special[h] || {}),
              (h = (o ? c.delegateType : c.bindType) || h),
              (c = he.event.special[h] || {}),
              (d = he.extend(
                {
                  type: h,
                  origType: g,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && he.expr.match.needsContext.test(o),
                  namespace: p.join(".")
                },
                l
              )),
              (f = a[h]) ||
                (((f = a[h] = []).delegateCount = 0),
                (c.setup && !1 !== c.setup.call(e, i, p, u)) ||
                  (e.addEventListener
                    ? e.addEventListener(h, u, !1)
                    : e.attachEvent && e.attachEvent("on" + h, u))),
              c.add &&
                (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)),
              o ? f.splice(f.delegateCount++, 0, d) : f.push(d),
              (he.event.global[h] = !0));
        e = null;
      }
    },
    remove: function(e, t, n, i, o) {
      var r,
        a,
        s,
        l,
        c,
        u,
        d,
        f,
        h,
        p,
        g,
        m = he.hasData(e) && he._data(e);
      if (m && (u = m.events)) {
        for (c = (t = (t || "").match(je) || [""]).length; c--; )
          if (
            ((h = g = (s = tt.exec(t[c]) || [])[1]),
            (p = (s[2] || "").split(".").sort()),
            h)
          ) {
            for (
              d = he.event.special[h] || {},
                f = u[(h = (i ? d.delegateType : d.bindType) || h)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                l = r = f.length;
              r--;

            )
              (a = f[r]),
                (!o && g !== a.origType) ||
                  (n && n.guid !== a.guid) ||
                  (s && !s.test(a.namespace)) ||
                  (i && i !== a.selector && ("**" !== i || !a.selector)) ||
                  (f.splice(r, 1),
                  a.selector && f.delegateCount--,
                  d.remove && d.remove.call(e, a));
            l &&
              !f.length &&
              ((d.teardown && !1 !== d.teardown.call(e, p, m.handle)) ||
                he.removeEvent(e, h, m.handle),
              delete u[h]);
          } else for (h in u) he.event.remove(e, h + t[c], n, i, !0);
        he.isEmptyObject(u) && (delete m.handle, he._removeData(e, "events"));
      }
    },
    trigger: function(e, t, n, i) {
      var o,
        r,
        a,
        s,
        l,
        c,
        u,
        d = [n || ie],
        f = ue.call(e, "type") ? e.type : e,
        h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((a = c = n = n || ie),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !et.test(f + he.event.triggered) &&
          (-1 < f.indexOf(".") && ((f = (h = f.split(".")).shift()), h.sort()),
          (r = f.indexOf(":") < 0 && "on" + f),
          ((e = e[he.expando]
            ? e
            : new he.Event(f, "object" == typeof e && e)).isTrigger = i
            ? 2
            : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = undefined),
          e.target || (e.target = n),
          (t = null == t ? [e] : he.makeArray(t, [e])),
          (l = he.event.special[f] || {}),
          i || !l.trigger || !1 !== l.trigger.apply(n, t)))
      ) {
        if (!i && !l.noBubble && !he.isWindow(n)) {
          for (
            s = l.delegateType || f, et.test(s + f) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            d.push(a), (c = a);
          c === (n.ownerDocument || ie) &&
            d.push(c.defaultView || c.parentWindow || _);
        }
        for (u = 0; (a = d[u++]) && !e.isPropagationStopped(); )
          (e.type = 1 < u ? s : l.bindType || f),
            (o =
              (he._data(a, "events") || {})[e.type] && he._data(a, "handle")) &&
              o.apply(a, t),
            (o = r && a[r]) &&
              o.apply &&
              Ne(a) &&
              ((e.result = o.apply(a, t)),
              !1 === e.result && e.preventDefault());
        if (
          ((e.type = f),
          !i &&
            !e.isDefaultPrevented() &&
            (!l._default || !1 === l._default.apply(d.pop(), t)) &&
            Ne(n) &&
            r &&
            n[f] &&
            !he.isWindow(n))
        ) {
          (c = n[r]) && (n[r] = null), (he.event.triggered = f);
          try {
            n[f]();
          } catch (p) {}
          (he.event.triggered = undefined), c && (n[r] = c);
        }
        return e.result;
      }
    },
    dispatch: function(e) {
      e = he.event.fix(e);
      var t,
        n,
        i,
        o,
        r,
        a = [],
        s = oe.call(arguments),
        l = (he._data(this, "events") || {})[e.type] || [],
        c = he.event.special[e.type] || {};
      if (
        (((s[0] = e).delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, e))
      ) {
        for (
          a = he.event.handlers.call(this, e, l), t = 0;
          (o = a[t++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = o.elem, n = 0;
            (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();

          )
            (e.rnamespace && !e.rnamespace.test(r.namespace)) ||
              ((e.handleObj = r),
              (e.data = r.data),
              (i = (
                (he.event.special[r.origType] || {}).handle || r.handler
              ).apply(o.elem, s)) !== undefined &&
                !1 === (e.result = i) &&
                (e.preventDefault(), e.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function(e, t) {
      var n,
        i,
        o,
        r,
        a = [],
        s = t.delegateCount,
        l = e.target;
      if (
        s &&
        l.nodeType &&
        ("click" !== e.type || isNaN(e.button) || e.button < 1)
      )
        for (; l != this; l = l.parentNode || this)
          if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
            for (i = [], n = 0; n < s; n++)
              i[(o = (r = t[n]).selector + " ")] === undefined &&
                (i[o] = r.needsContext
                  ? -1 < he(o, this).index(l)
                  : he.find(o, this, null, [l]).length),
                i[o] && i.push(r);
            i.length && a.push({ elem: l, handlers: i });
          }
      return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
    },
    fix: function(e) {
      if (e[he.expando]) return e;
      var t,
        n,
        i,
        o = e.type,
        r = e,
        a = this.fixHooks[o];
      for (
        a ||
          (this.fixHooks[o] = a = Ke.test(o)
            ? this.mouseHooks
            : Ze.test(o)
            ? this.keyHooks
            : {}),
          i = a.props ? this.props.concat(a.props) : this.props,
          e = new he.Event(r),
          t = i.length;
        t--;

      )
        e[(n = i[t])] = r[n];
      return (
        e.target || (e.target = r.srcElement || ie),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        (e.metaKey = !!e.metaKey),
        a.filter ? a.filter(e, r) : e
      );
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
      " "
    ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
        " "
      ),
      filter: function(e, t) {
        var n,
          i,
          o,
          r = t.button,
          a = t.fromElement;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((o = (i = e.target.ownerDocument || ie).documentElement),
            (n = i.body),
            (e.pageX =
              t.clientX +
              ((o && o.scrollLeft) || (n && n.scrollLeft) || 0) -
              ((o && o.clientLeft) || (n && n.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((o && o.scrollTop) || (n && n.scrollTop) || 0) -
              ((o && o.clientTop) || (n && n.clientTop) || 0))),
          !e.relatedTarget &&
            a &&
            (e.relatedTarget = a === e.target ? t.toElement : a),
          e.which ||
            r === undefined ||
            (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
          e
        );
      }
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function() {
          if (this !== p() && this.focus)
            try {
              return this.focus(), !1;
            } catch (e) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === p() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if (
            he.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
          )
            return this.click(), !1;
        },
        _default: function(e) {
          return he.nodeName(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          e.result !== undefined &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        }
      }
    },
    simulate: function(e, t, n) {
      var i = he.extend(new he.Event(), n, { type: e, isSimulated: !0 });
      he.event.trigger(i, null, t),
        i.isDefaultPrevented() && n.preventDefault();
    }
  }),
    (he.removeEvent = ie.removeEventListener
      ? function(e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }
      : function(e, t, n) {
          var i = "on" + t;
          e.detachEvent &&
            ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n));
        }),
    (he.Event = function(e, t) {
      if (!(this instanceof he.Event)) return new he.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (e.defaultPrevented === undefined && !1 === e.returnValue)
              ? f
              : h))
        : (this.type = e),
        t && he.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || he.now()),
        (this[he.expando] = !0);
    }),
    (he.Event.prototype = {
      constructor: he.Event,
      isDefaultPrevented: h,
      isPropagationStopped: h,
      isImmediatePropagationStopped: h,
      preventDefault: function() {
        var e = this.originalEvent;
        (this.isDefaultPrevented = f),
          e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        (this.isPropagationStopped = f),
          e &&
            !this.isSimulated &&
            (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = f),
          e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
          this.stopPropagation();
      }
    }),
    he.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      },
      function(e, r) {
        he.event.special[e] = {
          delegateType: r,
          bindType: r,
          handle: function(e) {
            var t,
              n = this,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (i && (i === n || he.contains(n, i))) ||
                ((e.type = o.origType),
                (t = o.handler.apply(this, arguments)),
                (e.type = r)),
              t
            );
          }
        };
      }
    ),
    de.submit ||
      (he.event.special.submit = {
        setup: function() {
          if (he.nodeName(this, "form")) return !1;
          he.event.add(this, "click._submit keypress._submit", function(e) {
            var t = e.target,
              n =
                he.nodeName(t, "input") || he.nodeName(t, "button")
                  ? he.prop(t, "form")
                  : undefined;
            n &&
              !he._data(n, "submit") &&
              (he.event.add(n, "submit._submit", function(e) {
                e._submitBubble = !0;
              }),
              he._data(n, "submit", !0));
          });
        },
        postDispatch: function(e) {
          e._submitBubble &&
            (delete e._submitBubble,
            this.parentNode &&
              !e.isTrigger &&
              he.event.simulate("submit", this.parentNode, e));
        },
        teardown: function() {
          if (he.nodeName(this, "form")) return !1;
          he.event.remove(this, "._submit");
        }
      }),
    de.change ||
      (he.event.special.change = {
        setup: function() {
          if (Je.test(this.nodeName))
            return (
              ("checkbox" !== this.type && "radio" !== this.type) ||
                (he.event.add(this, "propertychange._change", function(e) {
                  "checked" === e.originalEvent.propertyName &&
                    (this._justChanged = !0);
                }),
                he.event.add(this, "click._change", function(e) {
                  this._justChanged && !e.isTrigger && (this._justChanged = !1),
                    he.event.simulate("change", this, e);
                })),
              !1
            );
          he.event.add(this, "beforeactivate._change", function(e) {
            var t = e.target;
            Je.test(t.nodeName) &&
              !he._data(t, "change") &&
              (he.event.add(t, "change._change", function(e) {
                !this.parentNode ||
                  e.isSimulated ||
                  e.isTrigger ||
                  he.event.simulate("change", this.parentNode, e);
              }),
              he._data(t, "change", !0));
          });
        },
        handle: function(e) {
          var t = e.target;
          if (
            this !== t ||
            e.isSimulated ||
            e.isTrigger ||
            ("radio" !== t.type && "checkbox" !== t.type)
          )
            return e.handleObj.handler.apply(this, arguments);
        },
        teardown: function() {
          return he.event.remove(this, "._change"), !Je.test(this.nodeName);
        }
      }),
    de.focusin ||
      he.each({ focus: "focusin", blur: "focusout" }, function(n, i) {
        var o = function(e) {
          he.event.simulate(i, e.target, he.event.fix(e));
        };
        he.event.special[i] = {
          setup: function() {
            var e = this.ownerDocument || this,
              t = he._data(e, i);
            t || e.addEventListener(n, o, !0), he._data(e, i, (t || 0) + 1);
          },
          teardown: function() {
            var e = this.ownerDocument || this,
              t = he._data(e, i) - 1;
            t
              ? he._data(e, i, t)
              : (e.removeEventListener(n, o, !0), he._removeData(e, i));
          }
        };
      }),
    he.fn.extend({
      on: function(e, t, n, i) {
        return x(this, e, t, n, i);
      },
      one: function(e, t, n, i) {
        return x(this, e, t, n, i, 1);
      },
      off: function(e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            he(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" != typeof e)
          return (
            (!1 !== t && "function" != typeof t) || ((n = t), (t = undefined)),
            !1 === n && (n = h),
            this.each(function() {
              he.event.remove(this, e, n, t);
            })
          );
        for (o in e) this.off(o, t, e[o]);
        return this;
      },
      trigger: function(e, t) {
        return this.each(function() {
          he.event.trigger(e, t, this);
        });
      },
      triggerHandler: function(e, t) {
        var n = this[0];
        if (n) return he.event.trigger(e, t, n, !0);
      }
    });
  var nt = / jQuery\d+="(?:null|\d+)"/g,
    it = new RegExp("<(?:" + Ve + ")[\\s/>]", "i"),
    ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    rt = /<script|<style|<link/i,
    at = /checked\s*(?:[^=]|=\s*.checked.)/i,
    st = /^true\/(.*)/,
    lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ct = m(ie).appendChild(ie.createElement("div"));
  he.extend({
    htmlPrefilter: function(e) {
      return e.replace(ot, "<$1></$2>");
    },
    clone: function(e, t, n) {
      var i,
        o,
        r,
        a,
        s,
        l = he.contains(e.ownerDocument, e);
      if (
        (de.html5Clone || he.isXMLDoc(e) || !it.test("<" + e.nodeName + ">")
          ? (r = e.cloneNode(!0))
          : ((ct.innerHTML = e.outerHTML), ct.removeChild((r = ct.firstChild))),
        !(
          (de.noCloneEvent && de.noCloneChecked) ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          he.isXMLDoc(e)
        ))
      )
        for (i = v(r), s = v(e), a = 0; null != (o = s[a]); ++a)
          i[a] && k(o, i[a]);
      if (t)
        if (n)
          for (s = s || v(e), i = i || v(r), a = 0; null != (o = s[a]); a++)
            S(o, i[a]);
        else S(e, r);
      return (
        0 < (i = v(r, "script")).length && y(i, !l && v(e, "script")),
        (i = s = o = null),
        r
      );
    },
    cleanData: function(e, t) {
      for (
        var n,
          i,
          o,
          r,
          a = 0,
          s = he.expando,
          l = he.cache,
          c = de.attributes,
          u = he.event.special;
        null != (n = e[a]);
        a++
      )
        if ((t || Ne(n)) && (r = (o = n[s]) && l[o])) {
          if (r.events)
            for (i in r.events)
              u[i] ? he.event.remove(n, i) : he.removeEvent(n, i, r.handle);
          l[o] &&
            (delete l[o],
            c || "undefined" == typeof n.removeAttribute
              ? (n[s] = undefined)
              : n.removeAttribute(s),
            ne.push(o));
        }
    }
  }),
    he.fn.extend({
      domManip: E,
      detach: function(e) {
        return D(this, e, !0);
      },
      remove: function(e) {
        return D(this, e);
      },
      text: function(e) {
        return We(
          this,
          function(e) {
            return e === undefined
              ? he.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || ie).createTextNode(e)
                );
          },
          null,
          e,
          arguments.length
        );
      },
      append: function() {
        return E(this, arguments, function(e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            b(this, e).appendChild(e);
        });
      },
      prepend: function() {
        return E(this, arguments, function(e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = b(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function() {
        return E(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function() {
        return E(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++) {
          for (1 === e.nodeType && he.cleanData(v(e, !1)); e.firstChild; )
            e.removeChild(e.firstChild);
          e.options && he.nodeName(e, "select") && (e.options.length = 0);
        }
        return this;
      },
      clone: function(e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function() {
            return he.clone(this, e, t);
          })
        );
      },
      html: function(e) {
        return We(
          this,
          function(e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (e === undefined)
              return 1 === t.nodeType ? t.innerHTML.replace(nt, "") : undefined;
            if (
              "string" == typeof e &&
              !rt.test(e) &&
              (de.htmlSerialize || !it.test(e)) &&
              (de.leadingWhitespace || !Ue.test(e)) &&
              !Ye[(Fe.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = he.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (he.cleanData(v(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (o) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function() {
        var n = [];
        return E(
          this,
          arguments,
          function(e) {
            var t = this.parentNode;
            he.inArray(this, n) < 0 &&
              (he.cleanData(v(this)), t && t.replaceChild(e, this));
          },
          n
        );
      }
    }),
    he.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      },
      function(e, a) {
        he.fn[e] = function(e) {
          for (var t, n = 0, i = [], o = he(e), r = o.length - 1; n <= r; n++)
            (t = n === r ? this : this.clone(!0)),
              he(o[n])[a](t),
              ae.apply(i, t.get());
          return this.pushStack(i);
        };
      }
    );
  var ut,
    dt = { HTML: "block", BODY: "block" },
    ft = /^margin/,
    ht = new RegExp("^(" + Pe + ")(?!px)[a-z%]+$", "i"),
    pt = function(e, t, n, i) {
      var o,
        r,
        a = {};
      for (r in t) (a[r] = e.style[r]), (e.style[r] = t[r]);
      for (r in ((o = n.apply(e, i || [])), t)) e.style[r] = a[r];
      return o;
    },
    gt = ie.documentElement;
  !(function() {
    function e() {
      var e,
        t,
        n = ie.documentElement;
      n.appendChild(c),
        (u.style.cssText =
          "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
        (i = r = l = !1),
        (o = s = !0),
        _.getComputedStyle &&
          ((t = _.getComputedStyle(u)),
          (i = "1%" !== (t || {}).top),
          (l = "2px" === (t || {}).marginLeft),
          (r = "4px" === (t || { width: "4px" }).width),
          (u.style.marginRight = "50%"),
          (o = "4px" === (t || { marginRight: "4px" }).marginRight),
          ((e = u.appendChild(
            ie.createElement("div")
          )).style.cssText = u.style.cssText =
            "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
          (e.style.marginRight = e.style.width = "0"),
          (u.style.width = "1px"),
          (s = !parseFloat((_.getComputedStyle(e) || {}).marginRight)),
          u.removeChild(e)),
        (u.style.display = "none"),
        (a = 0 === u.getClientRects().length) &&
          ((u.style.display = ""),
          (u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
          (u.childNodes[0].style.borderCollapse = "separate"),
          ((e = u.getElementsByTagName("td"))[0].style.cssText =
            "margin:0;border:0;padding:0;display:none"),
          (a = 0 === e[0].offsetHeight) &&
            ((e[0].style.display = ""),
            (e[1].style.display = "none"),
            (a = 0 === e[0].offsetHeight))),
        n.removeChild(c);
    }
    var i,
      o,
      r,
      a,
      s,
      l,
      c = ie.createElement("div"),
      u = ie.createElement("div");
    u.style &&
      ((u.style.cssText = "float:left;opacity:.5"),
      (de.opacity = "0.5" === u.style.opacity),
      (de.cssFloat = !!u.style.cssFloat),
      (u.style.backgroundClip = "content-box"),
      (u.cloneNode(!0).style.backgroundClip = ""),
      (de.clearCloneStyle = "content-box" === u.style.backgroundClip),
      ((c = ie.createElement("div")).style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      (u.innerHTML = ""),
      c.appendChild(u),
      (de.boxSizing =
        "" === u.style.boxSizing ||
        "" === u.style.MozBoxSizing ||
        "" === u.style.WebkitBoxSizing),
      he.extend(de, {
        reliableHiddenOffsets: function() {
          return null == i && e(), a;
        },
        boxSizingReliable: function() {
          return null == i && e(), r;
        },
        pixelMarginRight: function() {
          return null == i && e(), o;
        },
        pixelPosition: function() {
          return null == i && e(), i;
        },
        reliableMarginRight: function() {
          return null == i && e(), s;
        },
        reliableMarginLeft: function() {
          return null == i && e(), l;
        }
      }));
  })();
  var mt,
    vt,
    yt = /^(top|right|bottom|left)$/;
  _.getComputedStyle
    ? ((mt = function(e) {
        var t = e.ownerDocument.defaultView;
        return (t && t.opener) || (t = _), t.getComputedStyle(e);
      }),
      (vt = function(e, t, n) {
        var i,
          o,
          r,
          a,
          s = e.style;
        return (
          ("" !==
            (a = (n = n || mt(e))
              ? n.getPropertyValue(t) || n[t]
              : undefined) &&
            a !== undefined) ||
            he.contains(e.ownerDocument, e) ||
            (a = he.style(e, t)),
          n &&
            !de.pixelMarginRight() &&
            ht.test(a) &&
            ft.test(t) &&
            ((i = s.width),
            (o = s.minWidth),
            (r = s.maxWidth),
            (s.minWidth = s.maxWidth = s.width = a),
            (a = n.width),
            (s.width = i),
            (s.minWidth = o),
            (s.maxWidth = r)),
          a === undefined ? a : a + ""
        );
      }))
    : gt.currentStyle &&
      ((mt = function(e) {
        return e.currentStyle;
      }),
      (vt = function(e, t, n) {
        var i,
          o,
          r,
          a,
          s = e.style;
        return (
          null == (a = (n = n || mt(e)) ? n[t] : undefined) &&
            s &&
            s[t] &&
            (a = s[t]),
          ht.test(a) &&
            !yt.test(t) &&
            ((i = s.left),
            (r = (o = e.runtimeStyle) && o.left) &&
              (o.left = e.currentStyle.left),
            (s.left = "fontSize" === t ? "1em" : a),
            (a = s.pixelLeft + "px"),
            (s.left = i),
            r && (o.left = r)),
          a === undefined ? a : a + "" || "auto"
        );
      }));
  var wt = /alpha\([^)]*\)/i,
    xt = /opacity\s*=\s*([^)]*)/i,
    bt = /^(none|table(?!-c[ea]).+)/,
    Ct = new RegExp("^(" + Pe + ")(.*)$", "i"),
    _t = { position: "absolute", visibility: "hidden", display: "block" },
    Tt = { letterSpacing: "0", fontWeight: "400" },
    St = ["Webkit", "O", "Moz", "ms"],
    kt = ie.createElement("div").style;
  he.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = vt(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { float: de.cssFloat ? "cssFloat" : "styleFloat" },
    style: function(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          r,
          a,
          s = he.camelCase(t),
          l = e.style;
        if (
          ((t = he.cssProps[s] || (he.cssProps[s] = N(s) || s)),
          (a = he.cssHooks[t] || he.cssHooks[s]),
          n === undefined)
        )
          return a && "get" in a && (o = a.get(e, !1, i)) !== undefined
            ? o
            : l[t];
        if (
          ("string" === (r = typeof n) &&
            (o = Re.exec(n)) &&
            o[1] &&
            ((n = d(e, t, o)), (r = "number")),
          null != n &&
            n == n &&
            ("number" === r &&
              (n += (o && o[3]) || (he.cssNumber[s] ? "" : "px")),
            de.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            !(a && "set" in a && (n = a.set(e, n, i)) === undefined)))
        )
          try {
            l[t] = n;
          } catch (c) {}
      }
    },
    css: function(e, t, n, i) {
      var o,
        r,
        a,
        s = he.camelCase(t);
      return (
        (t = he.cssProps[s] || (he.cssProps[s] = N(s) || s)),
        (a = he.cssHooks[t] || he.cssHooks[s]) &&
          "get" in a &&
          (r = a.get(e, !0, n)),
        r === undefined && (r = vt(e, t, i)),
        "normal" === r && t in Tt && (r = Tt[t]),
        "" === n || n
          ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
          : r
      );
    }
  }),
    he.each(["height", "width"], function(e, o) {
      he.cssHooks[o] = {
        get: function(e, t, n) {
          if (t)
            return bt.test(he.css(e, "display")) && 0 === e.offsetWidth
              ? pt(e, _t, function() {
                  return O(e, o, n);
                })
              : O(e, o, n);
        },
        set: function(e, t, n) {
          var i = n && mt(e);
          return M(
            e,
            t,
            n
              ? H(
                  e,
                  o,
                  n,
                  de.boxSizing &&
                    "border-box" === he.css(e, "boxSizing", !1, i),
                  i
                )
              : 0
          );
        }
      };
    }),
    de.opacity ||
      (he.cssHooks.opacity = {
        get: function(e, t) {
          return xt.test(
            (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : t
            ? "1"
            : "";
        },
        set: function(e, t) {
          var n = e.style,
            i = e.currentStyle,
            o = he.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
            r = (i && i.filter) || n.filter || "";
          (((n.zoom = 1) <= t || "" === t) &&
            "" === he.trim(r.replace(wt, "")) &&
            n.removeAttribute &&
            (n.removeAttribute("filter"), "" === t || (i && !i.filter))) ||
            (n.filter = wt.test(r) ? r.replace(wt, o) : r + " " + o);
        }
      }),
    (he.cssHooks.marginRight = A(de.reliableMarginRight, function(e, t) {
      if (t) return pt(e, { display: "inline-block" }, vt, [e, "marginRight"]);
    })),
    (he.cssHooks.marginLeft = A(de.reliableMarginLeft, function(e, t) {
      if (t)
        return (
          (parseFloat(vt(e, "marginLeft")) ||
            (he.contains(e.ownerDocument, e)
              ? e.getBoundingClientRect().left -
                pt(e, { marginLeft: 0 }, function() {
                  return e.getBoundingClientRect().left;
                })
              : 0)) + "px"
        );
    })),
    he.each({ margin: "", padding: "", border: "Width" }, function(o, r) {
      (he.cssHooks[o + r] = {
        expand: function(e) {
          for (
            var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[o + Ie[t] + r] = i[t] || i[t - 2] || i[0];
          return n;
        }
      }),
        ft.test(o) || (he.cssHooks[o + r].set = M);
    }),
    he.fn.extend({
      css: function(e, t) {
        return We(
          this,
          function(e, t, n) {
            var i,
              o,
              r = {},
              a = 0;
            if (he.isArray(t)) {
              for (i = mt(e), o = t.length; a < o; a++)
                r[t[a]] = he.css(e, t[a], !1, i);
              return r;
            }
            return n !== undefined ? he.style(e, t, n) : he.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
      show: function() {
        return L(this, !0);
      },
      hide: function() {
        return L(this);
      },
      toggle: function(e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function() {
              qe(this) ? he(this).show() : he(this).hide();
            });
      }
    }),
    ((he.Tween = B).prototype = {
      constructor: B,
      init: function(e, t, n, i, o, r) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = o || he.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = r || (he.cssNumber[n] ? "" : "px"));
      },
      cur: function() {
        var e = B.propHooks[this.prop];
        return e && e.get ? e.get(this) : B.propHooks._default.get(this);
      },
      run: function(e) {
        var t,
          n = B.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t = he.easing[this.easing](
                e,
                this.options.duration * e,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : B.propHooks._default.set(this),
          this
        );
      }
    }),
    (B.prototype.init.prototype = B.prototype),
    (B.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = he.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function(e) {
          he.fx.step[e.prop]
            ? he.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[he.cssProps[e.prop]] &&
                !he.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : he.style(e.elem, e.prop, e.now + e.unit);
        }
      }
    }),
    (B.propHooks.scrollTop = B.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }),
    (he.easing = {
      linear: function(e) {
        return e;
      },
      swing: function(e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing"
    }),
    (he.fx = B.prototype.init),
    (he.fx.step = {});
  var Et,
    Dt,
    $t,
    jt,
    At,
    Nt,
    Lt,
    Mt = /^(?:toggle|show|hide)$/,
    Ht = /queueHooks$/;
  (he.Animation = he.extend(z, {
    tweeners: {
      "*": [
        function(e, t) {
          var n = this.createTween(e, t);
          return d(n.elem, e, Re.exec(t), n), n;
        }
      ]
    },
    tweener: function(e, t) {
      he.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(je));
      for (var n, i = 0, o = e.length; i < o; i++)
        (n = e[i]),
          (z.tweeners[n] = z.tweeners[n] || []),
          z.tweeners[n].unshift(t);
    },
    prefilters: [q],
    prefilter: function(e, t) {
      t ? z.prefilters.unshift(e) : z.prefilters.push(e);
    }
  })),
    (he.speed = function(e, t, n) {
      var i =
        e && "object" == typeof e
          ? he.extend({}, e)
          : {
              complete: n || (!n && t) || (he.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !he.isFunction(t) && t)
            };
      return (
        (i.duration = he.fx.off
          ? 0
          : "number" == typeof i.duration
          ? i.duration
          : i.duration in he.fx.speeds
          ? he.fx.speeds[i.duration]
          : he.fx.speeds._default),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function() {
          he.isFunction(i.old) && i.old.call(this),
            i.queue && he.dequeue(this, i.queue);
        }),
        i
      );
    }),
    he.fn.extend({
      fadeTo: function(e, t, n, i) {
        return this.filter(qe)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function(t, e, n, i) {
        var o = he.isEmptyObject(t),
          r = he.speed(e, n, i),
          a = function() {
            var e = z(this, he.extend({}, t), r);
            (o || he._data(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        );
      },
      stop: function(o, e, r) {
        var a = function(e) {
          var t = e.stop;
          delete e.stop, t(r);
        };
        return (
          "string" != typeof o && ((r = e), (e = o), (o = undefined)),
          e && !1 !== o && this.queue(o || "fx", []),
          this.each(function() {
            var e = !0,
              t = null != o && o + "queueHooks",
              n = he.timers,
              i = he._data(this);
            if (t) i[t] && i[t].stop && a(i[t]);
            else for (t in i) i[t] && i[t].stop && Ht.test(t) && a(i[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != o && n[t].queue !== o) ||
                (n[t].anim.stop(r), (e = !1), n.splice(t, 1));
            (!e && r) || he.dequeue(this, o);
          })
        );
      },
      finish: function(a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function() {
            var e,
              t = he._data(this),
              n = t[a + "queue"],
              i = t[a + "queueHooks"],
              o = he.timers,
              r = n ? n.length : 0;
            for (
              t.finish = !0,
                he.queue(this, a, []),
                i && i.stop && i.stop.call(this, !0),
                e = o.length;
              e--;

            )
              o[e].elem === this &&
                o[e].queue === a &&
                (o[e].anim.stop(!0), o.splice(e, 1));
            for (e = 0; e < r; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      }
    }),
    he.each(["toggle", "show", "hide"], function(e, i) {
      var o = he.fn[i];
      he.fn[i] = function(e, t, n) {
        return null == e || "boolean" == typeof e
          ? o.apply(this, arguments)
          : this.animate(R(i, !0), e, t, n);
      };
    }),
    he.each(
      {
        slideDown: R("show"),
        slideUp: R("hide"),
        slideToggle: R("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      },
      function(e, i) {
        he.fn[e] = function(e, t, n) {
          return this.animate(i, e, t, n);
        };
      }
    ),
    (he.timers = []),
    (he.fx.tick = function() {
      var e,
        t = he.timers,
        n = 0;
      for (Et = he.now(); n < t.length; n++)
        (e = t[n])() || t[n] !== e || t.splice(n--, 1);
      t.length || he.fx.stop(), (Et = undefined);
    }),
    (he.fx.timer = function(e) {
      he.timers.push(e), e() ? he.fx.start() : he.timers.pop();
    }),
    (he.fx.interval = 13),
    (he.fx.start = function() {
      Dt || (Dt = _.setInterval(he.fx.tick, he.fx.interval));
    }),
    (he.fx.stop = function() {
      _.clearInterval(Dt), (Dt = null);
    }),
    (he.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (he.fn.delay = function(i, e) {
      return (
        (i = (he.fx && he.fx.speeds[i]) || i),
        (e = e || "fx"),
        this.queue(e, function(e, t) {
          var n = _.setTimeout(e, i);
          t.stop = function() {
            _.clearTimeout(n);
          };
        })
      );
    }),
    (jt = ie.createElement("input")),
    (At = ie.createElement("div")),
    (Nt = ie.createElement("select")),
    (Lt = Nt.appendChild(ie.createElement("option"))),
    (At = ie.createElement("div")).setAttribute("className", "t"),
    (At.innerHTML =
      "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
    ($t = At.getElementsByTagName("a")[0]),
    jt.setAttribute("type", "checkbox"),
    At.appendChild(jt),
    (($t = At.getElementsByTagName("a")[0]).style.cssText = "top:1px"),
    (de.getSetAttribute = "t" !== At.className),
    (de.style = /top/.test($t.getAttribute("style"))),
    (de.hrefNormalized = "/a" === $t.getAttribute("href")),
    (de.checkOn = !!jt.value),
    (de.optSelected = Lt.selected),
    (de.enctype = !!ie.createElement("form").enctype),
    (Nt.disabled = !0),
    (de.optDisabled = !Lt.disabled),
    (jt = ie.createElement("input")).setAttribute("value", ""),
    (de.input = "" === jt.getAttribute("value")),
    (jt.value = "t"),
    jt.setAttribute("type", "radio"),
    (de.radioValue = "t" === jt.value);
  var Ot = /\r/g,
    Bt = /[\x20\t\r\n\f]+/g;
  he.fn.extend({
    val: function(n) {
      var i,
        e,
        o,
        t = this[0];
      return arguments.length
        ? ((o = he.isFunction(n)),
          this.each(function(e) {
            var t;
            1 === this.nodeType &&
              (null == (t = o ? n.call(this, e, he(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : he.isArray(t) &&
                  (t = he.map(t, function(e) {
                    return null == e ? "" : e + "";
                  })),
              ((i =
                he.valHooks[this.type] ||
                he.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in i &&
                i.set(this, t, "value") !== undefined) ||
                (this.value = t));
          }))
        : t
        ? (i = he.valHooks[t.type] || he.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in i &&
          (e = i.get(t, "value")) !== undefined
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(Ot, "")
          : null == e
          ? ""
          : e
        : void 0;
    }
  }),
    he.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = he.find.attr(e, "value");
            return null != t ? t : he.trim(he.text(e)).replace(Bt, " ");
          }
        },
        select: {
          get: function(e) {
            for (
              var t,
                n,
                i = e.options,
                o = e.selectedIndex,
                r = "select-one" === e.type || o < 0,
                a = r ? null : [],
                s = r ? o + 1 : i.length,
                l = o < 0 ? s : r ? o : 0;
              l < s;
              l++
            )
              if (
                ((n = i[l]).selected || l === o) &&
                (de.optDisabled
                  ? !n.disabled
                  : null === n.getAttribute("disabled")) &&
                (!n.parentNode.disabled ||
                  !he.nodeName(n.parentNode, "optgroup"))
              ) {
                if (((t = he(n).val()), r)) return t;
                a.push(t);
              }
            return a;
          },
          set: function(e, t) {
            for (
              var n, i, o = e.options, r = he.makeArray(t), a = o.length;
              a--;

            )
              if (((i = o[a]), -1 < he.inArray(he.valHooks.option.get(i), r)))
                try {
                  i.selected = n = !0;
                } catch (s) {
                  i.scrollHeight;
                }
              else i.selected = !1;
            return n || (e.selectedIndex = -1), o;
          }
        }
      }
    }),
    he.each(["radio", "checkbox"], function() {
      (he.valHooks[this] = {
        set: function(e, t) {
          if (he.isArray(t))
            return (e.checked = -1 < he.inArray(he(e).val(), t));
        }
      }),
        de.checkOn ||
          (he.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var Pt,
    Rt,
    It = he.expr.attrHandle,
    qt = /^(?:checked|selected)$/i,
    Wt = de.getSetAttribute,
    zt = de.input;
  he.fn.extend({
    attr: function(e, t) {
      return We(this, he.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function(e) {
      return this.each(function() {
        he.removeAttr(this, e);
      });
    }
  }),
    he.extend({
      attr: function(e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return "undefined" == typeof e.getAttribute
            ? he.prop(e, t, n)
            : ((1 === r && he.isXMLDoc(e)) ||
                ((t = t.toLowerCase()),
                (o =
                  he.attrHooks[t] || (he.expr.match.bool.test(t) ? Rt : Pt))),
              n !== undefined
                ? null === n
                  ? void he.removeAttr(e, t)
                  : o && "set" in o && (i = o.set(e, n, t)) !== undefined
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : o && "get" in o && null !== (i = o.get(e, t))
                ? i
                : null == (i = he.find.attr(e, t))
                ? undefined
                : i);
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!de.radioValue && "radio" === t && he.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var n,
          i,
          o = 0,
          r = t && t.match(je);
        if (r && 1 === e.nodeType)
          for (; (n = r[o++]); )
            (i = he.propFix[n] || n),
              he.expr.match.bool.test(n)
                ? (zt && Wt) || !qt.test(n)
                  ? (e[i] = !1)
                  : (e[he.camelCase("default-" + n)] = e[i] = !1)
                : he.attr(e, n, ""),
              e.removeAttribute(Wt ? n : i);
      }
    }),
    (Rt = {
      set: function(e, t, n) {
        return (
          !1 === t
            ? he.removeAttr(e, n)
            : (zt && Wt) || !qt.test(n)
            ? e.setAttribute((!Wt && he.propFix[n]) || n, n)
            : (e[he.camelCase("default-" + n)] = e[n] = !0),
          n
        );
      }
    }),
    he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var r = It[t] || he.find.attr;
      (zt && Wt) || !qt.test(t)
        ? (It[t] = function(e, t, n) {
            var i, o;
            return (
              n ||
                ((o = It[t]),
                (It[t] = i),
                (i = null != r(e, t, n) ? t.toLowerCase() : null),
                (It[t] = o)),
              i
            );
          })
        : (It[t] = function(e, t, n) {
            if (!n)
              return e[he.camelCase("default-" + t)] ? t.toLowerCase() : null;
          });
    }),
    (zt && Wt) ||
      (he.attrHooks.value = {
        set: function(e, t, n) {
          if (!he.nodeName(e, "input")) return Pt && Pt.set(e, t, n);
          e.defaultValue = t;
        }
      }),
    Wt ||
      ((Pt = {
        set: function(e, t, n) {
          var i = e.getAttributeNode(n);
          if (
            (i || e.setAttributeNode((i = e.ownerDocument.createAttribute(n))),
            (i.value = t += ""),
            "value" === n || t === e.getAttribute(n))
          )
            return t;
        }
      }),
      (It.id = It.name = It.coords = function(e, t, n) {
        var i;
        if (!n)
          return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null;
      }),
      (he.valHooks.button = {
        get: function(e, t) {
          var n = e.getAttributeNode(t);
          if (n && n.specified) return n.value;
        },
        set: Pt.set
      }),
      (he.attrHooks.contenteditable = {
        set: function(e, t, n) {
          Pt.set(e, "" !== t && t, n);
        }
      }),
      he.each(["width", "height"], function(e, n) {
        he.attrHooks[n] = {
          set: function(e, t) {
            if ("" === t) return e.setAttribute(n, "auto"), t;
          }
        };
      })),
    de.style ||
      (he.attrHooks.style = {
        get: function(e) {
          return e.style.cssText || undefined;
        },
        set: function(e, t) {
          return (e.style.cssText = t + "");
        }
      });
  var Ft = /^(?:input|select|textarea|button|object)$/i,
    Xt = /^(?:a|area)$/i;
  he.fn.extend({
    prop: function(e, t) {
      return We(this, he.prop, e, t, 1 < arguments.length);
    },
    removeProp: function(t) {
      return (
        (t = he.propFix[t] || t),
        this.each(function() {
          try {
            (this[t] = undefined), delete this[t];
          } catch (e) {}
        })
      );
    }
  }),
    he.extend({
      prop: function(e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return (
            (1 === r && he.isXMLDoc(e)) ||
              ((t = he.propFix[t] || t), (o = he.propHooks[t])),
            n !== undefined
              ? o && "set" in o && (i = o.set(e, n, t)) !== undefined
                ? i
                : (e[t] = n)
              : o && "get" in o && null !== (i = o.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = he.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : Ft.test(e.nodeName) || (Xt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          }
        }
      },
      propFix: { for: "htmlFor", class: "className" }
    }),
    de.hrefNormalized ||
      he.each(["href", "src"], function(e, t) {
        he.propHooks[t] = {
          get: function(e) {
            return e.getAttribute(t, 4);
          }
        };
      }),
    de.optSelected ||
      (he.propHooks.selected = {
        get: function(e) {
          var t = e.parentNode;
          return (
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
          );
        },
        set: function(e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
      }),
    he.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ],
      function() {
        he.propFix[this.toLowerCase()] = this;
      }
    ),
    de.enctype || (he.propFix.enctype = "encoding");
  var Ut = /[\t\r\n\f]/g;
  he.fn.extend({
    addClass: function(t) {
      var e,
        n,
        i,
        o,
        r,
        a,
        s,
        l = 0;
      if (he.isFunction(t))
        return this.each(function(e) {
          he(this).addClass(t.call(this, e, F(this)));
        });
      if ("string" == typeof t && t)
        for (e = t.match(je) || []; (n = this[l++]); )
          if (
            ((o = F(n)),
            (i = 1 === n.nodeType && (" " + o + " ").replace(Ut, " ")))
          ) {
            for (a = 0; (r = e[a++]); )
              i.indexOf(" " + r + " ") < 0 && (i += r + " ");
            o !== (s = he.trim(i)) && he.attr(n, "class", s);
          }
      return this;
    },
    removeClass: function(t) {
      var e,
        n,
        i,
        o,
        r,
        a,
        s,
        l = 0;
      if (he.isFunction(t))
        return this.each(function(e) {
          he(this).removeClass(t.call(this, e, F(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof t && t)
        for (e = t.match(je) || []; (n = this[l++]); )
          if (
            ((o = F(n)),
            (i = 1 === n.nodeType && (" " + o + " ").replace(Ut, " ")))
          ) {
            for (a = 0; (r = e[a++]); )
              for (; -1 < i.indexOf(" " + r + " "); )
                i = i.replace(" " + r + " ", " ");
            o !== (s = he.trim(i)) && he.attr(n, "class", s);
          }
      return this;
    },
    toggleClass: function(o, t) {
      var r = typeof o;
      return "boolean" == typeof t && "string" === r
        ? t
          ? this.addClass(o)
          : this.removeClass(o)
        : he.isFunction(o)
        ? this.each(function(e) {
            he(this).toggleClass(o.call(this, e, F(this), t), t);
          })
        : this.each(function() {
            var e, t, n, i;
            if ("string" === r)
              for (t = 0, n = he(this), i = o.match(je) || []; (e = i[t++]); )
                n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
            else
              (o !== undefined && "boolean" !== r) ||
                ((e = F(this)) && he._data(this, "__className__", e),
                he.attr(
                  this,
                  "class",
                  e || !1 === o ? "" : he._data(this, "__className__") || ""
                ));
          });
    },
    hasClass: function(e) {
      var t,
        n,
        i = 0;
      for (t = " " + e + " "; (n = this[i++]); )
        if (
          1 === n.nodeType &&
          -1 < (" " + F(n) + " ").replace(Ut, " ").indexOf(t)
        )
          return !0;
      return !1;
    }
  }),
    he.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function(e, n) {
        he.fn[n] = function(e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    ),
    he.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    });
  var Vt = _.location,
    Yt = he.now(),
    Qt = /\?/,
    Gt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (he.parseJSON = function(e) {
    if (_.JSON && _.JSON.parse) return _.JSON.parse(e + "");
    var o,
      r = null,
      t = he.trim(e + "");
    return t &&
      !he.trim(
        t.replace(Gt, function(e, t, n, i) {
          return (
            o && t && (r = 0), 0 === r ? e : ((o = n || t), (r += !i - !n), "")
          );
        })
      )
      ? Function("return " + t)()
      : he.error("Invalid JSON: " + e);
  }),
    (he.parseXML = function(e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        _.DOMParser
          ? (t = new _.DOMParser().parseFromString(e, "text/xml"))
          : (((t = new _.ActiveXObject("Microsoft.XMLDOM")).async = "false"),
            t.loadXML(e));
      } catch (n) {
        t = undefined;
      }
      return (
        (t &&
          t.documentElement &&
          !t.getElementsByTagName("parsererror").length) ||
          he.error("Invalid XML: " + e),
        t
      );
    });
  var Jt = /#.*$/,
    Zt = /([?&])_=[^&]*/,
    Kt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    en = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    tn = /^(?:GET|HEAD)$/,
    nn = /^\/\//,
    on = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    rn = {},
    an = {},
    sn = "*/".concat("*"),
    ln = Vt.href,
    cn = on.exec(ln.toLowerCase()) || [];
  he.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ln,
      type: "GET",
      isLocal: en.test(cn[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": sn,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": he.parseJSON,
        "text xml": he.parseXML
      },
      flatOptions: { url: !0, context: !0 }
    },
    ajaxSetup: function(e, t) {
      return t ? V(V(e, he.ajaxSettings), t) : V(he.ajaxSettings, e);
    },
    ajaxPrefilter: X(rn),
    ajaxTransport: X(an),
    ajax: function(e, t) {
      function n(e, t, n, i) {
        var o,
          r,
          a,
          s,
          l,
          c = t;
        2 !== b &&
          ((b = 2),
          f && _.clearTimeout(f),
          (p = undefined),
          (d = i || ""),
          (C.readyState = 0 < e ? 4 : 0),
          (o = (200 <= e && e < 300) || 304 === e),
          n && (s = Y(g, C, n)),
          (s = Q(g, s, C, o)),
          o
            ? (g.ifModified &&
                ((l = C.getResponseHeader("Last-Modified")) &&
                  (he.lastModified[u] = l),
                (l = C.getResponseHeader("etag")) && (he.etag[u] = l)),
              204 === e || "HEAD" === g.type
                ? (c = "nocontent")
                : 304 === e
                ? (c = "notmodified")
                : ((c = s.state), (r = s.data), (o = !(a = s.error))))
            : ((a = c), (!e && c) || ((c = "error"), e < 0 && (e = 0))),
          (C.status = e),
          (C.statusText = (t || c) + ""),
          o ? y.resolveWith(m, [r, c, C]) : y.rejectWith(m, [C, c, a]),
          C.statusCode(x),
          (x = undefined),
          h && v.trigger(o ? "ajaxSuccess" : "ajaxError", [C, g, o ? r : a]),
          w.fireWith(m, [C, c]),
          h &&
            (v.trigger("ajaxComplete", [C, g]),
            --he.active || he.event.trigger("ajaxStop")));
      }
      "object" == typeof e && ((t = e), (e = undefined)), (t = t || {});
      var i,
        o,
        u,
        d,
        f,
        h,
        p,
        r,
        g = he.ajaxSetup({}, t),
        m = g.context || g,
        v = g.context && (m.nodeType || m.jquery) ? he(m) : he.event,
        y = he.Deferred(),
        w = he.Callbacks("once memory"),
        x = g.statusCode || {},
        a = {},
        s = {},
        b = 0,
        l = "canceled",
        C = {
          readyState: 0,
          getResponseHeader: function(e) {
            var t;
            if (2 === b) {
              if (!r)
                for (r = {}; (t = Kt.exec(d)); ) r[t[1].toLowerCase()] = t[2];
              t = r[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function() {
            return 2 === b ? d : null;
          },
          setRequestHeader: function(e, t) {
            var n = e.toLowerCase();
            return b || ((e = s[n] = s[n] || e), (a[e] = t)), this;
          },
          overrideMimeType: function(e) {
            return b || (g.mimeType = e), this;
          },
          statusCode: function(e) {
            var t;
            if (e)
              if (b < 2) for (t in e) x[t] = [x[t], e[t]];
              else C.always(e[C.status]);
            return this;
          },
          abort: function(e) {
            var t = e || l;
            return p && p.abort(t), n(0, t), this;
          }
        };
      if (
        ((y.promise(C).complete = w.add),
        (C.success = C.done),
        (C.error = C.fail),
        (g.url = ((e || g.url || ln) + "")
          .replace(Jt, "")
          .replace(nn, cn[1] + "//")),
        (g.type = t.method || t.type || g.method || g.type),
        (g.dataTypes = he
          .trim(g.dataType || "*")
          .toLowerCase()
          .match(je) || [""]),
        null == g.crossDomain &&
          ((i = on.exec(g.url.toLowerCase())),
          (g.crossDomain = !(
            !i ||
            (i[1] === cn[1] &&
              i[2] === cn[2] &&
              (i[3] || ("http:" === i[1] ? "80" : "443")) ===
                (cn[3] || ("http:" === cn[1] ? "80" : "443")))
          ))),
        g.data &&
          g.processData &&
          "string" != typeof g.data &&
          (g.data = he.param(g.data, g.traditional)),
        U(rn, g, t, C),
        2 === b)
      )
        return C;
      for (o in ((h = he.event && g.global) &&
        0 == he.active++ &&
        he.event.trigger("ajaxStart"),
      (g.type = g.type.toUpperCase()),
      (g.hasContent = !tn.test(g.type)),
      (u = g.url),
      g.hasContent ||
        (g.data &&
          ((u = g.url += (Qt.test(u) ? "&" : "?") + g.data), delete g.data),
        !1 === g.cache &&
          (g.url = Zt.test(u)
            ? u.replace(Zt, "$1_=" + Yt++)
            : u + (Qt.test(u) ? "&" : "?") + "_=" + Yt++)),
      g.ifModified &&
        (he.lastModified[u] &&
          C.setRequestHeader("If-Modified-Since", he.lastModified[u]),
        he.etag[u] && C.setRequestHeader("If-None-Match", he.etag[u])),
      ((g.data && g.hasContent && !1 !== g.contentType) || t.contentType) &&
        C.setRequestHeader("Content-Type", g.contentType),
      C.setRequestHeader(
        "Accept",
        g.dataTypes[0] && g.accepts[g.dataTypes[0]]
          ? g.accepts[g.dataTypes[0]] +
              ("*" !== g.dataTypes[0] ? ", " + sn + "; q=0.01" : "")
          : g.accepts["*"]
      ),
      g.headers))
        C.setRequestHeader(o, g.headers[o]);
      if (g.beforeSend && (!1 === g.beforeSend.call(m, C, g) || 2 === b))
        return C.abort();
      for (o in ((l = "abort"), { success: 1, error: 1, complete: 1 }))
        C[o](g[o]);
      if ((p = U(an, g, t, C))) {
        if (((C.readyState = 1), h && v.trigger("ajaxSend", [C, g]), 2 === b))
          return C;
        g.async &&
          0 < g.timeout &&
          (f = _.setTimeout(function() {
            C.abort("timeout");
          }, g.timeout));
        try {
          (b = 1), p.send(a, n);
        } catch (c) {
          if (!(b < 2)) throw c;
          n(-1, c);
        }
      } else n(-1, "No Transport");
      return C;
    },
    getJSON: function(e, t, n) {
      return he.get(e, t, n, "json");
    },
    getScript: function(e, t) {
      return he.get(e, undefined, t, "script");
    }
  }),
    he.each(["get", "post"], function(e, o) {
      he[o] = function(e, t, n, i) {
        return (
          he.isFunction(t) && ((i = i || n), (n = t), (t = undefined)),
          he.ajax(
            he.extend(
              { url: e, type: o, dataType: i, data: t, success: n },
              he.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (he._evalUrl = function(e) {
      return he.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0
      });
    }),
    he.fn.extend({
      wrapAll: function(t) {
        if (he.isFunction(t))
          return this.each(function(e) {
            he(this).wrapAll(t.call(this, e));
          });
        if (this[0]) {
          var e = he(t, this[0].ownerDocument)
            .eq(0)
            .clone(!0);
          this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function() {
                for (
                  var e = this;
                  e.firstChild && 1 === e.firstChild.nodeType;

                )
                  e = e.firstChild;
                return e;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function(n) {
        return he.isFunction(n)
          ? this.each(function(e) {
              he(this).wrapInner(n.call(this, e));
            })
          : this.each(function() {
              var e = he(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function(t) {
        var n = he.isFunction(t);
        return this.each(function(e) {
          he(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function() {
        return this.parent()
          .each(function() {
            he.nodeName(this, "body") || he(this).replaceWith(this.childNodes);
          })
          .end();
      }
    }),
    (he.expr.filters.hidden = function(e) {
      return de.reliableHiddenOffsets()
        ? e.offsetWidth <= 0 &&
            e.offsetHeight <= 0 &&
            !e.getClientRects().length
        : J(e);
    }),
    (he.expr.filters.visible = function(e) {
      return !he.expr.filters.hidden(e);
    });
  var un = /%20/g,
    dn = /\[\]$/,
    fn = /\r?\n/g,
    hn = /^(?:submit|button|image|reset|file)$/i,
    pn = /^(?:input|select|textarea|keygen)/i;
  (he.param = function(e, t) {
    var n,
      i = [],
      o = function(e, t) {
        (t = he.isFunction(t) ? t() : null == t ? "" : t),
          (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
      };
    if (
      (t === undefined && (t = he.ajaxSettings && he.ajaxSettings.traditional),
      he.isArray(e) || (e.jquery && !he.isPlainObject(e)))
    )
      he.each(e, function() {
        o(this.name, this.value);
      });
    else for (n in e) Z(n, e[n], t, o);
    return i.join("&").replace(un, "+");
  }),
    he.fn.extend({
      serialize: function() {
        return he.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var e = he.prop(this, "elements");
          return e ? he.makeArray(e) : this;
        })
          .filter(function() {
            var e = this.type;
            return (
              this.name &&
              !he(this).is(":disabled") &&
              pn.test(this.nodeName) &&
              !hn.test(e) &&
              (this.checked || !ze.test(e))
            );
          })
          .map(function(e, t) {
            var n = he(this).val();
            return null == n
              ? null
              : he.isArray(n)
              ? he.map(n, function(e) {
                  return { name: t.name, value: e.replace(fn, "\r\n") };
                })
              : { name: t.name, value: n.replace(fn, "\r\n") };
          })
          .get();
      }
    }),
    (he.ajaxSettings.xhr =
      _.ActiveXObject !== undefined
        ? function() {
            return this.isLocal
              ? ee()
              : 8 < ie.documentMode
              ? K()
              : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                  K()) ||
                ee();
          }
        : K);
  var gn = 0,
    mn = {},
    vn = he.ajaxSettings.xhr();
  _.attachEvent &&
    _.attachEvent("onunload", function() {
      for (var e in mn) mn[e](undefined, !0);
    }),
    (de.cors = !!vn && "withCredentials" in vn),
    (vn = de.ajax = !!vn) &&
      he.ajaxTransport(function(c) {
        var u;
        if (!c.crossDomain || de.cors)
          return {
            send: function(e, a) {
              var t,
                s = c.xhr(),
                l = ++gn;
              if (
                (s.open(c.type, c.url, c.async, c.username, c.password),
                c.xhrFields)
              )
                for (t in c.xhrFields) s[t] = c.xhrFields[t];
              for (t in (c.mimeType &&
                s.overrideMimeType &&
                s.overrideMimeType(c.mimeType),
              c.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest"),
              e))
                e[t] !== undefined && s.setRequestHeader(t, e[t] + "");
              s.send((c.hasContent && c.data) || null),
                (u = function(e, t) {
                  var n, i, o;
                  if (u && (t || 4 === s.readyState))
                    if (
                      (delete mn[l],
                      (u = undefined),
                      (s.onreadystatechange = he.noop),
                      t)
                    )
                      4 !== s.readyState && s.abort();
                    else {
                      (o = {}),
                        (n = s.status),
                        "string" == typeof s.responseText &&
                          (o.text = s.responseText);
                      try {
                        i = s.statusText;
                      } catch (r) {
                        i = "";
                      }
                      n || !c.isLocal || c.crossDomain
                        ? 1223 === n && (n = 204)
                        : (n = o.text ? 200 : 404);
                    }
                  o && a(n, i, o, s.getAllResponseHeaders());
                }),
                c.async
                  ? 4 === s.readyState
                    ? _.setTimeout(u)
                    : (s.onreadystatechange = mn[l] = u)
                  : u();
            },
            abort: function() {
              u && u(undefined, !0);
            }
          };
      }),
    he.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function(e) {
          return he.globalEval(e), e;
        }
      }
    }),
    he.ajaxPrefilter("script", function(e) {
      e.cache === undefined && (e.cache = !1),
        e.crossDomain && ((e.type = "GET"), (e.global = !1));
    }),
    he.ajaxTransport("script", function(t) {
      if (t.crossDomain) {
        var i,
          o = ie.head || he("head")[0] || ie.documentElement;
        return {
          send: function(e, n) {
            ((i = ie.createElement("script")).async = !0),
              t.scriptCharset && (i.charset = t.scriptCharset),
              (i.src = t.url),
              (i.onload = i.onreadystatechange = function(e, t) {
                (t || !i.readyState || /loaded|complete/.test(i.readyState)) &&
                  ((i.onload = i.onreadystatechange = null),
                  i.parentNode && i.parentNode.removeChild(i),
                  (i = null),
                  t || n(200, "success"));
              }),
              o.insertBefore(i, o.firstChild);
          },
          abort: function() {
            i && i.onload(undefined, !0);
          }
        };
      }
    });
  var yn = [],
    wn = /(=)\?(?=&|$)|\?\?/;
  he.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = yn.pop() || he.expando + "_" + Yt++;
      return (this[e] = !0), e;
    }
  }),
    he.ajaxPrefilter("json jsonp", function(e, t, n) {
      var i,
        o,
        r,
        a =
          !1 !== e.jsonp &&
          (wn.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              wn.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (i = e.jsonpCallback = he.isFunction(e.jsonpCallback)
            ? e.jsonpCallback()
            : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(wn, "$1" + i))
            : !1 !== e.jsonp &&
              (e.url += (Qt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
          (e.converters["script json"] = function() {
            return r || he.error(i + " was not called"), r[0];
          }),
          (e.dataTypes[0] = "json"),
          (o = _[i]),
          (_[i] = function() {
            r = arguments;
          }),
          n.always(function() {
            o === undefined ? he(_).removeProp(i) : (_[i] = o),
              e[i] && ((e.jsonpCallback = t.jsonpCallback), yn.push(i)),
              r && he.isFunction(o) && o(r[0]),
              (r = o = undefined);
          }),
          "script"
        );
    }),
    (he.parseHTML = function(e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && ((n = t), (t = !1)), (t = t || ie);
      var i = Ce.exec(e),
        o = !n && [];
      return i
        ? [t.createElement(i[1])]
        : ((i = g([e], t, o)),
          o && o.length && he(o).remove(),
          he.merge([], i.childNodes));
    });
  var xn = he.fn.load;
  (he.fn.load = function(e, t, n) {
    if ("string" != typeof e && xn) return xn.apply(this, arguments);
    var i,
      o,
      r,
      a = this,
      s = e.indexOf(" ");
    return (
      -1 < s && ((i = he.trim(e.slice(s, e.length))), (e = e.slice(0, s))),
      he.isFunction(t)
        ? ((n = t), (t = undefined))
        : t && "object" == typeof t && (o = "POST"),
      0 < a.length &&
        he
          .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
          .done(function(e) {
            (r = arguments),
              a.html(
                i
                  ? he("<div>")
                      .append(he.parseHTML(e))
                      .find(i)
                  : e
              );
          })
          .always(
            n &&
              function(e, t) {
                a.each(function() {
                  n.apply(this, r || [e.responseText, t, e]);
                });
              }
          ),
      this
    );
  }),
    he.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ],
      function(e, t) {
        he.fn[t] = function(e) {
          return this.on(t, e);
        };
      }
    ),
    (he.expr.filters.animated = function(t) {
      return he.grep(he.timers, function(e) {
        return t === e.elem;
      }).length;
    }),
    (he.offset = {
      setOffset: function(e, t, n) {
        var i,
          o,
          r,
          a,
          s,
          l,
          c = he.css(e, "position"),
          u = he(e),
          d = {};
        "static" === c && (e.style.position = "relative"),
          (s = u.offset()),
          (r = he.css(e, "top")),
          (l = he.css(e, "left")),
          ("absolute" === c || "fixed" === c) && -1 < he.inArray("auto", [r, l])
            ? ((a = (i = u.position()).top), (o = i.left))
            : ((a = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
          he.isFunction(t) && (t = t.call(e, n, he.extend({}, s))),
          null != t.top && (d.top = t.top - s.top + a),
          null != t.left && (d.left = t.left - s.left + o),
          "using" in t ? t.using.call(e, d) : u.css(d);
      }
    }),
    he.fn.extend({
      offset: function(t) {
        if (arguments.length)
          return t === undefined
            ? this
            : this.each(function(e) {
                he.offset.setOffset(this, t, e);
              });
        var e,
          n,
          i = { top: 0, left: 0 },
          o = this[0],
          r = o && o.ownerDocument;
        return r
          ? ((e = r.documentElement),
            he.contains(e, o)
              ? ("undefined" != typeof o.getBoundingClientRect &&
                  (i = o.getBoundingClientRect()),
                (n = te(r)),
                {
                  top:
                    i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                  left:
                    i.left +
                    (n.pageXOffset || e.scrollLeft) -
                    (e.clientLeft || 0)
                })
              : i)
          : void 0;
      },
      position: function() {
        if (this[0]) {
          var e,
            t,
            n = { top: 0, left: 0 },
            i = this[0];
          return (
            "fixed" === he.css(i, "position")
              ? (t = i.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                he.nodeName(e[0], "html") || (n = e.offset()),
                (n.top += he.css(e[0], "borderTopWidth", !0)),
                (n.left += he.css(e[0], "borderLeftWidth", !0))),
            {
              top: t.top - n.top - he.css(i, "marginTop", !0),
              left: t.left - n.left - he.css(i, "marginLeft", !0)
            }
          );
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (
            var e = this.offsetParent;
            e && !he.nodeName(e, "html") && "static" === he.css(e, "position");

          )
            e = e.offsetParent;
          return e || gt;
        });
      }
    }),
    he.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(
      t,
      o
    ) {
      var r = /Y/.test(o);
      he.fn[t] = function(e) {
        return We(
          this,
          function(e, t, n) {
            var i = te(e);
            if (n === undefined)
              return i ? (o in i ? i[o] : i.document.documentElement[t]) : e[t];
            i
              ? i.scrollTo(
                  r ? he(i).scrollLeft() : n,
                  r ? n : he(i).scrollTop()
                )
              : (e[t] = n);
          },
          t,
          e,
          arguments.length,
          null
        );
      };
    }),
    he.each(["top", "left"], function(e, n) {
      he.cssHooks[n] = A(de.pixelPosition, function(e, t) {
        if (t)
          return (t = vt(e, n)), ht.test(t) ? he(e).position()[n] + "px" : t;
      });
    }),
    he.each({ Height: "height", Width: "width" }, function(r, a) {
      he.each({ padding: "inner" + r, content: a, "": "outer" + r }, function(
        i,
        e
      ) {
        he.fn[e] = function(e, t) {
          var n = arguments.length && (i || "boolean" != typeof e),
            o = i || (!0 === e || !0 === t ? "margin" : "border");
          return We(
            this,
            function(e, t, n) {
              var i;
              return he.isWindow(e)
                ? e.document.documentElement["client" + r]
                : 9 === e.nodeType
                ? ((i = e.documentElement),
                  Math.max(
                    e.body["scroll" + r],
                    i["scroll" + r],
                    e.body["offset" + r],
                    i["offset" + r],
                    i["client" + r]
                  ))
                : n === undefined
                ? he.css(e, t, o)
                : he.style(e, t, n, o);
            },
            a,
            n ? e : undefined,
            n,
            null
          );
        };
      });
    }),
    he.fn.extend({
      bind: function(e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function(e, t) {
        return this.off(e, null, t);
      },
      delegate: function(e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function(e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      }
    }),
    (he.fn.size = function() {
      return this.length;
    }),
    (he.fn.andSelf = he.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function() {
        return he;
      });
  var bn = _.jQuery,
    Cn = _.$;
  return (
    (he.noConflict = function(e) {
      return (
        _.$ === he && (_.$ = Cn), e && _.jQuery === he && (_.jQuery = bn), he
      );
    }),
    e || (_.jQuery = _.$ = he),
    he
  );
}),
  (function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function(e) {
              if (!e.document)
                throw new Error("jQuery requires a window with a document");
              return t(e);
            })
      : t(e);
  })("undefined" != typeof window ? window : this, function(_, e) {
    "use strict";
    function g(e, t, n) {
      var i,
        o,
        r = (n = n || de).createElement("script");
      if (((r.text = e), t))
        for (i in fe)
          (o = t[i] || (t.getAttribute && t.getAttribute(i))) &&
            r.setAttribute(i, o);
      n.head.appendChild(r).parentNode.removeChild(r);
    }
    function m(e) {
      return null == e
        ? e + ""
        : "object" == typeof e || "function" == typeof e
        ? ie[oe.call(e)] || "object"
        : typeof e;
    }
    function s(e) {
      var t = !!e && "length" in e && e.length,
        n = m(e);
      return (
        !ce(e) &&
        !ue(e) &&
        ("array" === n ||
          0 === t ||
          ("number" == typeof t && 0 < t && t - 1 in e))
      );
    }
    function c(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    function t(e, n, i) {
      return ce(n)
        ? pe.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i;
          })
        : n.nodeType
        ? pe.grep(e, function(e) {
            return (e === n) !== i;
          })
        : "string" != typeof n
        ? pe.grep(e, function(e) {
            return -1 < ne.call(n, e) !== i;
          })
        : pe.filter(n, e, i);
    }
    function n(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; );
      return e;
    }
    function u(e) {
      return e;
    }
    function d(e) {
      throw e;
    }
    function l(e, t, n, i) {
      var o;
      try {
        e && ce((o = e.promise))
          ? o
              .call(e)
              .done(t)
              .fail(n)
          : e && ce((o = e.then))
          ? o.call(e, t, n)
          : t.apply(void 0, [e].slice(i));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }
    function i() {
      de.removeEventListener("DOMContentLoaded", i),
        _.removeEventListener("load", i),
        pe.ready();
    }
    function o(e, t) {
      return t.toUpperCase();
    }
    function f(e) {
      return e.replace(De, "ms-").replace($e, o);
    }
    function r() {
      this.expando = pe.expando + r.uid++;
    }
    function h(e, t, n) {
      var i, o;
      if (void 0 === n && 1 === e.nodeType)
        if (
          ((i = "data-" + t.replace(Me, "-$&").toLowerCase()),
          "string" == typeof (n = e.getAttribute(i)))
        ) {
          try {
            n =
              "true" === (o = n) ||
              ("false" !== o &&
                ("null" === o
                  ? null
                  : o === +o + ""
                  ? +o
                  : Le.test(o)
                  ? JSON.parse(o)
                  : o));
          } catch (e) {}
          Ne.set(e, t, n);
        } else n = void 0;
      return n;
    }
    function p(e, t, n, i) {
      var o,
        r,
        a = 20,
        s = i
          ? function() {
              return i.cur();
            }
          : function() {
              return pe.css(e, t, "");
            },
        l = s(),
        c = (n && n[3]) || (pe.cssNumber[t] ? "" : "px"),
        u =
          e.nodeType &&
          (pe.cssNumber[t] || ("px" !== c && +l)) &&
          Oe.exec(pe.css(e, t));
      if (u && u[3] !== c) {
        for (l /= 2, c = c || u[3], u = +l || 1; a--; )
          pe.style(e, t, u + c),
            (1 - r) * (1 - (r = s() / l || 0.5)) <= 0 && (a = 0),
            (u /= r);
        (u *= 2), pe.style(e, t, u + c), (n = n || []);
      }
      return (
        n &&
          ((u = +u || +l || 0),
          (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
          i && ((i.unit = c), (i.start = u), (i.end = o))),
        o
      );
    }
    function v(e, t) {
      for (var n, i, o, r, a, s, l, c = [], u = 0, d = e.length; u < d; u++)
        (i = e[u]).style &&
          ((n = i.style.display),
          t
            ? ("none" === n &&
                ((c[u] = Ae.get(i, "display") || null),
                c[u] || (i.style.display = "")),
              "" === i.style.display &&
                qe(i) &&
                (c[u] =
                  ((l = a = r = void 0),
                  (a = (o = i).ownerDocument),
                  (s = o.nodeName),
                  (l = We[s]) ||
                    ((r = a.body.appendChild(a.createElement(s))),
                    (l = pe.css(r, "display")),
                    r.parentNode.removeChild(r),
                    "none" === l && (l = "block"),
                    (We[s] = l)))))
            : "none" !== n && ((c[u] = "none"), Ae.set(i, "display", n)));
      for (u = 0; u < d; u++) null != c[u] && (e[u].style.display = c[u]);
      return e;
    }
    function y(e, t) {
      var n;
      return (
        (n =
          "undefined" != typeof e.getElementsByTagName
            ? e.getElementsByTagName(t || "*")
            : "undefined" != typeof e.querySelectorAll
            ? e.querySelectorAll(t || "*")
            : []),
        void 0 === t || (t && c(e, t)) ? pe.merge([e], n) : n
      );
    }
    function w(e, t) {
      for (var n = 0, i = e.length; n < i; n++)
        Ae.set(e[n], "globalEval", !t || Ae.get(t[n], "globalEval"));
    }
    function x(e, t, n, i, o) {
      for (
        var r,
          a,
          s,
          l,
          c,
          u,
          d = t.createDocumentFragment(),
          f = [],
          h = 0,
          p = e.length;
        h < p;
        h++
      )
        if ((r = e[h]) || 0 === r)
          if ("object" === m(r)) pe.merge(f, r.nodeType ? [r] : r);
          else if (Qe.test(r)) {
            for (
              a = a || d.appendChild(t.createElement("div")),
                s = (Ue.exec(r) || ["", ""])[1].toLowerCase(),
                l = Ye[s] || Ye._default,
                a.innerHTML = l[1] + pe.htmlPrefilter(r) + l[2],
                u = l[0];
              u--;

            )
              a = a.lastChild;
            pe.merge(f, a.childNodes), ((a = d.firstChild).textContent = "");
          } else f.push(t.createTextNode(r));
      for (d.textContent = "", h = 0; (r = f[h++]); )
        if (i && -1 < pe.inArray(r, i)) o && o.push(r);
        else if (
          ((c = Re(r)), (a = y(d.appendChild(r), "script")), c && w(a), n)
        )
          for (u = 0; (r = a[u++]); ) Ve.test(r.type || "") && n.push(r);
      return d;
    }
    function a() {
      return !0;
    }
    function b() {
      return !1;
    }
    function C(e, t) {
      return (
        (e ===
          (function() {
            try {
              return de.activeElement;
            } catch (e) {}
          })()) ==
        ("focus" === t)
      );
    }
    function T(e, t, n, i, o, r) {
      var a, s;
      if ("object" == typeof t) {
        for (s in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
          T(e, s, n, i, t[s], r);
        return e;
      }
      if (
        (null == i && null == o
          ? ((o = n), (i = n = void 0))
          : null == o &&
            ("string" == typeof n
              ? ((o = i), (i = void 0))
              : ((o = i), (i = n), (n = void 0))),
        !1 === o)
      )
        o = b;
      else if (!o) return e;
      return (
        1 === r &&
          ((a = o),
          ((o = function(e) {
            return pe().off(e), a.apply(this, arguments);
          }).guid = a.guid || (a.guid = pe.guid++))),
        e.each(function() {
          pe.event.add(this, t, o, i, n);
        })
      );
    }
    function S(e, o, r) {
      r
        ? (Ae.set(e, o, !1),
          pe.event.add(e, o, {
            namespace: !1,
            handler: function(e) {
              var t,
                n,
                i = Ae.get(this, o);
              if (1 & e.isTrigger && this[o]) {
                if (i.length)
                  (pe.event.special[o] || {}).delegateType &&
                    e.stopPropagation();
                else if (
                  ((i = K.call(arguments)),
                  Ae.set(this, o, i),
                  (t = r(this, o)),
                  this[o](),
                  i !== (n = Ae.get(this, o)) || t
                    ? Ae.set(this, o, !1)
                    : (n = {}),
                  i !== n)
                )
                  return (
                    e.stopImmediatePropagation(), e.preventDefault(), n.value
                  );
              } else
                i.length &&
                  (Ae.set(this, o, {
                    value: pe.event.trigger(
                      pe.extend(i[0], pe.Event.prototype),
                      i.slice(1),
                      this
                    )
                  }),
                  e.stopImmediatePropagation());
            }
          }))
        : void 0 === Ae.get(e, o) && pe.event.add(e, o, a);
    }
    function k(e, t) {
      return (
        (c(e, "table") &&
          c(11 !== t.nodeType ? t : t.firstChild, "tr") &&
          pe(e).children("tbody")[0]) ||
        e
      );
    }
    function E(e) {
      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function D(e) {
      return (
        "true/" === (e.type || "").slice(0, 5)
          ? (e.type = e.type.slice(5))
          : e.removeAttribute("type"),
        e
      );
    }
    function $(e, t) {
      var n, i, o, r, a, s;
      if (1 === t.nodeType) {
        if (Ae.hasData(e) && (s = Ae.get(e).events))
          for (o in (Ae.remove(t, "handle events"), s))
            for (n = 0, i = s[o].length; n < i; n++)
              pe.event.add(t, o, s[o][n]);
        Ne.hasData(e) &&
          ((r = Ne.access(e)), (a = pe.extend({}, r)), Ne.set(t, a));
      }
    }
    function j(n, i, o, r) {
      i = ee(i);
      var e,
        t,
        a,
        s,
        l,
        c,
        u = 0,
        d = n.length,
        f = d - 1,
        h = i[0],
        p = ce(h);
      if (p || (1 < d && "string" == typeof h && !le.checkClone && et.test(h)))
        return n.each(function(e) {
          var t = n.eq(e);
          p && (i[0] = h.call(this, e, t.html())), j(t, i, o, r);
        });
      if (
        d &&
        ((t = (e = x(i, n[0].ownerDocument, !1, n, r)).firstChild),
        1 === e.childNodes.length && (e = t),
        t || r)
      ) {
        for (s = (a = pe.map(y(e, "script"), E)).length; u < d; u++)
          (l = e),
            u !== f &&
              ((l = pe.clone(l, !0, !0)), s && pe.merge(a, y(l, "script"))),
            o.call(n[u], l, u);
        if (s)
          for (
            c = a[a.length - 1].ownerDocument, pe.map(a, D), u = 0;
            u < s;
            u++
          )
            (l = a[u]),
              Ve.test(l.type || "") &&
                !Ae.access(l, "globalEval") &&
                pe.contains(c, l) &&
                (l.src && "module" !== (l.type || "").toLowerCase()
                  ? pe._evalUrl &&
                    !l.noModule &&
                    pe._evalUrl(
                      l.src,
                      { nonce: l.nonce || l.getAttribute("nonce") },
                      c
                    )
                  : g(l.textContent.replace(tt, ""), l, c));
      }
      return n;
    }
    function A(e, t, n) {
      for (var i, o = t ? pe.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
        n || 1 !== i.nodeType || pe.cleanData(y(i)),
          i.parentNode &&
            (n && Re(i) && w(y(i, "script")), i.parentNode.removeChild(i));
      return e;
    }
    function N(e, t, n) {
      var i,
        o,
        r,
        a,
        s = e.style;
      return (
        (n = n || it(e)) &&
          ("" !== (a = n.getPropertyValue(t) || n[t]) ||
            Re(e) ||
            (a = pe.style(e, t)),
          !le.pixelBoxStyles() &&
            nt.test(a) &&
            rt.test(t) &&
            ((i = s.width),
            (o = s.minWidth),
            (r = s.maxWidth),
            (s.minWidth = s.maxWidth = s.width = a),
            (a = n.width),
            (s.width = i),
            (s.minWidth = o),
            (s.maxWidth = r))),
        void 0 !== a ? a + "" : a
      );
    }
    function L(e, t) {
      return {
        get: function() {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get;
        }
      };
    }
    function M(e) {
      return (
        pe.cssProps[e] ||
        lt[e] ||
        (e in st
          ? e
          : (lt[e] =
              (function(e) {
                for (
                  var t = e[0].toUpperCase() + e.slice(1), n = at.length;
                  n--;

                )
                  if ((e = at[n] + t) in st) return e;
              })(e) || e))
      );
    }
    function H(e, t, n) {
      var i = Oe.exec(t);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function O(e, t, n, i, o, r) {
      var a = "width" === t ? 1 : 0,
        s = 0,
        l = 0;
      if (n === (i ? "border" : "content")) return 0;
      for (; a < 4; a += 2)
        "margin" === n && (l += pe.css(e, n + Be[a], !0, o)),
          i
            ? ("content" === n && (l -= pe.css(e, "padding" + Be[a], !0, o)),
              "margin" !== n &&
                (l -= pe.css(e, "border" + Be[a] + "Width", !0, o)))
            : ((l += pe.css(e, "padding" + Be[a], !0, o)),
              "padding" !== n
                ? (l += pe.css(e, "border" + Be[a] + "Width", !0, o))
                : (s += pe.css(e, "border" + Be[a] + "Width", !0, o)));
      return (
        !i &&
          0 <= r &&
          (l +=
            Math.max(
              0,
              Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - s - 0.5
              )
            ) || 0),
        l
      );
    }
    function B(e, t, n) {
      var i = it(e),
        o =
          (!le.boxSizingReliable() || n) &&
          "border-box" === pe.css(e, "boxSizing", !1, i),
        r = o,
        a = N(e, t, i),
        s = "offset" + t[0].toUpperCase() + t.slice(1);
      if (nt.test(a)) {
        if (!n) return a;
        a = "auto";
      }
      return (
        ((!le.boxSizingReliable() && o) ||
          (!le.reliableTrDimensions() && c(e, "tr")) ||
          "auto" === a ||
          (!parseFloat(a) && "inline" === pe.css(e, "display", !1, i))) &&
          e.getClientRects().length &&
          ((o = "border-box" === pe.css(e, "boxSizing", !1, i)),
          (r = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) +
          O(e, t, n || (o ? "border" : "content"), r, i, a) +
          "px"
      );
    }
    function P(e, t, n, i, o) {
      return new P.prototype.init(e, t, n, i, o);
    }
    function R() {
      pt &&
        (!1 === de.hidden && _.requestAnimationFrame
          ? _.requestAnimationFrame(R)
          : _.setTimeout(R, pe.fx.interval),
        pe.fx.tick());
    }
    function I() {
      return (
        _.setTimeout(function() {
          ht = void 0;
        }),
        (ht = Date.now())
      );
    }
    function q(e, t) {
      var n,
        i = 0,
        o = { height: e };
      for (t = t ? 1 : 0; i < 4; i += 2 - t)
        o["margin" + (n = Be[i])] = o["padding" + n] = e;
      return t && (o.opacity = o.width = e), o;
    }
    function W(e, t, n) {
      for (
        var i,
          o = (z.tweeners[t] || []).concat(z.tweeners["*"]),
          r = 0,
          a = o.length;
        r < a;
        r++
      )
        if ((i = o[r].call(n, t, e))) return i;
    }
    function z(r, e, t) {
      var n,
        a,
        i = 0,
        o = z.prefilters.length,
        s = pe.Deferred().always(function() {
          delete l.elem;
        }),
        l = function() {
          if (a) return !1;
          for (
            var e = ht || I(),
              t = Math.max(0, c.startTime + c.duration - e),
              n = 1 - (t / c.duration || 0),
              i = 0,
              o = c.tweens.length;
            i < o;
            i++
          )
            c.tweens[i].run(n);
          return (
            s.notifyWith(r, [c, n, t]),
            n < 1 && o
              ? t
              : (o || s.notifyWith(r, [c, 1, 0]), s.resolveWith(r, [c]), !1)
          );
        },
        c = s.promise({
          elem: r,
          props: pe.extend({}, e),
          opts: pe.extend(
            !0,
            { specialEasing: {}, easing: pe.easing._default },
            t
          ),
          originalProperties: e,
          originalOptions: t,
          startTime: ht || I(),
          duration: t.duration,
          tweens: [],
          createTween: function(e, t) {
            var n = pe.Tween(
              r,
              c.opts,
              e,
              t,
              c.opts.specialEasing[e] || c.opts.easing
            );
            return c.tweens.push(n), n;
          },
          stop: function(e) {
            var t = 0,
              n = e ? c.tweens.length : 0;
            if (a) return this;
            for (a = !0; t < n; t++) c.tweens[t].run(1);
            return (
              e
                ? (s.notifyWith(r, [c, 1, 0]), s.resolveWith(r, [c, e]))
                : s.rejectWith(r, [c, e]),
              this
            );
          }
        }),
        u = c.props;
      for (
        (function(e, t) {
          var n, i, o, r, a;
          for (n in e)
            if (
              ((o = t[(i = f(n))]),
              (r = e[n]),
              Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
              n !== i && ((e[i] = r), delete e[n]),
              (a = pe.cssHooks[i]) && ("expand" in a))
            )
              for (n in ((r = a.expand(r)), delete e[i], r))
                (n in e) || ((e[n] = r[n]), (t[n] = o));
            else t[i] = o;
        })(u, c.opts.specialEasing);
        i < o;
        i++
      )
        if ((n = z.prefilters[i].call(c, r, u, c.opts)))
          return (
            ce(n.stop) &&
              (pe._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)),
            n
          );
      return (
        pe.map(u, W, c),
        ce(c.opts.start) && c.opts.start.call(r, c),
        c
          .progress(c.opts.progress)
          .done(c.opts.done, c.opts.complete)
          .fail(c.opts.fail)
          .always(c.opts.always),
        pe.fx.timer(pe.extend(l, { elem: r, anim: c, queue: c.opts.queue })),
        c
      );
    }
    function F(e) {
      return (e.match(Te) || []).join(" ");
    }
    function X(e) {
      return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function U(e) {
      return Array.isArray(e) ? e : ("string" == typeof e && e.match(Te)) || [];
    }
    function V(n, e, i, o) {
      var t;
      if (Array.isArray(e))
        pe.each(e, function(e, t) {
          i || $t.test(n)
            ? o(n, t)
            : V(
                n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
                t,
                i,
                o
              );
        });
      else if (i || "object" !== m(e)) o(n, e);
      else for (t in e) V(n + "[" + t + "]", e[t], i, o);
    }
    function Y(r) {
      return function(e, t) {
        "string" != typeof e && ((t = e), (e = "*"));
        var n,
          i = 0,
          o = e.toLowerCase().match(Te) || [];
        if (ce(t))
          for (; (n = o[i++]); )
            "+" === n[0]
              ? ((n = n.slice(1) || "*"), (r[n] = r[n] || []).unshift(t))
              : (r[n] = r[n] || []).push(t);
      };
    }
    function Q(t, o, r, a) {
      function s(e) {
        var i;
        return (
          (l[e] = !0),
          pe.each(t[e] || [], function(e, t) {
            var n = t(o, r, a);
            return "string" != typeof n || c || l[n]
              ? c
                ? !(i = n)
                : void 0
              : (o.dataTypes.unshift(n), s(n), !1);
          }),
          i
        );
      }
      var l = {},
        c = t === It;
      return s(o.dataTypes[0]) || (!l["*"] && s("*"));
    }
    function G(e, t) {
      var n,
        i,
        o = pe.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
      return i && pe.extend(!0, e, i), e;
    }
    var J = [],
      Z = Object.getPrototypeOf,
      K = J.slice,
      ee = J.flat
        ? function(e) {
            return J.flat.call(e);
          }
        : function(e) {
            return J.concat.apply([], e);
          },
      te = J.push,
      ne = J.indexOf,
      ie = {},
      oe = ie.toString,
      re = ie.hasOwnProperty,
      ae = re.toString,
      se = ae.call(Object),
      le = {},
      ce = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType;
      },
      ue = function(e) {
        return null != e && e === e.window;
      },
      de = _.document,
      fe = { type: !0, src: !0, nonce: !0, noModule: !0 },
      he = "3.5.1",
      pe = function(e, t) {
        return new pe.fn.init(e, t);
      };
    (pe.fn = pe.prototype = {
      jquery: he,
      constructor: pe,
      length: 0,
      toArray: function() {
        return K.call(this);
      },
      get: function(e) {
        return null == e
          ? K.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function(e) {
        var t = pe.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function(e) {
        return pe.each(this, e);
      },
      map: function(n) {
        return this.pushStack(
          pe.map(this, function(e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function() {
        return this.pushStack(K.apply(this, arguments));
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      even: function() {
        return this.pushStack(
          pe.grep(this, function(e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function() {
        return this.pushStack(
          pe.grep(this, function(e, t) {
            return t % 2;
          })
        );
      },
      eq: function(e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function() {
        return this.prevObject || this.constructor();
      },
      push: te,
      sort: J.sort,
      splice: J.splice
    }),
      (pe.extend = pe.fn.extend = function(e) {
        var t,
          n,
          i,
          o,
          r,
          a,
          s = e || {},
          l = 1,
          c = arguments.length,
          u = !1;
        for (
          "boolean" == typeof s && ((u = s), (s = arguments[l] || {}), l++),
            "object" == typeof s || ce(s) || (s = {}),
            l === c && ((s = this), l--);
          l < c;
          l++
        )
          if (null != (t = arguments[l]))
            for (n in t)
              (o = t[n]),
                "__proto__" !== n &&
                  s !== o &&
                  (u && o && (pe.isPlainObject(o) || (r = Array.isArray(o)))
                    ? ((i = s[n]),
                      (a =
                        r && !Array.isArray(i)
                          ? []
                          : r || pe.isPlainObject(i)
                          ? i
                          : {}),
                      (r = !1),
                      (s[n] = pe.extend(u, a, o)))
                    : void 0 !== o && (s[n] = o));
        return s;
      }),
      pe.extend({
        expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
          throw new Error(e);
        },
        noop: function() {},
        isPlainObject: function(e) {
          var t, n;
          return !(
            !e ||
            "[object Object]" !== oe.call(e) ||
            ((t = Z(e)) &&
              ("function" !=
                typeof (n = re.call(t, "constructor") && t.constructor) ||
                ae.call(n) !== se))
          );
        },
        isEmptyObject: function(e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        globalEval: function(e, t, n) {
          g(e, { nonce: t && t.nonce }, n);
        },
        each: function(e, t) {
          var n,
            i = 0;
          if (s(e))
            for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
          else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
          return e;
        },
        makeArray: function(e, t) {
          var n = t || [];
          return (
            null != e &&
              (s(Object(e))
                ? pe.merge(n, "string" == typeof e ? [e] : e)
                : te.call(n, e)),
            n
          );
        },
        inArray: function(e, t, n) {
          return null == t ? -1 : ne.call(t, e, n);
        },
        merge: function(e, t) {
          for (var n = +t.length, i = 0, o = e.length; i < n; i++)
            e[o++] = t[i];
          return (e.length = o), e;
        },
        grep: function(e, t, n) {
          for (var i = [], o = 0, r = e.length, a = !n; o < r; o++)
            !t(e[o], o) !== a && i.push(e[o]);
          return i;
        },
        map: function(e, t, n) {
          var i,
            o,
            r = 0,
            a = [];
          if (s(e))
            for (i = e.length; r < i; r++)
              null != (o = t(e[r], r, n)) && a.push(o);
          else for (r in e) null != (o = t(e[r], r, n)) && a.push(o);
          return ee(a);
        },
        guid: 1,
        support: le
      }),
      "function" == typeof Symbol &&
        (pe.fn[Symbol.iterator] = J[Symbol.iterator]),
      pe.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function(e, t) {
          ie["[object " + t + "]"] = t.toLowerCase();
        }
      );
    var ge = (function(n) {
      function x(e, t, n, i) {
        var o,
          r,
          a,
          s,
          l,
          c,
          u,
          d = t && t.ownerDocument,
          f = t ? t.nodeType : 9;
        if (
          ((n = n || []),
          "string" != typeof e || !e || (1 !== f && 9 !== f && 11 !== f))
        )
          return n;
        if (!i && (j(t), (t = t || A), L)) {
          if (11 !== f && (l = ve.exec(e)))
            if ((o = l[1])) {
              if (9 === f) {
                if (!(a = t.getElementById(o))) return n;
                if (a.id === o) return n.push(a), n;
              } else if (
                d &&
                (a = d.getElementById(o)) &&
                B(t, a) &&
                a.id === o
              )
                return n.push(a), n;
            } else {
              if (l[2]) return J.apply(n, t.getElementsByTagName(e)), n;
              if (
                (o = l[3]) &&
                v.getElementsByClassName &&
                t.getElementsByClassName
              )
                return J.apply(n, t.getElementsByClassName(o)), n;
            }
          if (
            v.qsa &&
            !X[e + " "] &&
            (!M || !M.test(e)) &&
            (1 !== f || "object" !== t.nodeName.toLowerCase())
          ) {
            if (((u = e), (d = t), 1 === f && (ce.test(e) || le.test(e)))) {
              for (
                ((d = (ye.test(e) && h(t.parentNode)) || t) === t && v.scope) ||
                  ((s = t.getAttribute("id"))
                    ? (s = s.replace(be, Ce))
                    : t.setAttribute("id", (s = P))),
                  r = (c = T(e)).length;
                r--;

              )
                c[r] = (s ? "#" + s : ":scope") + " " + p(c[r]);
              u = c.join(",");
            }
            try {
              return J.apply(n, d.querySelectorAll(u)), n;
            } catch (t) {
              X(e, !0);
            } finally {
              s === P && t.removeAttribute("id");
            }
          }
        }
        return k(e.replace(ae, "$1"), t, n, i);
      }
      function e() {
        var n = [];
        return function i(e, t) {
          return (
            n.push(e + " ") > C.cacheLength && delete i[n.shift()],
            (i[e + " "] = t)
          );
        };
      }
      function l(e) {
        return (e[P] = !0), e;
      }
      function o(e) {
        var t = A.createElement("fieldset");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function t(e, t) {
        for (var n = e.split("|"), i = n.length; i--; ) C.attrHandle[n[i]] = t;
      }
      function c(e, t) {
        var n = t && e,
          i =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            e.sourceIndex - t.sourceIndex;
        if (i) return i;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function i(t) {
        return function(e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      }
      function r(n) {
        return function(e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t || "button" === t) && e.type === n;
        };
      }
      function a(t) {
        return function(e) {
          return "form" in e
            ? e.parentNode && !1 === e.disabled
              ? "label" in e
                ? "label" in e.parentNode
                  ? e.parentNode.disabled === t
                  : e.disabled === t
                : e.isDisabled === t || (e.isDisabled !== !t && Te(e) === t)
              : e.disabled === t
            : "label" in e && e.disabled === t;
        };
      }
      function s(a) {
        return l(function(r) {
          return (
            (r = +r),
            l(function(e, t) {
              for (var n, i = a([], e.length, r), o = i.length; o--; )
                e[(n = i[o])] && (e[n] = !(t[n] = e[n]));
            })
          );
        });
      }
      function h(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e;
      }
      function u() {}
      function p(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
        return i;
      }
      function d(s, e, t) {
        var l = e.dir,
          c = e.next,
          u = c || l,
          d = t && "parentNode" === u,
          f = q++;
        return e.first
          ? function(e, t, n) {
              for (; (e = e[l]); ) if (1 === e.nodeType || d) return s(e, t, n);
              return !1;
            }
          : function(e, t, n) {
              var i,
                o,
                r,
                a = [I, f];
              if (n) {
                for (; (e = e[l]); )
                  if ((1 === e.nodeType || d) && s(e, t, n)) return !0;
              } else
                for (; (e = e[l]); )
                  if (1 === e.nodeType || d)
                    if (
                      ((o =
                        (r = e[P] || (e[P] = {}))[e.uniqueID] ||
                        (r[e.uniqueID] = {})),
                      c && c === e.nodeName.toLowerCase())
                    )
                      e = e[l] || e;
                    else {
                      if ((i = o[u]) && i[0] === I && i[1] === f)
                        return (a[2] = i[2]);
                      if (((o[u] = a)[2] = s(e, t, n))) return !0;
                    }
              return !1;
            };
      }
      function f(o) {
        return 1 < o.length
          ? function(e, t, n) {
              for (var i = o.length; i--; ) if (!o[i](e, t, n)) return !1;
              return !0;
            }
          : o[0];
      }
      function b(e, t, n, i, o) {
        for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++)
          (r = e[s]) && ((n && !n(r, i, o)) || (a.push(r), c && t.push(s)));
        return a;
      }
      function y(h, p, g, m, v, e) {
        return (
          m && !m[P] && (m = y(m)),
          v && !v[P] && (v = y(v, e)),
          l(function(e, t, n, i) {
            var o,
              r,
              a,
              s = [],
              l = [],
              c = t.length,
              u =
                e ||
                (function(e, t, n) {
                  for (var i = 0, o = t.length; i < o; i++) x(e, t[i], n);
                  return n;
                })(p || "*", n.nodeType ? [n] : n, []),
              d = !h || (!e && p) ? u : b(u, s, h, n, i),
              f = g ? (v || (e ? h : c || m) ? [] : t) : d;
            if ((g && g(d, f, n, i), m))
              for (o = b(f, l), m(o, [], n, i), r = o.length; r--; )
                (a = o[r]) && (f[l[r]] = !(d[l[r]] = a));
            if (e) {
              if (v || h) {
                if (v) {
                  for (o = [], r = f.length; r--; )
                    (a = f[r]) && o.push((d[r] = a));
                  v(null, (f = []), o, i);
                }
                for (r = f.length; r--; )
                  (a = f[r]) &&
                    -1 < (o = v ? K(e, a) : s[r]) &&
                    (e[o] = !(t[o] = a));
              }
            } else (f = b(f === t ? f.splice(c, f.length) : f)), v ? v(null, t, f, i) : J.apply(t, f);
          })
        );
      }
      function g(e) {
        for (
          var o,
            t,
            n,
            i = e.length,
            r = C.relative[e[0].type],
            a = r || C.relative[" "],
            s = r ? 1 : 0,
            l = d(
              function(e) {
                return e === o;
              },
              a,
              !0
            ),
            c = d(
              function(e) {
                return -1 < K(o, e);
              },
              a,
              !0
            ),
            u = [
              function(e, t, n) {
                var i =
                  (!r && (n || t !== E)) ||
                  ((o = t).nodeType ? l(e, t, n) : c(e, t, n));
                return (o = null), i;
              }
            ];
          s < i;
          s++
        )
          if ((t = C.relative[e[s].type])) u = [d(f(u), t)];
          else {
            if ((t = C.filter[e[s].type].apply(null, e[s].matches))[P]) {
              for (n = ++s; n < i && !C.relative[e[n].type]; n++);
              return y(
                1 < s && f(u),
                1 < s &&
                  p(
                    e
                      .slice(0, s - 1)
                      .concat({ value: " " === e[s - 2].type ? "*" : "" })
                  ).replace(ae, "$1"),
                t,
                s < n && g(e.slice(s, n)),
                n < i && g((e = e.slice(n))),
                n < i && p(e)
              );
            }
            u.push(t);
          }
        return f(u);
      }
      var m,
        v,
        C,
        w,
        _,
        T,
        S,
        k,
        E,
        D,
        $,
        j,
        A,
        N,
        L,
        M,
        H,
        O,
        B,
        P = "sizzle" + 1 * new Date(),
        R = n.document,
        I = 0,
        q = 0,
        W = e(),
        z = e(),
        F = e(),
        X = e(),
        U = function(e, t) {
          return e === t && ($ = !0), 0;
        },
        V = {}.hasOwnProperty,
        Y = [],
        Q = Y.pop,
        G = Y.push,
        J = Y.push,
        Z = Y.slice,
        K = function(e, t) {
          for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
          return -1;
        },
        ee =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        te = "[\\x20\\t\\r\\n\\f]",
        ne =
          "(?:\\\\[\\da-fA-F]{1,6}" +
          te +
          "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        ie =
          "\\[" +
          te +
          "*(" +
          ne +
          ")(?:" +
          te +
          "*([*^$|!~]?=)" +
          te +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          ne +
          "))|)" +
          te +
          "*\\]",
        oe =
          ":(" +
          ne +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          ie +
          ")*)|.*)\\)|)",
        re = new RegExp(te + "+", "g"),
        ae = new RegExp(
          "^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$",
          "g"
        ),
        se = new RegExp("^" + te + "*," + te + "*"),
        le = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
        ce = new RegExp(te + "|>"),
        ue = new RegExp(oe),
        de = new RegExp("^" + ne + "$"),
        fe = {
          ID: new RegExp("^#(" + ne + ")"),
          CLASS: new RegExp("^\\.(" + ne + ")"),
          TAG: new RegExp("^(" + ne + "|[*])"),
          ATTR: new RegExp("^" + ie),
          PSEUDO: new RegExp("^" + oe),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              te +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              te +
              "*(?:([+-]|)" +
              te +
              "*(\\d+)|))" +
              te +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + ee + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              te +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              te +
              "*((?:-\\d)?\\d*)" +
              te +
              "*\\)|)(?=[^-]|$)",
            "i"
          )
        },
        he = /HTML$/i,
        pe = /^(?:input|select|textarea|button)$/i,
        ge = /^h\d$/i,
        me = /^[^{]+\{\s*\[native \w/,
        ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ye = /[+~]/,
        we = new RegExp(
          "\\\\[\\da-fA-F]{1,6}" + te + "?|\\\\([^\\r\\n\\f])",
          "g"
        ),
        xe = function(e, t) {
          var n = "0x" + e.slice(1) - 65536;
          return (
            t ||
            (n < 0
              ? String.fromCharCode(n + 65536)
              : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
          );
        },
        be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        Ce = function(e, t) {
          return t
            ? "\0" === e
              ? "\ufffd"
              : e.slice(0, -1) +
                "\\" +
                e.charCodeAt(e.length - 1).toString(16) +
                " "
            : "\\" + e;
        },
        _e = function() {
          j();
        },
        Te = d(
          function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
          },
          { dir: "parentNode", next: "legend" }
        );
      try {
        J.apply((Y = Z.call(R.childNodes)), R.childNodes),
          Y[R.childNodes.length].nodeType;
      } catch (m) {
        J = {
          apply: Y.length
            ? function(e, t) {
                G.apply(e, Z.call(t));
              }
            : function(e, t) {
                for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                e.length = n - 1;
              }
        };
      }
      for (m in ((v = x.support = {}),
      (_ = x.isXML = function(e) {
        var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
        return !he.test(t || (n && n.nodeName) || "HTML");
      }),
      (j = x.setDocument = function(e) {
        var t,
          n,
          i = e ? e.ownerDocument || e : R;
        return (
          i != A &&
            9 === i.nodeType &&
            i.documentElement &&
            ((N = (A = i).documentElement),
            (L = !_(A)),
            R != A &&
              (n = A.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", _e, !1)
                : n.attachEvent && n.attachEvent("onunload", _e)),
            (v.scope = o(function(e) {
              return (
                N.appendChild(e).appendChild(A.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (v.attributes = o(function(e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (v.getElementsByTagName = o(function(e) {
              return (
                e.appendChild(A.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (v.getElementsByClassName = me.test(A.getElementsByClassName)),
            (v.getById = o(function(e) {
              return (
                (N.appendChild(e).id = P),
                !A.getElementsByName || !A.getElementsByName(P).length
              );
            })),
            v.getById
              ? ((C.filter.ID = function(e) {
                  var t = e.replace(we, xe);
                  return function(e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (C.find.ID = function(e, t) {
                  if ("undefined" != typeof t.getElementById && L) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((C.filter.ID = function(e) {
                  var n = e.replace(we, xe);
                  return function(e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (C.find.ID = function(e, t) {
                  if ("undefined" != typeof t.getElementById && L) {
                    var n,
                      i,
                      o,
                      r = t.getElementById(e);
                    if (r) {
                      if ((n = r.getAttributeNode("id")) && n.value === e)
                        return [r];
                      for (o = t.getElementsByName(e), i = 0; (r = o[i++]); )
                        if ((n = r.getAttributeNode("id")) && n.value === e)
                          return [r];
                    }
                    return [];
                  }
                })),
            (C.find.TAG = v.getElementsByTagName
              ? function(e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : v.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function(e, t) {
                  var n,
                    i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                  if ("*" !== e) return r;
                  for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                  return i;
                }),
            (C.find.CLASS =
              v.getElementsByClassName &&
              function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && L)
                  return t.getElementsByClassName(e);
              }),
            (H = []),
            (M = []),
            (v.qsa = me.test(A.querySelectorAll)) &&
              (o(function(e) {
                var t;
                (N.appendChild(e).innerHTML =
                  "<a id='" +
                  P +
                  "'></a><select id='" +
                  P +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    M.push("[*^$]=" + te + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    M.push("\\[" + te + "*(?:value|" + ee + ")"),
                  e.querySelectorAll("[id~=" + P + "-]").length || M.push("~="),
                  (t = A.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    M.push(
                      "\\[" + te + "*name" + te + "*=" + te + "*(?:''|\"\")"
                    ),
                  e.querySelectorAll(":checked").length || M.push(":checked"),
                  e.querySelectorAll("a#" + P + "+*").length ||
                    M.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  M.push("[\\r\\n\\f]");
              }),
              o(function(e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = A.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    M.push("name" + te + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    M.push(":enabled", ":disabled"),
                  (N.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    M.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  M.push(",.*:");
              })),
            (v.matchesSelector = me.test(
              (O =
                N.matches ||
                N.webkitMatchesSelector ||
                N.mozMatchesSelector ||
                N.oMatchesSelector ||
                N.msMatchesSelector)
            )) &&
              o(function(e) {
                (v.disconnectedMatch = O.call(e, "*")),
                  O.call(e, "[s!='']:x"),
                  H.push("!=", oe);
              }),
            (M = M.length && new RegExp(M.join("|"))),
            (H = H.length && new RegExp(H.join("|"))),
            (t = me.test(N.compareDocumentPosition)),
            (B =
              t || me.test(N.contains)
                ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      i = t && t.parentNode;
                    return (
                      e === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains
                          ? n.contains(i)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(i))
                      )
                    );
                  }
                : function(e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (U = t
              ? function(e, t) {
                  if (e === t) return ($ = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!v.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == A || (e.ownerDocument == R && B(R, e))
                        ? -1
                        : t == A || (t.ownerDocument == R && B(R, t))
                        ? 1
                        : D
                        ? K(D, e) - K(D, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function(e, t) {
                  if (e === t) return ($ = !0), 0;
                  var n,
                    i = 0,
                    o = e.parentNode,
                    r = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!o || !r)
                    return e == A
                      ? -1
                      : t == A
                      ? 1
                      : o
                      ? -1
                      : r
                      ? 1
                      : D
                      ? K(D, e) - K(D, t)
                      : 0;
                  if (o === r) return c(e, t);
                  for (n = e; (n = n.parentNode); ) a.unshift(n);
                  for (n = t; (n = n.parentNode); ) s.unshift(n);
                  for (; a[i] === s[i]; ) i++;
                  return i ? c(a[i], s[i]) : a[i] == R ? -1 : s[i] == R ? 1 : 0;
                })),
          A
        );
      }),
      (x.matches = function(e, t) {
        return x(e, null, null, t);
      }),
      (x.matchesSelector = function(e, t) {
        if (
          (j(e),
          v.matchesSelector &&
            L &&
            !X[t + " "] &&
            (!H || !H.test(t)) &&
            (!M || !M.test(t)))
        )
          try {
            var n = O.call(e, t);
            if (
              n ||
              v.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return n;
          } catch (e) {
            X(t, !0);
          }
        return 0 < x(t, A, null, [e]).length;
      }),
      (x.contains = function(e, t) {
        return (e.ownerDocument || e) != A && j(e), B(e, t);
      }),
      (x.attr = function(e, t) {
        (e.ownerDocument || e) != A && j(e);
        var n = C.attrHandle[t.toLowerCase()],
          i = n && V.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
        return void 0 !== i
          ? i
          : v.attributes || !L
          ? e.getAttribute(t)
          : (i = e.getAttributeNode(t)) && i.specified
          ? i.value
          : null;
      }),
      (x.escape = function(e) {
        return (e + "").replace(be, Ce);
      }),
      (x.error = function(e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (x.uniqueSort = function(e) {
        var t,
          n = [],
          i = 0,
          o = 0;
        if (
          (($ = !v.detectDuplicates),
          (D = !v.sortStable && e.slice(0)),
          e.sort(U),
          $)
        ) {
          for (; (t = e[o++]); ) t === e[o] && (i = n.push(o));
          for (; i--; ) e.splice(n[i], 1);
        }
        return (D = null), e;
      }),
      (w = x.getText = function(e) {
        var t,
          n = "",
          i = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += w(e);
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; (t = e[i++]); ) n += w(t);
        return n;
      }),
      ((C = x.selectors = {
        cacheLength: 50,
        createPseudo: l,
        match: fe,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" }
        },
        preFilter: {
          ATTR: function(e) {
            return (
              (e[1] = e[1].replace(we, xe)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(we, xe)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function(e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || x.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && x.error(e[0]),
              e
            );
          },
          PSEUDO: function(e) {
            var t,
              n = !e[6] && e[2];
            return fe.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    ue.test(n) &&
                    (t = T(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          }
        },
        filter: {
          TAG: function(e) {
            var t = e.replace(we, xe).toLowerCase();
            return "*" === e
              ? function() {
                  return !0;
                }
              : function(e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function(e) {
            var t = W[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) &&
                W(e, function(e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function(n, i, o) {
            return function(e) {
              var t = x.attr(e, n);
              return null == t
                ? "!=" === i
                : !i ||
                    ((t += ""),
                    "=" === i
                      ? t === o
                      : "!=" === i
                      ? t !== o
                      : "^=" === i
                      ? o && 0 === t.indexOf(o)
                      : "*=" === i
                      ? o && -1 < t.indexOf(o)
                      : "$=" === i
                      ? o && t.slice(-o.length) === o
                      : "~=" === i
                      ? -1 < (" " + t.replace(re, " ") + " ").indexOf(o)
                      : "|=" === i &&
                        (t === o || t.slice(0, o.length + 1) === o + "-"));
            };
          },
          CHILD: function(p, e, t, g, m) {
            var v = "nth" !== p.slice(0, 3),
              y = "last" !== p.slice(-4),
              w = "of-type" === e;
            return 1 === g && 0 === m
              ? function(e) {
                  return !!e.parentNode;
                }
              : function(e, t, n) {
                  var i,
                    o,
                    r,
                    a,
                    s,
                    l,
                    c = v !== y ? "nextSibling" : "previousSibling",
                    u = e.parentNode,
                    d = w && e.nodeName.toLowerCase(),
                    f = !n && !w,
                    h = !1;
                  if (u) {
                    if (v) {
                      for (; c; ) {
                        for (a = e; (a = a[c]); )
                          if (
                            w
                              ? a.nodeName.toLowerCase() === d
                              : 1 === a.nodeType
                          )
                            return !1;
                        l = c = "only" === p && !l && "nextSibling";
                      }
                      return !0;
                    }
                    if (((l = [y ? u.firstChild : u.lastChild]), y && f)) {
                      for (
                        h =
                          (s =
                            (i =
                              (o =
                                (r = (a = u)[P] || (a[P] = {}))[a.uniqueID] ||
                                (r[a.uniqueID] = {}))[p] || [])[0] === I &&
                            i[1]) && i[2],
                          a = s && u.childNodes[s];
                        (a = (++s && a && a[c]) || (h = s = 0) || l.pop());

                      )
                        if (1 === a.nodeType && ++h && a === e) {
                          o[p] = [I, s, h];
                          break;
                        }
                    } else if (
                      (f &&
                        (h = s =
                          (i =
                            (o =
                              (r = (a = e)[P] || (a[P] = {}))[a.uniqueID] ||
                              (r[a.uniqueID] = {}))[p] || [])[0] === I && i[1]),
                      !1 === h)
                    )
                      for (
                        ;
                        (a = (++s && a && a[c]) || (h = s = 0) || l.pop()) &&
                        ((w
                          ? a.nodeName.toLowerCase() !== d
                          : 1 !== a.nodeType) ||
                          !++h ||
                          (f &&
                            ((o =
                              (r = a[P] || (a[P] = {}))[a.uniqueID] ||
                              (r[a.uniqueID] = {}))[p] = [I, h]),
                          a !== e));

                      );
                    return (h -= m) === g || (h % g == 0 && 0 <= h / g);
                  }
                };
          },
          PSEUDO: function(e, r) {
            var t,
              a =
                C.pseudos[e] ||
                C.setFilters[e.toLowerCase()] ||
                x.error("unsupported pseudo: " + e);
            return a[P]
              ? a(r)
              : 1 < a.length
              ? ((t = [e, e, "", r]),
                C.setFilters.hasOwnProperty(e.toLowerCase())
                  ? l(function(e, t) {
                      for (var n, i = a(e, r), o = i.length; o--; )
                        e[(n = K(e, i[o]))] = !(t[n] = i[o]);
                    })
                  : function(e) {
                      return a(e, 0, t);
                    })
              : a;
          }
        },
        pseudos: {
          not: l(function(e) {
            var i = [],
              o = [],
              s = S(e.replace(ae, "$1"));
            return s[P]
              ? l(function(e, t, n, i) {
                  for (var o, r = s(e, null, i, []), a = e.length; a--; )
                    (o = r[a]) && (e[a] = !(t[a] = o));
                })
              : function(e, t, n) {
                  return (i[0] = e), s(i, null, n, o), (i[0] = null), !o.pop();
                };
          }),
          has: l(function(t) {
            return function(e) {
              return 0 < x(t, e).length;
            };
          }),
          contains: l(function(t) {
            return (
              (t = t.replace(we, xe)),
              function(e) {
                return -1 < (e.textContent || w(e)).indexOf(t);
              }
            );
          }),
          lang: l(function(n) {
            return (
              de.test(n || "") || x.error("unsupported lang: " + n),
              (n = n.replace(we, xe).toLowerCase()),
              function(e) {
                var t;
                do {
                  if (
                    (t = L
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function(e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function(e) {
            return e === N;
          },
          focus: function(e) {
            return (
              e === A.activeElement &&
              (!A.hasFocus || A.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: a(!1),
          disabled: a(!0),
          checked: function(e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function(e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function(e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function(e) {
            return !C.pseudos.empty(e);
          },
          header: function(e) {
            return ge.test(e.nodeName);
          },
          input: function(e) {
            return pe.test(e.nodeName);
          },
          button: function(e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function(e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: s(function() {
            return [0];
          }),
          last: s(function(e, t) {
            return [t - 1];
          }),
          eq: s(function(e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: s(function(e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: s(function(e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: s(function(e, t, n) {
            for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i);
            return e;
          }),
          gt: s(function(e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
            return e;
          })
        }
      }).pseudos.nth = C.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        C.pseudos[m] = i(m);
      for (m in { submit: !0, reset: !0 }) C.pseudos[m] = r(m);
      return (
        (u.prototype = C.filters = C.pseudos),
        (C.setFilters = new u()),
        (T = x.tokenize = function(e, t) {
          var n,
            i,
            o,
            r,
            a,
            s,
            l,
            c = z[e + " "];
          if (c) return t ? 0 : c.slice(0);
          for (a = e, s = [], l = C.preFilter; a; ) {
            for (r in ((n && !(i = se.exec(a))) ||
              (i && (a = a.slice(i[0].length) || a), s.push((o = []))),
            (n = !1),
            (i = le.exec(a)) &&
              ((n = i.shift()),
              o.push({ value: n, type: i[0].replace(ae, " ") }),
              (a = a.slice(n.length))),
            C.filter))
              !(i = fe[r].exec(a)) ||
                (l[r] && !(i = l[r](i))) ||
                ((n = i.shift()),
                o.push({ value: n, type: r, matches: i }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? x.error(e) : z(e, s).slice(0);
        }),
        (S = x.compile = function(e, t) {
          var n,
            m,
            v,
            y,
            w,
            i,
            o = [],
            r = [],
            a = F[e + " "];
          if (!a) {
            for (t || (t = T(e)), n = t.length; n--; )
              (a = g(t[n]))[P] ? o.push(a) : r.push(a);
            (a = F(
              e,
              ((m = r),
              (y = 0 < (v = o).length),
              (w = 0 < m.length),
              (i = function(e, t, n, i, o) {
                var r,
                  a,
                  s,
                  l = 0,
                  c = "0",
                  u = e && [],
                  d = [],
                  f = E,
                  h = e || (w && C.find.TAG("*", o)),
                  p = (I += null == f ? 1 : Math.random() || 0.1),
                  g = h.length;
                for (
                  o && (E = t == A || t || o);
                  c !== g && null != (r = h[c]);
                  c++
                ) {
                  if (w && r) {
                    for (
                      a = 0, t || r.ownerDocument == A || (j(r), (n = !L));
                      (s = m[a++]);

                    )
                      if (s(r, t || A, n)) {
                        i.push(r);
                        break;
                      }
                    o && (I = p);
                  }
                  y && ((r = !s && r) && l--, e && u.push(r));
                }
                if (((l += c), y && c !== l)) {
                  for (a = 0; (s = v[a++]); ) s(u, d, t, n);
                  if (e) {
                    if (0 < l) for (; c--; ) u[c] || d[c] || (d[c] = Q.call(i));
                    d = b(d);
                  }
                  J.apply(i, d),
                    o &&
                      !e &&
                      0 < d.length &&
                      1 < l + v.length &&
                      x.uniqueSort(i);
                }
                return o && ((I = p), (E = f)), u;
              }),
              y ? l(i) : i)
            )).selector = e;
          }
          return a;
        }),
        (k = x.select = function(e, t, n, i) {
          var o,
            r,
            a,
            s,
            l,
            c = "function" == typeof e && e,
            u = !i && T((e = c.selector || e));
          if (((n = n || []), 1 === u.length)) {
            if (
              2 < (r = u[0] = u[0].slice(0)).length &&
              "ID" === (a = r[0]).type &&
              9 === t.nodeType &&
              L &&
              C.relative[r[1].type]
            ) {
              if (!(t = (C.find.ID(a.matches[0].replace(we, xe), t) || [])[0]))
                return n;
              c && (t = t.parentNode), (e = e.slice(r.shift().value.length));
            }
            for (
              o = fe.needsContext.test(e) ? 0 : r.length;
              o-- && ((a = r[o]), !C.relative[(s = a.type)]);

            )
              if (
                (l = C.find[s]) &&
                (i = l(
                  a.matches[0].replace(we, xe),
                  (ye.test(r[0].type) && h(t.parentNode)) || t
                ))
              ) {
                if ((r.splice(o, 1), !(e = i.length && p(r))))
                  return J.apply(n, i), n;
                break;
              }
          }
          return (
            (c || S(e, u))(
              i,
              t,
              !L,
              n,
              !t || (ye.test(e) && h(t.parentNode)) || t
            ),
            n
          );
        }),
        (v.sortStable =
          P.split("")
            .sort(U)
            .join("") === P),
        (v.detectDuplicates = !!$),
        j(),
        (v.sortDetached = o(function(e) {
          return 1 & e.compareDocumentPosition(A.createElement("fieldset"));
        })),
        o(function(e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          t("type|href|height|width", function(e, t, n) {
            if (!n)
              return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (v.attributes &&
          o(function(e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          t("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
              return e.defaultValue;
          }),
        o(function(e) {
          return null == e.getAttribute("disabled");
        }) ||
          t(ee, function(e, t, n) {
            var i;
            if (!n)
              return !0 === e[t]
                ? t.toLowerCase()
                : (i = e.getAttributeNode(t)) && i.specified
                ? i.value
                : null;
          }),
        x
      );
    })(_);
    (pe.find = ge),
      (pe.expr = ge.selectors),
      (pe.expr[":"] = pe.expr.pseudos),
      (pe.uniqueSort = pe.unique = ge.uniqueSort),
      (pe.text = ge.getText),
      (pe.isXMLDoc = ge.isXML),
      (pe.contains = ge.contains),
      (pe.escapeSelector = ge.escape);
    var me = function(e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
            if (o && pe(e).is(n)) break;
            i.push(e);
          }
        return i;
      },
      ve = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
      ye = pe.expr.match.needsContext,
      we = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    (pe.filter = function(e, t, n) {
      var i = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType
          ? pe.find.matchesSelector(i, e)
            ? [i]
            : []
          : pe.find.matches(
              e,
              pe.grep(t, function(e) {
                return 1 === e.nodeType;
              })
            )
      );
    }),
      pe.fn.extend({
        find: function(e) {
          var t,
            n,
            i = this.length,
            o = this;
          if ("string" != typeof e)
            return this.pushStack(
              pe(e).filter(function() {
                for (t = 0; t < i; t++) if (pe.contains(o[t], this)) return !0;
              })
            );
          for (n = this.pushStack([]), t = 0; t < i; t++) pe.find(e, o[t], n);
          return 1 < i ? pe.uniqueSort(n) : n;
        },
        filter: function(e) {
          return this.pushStack(t(this, e || [], !1));
        },
        not: function(e) {
          return this.pushStack(t(this, e || [], !0));
        },
        is: function(e) {
          return !!t(
            this,
            "string" == typeof e && ye.test(e) ? pe(e) : e || [],
            !1
          ).length;
        }
      });
    var xe,
      be = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((pe.fn.init = function(e, t, n) {
      var i, o;
      if (!e) return this;
      if (((n = n || xe), "string" != typeof e))
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : ce(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(pe)
          : pe.makeArray(e, this);
      if (
        !(i =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : be.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof pe ? t[0] : t),
          pe.merge(
            this,
            pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : de, !0)
          ),
          we.test(i[1]) && pe.isPlainObject(t))
        )
          for (i in t) ce(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (o = de.getElementById(i[2])) && ((this[0] = o), (this.length = 1)),
        this
      );
    }).prototype = pe.fn),
      (xe = pe(de));
    var Ce = /^(?:parents|prev(?:Until|All))/,
      _e = { children: !0, contents: !0, next: !0, prev: !0 };
    pe.fn.extend({
      has: function(e) {
        var t = pe(e, this),
          n = t.length;
        return this.filter(function() {
          for (var e = 0; e < n; e++) if (pe.contains(this, t[e])) return !0;
        });
      },
      closest: function(e, t) {
        var n,
          i = 0,
          o = this.length,
          r = [],
          a = "string" != typeof e && pe(e);
        if (!ye.test(e))
          for (; i < o; i++)
            for (n = this[i]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (a
                  ? -1 < a.index(n)
                  : 1 === n.nodeType && pe.find.matchesSelector(n, e))
              ) {
                r.push(n);
                break;
              }
        return this.pushStack(1 < r.length ? pe.uniqueSort(r) : r);
      },
      index: function(e) {
        return e
          ? "string" == typeof e
            ? ne.call(pe(e), this[0])
            : ne.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function(e, t) {
        return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))));
      },
      addBack: function(e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      }
    }),
      pe.each(
        {
          parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function(e) {
            return me(e, "parentNode");
          },
          parentsUntil: function(e, t, n) {
            return me(e, "parentNode", n);
          },
          next: function(e) {
            return n(e, "nextSibling");
          },
          prev: function(e) {
            return n(e, "previousSibling");
          },
          nextAll: function(e) {
            return me(e, "nextSibling");
          },
          prevAll: function(e) {
            return me(e, "previousSibling");
          },
          nextUntil: function(e, t, n) {
            return me(e, "nextSibling", n);
          },
          prevUntil: function(e, t, n) {
            return me(e, "previousSibling", n);
          },
          siblings: function(e) {
            return ve((e.parentNode || {}).firstChild, e);
          },
          children: function(e) {
            return ve(e.firstChild);
          },
          contents: function(e) {
            return null != e.contentDocument && Z(e.contentDocument)
              ? e.contentDocument
              : (c(e, "template") && (e = e.content || e),
                pe.merge([], e.childNodes));
          }
        },
        function(i, o) {
          pe.fn[i] = function(e, t) {
            var n = pe.map(this, o, e);
            return (
              "Until" !== i.slice(-5) && (t = e),
              t && "string" == typeof t && (n = pe.filter(t, n)),
              1 < this.length &&
                (_e[i] || pe.uniqueSort(n), Ce.test(i) && n.reverse()),
              this.pushStack(n)
            );
          };
        }
      );
    var Te = /[^\x20\t\r\n\f]+/g;
    (pe.Callbacks = function(i) {
      var e, n;
      i =
        "string" == typeof i
          ? ((e = i),
            (n = {}),
            pe.each(e.match(Te) || [], function(e, t) {
              n[t] = !0;
            }),
            n)
          : pe.extend({}, i);
      var o,
        t,
        r,
        a,
        s = [],
        l = [],
        c = -1,
        u = function() {
          for (a = a || i.once, r = o = !0; l.length; c = -1)
            for (t = l.shift(); ++c < s.length; )
              !1 === s[c].apply(t[0], t[1]) &&
                i.stopOnFalse &&
                ((c = s.length), (t = !1));
          i.memory || (t = !1), (o = !1), a && (s = t ? [] : "");
        },
        d = {
          add: function() {
            return (
              s &&
                (t && !o && ((c = s.length - 1), l.push(t)),
                (function n(e) {
                  pe.each(e, function(e, t) {
                    ce(t)
                      ? (i.unique && d.has(t)) || s.push(t)
                      : t && t.length && "string" !== m(t) && n(t);
                  });
                })(arguments),
                t && !o && u()),
              this
            );
          },
          remove: function() {
            return (
              pe.each(arguments, function(e, t) {
                for (var n; -1 < (n = pe.inArray(t, s, n)); )
                  s.splice(n, 1), n <= c && c--;
              }),
              this
            );
          },
          has: function(e) {
            return e ? -1 < pe.inArray(e, s) : 0 < s.length;
          },
          empty: function() {
            return s && (s = []), this;
          },
          disable: function() {
            return (a = l = []), (s = t = ""), this;
          },
          disabled: function() {
            return !s;
          },
          lock: function() {
            return (a = l = []), t || o || (s = t = ""), this;
          },
          locked: function() {
            return !!a;
          },
          fireWith: function(e, t) {
            return (
              a ||
                ((t = [e, (t = t || []).slice ? t.slice() : t]),
                l.push(t),
                o || u()),
              this
            );
          },
          fire: function() {
            return d.fireWith(this, arguments), this;
          },
          fired: function() {
            return !!r;
          }
        };
      return d;
    }),
      pe.extend({
        Deferred: function(e) {
          var r = [
              [
                "notify",
                "progress",
                pe.Callbacks("memory"),
                pe.Callbacks("memory"),
                2
              ],
              [
                "resolve",
                "done",
                pe.Callbacks("once memory"),
                pe.Callbacks("once memory"),
                0,
                "resolved"
              ],
              [
                "reject",
                "fail",
                pe.Callbacks("once memory"),
                pe.Callbacks("once memory"),
                1,
                "rejected"
              ]
            ],
            o = "pending",
            a = {
              state: function() {
                return o;
              },
              always: function() {
                return s.done(arguments).fail(arguments), this;
              },
              catch: function(e) {
                return a.then(null, e);
              },
              pipe: function() {
                var o = arguments;
                return pe
                  .Deferred(function(i) {
                    pe.each(r, function(e, t) {
                      var n = ce(o[t[4]]) && o[t[4]];
                      s[t[1]](function() {
                        var e = n && n.apply(this, arguments);
                        e && ce(e.promise)
                          ? e
                              .promise()
                              .progress(i.notify)
                              .done(i.resolve)
                              .fail(i.reject)
                          : i[t[0] + "With"](this, n ? [e] : arguments);
                      });
                    }),
                      (o = null);
                  })
                  .promise();
              },
              then: function(t, n, i) {
                function l(o, r, a, s) {
                  return function() {
                    var n = this,
                      i = arguments,
                      e = function() {
                        var e, t;
                        if (!(o < c)) {
                          if ((e = a.apply(n, i)) === r.promise())
                            throw new TypeError("Thenable self-resolution");
                          (t =
                            e &&
                            ("object" == typeof e || "function" == typeof e) &&
                            e.then),
                            ce(t)
                              ? s
                                ? t.call(e, l(c, r, u, s), l(c, r, d, s))
                                : (c++,
                                  t.call(
                                    e,
                                    l(c, r, u, s),
                                    l(c, r, d, s),
                                    l(c, r, u, r.notifyWith)
                                  ))
                              : (a !== u && ((n = void 0), (i = [e])),
                                (s || r.resolveWith)(n, i));
                        }
                      },
                      t = s
                        ? e
                        : function() {
                            try {
                              e();
                            } catch (e) {
                              pe.Deferred.exceptionHook &&
                                pe.Deferred.exceptionHook(e, t.stackTrace),
                                c <= o + 1 &&
                                  (a !== d && ((n = void 0), (i = [e])),
                                  r.rejectWith(n, i));
                            }
                          };
                    o
                      ? t()
                      : (pe.Deferred.getStackHook &&
                          (t.stackTrace = pe.Deferred.getStackHook()),
                        _.setTimeout(t));
                  };
                }
                var c = 0;
                return pe
                  .Deferred(function(e) {
                    r[0][3].add(l(0, e, ce(i) ? i : u, e.notifyWith)),
                      r[1][3].add(l(0, e, ce(t) ? t : u)),
                      r[2][3].add(l(0, e, ce(n) ? n : d));
                  })
                  .promise();
              },
              promise: function(e) {
                return null != e ? pe.extend(e, a) : a;
              }
            },
            s = {};
          return (
            pe.each(r, function(e, t) {
              var n = t[2],
                i = t[5];
              (a[t[1]] = n.add),
                i &&
                  n.add(
                    function() {
                      o = i;
                    },
                    r[3 - e][2].disable,
                    r[3 - e][3].disable,
                    r[0][2].lock,
                    r[0][3].lock
                  ),
                n.add(t[3].fire),
                (s[t[0]] = function() {
                  return (
                    s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                  );
                }),
                (s[t[0] + "With"] = n.fireWith);
            }),
            a.promise(s),
            e && e.call(s, s),
            s
          );
        },
        when: function(e) {
          var n = arguments.length,
            t = n,
            i = Array(t),
            o = K.call(arguments),
            r = pe.Deferred(),
            a = function(t) {
              return function(e) {
                (i[t] = this),
                  (o[t] = 1 < arguments.length ? K.call(arguments) : e),
                  --n || r.resolveWith(i, o);
              };
            };
          if (
            n <= 1 &&
            (l(e, r.done(a(t)).resolve, r.reject, !n),
            "pending" === r.state() || ce(o[t] && o[t].then))
          )
            return r.then();
          for (; t--; ) l(o[t], a(t), r.reject);
          return r.promise();
        }
      });
    var Se = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (pe.Deferred.exceptionHook = function(e, t) {
      _.console &&
        _.console.warn &&
        e &&
        Se.test(e.name) &&
        _.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }),
      (pe.readyException = function(e) {
        _.setTimeout(function() {
          throw e;
        });
      });
    var ke = pe.Deferred();
    (pe.fn.ready = function(e) {
      return (
        ke.then(e)["catch"](function(e) {
          pe.readyException(e);
        }),
        this
      );
    }),
      pe.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
          (!0 === e ? --pe.readyWait : pe.isReady) ||
            ((pe.isReady = !0) !== e && 0 < --pe.readyWait) ||
            ke.resolveWith(de, [pe]);
        }
      }),
      (pe.ready.then = ke.then),
      "complete" === de.readyState ||
      ("loading" !== de.readyState && !de.documentElement.doScroll)
        ? _.setTimeout(pe.ready)
        : (de.addEventListener("DOMContentLoaded", i),
          _.addEventListener("load", i));
    var Ee = function(e, t, n, i, o, r, a) {
        var s = 0,
          l = e.length,
          c = null == n;
        if ("object" === m(n))
          for (s in ((o = !0), n)) Ee(e, t, s, n[s], !0, r, a);
        else if (
          void 0 !== i &&
          ((o = !0),
          ce(i) || (a = !0),
          c &&
            (a
              ? (t.call(e, i), (t = null))
              : ((c = t),
                (t = function(e, t, n) {
                  return c.call(pe(e), n);
                }))),
          t)
        )
          for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
      },
      De = /^-ms-/,
      $e = /-([a-z])/g,
      je = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
    (r.uid = 1),
      (r.prototype = {
        cache: function(e) {
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              je(e) &&
                (e.nodeType
                  ? (e[this.expando] = t)
                  : Object.defineProperty(e, this.expando, {
                      value: t,
                      configurable: !0
                    }))),
            t
          );
        },
        set: function(e, t, n) {
          var i,
            o = this.cache(e);
          if ("string" == typeof t) o[f(t)] = n;
          else for (i in t) o[f(i)] = t[i];
          return o;
        },
        get: function(e, t) {
          return void 0 === t
            ? this.cache(e)
            : e[this.expando] && e[this.expando][f(t)];
        },
        access: function(e, t, n) {
          return void 0 === t || (t && "string" == typeof t && void 0 === n)
            ? this.get(e, t)
            : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function(e, t) {
          var n,
            i = e[this.expando];
          if (void 0 !== i) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t)
                ? t.map(f)
                : (t = f(t)) in i
                ? [t]
                : t.match(Te) || []).length;
              for (; n--; ) delete i[t[n]];
            }
            (void 0 === t || pe.isEmptyObject(i)) &&
              (e.nodeType
                ? (e[this.expando] = void 0)
                : delete e[this.expando]);
          }
        },
        hasData: function(e) {
          var t = e[this.expando];
          return void 0 !== t && !pe.isEmptyObject(t);
        }
      });
    var Ae = new r(),
      Ne = new r(),
      Le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Me = /[A-Z]/g;
    pe.extend({
      hasData: function(e) {
        return Ne.hasData(e) || Ae.hasData(e);
      },
      data: function(e, t, n) {
        return Ne.access(e, t, n);
      },
      removeData: function(e, t) {
        Ne.remove(e, t);
      },
      _data: function(e, t, n) {
        return Ae.access(e, t, n);
      },
      _removeData: function(e, t) {
        Ae.remove(e, t);
      }
    }),
      pe.fn.extend({
        data: function(n, e) {
          var t,
            i,
            o,
            r = this[0],
            a = r && r.attributes;
          if (void 0 !== n)
            return "object" == typeof n
              ? this.each(function() {
                  Ne.set(this, n);
                })
              : Ee(
                  this,
                  function(e) {
                    var t;
                    if (r && void 0 === e)
                      return void 0 !== (t = Ne.get(r, n))
                        ? t
                        : void 0 !== (t = h(r, n))
                        ? t
                        : void 0;
                    this.each(function() {
                      Ne.set(this, n, e);
                    });
                  },
                  null,
                  e,
                  1 < arguments.length,
                  null,
                  !0
                );
          if (
            this.length &&
            ((o = Ne.get(r)), 1 === r.nodeType && !Ae.get(r, "hasDataAttrs"))
          ) {
            for (t = a.length; t--; )
              a[t] &&
                0 === (i = a[t].name).indexOf("data-") &&
                ((i = f(i.slice(5))), h(r, i, o[i]));
            Ae.set(r, "hasDataAttrs", !0);
          }
          return o;
        },
        removeData: function(e) {
          return this.each(function() {
            Ne.remove(this, e);
          });
        }
      }),
      pe.extend({
        queue: function(e, t, n) {
          var i;
          if (e)
            return (
              (t = (t || "fx") + "queue"),
              (i = Ae.get(e, t)),
              n &&
                (!i || Array.isArray(n)
                  ? (i = Ae.access(e, t, pe.makeArray(n)))
                  : i.push(n)),
              i || []
            );
        },
        dequeue: function(e, t) {
          t = t || "fx";
          var n = pe.queue(e, t),
            i = n.length,
            o = n.shift(),
            r = pe._queueHooks(e, t);
          "inprogress" === o && ((o = n.shift()), i--),
            o &&
              ("fx" === t && n.unshift("inprogress"),
              delete r.stop,
              o.call(
                e,
                function() {
                  pe.dequeue(e, t);
                },
                r
              )),
            !i && r && r.empty.fire();
        },
        _queueHooks: function(e, t) {
          var n = t + "queueHooks";
          return (
            Ae.get(e, n) ||
            Ae.access(e, n, {
              empty: pe.Callbacks("once memory").add(function() {
                Ae.remove(e, [t + "queue", n]);
              })
            })
          );
        }
      }),
      pe.fn.extend({
        queue: function(t, n) {
          var e = 2;
          return (
            "string" != typeof t && ((n = t), (t = "fx"), e--),
            arguments.length < e
              ? pe.queue(this[0], t)
              : void 0 === n
              ? this
              : this.each(function() {
                  var e = pe.queue(this, t, n);
                  pe._queueHooks(this, t),
                    "fx" === t && "inprogress" !== e[0] && pe.dequeue(this, t);
                })
          );
        },
        dequeue: function(e) {
          return this.each(function() {
            pe.dequeue(this, e);
          });
        },
        clearQueue: function(e) {
          return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
          var n,
            i = 1,
            o = pe.Deferred(),
            r = this,
            a = this.length,
            s = function() {
              --i || o.resolveWith(r, [r]);
            };
          for (
            "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
            a--;

          )
            (n = Ae.get(r[a], e + "queueHooks")) &&
              n.empty &&
              (i++, n.empty.add(s));
          return s(), o.promise(t);
        }
      });
    var He = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Oe = new RegExp("^(?:([+-])=|)(" + He + ")([a-z%]*)$", "i"),
      Be = ["Top", "Right", "Bottom", "Left"],
      Pe = de.documentElement,
      Re = function(e) {
        return pe.contains(e.ownerDocument, e);
      },
      Ie = { composed: !0 };
    Pe.getRootNode &&
      (Re = function(e) {
        return (
          pe.contains(e.ownerDocument, e) ||
          e.getRootNode(Ie) === e.ownerDocument
        );
      });
    var qe = function(e, t) {
        return (
          "none" === (e = t || e).style.display ||
          ("" === e.style.display && Re(e) && "none" === pe.css(e, "display"))
        );
      },
      We = {};
    pe.fn.extend({
      show: function() {
        return v(this, !0);
      },
      hide: function() {
        return v(this);
      },
      toggle: function(e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function() {
              qe(this) ? pe(this).show() : pe(this).hide();
            });
      }
    });
    var ze,
      Fe,
      Xe = /^(?:checkbox|radio)$/i,
      Ue = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      Ve = /^$|^module$|\/(?:java|ecma)script/i;
    (ze = de.createDocumentFragment().appendChild(de.createElement("div"))),
      (Fe = de.createElement("input")).setAttribute("type", "radio"),
      Fe.setAttribute("checked", "checked"),
      Fe.setAttribute("name", "t"),
      ze.appendChild(Fe),
      (le.checkClone = ze.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (ze.innerHTML = "<textarea>x</textarea>"),
      (le.noCloneChecked = !!ze.cloneNode(!0).lastChild.defaultValue),
      (ze.innerHTML = "<option></option>"),
      (le.option = !!ze.lastChild);
    var Ye = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
    (Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead),
      (Ye.th = Ye.td),
      le.option ||
        (Ye.optgroup = Ye.option = [
          1,
          "<select multiple='multiple'>",
          "</select>"
        ]);
    var Qe = /<|&#?\w+;/,
      Ge = /^key/,
      Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ze = /^([^.]*)(?:\.(.+)|)/;
    (pe.event = {
      global: {},
      add: function(t, e, n, i, o) {
        var r,
          a,
          s,
          l,
          c,
          u,
          d,
          f,
          h,
          p,
          g,
          m = Ae.get(t);
        if (je(t))
          for (
            n.handler && ((n = (r = n).handler), (o = r.selector)),
              o && pe.find.matchesSelector(Pe, o),
              n.guid || (n.guid = pe.guid++),
              (l = m.events) || (l = m.events = Object.create(null)),
              (a = m.handle) ||
                (a = m.handle = function(e) {
                  return void 0 !== pe && pe.event.triggered !== e.type
                    ? pe.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
              c = (e = (e || "").match(Te) || [""]).length;
            c--;

          )
            (h = g = (s = Ze.exec(e[c]) || [])[1]),
              (p = (s[2] || "").split(".").sort()),
              h &&
                ((d = pe.event.special[h] || {}),
                (h = (o ? d.delegateType : d.bindType) || h),
                (d = pe.event.special[h] || {}),
                (u = pe.extend(
                  {
                    type: h,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && pe.expr.match.needsContext.test(o),
                    namespace: p.join(".")
                  },
                  r
                )),
                (f = l[h]) ||
                  (((f = l[h] = []).delegateCount = 0),
                  (d.setup && !1 !== d.setup.call(t, i, p, a)) ||
                    (t.addEventListener && t.addEventListener(h, a))),
                d.add &&
                  (d.add.call(t, u),
                  u.handler.guid || (u.handler.guid = n.guid)),
                o ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                (pe.event.global[h] = !0));
      },
      remove: function(e, t, n, i, o) {
        var r,
          a,
          s,
          l,
          c,
          u,
          d,
          f,
          h,
          p,
          g,
          m = Ae.hasData(e) && Ae.get(e);
        if (m && (l = m.events)) {
          for (c = (t = (t || "").match(Te) || [""]).length; c--; )
            if (
              ((h = g = (s = Ze.exec(t[c]) || [])[1]),
              (p = (s[2] || "").split(".").sort()),
              h)
            ) {
              for (
                d = pe.event.special[h] || {},
                  f = l[(h = (i ? d.delegateType : d.bindType) || h)] || [],
                  s =
                    s[2] &&
                    new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  a = r = f.length;
                r--;

              )
                (u = f[r]),
                  (!o && g !== u.origType) ||
                    (n && n.guid !== u.guid) ||
                    (s && !s.test(u.namespace)) ||
                    (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                    (f.splice(r, 1),
                    u.selector && f.delegateCount--,
                    d.remove && d.remove.call(e, u));
              a &&
                !f.length &&
                ((d.teardown && !1 !== d.teardown.call(e, p, m.handle)) ||
                  pe.removeEvent(e, h, m.handle),
                delete l[h]);
            } else for (h in l) pe.event.remove(e, h + t[c], n, i, !0);
          pe.isEmptyObject(l) && Ae.remove(e, "handle events");
        }
      },
      dispatch: function(e) {
        var t,
          n,
          i,
          o,
          r,
          a,
          s = new Array(arguments.length),
          l = pe.event.fix(e),
          c = (Ae.get(this, "events") || Object.create(null))[l.type] || [],
          u = pe.event.special[l.type] || {};
        for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
        if (
          ((l.delegateTarget = this),
          !u.preDispatch || !1 !== u.preDispatch.call(this, l))
        ) {
          for (
            a = pe.event.handlers.call(this, l, c), t = 0;
            (o = a[t++]) && !l.isPropagationStopped();

          )
            for (
              l.currentTarget = o.elem, n = 0;
              (r = o.handlers[n++]) && !l.isImmediatePropagationStopped();

            )
              (l.rnamespace &&
                !1 !== r.namespace &&
                !l.rnamespace.test(r.namespace)) ||
                ((l.handleObj = r),
                (l.data = r.data),
                void 0 !==
                  (i = (
                    (pe.event.special[r.origType] || {}).handle || r.handler
                  ).apply(o.elem, s)) &&
                  !1 === (l.result = i) &&
                  (l.preventDefault(), l.stopPropagation()));
          return u.postDispatch && u.postDispatch.call(this, l), l.result;
        }
      },
      handlers: function(e, t) {
        var n,
          i,
          o,
          r,
          a,
          s = [],
          l = t.delegateCount,
          c = e.target;
        if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
          for (; c !== this; c = c.parentNode || this)
            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
              for (r = [], a = {}, n = 0; n < l; n++)
                void 0 === a[(o = (i = t[n]).selector + " ")] &&
                  (a[o] = i.needsContext
                    ? -1 < pe(o, this).index(c)
                    : pe.find(o, this, null, [c]).length),
                  a[o] && r.push(i);
              r.length && s.push({ elem: c, handlers: r });
            }
        return (
          (c = this),
          l < t.length && s.push({ elem: c, handlers: t.slice(l) }),
          s
        );
      },
      addProp: function(t, e) {
        Object.defineProperty(pe.Event.prototype, t, {
          enumerable: !0,
          configurable: !0,
          get: ce(e)
            ? function() {
                if (this.originalEvent) return e(this.originalEvent);
              }
            : function() {
                if (this.originalEvent) return this.originalEvent[t];
              },
          set: function(e) {
            Object.defineProperty(this, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e
            });
          }
        });
      },
      fix: function(e) {
        return e[pe.expando] ? e : new pe.Event(e);
      },
      special: {
        load: { noBubble: !0 },
        click: {
          setup: function(e) {
            var t = this || e;
            return (
              Xe.test(t.type) && t.click && c(t, "input") && S(t, "click", a),
              !1
            );
          },
          trigger: function(e) {
            var t = this || e;
            return (
              Xe.test(t.type) && t.click && c(t, "input") && S(t, "click"), !0
            );
          },
          _default: function(e) {
            var t = e.target;
            return (
              (Xe.test(t.type) &&
                t.click &&
                c(t, "input") &&
                Ae.get(t, "click")) ||
              c(t, "a")
            );
          }
        },
        beforeunload: {
          postDispatch: function(e) {
            void 0 !== e.result &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          }
        }
      }
    }),
      (pe.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
      (pe.Event = function(e, t) {
        if (!(this instanceof pe.Event)) return new pe.Event(e, t);
        e && e.type
          ? ((this.originalEvent = e),
            (this.type = e.type),
            (this.isDefaultPrevented =
              e.defaultPrevented ||
              (void 0 === e.defaultPrevented && !1 === e.returnValue)
                ? a
                : b),
            (this.target =
              e.target && 3 === e.target.nodeType
                ? e.target.parentNode
                : e.target),
            (this.currentTarget = e.currentTarget),
            (this.relatedTarget = e.relatedTarget))
          : (this.type = e),
          t && pe.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || Date.now()),
          (this[pe.expando] = !0);
      }),
      (pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        isSimulated: !1,
        preventDefault: function() {
          var e = this.originalEvent;
          (this.isDefaultPrevented = a),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          (this.isPropagationStopped = a),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = a),
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        }
      }),
      pe.each(
        {
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          code: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: function(e) {
            var t = e.button;
            return null == e.which && Ge.test(e.type)
              ? null != e.charCode
                ? e.charCode
                : e.keyCode
              : !e.which && void 0 !== t && Je.test(e.type)
              ? 1 & t
                ? 1
                : 2 & t
                ? 3
                : 4 & t
                ? 2
                : 0
              : e.which;
          }
        },
        pe.event.addProp
      ),
      pe.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
        pe.event.special[e] = {
          setup: function() {
            return S(this, e, C), !1;
          },
          trigger: function() {
            return S(this, e), !0;
          },
          delegateType: t
        };
      }),
      pe.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        },
        function(e, o) {
          pe.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
              var t,
                n = e.relatedTarget,
                i = e.handleObj;
              return (
                (n && (n === this || pe.contains(this, n))) ||
                  ((e.type = i.origType),
                  (t = i.handler.apply(this, arguments)),
                  (e.type = o)),
                t
              );
            }
          };
        }
      ),
      pe.fn.extend({
        on: function(e, t, n, i) {
          return T(this, e, t, n, i);
        },
        one: function(e, t, n, i) {
          return T(this, e, t, n, i, 1);
        },
        off: function(e, t, n) {
          var i, o;
          if (e && e.preventDefault && e.handleObj)
            return (
              (i = e.handleObj),
              pe(e.delegateTarget).off(
                i.namespace ? i.origType + "." + i.namespace : i.origType,
                i.selector,
                i.handler
              ),
              this
            );
          if ("object" != typeof e)
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = b),
              this.each(function() {
                pe.event.remove(this, e, n, t);
              })
            );
          for (o in e) this.off(o, t, e[o]);
          return this;
        }
      });
    var Ke = /<script|<style|<link/i,
      et = /checked\s*(?:[^=]|=\s*.checked.)/i,
      tt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    pe.extend({
      htmlPrefilter: function(e) {
        return e;
      },
      clone: function(e, t, n) {
        var i,
          o,
          r,
          a,
          s,
          l,
          c,
          u = e.cloneNode(!0),
          d = Re(e);
        if (
          !(
            le.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            pe.isXMLDoc(e)
          )
        )
          for (a = y(u), i = 0, o = (r = y(e)).length; i < o; i++)
            (s = r[i]),
              "input" === (c = (l = a[i]).nodeName.toLowerCase()) &&
              Xe.test(s.type)
                ? (l.checked = s.checked)
                : ("input" !== c && "textarea" !== c) ||
                  (l.defaultValue = s.defaultValue);
        if (t)
          if (n)
            for (r = r || y(e), a = a || y(u), i = 0, o = r.length; i < o; i++)
              $(r[i], a[i]);
          else $(e, u);
        return 0 < (a = y(u, "script")).length && w(a, !d && y(e, "script")), u;
      },
      cleanData: function(e) {
        for (
          var t, n, i, o = pe.event.special, r = 0;
          void 0 !== (n = e[r]);
          r++
        )
          if (je(n)) {
            if ((t = n[Ae.expando])) {
              if (t.events)
                for (i in t.events)
                  o[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, t.handle);
              n[Ae.expando] = void 0;
            }
            n[Ne.expando] && (n[Ne.expando] = void 0);
          }
      }
    }),
      pe.fn.extend({
        detach: function(e) {
          return A(this, e, !0);
        },
        remove: function(e) {
          return A(this, e);
        },
        text: function(e) {
          return Ee(
            this,
            function(e) {
              return void 0 === e
                ? pe.text(this)
                : this.empty().each(function() {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = e);
                  });
            },
            null,
            e,
            arguments.length
          );
        },
        append: function() {
          return j(this, arguments, function(e) {
            (1 !== this.nodeType &&
              11 !== this.nodeType &&
              9 !== this.nodeType) ||
              k(this, e).appendChild(e);
          });
        },
        prepend: function() {
          return j(this, arguments, function(e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = k(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function() {
          return j(this, arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function() {
          return j(this, arguments, function(e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function() {
          for (var e, t = 0; null != (e = this[t]); t++)
            1 === e.nodeType && (pe.cleanData(y(e, !1)), (e.textContent = ""));
          return this;
        },
        clone: function(e, t) {
          return (
            (e = null != e && e),
            (t = null == t ? e : t),
            this.map(function() {
              return pe.clone(this, e, t);
            })
          );
        },
        html: function(e) {
          return Ee(
            this,
            function(e) {
              var t = this[0] || {},
                n = 0,
                i = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if (
                "string" == typeof e &&
                !Ke.test(e) &&
                !Ye[(Ue.exec(e) || ["", ""])[1].toLowerCase()]
              ) {
                e = pe.htmlPrefilter(e);
                try {
                  for (; n < i; n++)
                    1 === (t = this[n] || {}).nodeType &&
                      (pe.cleanData(y(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (e) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function() {
          var n = [];
          return j(
            this,
            arguments,
            function(e) {
              var t = this.parentNode;
              pe.inArray(this, n) < 0 &&
                (pe.cleanData(y(this)), t && t.replaceChild(e, this));
            },
            n
          );
        }
      }),
      pe.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        },
        function(e, a) {
          pe.fn[e] = function(e) {
            for (var t, n = [], i = pe(e), o = i.length - 1, r = 0; r <= o; r++)
              (t = r === o ? this : this.clone(!0)),
                pe(i[r])[a](t),
                te.apply(n, t.get());
            return this.pushStack(n);
          };
        }
      );
    var nt = new RegExp("^(" + He + ")(?!px)[a-z%]+$", "i"),
      it = function(e) {
        var t = e.ownerDocument.defaultView;
        return (t && t.opener) || (t = _), t.getComputedStyle(e);
      },
      ot = function(e, t, n) {
        var i,
          o,
          r = {};
        for (o in t) (r[o] = e.style[o]), (e.style[o] = t[o]);
        for (o in ((i = n.call(e)), t)) e.style[o] = r[o];
        return i;
      },
      rt = new RegExp(Be.join("|"), "i");
    !(function() {
      function e() {
        if (c) {
          (l.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (c.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            Pe.appendChild(l).appendChild(c);
          var e = _.getComputedStyle(c);
          (n = "1%" !== e.top),
            (s = 12 === t(e.marginLeft)),
            (c.style.right = "60%"),
            (r = 36 === t(e.right)),
            (i = 36 === t(e.width)),
            (c.style.position = "absolute"),
            (o = 12 === t(c.offsetWidth / 3)),
            Pe.removeChild(l),
            (c = null);
        }
      }
      function t(e) {
        return Math.round(parseFloat(e));
      }
      var n,
        i,
        o,
        r,
        a,
        s,
        l = de.createElement("div"),
        c = de.createElement("div");
      c.style &&
        ((c.style.backgroundClip = "content-box"),
        (c.cloneNode(!0).style.backgroundClip = ""),
        (le.clearCloneStyle = "content-box" === c.style.backgroundClip),
        pe.extend(le, {
          boxSizingReliable: function() {
            return e(), i;
          },
          pixelBoxStyles: function() {
            return e(), r;
          },
          pixelPosition: function() {
            return e(), n;
          },
          reliableMarginLeft: function() {
            return e(), s;
          },
          scrollboxSize: function() {
            return e(), o;
          },
          reliableTrDimensions: function() {
            var e, t, n, i;
            return (
              null == a &&
                ((e = de.createElement("table")),
                (t = de.createElement("tr")),
                (n = de.createElement("div")),
                (e.style.cssText = "position:absolute;left:-11111px"),
                (t.style.height = "1px"),
                (n.style.height = "9px"),
                Pe.appendChild(e)
                  .appendChild(t)
                  .appendChild(n),
                (i = _.getComputedStyle(t)),
                (a = 3 < parseInt(i.height)),
                Pe.removeChild(e)),
              a
            );
          }
        }));
    })();
    var at = ["Webkit", "Moz", "ms"],
      st = de.createElement("div").style,
      lt = {},
      ct = /^(none|table(?!-c[ea]).+)/,
      ut = /^--/,
      dt = { position: "absolute", visibility: "hidden", display: "block" },
      ft = { letterSpacing: "0", fontWeight: "400" };
    pe.extend({
      cssHooks: {
        opacity: {
          get: function(e, t) {
            if (t) {
              var n = N(e, "opacity");
              return "" === n ? "1" : n;
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function(e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o,
            r,
            a,
            s = f(t),
            l = ut.test(t),
            c = e.style;
          if (
            (l || (t = M(s)),
            (a = pe.cssHooks[t] || pe.cssHooks[s]),
            void 0 === n)
          )
            return a && "get" in a && void 0 !== (o = a.get(e, !1, i))
              ? o
              : c[t];
          "string" == (r = typeof n) &&
            (o = Oe.exec(n)) &&
            o[1] &&
            ((n = p(e, t, o)), (r = "number")),
            null != n &&
              n == n &&
              ("number" !== r ||
                l ||
                (n += (o && o[3]) || (pe.cssNumber[s] ? "" : "px")),
              le.clearCloneStyle ||
                "" !== n ||
                0 !== t.indexOf("background") ||
                (c[t] = "inherit"),
              (a && "set" in a && void 0 === (n = a.set(e, n, i))) ||
                (l ? c.setProperty(t, n) : (c[t] = n)));
        }
      },
      css: function(e, t, n, i) {
        var o,
          r,
          a,
          s = f(t);
        return (
          ut.test(t) || (t = M(s)),
          (a = pe.cssHooks[t] || pe.cssHooks[s]) &&
            "get" in a &&
            (o = a.get(e, !0, n)),
          void 0 === o && (o = N(e, t, i)),
          "normal" === o && t in ft && (o = ft[t]),
          "" === n || n
            ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o)
            : o
        );
      }
    }),
      pe.each(["height", "width"], function(e, l) {
        pe.cssHooks[l] = {
          get: function(e, t, n) {
            if (t)
              return !ct.test(pe.css(e, "display")) ||
                (e.getClientRects().length && e.getBoundingClientRect().width)
                ? B(e, l, n)
                : ot(e, dt, function() {
                    return B(e, l, n);
                  });
          },
          set: function(e, t, n) {
            var i,
              o = it(e),
              r = !le.scrollboxSize() && "absolute" === o.position,
              a = (r || n) && "border-box" === pe.css(e, "boxSizing", !1, o),
              s = n ? O(e, l, n, a, o) : 0;
            return (
              a &&
                r &&
                (s -= Math.ceil(
                  e["offset" + l[0].toUpperCase() + l.slice(1)] -
                    parseFloat(o[l]) -
                    O(e, l, "border", !1, o) -
                    0.5
                )),
              s &&
                (i = Oe.exec(t)) &&
                "px" !== (i[3] || "px") &&
                ((e.style[l] = t), (t = pe.css(e, l))),
              H(0, t, s)
            );
          }
        };
      }),
      (pe.cssHooks.marginLeft = L(le.reliableMarginLeft, function(e, t) {
        if (t)
          return (
            (parseFloat(N(e, "marginLeft")) ||
              e.getBoundingClientRect().left -
                ot(e, { marginLeft: 0 }, function() {
                  return e.getBoundingClientRect().left;
                })) + "px"
          );
      })),
      pe.each({ margin: "", padding: "", border: "Width" }, function(o, r) {
        (pe.cssHooks[o + r] = {
          expand: function(e) {
            for (
              var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e];
              t < 4;
              t++
            )
              n[o + Be[t] + r] = i[t] || i[t - 2] || i[0];
            return n;
          }
        }),
          "margin" !== o && (pe.cssHooks[o + r].set = H);
      }),
      pe.fn.extend({
        css: function(e, t) {
          return Ee(
            this,
            function(e, t, n) {
              var i,
                o,
                r = {},
                a = 0;
              if (Array.isArray(t)) {
                for (i = it(e), o = t.length; a < o; a++)
                  r[t[a]] = pe.css(e, t[a], !1, i);
                return r;
              }
              return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t);
            },
            e,
            t,
            1 < arguments.length
          );
        }
      }),
      (((pe.Tween = P).prototype = {
        constructor: P,
        init: function(e, t, n, i, o, r) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = o || pe.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = i),
            (this.unit = r || (pe.cssNumber[n] ? "" : "px"));
        },
        cur: function() {
          var e = P.propHooks[this.prop];
          return e && e.get ? e.get(this) : P.propHooks._default.get(this);
        },
        run: function(e) {
          var t,
            n = P.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t = pe.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
              : (this.pos = t = e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : P.propHooks._default.set(this),
            this
          );
        }
      }).init.prototype = P.prototype),
      ((P.propHooks = {
        _default: {
          get: function(e) {
            var t;
            return 1 !== e.elem.nodeType ||
              (null != e.elem[e.prop] && null == e.elem.style[e.prop])
              ? e.elem[e.prop]
              : (t = pe.css(e.elem, e.prop, "")) && "auto" !== t
              ? t
              : 0;
          },
          set: function(e) {
            pe.fx.step[e.prop]
              ? pe.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType ||
                (!pe.cssHooks[e.prop] && null == e.elem.style[M(e.prop)])
              ? (e.elem[e.prop] = e.now)
              : pe.style(e.elem, e.prop, e.now + e.unit);
          }
        }
      }).scrollTop = P.propHooks.scrollLeft = {
        set: function(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
      }),
      (pe.easing = {
        linear: function(e) {
          return e;
        },
        swing: function(e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
      }),
      (pe.fx = P.prototype.init),
      (pe.fx.step = {});
    var ht,
      pt,
      gt,
      mt,
      vt = /^(?:toggle|show|hide)$/,
      yt = /queueHooks$/;
    (pe.Animation = pe.extend(z, {
      tweeners: {
        "*": [
          function(e, t) {
            var n = this.createTween(e, t);
            return p(n.elem, e, Oe.exec(t), n), n;
          }
        ]
      },
      tweener: function(e, t) {
        ce(e) ? ((t = e), (e = ["*"])) : (e = e.match(Te));
        for (var n, i = 0, o = e.length; i < o; i++)
          (n = e[i]),
            (z.tweeners[n] = z.tweeners[n] || []),
            z.tweeners[n].unshift(t);
      },
      prefilters: [
        function(e, t, n) {
          var i,
            o,
            r,
            a,
            s,
            l,
            c,
            u,
            d = "width" in t || "height" in t,
            f = this,
            h = {},
            p = e.style,
            g = e.nodeType && qe(e),
            m = Ae.get(e, "fxshow");
          for (i in (n.queue ||
            (null == (a = pe._queueHooks(e, "fx")).unqueued &&
              ((a.unqueued = 0),
              (s = a.empty.fire),
              (a.empty.fire = function() {
                a.unqueued || s();
              })),
            a.unqueued++,
            f.always(function() {
              f.always(function() {
                a.unqueued--, pe.queue(e, "fx").length || a.empty.fire();
              });
            })),
          t))
            if (((o = t[i]), vt.test(o))) {
              if (
                (delete t[i],
                (r = r || "toggle" === o),
                o === (g ? "hide" : "show"))
              ) {
                if ("show" !== o || !m || void 0 === m[i]) continue;
                g = !0;
              }
              h[i] = (m && m[i]) || pe.style(e, i);
            }
          if ((l = !pe.isEmptyObject(t)) || !pe.isEmptyObject(h))
            for (i in (d &&
              1 === e.nodeType &&
              ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
              null == (c = m && m.display) && (c = Ae.get(e, "display")),
              "none" === (u = pe.css(e, "display")) &&
                (c
                  ? (u = c)
                  : (v([e], !0),
                    (c = e.style.display || c),
                    (u = pe.css(e, "display")),
                    v([e]))),
              ("inline" === u || ("inline-block" === u && null != c)) &&
                "none" === pe.css(e, "float") &&
                (l ||
                  (f.done(function() {
                    p.display = c;
                  }),
                  null == c && ((u = p.display), (c = "none" === u ? "" : u))),
                (p.display = "inline-block"))),
            n.overflow &&
              ((p.overflow = "hidden"),
              f.always(function() {
                (p.overflow = n.overflow[0]),
                  (p.overflowX = n.overflow[1]),
                  (p.overflowY = n.overflow[2]);
              })),
            (l = !1),
            h))
              l ||
                (m
                  ? "hidden" in m && (g = m.hidden)
                  : (m = Ae.access(e, "fxshow", { display: c })),
                r && (m.hidden = !g),
                g && v([e], !0),
                f.done(function() {
                  for (i in (g || v([e]), Ae.remove(e, "fxshow"), h))
                    pe.style(e, i, h[i]);
                })),
                (l = W(g ? m[i] : 0, i, f)),
                i in m ||
                  ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
        }
      ],
      prefilter: function(e, t) {
        t ? z.prefilters.unshift(e) : z.prefilters.push(e);
      }
    })),
      (pe.speed = function(e, t, n) {
        var i =
          e && "object" == typeof e
            ? pe.extend({}, e)
            : {
                complete: n || (!n && t) || (ce(e) && e),
                duration: e,
                easing: (n && t) || (t && !ce(t) && t)
              };
        return (
          pe.fx.off
            ? (i.duration = 0)
            : "number" != typeof i.duration &&
              (i.duration in pe.fx.speeds
                ? (i.duration = pe.fx.speeds[i.duration])
                : (i.duration = pe.fx.speeds._default)),
          (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
          (i.old = i.complete),
          (i.complete = function() {
            ce(i.old) && i.old.call(this), i.queue && pe.dequeue(this, i.queue);
          }),
          i
        );
      }),
      pe.fn.extend({
        fadeTo: function(e, t, n, i) {
          return this.filter(qe)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, i);
        },
        animate: function(t, e, n, i) {
          var o = pe.isEmptyObject(t),
            r = pe.speed(e, n, i),
            a = function() {
              var e = z(this, pe.extend({}, t), r);
              (o || Ae.get(this, "finish")) && e.stop(!0);
            };
          return (
            (a.finish = a),
            o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
          );
        },
        stop: function(o, e, r) {
          var a = function(e) {
            var t = e.stop;
            delete e.stop, t(r);
          };
          return (
            "string" != typeof o && ((r = e), (e = o), (o = void 0)),
            e && this.queue(o || "fx", []),
            this.each(function() {
              var e = !0,
                t = null != o && o + "queueHooks",
                n = pe.timers,
                i = Ae.get(this);
              if (t) i[t] && i[t].stop && a(i[t]);
              else for (t in i) i[t] && i[t].stop && yt.test(t) && a(i[t]);
              for (t = n.length; t--; )
                n[t].elem !== this ||
                  (null != o && n[t].queue !== o) ||
                  (n[t].anim.stop(r), (e = !1), n.splice(t, 1));
              (!e && r) || pe.dequeue(this, o);
            })
          );
        },
        finish: function(a) {
          return (
            !1 !== a && (a = a || "fx"),
            this.each(function() {
              var e,
                t = Ae.get(this),
                n = t[a + "queue"],
                i = t[a + "queueHooks"],
                o = pe.timers,
                r = n ? n.length : 0;
              for (
                t.finish = !0,
                  pe.queue(this, a, []),
                  i && i.stop && i.stop.call(this, !0),
                  e = o.length;
                e--;

              )
                o[e].elem === this &&
                  o[e].queue === a &&
                  (o[e].anim.stop(!0), o.splice(e, 1));
              for (e = 0; e < r; e++)
                n[e] && n[e].finish && n[e].finish.call(this);
              delete t.finish;
            })
          );
        }
      }),
      pe.each(["toggle", "show", "hide"], function(e, i) {
        var o = pe.fn[i];
        pe.fn[i] = function(e, t, n) {
          return null == e || "boolean" == typeof e
            ? o.apply(this, arguments)
            : this.animate(q(i, !0), e, t, n);
        };
      }),
      pe.each(
        {
          slideDown: q("show"),
          slideUp: q("hide"),
          slideToggle: q("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        },
        function(e, i) {
          pe.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n);
          };
        }
      ),
      (pe.timers = []),
      (pe.fx.tick = function() {
        var e,
          t = 0,
          n = pe.timers;
        for (ht = Date.now(); t < n.length; t++)
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || pe.fx.stop(), (ht = void 0);
      }),
      (pe.fx.timer = function(e) {
        pe.timers.push(e), pe.fx.start();
      }),
      (pe.fx.interval = 13),
      (pe.fx.start = function() {
        pt || ((pt = !0), R());
      }),
      (pe.fx.stop = function() {
        pt = null;
      }),
      (pe.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (pe.fn.delay = function(i, e) {
        return (
          (i = (pe.fx && pe.fx.speeds[i]) || i),
          (e = e || "fx"),
          this.queue(e, function(e, t) {
            var n = _.setTimeout(e, i);
            t.stop = function() {
              _.clearTimeout(n);
            };
          })
        );
      }),
      (gt = de.createElement("input")),
      (mt = de.createElement("select").appendChild(de.createElement("option"))),
      (gt.type = "checkbox"),
      (le.checkOn = "" !== gt.value),
      (le.optSelected = mt.selected),
      ((gt = de.createElement("input")).value = "t"),
      (gt.type = "radio"),
      (le.radioValue = "t" === gt.value);
    var wt,
      xt = pe.expr.attrHandle;
    pe.fn.extend({
      attr: function(e, t) {
        return Ee(this, pe.attr, e, t, 1 < arguments.length);
      },
      removeAttr: function(e) {
        return this.each(function() {
          pe.removeAttr(this, e);
        });
      }
    }),
      pe.extend({
        attr: function(e, t, n) {
          var i,
            o,
            r = e.nodeType;
          if (3 !== r && 8 !== r && 2 !== r)
            return "undefined" == typeof e.getAttribute
              ? pe.prop(e, t, n)
              : ((1 === r && pe.isXMLDoc(e)) ||
                  (o =
                    pe.attrHooks[t.toLowerCase()] ||
                    (pe.expr.match.bool.test(t) ? wt : void 0)),
                void 0 !== n
                  ? null === n
                    ? void pe.removeAttr(e, t)
                    : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                    ? i
                    : (e.setAttribute(t, n + ""), n)
                  : o && "get" in o && null !== (i = o.get(e, t))
                  ? i
                  : null == (i = pe.find.attr(e, t))
                  ? void 0
                  : i);
        },
        attrHooks: {
          type: {
            set: function(e, t) {
              if (!le.radioValue && "radio" === t && c(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            }
          }
        },
        removeAttr: function(e, t) {
          var n,
            i = 0,
            o = t && t.match(Te);
          if (o && 1 === e.nodeType)
            for (; (n = o[i++]); ) e.removeAttribute(n);
        }
      }),
      (wt = {
        set: function(e, t, n) {
          return !1 === t ? pe.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
      }),
      pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = xt[t] || pe.find.attr;
        xt[t] = function(e, t, n) {
          var i,
            o,
            r = t.toLowerCase();
          return (
            n ||
              ((o = xt[r]),
              (xt[r] = i),
              (i = null != a(e, t, n) ? r : null),
              (xt[r] = o)),
            i
          );
        };
      });
    var bt = /^(?:input|select|textarea|button)$/i,
      Ct = /^(?:a|area)$/i;
    pe.fn.extend({
      prop: function(e, t) {
        return Ee(this, pe.prop, e, t, 1 < arguments.length);
      },
      removeProp: function(e) {
        return this.each(function() {
          delete this[pe.propFix[e] || e];
        });
      }
    }),
      pe.extend({
        prop: function(e, t, n) {
          var i,
            o,
            r = e.nodeType;
          if (3 !== r && 8 !== r && 2 !== r)
            return (
              (1 === r && pe.isXMLDoc(e)) ||
                ((t = pe.propFix[t] || t), (o = pe.propHooks[t])),
              void 0 !== n
                ? o && "set" in o && void 0 !== (i = o.set(e, n, t))
                  ? i
                  : (e[t] = n)
                : o && "get" in o && null !== (i = o.get(e, t))
                ? i
                : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function(e) {
              var t = pe.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : bt.test(e.nodeName) || (Ct.test(e.nodeName) && e.href)
                ? 0
                : -1;
            }
          }
        },
        propFix: { for: "htmlFor", class: "className" }
      }),
      le.optSelected ||
        (pe.propHooks.selected = {
          get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          }
        }),
      pe.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ],
        function() {
          pe.propFix[this.toLowerCase()] = this;
        }
      ),
      pe.fn.extend({
        addClass: function(t) {
          var e,
            n,
            i,
            o,
            r,
            a,
            s,
            l = 0;
          if (ce(t))
            return this.each(function(e) {
              pe(this).addClass(t.call(this, e, X(this)));
            });
          if ((e = U(t)).length)
            for (; (n = this[l++]); )
              if (((o = X(n)), (i = 1 === n.nodeType && " " + F(o) + " "))) {
                for (a = 0; (r = e[a++]); )
                  i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                o !== (s = F(i)) && n.setAttribute("class", s);
              }
          return this;
        },
        removeClass: function(t) {
          var e,
            n,
            i,
            o,
            r,
            a,
            s,
            l = 0;
          if (ce(t))
            return this.each(function(e) {
              pe(this).removeClass(t.call(this, e, X(this)));
            });
          if (!arguments.length) return this.attr("class", "");
          if ((e = U(t)).length)
            for (; (n = this[l++]); )
              if (((o = X(n)), (i = 1 === n.nodeType && " " + F(o) + " "))) {
                for (a = 0; (r = e[a++]); )
                  for (; -1 < i.indexOf(" " + r + " "); )
                    i = i.replace(" " + r + " ", " ");
                o !== (s = F(i)) && n.setAttribute("class", s);
              }
          return this;
        },
        toggleClass: function(o, t) {
          var r = typeof o,
            a = "string" === r || Array.isArray(o);
          return "boolean" == typeof t && a
            ? t
              ? this.addClass(o)
              : this.removeClass(o)
            : ce(o)
            ? this.each(function(e) {
                pe(this).toggleClass(o.call(this, e, X(this), t), t);
              })
            : this.each(function() {
                var e, t, n, i;
                if (a)
                  for (t = 0, n = pe(this), i = U(o); (e = i[t++]); )
                    n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                  (void 0 !== o && "boolean" !== r) ||
                    ((e = X(this)) && Ae.set(this, "__className__", e),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        e || !1 === o ? "" : Ae.get(this, "__className__") || ""
                      ));
              });
        },
        hasClass: function(e) {
          var t,
            n,
            i = 0;
          for (t = " " + e + " "; (n = this[i++]); )
            if (1 === n.nodeType && -1 < (" " + F(X(n)) + " ").indexOf(t))
              return !0;
          return !1;
        }
      });
    var _t = /\r/g;
    pe.fn.extend({
      val: function(n) {
        var i,
          e,
          o,
          t = this[0];
        return arguments.length
          ? ((o = ce(n)),
            this.each(function(e) {
              var t;
              1 === this.nodeType &&
                (null == (t = o ? n.call(this, e, pe(this).val()) : n)
                  ? (t = "")
                  : "number" == typeof t
                  ? (t += "")
                  : Array.isArray(t) &&
                    (t = pe.map(t, function(e) {
                      return null == e ? "" : e + "";
                    })),
                ((i =
                  pe.valHooks[this.type] ||
                  pe.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in i &&
                  void 0 !== i.set(this, t, "value")) ||
                  (this.value = t));
            }))
          : t
          ? (i =
              pe.valHooks[t.type] || pe.valHooks[t.nodeName.toLowerCase()]) &&
            "get" in i &&
            void 0 !== (e = i.get(t, "value"))
            ? e
            : "string" == typeof (e = t.value)
            ? e.replace(_t, "")
            : null == e
            ? ""
            : e
          : void 0;
      }
    }),
      pe.extend({
        valHooks: {
          option: {
            get: function(e) {
              var t = pe.find.attr(e, "value");
              return null != t ? t : F(pe.text(e));
            }
          },
          select: {
            get: function(e) {
              var t,
                n,
                i,
                o = e.options,
                r = e.selectedIndex,
                a = "select-one" === e.type,
                s = a ? null : [],
                l = a ? r + 1 : o.length;
              for (i = r < 0 ? l : a ? r : 0; i < l; i++)
                if (
                  ((n = o[i]).selected || i === r) &&
                  !n.disabled &&
                  (!n.parentNode.disabled || !c(n.parentNode, "optgroup"))
                ) {
                  if (((t = pe(n).val()), a)) return t;
                  s.push(t);
                }
              return s;
            },
            set: function(e, t) {
              for (
                var n, i, o = e.options, r = pe.makeArray(t), a = o.length;
                a--;

              )
                ((i = o[a]).selected =
                  -1 < pe.inArray(pe.valHooks.option.get(i), r)) && (n = !0);
              return n || (e.selectedIndex = -1), r;
            }
          }
        }
      }),
      pe.each(["radio", "checkbox"], function() {
        (pe.valHooks[this] = {
          set: function(e, t) {
            if (Array.isArray(t))
              return (e.checked = -1 < pe.inArray(pe(e).val(), t));
          }
        }),
          le.checkOn ||
            (pe.valHooks[this].get = function(e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      }),
      (le.focusin = "onfocusin" in _);
    var Tt = /^(?:focusinfocus|focusoutblur)$/,
      St = function(e) {
        e.stopPropagation();
      };
    pe.extend(pe.event, {
      trigger: function(e, t, n, i) {
        var o,
          r,
          a,
          s,
          l,
          c,
          u,
          d,
          f = [n || de],
          h = re.call(e, "type") ? e.type : e,
          p = re.call(e, "namespace") ? e.namespace.split(".") : [];
        if (
          ((r = d = a = n = n || de),
          3 !== n.nodeType &&
            8 !== n.nodeType &&
            !Tt.test(h + pe.event.triggered) &&
            (-1 < h.indexOf(".") &&
              ((h = (p = h.split(".")).shift()), p.sort()),
            (l = h.indexOf(":") < 0 && "on" + h),
            ((e = e[pe.expando]
              ? e
              : new pe.Event(h, "object" == typeof e && e)).isTrigger = i
              ? 2
              : 3),
            (e.namespace = p.join(".")),
            (e.rnamespace = e.namespace
              ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = n),
            (t = null == t ? [e] : pe.makeArray(t, [e])),
            (u = pe.event.special[h] || {}),
            i || !u.trigger || !1 !== u.trigger.apply(n, t)))
        ) {
          if (!i && !u.noBubble && !ue(n)) {
            for (
              s = u.delegateType || h, Tt.test(s + h) || (r = r.parentNode);
              r;
              r = r.parentNode
            )
              f.push(r), (a = r);
            a === (n.ownerDocument || de) &&
              f.push(a.defaultView || a.parentWindow || _);
          }
          for (o = 0; (r = f[o++]) && !e.isPropagationStopped(); )
            (d = r),
              (e.type = 1 < o ? s : u.bindType || h),
              (c =
                (Ae.get(r, "events") || Object.create(null))[e.type] &&
                Ae.get(r, "handle")) && c.apply(r, t),
              (c = l && r[l]) &&
                c.apply &&
                je(r) &&
                ((e.result = c.apply(r, t)),
                !1 === e.result && e.preventDefault());
          return (
            (e.type = h),
            i ||
              e.isDefaultPrevented() ||
              (u._default && !1 !== u._default.apply(f.pop(), t)) ||
              !je(n) ||
              (l &&
                ce(n[h]) &&
                !ue(n) &&
                ((a = n[l]) && (n[l] = null),
                (pe.event.triggered = h),
                e.isPropagationStopped() && d.addEventListener(h, St),
                n[h](),
                e.isPropagationStopped() && d.removeEventListener(h, St),
                (pe.event.triggered = void 0),
                a && (n[l] = a))),
            e.result
          );
        }
      },
      simulate: function(e, t, n) {
        var i = pe.extend(new pe.Event(), n, { type: e, isSimulated: !0 });
        pe.event.trigger(i, null, t);
      }
    }),
      pe.fn.extend({
        trigger: function(e, t) {
          return this.each(function() {
            pe.event.trigger(e, t, this);
          });
        },
        triggerHandler: function(e, t) {
          var n = this[0];
          if (n) return pe.event.trigger(e, t, n, !0);
        }
      }),
      le.focusin ||
        pe.each({ focus: "focusin", blur: "focusout" }, function(n, i) {
          var o = function(e) {
            pe.event.simulate(i, e.target, pe.event.fix(e));
          };
          pe.event.special[i] = {
            setup: function() {
              var e = this.ownerDocument || this.document || this,
                t = Ae.access(e, i);
              t || e.addEventListener(n, o, !0), Ae.access(e, i, (t || 0) + 1);
            },
            teardown: function() {
              var e = this.ownerDocument || this.document || this,
                t = Ae.access(e, i) - 1;
              t
                ? Ae.access(e, i, t)
                : (e.removeEventListener(n, o, !0), Ae.remove(e, i));
            }
          };
        });
    var kt = _.location,
      Et = { guid: Date.now() },
      Dt = /\?/;
    pe.parseXML = function(e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        t = new _.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {
        t = void 0;
      }
      return (
        (t && !t.getElementsByTagName("parsererror").length) ||
          pe.error("Invalid XML: " + e),
        t
      );
    };
    var $t = /\[\]$/,
      jt = /\r?\n/g,
      At = /^(?:submit|button|image|reset|file)$/i,
      Nt = /^(?:input|select|textarea|keygen)/i;
    (pe.param = function(e, t) {
      var n,
        i = [],
        o = function(e, t) {
          var n = ce(t) ? t() : t;
          i[i.length] =
            encodeURIComponent(e) +
            "=" +
            encodeURIComponent(null == n ? "" : n);
        };
      if (null == e) return "";
      if (Array.isArray(e) || (e.jquery && !pe.isPlainObject(e)))
        pe.each(e, function() {
          o(this.name, this.value);
        });
      else for (n in e) V(n, e[n], t, o);
      return i.join("&");
    }),
      pe.fn.extend({
        serialize: function() {
          return pe.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var e = pe.prop(this, "elements");
            return e ? pe.makeArray(e) : this;
          })
            .filter(function() {
              var e = this.type;
              return (
                this.name &&
                !pe(this).is(":disabled") &&
                Nt.test(this.nodeName) &&
                !At.test(e) &&
                (this.checked || !Xe.test(e))
              );
            })
            .map(function(e, t) {
              var n = pe(this).val();
              return null == n
                ? null
                : Array.isArray(n)
                ? pe.map(n, function(e) {
                    return { name: t.name, value: e.replace(jt, "\r\n") };
                  })
                : { name: t.name, value: n.replace(jt, "\r\n") };
            })
            .get();
        }
      });
    var Lt = /%20/g,
      Mt = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Bt = /^(?:GET|HEAD)$/,
      Pt = /^\/\//,
      Rt = {},
      It = {},
      qt = "*/".concat("*"),
      Wt = de.createElement("a");
    (Wt.href = kt.href),
      pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: kt.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            kt.protocol
          ),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": qt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": pe.parseXML
          },
          flatOptions: { url: !0, context: !0 }
        },
        ajaxSetup: function(e, t) {
          return t ? G(G(e, pe.ajaxSettings), t) : G(pe.ajaxSettings, e);
        },
        ajaxPrefilter: Y(Rt),
        ajaxTransport: Y(It),
        ajax: function(e, t) {
          function n(e, t, n, i) {
            var o,
              r,
              a,
              s,
              l,
              c = t;
            p ||
              ((p = !0),
              h && _.clearTimeout(h),
              (u = void 0),
              (f = i || ""),
              (C.readyState = 0 < e ? 4 : 0),
              (o = (200 <= e && e < 300) || 304 === e),
              n &&
                (s = (function(e, t, n) {
                  for (
                    var i, o, r, a, s = e.contents, l = e.dataTypes;
                    "*" === l[0];

                  )
                    l.shift(),
                      void 0 === i &&
                        (i = e.mimeType || t.getResponseHeader("Content-Type"));
                  if (i)
                    for (o in s)
                      if (s[o] && s[o].test(i)) {
                        l.unshift(o);
                        break;
                      }
                  if (l[0] in n) r = l[0];
                  else {
                    for (o in n) {
                      if (!l[0] || e.converters[o + " " + l[0]]) {
                        r = o;
                        break;
                      }
                      a || (a = o);
                    }
                    r = r || a;
                  }
                  if (r) return r !== l[0] && l.unshift(r), n[r];
                })(m, C, n)),
              !o &&
                -1 < pe.inArray("script", m.dataTypes) &&
                (m.converters["text script"] = function() {}),
              (s = (function(e, t, n, i) {
                var o,
                  r,
                  a,
                  s,
                  l,
                  c = {},
                  u = e.dataTypes.slice();
                if (u[1])
                  for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                for (r = u.shift(); r; )
                  if (
                    (e.responseFields[r] && (n[e.responseFields[r]] = t),
                    !l &&
                      i &&
                      e.dataFilter &&
                      (t = e.dataFilter(t, e.dataType)),
                    (l = r),
                    (r = u.shift()))
                  )
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                      if (!(a = c[l + " " + r] || c["* " + r]))
                        for (o in c)
                          if (
                            (s = o.split(" "))[1] === r &&
                            (a = c[l + " " + s[0]] || c["* " + s[0]])
                          ) {
                            !0 === a
                              ? (a = c[o])
                              : !0 !== c[o] && ((r = s[0]), u.unshift(s[1]));
                            break;
                          }
                      if (!0 !== a)
                        if (a && e["throws"]) t = a(t);
                        else
                          try {
                            t = a(t);
                          } catch (e) {
                            return {
                              state: "parsererror",
                              error: a
                                ? e
                                : "No conversion from " + l + " to " + r
                            };
                          }
                    }
                return { state: "success", data: t };
              })(m, s, C, o)),
              o
                ? (m.ifModified &&
                    ((l = C.getResponseHeader("Last-Modified")) &&
                      (pe.lastModified[d] = l),
                    (l = C.getResponseHeader("etag")) && (pe.etag[d] = l)),
                  204 === e || "HEAD" === m.type
                    ? (c = "nocontent")
                    : 304 === e
                    ? (c = "notmodified")
                    : ((c = s.state), (r = s.data), (o = !(a = s.error))))
                : ((a = c), (!e && c) || ((c = "error"), e < 0 && (e = 0))),
              (C.status = e),
              (C.statusText = (t || c) + ""),
              o ? w.resolveWith(v, [r, c, C]) : w.rejectWith(v, [C, c, a]),
              C.statusCode(b),
              (b = void 0),
              g &&
                y.trigger(o ? "ajaxSuccess" : "ajaxError", [C, m, o ? r : a]),
              x.fireWith(v, [C, c]),
              g &&
                (y.trigger("ajaxComplete", [C, m]),
                --pe.active || pe.event.trigger("ajaxStop")));
          }
          "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
          var u,
            d,
            f,
            i,
            h,
            o,
            p,
            g,
            r,
            a,
            m = pe.ajaxSetup({}, t),
            v = m.context || m,
            y = m.context && (v.nodeType || v.jquery) ? pe(v) : pe.event,
            w = pe.Deferred(),
            x = pe.Callbacks("once memory"),
            b = m.statusCode || {},
            s = {},
            l = {},
            c = "canceled",
            C = {
              readyState: 0,
              getResponseHeader: function(e) {
                var t;
                if (p) {
                  if (!i)
                    for (i = {}; (t = Ot.exec(f)); )
                      i[t[1].toLowerCase() + " "] = (
                        i[t[1].toLowerCase() + " "] || []
                      ).concat(t[2]);
                  t = i[e.toLowerCase() + " "];
                }
                return null == t ? null : t.join(", ");
              },
              getAllResponseHeaders: function() {
                return p ? f : null;
              },
              setRequestHeader: function(e, t) {
                return (
                  null == p &&
                    ((e = l[e.toLowerCase()] = l[e.toLowerCase()] || e),
                    (s[e] = t)),
                  this
                );
              },
              overrideMimeType: function(e) {
                return null == p && (m.mimeType = e), this;
              },
              statusCode: function(e) {
                var t;
                if (e)
                  if (p) C.always(e[C.status]);
                  else for (t in e) b[t] = [b[t], e[t]];
                return this;
              },
              abort: function(e) {
                var t = e || c;
                return u && u.abort(t), n(0, t), this;
              }
            };
          if (
            (w.promise(C),
            (m.url = ((e || m.url || kt.href) + "").replace(
              Pt,
              kt.protocol + "//"
            )),
            (m.type = t.method || t.type || m.method || m.type),
            (m.dataTypes = (m.dataType || "*").toLowerCase().match(Te) || [""]),
            null == m.crossDomain)
          ) {
            o = de.createElement("a");
            try {
              (o.href = m.url),
                (o.href = o.href),
                (m.crossDomain =
                  Wt.protocol + "//" + Wt.host != o.protocol + "//" + o.host);
            } catch (e) {
              m.crossDomain = !0;
            }
          }
          if (
            (m.data &&
              m.processData &&
              "string" != typeof m.data &&
              (m.data = pe.param(m.data, m.traditional)),
            Q(Rt, m, t, C),
            p)
          )
            return C;
          for (r in ((g = pe.event && m.global) &&
            0 == pe.active++ &&
            pe.event.trigger("ajaxStart"),
          (m.type = m.type.toUpperCase()),
          (m.hasContent = !Bt.test(m.type)),
          (d = m.url.replace(Mt, "")),
          m.hasContent
            ? m.data &&
              m.processData &&
              0 ===
                (m.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (m.data = m.data.replace(Lt, "+"))
            : ((a = m.url.slice(d.length)),
              m.data &&
                (m.processData || "string" == typeof m.data) &&
                ((d += (Dt.test(d) ? "&" : "?") + m.data), delete m.data),
              !1 === m.cache &&
                ((d = d.replace(Ht, "$1")),
                (a = (Dt.test(d) ? "&" : "?") + "_=" + Et.guid++ + a)),
              (m.url = d + a)),
          m.ifModified &&
            (pe.lastModified[d] &&
              C.setRequestHeader("If-Modified-Since", pe.lastModified[d]),
            pe.etag[d] && C.setRequestHeader("If-None-Match", pe.etag[d])),
          ((m.data && m.hasContent && !1 !== m.contentType) || t.contentType) &&
            C.setRequestHeader("Content-Type", m.contentType),
          C.setRequestHeader(
            "Accept",
            m.dataTypes[0] && m.accepts[m.dataTypes[0]]
              ? m.accepts[m.dataTypes[0]] +
                  ("*" !== m.dataTypes[0] ? ", " + qt + "; q=0.01" : "")
              : m.accepts["*"]
          ),
          m.headers))
            C.setRequestHeader(r, m.headers[r]);
          if (m.beforeSend && (!1 === m.beforeSend.call(v, C, m) || p))
            return C.abort();
          if (
            ((c = "abort"),
            x.add(m.complete),
            C.done(m.success),
            C.fail(m.error),
            (u = Q(It, m, t, C)))
          ) {
            if (((C.readyState = 1), g && y.trigger("ajaxSend", [C, m]), p))
              return C;
            m.async &&
              0 < m.timeout &&
              (h = _.setTimeout(function() {
                C.abort("timeout");
              }, m.timeout));
            try {
              (p = !1), u.send(s, n);
            } catch (e) {
              if (p) throw e;
              n(-1, e);
            }
          } else n(-1, "No Transport");
          return C;
        },
        getJSON: function(e, t, n) {
          return pe.get(e, t, n, "json");
        },
        getScript: function(e, t) {
          return pe.get(e, void 0, t, "script");
        }
      }),
      pe.each(["get", "post"], function(e, o) {
        pe[o] = function(e, t, n, i) {
          return (
            ce(t) && ((i = i || n), (n = t), (t = void 0)),
            pe.ajax(
              pe.extend(
                { url: e, type: o, dataType: i, data: t, success: n },
                pe.isPlainObject(e) && e
              )
            )
          );
        };
      }),
      pe.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
          "content-type" === t.toLowerCase() &&
            (e.contentType = e.headers[t] || "");
      }),
      (pe._evalUrl = function(e, t, n) {
        return pe.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: { "text script": function() {} },
          dataFilter: function(e) {
            pe.globalEval(e, t, n);
          }
        });
      }),
      pe.fn.extend({
        wrapAll: function(e) {
          var t;
          return (
            this[0] &&
              (ce(e) && (e = e.call(this[0])),
              (t = pe(e, this[0].ownerDocument)
                .eq(0)
                .clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function() {
                  for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function(n) {
          return ce(n)
            ? this.each(function(e) {
                pe(this).wrapInner(n.call(this, e));
              })
            : this.each(function() {
                var e = pe(this),
                  t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
              });
        },
        wrap: function(t) {
          var n = ce(t);
          return this.each(function(e) {
            pe(this).wrapAll(n ? t.call(this, e) : t);
          });
        },
        unwrap: function(e) {
          return (
            this.parent(e)
              .not("body")
              .each(function() {
                pe(this).replaceWith(this.childNodes);
              }),
            this
          );
        }
      }),
      (pe.expr.pseudos.hidden = function(e) {
        return !pe.expr.pseudos.visible(e);
      }),
      (pe.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (pe.ajaxSettings.xhr = function() {
        try {
          return new _.XMLHttpRequest();
        } catch (e) {}
      });
    var zt = { 0: 200, 1223: 204 },
      Ft = pe.ajaxSettings.xhr();
    (le.cors = !!Ft && "withCredentials" in Ft),
      (le.ajax = Ft = !!Ft),
      pe.ajaxTransport(function(o) {
        var r, a;
        if (le.cors || (Ft && !o.crossDomain))
          return {
            send: function(e, t) {
              var n,
                i = o.xhr();
              if (
                (i.open(o.type, o.url, o.async, o.username, o.password),
                o.xhrFields)
              )
                for (n in o.xhrFields) i[n] = o.xhrFields[n];
              for (n in (o.mimeType &&
                i.overrideMimeType &&
                i.overrideMimeType(o.mimeType),
              o.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest"),
              e))
                i.setRequestHeader(n, e[n]);
              (r = function(e) {
                return function() {
                  r &&
                    ((r = a = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null),
                    "abort" === e
                      ? i.abort()
                      : "error" === e
                      ? "number" != typeof i.status
                        ? t(0, "error")
                        : t(i.status, i.statusText)
                      : t(
                          zt[i.status] || i.status,
                          i.statusText,
                          "text" !== (i.responseType || "text") ||
                            "string" != typeof i.responseText
                            ? { binary: i.response }
                            : { text: i.responseText },
                          i.getAllResponseHeaders()
                        ));
                };
              }),
                (i.onload = r()),
                (a = i.onerror = i.ontimeout = r("error")),
                void 0 !== i.onabort
                  ? (i.onabort = a)
                  : (i.onreadystatechange = function() {
                      4 === i.readyState &&
                        _.setTimeout(function() {
                          r && a();
                        });
                    }),
                (r = r("abort"));
              try {
                i.send((o.hasContent && o.data) || null);
              } catch (e) {
                if (r) throw e;
              }
            },
            abort: function() {
              r && r();
            }
          };
      }),
      pe.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1);
      }),
      pe.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function(e) {
            return pe.globalEval(e), e;
          }
        }
      }),
      pe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      pe.ajaxTransport("script", function(n) {
        var i, o;
        if (n.crossDomain || n.scriptAttrs)
          return {
            send: function(e, t) {
              (i = pe("<script>")
                .attr(n.scriptAttrs || {})
                .prop({ charset: n.scriptCharset, src: n.url })
                .on(
                  "load error",
                  (o = function(e) {
                    i.remove(),
                      (o = null),
                      e && t("error" === e.type ? 404 : 200, e.type);
                  })
                )),
                de.head.appendChild(i[0]);
            },
            abort: function() {
              o && o();
            }
          };
      });
    var Xt,
      Ut = [],
      Vt = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var e = Ut.pop() || pe.expando + "_" + Et.guid++;
        return (this[e] = !0), e;
      }
    }),
      pe.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i,
          o,
          r,
          a =
            !1 !== e.jsonp &&
            (Vt.test(e.url)
              ? "url"
              : "string" == typeof e.data &&
                0 ===
                  (e.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                Vt.test(e.data) &&
                "data");
        if (a || "jsonp" === e.dataTypes[0])
          return (
            (i = e.jsonpCallback = ce(e.jsonpCallback)
              ? e.jsonpCallback()
              : e.jsonpCallback),
            a
              ? (e[a] = e[a].replace(Vt, "$1" + i))
              : !1 !== e.jsonp &&
                (e.url += (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
            (e.converters["script json"] = function() {
              return r || pe.error(i + " was not called"), r[0];
            }),
            (e.dataTypes[0] = "json"),
            (o = _[i]),
            (_[i] = function() {
              r = arguments;
            }),
            n.always(function() {
              void 0 === o ? pe(_).removeProp(i) : (_[i] = o),
                e[i] && ((e.jsonpCallback = t.jsonpCallback), Ut.push(i)),
                r && ce(o) && o(r[0]),
                (r = o = void 0);
            }),
            "script"
          );
      }),
      (le.createHTMLDocument =
        (((Xt = de.implementation.createHTMLDocument("").body).innerHTML =
          "<form></form><form></form>"),
        2 === Xt.childNodes.length)),
      (pe.parseHTML = function(e, t, n) {
        return "string" != typeof e
          ? []
          : ("boolean" == typeof t && ((n = t), (t = !1)),
            t ||
              (le.createHTMLDocument
                ? (((i = (t = de.implementation.createHTMLDocument(
                    ""
                  )).createElement("base")).href = de.location.href),
                  t.head.appendChild(i))
                : (t = de)),
            (r = !n && []),
            (o = we.exec(e))
              ? [t.createElement(o[1])]
              : ((o = x([e], t, r)),
                r && r.length && pe(r).remove(),
                pe.merge([], o.childNodes)));
        var i, o, r;
      }),
      (pe.fn.load = function(e, t, n) {
        var i,
          o,
          r,
          a = this,
          s = e.indexOf(" ");
        return (
          -1 < s && ((i = F(e.slice(s))), (e = e.slice(0, s))),
          ce(t)
            ? ((n = t), (t = void 0))
            : t && "object" == typeof t && (o = "POST"),
          0 < a.length &&
            pe
              .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
              .done(function(e) {
                (r = arguments),
                  a.html(
                    i
                      ? pe("<div>")
                          .append(pe.parseHTML(e))
                          .find(i)
                      : e
                  );
              })
              .always(
                n &&
                  function(e, t) {
                    a.each(function() {
                      n.apply(this, r || [e.responseText, t, e]);
                    });
                  }
              ),
          this
        );
      }),
      (pe.expr.pseudos.animated = function(t) {
        return pe.grep(pe.timers, function(e) {
          return t === e.elem;
        }).length;
      }),
      (pe.offset = {
        setOffset: function(e, t, n) {
          var i,
            o,
            r,
            a,
            s,
            l,
            c = pe.css(e, "position"),
            u = pe(e),
            d = {};
          "static" === c && (e.style.position = "relative"),
            (s = u.offset()),
            (r = pe.css(e, "top")),
            (l = pe.css(e, "left")),
            ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto")
              ? ((a = (i = u.position()).top), (o = i.left))
              : ((a = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
            ce(t) && (t = t.call(e, n, pe.extend({}, s))),
            null != t.top && (d.top = t.top - s.top + a),
            null != t.left && (d.left = t.left - s.left + o),
            "using" in t
              ? t.using.call(e, d)
              : ("number" == typeof d.top && (d.top += "px"),
                "number" == typeof d.left && (d.left += "px"),
                u.css(d));
        }
      }),
      pe.fn.extend({
        offset: function(t) {
          if (arguments.length)
            return void 0 === t
              ? this
              : this.each(function(e) {
                  pe.offset.setOffset(this, t, e);
                });
          var e,
            n,
            i = this[0];
          return i
            ? i.getClientRects().length
              ? ((e = i.getBoundingClientRect()),
                (n = i.ownerDocument.defaultView),
                { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
              : { top: 0, left: 0 }
            : void 0;
        },
        position: function() {
          if (this[0]) {
            var e,
              t,
              n,
              i = this[0],
              o = { top: 0, left: 0 };
            if ("fixed" === pe.css(i, "position"))
              t = i.getBoundingClientRect();
            else {
              for (
                t = this.offset(),
                  n = i.ownerDocument,
                  e = i.offsetParent || n.documentElement;
                e &&
                (e === n.body || e === n.documentElement) &&
                "static" === pe.css(e, "position");

              )
                e = e.parentNode;
              e &&
                e !== i &&
                1 === e.nodeType &&
                (((o = pe(e).offset()).top += pe.css(e, "borderTopWidth", !0)),
                (o.left += pe.css(e, "borderLeftWidth", !0)));
            }
            return {
              top: t.top - o.top - pe.css(i, "marginTop", !0),
              left: t.left - o.left - pe.css(i, "marginLeft", !0)
            };
          }
        },
        offsetParent: function() {
          return this.map(function() {
            for (
              var e = this.offsetParent;
              e && "static" === pe.css(e, "position");

            )
              e = e.offsetParent;
            return e || Pe;
          });
        }
      }),
      pe.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(
        t,
        o
      ) {
        var r = "pageYOffset" === o;
        pe.fn[t] = function(e) {
          return Ee(
            this,
            function(e, t, n) {
              var i;
              if (
                (ue(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView),
                void 0 === n)
              )
                return i ? i[o] : e[t];
              i
                ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }),
      pe.each(["top", "left"], function(e, n) {
        pe.cssHooks[n] = L(le.pixelPosition, function(e, t) {
          if (t)
            return (t = N(e, n)), nt.test(t) ? pe(e).position()[n] + "px" : t;
        });
      }),
      pe.each({ Height: "height", Width: "width" }, function(a, s) {
        pe.each({ padding: "inner" + a, content: s, "": "outer" + a }, function(
          i,
          r
        ) {
          pe.fn[r] = function(e, t) {
            var n = arguments.length && (i || "boolean" != typeof e),
              o = i || (!0 === e || !0 === t ? "margin" : "border");
            return Ee(
              this,
              function(e, t, n) {
                var i;
                return ue(e)
                  ? 0 === r.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((i = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      i["scroll" + a],
                      e.body["offset" + a],
                      i["offset" + a],
                      i["client" + a]
                    ))
                  : void 0 === n
                  ? pe.css(e, t, o)
                  : pe.style(e, t, n, o);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        });
      }),
      pe.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ],
        function(e, t) {
          pe.fn[t] = function(e) {
            return this.on(t, e);
          };
        }
      ),
      pe.fn.extend({
        bind: function(e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
          return this.off(e, null, t);
        },
        delegate: function(e, t, n, i) {
          return this.on(t, e, n, i);
        },
        undelegate: function(e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
        hover: function(e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        }
      }),
      pe.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function(e, n) {
          pe.fn[n] = function(e, t) {
            return 0 < arguments.length
              ? this.on(n, null, e, t)
              : this.trigger(n);
          };
        }
      );
    var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (pe.proxy = function(e, t) {
      var n, i, o;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), ce(e)))
        return (
          (i = K.call(arguments, 2)),
          ((o = function() {
            return e.apply(t || this, i.concat(K.call(arguments)));
          }).guid = e.guid = e.guid || pe.guid++),
          o
        );
    }),
      (pe.holdReady = function(e) {
        e ? pe.readyWait++ : pe.ready(!0);
      }),
      (pe.isArray = Array.isArray),
      (pe.parseJSON = JSON.parse),
      (pe.nodeName = c),
      (pe.isFunction = ce),
      (pe.isWindow = ue),
      (pe.camelCase = f),
      (pe.type = m),
      (pe.now = Date.now),
      (pe.isNumeric = function(e) {
        var t = pe.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      }),
      (pe.trim = function(e) {
        return null == e ? "" : (e + "").replace(Yt, "");
      }),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function() {
          return pe;
        });
    var Qt = _.jQuery,
      Gt = _.$;
    return (
      (pe.noConflict = function(e) {
        return (
          _.$ === pe && (_.$ = Gt), e && _.jQuery === pe && (_.jQuery = Qt), pe
        );
      }),
      void 0 === e && (_.jQuery = _.$ = pe),
      pe
    );
  }),
  "undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  (function(c, n, a) {
    function u(e) {
      var t = n.console;
      o[e] ||
        ((o[e] = !0),
        c.migrateWarnings.push(e),
        t &&
          t.warn &&
          !c.migrateMute &&
          (t.warn("JQMIGRATE: " + e), c.migrateTrace && t.trace && t.trace()));
    }
    function i(e, t, n, i) {
      if (Object.defineProperty)
        try {
          return void Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get: function() {
              return u(i), n;
            },
            set: function(e) {
              u(i), (n = e);
            }
          });
        } catch (s) {}
      (c._definePropertyBroken = !0), (e[t] = n);
    }
    c.migrateVersion = "1.4.1";
    var o = {};
    (c.migrateWarnings = []),
      n.console &&
        n.console.log &&
        n.console.log(
          "JQMIGRATE: Migrate is installed" +
            (c.migrateMute ? "" : " with logging active") +
            ", version " +
            c.migrateVersion
        ),
      c.migrateTrace === a && (c.migrateTrace = !0),
      (c.migrateReset = function() {
        (o = {}), (c.migrateWarnings.length = 0);
      }),
      "BackCompat" === document.compatMode &&
        u("jQuery is not compatible with Quirks Mode");
    var s = c("<input/>", { size: 1 }).attr("size") && c.attrFn,
      l = c.attr,
      r =
        (c.attrHooks.value && c.attrHooks.value.get) ||
        function() {
          return null;
        },
      d =
        (c.attrHooks.value && c.attrHooks.value.set) ||
        function() {
          return a;
        },
      f = /^(?:input|button)$/i,
      h = /^[238]$/,
      p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      g = /^(?:checked|selected)$/i;
    i(c, "attrFn", s || {}, "jQuery.attrFn is deprecated"),
      (c.attr = function(e, t, n, i) {
        var o = t.toLowerCase(),
          r = e && e.nodeType;
        return i &&
          (l.length < 4 && u("jQuery.fn.attr( props, pass ) is deprecated"),
          e && !h.test(r) && (s ? t in s : c.isFunction(c.fn[t])))
          ? c(e)[t](n)
          : ("type" === t &&
              n !== a &&
              f.test(e.nodeName) &&
              e.parentNode &&
              u("Can't change the 'type' of an input or button in IE 6/7/8"),
            !c.attrHooks[o] &&
              p.test(o) &&
              ((c.attrHooks[o] = {
                get: function(e, t) {
                  var n,
                    i = c.prop(e, t);
                  return !0 === i ||
                    ("boolean" != typeof i &&
                      (n = e.getAttributeNode(t)) &&
                      !1 !== n.nodeValue)
                    ? t.toLowerCase()
                    : a;
                },
                set: function(e, t, n) {
                  var i;
                  return (
                    !1 === t
                      ? c.removeAttr(e, n)
                      : ((i = c.propFix[n] || n) in e && (e[i] = !0),
                        e.setAttribute(n, n.toLowerCase())),
                    n
                  );
                }
              }),
              g.test(o) &&
                u(
                  "jQuery.fn.attr('" +
                    o +
                    "') might use property instead of attribute"
                )),
            l.call(c, e, t, n));
      }),
      (c.attrHooks.value = {
        get: function(e, t) {
          var n = (e.nodeName || "").toLowerCase();
          return "button" === n
            ? r.apply(this, arguments)
            : ("input" !== n &&
                "option" !== n &&
                u("jQuery.fn.attr('value') no longer gets properties"),
              t in e ? e.value : null);
        },
        set: function(e, t) {
          var n = (e.nodeName || "").toLowerCase();
          return "button" === n
            ? d.apply(this, arguments)
            : ("input" !== n &&
                "option" !== n &&
                u("jQuery.fn.attr('value', val) no longer sets properties"),
              void (e.value = t));
        }
      });
    var e,
      t,
      m,
      v = c.fn.init,
      y = c.find,
      w = c.parseJSON,
      x = /^\s*</,
      b = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      C = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      _ = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    for (m in ((c.fn.init = function(e, t, n) {
      var i, o;
      return e &&
        "string" == typeof e &&
        !c.isPlainObject(t) &&
        (i = _.exec(c.trim(e))) &&
        i[0] &&
        (x.test(e) || u("$(html) HTML strings must start with '<' character"),
        i[3] && u("$(html) HTML text after last tag is ignored"),
        "#" === i[0].charAt(0) &&
          (u("HTML string cannot start with a '#' character"),
          c.error("JQMIGRATE: Invalid selector string (XSS)")),
        t && t.context && t.context.nodeType && (t = t.context),
        c.parseHTML)
        ? v.call(
            this,
            c.parseHTML(i[2], (t && t.ownerDocument) || t || document, !0),
            t,
            n
          )
        : ((o = v.apply(this, arguments)),
          e && e.selector !== a
            ? ((o.selector = e.selector), (o.context = e.context))
            : ((o.selector = "string" == typeof e ? e : ""),
              e && (o.context = e.nodeType ? e : t || document)),
          o);
    }),
    (c.fn.init.prototype = c.fn),
    (c.find = function(e) {
      var t = Array.prototype.slice.call(arguments);
      if ("string" == typeof e && b.test(e))
        try {
          document.querySelector(e);
        } catch (a) {
          e = e.replace(C, function(e, t, n, i) {
            return "[" + t + n + '"' + i + '"]';
          });
          try {
            document.querySelector(e),
              u("Attribute selector with '#' must be quoted: " + t[0]),
              (t[0] = e);
          } catch (i) {
            u("Attribute selector with '#' was not fixed: " + t[0]);
          }
        }
      return y.apply(this, t);
    }),
    y))
      Object.prototype.hasOwnProperty.call(y, m) && (c.find[m] = y[m]);
    (c.parseJSON = function(e) {
      return e
        ? w.apply(this, arguments)
        : (u("jQuery.parseJSON requires a valid JSON string"), null);
    }),
      (c.uaMatch = function(e) {
        e = e.toLowerCase();
        var t =
          /(chrome)[ \/]([\w.]+)/.exec(e) ||
          /(webkit)[ \/]([\w.]+)/.exec(e) ||
          /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) ||
          /(msie) ([\w.]+)/.exec(e) ||
          (e.indexOf("compatible") < 0 &&
            /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)) ||
          [];
        return { browser: t[1] || "", version: t[2] || "0" };
      }),
      c.browser ||
        ((t = {}),
        (e = c.uaMatch(navigator.userAgent)).browser &&
          ((t[e.browser] = !0), (t.version = e.version)),
        t.chrome ? (t.webkit = !0) : t.webkit && (t.safari = !0),
        (c.browser = t)),
      i(c, "browser", c.browser, "jQuery.browser is deprecated"),
      (c.boxModel = c.support.boxModel = "CSS1Compat" === document.compatMode),
      i(c, "boxModel", c.boxModel, "jQuery.boxModel is deprecated"),
      i(
        c.support,
        "boxModel",
        c.support.boxModel,
        "jQuery.support.boxModel is deprecated"
      ),
      (c.sub = function() {
        function i(e, t) {
          return new i.fn.init(e, t);
        }
        c.extend(!0, i, this),
          (i.superclass = this),
          (i.fn = i.prototype = this()),
          ((i.fn.constructor = i).sub = this.sub),
          (i.fn.init = function(e, t) {
            var n = c.fn.init.call(this, e, t, o);
            return n instanceof i ? n : i(n);
          }),
          (i.fn.init.prototype = i.fn);
        var o = i(document);
        return u("jQuery.sub() is deprecated"), i;
      });
    var T = !(c.fn.size = function() {
      return (
        u("jQuery.fn.size() is deprecated; use the .length property"),
        this.length
      );
    });
    c.swap &&
      c.each(["height", "width", "reliableMarginRight"], function(e, t) {
        var n = c.cssHooks[t] && c.cssHooks[t].get;
        n &&
          (c.cssHooks[t].get = function() {
            var e;
            return (T = !0), (e = n.apply(this, arguments)), (T = !1), e;
          });
      }),
      (c.swap = function(e, t, n, i) {
        var o,
          r,
          a = {};
        for (r in (T || u("jQuery.swap() is undocumented and deprecated"), t))
          (a[r] = e.style[r]), (e.style[r] = t[r]);
        for (r in ((o = n.apply(e, i || [])), t)) e.style[r] = a[r];
        return o;
      }),
      c.ajaxSetup({ converters: { "text json": c.parseJSON } });
    var S = c.fn.data;
    c.fn.data = function(e) {
      var t,
        n,
        i = this[0];
      return !i ||
        "events" !== e ||
        1 !== arguments.length ||
        ((t = c.data(i, e)),
        (n = c._data(i, e)),
        (t !== a && t !== n) || n === a)
        ? S.apply(this, arguments)
        : (u("Use of jQuery.fn.data('events') is deprecated"), n);
    };
    var k = /\/(java|ecma)script/i;
    c.clean ||
      (c.clean = function(e, t, n, i) {
        (t =
          (t = (!(t = t || document).nodeType && t[0]) || t).ownerDocument ||
          t),
          u("jQuery.clean() is deprecated");
        var o,
          r,
          a,
          s,
          l = [];
        if ((c.merge(l, c.buildFragment(e, t).childNodes), n))
          for (
            a = function(e) {
              return !e.type || k.test(e.type)
                ? i
                  ? i.push(e.parentNode ? e.parentNode.removeChild(e) : e)
                  : n.appendChild(e)
                : void 0;
            },
              o = 0;
            null != (r = l[o]);
            o++
          )
            (c.nodeName(r, "script") && a(r)) ||
              (n.appendChild(r),
              "undefined" != typeof r.getElementsByTagName &&
                ((s = c.grep(c.merge([], r.getElementsByTagName("script")), a)),
                l.splice.apply(l, [o + 1, 0].concat(s)),
                (o += s.length)));
        return l;
      });
    var E = c.event.add,
      D = c.event.remove,
      $ = c.event.trigger,
      j = c.fn.toggle,
      A = c.fn.live,
      N = c.fn.die,
      L = c.fn.load,
      M = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
      H = new RegExp("\\b(?:" + M + ")\\b"),
      O = /(?:^|\s)hover(\.\S+|)\b/,
      B = function(e) {
        return "string" != typeof e || c.event.special.hover
          ? e
          : (O.test(e) &&
              u(
                "'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"
              ),
            e && e.replace(O, "mouseenter$1 mouseleave$1"));
      };
    c.event.props &&
      "attrChange" !== c.event.props[0] &&
      c.event.props.unshift(
        "attrChange",
        "attrName",
        "relatedNode",
        "srcElement"
      ),
      c.event.dispatch &&
        i(
          c.event,
          "handle",
          c.event.dispatch,
          "jQuery.event.handle is undocumented and deprecated"
        ),
      (c.event.add = function(e, t, n, i, o) {
        e !== document &&
          H.test(t) &&
          u("AJAX events should be attached to document: " + t),
          E.call(this, e, B(t || ""), n, i, o);
      }),
      (c.event.remove = function(e, t, n, i, o) {
        D.call(this, e, B(t) || "", n, i, o);
      }),
      c.each(["load", "unload", "error"], function(e, t) {
        c.fn[t] = function() {
          var e = Array.prototype.slice.call(arguments, 0);
          return "load" === t && "string" == typeof e[0]
            ? L.apply(this, e)
            : (u("jQuery.fn." + t + "() is deprecated"),
              e.splice(0, 0, t),
              arguments.length
                ? this.bind.apply(this, e)
                : (this.triggerHandler.apply(this, e), this));
        };
      }),
      (c.fn.toggle = function(n, e) {
        if (!c.isFunction(n) || !c.isFunction(e))
          return j.apply(this, arguments);
        u("jQuery.fn.toggle(handler, handler...) is deprecated");
        var i = arguments,
          t = n.guid || c.guid++,
          o = 0,
          r = function(e) {
            var t = (c._data(this, "lastToggle" + n.guid) || 0) % o;
            return (
              c._data(this, "lastToggle" + n.guid, t + 1),
              e.preventDefault(),
              i[t].apply(this, arguments) || !1
            );
          };
        for (r.guid = t; o < i.length; ) i[o++].guid = t;
        return this.click(r);
      }),
      (c.fn.live = function(e, t, n) {
        return (
          u("jQuery.fn.live() is deprecated"),
          A
            ? A.apply(this, arguments)
            : (c(this.context).on(e, this.selector, t, n), this)
        );
      }),
      (c.fn.die = function(e, t) {
        return (
          u("jQuery.fn.die() is deprecated"),
          N
            ? N.apply(this, arguments)
            : (c(this.context).off(e, this.selector || "**", t), this)
        );
      }),
      (c.event.trigger = function(e, t, n, i) {
        return (
          n || H.test(e) || u("Global events are undocumented and deprecated"),
          $.call(this, e, t, n || document, i)
        );
      }),
      c.each(M.split("|"), function(e, t) {
        c.event.special[t] = {
          setup: function() {
            var e = this;
            return (
              e !== document &&
                (c.event.add(document, t + "." + c.guid, function() {
                  c.event.trigger(
                    t,
                    Array.prototype.slice.call(arguments, 1),
                    e,
                    !0
                  );
                }),
                c._data(this, t, c.guid++)),
              !1
            );
          },
          teardown: function() {
            return (
              this !== document &&
                c.event.remove(document, t + "." + c._data(this, t)),
              !1
            );
          }
        };
      }),
      (c.event.special.ready = {
        setup: function() {
          this === document && u("'ready' event is deprecated");
        }
      });
    var P = c.fn.andSelf || c.fn.addBack,
      R = c.fn.find;
    if (
      ((c.fn.andSelf = function() {
        return (
          u("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
          P.apply(this, arguments)
        );
      }),
      (c.fn.find = function(e) {
        var t = R.apply(this, arguments);
        return (
          (t.context = this.context),
          (t.selector = this.selector ? this.selector + " " + e : e),
          t
        );
      }),
      c.Callbacks)
    ) {
      var I = c.Deferred,
        q = [
          [
            "resolve",
            "done",
            c.Callbacks("once memory"),
            c.Callbacks("once memory"),
            "resolved"
          ],
          [
            "reject",
            "fail",
            c.Callbacks("once memory"),
            c.Callbacks("once memory"),
            "rejected"
          ],
          ["notify", "progress", c.Callbacks("memory"), c.Callbacks("memory")]
        ];
      c.Deferred = function(e) {
        var r = I(),
          a = r.promise();
        return (
          (r.pipe = a.pipe = function() {
            var o = arguments;
            return (
              u("deferred.pipe() is deprecated"),
              c
                .Deferred(function(i) {
                  c.each(q, function(e, t) {
                    var n = c.isFunction(o[e]) && o[e];
                    r[t[1]](function() {
                      var e = n && n.apply(this, arguments);
                      e && c.isFunction(e.promise)
                        ? e
                            .promise()
                            .done(i.resolve)
                            .fail(i.reject)
                            .progress(i.notify)
                        : i[t[0] + "With"](
                            this === a ? i.promise() : this,
                            n ? [e] : arguments
                          );
                    });
                  }),
                    (o = null);
                })
                .promise()
            );
          }),
          (r.isResolved = function() {
            return (
              u("deferred.isResolved is deprecated"), "resolved" === r.state()
            );
          }),
          (r.isRejected = function() {
            return (
              u("deferred.isRejected is deprecated"), "rejected" === r.state()
            );
          }),
          e && e.call(r, r),
          r
        );
      };
    }
  })(jQuery, window),
  (function(l, c) {
    var u;
    (l.rails = u = {
      linkClickSelector:
        "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
      inputChangeSelector:
        "select[data-remote], input[data-remote], textarea[data-remote]",
      formSubmitSelector: "form",
      formInputClickSelector:
        "form input[type=submit], form input[type=image], form button[type=submit], form button:not(button[type])",
      disableSelector:
        "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
      enableSelector:
        "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
      requiredInputSelector:
        "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
      fileInputSelector: "input:file",
      linkDisableSelector: "a[data-disable-with]",
      CSRFProtection: function(e) {
        var t = l('meta[name="csrf-token"]').attr("content");
        t && e.setRequestHeader("X-CSRF-Token", t);
      },
      fire: function(e, t, n) {
        var i = l.Event(t);
        return e.trigger(i, n), !1 !== i.result;
      },
      confirm: function(e) {
        return confirm(e);
      },
      ajax: function(e) {
        return l.ajax(e);
      },
      handleRemote: function(i) {
        var e,
          t,
          n,
          o,
          r = i.data("cross-domain") || null,
          a = i.data("type") || (l.ajaxSettings && l.ajaxSettings.dataType);
        if (u.fire(i, "ajax:before")) {
          if (i.is("form")) {
            (e = i.attr("method")),
              (t = i.attr("action")),
              (n = i.serializeArray());
            var s = i.data("ujs:submit-button");
            s && (n.push(s), i.data("ujs:submit-button", null));
          } else
            i.is(u.inputChangeSelector)
              ? ((e = i.data("method")),
                (t = i.data("url")),
                (n = i.serialize()),
                i.data("params") && (n = n + "&" + i.data("params")))
              : ((e = i.data("method")),
                (t = i.attr("href")),
                (n = i.data("params") || null));
          return (
            (o = {
              type: e || "GET",
              data: n,
              dataType: a,
              crossDomain: r,
              beforeSend: function(e, t) {
                return (
                  t.dataType === c &&
                    e.setRequestHeader(
                      "accept",
                      "*/*;q=0.5, " + t.accepts.script
                    ),
                  u.fire(i, "ajax:beforeSend", [e, t])
                );
              },
              success: function(e, t, n) {
                i.trigger("ajax:success", [e, t, n]);
              },
              complete: function(e, t) {
                i.trigger("ajax:complete", [e, t]);
              },
              error: function(e, t, n) {
                i.trigger("ajax:error", [e, t, n]);
              }
            }),
            t && (o.url = t),
            u.ajax(o)
          );
        }
        return !1;
      },
      handleMethod: function(e) {
        var t = e.attr("href"),
          n = e.data("method"),
          i = e.attr("target"),
          o = l("meta[name=csrf-token]").attr("content"),
          r = l("meta[name=csrf-param]").attr("content"),
          a = l('<form method="post" action="' + t + '"></form>'),
          s = '<input name="_method" value="' + n + '" type="hidden" />';
        r !== c &&
          o !== c &&
          (s += '<input name="' + r + '" value="' + o + '" type="hidden" />'),
          i && a.attr("target", i),
          a
            .hide()
            .append(s)
            .appendTo("body"),
          a.submit();
      },
      disableFormElements: function(e) {
        e.find(u.disableSelector).each(function() {
          var e = l(this),
            t = e.is("button") ? "html" : "val";
          e.data("ujs:enable-with", e[t]()),
            e[t](e.data("disable-with")),
            e.prop("disabled", !0);
        });
      },
      enableFormElements: function(e) {
        e.find(u.enableSelector).each(function() {
          var e = l(this),
            t = e.is("button") ? "html" : "val";
          e.data("ujs:enable-with") && e[t](e.data("ujs:enable-with")),
            e.prop("disabled", !1);
        });
      },
      allowAction: function(e) {
        var t,
          n = e.data("confirm"),
          i = !1;
        return (
          !n ||
          (u.fire(e, "confirm") &&
            ((i = u.confirm(n)), (t = u.fire(e, "confirm:complete", [i]))),
          i && t)
        );
      },
      blankInputs: function(e, t, n) {
        var i,
          o = l(),
          r = t || "input,textarea";
        return (
          e.find(r).each(function() {
            (i = l(this)), (n ? i.val() : !i.val()) && (o = o.add(i));
          }),
          !!o.length && o
        );
      },
      nonBlankInputs: function(e, t) {
        return u.blankInputs(e, t, !0);
      },
      stopEverything: function(e) {
        return (
          l(e.target).trigger("ujs:everythingStopped"),
          e.stopImmediatePropagation(),
          !1
        );
      },
      callFormSubmitBindings: function(e, n) {
        var t = e.data("events"),
          i = !0;
        return (
          t !== c &&
            t.submit !== c &&
            l.each(t.submit, function(e, t) {
              if ("function" == typeof t.handler) return (i = t.handler(n));
            }),
          i
        );
      },
      disableElement: function(e) {
        e.data("ujs:enable-with", e.html()),
          e.html(e.data("disable-with")),
          e.bind("click.railsDisable", function(e) {
            return u.stopEverything(e);
          });
      },
      enableElement: function(e) {
        e.data("ujs:enable-with") !== c &&
          (e.html(e.data("ujs:enable-with")), e.data("ujs:enable-with", !1)),
          e.unbind("click.railsDisable");
      }
    }),
      l.ajaxPrefilter(function(e, t, n) {
        e.crossDomain || u.CSRFProtection(n);
      }),
      l(document).delegate(u.linkDisableSelector, "ajax:complete", function() {
        u.enableElement(l(this));
      }),
      l(document).delegate(u.linkClickSelector, "click.rails", function(e) {
        var t = l(this),
          n = t.data("method"),
          i = t.data("params");
        return u.allowAction(t)
          ? (t.is(u.linkDisableSelector) && u.disableElement(t),
            t.data("remote") !== c
              ? !((!e.metaKey && !e.ctrlKey) || (n && "GET" !== n) || i) ||
                (!1 === u.handleRemote(t) && u.enableElement(t), !1)
              : t.data("method")
              ? (u.handleMethod(t), !1)
              : void 0)
          : u.stopEverything(e);
      }),
      l(document).delegate(u.inputChangeSelector, "change.rails", function(e) {
        var t = l(this);
        return u.allowAction(t) ? (u.handleRemote(t), !1) : u.stopEverything(e);
      }),
      l(document).delegate(u.formSubmitSelector, "submit.rails", function(e) {
        var t = l(this),
          n = t.data("remote") !== c,
          i = u.blankInputs(t, u.requiredInputSelector),
          o = u.nonBlankInputs(t, u.fileInputSelector);
        return u.allowAction(t)
          ? i &&
            t.attr("novalidate") == c &&
            u.fire(t, "ajax:aborted:required", [i])
            ? u.stopEverything(e)
            : n
            ? o
              ? u.fire(t, "ajax:aborted:file", [o])
              : !l.support.submitBubbles &&
                l().jquery < "1.7" &&
                !1 === u.callFormSubmitBindings(t, e)
              ? u.stopEverything(e)
              : (u.handleRemote(t), !1)
            : void setTimeout(function() {
                u.disableFormElements(t);
              }, 13)
          : u.stopEverything(e);
      }),
      l(document).delegate(u.formInputClickSelector, "click.rails", function(
        e
      ) {
        var t = l(this);
        if (!u.allowAction(t)) return u.stopEverything(e);
        var n = t.attr("name"),
          i = n ? { name: n, value: t.val() } : null;
        t.closest("form").data("ujs:submit-button", i);
      }),
      l(document).delegate(
        u.formSubmitSelector,
        "ajax:beforeSend.rails",
        function(e) {
          this == e.target && u.disableFormElements(l(this));
        }
      ),
      l(document).delegate(
        u.formSubmitSelector,
        "ajax:complete.rails",
        function(e) {
          this == e.target && u.enableFormElements(l(this));
        }
      );
  })(jQuery),
  (function(l, c, r, s) {
    function n(e, t) {
      (this.settings = null),
        (this.options = l.extend({}, n.Defaults, t)),
        (this.$element = l(e)),
        (this.drag = l.extend({}, f)),
        (this.state = l.extend({}, h)),
        (this.e = l.extend({}, p)),
        (this._plugins = {}),
        (this._supress = {}),
        (this._current = null),
        (this._speed = null),
        (this._coordinates = []),
        (this._breakpoint = null),
        (this._width = null),
        (this._items = []),
        (this._clones = []),
        (this._mergers = []),
        (this._invalidated = {}),
        (this._pipe = []),
        l.each(
          n.Plugins,
          l.proxy(function(e, t) {
            this._plugins[e[0].toLowerCase() + e.slice(1)] = new t(this);
          }, this)
        ),
        l.each(
          n.Pipe,
          l.proxy(function(e, t) {
            this._pipe.push({ filter: t.filter, run: l.proxy(t.run, this) });
          }, this)
        ),
        this.setup(),
        this.initialize();
    }
    function u(e) {
      if (e.touches !== s)
        return { x: e.touches[0].pageX, y: e.touches[0].pageY };
      if (e.touches === s) {
        if (e.pageX !== s) return { x: e.pageX, y: e.pageY };
        if (e.pageX === s) return { x: e.clientX, y: e.clientY };
      }
    }
    function e(e) {
      var t,
        n,
        i = r.createElement("div"),
        o = e;
      for (t in o)
        if (((n = o[t]), "undefined" != typeof i.style[n]))
          return (i = null), [n, t];
      return [!1];
    }
    function t() {
      return e([
        "transition",
        "WebkitTransition",
        "MozTransition",
        "OTransition"
      ])[1];
    }
    function i() {
      return e([
        "transform",
        "WebkitTransform",
        "MozTransform",
        "OTransform",
        "msTransform"
      ])[0];
    }
    function o() {
      return e([
        "perspective",
        "webkitPerspective",
        "MozPerspective",
        "OPerspective",
        "MsPerspective"
      ])[0];
    }
    function a() {
      return "ontouchstart" in c || !!navigator.msMaxTouchPoints;
    }
    function d() {
      return c.navigator.msPointerEnabled;
    }
    var f, h, p;
    (h = {
      isTouch: !(f = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
      }),
      isScrolling: !1,
      isSwiping: !1,
      direction: !1,
      inMotion: !1
    }),
      (p = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
      }),
      (n.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: c,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
      }),
      (n.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
      (n.Plugins = {}),
      (n.Pipe = [
        {
          filter: ["width", "items", "settings"],
          run: function(e) {
            e.current =
              this._items && this._items[this.relative(this._current)];
          }
        },
        {
          filter: ["items", "settings"],
          run: function() {
            var e = this._clones;
            (this.$stage.children(".cloned").length !== e.length ||
              (!this.settings.loop && 0 < e.length)) &&
              (this.$stage.children(".cloned").remove(), (this._clones = []));
          }
        },
        {
          filter: ["items", "settings"],
          run: function() {
            var e,
              t,
              n = this._clones,
              i = this._items,
              o = this.settings.loop
                ? n.length - Math.max(2 * this.settings.items, 4)
                : 0;
            for (e = 0, t = Math.abs(o / 2); e < t; e++)
              0 < o
                ? (this.$stage
                    .children()
                    .eq(i.length + n.length - 1)
                    .remove(),
                  n.pop(),
                  this.$stage
                    .children()
                    .eq(0)
                    .remove(),
                  n.pop())
                : (n.push(n.length / 2),
                  this.$stage.append(
                    i[n[n.length - 1]].clone().addClass("cloned")
                  ),
                  n.push(i.length - 1 - (n.length - 1) / 2),
                  this.$stage.prepend(
                    i[n[n.length - 1]].clone().addClass("cloned")
                  ));
          }
        },
        {
          filter: ["width", "items", "settings"],
          run: function() {
            var e,
              t,
              n,
              i = this.settings.rtl ? 1 : -1,
              o = (this.width() / this.settings.items).toFixed(3),
              r = 0;
            for (
              this._coordinates = [],
                t = 0,
                n = this._clones.length + this._items.length;
              t < n;
              t++
            )
              (e = this._mergers[this.relative(t)]),
                (e =
                  (this.settings.mergeFit &&
                    Math.min(e, this.settings.items)) ||
                  e),
                (r +=
                  (this.settings.autoWidth
                    ? this._items[this.relative(t)].width() +
                      this.settings.margin
                    : o * e) * i),
                this._coordinates.push(r);
          }
        },
        {
          filter: ["width", "items", "settings"],
          run: function() {
            var e,
              t,
              n = (this.width() / this.settings.items).toFixed(3),
              i = {
                width:
                  Math.abs(this._coordinates[this._coordinates.length - 1]) +
                  2 * this.settings.stagePadding,
                "padding-left": this.settings.stagePadding || "",
                "padding-right": this.settings.stagePadding || ""
              };
            if (
              (this.$stage.css(i),
              ((i = {
                width: this.settings.autoWidth
                  ? "auto"
                  : n - this.settings.margin
              })[
                this.settings.rtl ? "margin-left" : "margin-right"
              ] = this.settings.margin),
              !this.settings.autoWidth &&
                0 <
                  l.grep(this._mergers, function(e) {
                    return 1 < e;
                  }).length)
            )
              for (e = 0, t = this._coordinates.length; e < t; e++)
                (i.width =
                  Math.abs(this._coordinates[e]) -
                  Math.abs(this._coordinates[e - 1] || 0) -
                  this.settings.margin),
                  this.$stage
                    .children()
                    .eq(e)
                    .css(i);
            else this.$stage.children().css(i);
          }
        },
        {
          filter: ["width", "items", "settings"],
          run: function(e) {
            e.current && this.reset(this.$stage.children().index(e.current));
          }
        },
        {
          filter: ["position"],
          run: function() {
            this.animate(this.coordinates(this._current));
          }
        },
        {
          filter: ["width", "position", "items", "settings"],
          run: function() {
            var e,
              t,
              n,
              i,
              o = this.settings.rtl ? 1 : -1,
              r = 2 * this.settings.stagePadding,
              a = this.coordinates(this.current()) + r,
              s = a + this.width() * o,
              l = [];
            for (n = 0, i = this._coordinates.length; n < i; n++)
              (e = this._coordinates[n - 1] || 0),
                (t = Math.abs(this._coordinates[n]) + r * o),
                ((this.op(e, "<=", a) && this.op(e, ">", s)) ||
                  (this.op(t, "<", a) && this.op(t, ">", s))) &&
                  l.push(n);
            this.$stage
              .children("." + this.settings.activeClass)
              .removeClass(this.settings.activeClass),
              this.$stage
                .children(":eq(" + l.join("), :eq(") + ")")
                .addClass(this.settings.activeClass),
              this.settings.center &&
                (this.$stage
                  .children("." + this.settings.centerClass)
                  .removeClass(this.settings.centerClass),
                this.$stage
                  .children()
                  .eq(this.current())
                  .addClass(this.settings.centerClass));
          }
        }
      ]),
      (n.prototype.initialize = function() {
        var e, t, n;
        if (
          (this.trigger("initialize"),
          this.$element
            .addClass(this.settings.baseClass)
            .addClass(this.settings.themeClass)
            .toggleClass("owl-rtl", this.settings.rtl),
          this.browserSupport(),
          this.settings.autoWidth && !0 !== this.state.imagesLoaded) &&
          ((e = this.$element.find("img")),
          (t = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : s),
          (n = this.$element.children(t).width()),
          e.length && n <= 0)
        )
          return this.preloadAutoWidthImages(e), !1;
        this.$element.addClass("owl-loading"),
          (this.$stage = l(
            "<" + this.settings.stageElement + ' class="owl-stage"/>'
          ).wrap('<div class="owl-stage-outer">')),
          this.$element.append(this.$stage.parent()),
          this.replace(this.$element.children().not(this.$stage.parent())),
          (this._width = this.$element.width()),
          this.refresh(),
          this.$element.removeClass("owl-loading").addClass("owl-loaded"),
          this.eventsCall(),
          this.internalEvents(),
          this.addTriggerableEvents(),
          this.trigger("initialized");
      }),
      (n.prototype.setup = function() {
        var t = this.viewport(),
          e = this.options.responsive,
          n = -1,
          i = null;
        e
          ? (l.each(e, function(e) {
              e <= t && n < e && (n = Number(e));
            }),
            delete (i = l.extend({}, this.options, e[n])).responsive,
            i.responsiveClass &&
              this.$element
                .attr("class", function(e, t) {
                  return t.replace(/\b owl-responsive-\S+/g, "");
                })
                .addClass("owl-responsive-" + n))
          : (i = l.extend({}, this.options)),
          (null === this.settings || this._breakpoint !== n) &&
            (this.trigger("change", {
              property: { name: "settings", value: i }
            }),
            (this._breakpoint = n),
            (this.settings = i),
            this.invalidate("settings"),
            this.trigger("changed", {
              property: { name: "settings", value: this.settings }
            }));
      }),
      (n.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center),
          this.settings.loop &&
            this._items.length < this.settings.items &&
            (this.settings.loop = !1),
          this.settings.autoWidth &&
            ((this.settings.stagePadding = !1), (this.settings.merge = !1));
      }),
      (n.prototype.prepare = function(e) {
        var t = this.trigger("prepare", { content: e });
        return (
          t.data ||
            (t.data = l("<" + this.settings.itemElement + "/>")
              .addClass(this.settings.itemClass)
              .append(e)),
          this.trigger("prepared", { content: t.data }),
          t.data
        );
      }),
      (n.prototype.update = function() {
        for (
          var e = 0,
            t = this._pipe.length,
            n = l.proxy(function(e) {
              return this[e];
            }, this._invalidated),
            i = {};
          e < t;

        )
          (this._invalidated.all ||
            0 < l.grep(this._pipe[e].filter, n).length) &&
            this._pipe[e].run(i),
            e++;
        this._invalidated = {};
      }),
      (n.prototype.width = function(e) {
        switch ((e = e || n.Width.Default)) {
          case n.Width.Inner:
          case n.Width.Outer:
            return this._width;
          default:
            return (
              this._width -
              2 * this.settings.stagePadding +
              this.settings.margin
            );
        }
      }),
      (n.prototype.refresh = function() {
        if (0 === this._items.length) return !1;
        new Date().getTime(),
          this.trigger("refresh"),
          this.setup(),
          this.optionsLogic(),
          this.$stage.addClass("owl-refresh"),
          this.update(),
          this.$stage.removeClass("owl-refresh"),
          (this.state.orientation = c.orientation),
          this.watchVisibility(),
          this.trigger("refreshed");
      }),
      (n.prototype.eventsCall = function() {
        (this.e._onDragStart = l.proxy(function(e) {
          this.onDragStart(e);
        }, this)),
          (this.e._onDragMove = l.proxy(function(e) {
            this.onDragMove(e);
          }, this)),
          (this.e._onDragEnd = l.proxy(function(e) {
            this.onDragEnd(e);
          }, this)),
          (this.e._onResize = l.proxy(function(e) {
            this.onResize(e);
          }, this)),
          (this.e._transitionEnd = l.proxy(function(e) {
            this.transitionEnd(e);
          }, this)),
          (this.e._preventClick = l.proxy(function(e) {
            this.preventClick(e);
          }, this));
      }),
      (n.prototype.onThrottledResize = function() {
        c.clearTimeout(this.resizeTimer),
          (this.resizeTimer = c.setTimeout(
            this.e._onResize,
            this.settings.responsiveRefreshRate
          ));
      }),
      (n.prototype.onResize = function() {
        return (
          !!this._items.length &&
          (this._width !== this.$element.width() &&
            (!this.trigger("resize").isDefaultPrevented() &&
              ((this._width = this.$element.width()),
              this.invalidate("width"),
              this.refresh(),
              void this.trigger("resized"))))
        );
      }),
      (n.prototype.eventsRouter = function(e) {
        var t = e.type;
        "mousedown" === t || "touchstart" === t
          ? this.onDragStart(e)
          : "mousemove" === t || "touchmove" === t
          ? this.onDragMove(e)
          : "mouseup" === t || "touchend" === t
          ? this.onDragEnd(e)
          : "touchcancel" === t && this.onDragEnd(e);
      }),
      (n.prototype.internalEvents = function() {
        var e = (a(), d());
        this.settings.mouseDrag
          ? (this.$stage.on(
              "mousedown",
              l.proxy(function(e) {
                this.eventsRouter(e);
              }, this)
            ),
            this.$stage.on("dragstart", function() {
              return !1;
            }),
            (this.$stage.get(0).onselectstart = function() {
              return !1;
            }))
          : this.$element.addClass("owl-text-select-on"),
          this.settings.touchDrag &&
            !e &&
            this.$stage.on(
              "touchstart touchcancel",
              l.proxy(function(e) {
                this.eventsRouter(e);
              }, this)
            ),
          this.transitionEndVendor &&
            this.on(
              this.$stage.get(0),
              this.transitionEndVendor,
              this.e._transitionEnd,
              !1
            ),
          !1 !== this.settings.responsive &&
            this.on(c, "resize", l.proxy(this.onThrottledResize, this));
      }),
      (n.prototype.onDragStart = function(e) {
        var t, n, i, o;
        if (
          3 === (t = e.originalEvent || e || c.event).which ||
          this.state.isTouch
        )
          return !1;
        if (
          ("mousedown" === t.type && this.$stage.addClass("owl-grab"),
          this.trigger("drag"),
          (this.drag.startTime = new Date().getTime()),
          this.speed(0),
          (this.state.isTouch = !0),
          (this.state.isScrolling = !1),
          (this.state.isSwiping = !1),
          (this.drag.distance = 0),
          (n = u(t).x),
          (i = u(t).y),
          (this.drag.offsetX = this.$stage.position().left),
          (this.drag.offsetY = this.$stage.position().top),
          this.settings.rtl &&
            (this.drag.offsetX =
              this.$stage.position().left +
              this.$stage.width() -
              this.width() +
              this.settings.margin),
          this.state.inMotion && this.support3d)
        )
          (o = this.getTransformProperty()),
            (this.drag.offsetX = o),
            this.animate(o),
            (this.state.inMotion = !0);
        else if (this.state.inMotion && !this.support3d)
          return (this.state.inMotion = !1);
        (this.drag.startX = n - this.drag.offsetX),
          (this.drag.startY = i - this.drag.offsetY),
          (this.drag.start = n - this.drag.startX),
          (this.drag.targetEl = t.target || t.srcElement),
          (this.drag.updatedX = this.drag.start),
          ("IMG" === this.drag.targetEl.tagName ||
            "A" === this.drag.targetEl.tagName) &&
            (this.drag.targetEl.draggable = !1),
          l(r).on(
            "mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",
            l.proxy(function(e) {
              this.eventsRouter(e);
            }, this)
          );
      }),
      (n.prototype.onDragMove = function(e) {
        var t, n, i, o, r, a;
        this.state.isTouch &&
          (this.state.isScrolling ||
            ((n = u((t = e.originalEvent || e || c.event)).x),
            (i = u(t).y),
            (this.drag.currentX = n - this.drag.startX),
            (this.drag.currentY = i - this.drag.startY),
            (this.drag.distance = this.drag.currentX - this.drag.offsetX),
            this.drag.distance < 0
              ? (this.state.direction = this.settings.rtl ? "right" : "left")
              : 0 < this.drag.distance &&
                (this.state.direction = this.settings.rtl ? "left" : "right"),
            this.settings.loop
              ? this.op(
                  this.drag.currentX,
                  ">",
                  this.coordinates(this.minimum())
                ) && "right" === this.state.direction
                ? (this.drag.currentX -=
                    (this.settings.center && this.coordinates(0)) -
                    this.coordinates(this._items.length))
                : this.op(
                    this.drag.currentX,
                    "<",
                    this.coordinates(this.maximum())
                  ) &&
                  "left" === this.state.direction &&
                  (this.drag.currentX +=
                    (this.settings.center && this.coordinates(0)) -
                    this.coordinates(this._items.length))
              : ((o = this.coordinates(
                  this.settings.rtl ? this.maximum() : this.minimum()
                )),
                (r = this.coordinates(
                  this.settings.rtl ? this.minimum() : this.maximum()
                )),
                (a = this.settings.pullDrag ? this.drag.distance / 5 : 0),
                (this.drag.currentX = Math.max(
                  Math.min(this.drag.currentX, o + a),
                  r + a
                ))),
            (8 < this.drag.distance || this.drag.distance < -8) &&
              (t.preventDefault !== s
                ? t.preventDefault()
                : (t.returnValue = !1),
              (this.state.isSwiping = !0)),
            (this.drag.updatedX = this.drag.currentX),
            (16 < this.drag.currentY || this.drag.currentY < -16) &&
              !1 === this.state.isSwiping &&
              ((this.state.isScrolling = !0),
              (this.drag.updatedX = this.drag.start)),
            this.animate(this.drag.updatedX)));
      }),
      (n.prototype.onDragEnd = function(e) {
        var t, n;
        if (this.state.isTouch) {
          if (
            ("mouseup" === e.type && this.$stage.removeClass("owl-grab"),
            this.trigger("dragged"),
            this.drag.targetEl.removeAttribute("draggable"),
            (this.state.isTouch = !1),
            (this.state.isScrolling = !1),
            (this.state.isSwiping = !1),
            0 === this.drag.distance && !0 !== this.state.inMotion)
          )
            return (this.state.inMotion = !1);
          (this.drag.endTime = new Date().getTime()),
            (t = this.drag.endTime - this.drag.startTime),
            (3 < Math.abs(this.drag.distance) || 300 < t) &&
              this.removeClick(this.drag.targetEl),
            (n = this.closest(this.drag.updatedX)),
            this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
            this.current(n),
            this.invalidate("position"),
            this.update(),
            this.settings.pullDrag ||
              this.drag.updatedX !== this.coordinates(n) ||
              this.transitionEnd(),
            (this.drag.distance = 0),
            l(r).off(".owl.dragEvents");
        }
      }),
      (n.prototype.removeClick = function(e) {
        (this.drag.targetEl = e),
          l(e).on("click.preventClick", this.e._preventClick),
          c.setTimeout(function() {
            l(e).off("click.preventClick");
          }, 300);
      }),
      (n.prototype.preventClick = function(e) {
        e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          e.stopPropagation && e.stopPropagation(),
          l(e.target).off("click.preventClick");
      }),
      (n.prototype.getTransformProperty = function() {
        var e;
        return !0 !==
          (16 ===
            (e = (e = c
              .getComputedStyle(this.$stage.get(0), null)
              .getPropertyValue(this.vendorName + "transform"))
              .replace(/matrix(3d)?\(|\)/g, "")
              .split(",")).length)
          ? e[4]
          : e[12];
      }),
      (n.prototype.closest = function(n) {
        var i = -1,
          o = 30,
          r = this.width(),
          a = this.coordinates();
        return (
          this.settings.freeDrag ||
            l.each(
              a,
              l.proxy(function(e, t) {
                return (
                  t - o < n && n < t + o
                    ? (i = e)
                    : this.op(n, "<", t) &&
                      this.op(n, ">", a[e + 1] || t - r) &&
                      (i = "left" === this.state.direction ? e + 1 : e),
                  -1 === i
                );
              }, this)
            ),
          this.settings.loop ||
            (this.op(n, ">", a[this.minimum()])
              ? (i = n = this.minimum())
              : this.op(n, "<", a[this.maximum()]) && (i = n = this.maximum())),
          i
        );
      }),
      (n.prototype.animate = function(e) {
        this.trigger("translate"),
          (this.state.inMotion = 0 < this.speed()),
          this.support3d
            ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px, 0px)",
                transition: this.speed() / 1e3 + "s"
              })
            : this.state.isTouch
            ? this.$stage.css({ left: e + "px" })
            : this.$stage.animate(
                { left: e },
                this.speed() / 1e3,
                this.settings.fallbackEasing,
                l.proxy(function() {
                  this.state.inMotion && this.transitionEnd();
                }, this)
              );
      }),
      (n.prototype.current = function(e) {
        if (e === s) return this._current;
        if (0 === this._items.length) return s;
        if (((e = this.normalize(e)), this._current !== e)) {
          var t = this.trigger("change", {
            property: { name: "position", value: e }
          });
          t.data !== s && (e = this.normalize(t.data)),
            (this._current = e),
            this.invalidate("position"),
            this.trigger("changed", {
              property: { name: "position", value: this._current }
            });
        }
        return this._current;
      }),
      (n.prototype.invalidate = function(e) {
        this._invalidated[e] = !0;
      }),
      (n.prototype.reset = function(e) {
        (e = this.normalize(e)) !== s &&
          ((this._speed = 0),
          (this._current = e),
          this.suppress(["translate", "translated"]),
          this.animate(this.coordinates(e)),
          this.release(["translate", "translated"]));
      }),
      (n.prototype.normalize = function(e, t) {
        var n = t
          ? this._items.length
          : this._items.length + this._clones.length;
        return !l.isNumeric(e) || n < 1
          ? s
          : (e = this._clones.length
              ? ((e % n) + n) % n
              : Math.max(this.minimum(t), Math.min(this.maximum(t), e)));
      }),
      (n.prototype.relative = function(e) {
        return (
          (e = this.normalize(e)),
          (e -= this._clones.length / 2),
          this.normalize(e, !0)
        );
      }),
      (n.prototype.maximum = function(e) {
        var t,
          n,
          i,
          o = 0,
          r = this.settings;
        if (e) return this._items.length - 1;
        if (!r.loop && r.center) t = this._items.length - 1;
        else if (r.loop || r.center)
          if (r.loop || r.center) t = this._items.length + r.items;
          else {
            if (!r.autoWidth && !r.merge)
              throw "Can not detect maximum absolute position.";
            for (
              revert = r.rtl ? 1 : -1,
                n = this.$stage.width() - this.$element.width();
              (i = this.coordinates(o)) && !(i * revert >= n);

            )
              t = ++o;
          }
        else t = this._items.length - r.items;
        return t;
      }),
      (n.prototype.minimum = function(e) {
        return e ? 0 : this._clones.length / 2;
      }),
      (n.prototype.items = function(e) {
        return e === s
          ? this._items.slice()
          : ((e = this.normalize(e, !0)), this._items[e]);
      }),
      (n.prototype.mergers = function(e) {
        return e === s
          ? this._mergers.slice()
          : ((e = this.normalize(e, !0)), this._mergers[e]);
      }),
      (n.prototype.clones = function(n) {
        var t = this._clones.length / 2,
          i = t + this._items.length,
          o = function(e) {
            return e % 2 == 0 ? i + e / 2 : t - (e + 1) / 2;
          };
        return n === s
          ? l.map(this._clones, function(e, t) {
              return o(t);
            })
          : l.map(this._clones, function(e, t) {
              return e === n ? o(t) : null;
            });
      }),
      (n.prototype.speed = function(e) {
        return e !== s && (this._speed = e), this._speed;
      }),
      (n.prototype.coordinates = function(e) {
        var t = null;
        return e === s
          ? l.map(
              this._coordinates,
              l.proxy(function(e, t) {
                return this.coordinates(t);
              }, this)
            )
          : (this.settings.center
              ? ((t = this._coordinates[e]),
                (t +=
                  ((this.width() - t + (this._coordinates[e - 1] || 0)) / 2) *
                  (this.settings.rtl ? -1 : 1)))
              : (t = this._coordinates[e - 1] || 0),
            t);
      }),
      (n.prototype.duration = function(e, t, n) {
        return (
          Math.min(Math.max(Math.abs(t - e), 1), 6) *
          Math.abs(n || this.settings.smartSpeed)
        );
      }),
      (n.prototype.to = function(e, t) {
        if (this.settings.loop) {
          var n = e - this.relative(this.current()),
            i = this.current(),
            o = this.current(),
            r = this.current() + n,
            a = o - r < 0,
            s = this._clones.length + this._items.length;
          r < this.settings.items && !1 === a
            ? ((i = o + this._items.length), this.reset(i))
            : r >= s - this.settings.items &&
              !0 === a &&
              ((i = o - this._items.length), this.reset(i)),
            c.clearTimeout(this.e._goToLoop),
            (this.e._goToLoop = c.setTimeout(
              l.proxy(function() {
                this.speed(this.duration(this.current(), i + n, t)),
                  this.current(i + n),
                  this.update();
              }, this),
              30
            ));
        } else
          this.speed(this.duration(this.current(), e, t)),
            this.current(e),
            this.update();
      }),
      (n.prototype.next = function(e) {
        (e = e || !1), this.to(this.relative(this.current()) + 1, e);
      }),
      (n.prototype.prev = function(e) {
        (e = e || !1), this.to(this.relative(this.current()) - 1, e);
      }),
      (n.prototype.transitionEnd = function(e) {
        return (
          (e === s ||
            (e.stopPropagation(),
            (e.target || e.srcElement || e.originalTarget) ===
              this.$stage.get(0))) &&
          ((this.state.inMotion = !1), void this.trigger("translated"))
        );
      }),
      (n.prototype.viewport = function() {
        var e;
        if (this.options.responsiveBaseElement !== c)
          e = l(this.options.responsiveBaseElement).width();
        else if (c.innerWidth) e = c.innerWidth;
        else {
          if (!r.documentElement || !r.documentElement.clientWidth)
            throw "Can not detect viewport width.";
          e = r.documentElement.clientWidth;
        }
        return e;
      }),
      (n.prototype.replace = function(e) {
        this.$stage.empty(),
          (this._items = []),
          e && (e = e instanceof jQuery ? e : l(e)),
          this.settings.nestedItemSelector &&
            (e = e.find("." + this.settings.nestedItemSelector)),
          e
            .filter(function() {
              return 1 === this.nodeType;
            })
            .each(
              l.proxy(function(e, t) {
                (t = this.prepare(t)),
                  this.$stage.append(t),
                  this._items.push(t),
                  this._mergers.push(
                    1 *
                      t
                        .find("[data-merge]")
                        .andSelf("[data-merge]")
                        .attr("data-merge") || 1
                  );
              }, this)
            ),
          this.reset(
            l.isNumeric(this.settings.startPosition)
              ? this.settings.startPosition
              : 0
          ),
          this.invalidate("items");
      }),
      (n.prototype.add = function(e, t) {
        (t = t === s ? this._items.length : this.normalize(t, !0)),
          this.trigger("add", { content: e, position: t }),
          0 === this._items.length || t === this._items.length
            ? (this.$stage.append(e),
              this._items.push(e),
              this._mergers.push(
                1 *
                  e
                    .find("[data-merge]")
                    .andSelf("[data-merge]")
                    .attr("data-merge") || 1
              ))
            : (this._items[t].before(e),
              this._items.splice(t, 0, e),
              this._mergers.splice(
                t,
                0,
                1 *
                  e
                    .find("[data-merge]")
                    .andSelf("[data-merge]")
                    .attr("data-merge") || 1
              )),
          this.invalidate("items"),
          this.trigger("added", { content: e, position: t });
      }),
      (n.prototype.remove = function(e) {
        (e = this.normalize(e, !0)) !== s &&
          (this.trigger("remove", { content: this._items[e], position: e }),
          this._items[e].remove(),
          this._items.splice(e, 1),
          this._mergers.splice(e, 1),
          this.invalidate("items"),
          this.trigger("removed", { content: null, position: e }));
      }),
      (n.prototype.addTriggerableEvents = function() {
        var n = l.proxy(function(t, n) {
          return l.proxy(function(e) {
            e.relatedTarget !== this &&
              (this.suppress([n]),
              t.apply(this, [].slice.call(arguments, 1)),
              this.release([n]));
          }, this);
        }, this);
        l.each(
          {
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
          },
          l.proxy(function(e, t) {
            this.$element.on(e + ".owl.carousel", n(t, e + ".owl.carousel"));
          }, this)
        );
      }),
      (n.prototype.watchVisibility = function() {
        function e(e) {
          return 0 < e.offsetWidth && 0 < e.offsetHeight;
        }
        function t() {
          e(this.$element.get(0)) &&
            (this.$element.removeClass("owl-hidden"),
            this.refresh(),
            c.clearInterval(this.e._checkVisibile));
        }
        e(this.$element.get(0)) ||
          (this.$element.addClass("owl-hidden"),
          c.clearInterval(this.e._checkVisibile),
          (this.e._checkVisibile = c.setInterval(l.proxy(t, this), 500)));
      }),
      (n.prototype.preloadAutoWidthImages = function(n) {
        var i, o, r, a;
        (i = 0),
          (o = this),
          n.each(function(e, t) {
            (r = l(t)),
              ((a = new Image()).onload = function() {
                i++,
                  r.attr("src", a.src),
                  r.css("opacity", 1),
                  i >= n.length &&
                    ((o.state.imagesLoaded = !0), o.initialize());
              }),
              (a.src =
                r.attr("src") ||
                r.attr("data-src") ||
                r.attr("data-src-retina"));
          });
      }),
      (n.prototype.destroy = function() {
        for (var e in (this.$element.hasClass(this.settings.themeClass) &&
          this.$element.removeClass(this.settings.themeClass),
        !1 !== this.settings.responsive && l(c).off("resize.owl.carousel"),
        this.transitionEndVendor &&
          this.off(
            this.$stage.get(0),
            this.transitionEndVendor,
            this.e._transitionEnd
          ),
        this._plugins))
          this._plugins[e].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) &&
          (this.$stage.off("mousedown touchstart touchcancel"),
          l(r).off(".owl.dragEvents"),
          (this.$stage.get(0).onselectstart = function() {}),
          this.$stage.off("dragstart", function() {
            return !1;
          })),
          this.$element.off(".owl"),
          this.$stage.children(".cloned").remove(),
          (this.e = null),
          this.$element.removeData("owlCarousel"),
          this.$stage
            .children()
            .contents()
            .unwrap(),
          this.$stage.children().unwrap(),
          this.$stage.unwrap();
      }),
      (n.prototype.op = function(e, t, n) {
        var i = this.settings.rtl;
        switch (t) {
          case "<":
            return i ? n < e : e < n;
          case ">":
            return i ? e < n : n < e;
          case ">=":
            return i ? e <= n : n <= e;
          case "<=":
            return i ? n <= e : e <= n;
        }
      }),
      (n.prototype.on = function(e, t, n, i) {
        e.addEventListener
          ? e.addEventListener(t, n, i)
          : e.attachEvent && e.attachEvent("on" + t, n);
      }),
      (n.prototype.off = function(e, t, n, i) {
        e.removeEventListener
          ? e.removeEventListener(t, n, i)
          : e.detachEvent && e.detachEvent("on" + t, n);
      }),
      (n.prototype.trigger = function(e, t, n) {
        var i = { item: { count: this._items.length, index: this.current() } },
          o = l.camelCase(
            l
              .grep(["on", e, n], function(e) {
                return e;
              })
              .join("-")
              .toLowerCase()
          ),
          r = l.Event(
            [e, "owl", n || "carousel"].join(".").toLowerCase(),
            l.extend({ relatedTarget: this }, i, t)
          );
        return (
          this._supress[e] ||
            (l.each(this._plugins, function(e, t) {
              t.onTrigger && t.onTrigger(r);
            }),
            this.$element.trigger(r),
            this.settings &&
              "function" == typeof this.settings[o] &&
              this.settings[o].apply(this, r)),
          r
        );
      }),
      (n.prototype.suppress = function(e) {
        l.each(
          e,
          l.proxy(function(e, t) {
            this._supress[t] = !0;
          }, this)
        );
      }),
      (n.prototype.release = function(e) {
        l.each(
          e,
          l.proxy(function(e, t) {
            delete this._supress[t];
          }, this)
        );
      }),
      (n.prototype.browserSupport = function() {
        if (((this.support3d = o()), this.support3d)) {
          this.transformVendor = i();
          var e = [
            "transitionend",
            "webkitTransitionEnd",
            "transitionend",
            "oTransitionEnd"
          ];
          (this.transitionEndVendor = e[t()]),
            (this.vendorName = this.transformVendor.replace(/Transform/i, "")),
            (this.vendorName =
              "" !== this.vendorName
                ? "-" + this.vendorName.toLowerCase() + "-"
                : "");
        }
        this.state.orientation = c.orientation;
      }),
      (l.fn.owlCarousel = function(e) {
        return this.each(function() {
          l(this).data("owlCarousel") ||
            l(this).data("owlCarousel", new n(this, e));
        });
      }),
      (l.fn.owlCarousel.Constructor = n);
  })(window.Zepto || window.jQuery, window, document),
  (function(s, r) {
    var t = function(e) {
      (this._core = e),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel": s.proxy(function(e) {
            if (
              e.namespace &&
              this._core.settings &&
              this._core.settings.lazyLoad &&
              ((e.property && "position" == e.property.name) ||
                "initialized" == e.type)
            )
              for (
                var t = this._core.settings,
                  n = (t.center && Math.ceil(t.items / 2)) || t.items,
                  i = (t.center && -1 * n) || 0,
                  o =
                    ((e.property && e.property.value) || this._core.current()) +
                    i,
                  r = this._core.clones().length,
                  a = s.proxy(function(e, t) {
                    this.load(t);
                  }, this);
                i++ < n;

              )
                this.load(r / 2 + this._core.relative(o)),
                  r && s.each(this._core.clones(this._core.relative(o++)), a);
          }, this)
        }),
        (this._core.options = s.extend({}, t.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (t.Defaults = { lazyLoad: !1 }),
      (t.prototype.load = function(e) {
        var t = this._core.$stage.children().eq(e),
          n = t && t.find(".owl-lazy");
        !n ||
          -1 < s.inArray(t.get(0), this._loaded) ||
          (n.each(
            s.proxy(function(e, t) {
              var n,
                i = s(t),
                o =
                  (1 < r.devicePixelRatio && i.attr("data-src-retina")) ||
                  i.attr("data-src");
              this._core.trigger("load", { element: i, url: o }, "lazy"),
                i.is("img")
                  ? i
                      .one(
                        "load.owl.lazy",
                        s.proxy(function() {
                          i.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: i, url: o },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", o)
                  : (((n = new Image()).onload = s.proxy(function() {
                      i.css({
                        "background-image": "url(" + o + ")",
                        opacity: "1"
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: i, url: o },
                          "lazy"
                        );
                    }, this)),
                    (n.src = o));
            }, this)
          ),
          this._loaded.push(t.get(0)));
      }),
      (t.prototype.destroy = function() {
        var e, t;
        for (e in this.handlers) this._core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this))
          "function" != typeof this[t] && (this[t] = null);
      }),
      (s.fn.owlCarousel.Constructor.Plugins.Lazy = t);
  })(window.Zepto || window.jQuery, window, document),
  (function(t) {
    var n = function(e) {
      (this._core = e),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function() {
            this._core.settings.autoHeight && this.update();
          }, this),
          "changed.owl.carousel": t.proxy(function(e) {
            this._core.settings.autoHeight &&
              "position" == e.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": t.proxy(function(e) {
            this._core.settings.autoHeight &&
              e.element.closest("." + this._core.settings.itemClass) ===
                this._core.$stage.children().eq(this._core.current()) &&
              this.update();
          }, this)
        }),
        (this._core.options = t.extend({}, n.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (n.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (n.prototype.update = function() {
        this._core.$stage
          .parent()
          .height(
            this._core.$stage
              .children()
              .eq(this._core.current())
              .height()
          )
          .addClass(this._core.settings.autoHeightClass);
      }),
      (n.prototype.destroy = function() {
        var e, t;
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this))
          "function" != typeof this[t] && (this[t] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = n);
  })(window.Zepto || window.jQuery, window, document),
  (function(d, t, n) {
    var i = function(e) {
      (this._core = e),
        (this._videos = {}),
        (this._playing = null),
        (this._fullscreen = !1),
        (this._handlers = {
          "resize.owl.carousel": d.proxy(function(e) {
            this._core.settings.video &&
              !this.isInFullScreen() &&
              e.preventDefault();
          }, this),
          "refresh.owl.carousel changed.owl.carousel": d.proxy(function() {
            this._playing && this.stop();
          }, this),
          "prepared.owl.carousel": d.proxy(function(e) {
            var t = d(e.content).find(".owl-video");
            t.length && (t.css("display", "none"), this.fetch(t, d(e.content)));
          }, this)
        }),
        (this._core.options = d.extend({}, i.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          d.proxy(function(e) {
            this.play(e);
          }, this)
        );
    };
    (i.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (i.prototype.fetch = function(e, t) {
        var n = e.attr("data-vimeo-id") ? "vimeo" : "youtube",
          i = e.attr("data-vimeo-id") || e.attr("data-youtube-id"),
          o = e.attr("data-width") || this._core.settings.videoWidth,
          r = e.attr("data-height") || this._core.settings.videoHeight,
          a = e.attr("href");
        if (!a) throw new Error("Missing video URL.");
        if (
          -1 <
          (i = a.match(
            /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          ))[3].indexOf("youtu")
        )
          n = "youtube";
        else {
          if (!(-1 < i[3].indexOf("vimeo")))
            throw new Error("Video URL not supported.");
          n = "vimeo";
        }
        (i = i[6]),
          (this._videos[a] = { type: n, id: i, width: o, height: r }),
          t.attr("data-video", a),
          this.thumbnail(e, this._videos[a]);
      }),
      (i.prototype.thumbnail = function(t, e) {
        var n,
          i,
          o,
          r =
            e.width && e.height
              ? 'style="width:' + e.width + "px;height:" + e.height + 'px;"'
              : "",
          a = t.find("img"),
          s = "src",
          l = "",
          c = this._core.settings,
          u = function(e) {
            (i = '<div class="owl-video-play-icon"></div>'),
              (n = c.lazyLoad
                ? '<div class="owl-video-tn ' +
                  l +
                  '" ' +
                  s +
                  '="' +
                  e +
                  '"></div>'
                : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
                  e +
                  ')"></div>'),
              t.after(n),
              t.after(i);
          };
        return (
          t.wrap('<div class="owl-video-wrapper"' + r + "></div>"),
          this._core.settings.lazyLoad && ((s = "data-src"), (l = "owl-lazy")),
          a.length
            ? (u(a.attr(s)), a.remove(), !1)
            : void ("youtube" === e.type
                ? ((o = "http://img.youtube.com/vi/" + e.id + "/hqdefault.jpg"),
                  u(o))
                : "vimeo" === e.type &&
                  d.ajax({
                    type: "GET",
                    url: "http://vimeo.com/api/v2/video/" + e.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function(e) {
                      (o = e[0].thumbnail_large), u(o);
                    }
                  }))
        );
      }),
      (i.prototype.stop = function() {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null);
      }),
      (i.prototype.play = function(e) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var t,
          n,
          i = d(e.target || e.srcElement),
          o = i.closest("." + this._core.settings.itemClass),
          r = this._videos[o.attr("data-video")],
          a = r.width || "100%",
          s = r.height || this._core.$stage.height();
        "youtube" === r.type
          ? (t =
              '<iframe width="' +
              a +
              '" height="' +
              s +
              '" src="http://www.youtube.com/embed/' +
              r.id +
              "?autoplay=1&v=" +
              r.id +
              '" frameborder="0" allowfullscreen></iframe>')
          : "vimeo" === r.type &&
            (t =
              '<iframe src="http://player.vimeo.com/video/' +
              r.id +
              '?autoplay=1" width="' +
              a +
              '" height="' +
              s +
              '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),
          o.addClass("owl-video-playing"),
          (this._playing = o),
          (n = d(
            '<div style="height:' +
              s +
              "px; width:" +
              a +
              'px" class="owl-video-frame">' +
              t +
              "</div>"
          )),
          i.after(n);
      }),
      (i.prototype.isInFullScreen = function() {
        var e =
          n.fullscreenElement ||
          n.mozFullScreenElement ||
          n.webkitFullscreenElement;
        return (
          e &&
            d(e)
              .parent()
              .hasClass("owl-video-frame") &&
            (this._core.speed(0), (this._fullscreen = !0)),
          !(e && this._fullscreen && this._playing) &&
            (this._fullscreen
              ? (this._fullscreen = !1)
              : !this._playing ||
                this._core.state.orientation === t.orientation ||
                ((this._core.state.orientation = t.orientation), !1))
        );
      }),
      (i.prototype.destroy = function() {
        var e, t;
        for (e in (this._core.$element.off("click.owl.video"), this._handlers))
          this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this))
          "function" != typeof this[t] && (this[t] = null);
      }),
      (d.fn.owlCarousel.Constructor.Plugins.Video = i);
  })(window.Zepto || window.jQuery, window, document),
  (function(a, e, t, n) {
    var i = function(e) {
      (this.core = e),
        (this.core.options = a.extend({}, i.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = n),
        (this.next = n),
        (this.handlers = {
          "change.owl.carousel": a.proxy(function(e) {
            "position" == e.property.name &&
              ((this.previous = this.core.current()),
              (this.next = e.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(
            function(e) {
              this.swapping = "translated" == e.type;
            },
            this
          ),
          "translate.owl.carousel": a.proxy(function() {
            this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this)
        }),
        this.core.$element.on(this.handlers);
    };
    (i.Defaults = { animateOut: !1, animateIn: !1 }),
      (i.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
          this.core.speed(0);
          var e,
            t = a.proxy(this.clear, this),
            n = this.core.$stage.children().eq(this.previous),
            i = this.core.$stage.children().eq(this.next),
            o = this.core.settings.animateIn,
            r = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (r &&
              ((e =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              n
                .css({ left: e + "px" })
                .addClass("animated owl-animated-out")
                .addClass(r)
                .one(
                  "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                  t
                )),
            o &&
              i
                .addClass("animated owl-animated-in")
                .addClass(o)
                .one(
                  "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                  t
                ));
        }
      }),
      (i.prototype.clear = function(e) {
        a(e.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.transitionEnd();
      }),
      (i.prototype.destroy = function() {
        var e, t;
        for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this))
          "function" != typeof this[t] && (this[t] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Animate = i);
  })(window.Zepto || window.jQuery, window, document),
  (function(t, n, e) {
    var i = function(e) {
      (this.core = e),
        (this.core.options = t.extend({}, i.Defaults, this.core.options)),
        (this.handlers = {
          "translated.owl.carousel refreshed.owl.carousel": t.proxy(function() {
            this.autoplay();
          }, this),
          "play.owl.autoplay": t.proxy(function(e, t, n) {
            this.play(t, n);
          }, this),
          "stop.owl.autoplay": t.proxy(function() {
            this.stop();
          }, this),
          "mouseover.owl.autoplay": t.proxy(function() {
            this.core.settings.autoplayHoverPause && this.pause();
          }, this),
          "mouseleave.owl.autoplay": t.proxy(function() {
            this.core.settings.autoplayHoverPause && this.autoplay();
          }, this)
        }),
        this.core.$element.on(this.handlers);
    };
    (i.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1
    }),
      (i.prototype.autoplay = function() {
        this.core.settings.autoplay && !this.core.state.videoPlay
          ? (n.clearInterval(this.interval),
            (this.interval = n.setInterval(
              t.proxy(function() {
                this.play();
              }, this),
              this.core.settings.autoplayTimeout
            )))
          : n.clearInterval(this.interval);
      }),
      (i.prototype.play = function() {
        return !0 === e.hidden ||
          this.core.state.isTouch ||
          this.core.state.isScrolling ||
          this.core.state.isSwiping ||
          this.core.state.inMotion
          ? void 0
          : !1 === this.core.settings.autoplay
          ? void n.clearInterval(this.interval)
          : void this.core.next(this.core.settings.autoplaySpeed);
      }),
      (i.prototype.stop = function() {
        n.clearInterval(this.interval);
      }),
      (i.prototype.pause = function() {
        n.clearInterval(this.interval);
      }),
      (i.prototype.destroy = function() {
        var e, t;
        for (e in (n.clearInterval(this.interval), this.handlers))
          this.core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this))
          "function" != typeof this[t] && (this[t] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.autoplay = i);
  })(window.Zepto || window.jQuery, window, document),
  (function(r) {
    "use strict";
    var t = function(e) {
      (this._core = e),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to
        }),
        (this._handlers = {
          "prepared.owl.carousel": r.proxy(function(e) {
            this._core.settings.dotsData &&
              this._templates.push(
                r(e.content)
                  .find("[data-dot]")
                  .andSelf("[data-dot]")
                  .attr("data-dot")
              );
          }, this),
          "add.owl.carousel": r.proxy(function(e) {
            this._core.settings.dotsData &&
              this._templates.splice(
                e.position,
                0,
                r(e.content)
                  .find("[data-dot]")
                  .andSelf("[data-dot]")
                  .attr("data-dot")
              );
          }, this),
          "remove.owl.carousel prepared.owl.carousel": r.proxy(function(e) {
            this._core.settings.dotsData &&
              this._templates.splice(e.position, 1);
          }, this),
          "change.owl.carousel": r.proxy(function(e) {
            if (
              "position" == e.property.name &&
              !this._core.state.revert &&
              !this._core.settings.loop &&
              this._core.settings.navRewind
            ) {
              var t = this._core.current(),
                n = this._core.maximum(),
                i = this._core.minimum();
              e.data =
                e.property.value > n
                  ? n <= t
                    ? i
                    : n
                  : e.property.value < i
                  ? n
                  : e.property.value;
            }
          }, this),
          "changed.owl.carousel": r.proxy(function(e) {
            "position" == e.property.name && this.draw();
          }, this),
          "refreshed.owl.carousel": r.proxy(function() {
            this._initialized || (this.initialize(), (this._initialized = !0)),
              this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation");
          }, this)
        }),
        (this._core.options = r.extend({}, t.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (t.Defaults = {
      nav: !1,
      navRewind: !0,
      navText: ["prev", "next"],
      navSpeed: !1,
      navElement: "div",
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
      controlsClass: "owl-controls"
    }),
      (t.prototype.initialize = function() {
        var e,
          t,
          n = this._core.settings;
        for (t in (n.dotsData ||
          (this._templates = [
            r("<div>")
              .addClass(n.dotClass)
              .append(r("<span>"))
              .prop("outerHTML")
          ]),
        (n.navContainer && n.dotsContainer) ||
          (this._controls.$container = r("<div>")
            .addClass(n.controlsClass)
            .appendTo(this.$element)),
        (this._controls.$indicators = n.dotsContainer
          ? r(n.dotsContainer)
          : r("<div>")
              .hide()
              .addClass(n.dotsClass)
              .appendTo(this._controls.$container)),
        this._controls.$indicators.on(
          "click",
          "div",
          r.proxy(function(e) {
            var t = r(e.target)
              .parent()
              .is(this._controls.$indicators)
              ? r(e.target).index()
              : r(e.target)
                  .parent()
                  .index();
            e.preventDefault(), this.to(t, n.dotsSpeed);
          }, this)
        ),
        (e = n.navContainer
          ? r(n.navContainer)
          : r("<div>")
              .addClass(n.navContainerClass)
              .prependTo(this._controls.$container)),
        (this._controls.$next = r("<" + n.navElement + ">")),
        (this._controls.$previous = this._controls.$next.clone()),
        this._controls.$previous
          .addClass(n.navClass[0])
          .html(n.navText[0])
          .hide()
          .prependTo(e)
          .on(
            "click",
            r.proxy(function() {
              this.prev(n.navSpeed);
            }, this)
          ),
        this._controls.$next
          .addClass(n.navClass[1])
          .html(n.navText[1])
          .hide()
          .appendTo(e)
          .on(
            "click",
            r.proxy(function() {
              this.next(n.navSpeed);
            }, this)
          ),
        this._overrides))
          this._core[t] = r.proxy(this[t], this);
      }),
      (t.prototype.destroy = function() {
        var e, t, n, i;
        for (e in this._handlers) this.$element.off(e, this._handlers[e]);
        for (t in this._controls) this._controls[t].remove();
        for (i in this.overides) this._core[i] = this._overrides[i];
        for (n in Object.getOwnPropertyNames(this))
          "function" != typeof this[n] && (this[n] = null);
      }),
      (t.prototype.update = function() {
        var e,
          t,
          n = this._core.settings,
          i = this._core.clones().length / 2,
          o = i + this._core.items().length,
          r = n.center || n.autoWidth || n.dotData ? 1 : n.dotsEach || n.items;
        if (
          ("page" !== n.slideBy && (n.slideBy = Math.min(n.slideBy, n.items)),
          n.dots || "page" == n.slideBy)
        )
          for (this._pages = [], e = i, t = 0; e < o; e++)
            (r <= t || 0 === t) &&
              (this._pages.push({ start: e - i, end: e - i + r - 1 }),
              (t = 0),
              0),
              (t += this._core.mergers(this._core.relative(e)));
      }),
      (t.prototype.draw = function() {
        var e,
          t,
          n = "",
          i = this._core.settings,
          o =
            (this._core.$stage.children(),
            this._core.relative(this._core.current()));
        if (
          (!i.nav ||
            i.loop ||
            i.navRewind ||
            (this._controls.$previous.toggleClass("disabled", o <= 0),
            this._controls.$next.toggleClass(
              "disabled",
              o >= this._core.maximum()
            )),
          this._controls.$previous.toggle(i.nav),
          this._controls.$next.toggle(i.nav),
          i.dots)
        ) {
          if (
            ((e =
              this._pages.length -
              this._controls.$indicators.children().length),
            i.dotData && 0 !== e)
          ) {
            for (t = 0; t < this._controls.$indicators.children().length; t++)
              n += this._templates[this._core.relative(t)];
            this._controls.$indicators.html(n);
          } else
            0 < e
              ? ((n = new Array(e + 1).join(this._templates[0])),
                this._controls.$indicators.append(n))
              : e < 0 &&
                this._controls.$indicators
                  .children()
                  .slice(e)
                  .remove();
          this._controls.$indicators.find(".active").removeClass("active"),
            this._controls.$indicators
              .children()
              .eq(r.inArray(this.current(), this._pages))
              .addClass("active");
        }
        this._controls.$indicators.toggle(i.dots);
      }),
      (t.prototype.onTrigger = function(e) {
        var t = this._core.settings;
        e.page = {
          index: r.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            t &&
            (t.center || t.autoWidth || t.dotData ? 1 : t.dotsEach || t.items)
        };
      }),
      (t.prototype.current = function() {
        var t = this._core.relative(this._core.current());
        return r
          .grep(this._pages, function(e) {
            return e.start <= t && e.end >= t;
          })
          .pop();
      }),
      (t.prototype.getPosition = function(e) {
        var t,
          n,
          i = this._core.settings;
        return (
          "page" == i.slideBy
            ? ((t = r.inArray(this.current(), this._pages)),
              (n = this._pages.length),
              e ? ++t : --t,
              (t = this._pages[((t % n) + n) % n].start))
            : ((t = this._core.relative(this._core.current())),
              (n = this._core.items().length),
              e ? (t += i.slideBy) : (t -= i.slideBy)),
          t
        );
      }),
      (t.prototype.next = function(e) {
        r.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
      }),
      (t.prototype.prev = function(e) {
        r.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
      }),
      (t.prototype.to = function(e, t, n) {
        var i;
        n
          ? r.proxy(this._overrides.to, this._core)(e, t)
          : ((i = this._pages.length),
            r.proxy(this._overrides.to, this._core)(
              this._pages[((e % i) + i) % i].start,
              t
            ));
      }),
      (r.fn.owlCarousel.Constructor.Plugins.Navigation = t);
  })(window.Zepto || window.jQuery, window, document),
  (function(n, i) {
    "use strict";
    var t = function(e) {
      (this._core = e),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": n.proxy(function() {
            "URLHash" == this._core.settings.startPosition &&
              n(i).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": n.proxy(function(e) {
            var t = n(e.content)
              .find("[data-hash]")
              .andSelf("[data-hash]")
              .attr("data-hash");
            this._hashes[t] = e.content;
          }, this)
        }),
        (this._core.options = n.extend({}, t.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        n(i).on(
          "hashchange.owl.navigation",
          n.proxy(function() {
            var e = i.location.hash.substring(1),
              t = this._core.$stage.children(),
              n = (this._hashes[e] && t.index(this._hashes[e])) || 0;
            return !!e && void this._core.to(n, !1, !0);
          }, this)
        );
    };
    (t.Defaults = { URLhashListener: !1 }),
      (t.prototype.destroy = function() {
        var e, t;
        for (e in (n(i).off("hashchange.owl.navigation"), this._handlers))
          this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this))
          "function" != typeof this[t] && (this[t] = null);
      }),
      (n.fn.owlCarousel.Constructor.Plugins.Hash = t);
  })(window.Zepto || window.jQuery, window, document),
  (function(o, n, H, f) {
    "use strict";
    var r = H("html"),
      i = H(o),
      c = H(n),
      O = (H.fancybox = function() {
        O.open.apply(this, arguments);
      }),
      a = navigator.userAgent.match(/msie/i),
      s = null,
      l = n.createTouch !== f,
      h = function(e) {
        return e && e.hasOwnProperty && e instanceof H;
      },
      p = function(e) {
        return e && "string" === H.type(e);
      },
      B = function(e) {
        return p(e) && 0 < e.indexOf("%");
      },
      u = function(e) {
        return (
          e &&
          !(e.style.overflow && "hidden" === e.style.overflow) &&
          ((e.clientWidth && e.scrollWidth > e.clientWidth) ||
            (e.clientHeight && e.scrollHeight > e.clientHeight))
        );
      },
      P = function(e, t) {
        var n = parseInt(e, 10) || 0;
        return t && B(e) && (n = (O.getViewport()[t] / 100) * n), Math.ceil(n);
      },
      R = function(e, t) {
        return P(e, t) + "px";
      };
    H.extend(O, {
      version: "2.1.7",
      defaults: {
        padding: 15,
        margin: 20,
        width: 800,
        height: 600,
        minWidth: 100,
        minHeight: 100,
        maxWidth: 9999,
        maxHeight: 9999,
        pixelRatio: 1,
        autoSize: !0,
        autoHeight: !1,
        autoWidth: !1,
        autoResize: !0,
        autoCenter: !l,
        fitToView: !0,
        aspectRatio: !1,
        topRatio: 0.5,
        leftRatio: 0.5,
        scrolling: "auto",
        wrapCSS: "",
        arrows: !0,
        closeBtn: !0,
        closeClick: !1,
        nextClick: !1,
        mouseWheel: !0,
        autoPlay: !1,
        playSpeed: 3e3,
        preload: 3,
        modal: !1,
        loop: !0,
        ajax: { dataType: "html", headers: { "X-fancyBox": !0 } },
        iframe: { scrolling: "auto", preload: !0 },
        swf: {
          wmode: "transparent",
          allowfullscreen: "true",
          allowscriptaccess: "always"
        },
        keys: {
          next: { 13: "left", 34: "up", 39: "left", 40: "up" },
          prev: { 8: "right", 33: "down", 37: "right", 38: "down" },
          close: [27],
          play: [32],
          toggle: [70]
        },
        direction: { next: "left", prev: "right" },
        scrollOutside: !0,
        index: 0,
        type: null,
        href: null,
        content: null,
        title: null,
        tpl: {
          wrap:
            '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
          image: '<img class="fancybox-image" src="{href}" alt="" />',
          iframe:
            '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
            (a ? ' allowtransparency="true"' : "") +
            "></iframe>",
          error:
            '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
          closeBtn:
            '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
          next:
            '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
          prev:
            '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
          loading: '<div id="fancybox-loading"><div></div></div>'
        },
        openEffect: "fade",
        openSpeed: 250,
        openEasing: "swing",
        openOpacity: !0,
        openMethod: "zoomIn",
        closeEffect: "fade",
        closeSpeed: 250,
        closeEasing: "swing",
        closeOpacity: !0,
        closeMethod: "zoomOut",
        nextEffect: "elastic",
        nextSpeed: 250,
        nextEasing: "swing",
        nextMethod: "changeIn",
        prevEffect: "elastic",
        prevSpeed: 250,
        prevEasing: "swing",
        prevMethod: "changeOut",
        helpers: { overlay: !0, title: !0 },
        onCancel: H.noop,
        beforeLoad: H.noop,
        afterLoad: H.noop,
        beforeShow: H.noop,
        afterShow: H.noop,
        beforeChange: H.noop,
        beforeClose: H.noop,
        afterClose: H.noop
      },
      group: {},
      opts: {},
      previous: null,
      coming: null,
      current: null,
      isActive: !1,
      isOpen: !1,
      isOpened: !1,
      wrap: null,
      skin: null,
      outer: null,
      inner: null,
      player: { timer: null, isActive: !1 },
      ajaxLoad: null,
      imgPreload: null,
      transitions: {},
      helpers: {},
      open: function(u, d) {
        if (u && (H.isPlainObject(d) || (d = {}), !1 !== O.close(!0)))
          return (
            H.isArray(u) || (u = h(u) ? H(u).get() : [u]),
            H.each(u, function(e, t) {
              var n,
                i,
                o,
                r,
                a,
                s,
                l,
                c = {};
              "object" === H.type(t) &&
                (t.nodeType && (t = H(t)),
                h(t)
                  ? ((c = {
                      href: t.data("fancybox-href") || t.attr("href"),
                      title: H("<div/>")
                        .text(t.data("fancybox-title") || t.attr("title") || "")
                        .html(),
                      isDom: !0,
                      element: t
                    }),
                    H.metadata && H.extend(!0, c, t.metadata()))
                  : (c = t)),
                (n = d.href || c.href || (p(t) ? t : null)),
                (i = d.title !== f ? d.title : c.title || ""),
                !(r = (o = d.content || c.content)
                  ? "html"
                  : d.type || c.type) &&
                  c.isDom &&
                  ((r = t.data("fancybox-type")) ||
                    (r = (a = t.prop("class").match(/fancybox\.(\w+)/))
                      ? a[1]
                      : null)),
                p(n) &&
                  (r ||
                    (O.isImage(n)
                      ? (r = "image")
                      : O.isSWF(n)
                      ? (r = "swf")
                      : "#" === n.charAt(0)
                      ? (r = "inline")
                      : p(t) && ((r = "html"), (o = t))),
                  "ajax" === r &&
                    ((n = (s = n.split(/\s+/, 2)).shift()), (l = s.shift()))),
                o ||
                  ("inline" === r
                    ? n
                      ? (o = H(p(n) ? n.replace(/.*(?=#[^\s]+$)/, "") : n))
                      : c.isDom && (o = t)
                    : "html" === r
                    ? (o = n)
                    : r || n || !c.isDom || ((r = "inline"), (o = t))),
                H.extend(c, {
                  href: n,
                  type: r,
                  content: o,
                  title: i,
                  selector: l
                }),
                (u[e] = c);
            }),
            (O.opts = H.extend(!0, {}, O.defaults, d)),
            d.keys !== f &&
              (O.opts.keys = !!d.keys && H.extend({}, O.defaults.keys, d.keys)),
            (O.group = u),
            O._start(O.opts.index)
          );
      },
      cancel: function() {
        var e = O.coming;
        (e && !1 === O.trigger("onCancel")) ||
          (O.hideLoading(),
          e &&
            (O.ajaxLoad && O.ajaxLoad.abort(),
            (O.ajaxLoad = null),
            O.imgPreload && (O.imgPreload.onload = O.imgPreload.onerror = null),
            e.wrap &&
              e.wrap
                .stop(!0, !0)
                .trigger("onReset")
                .remove(),
            (O.coming = null),
            O.current || O._afterZoomOut(e)));
      },
      close: function(e) {
        O.cancel(),
          !1 !== O.trigger("beforeClose") &&
            (O.unbindEvents(),
            O.isActive &&
              (O.isOpen && !0 !== e
                ? ((O.isOpen = O.isOpened = !1),
                  (O.isClosing = !0),
                  H(".fancybox-item, .fancybox-nav").remove(),
                  O.wrap.stop(!0, !0).removeClass("fancybox-opened"),
                  O.transitions[O.current.closeMethod]())
                : (H(".fancybox-wrap")
                    .stop(!0)
                    .trigger("onReset")
                    .remove(),
                  O._afterZoomOut())));
      },
      play: function(e) {
        var t = function() {
            clearTimeout(O.player.timer);
          },
          n = function() {
            t(),
              O.current &&
                O.player.isActive &&
                (O.player.timer = setTimeout(O.next, O.current.playSpeed));
          },
          i = function() {
            t(),
              c.unbind(".player"),
              (O.player.isActive = !1),
              O.trigger("onPlayEnd");
          },
          o = function() {
            O.current &&
              (O.current.loop || O.current.index < O.group.length - 1) &&
              ((O.player.isActive = !0),
              c.bind({
                "onCancel.player beforeClose.player": i,
                "onUpdate.player": n,
                "beforeLoad.player": t
              }),
              n(),
              O.trigger("onPlayStart"));
          };
        !0 === e || (!O.player.isActive && !1 !== e) ? o() : i();
      },
      next: function(e) {
        var t = O.current;
        t && (p(e) || (e = t.direction.next), O.jumpto(t.index + 1, e, "next"));
      },
      prev: function(e) {
        var t = O.current;
        t && (p(e) || (e = t.direction.prev), O.jumpto(t.index - 1, e, "prev"));
      },
      jumpto: function(e, t, n) {
        var i = O.current;
        i &&
          ((e = P(e)),
          (O.direction = t || i.direction[e >= i.index ? "next" : "prev"]),
          (O.router = n || "jumpto"),
          i.loop &&
            (e < 0 && (e = i.group.length + (e % i.group.length)),
            (e %= i.group.length)),
          i.group[e] !== f && (O.cancel(), O._start(e)));
      },
      reposition: function(e, t) {
        var n,
          i = O.current,
          o = i ? i.wrap : null;
        o &&
          ((n = O._getPosition(t)),
          e && "scroll" === e.type
            ? (delete n.position, o.stop(!0, !0).animate(n, 200))
            : (o.css(n), (i.pos = H.extend({}, i.dim, n))));
      },
      update: function(t) {
        var n = t && t.originalEvent && t.originalEvent.type,
          i = !n || "orientationchange" === n;
        i && (clearTimeout(s), (s = null)),
          O.isOpen &&
            !s &&
            (s = setTimeout(
              function() {
                var e = O.current;
                e &&
                  !O.isClosing &&
                  (O.wrap.removeClass("fancybox-tmp"),
                  (i || "load" === n || ("resize" === n && e.autoResize)) &&
                    O._setDimension(),
                  ("scroll" === n && e.canShrink) || O.reposition(t),
                  O.trigger("onUpdate"),
                  (s = null));
              },
              i && !l ? 0 : 300
            ));
      },
      toggle: function(e) {
        O.isOpen &&
          ((O.current.fitToView =
            "boolean" === H.type(e) ? e : !O.current.fitToView),
          l &&
            (O.wrap.removeAttr("style").addClass("fancybox-tmp"),
            O.trigger("onUpdate")),
          O.update());
      },
      hideLoading: function() {
        c.unbind(".loading"), H("#fancybox-loading").remove();
      },
      showLoading: function() {
        var e, t;
        O.hideLoading(),
          (e = H(O.opts.tpl.loading)
            .click(O.cancel)
            .appendTo("body")),
          c.bind("keydown.loading", function(e) {
            27 === (e.which || e.keyCode) && (e.preventDefault(), O.cancel());
          }),
          O.defaults.fixed ||
            ((t = O.getViewport()),
            e.css({
              position: "absolute",
              top: 0.5 * t.h + t.y,
              left: 0.5 * t.w + t.x
            })),
          O.trigger("onLoading");
      },
      getViewport: function() {
        var e = (O.current && O.current.locked) || !1,
          t = { x: i.scrollLeft(), y: i.scrollTop() };
        return (
          e && e.length
            ? ((t.w = e[0].clientWidth), (t.h = e[0].clientHeight))
            : ((t.w = l && o.innerWidth ? o.innerWidth : i.width()),
              (t.h = l && o.innerHeight ? o.innerHeight : i.height())),
          t
        );
      },
      unbindEvents: function() {
        O.wrap && h(O.wrap) && O.wrap.unbind(".fb"),
          c.unbind(".fb"),
          i.unbind(".fb");
      },
      bindEvents: function() {
        var t,
          s = O.current;
        s &&
          (i.bind(
            "orientationchange.fb" +
              (l ? "" : " resize.fb") +
              (s.autoCenter && !s.locked ? " scroll.fb" : ""),
            O.update
          ),
          (t = s.keys) &&
            c.bind("keydown.fb", function(n) {
              var i = n.which || n.keyCode,
                e = n.target || n.srcElement;
              if (27 === i && O.coming) return !1;
              n.ctrlKey ||
                n.altKey ||
                n.shiftKey ||
                n.metaKey ||
                (e && (e.type || H(e).is("[contenteditable]"))) ||
                H.each(t, function(e, t) {
                  return 1 < s.group.length && t[i] !== f
                    ? (O[e](t[i]), n.preventDefault(), !1)
                    : -1 < H.inArray(i, t)
                    ? (O[e](), n.preventDefault(), !1)
                    : void 0;
                });
            }),
          H.fn.mousewheel &&
            s.mouseWheel &&
            O.wrap.bind("mousewheel.fb", function(e, t, n, i) {
              for (
                var o = e.target || null, r = H(o), a = !1;
                r.length &&
                !(a || r.is(".fancybox-skin") || r.is(".fancybox-wrap"));

              )
                (a = u(r[0])), (r = H(r).parent());
              0 === t ||
                a ||
                (1 < O.group.length &&
                  !s.canShrink &&
                  (0 < i || 0 < n
                    ? O.prev(0 < i ? "down" : "left")
                    : (i < 0 || n < 0) && O.next(i < 0 ? "up" : "right"),
                  e.preventDefault()));
            }));
      },
      trigger: function(n, e) {
        var t,
          i = e || O.coming || O.current;
        if (i) {
          if (
            (H.isFunction(i[n]) &&
              (t = i[n].apply(i, Array.prototype.slice.call(arguments, 1))),
            !1 === t)
          )
            return !1;
          i.helpers &&
            H.each(i.helpers, function(e, t) {
              t &&
                O.helpers[e] &&
                H.isFunction(O.helpers[e][n]) &&
                O.helpers[e][n](H.extend(!0, {}, O.helpers[e].defaults, t), i);
            });
        }
        c.trigger(n);
      },
      isImage: function(e) {
        return (
          p(e) &&
          e.match(
            /(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i
          )
        );
      },
      isSWF: function(e) {
        return p(e) && e.match(/\.(swf)((\?|#).*)?$/i);
      },
      _start: function(e) {
        var t,
          n,
          i,
          o,
          r,
          a = {};
        if (((e = P(e)), !(t = O.group[e] || null))) return !1;
        if (
          ((o = (a = H.extend(!0, {}, O.opts, t)).margin),
          (r = a.padding),
          "number" === H.type(o) && (a.margin = [o, o, o, o]),
          "number" === H.type(r) && (a.padding = [r, r, r, r]),
          a.modal &&
            H.extend(!0, a, {
              closeBtn: !1,
              closeClick: !1,
              nextClick: !1,
              arrows: !1,
              mouseWheel: !1,
              keys: null,
              helpers: { overlay: { closeClick: !1 } }
            }),
          a.autoSize && (a.autoWidth = a.autoHeight = !0),
          "auto" === a.width && (a.autoWidth = !0),
          "auto" === a.height && (a.autoHeight = !0),
          (a.group = O.group),
          (a.index = e),
          (O.coming = a),
          !1 !== O.trigger("beforeLoad"))
        ) {
          if (((i = a.type), (n = a.href), !i))
            return (
              (O.coming = null),
              !(!O.current || !O.router || "jumpto" === O.router) &&
                ((O.current.index = e), O[O.router](O.direction))
            );
          if (
            ((O.isActive = !0),
            ("image" !== i && "swf" !== i) ||
              ((a.autoHeight = a.autoWidth = !1), (a.scrolling = "visible")),
            "image" === i && (a.aspectRatio = !0),
            "iframe" === i && l && (a.scrolling = "scroll"),
            (a.wrap = H(a.tpl.wrap)
              .addClass(
                "fancybox-" +
                  (l ? "mobile" : "desktop") +
                  " fancybox-type-" +
                  i +
                  " fancybox-tmp " +
                  a.wrapCSS
              )
              .appendTo(a.parent || "body")),
            H.extend(a, {
              skin: H(".fancybox-skin", a.wrap),
              outer: H(".fancybox-outer", a.wrap),
              inner: H(".fancybox-inner", a.wrap)
            }),
            H.each(["Top", "Right", "Bottom", "Left"], function(e, t) {
              a.skin.css("padding" + t, R(a.padding[e]));
            }),
            O.trigger("onReady"),
            "inline" === i || "html" === i)
          ) {
            if (!a.content || !a.content.length) return O._error("content");
          } else if (!n) return O._error("href");
          "image" === i
            ? O._loadImage()
            : "ajax" === i
            ? O._loadAjax()
            : "iframe" === i
            ? O._loadIframe()
            : O._afterLoad();
        } else O.coming = null;
      },
      _error: function(e) {
        H.extend(O.coming, {
          type: "html",
          autoWidth: !0,
          autoHeight: !0,
          minWidth: 0,
          minHeight: 0,
          scrolling: "no",
          hasError: e,
          content: O.coming.tpl.error
        }),
          O._afterLoad();
      },
      _loadImage: function() {
        var e = (O.imgPreload = new Image());
        (e.onload = function() {
          (this.onload = this.onerror = null),
            (O.coming.width = this.width / O.opts.pixelRatio),
            (O.coming.height = this.height / O.opts.pixelRatio),
            O._afterLoad();
        }),
          (e.onerror = function() {
            (this.onload = this.onerror = null), O._error("image");
          }),
          (e.src = O.coming.href),
          !0 !== e.complete && O.showLoading();
      },
      _loadAjax: function() {
        var n = O.coming;
        O.showLoading(),
          (O.ajaxLoad = H.ajax(
            H.extend({}, n.ajax, {
              url: n.href,
              error: function(e, t) {
                O.coming && "abort" !== t
                  ? O._error("ajax", e)
                  : O.hideLoading();
              },
              success: function(e, t) {
                "success" === t && ((n.content = e), O._afterLoad());
              }
            })
          ));
      },
      _loadIframe: function() {
        var e = O.coming,
          t = H(e.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
            .attr("scrolling", l ? "auto" : e.iframe.scrolling)
            .attr("src", e.href);
        H(e.wrap).bind("onReset", function() {
          try {
            H(this)
              .find("iframe")
              .hide()
              .attr("src", "//about:blank")
              .end()
              .empty();
          } catch (e) {}
        }),
          e.iframe.preload &&
            (O.showLoading(),
            t.one("load", function() {
              H(this).data("ready", 1),
                l || H(this).bind("load.fb", O.update),
                H(this)
                  .parents(".fancybox-wrap")
                  .width("100%")
                  .removeClass("fancybox-tmp")
                  .show(),
                O._afterLoad();
            })),
          (e.content = t.appendTo(e.inner)),
          e.iframe.preload || O._afterLoad();
      },
      _preloadImages: function() {
        var e,
          t,
          n = O.group,
          i = O.current,
          o = n.length,
          r = i.preload ? Math.min(i.preload, o - 1) : 0;
        for (t = 1; t <= r; t += 1)
          "image" === (e = n[(i.index + t) % o]).type &&
            e.href &&
            (new Image().src = e.href);
      },
      _afterLoad: function() {
        var e,
          n,
          t,
          i,
          o,
          r,
          a = O.coming,
          s = O.current,
          l = "fancybox-placeholder";
        if ((O.hideLoading(), a && !1 !== O.isActive)) {
          if (!1 === O.trigger("afterLoad", a, s))
            return (
              a.wrap
                .stop(!0)
                .trigger("onReset")
                .remove(),
              void (O.coming = null)
            );
          switch (
            (s &&
              (O.trigger("beforeChange", s),
              s.wrap
                .stop(!0)
                .removeClass("fancybox-opened")
                .find(".fancybox-item, .fancybox-nav")
                .remove()),
            O.unbindEvents(),
            (n = (e = a).content),
            (t = a.type),
            (i = a.scrolling),
            H.extend(O, {
              wrap: e.wrap,
              skin: e.skin,
              outer: e.outer,
              inner: e.inner,
              current: e,
              previous: s
            }),
            (o = e.href),
            t)
          ) {
            case "inline":
            case "ajax":
            case "html":
              e.selector
                ? (n = H("<div>")
                    .html(n)
                    .find(e.selector))
                : h(n) &&
                  (n.data(l) ||
                    n.data(
                      l,
                      H('<div class="' + l + '"></div>')
                        .insertAfter(n)
                        .hide()
                    ),
                  (n = n.show().detach()),
                  e.wrap.bind("onReset", function() {
                    H(this).find(n).length &&
                      n
                        .hide()
                        .replaceAll(n.data(l))
                        .data(l, !1);
                  }));
              break;
            case "image":
              n = e.tpl.image.replace(/\{href\}/g, o);
              break;
            case "swf":
              (n =
                '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' +
                o +
                '"></param>'),
                (r = ""),
                H.each(e.swf, function(e, t) {
                  (n += '<param name="' + e + '" value="' + t + '"></param>'),
                    (r += " " + e + '="' + t + '"');
                }),
                (n +=
                  '<embed src="' +
                  o +
                  '" type="application/x-shockwave-flash" width="100%" height="100%"' +
                  r +
                  "></embed></object>");
          }
          (h(n) && n.parent().is(e.inner)) || e.inner.append(n),
            O.trigger("beforeShow"),
            e.inner.css(
              "overflow",
              "yes" === i ? "scroll" : "no" === i ? "hidden" : i
            ),
            O._setDimension(),
            O.reposition(),
            (O.isOpen = !1),
            (O.coming = null),
            O.bindEvents(),
            O.isOpened
              ? s.prevMethod && O.transitions[s.prevMethod]()
              : H(".fancybox-wrap")
                  .not(e.wrap)
                  .stop(!0)
                  .trigger("onReset")
                  .remove(),
            O.transitions[O.isOpened ? e.nextMethod : e.openMethod](),
            O._preloadImages();
        }
      },
      _setDimension: function() {
        var e,
          t,
          n,
          i,
          o,
          r,
          a,
          s,
          l,
          c,
          u,
          d,
          f,
          h,
          p,
          g = O.getViewport(),
          m = 0,
          v = !1,
          y = !1,
          w = O.wrap,
          x = O.skin,
          b = O.inner,
          C = O.current,
          _ = C.width,
          T = C.height,
          S = C.minWidth,
          k = C.minHeight,
          E = C.maxWidth,
          D = C.maxHeight,
          $ = C.scrolling,
          j = C.scrollOutside ? C.scrollbarWidth : 0,
          A = C.margin,
          N = P(A[1] + A[3]),
          L = P(A[0] + A[2]);
        if (
          (w
            .add(x)
            .add(b)
            .width("auto")
            .height("auto")
            .removeClass("fancybox-tmp"),
          (n = N + (e = P(x.outerWidth(!0) - x.width()))),
          (i = L + (t = P(x.outerHeight(!0) - x.height()))),
          (o = B(_) ? ((g.w - n) * P(_)) / 100 : _),
          (r = B(T) ? ((g.h - i) * P(T)) / 100 : T),
          "iframe" === C.type)
        ) {
          if (((h = C.content), C.autoHeight && h && 1 === h.data("ready")))
            try {
              h[0].contentWindow.document.location &&
                (b.width(o).height(9999),
                (p = h.contents().find("body")),
                j && p.css("overflow-x", "hidden"),
                (r = p.outerHeight(!0)));
            } catch (M) {}
        } else
          (C.autoWidth || C.autoHeight) &&
            (b.addClass("fancybox-tmp"),
            C.autoWidth || b.width(o),
            C.autoHeight || b.height(r),
            C.autoWidth && (o = b.width()),
            C.autoHeight && (r = b.height()),
            b.removeClass("fancybox-tmp"));
        if (
          ((_ = P(o)),
          (T = P(r)),
          (l = o / r),
          (S = P(B(S) ? P(S, "w") - n : S)),
          (E = P(B(E) ? P(E, "w") - n : E)),
          (k = P(B(k) ? P(k, "h") - i : k)),
          (a = E),
          (s = D = P(B(D) ? P(D, "h") - i : D)),
          C.fitToView &&
            ((E = Math.min(g.w - n, E)), (D = Math.min(g.h - i, D))),
          (d = g.w - N),
          (f = g.h - L),
          C.aspectRatio
            ? (E < _ && (T = P((_ = E) / l)),
              D < T && (_ = P((T = D) * l)),
              _ < S && (T = P((_ = S) / l)),
              T < k && (_ = P((T = k) * l)))
            : ((_ = Math.max(S, Math.min(_, E))),
              C.autoHeight &&
                "iframe" !== C.type &&
                (b.width(_), (T = b.height())),
              (T = Math.max(k, Math.min(T, D)))),
          C.fitToView)
        )
          if (
            (b.width(_).height(T),
            w.width(_ + e),
            (c = w.width()),
            (u = w.height()),
            C.aspectRatio)
          )
            for (; (d < c || f < u) && S < _ && k < T && !(19 < m++); )
              (T = Math.max(k, Math.min(D, T - 10))),
                (_ = P(T * l)) < S && (T = P((_ = S) / l)),
                E < _ && (T = P((_ = E) / l)),
                b.width(_).height(T),
                w.width(_ + e),
                (c = w.width()),
                (u = w.height());
          else
            (_ = Math.max(S, Math.min(_, _ - (c - d)))),
              (T = Math.max(k, Math.min(T, T - (u - f))));
        j && "auto" === $ && T < r && _ + e + j < d && (_ += j),
          b.width(_).height(T),
          w.width(_ + e),
          (c = w.width()),
          (u = w.height()),
          (v = (d < c || f < u) && S < _ && k < T),
          (y = C.aspectRatio
            ? _ < a && T < s && _ < o && T < r
            : (_ < a || T < s) && (_ < o || T < r)),
          H.extend(C, {
            dim: { width: R(c), height: R(u) },
            origWidth: o,
            origHeight: r,
            canShrink: v,
            canExpand: y,
            wPadding: e,
            hPadding: t,
            wrapSpace: u - x.outerHeight(!0),
            skinSpace: x.height() - T
          }),
          !h && C.autoHeight && k < T && T < D && !y && b.height("auto");
      },
      _getPosition: function(e) {
        var t = O.current,
          n = O.getViewport(),
          i = t.margin,
          o = O.wrap.width() + i[1] + i[3],
          r = O.wrap.height() + i[0] + i[2],
          a = { position: "absolute", top: i[0], left: i[3] };
        return (
          t.autoCenter && t.fixed && !e && r <= n.h && o <= n.w
            ? (a.position = "fixed")
            : t.locked || ((a.top += n.y), (a.left += n.x)),
          (a.top = R(Math.max(a.top, a.top + (n.h - r) * t.topRatio))),
          (a.left = R(Math.max(a.left, a.left + (n.w - o) * t.leftRatio))),
          a
        );
      },
      _afterZoomIn: function() {
        var t = O.current;
        t &&
          ((O.isOpen = O.isOpened = !0),
          O.wrap
            .css("overflow", "visible")
            .addClass("fancybox-opened")
            .hide()
            .show(0),
          O.update(),
          (t.closeClick || (t.nextClick && 1 < O.group.length)) &&
            O.inner.css("cursor", "pointer").bind("click.fb", function(e) {
              H(e.target).is("a") ||
                H(e.target)
                  .parent()
                  .is("a") ||
                (e.preventDefault(), O[t.closeClick ? "close" : "next"]());
            }),
          t.closeBtn &&
            H(t.tpl.closeBtn)
              .appendTo(O.skin)
              .bind("click.fb", function(e) {
                e.preventDefault(), O.close();
              }),
          t.arrows &&
            1 < O.group.length &&
            ((t.loop || 0 < t.index) &&
              H(t.tpl.prev)
                .appendTo(O.outer)
                .bind("click.fb", O.prev),
            (t.loop || t.index < O.group.length - 1) &&
              H(t.tpl.next)
                .appendTo(O.outer)
                .bind("click.fb", O.next)),
          O.trigger("afterShow"),
          t.loop || t.index !== t.group.length - 1
            ? O.opts.autoPlay &&
              !O.player.isActive &&
              ((O.opts.autoPlay = !1), O.play(!0))
            : O.play(!1));
      },
      _afterZoomOut: function(e) {
        (e = e || O.current),
          H(".fancybox-wrap")
            .trigger("onReset")
            .remove(),
          H.extend(O, {
            group: {},
            opts: {},
            router: !1,
            current: null,
            isActive: !1,
            isOpened: !1,
            isOpen: !1,
            isClosing: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null
          }),
          O.trigger("afterClose", e);
      }
    }),
      (O.transitions = {
        getOrigPosition: function() {
          var e = O.current,
            t = e.element,
            n = e.orig,
            i = {},
            o = 50,
            r = 50,
            a = e.hPadding,
            s = e.wPadding,
            l = O.getViewport();
          return (
            !n &&
              e.isDom &&
              t.is(":visible") &&
              ((n = t.find("img:first")).length || (n = t)),
            h(n)
              ? ((i = n.offset()),
                n.is("img") && ((o = n.outerWidth()), (r = n.outerHeight())))
              : ((i.top = l.y + (l.h - r) * e.topRatio),
                (i.left = l.x + (l.w - o) * e.leftRatio)),
            ("fixed" === O.wrap.css("position") || e.locked) &&
              ((i.top -= l.y), (i.left -= l.x)),
            (i = {
              top: R(i.top - a * e.topRatio),
              left: R(i.left - s * e.leftRatio),
              width: R(o + s),
              height: R(r + a)
            })
          );
        },
        step: function(e, t) {
          var n,
            i,
            o = t.prop,
            r = O.current,
            a = r.wrapSpace,
            s = r.skinSpace;
          ("width" !== o && "height" !== o) ||
            ((n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start)),
            O.isClosing && (n = 1 - n),
            (i = e - ("width" === o ? r.wPadding : r.hPadding)),
            O.skin[o](P("width" === o ? i : i - a * n)),
            O.inner[o](P("width" === o ? i : i - a * n - s * n)));
        },
        zoomIn: function() {
          var e = O.current,
            t = e.pos,
            n = e.openEffect,
            i = "elastic" === n,
            o = H.extend({ opacity: 1 }, t);
          delete o.position,
            i
              ? ((t = this.getOrigPosition()),
                e.openOpacity && (t.opacity = 0.1))
              : "fade" === n && (t.opacity = 0.1),
            O.wrap
              .css(t)
              .animate(o, {
                duration: "none" === n ? 0 : e.openSpeed,
                easing: e.openEasing,
                step: i ? this.step : null,
                complete: O._afterZoomIn
              });
        },
        zoomOut: function() {
          var e = O.current,
            t = e.closeEffect,
            n = "elastic" === t,
            i = { opacity: 0.1 };
          n &&
            ((i = this.getOrigPosition()), e.closeOpacity && (i.opacity = 0.1)),
            O.wrap.animate(i, {
              duration: "none" === t ? 0 : e.closeSpeed,
              easing: e.closeEasing,
              step: n ? this.step : null,
              complete: O._afterZoomOut
            });
        },
        changeIn: function() {
          var e,
            t = O.current,
            n = t.nextEffect,
            i = t.pos,
            o = { opacity: 1 },
            r = O.direction,
            a = 200;
          (i.opacity = 0.1),
            "elastic" === n &&
              ((e = "down" === r || "up" === r ? "top" : "left"),
              "down" === r || "right" === r
                ? ((i[e] = R(P(i[e]) - a)), (o[e] = "+=" + a + "px"))
                : ((i[e] = R(P(i[e]) + a)), (o[e] = "-=" + a + "px"))),
            "none" === n
              ? O._afterZoomIn()
              : O.wrap
                  .css(i)
                  .animate(o, {
                    duration: t.nextSpeed,
                    easing: t.nextEasing,
                    complete: O._afterZoomIn
                  });
        },
        changeOut: function() {
          var e = O.previous,
            t = e.prevEffect,
            n = { opacity: 0.1 },
            i = O.direction,
            o = 200;
          "elastic" === t &&
            (n["down" === i || "up" === i ? "top" : "left"] =
              ("up" === i || "left" === i ? "-" : "+") + "=" + o + "px"),
            e.wrap.animate(n, {
              duration: "none" === t ? 0 : e.prevSpeed,
              easing: e.prevEasing,
              complete: function() {
                H(this)
                  .trigger("onReset")
                  .remove();
              }
            });
        }
      }),
      (O.helpers.overlay = {
        defaults: {
          closeClick: !0,
          speedOut: 200,
          showEarly: !0,
          css: {},
          locked: !l,
          fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: H("html"),
        create: function(e) {
          var t;
          (e = H.extend({}, this.defaults, e)),
            this.overlay && this.close(),
            (t = O.coming ? O.coming.parent : e.parent),
            (this.overlay = H('<div class="fancybox-overlay"></div>').appendTo(
              t && t.length ? t : "body"
            )),
            (this.fixed = !1),
            e.fixed &&
              O.defaults.fixed &&
              (this.overlay.addClass("fancybox-overlay-fixed"),
              (this.fixed = !0));
        },
        open: function(e) {
          var t = this;
          (e = H.extend({}, this.defaults, e)),
            this.overlay
              ? this.overlay
                  .unbind(".overlay")
                  .width("auto")
                  .height("auto")
              : this.create(e),
            this.fixed ||
              (i.bind("resize.overlay", H.proxy(this.update, this)),
              this.update()),
            e.closeClick &&
              this.overlay.bind("click.overlay", function(e) {
                if (H(e.target).hasClass("fancybox-overlay"))
                  return O.isActive ? O.close() : t.close(), !1;
              }),
            this.overlay.css(e.css).show();
        },
        close: function() {
          i.unbind("resize.overlay"),
            this.el.hasClass("fancybox-lock") &&
              (H(".fancybox-margin").removeClass("fancybox-margin"),
              this.el.removeClass("fancybox-lock"),
              i.scrollTop(this.scrollV).scrollLeft(this.scrollH)),
            H(".fancybox-overlay")
              .remove()
              .hide(),
            H.extend(this, { overlay: null, fixed: !1 });
        },
        update: function() {
          var e,
            t = "100%";
          this.overlay.width(t).height("100%"),
            a
              ? ((e = Math.max(
                  n.documentElement.offsetWidth,
                  n.body.offsetWidth
                )),
                c.width() > e && (t = c.width()))
              : c.width() > i.width() && (t = c.width()),
            this.overlay.width(t).height(c.height());
        },
        onReady: function(e, t) {
          var n = this.overlay;
          H(".fancybox-overlay").stop(!0, !0),
            n || this.create(e),
            e.locked &&
              this.fixed &&
              t.fixed &&
              ((t.locked = this.overlay.append(t.wrap)), (t.fixed = !1)),
            !0 === e.showEarly && this.beforeShow.apply(this, arguments);
        },
        beforeShow: function(e, t) {
          t.locked &&
            !this.el.hasClass("fancybox-lock") &&
            (!1 !== this.fixPosition &&
              H("*:not(object)")
                .filter(function() {
                  return (
                    "fixed" === H(this).css("position") &&
                    !H(this).hasClass("fancybox-overlay") &&
                    !H(this).hasClass("fancybox-wrap")
                  );
                })
                .addClass("fancybox-margin"),
            this.el.addClass("fancybox-margin"),
            (this.scrollV = i.scrollTop()),
            (this.scrollH = i.scrollLeft()),
            this.el.addClass("fancybox-lock"),
            i.scrollTop(this.scrollV).scrollLeft(this.scrollH)),
            this.open(e);
        },
        onUpdate: function() {
          this.fixed || this.update();
        },
        afterClose: function(e) {
          this.overlay &&
            !O.coming &&
            this.overlay.fadeOut(e.speedOut, H.proxy(this.close, this));
        }
      }),
      (O.helpers.title = {
        defaults: { type: "float", position: "bottom" },
        beforeShow: function(e) {
          var t,
            n,
            i = O.current,
            o = i.title,
            r = e.type;
          if (
            (H.isFunction(o) && (o = o.call(i.element, i)),
            p(o) && "" !== H.trim(o))
          ) {
            switch (
              ((t = H(
                '<div class="fancybox-title fancybox-title-' +
                  r +
                  '-wrap">' +
                  o +
                  "</div>"
              )),
              r)
            ) {
              case "inside":
                n = O.skin;
                break;
              case "outside":
                n = O.wrap;
                break;
              case "over":
                n = O.inner;
                break;
              default:
                (n = O.skin),
                  t.appendTo("body"),
                  a && t.width(t.width()),
                  t.wrapInner('<span class="child"></span>'),
                  (O.current.margin[2] += Math.abs(P(t.css("margin-bottom"))));
            }
            t["top" === e.position ? "prependTo" : "appendTo"](n);
          }
        }
      }),
      (H.fn.fancybox = function(r) {
        var a,
          s = H(this),
          l = this.selector || "",
          e = function(e) {
            var t,
              n,
              i = H(this).blur(),
              o = a;
            e.ctrlKey ||
              e.altKey ||
              e.shiftKey ||
              e.metaKey ||
              i.is(".fancybox-wrap") ||
              ((t = r.groupAttr || "data-fancybox-group"),
              (n = i.attr(t)) || ((t = "rel"), (n = i.get(0)[t])),
              n &&
                "" !== n &&
                "nofollow" !== n &&
                (o = (i = (i = l.length ? H(l) : s).filter(
                  "[" + t + '="' + n + '"]'
                )).index(this)),
              (r.index = o),
              !1 !== O.open(i, r) && e.preventDefault());
          };
        return (
          (a = (r = r || {}).index || 0),
          l && !1 !== r.live
            ? c
                .undelegate(l, "click.fb-start")
                .delegate(
                  l + ":not('.fancybox-item, .fancybox-nav')",
                  "click.fb-start",
                  e
                )
            : s.unbind("click.fb-start").bind("click.fb-start", e),
          this.filter("[data-fancybox-start=1]").trigger("click"),
          this
        );
      }),
      c.ready(function() {
        var e, t, n, i;
        H.scrollbarWidth === f &&
          (H.scrollbarWidth = function() {
            var e = H(
                '<div style="width:50px;height:50px;overflow:auto"><div/></div>'
              ).appendTo("body"),
              t = e.children(),
              n = t.innerWidth() - t.height(99).innerWidth();
            return e.remove(), n;
          }),
          H.support.fixedPosition === f &&
            (H.support.fixedPosition =
              ((n = H('<div style="position:fixed;top:20px;"></div>').appendTo(
                "body"
              )),
              (i = 20 === n[0].offsetTop || 15 === n[0].offsetTop),
              n.remove(),
              i)),
          H.extend(O.defaults, {
            scrollbarWidth: H.scrollbarWidth(),
            fixed: H.support.fixedPosition,
            parent: H("body")
          }),
          (e = H(o).width()),
          r.addClass("fancybox-lock-test"),
          (t = H(o).width()),
          r.removeClass("fancybox-lock-test"),
          H(
            "<style type='text/css'>.fancybox-margin{margin-right:" +
              (t - e) +
              "px;}</style>"
          ).appendTo("head");
      });
  })(window, document, jQuery),
  (function(l) {
    "use strict";
    var e = l.fancybox,
      c = function(n, e, t) {
        return (
          (t = t || ""),
          "object" === l.type(t) && (t = l.param(t, !0)),
          l.each(e, function(e, t) {
            n = n.replace("$" + e, t || "");
          }),
          t.length && (n += (0 < n.indexOf("?") ? "&" : "?") + t),
          n
        );
      };
    e.helpers.media = {
      defaults: {
        youtube: {
          matcher: /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "opaque",
            enablejsapi: 1,
            ps: "docs",
            controls: 1
          },
          type: "iframe",
          url: "//www.youtube.com/embed/$3"
        },
        vimeo: {
          matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1
          },
          type: "iframe",
          url: "//player.vimeo.com/video/$1"
        },
        metacafe: {
          matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
          params: { autoPlay: "yes" },
          type: "swf",
          url: function(e, t, n) {
            return (
              (n.swf.flashVars = "playerVars=" + l.param(t, !0)),
              "//www.metacafe.com/fplayer/" + e[1] + "/.swf"
            );
          }
        },
        dailymotion: {
          matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
          params: { additionalInfos: 0, autoStart: 1 },
          type: "swf",
          url: "//www.dailymotion.com/swf/video/$1"
        },
        twitvid: {
          matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
          params: { autoplay: 0 },
          type: "iframe",
          url: "//www.twitvid.com/embed.php?guid=$1"
        },
        twitpic: {
          matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
          type: "image",
          url: "//twitpic.com/show/full/$1/"
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: "image",
          url: "//$1/p/$2/media/?size=l"
        },
        google_maps: {
          matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
          type: "iframe",
          url: function(e) {
            return (
              "//maps.google." +
              e[1] +
              "/" +
              e[3] +
              e[4] +
              "&output=" +
              (0 < e[4].indexOf("layer=c") ? "svembed" : "embed")
            );
          }
        }
      },
      beforeLoad: function(e, t) {
        var n,
          i,
          o,
          r,
          a = t.href || "",
          s = !1;
        for (n in e)
          if (e.hasOwnProperty(n) && ((i = e[n]), (o = a.match(i.matcher)))) {
            (s = i.type),
              (r = l.extend(
                !0,
                {},
                i.params,
                t[n] || (l.isPlainObject(e[n]) ? e[n].params : null)
              )),
              (a =
                "function" === l.type(i.url)
                  ? i.url.call(this, o, r, t)
                  : c(i.url, o, r));
            break;
          }
        s && ((t.href = a), (t.type = s), (t.autoHeight = !1));
      }
    };
  })(jQuery),
  (function(e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof exports
      ? (module.exports = e)
      : e(jQuery);
  })(function(f) {
    function t(e) {
      var t = e || window.event,
        n = v.call(arguments, 1),
        i = 0,
        o = 0,
        r = 0,
        a = 0,
        s = 0,
        l = 0;
      if (
        (((e = f.event.fix(t)).type = "mousewheel"),
        "detail" in t && (r = -1 * t.detail),
        "wheelDelta" in t && (r = t.wheelDelta),
        "wheelDeltaY" in t && (r = t.wheelDeltaY),
        "wheelDeltaX" in t && (o = -1 * t.wheelDeltaX),
        "axis" in t && t.axis === t.HORIZONTAL_AXIS && ((o = -1 * r), (r = 0)),
        (i = 0 === r ? o : r),
        "deltaY" in t && (i = r = -1 * t.deltaY),
        "deltaX" in t && ((o = t.deltaX), 0 === r && (i = -1 * o)),
        0 !== r || 0 !== o)
      ) {
        if (1 === t.deltaMode) {
          var c = f.data(this, "mousewheel-line-height");
          (i *= c), (r *= c), (o *= c);
        } else if (2 === t.deltaMode) {
          var u = f.data(this, "mousewheel-page-height");
          (i *= u), (r *= u), (o *= u);
        }
        if (
          ((a = Math.max(Math.abs(r), Math.abs(o))),
          (!m || a < m) && (p(t, (m = a)) && (m /= 40)),
          p(t, a) && ((i /= 40), (o /= 40), (r /= 40)),
          (i = Math[1 <= i ? "floor" : "ceil"](i / m)),
          (o = Math[1 <= o ? "floor" : "ceil"](o / m)),
          (r = Math[1 <= r ? "floor" : "ceil"](r / m)),
          y.settings.normalizeOffset && this.getBoundingClientRect)
        ) {
          var d = this.getBoundingClientRect();
          (s = e.clientX - d.left), (l = e.clientY - d.top);
        }
        return (
          (e.deltaX = o),
          (e.deltaY = r),
          (e.deltaFactor = m),
          (e.offsetX = s),
          (e.offsetY = l),
          (e.deltaMode = 0),
          n.unshift(e, i, o, r),
          g && clearTimeout(g),
          (g = setTimeout(h, 200)),
          (f.event.dispatch || f.event.handle).apply(this, n)
        );
      }
    }
    function h() {
      m = null;
    }
    function p(e, t) {
      return (
        y.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
      );
    }
    var g,
      m,
      e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      n =
        "onwheel" in document || 9 <= document.documentMode
          ? ["wheel"]
          : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      v = Array.prototype.slice;
    if (f.event.fixHooks)
      for (var i = e.length; i; ) f.event.fixHooks[e[--i]] = f.event.mouseHooks;
    var y = (f.event.special.mousewheel = {
      version: "3.1.12",
      setup: function() {
        if (this.addEventListener)
          for (var e = n.length; e; ) this.addEventListener(n[--e], t, !1);
        else this.onmousewheel = t;
        f.data(this, "mousewheel-line-height", y.getLineHeight(this)),
          f.data(this, "mousewheel-page-height", y.getPageHeight(this));
      },
      teardown: function() {
        if (this.removeEventListener)
          for (var e = n.length; e; ) this.removeEventListener(n[--e], t, !1);
        else this.onmousewheel = null;
        f.removeData(this, "mousewheel-line-height"),
          f.removeData(this, "mousewheel-page-height");
      },
      getLineHeight: function(e) {
        var t = f(e),
          n = t["offsetParent" in f.fn ? "offsetParent" : "parent"]();
        return (
          n.length || (n = f("body")),
          parseInt(n.css("fontSize"), 10) ||
            parseInt(t.css("fontSize"), 10) ||
            16
        );
      },
      getPageHeight: function(e) {
        return f(e).height();
      },
      settings: { adjustOldDeltas: !0, normalizeOffset: !0 }
    });
    f.fn.extend({
      mousewheel: function(e) {
        return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
      },
      unmousewheel: function(e) {
        return this.unbind("mousewheel", e);
      }
    });
  }),
  (function(e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof exports
      ? (module.exports = e)
      : e(jQuery);
  })(function(f) {
    function t(e) {
      var t = e || window.event,
        n = v.call(arguments, 1),
        i = 0,
        o = 0,
        r = 0,
        a = 0,
        s = 0,
        l = 0;
      if (
        (((e = f.event.fix(t)).type = "mousewheel"),
        "detail" in t && (r = -1 * t.detail),
        "wheelDelta" in t && (r = t.wheelDelta),
        "wheelDeltaY" in t && (r = t.wheelDeltaY),
        "wheelDeltaX" in t && (o = -1 * t.wheelDeltaX),
        "axis" in t && t.axis === t.HORIZONTAL_AXIS && ((o = -1 * r), (r = 0)),
        (i = 0 === r ? o : r),
        "deltaY" in t && (i = r = -1 * t.deltaY),
        "deltaX" in t && ((o = t.deltaX), 0 === r && (i = -1 * o)),
        0 !== r || 0 !== o)
      ) {
        if (1 === t.deltaMode) {
          var c = f.data(this, "mousewheel-line-height");
          (i *= c), (r *= c), (o *= c);
        } else if (2 === t.deltaMode) {
          var u = f.data(this, "mousewheel-page-height");
          (i *= u), (r *= u), (o *= u);
        }
        if (
          ((a = Math.max(Math.abs(r), Math.abs(o))),
          (!m || a < m) && (p(t, (m = a)) && (m /= 40)),
          p(t, a) && ((i /= 40), (o /= 40), (r /= 40)),
          (i = Math[1 <= i ? "floor" : "ceil"](i / m)),
          (o = Math[1 <= o ? "floor" : "ceil"](o / m)),
          (r = Math[1 <= r ? "floor" : "ceil"](r / m)),
          y.settings.normalizeOffset && this.getBoundingClientRect)
        ) {
          var d = this.getBoundingClientRect();
          (s = e.clientX - d.left), (l = e.clientY - d.top);
        }
        return (
          (e.deltaX = o),
          (e.deltaY = r),
          (e.deltaFactor = m),
          (e.offsetX = s),
          (e.offsetY = l),
          (e.deltaMode = 0),
          n.unshift(e, i, o, r),
          g && clearTimeout(g),
          (g = setTimeout(h, 200)),
          (f.event.dispatch || f.event.handle).apply(this, n)
        );
      }
    }
    function h() {
      m = null;
    }
    function p(e, t) {
      return (
        y.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
      );
    }
    var g,
      m,
      e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      n =
        "onwheel" in document || 9 <= document.documentMode
          ? ["wheel"]
          : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      v = Array.prototype.slice;
    if (f.event.fixHooks)
      for (var i = e.length; i; ) f.event.fixHooks[e[--i]] = f.event.mouseHooks;
    var y = (f.event.special.mousewheel = {
      version: "3.1.12",
      setup: function() {
        if (this.addEventListener)
          for (var e = n.length; e; ) this.addEventListener(n[--e], t, !1);
        else this.onmousewheel = t;
        f.data(this, "mousewheel-line-height", y.getLineHeight(this)),
          f.data(this, "mousewheel-page-height", y.getPageHeight(this));
      },
      teardown: function() {
        if (this.removeEventListener)
          for (var e = n.length; e; ) this.removeEventListener(n[--e], t, !1);
        else this.onmousewheel = null;
        f.removeData(this, "mousewheel-line-height"),
          f.removeData(this, "mousewheel-page-height");
      },
      getLineHeight: function(e) {
        var t = f(e),
          n = t["offsetParent" in f.fn ? "offsetParent" : "parent"]();
        return (
          n.length || (n = f("body")),
          parseInt(n.css("fontSize"), 10) ||
            parseInt(t.css("fontSize"), 10) ||
            16
        );
      },
      getPageHeight: function(e) {
        return f(e).height();
      },
      settings: { adjustOldDeltas: !0, normalizeOffset: !0 }
    });
    f.fn.extend({
      mousewheel: function(e) {
        return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
      },
      unmousewheel: function(e) {
        return this.unbind("mousewheel", e);
      }
    });
  }),
  (function(e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "undefined" != typeof module && module.exports
      ? (module.exports = e)
      : e(jQuery, window, document);
  })(function(ae) {
    var e, t, n, i, o;
    (e = function() {
      var B,
        h = "mCustomScrollbar",
        P = "mCS",
        i = ".mCustomScrollbar",
        o = {
          setTop: 0,
          setLeft: 0,
          axis: "y",
          scrollbarPosition: "inside",
          scrollInertia: 950,
          autoDraggerLength: !0,
          alwaysShowScrollbar: 0,
          snapOffset: 0,
          mouseWheel: {
            enable: !0,
            scrollAmount: "auto",
            axis: "y",
            deltaFactor: "auto",
            disableOver: ["select", "option", "keygen", "datalist", "textarea"]
          },
          scrollButtons: { scrollType: "stepless", scrollAmount: "auto" },
          keyboard: {
            enable: !0,
            scrollType: "stepless",
            scrollAmount: "auto"
          },
          contentTouchScroll: 25,
          documentTouchScroll: !0,
          advanced: {
            autoScrollOnFocus:
              "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
            updateOnContentResize: !0,
            updateOnImageLoad: "auto",
            autoUpdateTimeout: 60
          },
          theme: "light",
          callbacks: {
            onTotalScrollOffset: 0,
            onTotalScrollBackOffset: 0,
            alwaysTriggerOffsets: !0
          }
        },
        s = 0,
        r = {},
        m = window.attachEvent && !window.addEventListener ? 1 : 0,
        R = !1,
        b = [
          "mCSB_dragger_onDrag",
          "mCSB_scrollTools_onDrag",
          "mCS_img_loaded",
          "mCS_disabled",
          "mCS_destroyed",
          "mCS_no_scrollbar",
          "mCS-autoHide",
          "mCS-dir-rtl",
          "mCS_no_scrollbar_y",
          "mCS_no_scrollbar_x",
          "mCS_y_hidden",
          "mCS_x_hidden",
          "mCSB_draggerContainer",
          "mCSB_buttonUp",
          "mCSB_buttonDown",
          "mCSB_buttonLeft",
          "mCSB_buttonRight"
        ],
        p = {
          init: function(a) {
            a = ae.extend(!0, {}, o, a);
            var e = c.call(this);
            if (a.live) {
              var t = a.liveSelector || this.selector || i,
                n = ae(t);
              if ("off" === a.live) return void u(t);
              r[t] = setTimeout(function() {
                n.mCustomScrollbar(a), "once" === a.live && n.length && u(t);
              }, 500);
            } else u(t);
            return (
              (a.setWidth = a.set_width ? a.set_width : a.setWidth),
              (a.setHeight = a.set_height ? a.set_height : a.setHeight),
              (a.axis = a.horizontalScroll ? "x" : d(a.axis)),
              (a.scrollInertia =
                0 < a.scrollInertia && a.scrollInertia < 17
                  ? 17
                  : a.scrollInertia),
              "object" != typeof a.mouseWheel &&
                1 == a.mouseWheel &&
                (a.mouseWheel = {
                  enable: !0,
                  scrollAmount: "auto",
                  axis: "y",
                  preventDefault: !1,
                  deltaFactor: "auto",
                  normalizeDelta: !1,
                  invert: !1
                }),
              (a.mouseWheel.scrollAmount = a.mouseWheelPixels
                ? a.mouseWheelPixels
                : a.mouseWheel.scrollAmount),
              (a.mouseWheel.normalizeDelta = a.advanced.normalizeMouseWheelDelta
                ? a.advanced.normalizeMouseWheelDelta
                : a.mouseWheel.normalizeDelta),
              (a.scrollButtons.scrollType = f(a.scrollButtons.scrollType)),
              l(a),
              ae(e).each(function() {
                var e = ae(this);
                if (!e.data(P)) {
                  e.data(P, {
                    idx: ++s,
                    opt: a,
                    scrollRatio: { y: null, x: null },
                    overflowed: null,
                    contentReset: { y: null, x: null },
                    bindEvents: !1,
                    tweenRunning: !1,
                    sequential: {},
                    langDir: e.css("direction"),
                    cbOffsets: null,
                    trigger: null,
                    poll: {
                      size: { o: 0, n: 0 },
                      img: { o: 0, n: 0 },
                      change: { o: 0, n: 0 }
                    }
                  });
                  var t = e.data(P),
                    n = t.opt,
                    i = e.data("mcs-axis"),
                    o = e.data("mcs-scrollbar-position"),
                    r = e.data("mcs-theme");
                  i && (n.axis = i),
                    o && (n.scrollbarPosition = o),
                    r && ((n.theme = r), l(n)),
                    g.call(this),
                    t &&
                      n.callbacks.onCreate &&
                      "function" == typeof n.callbacks.onCreate &&
                      n.callbacks.onCreate.call(this),
                    ae(
                      "#mCSB_" + t.idx + "_container img:not(." + b[2] + ")"
                    ).addClass(b[2]),
                    p.update.call(null, e);
                }
              })
            );
          },
          update: function(e, s) {
            var t = e || c.call(this);
            return ae(t).each(function() {
              var e = ae(this);
              if (e.data(P)) {
                var t = e.data(P),
                  n = t.opt,
                  i = ae("#mCSB_" + t.idx + "_container"),
                  o = ae("#mCSB_" + t.idx),
                  r = [
                    ae("#mCSB_" + t.idx + "_dragger_vertical"),
                    ae("#mCSB_" + t.idx + "_dragger_horizontal")
                  ];
                if (!i.length) return;
                t.tweenRunning && G(e),
                  s &&
                    t &&
                    n.callbacks.onBeforeUpdate &&
                    "function" == typeof n.callbacks.onBeforeUpdate &&
                    n.callbacks.onBeforeUpdate.call(this),
                  e.hasClass(b[3]) && e.removeClass(b[3]),
                  e.hasClass(b[4]) && e.removeClass(b[4]),
                  o.css("max-height", "none"),
                  o.height() !== e.height() && o.css("max-height", e.height()),
                  y.call(this),
                  "y" === n.axis ||
                    n.advanced.autoExpandHorizontalScroll ||
                    i.css("width", v(i)),
                  (t.overflowed = _.call(this)),
                  D.call(this),
                  n.autoDraggerLength && x.call(this),
                  C.call(this),
                  k.call(this);
                var a = [Math.abs(i[0].offsetTop), Math.abs(i[0].offsetLeft)];
                "x" !== n.axis &&
                  (t.overflowed[0]
                    ? r[0].height() > r[0].parent().height()
                      ? T.call(this)
                      : (J(e, a[0].toString(), {
                          dir: "y",
                          dur: 0,
                          overwrite: "none"
                        }),
                        (t.contentReset.y = null))
                    : (T.call(this),
                      "y" === n.axis
                        ? E.call(this)
                        : "yx" === n.axis &&
                          t.overflowed[1] &&
                          J(e, a[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                          }))),
                  "y" !== n.axis &&
                    (t.overflowed[1]
                      ? r[1].width() > r[1].parent().width()
                        ? T.call(this)
                        : (J(e, a[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                          }),
                          (t.contentReset.x = null))
                      : (T.call(this),
                        "x" === n.axis
                          ? E.call(this)
                          : "yx" === n.axis &&
                            t.overflowed[0] &&
                            J(e, a[0].toString(), {
                              dir: "y",
                              dur: 0,
                              overwrite: "none"
                            }))),
                  s &&
                    t &&
                    (2 === s &&
                    n.callbacks.onImageLoad &&
                    "function" == typeof n.callbacks.onImageLoad
                      ? n.callbacks.onImageLoad.call(this)
                      : 3 === s &&
                        n.callbacks.onSelectorChange &&
                        "function" == typeof n.callbacks.onSelectorChange
                      ? n.callbacks.onSelectorChange.call(this)
                      : n.callbacks.onUpdate &&
                        "function" == typeof n.callbacks.onUpdate &&
                        n.callbacks.onUpdate.call(this)),
                  Y.call(this);
              }
            });
          },
          scrollTo: function(s, l) {
            if (void 0 !== s && null != s) {
              var e = c.call(this);
              return ae(e).each(function() {
                var e = ae(this);
                if (e.data(P)) {
                  var t = e.data(P),
                    n = t.opt,
                    i = {
                      trigger: "external",
                      scrollInertia: n.scrollInertia,
                      scrollEasing: "mcsEaseInOut",
                      moveDragger: !1,
                      timeout: 60,
                      callbacks: !0,
                      onStart: !0,
                      onUpdate: !0,
                      onComplete: !0
                    },
                    o = ae.extend(!0, {}, i, l),
                    r = U.call(this, s),
                    a =
                      0 < o.scrollInertia && o.scrollInertia < 17
                        ? 17
                        : o.scrollInertia;
                  (r[0] = V.call(this, r[0], "y")),
                    (r[1] = V.call(this, r[1], "x")),
                    o.moveDragger &&
                      ((r[0] *= t.scrollRatio.y), (r[1] *= t.scrollRatio.x)),
                    (o.dur = re() ? 0 : a),
                    setTimeout(function() {
                      null !== r[0] &&
                        "undefined" != typeof r[0] &&
                        "x" !== n.axis &&
                        t.overflowed[0] &&
                        ((o.dir = "y"),
                        (o.overwrite = "all"),
                        J(e, r[0].toString(), o)),
                        null !== r[1] &&
                          "undefined" != typeof r[1] &&
                          "y" !== n.axis &&
                          t.overflowed[1] &&
                          ((o.dir = "x"),
                          (o.overwrite = "none"),
                          J(e, r[1].toString(), o));
                    }, o.timeout);
                }
              });
            }
          },
          stop: function() {
            var e = c.call(this);
            return ae(e).each(function() {
              var e = ae(this);
              e.data(P) && G(e);
            });
          },
          disable: function(t) {
            var e = c.call(this);
            return ae(e).each(function() {
              var e = ae(this);
              e.data(P) &&
                (e.data(P),
                Y.call(this, "remove"),
                E.call(this),
                t && T.call(this),
                D.call(this, !0),
                e.addClass(b[3]));
            });
          },
          destroy: function() {
            var a = c.call(this);
            return ae(a).each(function() {
              var e = ae(this);
              if (e.data(P)) {
                var t = e.data(P),
                  n = t.opt,
                  i = ae("#mCSB_" + t.idx),
                  o = ae("#mCSB_" + t.idx + "_container"),
                  r = ae(".mCSB_" + t.idx + "_scrollbar");
                n.live && u(n.liveSelector || ae(a).selector),
                  Y.call(this, "remove"),
                  E.call(this),
                  T.call(this),
                  e.removeData(P),
                  ee(this, "mcs"),
                  r.remove(),
                  o.find("img." + b[2]).removeClass(b[2]),
                  i.replaceWith(o.contents()),
                  e
                    .removeClass(
                      h +
                        " _" +
                        P +
                        "_" +
                        t.idx +
                        " " +
                        b[6] +
                        " " +
                        b[7] +
                        " " +
                        b[5] +
                        " " +
                        b[3]
                    )
                    .addClass(b[4]);
              }
            });
          }
        },
        c = function() {
          return "object" != typeof ae(this) || ae(this).length < 1 ? i : this;
        },
        l = function(e) {
          var t = [
              "rounded",
              "rounded-dark",
              "rounded-dots",
              "rounded-dots-dark"
            ],
            n = [
              "rounded-dots",
              "rounded-dots-dark",
              "3d",
              "3d-dark",
              "3d-thick",
              "3d-thick-dark",
              "inset",
              "inset-dark",
              "inset-2",
              "inset-2-dark",
              "inset-3",
              "inset-3-dark"
            ],
            i = ["minimal", "minimal-dark"],
            o = ["minimal", "minimal-dark"],
            r = ["minimal", "minimal-dark"];
          (e.autoDraggerLength =
            !(-1 < ae.inArray(e.theme, t)) && e.autoDraggerLength),
            (e.autoExpandScrollbar =
              !(-1 < ae.inArray(e.theme, n)) && e.autoExpandScrollbar),
            (e.scrollButtons.enable =
              !(-1 < ae.inArray(e.theme, i)) && e.scrollButtons.enable),
            (e.autoHideScrollbar =
              -1 < ae.inArray(e.theme, o) || e.autoHideScrollbar),
            (e.scrollbarPosition =
              -1 < ae.inArray(e.theme, r) ? "outside" : e.scrollbarPosition);
        },
        u = function(e) {
          r[e] && (clearTimeout(r[e]), ee(r, e));
        },
        d = function(e) {
          return "yx" === e || "xy" === e || "auto" === e
            ? "yx"
            : "x" === e || "horizontal" === e
            ? "x"
            : "y";
        },
        f = function(e) {
          return "stepped" === e ||
            "pixels" === e ||
            "step" === e ||
            "click" === e
            ? "stepped"
            : "stepless";
        },
        g = function() {
          var e = ae(this),
            t = e.data(P),
            n = t.opt,
            i = n.autoExpandScrollbar ? " " + b[1] + "_expand" : "",
            o = [
              "<div id='mCSB_" +
                t.idx +
                "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" +
                t.idx +
                "_scrollbar mCS-" +
                n.theme +
                " mCSB_scrollTools_vertical" +
                i +
                "'><div class='" +
                b[12] +
                "'><div id='mCSB_" +
                t.idx +
                "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
              "<div id='mCSB_" +
                t.idx +
                "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" +
                t.idx +
                "_scrollbar mCS-" +
                n.theme +
                " mCSB_scrollTools_horizontal" +
                i +
                "'><div class='" +
                b[12] +
                "'><div id='mCSB_" +
                t.idx +
                "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"
            ],
            r =
              "yx" === n.axis
                ? "mCSB_vertical_horizontal"
                : "x" === n.axis
                ? "mCSB_horizontal"
                : "mCSB_vertical",
            a = "yx" === n.axis ? o[0] + o[1] : "x" === n.axis ? o[1] : o[0],
            s =
              "yx" === n.axis
                ? "<div id='mCSB_" +
                  t.idx +
                  "_container_wrapper' class='mCSB_container_wrapper' />"
                : "",
            l = n.autoHideScrollbar ? " " + b[6] : "",
            c = "x" !== n.axis && "rtl" === t.langDir ? " " + b[7] : "";
          n.setWidth && e.css("width", n.setWidth),
            n.setHeight && e.css("height", n.setHeight),
            (n.setLeft =
              "y" !== n.axis && "rtl" === t.langDir ? "989999px" : n.setLeft),
            e
              .addClass(h + " _" + P + "_" + t.idx + l + c)
              .wrapInner(
                "<div id='mCSB_" +
                  t.idx +
                  "' class='mCustomScrollBox mCS-" +
                  n.theme +
                  " " +
                  r +
                  "'><div id='mCSB_" +
                  t.idx +
                  "_container' class='mCSB_container' style='position:relative; top:" +
                  n.setTop +
                  "; left:" +
                  n.setLeft +
                  ";' dir='" +
                  t.langDir +
                  "' /></div>"
              );
          var u = ae("#mCSB_" + t.idx),
            d = ae("#mCSB_" + t.idx + "_container");
          "y" === n.axis ||
            n.advanced.autoExpandHorizontalScroll ||
            d.css("width", v(d)),
            "outside" === n.scrollbarPosition
              ? ("static" === e.css("position") &&
                  e.css("position", "relative"),
                e.css("overflow", "visible"),
                u.addClass("mCSB_outside").after(a))
              : (u.addClass("mCSB_inside").append(a), d.wrap(s)),
            w.call(this);
          var f = [
            ae("#mCSB_" + t.idx + "_dragger_vertical"),
            ae("#mCSB_" + t.idx + "_dragger_horizontal")
          ];
          f[0].css("min-height", f[0].height()),
            f[1].css("min-width", f[1].width());
        },
        v = function(e) {
          var t = [
              e[0].scrollWidth,
              Math.max.apply(
                Math,
                e
                  .children()
                  .map(function() {
                    return ae(this).outerWidth(!0);
                  })
                  .get()
              )
            ],
            n = e.parent().width();
          return t[0] > n ? t[0] : t[1] > n ? t[1] : "100%";
        },
        y = function() {
          var e = ae(this).data(P),
            t = e.opt,
            n = ae("#mCSB_" + e.idx + "_container");
          if (t.advanced.autoExpandHorizontalScroll && "y" !== t.axis) {
            n.css({ width: "auto", "min-width": 0, "overflow-x": "scroll" });
            var i = Math.ceil(n[0].scrollWidth);
            3 === t.advanced.autoExpandHorizontalScroll ||
            (2 !== t.advanced.autoExpandHorizontalScroll &&
              i > n.parent().width())
              ? n.css({
                  width: i,
                  "min-width": "100%",
                  "overflow-x": "inherit"
                })
              : n
                  .css({ "overflow-x": "inherit", position: "absolute" })
                  .wrap(
                    "<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />"
                  )
                  .css({
                    width:
                      Math.ceil(n[0].getBoundingClientRect().right + 0.4) -
                      Math.floor(n[0].getBoundingClientRect().left),
                    "min-width": "100%",
                    position: "relative"
                  })
                  .unwrap();
          }
        },
        w = function() {
          var e = ae(this).data(P),
            t = e.opt,
            n = ae(".mCSB_" + e.idx + "_scrollbar:first"),
            i = ie(t.scrollButtons.tabindex)
              ? "tabindex='" + t.scrollButtons.tabindex + "'"
              : "",
            o = [
              "<a href='#' class='" + b[13] + "' " + i + " />",
              "<a href='#' class='" + b[14] + "' " + i + " />",
              "<a href='#' class='" + b[15] + "' " + i + " />",
              "<a href='#' class='" + b[16] + "' " + i + " />"
            ],
            r = [
              "x" === t.axis ? o[2] : o[0],
              "x" === t.axis ? o[3] : o[1],
              o[2],
              o[3]
            ];
          t.scrollButtons.enable &&
            n
              .prepend(r[0])
              .append(r[1])
              .next(".mCSB_scrollTools")
              .prepend(r[2])
              .append(r[3]);
        },
        x = function() {
          var e = ae(this).data(P),
            t = ae("#mCSB_" + e.idx),
            n = ae("#mCSB_" + e.idx + "_container"),
            i = [
              ae("#mCSB_" + e.idx + "_dragger_vertical"),
              ae("#mCSB_" + e.idx + "_dragger_horizontal")
            ],
            o = [t.height() / n.outerHeight(!1), t.width() / n.outerWidth(!1)],
            r = [
              parseInt(i[0].css("min-height")),
              Math.round(o[0] * i[0].parent().height()),
              parseInt(i[1].css("min-width")),
              Math.round(o[1] * i[1].parent().width())
            ],
            a = m && r[1] < r[0] ? r[0] : r[1],
            s = m && r[3] < r[2] ? r[2] : r[3];
          i[0]
            .css({ height: a, "max-height": i[0].parent().height() - 10 })
            .find(".mCSB_dragger_bar")
            .css({ "line-height": r[0] + "px" }),
            i[1].css({ width: s, "max-width": i[1].parent().width() - 10 });
        },
        C = function() {
          var e = ae(this).data(P),
            t = ae("#mCSB_" + e.idx),
            n = ae("#mCSB_" + e.idx + "_container"),
            i = [
              ae("#mCSB_" + e.idx + "_dragger_vertical"),
              ae("#mCSB_" + e.idx + "_dragger_horizontal")
            ],
            o = [n.outerHeight(!1) - t.height(), n.outerWidth(!1) - t.width()],
            r = [
              o[0] / (i[0].parent().height() - i[0].height()),
              o[1] / (i[1].parent().width() - i[1].width())
            ];
          e.scrollRatio = { y: r[0], x: r[1] };
        },
        S = function(e, t, n) {
          var i = n ? b[0] + "_expanded" : "",
            o = e.closest(".mCSB_scrollTools");
          "active" === t
            ? (e.toggleClass(b[0] + " " + i),
              o.toggleClass(b[1]),
              (e[0]._draggable = e[0]._draggable ? 0 : 1))
            : e[0]._draggable ||
              ("hide" === t
                ? (e.removeClass(b[0]), o.removeClass(b[1]))
                : (e.addClass(b[0]), o.addClass(b[1])));
        },
        _ = function() {
          var e = ae(this).data(P),
            t = ae("#mCSB_" + e.idx),
            n = ae("#mCSB_" + e.idx + "_container"),
            i = null == e.overflowed ? n.height() : n.outerHeight(!1),
            o = null == e.overflowed ? n.width() : n.outerWidth(!1),
            r = n[0].scrollHeight,
            a = n[0].scrollWidth;
          return (
            i < r && (i = r), o < a && (o = a), [i > t.height(), o > t.width()]
          );
        },
        T = function() {
          var e = ae(this),
            t = e.data(P),
            n = t.opt,
            i = ae("#mCSB_" + t.idx),
            o = ae("#mCSB_" + t.idx + "_container"),
            r = [
              ae("#mCSB_" + t.idx + "_dragger_vertical"),
              ae("#mCSB_" + t.idx + "_dragger_horizontal")
            ];
          if (
            (G(e),
            (("x" !== n.axis && !t.overflowed[0]) ||
              ("y" === n.axis && t.overflowed[0])) &&
              (r[0].add(o).css("top", 0), J(e, "_resetY")),
            ("y" !== n.axis && !t.overflowed[1]) ||
              ("x" === n.axis && t.overflowed[1]))
          ) {
            var a = (dx = 0);
            "rtl" === t.langDir &&
              ((a = i.width() - o.outerWidth(!1)),
              (dx = Math.abs(a / t.scrollRatio.x))),
              o.css("left", a),
              r[1].css("left", dx),
              J(e, "_resetX");
          }
        },
        k = function() {
          function e() {
            o = setTimeout(function() {
              ae.event.special.mousewheel
                ? (clearTimeout(o), A.call(t[0]))
                : e();
            }, 100);
          }
          var t = ae(this),
            n = t.data(P),
            i = n.opt;
          if (!n.bindEvents) {
            var o;
            if (
              (a.call(this),
              i.contentTouchScroll && $.call(this),
              j.call(this),
              i.mouseWheel.enable)
            )
              e();
            H.call(this),
              W.call(this),
              i.advanced.autoScrollOnFocus && O.call(this),
              i.scrollButtons.enable && z.call(this),
              i.keyboard.enable && F.call(this),
              (n.bindEvents = !0);
          }
        },
        E = function() {
          var e = ae(this),
            t = e.data(P),
            n = t.opt,
            i = P + "_" + t.idx,
            o = ".mCSB_" + t.idx + "_scrollbar",
            r = ae(
              "#mCSB_" +
                t.idx +
                ",#mCSB_" +
                t.idx +
                "_container,#mCSB_" +
                t.idx +
                "_container_wrapper," +
                o +
                " ." +
                b[12] +
                ",#mCSB_" +
                t.idx +
                "_dragger_vertical,#mCSB_" +
                t.idx +
                "_dragger_horizontal," +
                o +
                ">a"
            ),
            a = ae("#mCSB_" + t.idx + "_container");
          n.advanced.releaseDraggableSelectors &&
            r.add(ae(n.advanced.releaseDraggableSelectors)),
            n.advanced.extraDraggableSelectors &&
              r.add(ae(n.advanced.extraDraggableSelectors)),
            t.bindEvents &&
              (ae(document)
                .add(ae(!q() || top.document))
                .unbind("." + i),
              r.each(function() {
                ae(this).unbind("." + i);
              }),
              clearTimeout(e[0]._focusTimeout),
              ee(e[0], "_focusTimeout"),
              clearTimeout(t.sequential.step),
              ee(t.sequential, "step"),
              clearTimeout(a[0].onCompleteTimeout),
              ee(a[0], "onCompleteTimeout"),
              (t.bindEvents = !1));
        },
        D = function(e) {
          var t = ae(this),
            n = t.data(P),
            i = n.opt,
            o = ae("#mCSB_" + n.idx + "_container_wrapper"),
            r = o.length ? o : ae("#mCSB_" + n.idx + "_container"),
            a = [
              ae("#mCSB_" + n.idx + "_scrollbar_vertical"),
              ae("#mCSB_" + n.idx + "_scrollbar_horizontal")
            ],
            s = [a[0].find(".mCSB_dragger"), a[1].find(".mCSB_dragger")];
          "x" !== i.axis &&
            (n.overflowed[0] && !e
              ? (a[0]
                  .add(s[0])
                  .add(a[0].children("a"))
                  .css("display", "block"),
                r.removeClass(b[8] + " " + b[10]))
              : (i.alwaysShowScrollbar
                  ? (2 !== i.alwaysShowScrollbar && s[0].css("display", "none"),
                    r.removeClass(b[10]))
                  : (a[0].css("display", "none"), r.addClass(b[10])),
                r.addClass(b[8]))),
            "y" !== i.axis &&
              (n.overflowed[1] && !e
                ? (a[1]
                    .add(s[1])
                    .add(a[1].children("a"))
                    .css("display", "block"),
                  r.removeClass(b[9] + " " + b[11]))
                : (i.alwaysShowScrollbar
                    ? (2 !== i.alwaysShowScrollbar &&
                        s[1].css("display", "none"),
                      r.removeClass(b[11]))
                    : (a[1].css("display", "none"), r.addClass(b[11])),
                  r.addClass(b[9]))),
            n.overflowed[0] || n.overflowed[1]
              ? t.removeClass(b[5])
              : t.addClass(b[5]);
        },
        I = function(e) {
          var t = e.type,
            n =
              e.target.ownerDocument !== document && null !== frameElement
                ? [
                    ae(frameElement).offset().top,
                    ae(frameElement).offset().left
                  ]
                : null,
            i =
              q() &&
              e.target.ownerDocument !== top.document &&
              null !== frameElement
                ? [
                    ae(e.view.frameElement).offset().top,
                    ae(e.view.frameElement).offset().left
                  ]
                : [0, 0];
          switch (t) {
            case "pointerdown":
            case "MSPointerDown":
            case "pointermove":
            case "MSPointerMove":
            case "pointerup":
            case "MSPointerUp":
              return n
                ? [
                    e.originalEvent.pageY - n[0] + i[0],
                    e.originalEvent.pageX - n[1] + i[1],
                    !1
                  ]
                : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
            case "touchstart":
            case "touchmove":
            case "touchend":
              var o =
                  e.originalEvent.touches[0] ||
                  e.originalEvent.changedTouches[0],
                r =
                  e.originalEvent.touches.length ||
                  e.originalEvent.changedTouches.length;
              return e.target.ownerDocument !== document
                ? [o.screenY, o.screenX, 1 < r]
                : [o.pageY, o.pageX, 1 < r];
            default:
              return n
                ? [e.pageY - n[0] + i[0], e.pageX - n[1] + i[1], !1]
                : [e.pageY, e.pageX, !1];
          }
        },
        a = function() {
          function o(e, t, n, i) {
            if (
              ((h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0),
              a.attr("id") === f[1])
            )
              var o = "x",
                r = (a[0].offsetLeft - t + i) * u.scrollRatio.x;
            else (o = "y"), (r = (a[0].offsetTop - e + n) * u.scrollRatio.y);
            J(c, r.toString(), { dir: o, drag: !0 });
          }
          var a,
            s,
            l,
            c = ae(this),
            u = c.data(P),
            d = u.opt,
            e = P + "_" + u.idx,
            f = [
              "mCSB_" + u.idx + "_dragger_vertical",
              "mCSB_" + u.idx + "_dragger_horizontal"
            ],
            h = ae("#mCSB_" + u.idx + "_container"),
            t = ae("#" + f[0] + ",#" + f[1]),
            n = d.advanced.releaseDraggableSelectors
              ? t.add(ae(d.advanced.releaseDraggableSelectors))
              : t,
            i = d.advanced.extraDraggableSelectors
              ? ae(!q() || top.document).add(
                  ae(d.advanced.extraDraggableSelectors)
                )
              : ae(!q() || top.document);
          t
            .bind("contextmenu." + e, function(e) {
              e.preventDefault();
            })
            .bind(
              "mousedown." +
                e +
                " touchstart." +
                e +
                " pointerdown." +
                e +
                " MSPointerDown." +
                e,
              function(e) {
                if ((e.stopImmediatePropagation(), e.preventDefault(), te(e))) {
                  (R = !0),
                    m &&
                      (document.onselectstart = function() {
                        return !1;
                      }),
                    L.call(h, !1),
                    G(c);
                  var t = (a = ae(this)).offset(),
                    n = I(e)[0] - t.top,
                    i = I(e)[1] - t.left,
                    o = a.height() + t.top,
                    r = a.width() + t.left;
                  n < o && 0 < n && i < r && 0 < i && ((s = n), (l = i)),
                    S(a, "active", d.autoExpandScrollbar);
                }
              }
            )
            .bind("touchmove." + e, function(e) {
              e.stopImmediatePropagation(), e.preventDefault();
              var t = a.offset(),
                n = I(e)[0] - t.top,
                i = I(e)[1] - t.left;
              o(s, l, n, i);
            }),
            ae(document)
              .add(i)
              .bind(
                "mousemove." + e + " pointermove." + e + " MSPointerMove." + e,
                function(e) {
                  if (a) {
                    var t = a.offset(),
                      n = I(e)[0] - t.top,
                      i = I(e)[1] - t.left;
                    if (s === n && l === i) return;
                    o(s, l, n, i);
                  }
                }
              )
              .add(n)
              .bind(
                "mouseup." +
                  e +
                  " touchend." +
                  e +
                  " pointerup." +
                  e +
                  " MSPointerUp." +
                  e,
                function() {
                  a && (S(a, "active", d.autoExpandScrollbar), (a = null)),
                    (R = !1),
                    m && (document.onselectstart = null),
                    L.call(h, !0);
                }
              );
        },
        $ = function() {
          function t(e) {
            if (!ne(e) || R || I(e)[2]) B = 0;
            else {
              (T = _ = 0), (f = B = 1), S.removeClass("mCS_touch_action");
              var t = $.offset();
              (c = I(e)[0] - t.top),
                (h = I(e)[1] - t.left),
                (H = [I(e)[0], I(e)[1]]);
            }
          }
          function n(e) {
            if (
              ne(e) &&
              !R &&
              !I(e)[2] &&
              (E.documentTouchScroll || e.preventDefault(),
              e.stopImmediatePropagation(),
              (!T || _) && f)
            ) {
              v = K();
              var t = D.offset(),
                n = I(e)[0] - t.top,
                i = I(e)[1] - t.left,
                o = "mcsLinearOut";
              if (
                (A.push(n),
                N.push(i),
                (H[2] = Math.abs(I(e)[0] - H[0])),
                (H[3] = Math.abs(I(e)[1] - H[1])),
                k.overflowed[0])
              )
                var r = j[0].parent().height() - j[0].height(),
                  a =
                    0 < c - n &&
                    n - c > -r * k.scrollRatio.y &&
                    (2 * H[3] < H[2] || "yx" === E.axis);
              if (k.overflowed[1])
                var s = j[1].parent().width() - j[1].width(),
                  l =
                    0 < h - i &&
                    i - h > -s * k.scrollRatio.x &&
                    (2 * H[2] < H[3] || "yx" === E.axis);
              a || l
                ? (O || e.preventDefault(), (_ = 1))
                : ((T = 1), S.addClass("mCS_touch_action")),
                O && e.preventDefault(),
                (b =
                  "yx" === E.axis
                    ? [c - n, h - i]
                    : "x" === E.axis
                    ? [null, h - i]
                    : [c - n, null]),
                ($[0].idleTimer = 250),
                k.overflowed[0] && d(b[0], L, o, "y", "all", !0),
                k.overflowed[1] && d(b[1], L, o, "x", M, !0);
            }
          }
          function i(e) {
            if (!ne(e) || R || I(e)[2]) B = 0;
            else {
              (B = 1), e.stopImmediatePropagation(), G(S), (m = K());
              var t = D.offset();
              (p = I(e)[0] - t.top), (g = I(e)[1] - t.left), (A = []), (N = []);
            }
          }
          function o(e) {
            if (ne(e) && !R && !I(e)[2]) {
              (f = 0), e.stopImmediatePropagation(), (T = _ = 0), (y = K());
              var t = D.offset(),
                n = I(e)[0] - t.top,
                i = I(e)[1] - t.left;
              if (!(30 < y - v)) {
                var o = "mcsEaseOut",
                  r = (x = 1e3 / (y - m)) < 2.5,
                  a = r ? [A[A.length - 2], N[N.length - 2]] : [0, 0];
                w = r ? [n - a[0], i - a[1]] : [n - p, i - g];
                var s = [Math.abs(w[0]), Math.abs(w[1])];
                x = r ? [Math.abs(w[0] / 4), Math.abs(w[1] / 4)] : [x, x];
                var l = [
                  Math.abs($[0].offsetTop) - w[0] * u(s[0] / x[0], x[0]),
                  Math.abs($[0].offsetLeft) - w[1] * u(s[1] / x[1], x[1])
                ];
                (b =
                  "yx" === E.axis
                    ? [l[0], l[1]]
                    : "x" === E.axis
                    ? [null, l[1]]
                    : [l[0], null]),
                  (C = [
                    4 * s[0] + E.scrollInertia,
                    4 * s[1] + E.scrollInertia
                  ]);
                var c = parseInt(E.contentTouchScroll) || 0;
                (b[0] = s[0] > c ? b[0] : 0),
                  (b[1] = s[1] > c ? b[1] : 0),
                  k.overflowed[0] && d(b[0], C[0], o, "y", M, !1),
                  k.overflowed[1] && d(b[1], C[1], o, "x", M, !1);
              }
            }
          }
          function u(e, t) {
            var n = [1.5 * t, 2 * t, t / 1.5, t / 2];
            return 90 < e
              ? 4 < t
                ? n[0]
                : n[3]
              : 60 < e
              ? 3 < t
                ? n[3]
                : n[2]
              : 30 < e
              ? 8 < t
                ? n[1]
                : 6 < t
                ? n[0]
                : 4 < t
                ? t
                : n[2]
              : 8 < t
              ? t
              : n[3];
          }
          function d(e, t, n, i, o, r) {
            e &&
              J(S, e.toString(), {
                dur: t,
                scrollEasing: n,
                dir: i,
                overwrite: o,
                drag: r
              });
          }
          var f,
            c,
            h,
            p,
            g,
            m,
            v,
            y,
            w,
            x,
            b,
            C,
            _,
            T,
            S = ae(this),
            k = S.data(P),
            E = k.opt,
            e = P + "_" + k.idx,
            D = ae("#mCSB_" + k.idx),
            $ = ae("#mCSB_" + k.idx + "_container"),
            j = [
              ae("#mCSB_" + k.idx + "_dragger_vertical"),
              ae("#mCSB_" + k.idx + "_dragger_horizontal")
            ],
            A = [],
            N = [],
            L = 0,
            M = "yx" === E.axis ? "none" : "all",
            H = [],
            r = $.find("iframe"),
            a = [
              "touchstart." + e + " pointerdown." + e + " MSPointerDown." + e,
              "touchmove." + e + " pointermove." + e + " MSPointerMove." + e,
              "touchend." + e + " pointerup." + e + " MSPointerUp." + e
            ],
            O =
              void 0 !== document.body.style.touchAction &&
              "" !== document.body.style.touchAction;
          $.bind(a[0], function(e) {
            t(e);
          }).bind(a[1], function(e) {
            n(e);
          }),
            D.bind(a[0], function(e) {
              i(e);
            }).bind(a[2], function(e) {
              o(e);
            }),
            r.length &&
              r.each(function() {
                ae(this).bind("load", function() {
                  q(this) &&
                    ae(this.contentDocument || this.contentWindow.document)
                      .bind(a[0], function(e) {
                        t(e), i(e);
                      })
                      .bind(a[1], function(e) {
                        n(e);
                      })
                      .bind(a[2], function(e) {
                        o(e);
                      });
                });
              });
        },
        j = function() {
          function o() {
            return window.getSelection
              ? window.getSelection().toString()
              : document.selection && "Control" != document.selection.type
              ? document.selection.createRange().text
              : 0;
          }
          function r(e, t, n) {
            (c.type = n && a ? "stepped" : "stepless"),
              (c.scrollAmount = 10),
              X(i, e, t, "mcsLinearOut", n ? 60 : null);
          }
          var a,
            i = ae(this),
            s = i.data(P),
            l = s.opt,
            c = s.sequential,
            e = P + "_" + s.idx,
            u = ae("#mCSB_" + s.idx + "_container"),
            d = u.parent();
          u.bind("mousedown." + e, function() {
            B || a || ((a = 1), (R = !0));
          })
            .add(document)
            .bind("mousemove." + e, function(e) {
              if (!B && a && o()) {
                var t = u.offset(),
                  n = I(e)[0] - t.top + u[0].offsetTop,
                  i = I(e)[1] - t.left + u[0].offsetLeft;
                0 < n && n < d.height() && 0 < i && i < d.width()
                  ? c.step && r("off", null, "stepped")
                  : ("x" !== l.axis &&
                      s.overflowed[0] &&
                      (n < 0 ? r("on", 38) : n > d.height() && r("on", 40)),
                    "y" !== l.axis &&
                      s.overflowed[1] &&
                      (i < 0 ? r("on", 37) : i > d.width() && r("on", 39)));
              }
            })
            .bind("mouseup." + e + " dragend." + e, function() {
              B || (a && ((a = 0), r("off", null)), (R = !1));
            });
        },
        A = function() {
          function n(e, t) {
            if ((G(d), !M(d, e.target))) {
              var n =
                  "auto" !== h.mouseWheel.deltaFactor
                    ? parseInt(h.mouseWheel.deltaFactor)
                    : m && e.deltaFactor < 100
                    ? 100
                    : e.deltaFactor || 100,
                i = h.scrollInertia;
              if ("x" === h.axis || "x" === h.mouseWheel.axis)
                var o = "x",
                  r = [
                    Math.round(n * f.scrollRatio.x),
                    parseInt(h.mouseWheel.scrollAmount)
                  ],
                  a =
                    "auto" !== h.mouseWheel.scrollAmount
                      ? r[1]
                      : r[0] >= p.width()
                      ? 0.9 * p.width()
                      : r[0],
                  s = Math.abs(
                    ae("#mCSB_" + f.idx + "_container")[0].offsetLeft
                  ),
                  l = g[1][0].offsetLeft,
                  c = g[1].parent().width() - g[1].width(),
                  u = "y" === h.mouseWheel.axis ? e.deltaY || t : e.deltaX;
              else
                (o = "y"),
                  (r = [
                    Math.round(n * f.scrollRatio.y),
                    parseInt(h.mouseWheel.scrollAmount)
                  ]),
                  (a =
                    "auto" !== h.mouseWheel.scrollAmount
                      ? r[1]
                      : r[0] >= p.height()
                      ? 0.9 * p.height()
                      : r[0]),
                  (s = Math.abs(
                    ae("#mCSB_" + f.idx + "_container")[0].offsetTop
                  )),
                  (l = g[0][0].offsetTop),
                  (c = g[0].parent().height() - g[0].height()),
                  (u = e.deltaY || t);
              ("y" === o && !f.overflowed[0]) ||
                ("x" === o && !f.overflowed[1]) ||
                ((h.mouseWheel.invert || e.webkitDirectionInvertedFromDevice) &&
                  (u = -u),
                h.mouseWheel.normalizeDelta && (u = u < 0 ? -1 : 1),
                ((0 < u && 0 !== l) ||
                  (u < 0 && l !== c) ||
                  h.mouseWheel.preventDefault) &&
                  (e.stopImmediatePropagation(), e.preventDefault()),
                e.deltaFactor < 5 &&
                  !h.mouseWheel.normalizeDelta &&
                  ((a = e.deltaFactor), (i = 17)),
                J(d, (s - u * a).toString(), { dir: o, dur: i }));
            }
          }
          if (ae(this).data(P)) {
            var d = ae(this),
              f = d.data(P),
              h = f.opt,
              e = P + "_" + f.idx,
              p = ae("#mCSB_" + f.idx),
              g = [
                ae("#mCSB_" + f.idx + "_dragger_vertical"),
                ae("#mCSB_" + f.idx + "_dragger_horizontal")
              ],
              t = ae("#mCSB_" + f.idx + "_container").find("iframe");
            t.length &&
              t.each(function() {
                ae(this).bind("load", function() {
                  q(this) &&
                    ae(
                      this.contentDocument || this.contentWindow.document
                    ).bind("mousewheel." + e, function(e, t) {
                      n(e, t);
                    });
                });
              }),
              p.bind("mousewheel." + e, function(e, t) {
                n(e, t);
              });
          }
        },
        N = new Object(),
        q = function(e) {
          var t = !1,
            n = !1,
            i = null;
          if (
            (void 0 === e
              ? (n = "#empty")
              : void 0 !== ae(e).attr("id") && (n = ae(e).attr("id")),
            !1 !== n && void 0 !== N[n])
          )
            return N[n];
          if (e) {
            try {
              i = (e.contentDocument || e.contentWindow.document).body
                .innerHTML;
            } catch (s) {}
            t = null !== i;
          } else {
            try {
              i = top.document.body.innerHTML;
            } catch (s) {}
            t = null !== i;
          }
          return !1 !== n && (N[n] = t), t;
        },
        L = function(e) {
          var t = this.find("iframe");
          if (t.length) {
            var n = e ? "auto" : "none";
            t.css("pointer-events", n);
          }
        },
        M = function(e, t) {
          var n = t.nodeName.toLowerCase(),
            i = e.data(P).opt.mouseWheel.disableOver,
            o = ["select", "textarea"];
          return (
            -1 < ae.inArray(n, i) &&
            !(-1 < ae.inArray(n, o) && !ae(t).is(":focus"))
          );
        },
        H = function() {
          var a,
            s = ae(this),
            l = s.data(P),
            e = P + "_" + l.idx,
            c = ae("#mCSB_" + l.idx + "_container"),
            u = c.parent();
          ae(".mCSB_" + l.idx + "_scrollbar ." + b[12])
            .bind(
              "mousedown." +
                e +
                " touchstart." +
                e +
                " pointerdown." +
                e +
                " MSPointerDown." +
                e,
              function(e) {
                (R = !0), ae(e.target).hasClass("mCSB_dragger") || (a = 1);
              }
            )
            .bind(
              "touchend." + e + " pointerup." + e + " MSPointerUp." + e,
              function() {
                R = !1;
              }
            )
            .bind("click." + e, function(e) {
              if (
                a &&
                ((a = 0),
                ae(e.target).hasClass(b[12]) ||
                  ae(e.target).hasClass("mCSB_draggerRail"))
              ) {
                G(s);
                var t = ae(this),
                  n = t.find(".mCSB_dragger");
                if (0 < t.parent(".mCSB_scrollTools_horizontal").length) {
                  if (!l.overflowed[1]) return;
                  var i = "x",
                    o = e.pageX > n.offset().left ? -1 : 1,
                    r = Math.abs(c[0].offsetLeft) - o * (0.9 * u.width());
                } else {
                  if (!l.overflowed[0]) return;
                  (i = "y"),
                    (o = e.pageY > n.offset().top ? -1 : 1),
                    (r = Math.abs(c[0].offsetTop) - o * (0.9 * u.height()));
                }
                J(s, r.toString(), { dir: i, scrollEasing: "mcsEaseInOut" });
              }
            });
        },
        O = function() {
          var a = ae(this),
            e = a.data(P),
            s = e.opt,
            t = P + "_" + e.idx,
            l = ae("#mCSB_" + e.idx + "_container"),
            c = l.parent();
          l.bind("focusin." + t, function() {
            var o = ae(document.activeElement),
              e = l.find(".mCustomScrollBox").length,
              r = 0;
            o.is(s.advanced.autoScrollOnFocus) &&
              (G(a),
              clearTimeout(a[0]._focusTimeout),
              (a[0]._focusTimer = e ? (r + 17) * e : 0),
              (a[0]._focusTimeout = setTimeout(function() {
                var e = [oe(o)[0], oe(o)[1]],
                  t = [l[0].offsetTop, l[0].offsetLeft],
                  n = [
                    0 <= t[0] + e[0] &&
                      t[0] + e[0] < c.height() - o.outerHeight(!1),
                    0 <= t[1] + e[1] &&
                      t[0] + e[1] < c.width() - o.outerWidth(!1)
                  ],
                  i = "yx" !== s.axis || n[0] || n[1] ? "all" : "none";
                "x" === s.axis ||
                  n[0] ||
                  J(a, e[0].toString(), {
                    dir: "y",
                    scrollEasing: "mcsEaseInOut",
                    overwrite: i,
                    dur: r
                  }),
                  "y" === s.axis ||
                    n[1] ||
                    J(a, e[1].toString(), {
                      dir: "x",
                      scrollEasing: "mcsEaseInOut",
                      overwrite: i,
                      dur: r
                    });
              }, a[0]._focusTimer)));
          });
        },
        W = function() {
          var e = ae(this).data(P),
            t = P + "_" + e.idx,
            n = ae("#mCSB_" + e.idx + "_container").parent();
          n.bind("scroll." + t, function() {
            (0 === n.scrollTop() && 0 === n.scrollLeft()) ||
              ae(".mCSB_" + e.idx + "_scrollbar").css("visibility", "hidden");
          });
        },
        z = function() {
          var i = ae(this),
            o = i.data(P),
            r = o.opt,
            a = o.sequential,
            e = P + "_" + o.idx,
            t = ".mCSB_" + o.idx + "_scrollbar";
          ae(t + ">a")
            .bind("contextmenu." + e, function(e) {
              e.preventDefault();
            })
            .bind(
              "mousedown." +
                e +
                " touchstart." +
                e +
                " pointerdown." +
                e +
                " MSPointerDown." +
                e +
                " mouseup." +
                e +
                " touchend." +
                e +
                " pointerup." +
                e +
                " MSPointerUp." +
                e +
                " mouseout." +
                e +
                " pointerout." +
                e +
                " MSPointerOut." +
                e +
                " click." +
                e,
              function(e) {
                function t(e, t) {
                  (a.scrollAmount = r.scrollButtons.scrollAmount), X(i, e, t);
                }
                if ((e.preventDefault(), te(e))) {
                  var n = ae(this).attr("class");
                  switch (((a.type = r.scrollButtons.scrollType), e.type)) {
                    case "mousedown":
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                      if ("stepped" === a.type) return;
                      (R = !0), (o.tweenRunning = !1), t("on", n);
                      break;
                    case "mouseup":
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseout":
                    case "pointerout":
                    case "MSPointerOut":
                      if ("stepped" === a.type) return;
                      (R = !1), a.dir && t("off", n);
                      break;
                    case "click":
                      if ("stepped" !== a.type || o.tweenRunning) return;
                      t("on", n);
                  }
                }
              }
            );
        },
        F = function() {
          function t(e) {
            function t(e, t) {
              (u.type = c.keyboard.scrollType),
                (u.scrollAmount = c.keyboard.scrollAmount),
                ("stepped" === u.type && l.tweenRunning) || X(s, e, t);
            }
            switch (e.type) {
              case "blur":
                l.tweenRunning && u.dir && t("off", null);
                break;
              case "keydown":
              case "keyup":
                var n = e.keyCode ? e.keyCode : e.which,
                  i = "on";
                if (
                  ("x" !== c.axis && (38 === n || 40 === n)) ||
                  ("y" !== c.axis && (37 === n || 39 === n))
                ) {
                  if (
                    ((38 === n || 40 === n) && !l.overflowed[0]) ||
                    ((37 === n || 39 === n) && !l.overflowed[1])
                  )
                    return;
                  "keyup" === e.type && (i = "off"),
                    ae(document.activeElement).is(h) ||
                      (e.preventDefault(),
                      e.stopImmediatePropagation(),
                      t(i, n));
                } else if (33 === n || 34 === n) {
                  if (
                    ((l.overflowed[0] || l.overflowed[1]) &&
                      (e.preventDefault(), e.stopImmediatePropagation()),
                    "keyup" === e.type)
                  ) {
                    G(s);
                    var o = 34 === n ? -1 : 1;
                    if (
                      "x" === c.axis ||
                      ("yx" === c.axis && l.overflowed[1] && !l.overflowed[0])
                    )
                      var r = "x",
                        a = Math.abs(d[0].offsetLeft) - o * (0.9 * f.width());
                    else
                      (r = "y"),
                        (a = Math.abs(d[0].offsetTop) - o * (0.9 * f.height()));
                    J(s, a.toString(), {
                      dir: r,
                      scrollEasing: "mcsEaseInOut"
                    });
                  }
                } else if (
                  (35 === n || 36 === n) &&
                  !ae(document.activeElement).is(h) &&
                  ((l.overflowed[0] || l.overflowed[1]) &&
                    (e.preventDefault(), e.stopImmediatePropagation()),
                  "keyup" === e.type)
                ) {
                  if (
                    "x" === c.axis ||
                    ("yx" === c.axis && l.overflowed[1] && !l.overflowed[0])
                  )
                    (r = "x"),
                      (a =
                        35 === n ? Math.abs(f.width() - d.outerWidth(!1)) : 0);
                  else
                    (r = "y"),
                      (a =
                        35 === n
                          ? Math.abs(f.height() - d.outerHeight(!1))
                          : 0);
                  J(s, a.toString(), { dir: r, scrollEasing: "mcsEaseInOut" });
                }
            }
          }
          var s = ae(this),
            l = s.data(P),
            c = l.opt,
            u = l.sequential,
            e = P + "_" + l.idx,
            n = ae("#mCSB_" + l.idx),
            d = ae("#mCSB_" + l.idx + "_container"),
            f = d.parent(),
            h =
              "input,textarea,select,datalist,keygen,[contenteditable='true']",
            i = d.find("iframe"),
            o = ["blur." + e + " keydown." + e + " keyup." + e];
          i.length &&
            i.each(function() {
              ae(this).bind("load", function() {
                q(this) &&
                  ae(this.contentDocument || this.contentWindow.document).bind(
                    o[0],
                    function(e) {
                      t(e);
                    }
                  );
              });
            }),
            n.attr("tabindex", "0").bind(o[0], function(e) {
              t(e);
            });
        },
        X = function(d, e, t, f, h) {
          function p(e) {
            m.snapAmount &&
              (v.scrollAmount =
                m.snapAmount instanceof Array
                  ? "x" === v.dir[0]
                    ? m.snapAmount[1]
                    : m.snapAmount[0]
                  : m.snapAmount);
            var t = "stepped" !== v.type,
              n = h || (e ? (t ? w / 1.5 : x) : 1e3 / 60),
              i = e ? (t ? 7.5 : 40) : 2.5,
              o = [Math.abs(y[0].offsetTop), Math.abs(y[0].offsetLeft)],
              r = [
                10 < g.scrollRatio.y ? 10 : g.scrollRatio.y,
                10 < g.scrollRatio.x ? 10 : g.scrollRatio.x
              ],
              a =
                "x" === v.dir[0]
                  ? o[1] + v.dir[1] * (r[1] * i)
                  : o[0] + v.dir[1] * (r[0] * i),
              s =
                "x" === v.dir[0]
                  ? o[1] + v.dir[1] * parseInt(v.scrollAmount)
                  : o[0] + v.dir[1] * parseInt(v.scrollAmount),
              l = "auto" !== v.scrollAmount ? s : a,
              c =
                f || (e ? (t ? "mcsLinearOut" : "mcsEaseInOut") : "mcsLinear"),
              u = !!e;
            return (
              e && n < 17 && (l = "x" === v.dir[0] ? o[1] : o[0]),
              J(d, l.toString(), {
                dir: v.dir[0],
                scrollEasing: c,
                dur: n,
                onComplete: u
              }),
              e
                ? void (v.dir = !1)
                : (clearTimeout(v.step),
                  void (v.step = setTimeout(function() {
                    p();
                  }, n)))
            );
          }
          function n() {
            clearTimeout(v.step), ee(v, "step"), G(d);
          }
          var g = d.data(P),
            m = g.opt,
            v = g.sequential,
            y = ae("#mCSB_" + g.idx + "_container"),
            i = "stepped" === v.type,
            w = m.scrollInertia < 26 ? 26 : m.scrollInertia,
            x = m.scrollInertia < 1 ? 17 : m.scrollInertia;
          switch (e) {
            case "on":
              if (
                ((v.dir = [
                  t === b[16] || t === b[15] || 39 === t || 37 === t
                    ? "x"
                    : "y",
                  t === b[13] || t === b[15] || 38 === t || 37 === t ? -1 : 1
                ]),
                G(d),
                ie(t) && "stepped" === v.type)
              )
                return;
              p(i);
              break;
            case "off":
              n(), (i || (g.tweenRunning && v.dir)) && p(!0);
          }
        },
        U = function(e) {
          var t = ae(this).data(P).opt,
            n = [];
          return (
            "function" == typeof e && (e = e()),
            e instanceof Array
              ? (n =
                  1 < e.length
                    ? [e[0], e[1]]
                    : "x" === t.axis
                    ? [null, e[0]]
                    : [e[0], null])
              : ((n[0] = e.y ? e.y : e.x || "x" === t.axis ? null : e),
                (n[1] = e.x ? e.x : e.y || "y" === t.axis ? null : e)),
            "function" == typeof n[0] && (n[0] = n[0]()),
            "function" == typeof n[1] && (n[1] = n[1]()),
            n
          );
        },
        V = function(e, t) {
          if (null != e && void 0 !== e) {
            var n = ae(this),
              i = n.data(P),
              o = i.opt,
              r = ae("#mCSB_" + i.idx + "_container"),
              a = r.parent(),
              s = typeof e;
            t || (t = "x" === o.axis ? "x" : "y");
            var l =
                "x" === t
                  ? r.outerWidth(!1) - a.width()
                  : r.outerHeight(!1) - a.height(),
              c = "x" === t ? r[0].offsetLeft : r[0].offsetTop,
              u = "x" === t ? "left" : "top";
            switch (s) {
              case "function":
                return e();
              case "object":
                if (!(f = e.jquery ? e : ae(e)).length) return;
                return "x" === t ? oe(f)[1] : oe(f)[0];
              case "string":
              case "number":
                if (ie(e)) return Math.abs(e);
                if (-1 !== e.indexOf("%"))
                  return Math.abs((l * parseInt(e)) / 100);
                if (-1 !== e.indexOf("-="))
                  return Math.abs(c - parseInt(e.split("-=")[1]));
                if (-1 !== e.indexOf("+=")) {
                  var d = c + parseInt(e.split("+=")[1]);
                  return 0 <= d ? 0 : Math.abs(d);
                }
                if (-1 !== e.indexOf("px") && ie(e.split("px")[0]))
                  return Math.abs(e.split("px")[0]);
                if ("top" === e || "left" === e) return 0;
                if ("bottom" === e)
                  return Math.abs(a.height() - r.outerHeight(!1));
                if ("right" === e)
                  return Math.abs(a.width() - r.outerWidth(!1));
                if ("first" !== e && "last" !== e)
                  return ae(e).length
                    ? "x" === t
                      ? oe(ae(e))[1]
                      : oe(ae(e))[0]
                    : (r.css(u, e), void p.update.call(null, n[0]));
                var f = r.find(":" + e);
                return "x" === t ? oe(f)[1] : oe(f)[0];
            }
          }
        },
        Y = function(e) {
          function t() {
            return (
              clearTimeout(l[0].autoUpdate),
              0 === r.parents("html").length
                ? void (r = null)
                : void (l[0].autoUpdate = setTimeout(function() {
                    return s.advanced.updateOnSelectorChange &&
                      ((a.poll.change.n = i()),
                      a.poll.change.n !== a.poll.change.o)
                      ? ((a.poll.change.o = a.poll.change.n), void o(3))
                      : s.advanced.updateOnContentResize &&
                        ((a.poll.size.n =
                          r[0].scrollHeight +
                          r[0].scrollWidth +
                          l[0].offsetHeight +
                          r[0].offsetHeight +
                          r[0].offsetWidth),
                        a.poll.size.n !== a.poll.size.o)
                      ? ((a.poll.size.o = a.poll.size.n), void o(1))
                      : !s.advanced.updateOnImageLoad ||
                        ("auto" === s.advanced.updateOnImageLoad &&
                          "y" === s.axis) ||
                        ((a.poll.img.n = l.find("img").length),
                        a.poll.img.n === a.poll.img.o)
                      ? void (
                          (s.advanced.updateOnSelectorChange ||
                            s.advanced.updateOnContentResize ||
                            s.advanced.updateOnImageLoad) &&
                          t()
                        )
                      : ((a.poll.img.o = a.poll.img.n),
                        void l.find("img").each(function() {
                          n(this);
                        }));
                  }, s.advanced.autoUpdateTimeout))
            );
          }
          function n(e) {
            function t(e, t) {
              return function() {
                return t.apply(e, arguments);
              };
            }
            function n() {
              (this.onload = null), ae(e).addClass(b[2]), o(2);
            }
            if (ae(e).hasClass(b[2])) o();
            else {
              var i = new Image();
              (i.onload = t(i, n)), (i.src = e.src);
            }
          }
          function i() {
            !0 === s.advanced.updateOnSelectorChange &&
              (s.advanced.updateOnSelectorChange = "*");
            var e = 0,
              t = l.find(s.advanced.updateOnSelectorChange);
            return (
              s.advanced.updateOnSelectorChange &&
                0 < t.length &&
                t.each(function() {
                  e += this.offsetHeight + this.offsetWidth;
                }),
              e
            );
          }
          function o(e) {
            clearTimeout(l[0].autoUpdate), p.update.call(null, r[0], e);
          }
          var r = ae(this),
            a = r.data(P),
            s = a.opt,
            l = ae("#mCSB_" + a.idx + "_container");
          return e
            ? (clearTimeout(l[0].autoUpdate), void ee(l[0], "autoUpdate"))
            : void t();
        },
        Q = function(e, t, n) {
          return Math.round(e / t) * t - n;
        },
        G = function(e) {
          var t = e.data(P);
          ae(
            "#mCSB_" +
              t.idx +
              "_container,#mCSB_" +
              t.idx +
              "_container_wrapper,#mCSB_" +
              t.idx +
              "_dragger_vertical,#mCSB_" +
              t.idx +
              "_dragger_horizontal"
          ).each(function() {
            n.call(this);
          });
        },
        J = function(o, e, r) {
          function t(e) {
            return a && s.callbacks[e] && "function" == typeof s.callbacks[e];
          }
          function n() {
            return [
              s.callbacks.alwaysTriggerOffsets || y >= w[0] + b,
              s.callbacks.alwaysTriggerOffsets || y <= -C
            ];
          }
          function i() {
            var e = [d[0].offsetTop, d[0].offsetLeft],
              t = [m[0].offsetTop, m[0].offsetLeft],
              n = [d.outerHeight(!1), d.outerWidth(!1)],
              i = [u.height(), u.width()];
            o[0].mcs = {
              content: d,
              top: e[0],
              left: e[1],
              draggerTop: t[0],
              draggerLeft: t[1],
              topPct: Math.round(
                (100 * Math.abs(e[0])) / (Math.abs(n[0]) - i[0])
              ),
              leftPct: Math.round(
                (100 * Math.abs(e[1])) / (Math.abs(n[1]) - i[1])
              ),
              direction: r.dir
            };
          }
          var a = o.data(P),
            s = a.opt,
            l = {
              trigger: "internal",
              dir: "y",
              scrollEasing: "mcsEaseOut",
              drag: !1,
              dur: s.scrollInertia,
              overwrite: "all",
              callbacks: !0,
              onStart: !0,
              onUpdate: !0,
              onComplete: !0
            },
            c = [(r = ae.extend(l, r)).dur, r.drag ? 0 : r.dur],
            u = ae("#mCSB_" + a.idx),
            d = ae("#mCSB_" + a.idx + "_container"),
            f = d.parent(),
            h = s.callbacks.onTotalScrollOffset
              ? U.call(o, s.callbacks.onTotalScrollOffset)
              : [0, 0],
            p = s.callbacks.onTotalScrollBackOffset
              ? U.call(o, s.callbacks.onTotalScrollBackOffset)
              : [0, 0];
          if (
            ((a.trigger = r.trigger),
            (0 === f.scrollTop() && 0 === f.scrollLeft()) ||
              (ae(".mCSB_" + a.idx + "_scrollbar").css("visibility", "visible"),
              f.scrollTop(0).scrollLeft(0)),
            "_resetY" !== e ||
              a.contentReset.y ||
              (t("onOverflowYNone") && s.callbacks.onOverflowYNone.call(o[0]),
              (a.contentReset.y = 1)),
            "_resetX" !== e ||
              a.contentReset.x ||
              (t("onOverflowXNone") && s.callbacks.onOverflowXNone.call(o[0]),
              (a.contentReset.x = 1)),
            "_resetY" !== e && "_resetX" !== e)
          ) {
            if (
              ((!a.contentReset.y && o[0].mcs) ||
                !a.overflowed[0] ||
                (t("onOverflowY") && s.callbacks.onOverflowY.call(o[0]),
                (a.contentReset.x = null)),
              (!a.contentReset.x && o[0].mcs) ||
                !a.overflowed[1] ||
                (t("onOverflowX") && s.callbacks.onOverflowX.call(o[0]),
                (a.contentReset.x = null)),
              s.snapAmount)
            ) {
              var g =
                s.snapAmount instanceof Array
                  ? "x" === r.dir
                    ? s.snapAmount[1]
                    : s.snapAmount[0]
                  : s.snapAmount;
              e = Q(e, g, s.snapOffset);
            }
            switch (r.dir) {
              case "x":
                var m = ae("#mCSB_" + a.idx + "_dragger_horizontal"),
                  v = "left",
                  y = d[0].offsetLeft,
                  w = [
                    u.width() - d.outerWidth(!1),
                    m.parent().width() - m.width()
                  ],
                  x = [e, 0 === e ? 0 : e / a.scrollRatio.x],
                  b = h[1],
                  C = p[1],
                  _ = 0 < b ? b / a.scrollRatio.x : 0,
                  T = 0 < C ? C / a.scrollRatio.x : 0;
                break;
              case "y":
                (m = ae("#mCSB_" + a.idx + "_dragger_vertical")),
                  (v = "top"),
                  (y = d[0].offsetTop),
                  (w = [
                    u.height() - d.outerHeight(!1),
                    m.parent().height() - m.height()
                  ]),
                  (x = [e, 0 === e ? 0 : e / a.scrollRatio.y]),
                  (b = h[0]),
                  (C = p[0]),
                  (_ = 0 < b ? b / a.scrollRatio.y : 0),
                  (T = 0 < C ? C / a.scrollRatio.y : 0);
            }
            x[1] < 0 || (0 === x[0] && 0 === x[1])
              ? (x = [0, 0])
              : x[1] >= w[1]
              ? (x = [w[0], w[1]])
              : (x[0] = -x[0]),
              o[0].mcs || (i(), t("onInit") && s.callbacks.onInit.call(o[0])),
              clearTimeout(d[0].onCompleteTimeout),
              Z(m[0], v, Math.round(x[1]), c[1], r.scrollEasing),
              (!a.tweenRunning &&
                ((0 === y && 0 <= x[0]) || (y === w[0] && x[0] <= w[0]))) ||
                Z(
                  d[0],
                  v,
                  Math.round(x[0]),
                  c[0],
                  r.scrollEasing,
                  r.overwrite,
                  {
                    onStart: function() {
                      r.callbacks &&
                        r.onStart &&
                        !a.tweenRunning &&
                        (t("onScrollStart") &&
                          (i(), s.callbacks.onScrollStart.call(o[0])),
                        (a.tweenRunning = !0),
                        S(m),
                        (a.cbOffsets = n()));
                    },
                    onUpdate: function() {
                      r.callbacks &&
                        r.onUpdate &&
                        t("whileScrolling") &&
                        (i(), s.callbacks.whileScrolling.call(o[0]));
                    },
                    onComplete: function() {
                      if (r.callbacks && r.onComplete) {
                        "yx" === s.axis && clearTimeout(d[0].onCompleteTimeout);
                        var e = d[0].idleTimer || 0;
                        d[0].onCompleteTimeout = setTimeout(function() {
                          t("onScroll") &&
                            (i(), s.callbacks.onScroll.call(o[0])),
                            t("onTotalScroll") &&
                              x[1] >= w[1] - _ &&
                              a.cbOffsets[0] &&
                              (i(), s.callbacks.onTotalScroll.call(o[0])),
                            t("onTotalScrollBack") &&
                              x[1] <= T &&
                              a.cbOffsets[1] &&
                              (i(), s.callbacks.onTotalScrollBack.call(o[0])),
                            (a.tweenRunning = !1),
                            (d[0].idleTimer = 0),
                            S(m, "hide");
                        }, e);
                      }
                    }
                  }
                );
          }
        },
        Z = function(e, t, n, i, o, r, a) {
          function s() {
            b.stop ||
              (y || p.call(),
              (y = K() - v),
              l(),
              y >= b.time &&
                ((b.time = y > b.time ? y + f - (y - b.time) : y + f - 1),
                b.time < y + 1 && (b.time = y + 1)),
              b.time < i ? (b.id = h(s)) : m.call());
          }
          function l() {
            0 < i
              ? ((b.currVal = d(b.time, w, C, i, o)),
                (x[t] = Math.round(b.currVal) + "px"))
              : (x[t] = n + "px"),
              g.call();
          }
          function c() {
            (f = 1e3 / 60),
              (b.time = y + f),
              (h = window.requestAnimationFrame
                ? window.requestAnimationFrame
                : function(e) {
                    return l(), setTimeout(e, 0.01);
                  }),
              (b.id = h(s));
          }
          function u() {
            null != b.id &&
              (window.requestAnimationFrame
                ? window.cancelAnimationFrame(b.id)
                : clearTimeout(b.id),
              (b.id = null));
          }
          function d(e, t, n, i, o) {
            switch (o) {
              case "linear":
              case "mcsLinear":
                return (n * e) / i + t;
              case "mcsLinearOut":
                return (e /= i), e--, n * Math.sqrt(1 - e * e) + t;
              case "easeInOutSmooth":
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e + t
                  : (-n / 2) * (--e * (e - 2) - 1) + t;
              case "easeInOutStrong":
                return (e /= i / 2) < 1
                  ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                  : (e--, (n / 2) * (2 - Math.pow(2, -10 * e)) + t);
              case "easeInOut":
              case "mcsEaseInOut":
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e + 2) + t;
              case "easeOutSmooth":
                return (e /= i), -n * (--e * e * e * e - 1) + t;
              case "easeOutStrong":
                return n * (1 - Math.pow(2, (-10 * e) / i)) + t;
              case "easeOut":
              case "mcsEaseOut":
              default:
                var r = (e /= i) * e,
                  a = r * e;
                return (
                  t +
                  n *
                    (0.499999999999997 * a * r +
                      -2.5 * r * r +
                      5.5 * a +
                      -6.5 * r +
                      4 * e)
                );
            }
          }
          e._mTween || (e._mTween = { top: {}, left: {} });
          var f,
            h,
            p = (a = a || {}).onStart || function() {},
            g = a.onUpdate || function() {},
            m = a.onComplete || function() {},
            v = K(),
            y = 0,
            w = e.offsetTop,
            x = e.style,
            b = e._mTween[t];
          "left" === t && (w = e.offsetLeft);
          var C = n - w;
          (b.stop = 0), "none" !== r && u(), c();
        },
        K = function() {
          return window.performance && window.performance.now
            ? window.performance.now()
            : window.performance && window.performance.webkitNow
            ? window.performance.webkitNow()
            : Date.now
            ? Date.now()
            : new Date().getTime();
        },
        n = function() {
          var e = this;
          e._mTween || (e._mTween = { top: {}, left: {} });
          for (var t = ["top", "left"], n = 0; n < t.length; n++) {
            var i = t[n];
            e._mTween[i].id &&
              (window.requestAnimationFrame
                ? window.cancelAnimationFrame(e._mTween[i].id)
                : clearTimeout(e._mTween[i].id),
              (e._mTween[i].id = null),
              (e._mTween[i].stop = 1));
          }
        },
        ee = function(e, t) {
          try {
            delete e[t];
          } catch (h) {
            e[t] = null;
          }
        },
        te = function(e) {
          return !(e.which && 1 !== e.which);
        },
        ne = function(e) {
          var t = e.originalEvent.pointerType;
          return !(t && "touch" !== t && 2 !== t);
        },
        ie = function(e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        },
        oe = function(e) {
          var t = e.parents(".mCSB_container");
          return [
            e.offset().top - t.offset().top,
            e.offset().left - t.offset().left
          ];
        },
        re = function() {
          function e() {
            var e = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return "hidden";
            for (var t = 0; t < e.length; t++)
              if (e[t] + "Hidden" in document) return e[t] + "Hidden";
            return null;
          }
          var t = e();
          return !!t && document[t];
        };
      (ae.fn[h] = function(e) {
        return p[e]
          ? p[e].apply(this, Array.prototype.slice.call(arguments, 1))
          : "object" != typeof e && e
          ? void ae.error("Method " + e + " does not exist")
          : p.init.apply(this, arguments);
      }),
        (ae[h] = function(e) {
          return p[e]
            ? p[e].apply(this, Array.prototype.slice.call(arguments, 1))
            : "object" != typeof e && e
            ? void ae.error("Method " + e + " does not exist")
            : p.init.apply(this, arguments);
        }),
        (ae[h].defaults = o),
        (window[h] = !0),
        ae(window).bind("load", function() {
          ae(i)[h](),
            ae.extend(ae.expr[":"], {
              mcsInView:
                ae.expr[":"].mcsInView ||
                function(e) {
                  var t,
                    n,
                    i = ae(e),
                    o = i.parents(".mCSB_container");
                  if (o.length)
                    return (
                      (t = o.parent()),
                      0 <=
                        (n = [o[0].offsetTop, o[0].offsetLeft])[0] + oe(i)[0] &&
                        n[0] + oe(i)[0] < t.height() - i.outerHeight(!1) &&
                        0 <= n[1] + oe(i)[1] &&
                        n[1] + oe(i)[1] < t.width() - i.outerWidth(!1)
                    );
                },
              mcsInSight:
                ae.expr[":"].mcsInSight ||
                function(e, t, n) {
                  var i,
                    o,
                    r,
                    a,
                    s = ae(e),
                    l = s.parents(".mCSB_container"),
                    c =
                      "exact" === n[3]
                        ? [[1, 0], [1, 0]]
                        : [[0.9, 0.1], [0.6, 0.4]];
                  if (l.length)
                    return (
                      (i = [s.outerHeight(!1), s.outerWidth(!1)]),
                      (r = [
                        l[0].offsetTop + oe(s)[0],
                        l[0].offsetLeft + oe(s)[1]
                      ]),
                      (o = [
                        l.parent()[0].offsetHeight,
                        l.parent()[0].offsetWidth
                      ]),
                      (a = [
                        i[0] < o[0] ? c[0] : c[1],
                        i[1] < o[1] ? c[0] : c[1]
                      ]),
                      r[0] - o[0] * a[0][0] < 0 &&
                        0 <= r[0] + i[0] - o[0] * a[0][1] &&
                        r[1] - o[1] * a[1][0] < 0 &&
                        0 <= r[1] + i[1] - o[1] * a[1][1]
                    );
                },
              mcsOverflow:
                ae.expr[":"].mcsOverflow ||
                function(e) {
                  var t = ae(e).data(P);
                  if (t) return t.overflowed[0] || t.overflowed[1];
                }
            });
        });
    }),
      (t = "function" == typeof define && define.amd),
      (n = "undefined" != typeof module && module.exports),
      (i = "https:" == document.location.protocol ? "https:" : "http:"),
      (o =
        "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js"),
      t ||
        (n
          ? require("jquery-mousewheel")(ae)
          : ae.event.special.mousewheel ||
            ae("head").append(
              decodeURI("%3Cscript src=" + i + "//" + o + "%3E%3C/script%3E")
            )),
      e();
  }),
  $(document).ready(function() {
    function e(e, t, n) {
      $(".year-row").show(),
        $(".year-row li").show(),
        "all" != e && ($(".year-row").hide(), $(".year-row." + e).show()),
        "all" != t &&
          $(".year-row li")
            .not("." + t)
            .hide(),
        "all" != n &&
          $(".year-row li")
            .not("." + n)
            .hide(),
        0 < $(".Press-release-data li:visible").length
          ? $(".no-news-text").hide()
          : $(".no-news-text").show();
    }
    function t(e, t, n) {
      console.log(e + ", " + t + ", " + n),
        $(".year-row").show(),
        $(".year-row li").show(),
        "all" != e && ($(".year-row").hide(), $(".year-row." + e).show()),
        "all" != t &&
          $(".year-row li")
            .not("." + t)
            .hide(),
        "all" != n &&
          $(".year-row li")
            .not("." + n)
            .hide(),
        0 < $(".Press-release-data li:visible").length
          ? $(".no-news-text").hide()
          : $(".no-news-text").show();
    }
    $(".clear").html(""),
      $(".testimonial-section .testi-box .read-more").click(function() {
        $(this)
          .parent()
          .parent()
          .parent()
          .siblings()
          .find(".hide-test")
          .slideUp(),
          $(this)
            .prev()
            .slideToggle(),
          $(this)
            .parent()
            .parent()
            .parent()
            .siblings()
            .find(".read-more")
            .text("Read More");
        var e = "Read Less" == $(this).text() ? "Read More" : "Read Less";
        $(this).text(e);
      }),
      $(".mob-login-btn").click(function() {
        $(".mob-login-overlay, .mob-login-popup").fadeIn();
      }),
      $(".close-login-popup, .mob-login-overlay").click(function() {
        $(".mob-login-overlay, .mob-login-popup").hide();
      }),
      $(".home-loan-btn").click(function() {
        $(".mob-loan-overlay, .mob-loan-popup").fadeIn();
      }),
      $(".close-loan-popup, .mob-loan-overlay").click(function() {
        $(".mob-loan-overlay, .mob-loan-popup").hide();
      }),
      $(".home-loan-form-btn").click(function() {
        $(".mob-loan-overlay, .mob-loan-form-popup").fadeIn();
      }),
      $(".close-loan-form-popup, .mob-loan-overlay").click(function() {
        $(".mob-loan-overlay, .mob-loan-form-popup").hide();
      }),
      $(".rural-deposit-btn").click(function() {
        $(".mob-loan-overlay, .mob-rural-deposit-popup").fadeIn();
      }),
      $(".close-rural-deposit-popup, .mob-loan-overlay").click(function() {
        $(".mob-loan-overlay, .mob-rural-deposit-popup").hide();
      }),
      $(".locatus-btn").click(function() {
        $(".mob-login-overlay, .mob-locateus-popup").fadeIn();
      }),
      $(".close-locateus-popup, .mob-login-overlay").click(function() {
        $(".mob-login-overlay, .mob-locateus-popup").hide();
      }),
      (headerH = $(".header").outerHeight()),
      $("#main").css("padding-top", headerH),
      $(".main-menu ul li").each(function() {
        var e = $(this).offset().left;
        $(this)
          .find(".header-submenu")
          .css("left", e),
          $(".header-submenu").css("top", headerH);
      }),
      $(".main-menu li a").click(function() {
        $("html,body").animate(
          { scrollTop: $($(this).attr("href")).offset().top - headerH - 20 },
          "slow"
        );
      }),
      $(".sub-menu-box li a").click(function() {
        $("html,body").animate(
          { scrollTop: $($(this).attr("href")).offset().top - headerH - 30 },
          "slow"
        );
      }),
      $(".submenu-box li.show-next .down-arrow").click(function() {
        $(this)
          .parent()
          .siblings(".show-next")
          .find(".desk-sub-menu")
          .slideUp(),
          $(this)
            .parent()
            .find(".desk-sub-menu")
            .slideToggle();
      }),
      $(".address-box .acount-heading").click(function() {
        $(this)
          .parent()
          .siblings()
          .find(".show-address")
          .slideUp(),
          $(this)
            .parent()
            .siblings()
            .find("span")
            .children("i")
            .show(),
          $(this)
            .next()
            .slideToggle(),
          $(this)
            .find("span")
            .children("i")
            .hide(),
          $(".map-box-tab").hide(),
          (dataTab = $(this).attr("data-tab")),
          $("#" + dataTab).show();
      }),
      $(window).width() < 768 &&
        ((headerM = $(".mob-header").outerHeight()),
        $(document).on("click", ".side-menu", function() {
          "hidden" == $(".ac-right-box").css("visibility")
            ? ($(".ac-right-box")
                .addClass("active")
                .css("top", headerM + 0),
              $(this)
                .text("Close Additional Links")
                .css("background-color", "#056262"))
            : ($(".ac-right-box")
                .removeClass("active")
                .css("top", "100%"),
              $(this)
                .text("Additional Links")
                .css("background-color", "#f58f41"));
        })),
      $(".vertical-scroll").mCustomScrollbar(),
      $(".banner-slider, .desk-inner-banner-slider").owlCarousel({
        items: 1,
        dots: !1,
        smartSpeed: 1e3,
        autoplay: !0,
        loop: !0,
        nav: !0
      }),
      $(".personal-slider, .mob-personal-slider").owlCarousel({
        items: 1,
        dots: !0,
        smartSpeed: 1e3,
        autoplay: !0,
        loop: !0,
        nav: !1
      }),
      $(".csr-slider").owlCarousel({
        dots: !1,
        smartSpeed: 1e3,
        autoplay: !0,
        loop: !0,
        nav: !0,
        responsive: {
          0: { items: 1, margin: 0 },
          767: { items: 2, margin: 35 }
        }
      }),
      $(".mobile-banner-slider").owlCarousel({
        items: 1,
        dots: !1,
        smartSpeed: 1e3,
        autoplay: !0,
        loop: !0,
        nav: !0
      }),
      $(".initiat-slider").owlCarousel({
        dots: !1,
        smartSpeed: 1e3,
        autoplay: !0,
        loop: !0,
        nav: !0,
        responsive: {
          0: { items: 1, margin: 25, stagePadding: 35, nav: !1 },
          480: { items: 1, margin: 30, stagePadding: 100, nav: !1 },
          768: { items: 3, margin: 40 },
          1023: { margin: 75 },
          1500: { margin: 100 }
        }
      }),
      $(".download-slider").owlCarousel({
        dots: !1,
        smartSpeed: 1e3,
        autoplay: !1,
        loop: !0,
        nav: !1,
        responsive: {
          0: {
            items: 1,
            margin: 25,
            stagePadding: 35,
            nav: !1,
            mouseDrag: !0,
            touchDrag: !0
          },
          768: { items: 3, margin: 40, mouseDrag: !1, touchDrag: !1 },
          1023: { margin: 75, mouseDrag: !1, touchDrag: !1 },
          1500: { margin: 100, mouseDrag: !1, touchDrag: !1 }
        }
      }),
      $(".test-slider").owlCarousel({
        dots: !1,
        smartSpeed: 1e3,
        autoplay: !0,
        loop: !0,
        nav: !0,
        responsive: {
          0: { items: 1, stagePadding: 25, mouseDrag: !0, touchDrag: !0 },
          480: { items: 1, stagePadding: 50, mouseDrag: !0, touchDrag: !0 },
          768: { items: 3, margin: 30 },
          1024: { items: 3, margin: 50 }
        }
      }),
      $(".tm-slider").owlCarousel({
        dots: !1,
        smartSpeed: 1e3,
        autoplay: !0,
        loop: !0,
        nav: !0,
        items: 1
      }),
      $(".award-slider").owlCarousel({
        dots: !1,
        smartSpeed: 1e3,
        autoplay: !0,
        loop: !0,
        nav: !0,
        responsive: {
          0: { items: 1, margin: 20, dot: !0, nav: !0 },
          768: { items: 2, margin: 50 },
          1023: { items: 3, margin: 75 },
          1500: { items: 3, margin: 100 }
        }
      }),
      $(".apply-btn").click(function() {
        $(".apply-popup").addClass("active");
      }),
      $(".close-apply").click(function() {
        $(".apply-popup").removeClass("active");
      }),
      $(".fancybox-media").fancybox({
        openEffect: "none",
        closeEffect: "none",
        helpers: { media: {} }
      }),
      $(".fancybox").fancybox(),
      $(".announcements-carousal").owlCarousel({
        dots: !1,
        nav: !0,
        smartSpeed: 1e3,
        loop: !0,
        center: !1,
        margin: 30,
        items: 2,
        responsive: {
          0: { items: 1.3, margin: 20, center: !0 },
          480: { items: 1.8, margin: 20, center: !0 },
          1024: { items: 2, margin: 20 }
        }
      }),
      $(function() {
        function e() {
          (wintop = $(window).scrollTop()),
            t.each(function() {
              if ((($elm = $(this)), $elm.hasClass("showme"))) return !0;
              (topcoords = $elm.offset().top),
                wintop > topcoords - n && $elm.addClass("showme");
            });
        }
        var t = $(".hideme"),
          n = $(window).height();
        $(document).height();
        $(window).scroll(function() {
          e();
        });
      }),
      $(".mob-sub-menu.data_menu li a[class]").click(function() {
        var e = $(this).attr("class");
        $(".sub-menu-box").hide(),
          $("#" + e).show(),
          $(".mob-main-menu").addClass("active"),
          $(".back-menu").removeClass("active");
      }),
      $(".back-menu").click(function() {
        $(".mob-main-menu").removeClass("active");
      }),
      $(".mob-menu-box .show-mobsub-menu").click(function() {
        $(this)
          .next()
          .slideToggle(),
          $(this)
            .find(".mob-arrow-right")
            .toggleClass("fa-angle-up")
            .toggleClass("fa-angle-down"),
          $(this)
            .parent()
            .siblings()
            .find(".mob-sub-menu")
            .slideUp(),
          $(this)
            .parent()
            .siblings()
            .find(".mob-arrow-right")
            .removeClass("fa-angle-up")
            .addClass("fa-angle-down");
      }),
      $(".menu-icon").click(function() {
        $(this)
          .find(".menu-btn")
          .toggleClass("active"),
          $(this)
            .find(".menu-btn")
            .children("p")
            .toggle(),
          $(".mob-menu-cont").toggleClass("active"),
          $(".mob-header-overlay").toggle(),
          (mLogoH = $(".mob-logo").outerHeight()),
          (mTopM = $(".mob-top-menu").outerHeight()),
          $(".mob-menu-cont").css("top", mLogoH + mTopM);
      }),
      $(".sub-menu-box a").click(function() {
        $(".menu-icon").trigger("click");
      }),
      $(".mob-header-overlay").click(function() {
        $(".menu-icon").trigger("click");
      }),
      $(window).width() < 768 &&
        ($(".top-right").insertBefore(".ft-bottom-box"),
        $(".ft-box .heading05").click(function() {
          $(this)
            .next()
            .slideToggle(),
            $(this).toggleClass("active"),
            $(this)
              .parent()
              .siblings()
              .find(".heading05")
              .removeClass("active"),
            $(this)
              .find(".ft-arrow")
              .toggleClass("fa-angle-up")
              .toggleClass("fa-angle-down"),
            $(this)
              .parent()
              .siblings()
              .find(".ft-menu-list")
              .slideUp(),
            $(this)
              .parent()
              .siblings()
              .find(".ft-arrow")
              .removeClass("fa-angle-up")
              .addClass("fa-angle-down");
        })),
      $(document).on(
        "change",
        ".online-news-dropdown .news-year-dropdown, .online-news-dropdown .news-month-dropdown, .online-news-dropdown .news-pub-dropdown",
        function() {
          (data1 = $(
            ".online-news-dropdown .news-year-dropdown option:selected"
          ).val()),
            (data2 = $(
              ".online-news-dropdown .news-month-dropdown option:selected"
            ).val()),
            (data3 = $(
              ".online-news-dropdown .news-pub-dropdown option:selected"
            ).val()),
            e(data1, data2, data3);
        }
      ),
      $(document).on(
        "change",
        ".print-news-dropdown .news-year-dropdown, .print-news-dropdown .news-month-dropdown, .print-news-dropdown .news-city-dropdown",
        function() {
          (data1 = $(
            ".print-news-dropdown .news-year-dropdown option:selected"
          ).val()),
            (data2 = $(
              ".print-news-dropdown .news-month-dropdown option:selected"
            ).val()),
            (data3 = $(
              ".print-news-dropdown .news-city-dropdown option:selected"
            ).val()),
            t(data1, data2, data3);
        }
      ),
      $(".news-tab li").click(function() {
        (dataTab = $(this).attr("data-tab")),
          $(".news-tab li").removeClass("active"),
          $(".tab-box").hide(),
          $("#" + dataTab).show(),
          $(this).addClass("active");
      }),
      $(".current-year-slider").owlCarousel({
        dots: !1,
        smartSpeed: 1e3,
        loop: !1,
        nav: !1,
        mouseDrag: !1,
        touchDrag: !1,
        center: !1,
        responsive: {
          0: { items: 1, margin: 0, nav: !0 },
          481: { items: 2, margin: 25, nav: !0 },
          981: {
            items: 2,
            center: !1,
            margin: 35,
            nav: !0,
            mouseDrag: !0,
            touchDrag: !0
          },
          1280: { items: 3, center: !1, margin: 35 }
        }
      }),
      $(".close-popup, .popup-overlay").click(function() {
        $(".popup-box, .popup-overlay").hide();
      }),
      $(".show-popup").click(function() {
        (dataPopup = $(this).attr("data-popup")),
          $("#" + dataPopup).show(),
          $(".popup-overlay").show(),
          setTimeout(function() {
            $(".popup-swap-overlay").fadeOut();
          }, 2e3);
      }),
      $(".faq-question").click(function() {
        var e = this;
        $(this)
          .parent()
          .siblings()
          .find(".faq-answer-box")
          .slideUp(),
          $(this)
            .parent()
            .siblings()
            .find(".faq-question")
            .removeClass("active"),
          $(this)
            .next(".faq-answer-box")
            .slideToggle(),
          $(this).toggleClass("active"),
          $(".swap-overlay").show(),
          setTimeout(function() {
            $(e)
              .next(".faq-answer-box")
              .find(".swap-overlay")
              .fadeOut();
          }, 1e3);
      }),
      $(document).on("change", ".faq-dropdown", function() {
        $(".faq-row").hide(),
          $("#" + $(this).val()).fadeIn(),
          $(".faq-answer-box").slideUp();
      }),
      $(".feedback-customer input[type='radio']").click(function() {
        var e = $(this).val();
        "yes" == e && window.location.assign("feedback-existing-customer"),
          "no" == e && window.location.assign("feedback-new-customer");
      }),
      $(".complaint-customer input[type='radio']").click(function() {
        var e = $(this).val();
        "yes" == e && window.location.assign("complaint-existing-customer"),
          "no" == e && window.location.assign("complaint-new-customer");
      }),
      $("#form-dropdown").on("change", function() {
        "feedback" == $(this).val()
          ? (window.location.href = "feedback-existing-customer")
          : "appreciations" == $(this).val()
          ? (window.location.href = "feedback-appreciations-form")
          : "complaint" == $(this).val()
          ? (window.location.href = "complaint-existing-customer")
          : "unauth_tran" == $(this).val() &&
            (window.location.href = "unauthorised-transaction");
      });
  }),
  $(document).ready(function() {
    $(".coloroverlay_moderl, .close_pop").click(function() {
      $("#model_pop_box").removeClass("show"),
        $("body").removeClass("body_hidden");
    }),
      $(".faq_tab_wrap li").click(function() {
        var e = $(this).attr("data-tab");
        $(".faq_tab_wrap li").removeClass("active"),
          $(".tab_content").removeClass("active"),
          $(this).addClass("active"),
          $("#" + e).addClass("active");
      });
  }),
  $(window).on("load", function() {
    $("#model_pop_box").addClass("show"), $("body").addClass("body_hidden");
  }),
  $(window).load(function() {
    $(".clear").html(""),
      $("html,body").animate({
        scrollTop:
          ($(window.location.hash).offset() || { top: NaN }).top - headerH - 20
      }),
      (headerM = $(".mob-header").outerHeight()),
      $(window).width() < 980 &&
        $("html,body").animate({
          scrollTop:
            ($(window.location.hash).offset() || { top: NaN }).top -
            headerM -
            30
        }),
      767 < $(window).width() &&
        ((floatBoxTopPos = ($(".ac-right-box").offset() || { top: NaN }).top),
        (floatBoxHeight = $(".ac-right-box").outerHeight()),
        (footerFromTop = $("#footer").offset().top),
        (absPosition = footerFromTop - floatBoxHeight - 150),
        (win = $(window)),
        (floatingDiv = $(".ac-right-box")),
        (leftBoxPo = ($(".ac-left-box").offset() || { top: NaN }).top),
        (winWidth = $(window).width()),
        (conWidth = $(".container").width()),
        (rightPo = (winWidth - conWidth) / 2),
        win.scroll(function() {
          win.scrollTop() > leftBoxPo - 120 &&
            (floatingDiv
              .addClass("sticky")
              .css({ top: headerH, right: rightPo }),
            floatingDiv.removeClass("absolute")),
            win.scrollTop() > leftBoxPo && win.scrollTop() < absPosition
              ? (floatingDiv
                  .addClass("sticky")
                  .css({ top: headerH, right: rightPo }),
                floatingDiv.removeClass("absolute"))
              : win.scrollTop() > floatBoxTopPos &&
                win.scrollTop() > absPosition &&
                (floatingDiv.removeClass("sticky"),
                floatingDiv
                  .addClass("absolute")
                  .css({ top: "auto", right: 0 })),
            win.scrollTop() < leftBoxPo - 20 &&
              (floatingDiv.removeClass("sticky"),
              floatingDiv.removeClass("absolute"));
        })),
      $(".menu-slider").owlCarousel({
        dots: !1,
        smartSpeed: 1e3,
        autoplay: !1,
        loop: !1,
        nav: !0,
        navRewind: !1,
        responsive: {
          0: { items: 3, dot: !0, nav: !0 },
          640: { items: 4, dot: !0, nav: !0 }
        }
      }),
      $(window).width() < 980 &&
        ((headerM = $(".mob-header").outerHeight()),
        $("#main").css("padding-top", headerM),
        $(".dwn-link").html("<i class='fa fa-download'></i>")),
      (swapTPos = ($(".swap-overlay").offset() || { top: NaN }).top),
      $(window).scroll(function() {
        $(this).scrollTop() > swapTPos - headerM - 100 &&
          $(".list-gray-box .swap-overlay").fadeOut();
      });
  }),
  (window.onload = function() {
    function e(e) {
      if ((console.log(e), "https://demo.triniti.ai" === e.origin && e.data))
        switch (e.data.type) {
          case "hideChatBox":
            break;
          case "destroyContainerFrame":
            document.getElementById("chatbot-iframe").style.display = "none";
            break;
          case "hideChatBoxInAvatarMode":
            (document.getElementById("chatbot-iframe").style.width = "90px"),
              (document.getElementById("chatbot-iframe").style.height = "90px");
            break;
          case "showChatBox":
            window.innerWidth <= 600
              ? ((document.getElementById("chatbot-iframe").style.width =
                  "100%"),
                (document.getElementById("chatbot-iframe").style.height =
                  "100%"))
              : ((document.getElementById("chatbot-iframe").style.width =
                  "350px"),
                (document.getElementById("chatbot-iframe").style.height =
                  "80%")),
              (document.getElementById("chatbot-iframe").style.right = "0");
        }
    }
    window.addEventListener("message", e, !1);
  }),
  (function() {
    function e() {
      var e = document.createElement("script");
      e.setAttribute("async", !0),
        e.setAttribute("type", "text/javascript"),
        (e.src =
          "https://bot.surbo.io/static/1.0.1/js/custom/widget_surbo.js?id=5e1db4fb04cbc904472992cc&srb_1=&srb_2=&srb_3=");
      var t = document.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(e, t);
    }
    window.attachEvent
      ? window.attachEvent("onload", e)
      : window.addEventListener("load", e, !1);
  })(),
  $(".usp-slider").owlCarousel({
    loop: !0,
    dots: !0,
    margin: 10,
    nav: !0,
    responsive: { 0: { items: 1 }, 767: { items: 2 }, 1023: { items: 3 } }
  });
  $('table').wrap('<div class="tablewrap"></div>');