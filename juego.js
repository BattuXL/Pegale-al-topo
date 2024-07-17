document.addEventListener("DOMContentLoaded", function() {

    //Esta seccion captura los elementos necesarios del html como: topos, el puntaje y las vidas
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
    const contador = document.querySelector(".puntos");
    const vidas = document.querySelector(".vidas");

    //Definimos las variables que se van a utilizar: musica, contador para sumar el puntaje, el restador de vidas, la velocidad y el sonido del golpe
    let num = 0;
    let cont = 0;
    let vid = 4;
    let velocidad = 4500;
    let musica = new Audio('audio/gameplay.mpeg');
    let golpe = new Audio('audio/golpe.mp3');
    let hit = false;

    //Reproducimos la musica del juego
    musica.play();
    musica.loop = true;
    musica.volume = 0.2;

    //Esta funcion sirve para ocultar los topos
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

    //Esta funcion sirve para mostrar los topos de forma aleatoria segun el agujero y dependiendo si no se logro golpear a un topo se restaran las vidas 
    function mostrar() {
        if (!hit) {
            vid--;
            vidas.textContent = `Vidas: ${vid}`;
            if (vid === 0) {
                alert("Fin del juego\nTu puntaje fue: " + cont);
                esconder();
                musica.pause();
                return;
            }
        }


        //Aqui llamamos a la funcion esconder para ocultar los topos en caso de no haber golpeado uno de ellos
        esconder();  
        num = Math.floor(Math.random() * 10) + 1;
        
        //Aqui se muestra el topo dependiendo del numero aleatorio que se genere del 1 al 10 
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

        hit = false;

        //Aqui se utiliza un setTimeout que, cada cierto tiempo la funcion se llama asi misma y la variable "velocidad" se disminuye para aumentar la velocidad de aparicion de los topos
        setTimeout(mostrar, velocidad);
    }

    //Aqui se agrega el evento de click a cada topo para que al presionar el topo se aumente el puntaje y se reproduce el sonido del golpe, oculte al topo y aumente su velocidad llamando a la funcion "aumentar()"
    topos.forEach(topo => {
        topo.addEventListener("mousedown", function() {
            esconder();
            aumentar();
            contador.textContent = `Puntaje: ${++cont}`;
            golpe.play();
            golpe.volume = 0.12;
            hit = true;
        });
    });

    //Funcion para aumentar la velocidad de aparicion de los topos entre mas topos se hayan golpeado, teniendo un limite de 1000
    function aumentar() {
        velocidad -= 500;
        if (velocidad <= 1000) {
            velocidad = 1000;
        }
    }

    //Funcion que inicia el juego basicamente 
    mostrar();
});

