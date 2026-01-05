// -----------------------------
// NEURIVA | script.js
// Gestion formulaire & animations
// -----------------------------

document.addEventListener("DOMContentLoaded", () => {
  // FORMULAIRE
  const form = document.querySelector("form");
  const confirmation = document.createElement("p");
  confirmation.id = "confirmation";
  confirmation.style.color = "#00ff88";
  confirmation.style.fontWeight = "bold";
  confirmation.style.display = "none";
  confirmation.textContent = "Merci ! Votre message a bien été envoyé.";
  form.appendChild(confirmation);

  // Animation focus input
  const inputs = form.querySelectorAll("input, textarea");
  inputs.forEach(input => {
    input.addEventListener("focus", () => {
      input.style.borderColor = "#00ff88";
      input.style.boxShadow = "0 0 10px rgba(0, 255, 136, 0.5)";
      input.style.transition = "all 0.3s ease";
    });
    input.addEventListener("blur", () => {
      input.style.borderColor = "#ccc";
      input.style.boxShadow = "none";
    });
  });

  // Bouton hover animation
  const button = form.querySelector("button");
  button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "#00ff88";
    button.style.color = "#000";
    button.style.transform = "scale(1.05)";
    button.style.transition = "all 0.3s ease";
  });
  button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "#fff";
    button.style.color = "#000";
    button.style.transform = "scale(1)";
  });

  // Gestion envoi formulaire
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // empêche l’envoi standard

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        confirmation.style.display = "block";
        form.reset();
      } else {
        confirmation.style.display = "block";
        confirmation.style.color = "red";
        confirmation.textContent = "Oups ! Une erreur est survenue, veuillez réessayer.";
      }
    } catch (error) {
      confirmation.style.display = "block";
      confirmation.style.color = "red";
      confirmation.textContent = "Erreur réseau ! Vérifiez votre connexion et réessayez.";
      console.error("Erreur formulaire:", error);
    }
  });

  // ANIMATION SCROLL
  const revealElements = document.querySelectorAll(".reveal");
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 50) {
        el.classList.add("active");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // trigger on load
});
