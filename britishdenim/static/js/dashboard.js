// GENERO DEL AVATAR

const generoUsuario = "male";

const avatar = document.querySelector(".avatar-icon");

if(avatar){
avatar.classList.remove("male","female");
avatar.classList.add(generoUsuario);
}



// VALIDACION FORMULARIO PERFIL
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


// AVATAR PERSISTENTE
const avatarUpload = document.getElementById("avatarUpload");
const avatarPreview = document.getElementById("avatarPreview");

const savedAvatar = localStorage.getItem("bd_avatar");

if(savedAvatar && avatarPreview){

avatarPreview.style.backgroundImage = `url(${savedAvatar})`;
avatarPreview.style.backgroundSize = "cover";
avatarPreview.innerHTML = "";

}

if(avatarUpload){

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

};

reader.readAsDataURL(file);

}

});

}

// DATOS DE USUARIO
const userData = {

name:"#",
country:"#"

};

function loadUserProfile(){

document.querySelector(".profile-info h2").textContent = userData.name;

document.querySelector(".country").textContent =
"🇵🇦 " + userData.country;

}

loadUserProfile();


// CONTADOR PRODUCTOS
function updateProductCounter(){

const refs = JSON.parse(localStorage.getItem("bd_products")) || [];

document.querySelector(".product-counter span").textContent =
refs.length;

}

updateProductCounter();


// REFERENCIAS REGISTRADAS
function loadReferences(){

const container = document.getElementById("referencesContainer");

if(!container) return;

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


// LOADER DASHBOARD
window.addEventListener("load", () => {

const loader = document.getElementById("dashboardLoader");

if(loader){

setTimeout(()=>{
loader.style.display = "none";
},800);

}

});