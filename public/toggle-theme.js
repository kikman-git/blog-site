const primaryColorScheme = ""; // "light" | "dark"

// Get theme data from local storage
const currentTheme = localStorage.getItem("theme");

function getPreferTheme() {
  if (currentTheme) return currentTheme;
  if (primaryColorScheme) return primaryColorScheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

let themeValue = getPreferTheme();

function setPreference() {
  localStorage.setItem("theme", themeValue);
  reflectPreference();
}

function reflectPreference() {
  document.firstElementChild.setAttribute("data-theme", themeValue);

  document.querySelector("#theme-btn")?.setAttribute("aria-label", themeValue);
}

reflectPreference();

window.onload = () => {
  reflectPreference();

  document.querySelector("#theme-btn")?.addEventListener("click", () => {
    themeValue = themeValue === "light" ? "dark" : "light";
    setPreference();
  });
};

window
  .matchMedia("(prefers-color-scheme:dark")
  .addEventListener("change", ({ matches: isDark }) => {
    themeValue = isDark ? "dark" : "light";
    setPreference();
  });
