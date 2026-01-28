document.addEventListener("DOMContentLoaded", () => {
  const loop = document.getElementById("topBarLoop");
  const SPEED = 100; // px por segundo
  const COPIES = 4; // número de copias del contenido para loop limpio

  // 1️⃣ Duplicar contenido para loop limpio
  const original = loop.innerHTML;
  loop.innerHTML = "";
  for (let i = 0; i < COPIES; i++) {
    loop.innerHTML += original;
  }

  // 2️⃣ Timeline infinita (base)
  const loopWidth = loop.scrollWidth / COPIES;

  const tl = gsap.to(loop, {
    x: `-=${loopWidth}`,
    duration: loopWidth / SPEED,
    ease: "none",
    repeat: -1
  });

  // 3️⃣ Detectar dirección de scroll
  let lastScrollY = window.scrollY;
  let direction = -1; // -1 izquierda | 1 derecha

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    // Cambia dirección
    direction = currentScroll > lastScrollY ? -1 : 1;

    // Ajusta velocidad sin romper loop
    gsap.to(tl, {
      timeScale: direction,
      duration: 0.3,
      overwrite: true
    });

    lastScrollY = currentScroll;
  });
});

