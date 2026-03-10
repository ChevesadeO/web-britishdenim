document.addEventListener("DOMContentLoaded", function () {

  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  const showRegister = document.getElementById("showRegister");
  const showLogin = document.getElementById("showLogin");

  showRegister.addEventListener("click", function (e) {
    e.preventDefault();
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
  });

  showLogin.addEventListener("click", function (e) {
    e.preventDefault();
    registerForm.classList.remove("active");
    loginForm.classList.add("active");
  });

});

// Logout functionality
document.getElementById("logoutBtn").addEventListener("click", function () {

  // Si luego usas localStorage para sesión:
  localStorage.removeItem("user");

  // Redirige a la página principal
  window.location.href = "index.html";

});


const Auth = {

login(user){
localStorage.setItem("bd_user", JSON.stringify(user));
},

logout(){
localStorage.removeItem("bd_user");
window.location.href = "perfil.html";
},

getUser(){
return JSON.parse(localStorage.getItem("bd_user"));
},

isAuthenticated(){
return localStorage.getItem("bd_user") !== null;
}

};