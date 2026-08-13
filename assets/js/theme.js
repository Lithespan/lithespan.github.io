(function () {
  "use strict";

  var control = document.querySelector("[data-theme-toggle]");
  var media = window.matchMedia("(prefers-color-scheme: dark)");
  var stored = null;

  try {
    stored = localStorage.getItem("lithespan-theme");
  } catch (error) {}

  if (stored !== "light" && stored !== "dark") stored = null;

  function currentTheme() {
    return document.documentElement.dataset.theme || (media.matches ? "dark" : "light");
  }

  function updateControl() {
    if (!control) return;
    var next = currentTheme() === "dark" ? "light" : "dark";
    control.setAttribute("aria-label", "Use " + next + " theme");
    control.dataset.currentTheme = currentTheme();
  }

  function applyTheme(theme, remember) {
    if (theme) {
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } else {
      document.documentElement.removeAttribute("data-theme");
      document.documentElement.style.colorScheme = "light dark";
    }

    if (remember) {
      try {
        localStorage.setItem("lithespan-theme", theme);
      } catch (error) {}
    }
    updateControl();
  }

  if (control) {
    control.addEventListener("click", function () {
      applyTheme(currentTheme() === "dark" ? "light" : "dark", true);
    });
  }

  media.addEventListener("change", function () {
    if (!document.documentElement.dataset.theme) updateControl();
  });

  applyTheme(stored, false);
}());
