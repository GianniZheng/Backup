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
  
const images = document.querySelectorAll('.image-container img');
const leftZone = document.querySelector('.zone.left');
const rightZone = document.querySelector('.zone.right');

let currentIndex = 0; // Indice dell'immagine attiva

// Funzione per mostrare una specifica immagine
function showImage(newIndex) {
  if (newIndex < 0 || newIndex >= images.length) return; // Blocca se fuori range

  // Rimuovi classi attuali
  images[currentIndex].classList.remove('active');
  if (newIndex > currentIndex) {
    images[currentIndex].classList.add('previous');
    images[newIndex].classList.remove('next');
  } else {
    images[currentIndex].classList.add('next');
    images[newIndex].classList.remove('previous');
  }

  // Imposta la nuova immagine come attiva
  images[newIndex].classList.add('active');
  currentIndex = newIndex; // Aggiorna l'indice corrente
}

// Evento per cliccare a sinistra (immagine precedente)
leftZone.addEventListener('click', () => {
  showImage(currentIndex - 1);
});

// Evento per cliccare a destra (immagine successiva)
rightZone.addEventListener('click', () => {
  showImage(currentIndex + 1);
});
