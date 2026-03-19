// 1. GENERO DEL AVATAR
const generoUsuario = "male";
const avatar = document.querySelector(".avatar-icon");

if(avatar){
    avatar.classList.remove("male","female");
    avatar.classList.add(generoUsuario);
}

// 2. VALIDACION FORMULARIO PERFIL
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

// 3. AVATAR PERSISTENTE
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

// 4. LOADER DASHBOARD
window.addEventListener("load", () => {
    const loader = document.getElementById("dashboardLoader");
    if(loader){
        setTimeout(()=>{
            loader.style.display = "none";
        }, 800);
    }
});

/* ATENCIÓN: He desactivado 'updateProductCounter' y 'loadReferences'. 
   Ahora Django se encarga de mostrar los datos reales de la base de datos 
   y ya no desaparecerán al presionar F5.
*/
console.log("Dashboard JS cargado correctamente - Modo Base de Datos Activo");