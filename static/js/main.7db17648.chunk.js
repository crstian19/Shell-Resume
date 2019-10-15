(window.webpackJsonp = window.webpackJsonp || []).push([
  [0], {
    231: function(e, n, t) {},
    233: function(e) {
      e.exports = {
        name: "Cristian Gutiérrez",
        bio: "Lolcat lover <3",
        education: [{
          university: "Universidad Politécnica de Cartagena",
          degree: "Telecom engineering",
          fieldOfStudy: "Computer Science",
          grade: 88,
          startYear: 2014,
          endYear: null,
        }],
        work: [{
          company: "PCComponentes",
          position: "Store Assistant",
          startMonth: 7,
          startYear: 2019,
          endMonth: null,
          endYear: null,
          description: null,
        }],
        awards: [{
          title: "Primer premio I Concurso de Ideas Tecnológicas por la Igualdad de Género`",
          description: "N/A",
          awarder: "https://upct.es",
          year: 2018
        }],
        skills: [{
          name: "Work",
          level: "in Progress",
          keywords: null,
        }],
        languages: [{
          name: "English 🇬🇧",
          level: "Intermediate"
        }, {
          name: "Espa\xf1ol 🇪🇸",
          level: "Native"
        }, {
          name: "Fran\xe7ais 🇫🇷",
          level: "Basic"
        }]
      }
    },
    235: function(e, n, t) {
      "use strict";
      t.r(n);
      var a = t(0),
        r = t.n(a),
        o = t(60),
        i = t.n(o),
        s = t(14),
        l = t(61),
        c = t(17),
        d = t(9),
        m = t(15),
        u = t(31),
        g = t(70),
        h = t(62),
        p = t(66),
        f = t(40),
        w = (t(231), function(e) {
          function n(e) {
            var t;
            return Object(s.a)(this, n), t = Object(c.a)(this, Object(d.a)(n).call(this, e)), u.a.initialize("UA-126193327-1"), t
          }
          return Object(m.a)(n, e), Object(l.a)(n, [{
            key: "render",
            value: function() {
              return u.a.pageview(window.location.pathname + window.location.search), r.a.createElement("div", {
                className: "content"
              }, r.a.createElement("div", {
                className: "flex-center-h"
              }, r.a.createElement("header", null, r.a.createElement("h1", null, "Crstian's Shell"), r.a.createElement("span", null, "Lolcat Lover <3"))), r.a.createElement("div", {
                className: "flex-center flex-grow"
              }, r.a.createElement("div", {
                style: {
                  width: "100%",
                  height: "100%",
                  maxWidth: 1024,
                  maxHeight: 512,
                  margin: "auto"
                }
              }, r.a.createElement(h.Terminal, {
                id: "terminal"
              }, r.a.createElement(p.a, {
                options: {
                  welcomeMessage: "Welcome to my shell. \r\nPlease type `help` to get started."
                },
                providers: [new f.Json(t(233)), new f.GitHub("crstian19")],
                onInput: function(e) {
                  u.a.event({
                    category: "bashme.command",
                    action: e
                  })
                }
              })))), r.a.createElement("div", {
                className: "flex-center-h"
              }, r.a.createElement("footer", null, r.a.createElement("ul", null, r.a.createElement("li", null, r.a.createElement("a", {
                href: "https://github.com/crstian19",
                alt: "GitHub"
              }, r.a.createElement(g.a, null))), r.a.createElement("li", null, r.a.createElement("a", {
                href: "mailto:cristian@crstian.me"
              }, "Contact"))), r.a.createElement("br", null), "Based in agurodriguez code. Coded with a lot of \u2764 in ", r.a.createElement("span", {
                "aria-label": "Spain",
                role: "img"
              }, "🇪🇸"))))
            }
          }]), n
        }(a.Component)),
        v = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

      function y(e) {
        navigator.serviceWorker.register(e).then(function(e) {
          e.onupdatefound = function() {
            var n = e.installing;
            n.onstatechange = function() {
              "installed" === n.state && (navigator.serviceWorker.controller ? console.log("New content is available; please refresh.") : console.log("Content is cached for offline use."))
            }
          }
        }).catch(function(e) {
          console.error("Error during service worker registration:", e)
        })
      }
      i.a.render(r.a.createElement(w, null), document.getElementById("root")),
        function() {
          if ("serviceWorker" in navigator) {
            if (new URL("", window.location).origin !== window.location.origin) return;
            window.addEventListener("load", function() {
              var e = "".concat("", "/service-worker.js");
              v ? (function(e) {
                fetch(e).then(function(n) {
                  404 === n.status || -1 === n.headers.get("content-type").indexOf("javascript") ? navigator.serviceWorker.ready.then(function(e) {
                    e.unregister().then(function() {
                      window.location.reload()
                    })
                  }) : y(e)
                }).catch(function() {
                  console.log("No internet connection found. App is running in offline mode.")
                })
              }(e), navigator.serviceWorker.ready.then(function() {
                console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")
              })) : y(e)
            })
          }
        }()
    },
    71: function(e, n, t) {
      e.exports = t(235)
    }
  },
  [
    [71, 2, 1]
  ]
]);
//# sourceMappingURL=main.7db17648.chunk.js.map
