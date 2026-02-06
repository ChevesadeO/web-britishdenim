const switchToggle = document.getElementById("darkSwitch");

switchToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  // Guardar preferencia
  localStorage.setItem("theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

// Mantener modo guardado
window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    switchToggle.checked = true;
  }
});
