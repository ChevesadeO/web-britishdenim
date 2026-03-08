window.addEventListener("scroll", function () {

  const header = document.querySelector(".main-header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});

window.addEventListener("scroll", function(){

const header = document.querySelector(".main-header");

if(window.scrollY > 80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});