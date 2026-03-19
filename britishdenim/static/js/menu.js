document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const header = document.querySelector('.main-header');

  if (!toggle || !nav || !header) return;

  toggle.addEventListener('click', function () {
    const open = nav.classList.toggle('active');
    toggle.classList.toggle('is-open', open);
    header.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const contactCard = document.querySelector(".contact-card");

  if (contactCard) {
    //pequeno delay
    setTimeout(() => {
      contactCard.classList.add("is-visible");
    }, 150);
  }
});

//DARKMODE

const toggle = document.getElementById("themeToggle");

// Cargar preferencia
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Guardar preferencia
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});


//boton hamburguesa
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const icon = menuToggle.querySelector('i');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        
        // Cambia el icono de lista a una X
        if (mainNav.classList.contains('active')) {
            icon.classList.replace('bi-list', 'bi-x-lg');
        } else {
            icon.classList.replace('bi-x-lg', 'bi-list');
        }
    });

    // Cerrar menú si se hace click fuera (opcional pero recomendado)
    document.addEventListener('click', (e) => {
        if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
            mainNav.classList.remove('active');
            icon.classList.replace('bi-x-lg', 'bi-list');
        }
    });
});