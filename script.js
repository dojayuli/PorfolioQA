// Menú Hamburguesa
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  // Toggle Nav
  nav.classList.toggle("nav-active");

  // Animate Links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });

  // Burger Animation
  burger.classList.toggle("toggle");
});

// Generador de estrellas
const starsContainer = document.getElementById("stars");
function createStars() {
  starsContainer.innerHTML = ""; // Limpiar estrellas existentes al redimensionar
  const numStars = window.innerWidth > 768 ? 150 : 75; // Menos estrellas en móviles
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.style.position = "absolute";
    star.style.width = "2px";
    star.style.height = "2px";
    star.style.background = "white";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.opacity = Math.random();
    star.style.animation = `twinkle ${Math.random() * 5 + 5}s infinite ease-in-out alternate`; // Animación de parpadeo
    starsContainer.appendChild(star);
  }
}

createStars(); // Crear estrellas al cargar
window.addEventListener("resize", createStars); // Recargar estrellas al redimensionar

const styleSheet = document.createElement("style");
styleSheet.textContent = `
@keyframes twinkle {
    0% { opacity: 0.5; }
    50% { opacity: 1; }
    100% { opacity: 0.5; }
}`;
document.head.appendChild(styleSheet);

// Smooth Scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    // Cierra el menú hamburguesa después de hacer clic en un enlace (en móvil)
    if (nav.classList.contains("nav-active")) {
      nav.classList.remove("nav-active");
      burger.classList.remove("toggle");
      navLinks.forEach((link) => {
        link.style.animation = "";
      });
    }
  });
});
