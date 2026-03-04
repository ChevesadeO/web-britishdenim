const generoUsuario = "male"; // o "female"

const avatar = document.querySelector(".avatar-icon");
avatar.classList.remove("male", "female");
avatar.classList.add(generoUsuario);