document.addEventListener("DOMContentLoaded", () => {
  const loop = document.getElementById("topBarLoop");

  // Duplicamos el contenido para loop infinito limpio
  loop.innerHTML += loop.innerHTML;

  let position = 0;
  const speed = 1.5; // más bajo = más sutil

  function animate() {
    position -= speed;

    if (Math.abs(position) >= loop.scrollWidth / 1) {
      position = 0;
    }

    loop.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});
