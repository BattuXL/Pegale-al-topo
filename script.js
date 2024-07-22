

document.addEventListener("DOMContentLoaded", function() {


    //se extrae del html los elementos que se van a utilizar
    const boton1 = document.getElementById("boton1");
    const boton2 = document.getElementById("boton2");
    const boton3 = document.getElementById("boton3");
    const icon = document.getElementById("icon");
    const boton4 = document.getElementById("boton4");
    const animacionepica= document.getElementById("body");
    const instrucciones = document.getElementById("instrucciones");

    //se definen los eventos con las variables click para los botones
    let click1= 0;
    let click2= 0;
    let click3= 0;
    let click4= 0;

    //se define una variable para la musica de fondo
    let menu = new Audio("audio/menu.mp3");

    //eventos para las animaciones de los botones

    boton1.addEventListener("click", function() {
        if (click1 == 0) {
            click1 = 1;
            boton1.style.animation = "";
        }else{
            click1 = 0;
            boton1.style.animation = "detener 1s forwards";
                setTimeout(() => {
                boton1.style.animation = ""; 
                }, 1000);

                setTimeout(() => {
                    location.href = "juego.html";
                }, 2000);
        }
    });

    boton2.addEventListener("click", function() {
        if (click2 == 0) {
            click2 = 1;
            boton2.style.animation = "";
        }else{
            click2 = 0;
            boton2.style.animation = "detener 1s forwards";
                setTimeout(() => {
                boton2.style.animation = ""; 
                }, 1000);

            body.style.animation = "fondo 3s forwards 2s";

            animacionepica.children[0].style.animation = "des_menu 3s forwards 2s";
            animacionepica.children[1].style.animation = "des_menu 3s forwards 2s";

                setTimeout(() => {
                    instrucciones.style.animation = "aparecer 4s forwards";
                    instrucciones.style.display = "flex";
                }, 5000);    
        }

        });

    boton3.addEventListener("click", function() {
            if (click3 == 0) {
                click3 = 1;
                menu.pause();
                icon.src = "imagenes/musica2.svg";
                boton3.style.animation = "";
            }else{
                click3 = 0;
                icon.src = "imagenes/music1.svg";
                menu.volume = 0.2;
                menu.play();
                boton3.style.animation = "detener 1s forwards";
                    setTimeout(() => {
                    boton3.style.animation = ""; 
                    }, 1000);
            }
        });

    boton4.addEventListener("mousedown", function() {
            if (click4 == 0) {
                click4 = 1;
                boton4.style.animation = "";
            }else{
                click4 = 0;
                boton4.style.animation = "detener 1s forwards";

                setTimeout(() => {
                    boton4.style.animation = ""; 
                }, 1000);

                body.style.animation = "fondoevil 3s forwards";
                
                instrucciones.style.animation = "des_menu 3s forwards 2s";

                setTimeout(() => {
                    animacionepica.children[0].style.animation = "aparecer_2 4s forwards";
                    animacionepica.children[1].style.animation = "aparecer_2 4s forwards";
                }, 5000);
            }
        });    
});