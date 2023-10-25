(() => {
  "use strict";
  let e = !0,
    t = (t = 500) => {
      let n = document.querySelector("body");
      if (e) {
        let o = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < o.length; e++) {
            o[e].style.paddingRight = "0px";
          }
          (n.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, t),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    },
    n = (t = 500) => {
      let n = document.querySelector("body");
      if (e) {
        let o = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < o.length; e++) {
          o[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (n.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    };
  let o = !1;
  setTimeout(() => {
    if (o) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    window.jQuery ? console.log("YEs") : console.log("no");
  let c = 1;
  function i(e, t) {
    e.classList.contains(t) ? e.classList.remove(t) : e.classList.add(t);
  }
  $(window).scroll(function () {
    $("#counter").each(function () {
      $(this).offset().top < $(window).scrollTop() + 250 &&
        c < 2 &&
        ($(".statistic__number").addClass("opacity_1"),
        $("div").each(function () {
          let e = 1;
          const t = $(this).data("num"),
            n = 2e3 / t,
            o = $(this),
            i = setInterval(function () {
              e <= t ? o.html(e) : ((c = 2), clearInterval(i)), e++;
            }, n);
        }));
    });
  });
  const d = document.getElementById("firstVideoBtn"),
    l = document.getElementById("secondVideoBtn");
  (d.onclick = () => {
    i(document.getElementById("firstVideo"), "checked");
  }),
    (l.onclick = () => {
      i(document.getElementById("secondVideo"), "checked");
    }),
    document.addEventListener("click", (e) => {
      const t = document.querySelector(".checked");
      !t ||
        d.contains(e.target) ||
        l.contains(e.target) ||
        t.classList.remove("checked");
    }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      let o = document.querySelector(".icon-menu");
      o &&
        o.addEventListener("click", function (o) {
          e &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? t(e) : n(e);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })();
})();
