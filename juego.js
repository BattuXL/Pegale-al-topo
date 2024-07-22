document.addEventListener("DOMContentLoaded", function() {

    //Esta seccion captura los elementos necesarios del html como: topos, el puntaje y las vidas etc

    //Varibles de los topos, en general y de cada uno
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

    //Variables de control

    //Variable que llevara el conteo de puntos
    const contador = document.querySelector(".puntos");

    //Variable que llevara el conteo de vidas
    const vidas = document.querySelector(".vidas");

    //Variable que el control de la musica reproducir/pausar
    const control = document.querySelector(".musica");

    //Variables de los resultados: Apartado, el resultado y el boton de reinicio
    const mensaje = document.querySelector(".mensaje");
    const resultado = document.querySelector(".resultado");
    const reiniciar = document.querySelector(".reiniciar");

    //Definimos las variables que se van a utilizar: musica, control de musica, contador para sumar el puntaje, el restador de vidas, la velocidad y el sonido del golpe

    //La variable num sirve para mostrar el topo aleatorio
    let num = 0;

    //La variable cont sirve para llevar el conteo de los puntos
    let cont = 0;

    //La variable vid sirve para llevar el conteo de las vidas
    let vid = 3;

    //La variable velocidad sirve para la velocidad de aparicion de los topos
    let velocidad = 4500;

    //Definimos las variables de sonido, un nuevo audio que es la musica del juego y un audio de golpe
    let musica = new Audio('audio/gameplay.mpeg');
    let golpe = new Audio('audio/golpe.mp3');

    //Variable hit sirve para saber si se ha golpeado o no al topo
    let hit = true;

    //la variable click sirve para el control de la musica si reproducir o pausar
    let click = 0;

    //Esta funcion sirve para reproducir la musica y el control de la misma
    control.addEventListener("mousedown", function() {
        if (click == 0) {
            musica.loop = true;
            musica.volume = 0.2;
            musica.play();
            click = 1;
            control.innerHTML = '<i class="fa-solid fa-pause"></i>';
        } else {
            musica.pause();
            control.innerHTML = '<i class="fa-solid fa-play"></i>';
            click = 0;
        }
    })
    

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

    //Esta funcion sirve para mostrar los topos de forma aleatoria segun el agujero y dependiendo si, no se logro golpear a un topo se restaran las vidas 
    function mostrar() {

        //Aqui se valida el hit si es verdadero no pasa nada y si es falso se restara una vida
        if (!hit) {
            //Se resta una vida
            vid--;
            vidas.textContent = `Vidas: ${vid}`;
            if (vid == 0) {
                //Se detiene el juego y se muestra el resultado
                mensaje.style.display = "block";
                resultado.innerHTML = `PUNTUACIÓN: ${cont}`;
                esconder();
                musica.pause();
                return;
            }
        }


        //Aqui llamamos a la funcion esconder para ocultar los topos en caso de no haber golpeado uno de ellos
        esconder();  

        //Aqui se genera el numero aleatorio
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

        //Aqui hit se vuelve falso en caso de que no se golpee un topo
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

    //Funcion para aumentar la velocidad de aparicion de los topos entre mas topos se hayan golpeado, teniendo un limite de 700
    function aumentar() {
        velocidad -= 350;
        if (velocidad <= 880) {
            velocidad = 880;
        }
    }

    //Funcion para reiniciar el juego
    reiniciar.addEventListener("mousedown", function() {
        location.reload();
    });

    //Funcion que inicia el juego basicamente 
    mostrar();
});

