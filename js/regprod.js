// formulario registro producto
const form = document.querySelector(".regprod-form");

form.addEventListener("submit", function(e){

e.preventDefault();

// obtener referencia
const refInput = document.querySelector(".form-control").value.trim();

// base de datos original
const original = BD_PRODUCTS.find(p => p.ref === refInput);

// verificar si existe
if(!original){

showResult("invalid");
return;

}

// obtener productos registrados
const registered = JSON.parse(localStorage.getItem("bd_products")) || [];

// verificar duplicado
const duplicate = registered.find(p => p.ref === refInput);

if(duplicate){

showResult("duplicate");
return;

}

// registrar producto
registered.push({

ref: refInput,
model: original.model,
date: new Date().toLocaleDateString(),
description: "Producto registrado en British Denim"

});

// guardar en localStorage
localStorage.setItem("bd_products", JSON.stringify(registered));

// mostrar resultado
showResult("valid");

});


//confirmacion visual al guardar perfil
function showResult(type){

const result = document.getElementById("authResult");

if(type === "valid"){

result.className = "auth-result auth-valid";

result.innerHTML = `
<i class="fa-solid fa-circle-check"></i>
Producto original registrado correctamente
`;

}

if(type === "duplicate"){

result.className = "auth-result auth-duplicate";

result.innerHTML = `
<i class="fa-solid fa-triangle-exclamation"></i>
Este producto ya fue registrado
`;

}

if(type === "invalid"){

result.className = "auth-result auth-invalid";

result.innerHTML = `
<i class="fa-solid fa-circle-xmark"></i>
Referencia no válida
`;

}

}

// Contador de productos dinámico
function showResult(type){

const result = document.getElementById("authResult");

if(type === "valid"){

result.className = "auth-result auth-valid";
result.innerHTML = "✔ Producto original registrado";

}

if(type === "duplicate"){

result.className = "auth-result auth-duplicate";
result.innerHTML = "⚠ Este producto ya fue registrado";

}

if(type === "invalid"){

result.className = "auth-result auth-invalid";
result.innerHTML = "✖ Referencia no válida";

}

}