document.querySelector(".theme-switch").addEventListener("click", () => {
    if (document.querySelector("html").dataset.theme === "light") {
      document.querySelector("html").dataset.theme = "dark";
      document.getElementById("website-logo").src="Dark-Logo.png";
    } else {
      document.querySelector("html").dataset.theme = "light";
      document.getElementById("website-logo").src="White-Logo.png";
    }
  });

  const text = document.getElementById("search-text");
  const maxLength = 200;

  text.addEventListener("focus", () => {
    if (text.textContent.includes("Cerca")) {
      text.textContent = text.textContent.replace("Cerca", "");
    }
  });

  text.addEventListener("blur", () => {
    if (text.textContent.trim() === "") {
      text.textContent = "Cerca"; 
    }
  });

  text.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Impedisce l'inserimento della nuova riga
    }
  });

  document.querySelector('.arrow-left').addEventListener('click', () => {
    console.log('Freccia sinistra cliccata!');
});

document.querySelector('.arrow-right').addEventListener('click', () => {
    console.log('Freccia destra cliccata!');
});
  