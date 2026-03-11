const messages = document.querySelectorAll(".topbar-track span");

let index = 0;

function rotateTopbar(){

messages.forEach(m => m.classList.remove("active"));

messages[index].classList.add("active");

index++;

if(index >= messages.length){
index = 0;
}

}

rotateTopbar();

setInterval(rotateTopbar,3000);