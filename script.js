/* =========================================================
   NEURIVA — Script principal
   UX sobre, fluide, professionnel
   ========================================================= */

/* -----------------------------
   Fade-in au scroll (Intersection Observer)
-------------------------------- */

const observerOptions = {
  threshold: 0.15
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach(el => {
  fadeObserver.observe(el);
});

/* -----------------------------
   Scroll fluide vers ancres
-------------------------------- */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* -----------------------------
   Navbar : effet subtil au scroll
-------------------------------- */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

/* -----------------------------
   Sécurité formulaire (front only)
-------------------------------- */

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        valid = false;
        input.classList.add("input-error");
      } else {
        input.classList.remove("input-error");
      }
    });

    if (!valid) return;

    // Simulation envoi (placeholder pro)
    form.classList.add("form-sent");
    form.innerHTML = `
      <p class="form-confirmation">
        Votre demande a été transmise.<br>
        Elle sera étudiée avec attention.
      </p>
    `;
  });
}

/* -----------------------------
   Protection UX basique
-------------------------------- */

// Désactiver clic droit (optionnel, dissuasion légère)
document.addEventListener("contextmenu", e => {
  e.preventDefault();
});

// Désactiver sélection sur éléments sensibles
document.querySelectorAll(".logo, h1").forEach(el => {
  el.style.userSelect = "none";
});

/* -----------------------------
   Performance : preload visuel
-------------------------------- */

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

/* =========================================================
   Fin du script
   ========================================================= */
