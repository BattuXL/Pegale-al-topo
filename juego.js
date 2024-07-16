
// Funcion que carga primero todo el DOM antes de ejecutar el juego

document.addEventListener("DOMContentLoaded", function() {

    // Se captura cada topo por su clase unica y tambien su clase general y se crea una variable que contendra el numero de topo que aparecera
    const topos = document.querySelectorAll(".topo");
    const to1 = document.querySelector(".to1");
    const to2 = document.querySelector(".to2");
    const to3 = document.querySelector(".to3");
    const to4 = document.querySelector(".to4");
    const to5 = document.querySelector(".to5");
    const to6 = document.querySelector(".to6");
    const to7 = document.querySelector(".to7");
    const to8 = document.querySelector(".to8");
    const to9 = document.querySelector(".to9");
    const to10 = document.querySelector(".to10");
    let num = 0;


    // Funcion para ocultar todos los topos
    function hideAllTopos() {
        to1.style.display = "none";
        to2.style.display = "none";
        to3.style.display = "none";
        to4.style.display = "none";
        to5.style.display = "none";
        to6.style.display = "none";
        to7.style.display = "none";
        to8.style.display = "none";
        to9.style.display = "none";
        to10.style.display = "none";
    }

    // Se crea un setIntervall para que cada cierto tiempo establecido aparezca un nuevo topo y se oculte el anterior en caso de no clickearlo

    setInterval(function() {
        hideAllTopos();  
        num = Math.floor(Math.random() * 10) + 1;

        if (num == 1) {
            to1.style.display = "flex";
        } else if (num == 2) {
            to2.style.display = "flex";
        } else if (num == 3) {
            to3.style.display = "flex";
        } else if (num == 4) {
            to4.style.display = "flex";
        } else if (num == 5) {
            to5.style.display = "flex";
        } else if (num == 6) {
            to6.style.display = "flex";
        } else if (num == 7) {
            to7.style.display = "flex";
        } else if (num == 8) {
            to8.style.display = "flex";
        } else if (num == 9) {
            to9.style.display = "flex";
        } else if (num == 10) {
            to10.style.display = "flex";
        }
    }, 4000);


    // Se crea un evento para que cuando se haga click en un topo se oculte sumando un punto
    topos.forEach(topo => {
        topo.addEventListener("mousedown", function() {
            hideAllTopos();
        });
    });

});
