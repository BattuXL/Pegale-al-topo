
document.addEventListener("DOMContentLoaded", function() {
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
    const contador = document.querySelector(".puntos")
    let num = 0;
    let cont = 0;
    let velocidad = 4000;

    function esconder() {
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

    function mostrar() {
        esconder();  
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

        setTimeout(mostrar, velocidad);
    }

    topos.forEach(topo => {
        topo.addEventListener("mousedown", function() {
            esconder();
            aumentar();
            contador.textContent = `Puntaje: ${++cont}`;
        });
    });

    function aumentar() {
        velocidad -= 500;
        if (velocidad < 1000) {
            velocidad = 1000;
        }
        console.log(velocidad);
    }

    mostrar();
});
