(function () {
  "use strict";

  var controls = document.querySelectorAll("[data-theme-value]");
  var stored = "auto";

  try {
    stored = localStorage.getItem("lithespan-theme") || "auto";
  } catch (error) {}

  if (stored !== "light" && stored !== "dark") stored = "auto";

  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } else {
      document.documentElement.removeAttribute("data-theme");
      document.documentElement.style.colorScheme = "light dark";
    }

    controls.forEach(function (control) {
      control.setAttribute("aria-pressed", String(control.dataset.themeValue === theme));
    });

    try {
      localStorage.setItem("lithespan-theme", theme);
    } catch (error) {}
  }

  controls.forEach(function (control) {
    control.addEventListener("click", function () {
      applyTheme(control.dataset.themeValue);
    });
  });

  applyTheme(stored);
}());
