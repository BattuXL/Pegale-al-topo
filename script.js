

document.addEventListener("DOMContentLoaded", function() {
    const boton1 = document.getElementById("boton1");
    const boton2 = document.getElementById("boton2");
    const boton3 = document.getElementById("boton3");
    const boton4 = document.getElementById("boton4");
    const animacionepica= document.getElementById("body");
    const instrucciones = document.getElementById("instrucciones");

    let click1 = 0;
    let click2 = 0;
    let click3 = 0;
    let click4 = 0;
    
    //animacion para los botones al presionarlos

    boton1.addEventListener("mousedown", function() {
        if (click1 == 0) {
            click1 = 1;
            boton1.style.animation = "";
        }else{
            click1 = 0;
            boton1.style.animation = "presionar 1s infinite";
        }
    });

    boton2.addEventListener("mousedown", function() {
        if (click2 == 0) {
            click2 = 1;
            boton2.style.animation = "";
        }else{
            click2 = 0;
            boton2.style.animation = "presionar 1s infinite";
            body.style.animation = "fondo 3s forwards 2s";
            animacionepica.children[0].style.animation = "des_menu 3s 2s forwards";
            animacionepica.children[1].style.animation = "des_menu 3s 2s forwards";
            setTimeout(() => {
                instrucciones.style.animation = "aparecer 4s forwards";
                instrucciones.style.display = "flex";
            }, 5000);
        }
    });

    boton3.addEventListener("mousedown", function() {
        if (click3 == 0) {
            click3 = 1;
            boton3.style.animation = "";
        }else{
            click3 = 0;
            boton3.style.animation = "presionar 1s infinite";
        }
    });

    boton4.addEventListener("mousedown", function() {
        if (click4 == 0) {
            click4 = 1;
            boton4.style.animation = "";
        }else{
            click4 = 0;
            boton4.style.animation = "presionar 1s infinite";

            instrucciones.style.animation = "des_menu 3s 1s forwards";

            setTimeout(() => {
                instrucciones.style.display = "none";
            }, 2000);

            setTimeout(() => {
                body.style.animation = "fondoevil 3s forwards";
                animacionepica.children[0].style.animation = "aparecer 3s 1s forwards";
                animacionepica.children[1].style.animation = "aparecer 3s 1s forwards";
            }, 3000);
        }
    });

});