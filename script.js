var typed = new Typed(".input",{
    strings:["E-commerce Website", "Fashion Store", "Grocery Website", "Shopping Website"],
    typeSpeed:70,
    backSpeed:60,
    loop:true

});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}