let boton = document.querySelector(".fa-bars");
let menu = document.querySelector(".nav__list");


let desplega_barra = false;
boton.addEventListener("click", function () {

    if (!desplega_barra) {

        menu.style.transform = "translateY(70px)";
        desplega_barra = true;

    } else {

        menu.style.transform = "translateY(-370px)";
        desplega_barra = false;
    }

});

addEventListener("resize",function(){


    let width = document.documentElement.clientWidth;
    
    if(width >= 840){
       menu.style.transform = "translateY(0px)"
    }else{
 
       menu.style.transform = "translateY(-370px)";
       desplega_barra = false;
 
    }
 
 });




