// Dongming Zhao, LCSW — shared interactivity
// Mobile nav toggle, FAQ accordion, and a light scroll-reveal.
// No frameworks; everything degrades gracefully with JS off (nav becomes
// a static in-flow list, FAQ panels are simply open, reveal content is visible).

(function () {
  "use strict";

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector(".nav__toggle");
  var nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!isOpen));
      toggle.setAttribute("aria-expanded", String(!isOpen));
      document.body.style.overflow = isOpen ? "" : "hidden";
    });

    nav.querySelectorAll(".nav__links a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---- FAQ accordion ---- */
  var faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
    var trigger = item.querySelector(".faq-item__trigger");
    var panel = item.querySelector(".faq-item__panel");
    if (!trigger || !panel) return;

    trigger.addEventListener("click", function () {
      var isOpen = item.getAttribute("data-open") === "true";

      // Close siblings for a single-open accordion feel.
      faqItems.forEach(function (other) {
        if (other !== item) {
          other.setAttribute("data-open", "false");
          var otherTrigger = other.querySelector(".faq-item__trigger");
          var otherPanel = other.querySelector(".faq-item__panel");
          if (otherTrigger) otherTrigger.setAttribute("aria-expanded", "false");
          if (otherPanel) otherPanel.style.height = "0px";
        }
      });

      item.setAttribute("data-open", String(!isOpen));
      trigger.setAttribute("aria-expanded", String(!isOpen));
      panel.style.height = isOpen ? "0px" : panel.scrollHeight + "px";
    });
  });

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
