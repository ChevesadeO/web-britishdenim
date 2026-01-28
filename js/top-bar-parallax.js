document.addEventListener("DOMContentLoaded", () => {
  const loop = document.getElementById("topBarLoop");

  // 🔁 duplicamos x3 para evitar cortes
  loop.innerHTML += loop.innerHTML + loop.innerHTML + loop.innerHTML;

  let position = 0;
  let velocity = 0;
  let targetVelocity = -2.8; // velocidad base
  let lastScroll = window.scrollY;

  function animate() {
    // Inercia
    velocity += (targetVelocity - velocity) * 0.09;
    position += velocity;

    // Loop infinito
    const width = loop.scrollWidth / 4; // ya que lo duplicamos x4
    if (position <= -width) position += width;
    if (position >= 0) position -= width;

    loop.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  // Detectar scroll (dirección)
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
      targetVelocity = -0.6; // scroll ↓
    } else {
      targetVelocity = 0.6; // scroll ↑
    }

    lastScroll = currentScroll;
  });

  animate();
});



