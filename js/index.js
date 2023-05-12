document.querySelector(".bars__menu").addEventListener("click", AnimationBars); 

let line1__bars = document.querySelector(".line1__bars-menu");
let line2__bars = document.querySelector(".line2__bars-menu");
let line3__bars = document.querySelector(".line3__bars-menu");
let nav = document.querySelector(".list-nav");
let back = document.querySelector("#back_menu")
let linkss = document.querySelector("#links")


function AnimationBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
    if (nav.style.left === "0px") {
        nav.style.left = "-450px";
        back.style.display = "none";
    } else {
        nav.style.left = "0px";
        back.style.display = "block";
    }
}


document.querySelector("#linkss",".activeline3__bars-menu").addEventListener("click", disguise);

function disguise(){
    nav.style.left = "-450px";
    back.style.display = "none";
}

function resetBars() {
    line1__bars.classList.remove("activeline1__bars-menu");
    line2__bars.classList.remove("activeline2__bars-menu");
    line3__bars.classList.remove("activeline3__bars-menu");
  }
  let links = document.querySelectorAll("#links a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    resetBars();
  });
}

  

