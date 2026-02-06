const btn = document.querySelector('.theme-switch__checkbox');
const body = document.body;

// Al cargar, verificar si ya existía una preferencia guardada
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  btn.checked = true;
}

btn.addEventListener('change', () => {
  if (btn.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark'); // Guarda la preferencia
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
});
