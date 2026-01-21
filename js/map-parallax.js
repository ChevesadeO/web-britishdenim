document.addEventListener("DOMContentLoaded", () => {
  const map = document.querySelector(".map-wrapper");
  if (!map) return;

  const speed = 0.08; // muy sutil

  window.addEventListener("scroll", () => {
    const rect = map.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      const offset =
        (windowHeight - rect.top) * speed - 10;

      map.style.transform = `translateY(${offset}px)`;
    }
  });
});
