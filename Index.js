document.querySelector(".theme-switch").addEventListener("click", () => {
    if (document.querySelector("html").dataset.theme === "light") {
      document.querySelector("html").dataset.theme = "dark";
      document.getElementById("website-logo").src="Dark-Logo.png";
    } else {
      document.querySelector("html").dataset.theme = "light";
      document.getElementById("website-logo").src="White-Logo.png";
    }
  });