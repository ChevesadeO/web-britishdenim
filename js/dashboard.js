// Simulación de género de usuario para avatar
const generoUsuario = "male"; // o "female"

const avatar = document.querySelector(".avatar-icon");
avatar.classList.remove("male", "female");
avatar.classList.add(generoUsuario);


document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("editProfileForm");

if(form){

form.addEventListener("submit", function(e){

const pass = form.querySelector("[name=password]").value;
const confirm = form.querySelector("[name=confirm_password]").value;

if(pass !== confirm){
e.preventDefault();
alert("Las contraseñas no coinciden");
}

});

}

});



//Foto de perfil persistente (guardada)
const avatarUpload = document.getElementById("avatarUpload");
const avatarPreview = document.getElementById("avatarPreview");

/* cargar avatar guardado */

const savedAvatar = localStorage.getItem("bd_avatar");

if(savedAvatar){
avatarPreview.style.backgroundImage = `url(${savedAvatar})`;
avatarPreview.style.backgroundSize = "cover";
avatarPreview.innerHTML = "";
}

/* subir avatar */

avatarUpload.addEventListener("change", function(){

const file = this.files[0];

if(file){

const reader = new FileReader();

reader.onload = function(e){

const img = e.target.result;

avatarPreview.style.backgroundImage = `url(${img})`;
avatarPreview.style.backgroundSize = "cover";
avatarPreview.innerHTML = "";

localStorage.setItem("bd_avatar", img);

}

reader.readAsDataURL(file);

}

});

// Simulación de datos de usuario
const userData = {

name: "Juan Pérez",
country: "Panamá",
products: 2,
avatar: null,

references: [

{
ref: "REF-00123",
date: "12 Enero 2026",
description: "Jeans slim fit azul oscuro con detalles premium"
},

{
ref: "REF-00987",
date: "05 Febrero 2026",
description: "Chaqueta denim clásica edición limitada"
}

]

};


//Renderizar datos en el dashboard
function loadUserProfile(){

document.querySelector(".profile-info h2").textContent = userData.name;

document.querySelector(".country").textContent = "🇵🇦 " + userData.country;

document.querySelector(".product-counter span").textContent = userData.products;

}

loadUserProfile();

// Carga dinámica de referencias
function loadReferences(){

const container = document.getElementById("referencesContainer");

container.innerHTML = "";

userData.references.forEach(ref => {

const card = document.createElement("div");

card.classList.add("reference-card");

card.innerHTML = `

<div class="ref-header">
<strong>${ref.ref}</strong>
<span class="ref-date">${ref.date}</span>
</div>

<p>${ref.description}</p>

`;

container.appendChild(card);

});

}

loadReferences();


//loading spinner al cargar dashboard
window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("dashboardLoader").style.display = "none";

}, 800);

});


//confirmacion visual al guardar perfil
form.addEventListener("submit", function(e){

e.preventDefault();

alert("Perfil actualizado correctamente");

});


// Contador de productos dinámico
function updateProductCounter(){

const refs = JSON.parse(localStorage.getItem("bd_products")) || [];

document.querySelector(".product-counter span").textContent = refs.length;

}

updateProductCounter();


//referencias registradas dinamicas 
function loadReferences(){

const container = document.getElementById("referencesContainer");

const products = JSON.parse(localStorage.getItem("bd_products")) || [];

container.innerHTML = "";

products.forEach(product => {

const card = document.createElement("div");

card.classList.add("reference-card");

card.innerHTML = `

<div class="ref-header">
<strong>${product.ref}</strong>
<span class="ref-date">${product.date}</span>
</div>

<p>${product.description}</p>

`;

container.appendChild(card);

});

}

loadReferences();


//toast elegante al registrar producto
const toast = new bootstrap.Toast(document.getElementById('productToast'));

toast.show();

