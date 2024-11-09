document.querySelector(".theme-switch").addEventListener("click", () => {
    if (document.querySelector("html").dataset.theme === "light") {
      document.querySelector("html").dataset.theme = "dark";
    } else {
      document.querySelector("html").dataset.theme = "light";
    }
  });