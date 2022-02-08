console.log('Iniciando aplicación');

const btnIniciarJuego = document.getElementById('iniciar-juego');
const divInicio = document.getElementById('inicio');
const listaPalabras = palabras.map((palabra) => palabra.toUpperCase());
let palabraSorteada = '';

document.addEventListener('DOMContentLoaded', () => {
    btnIniciarJuego.addEventListener('click', iniciarJuego);
});

ocultarCanvas();

function iniciarJuego() {
    console.log('Comenzando a jugar');
    ocultarInicio();
    palabraSorteada = sortearPalabra();
    console.log(palabraSorteada);    
    mostrarCanvas();
}

function ocultarInicio() {
    divInicio.style.display = "none";
}

function sortearPalabra() {
    let random = Math.floor(Math.random() * listaPalabras.length);
    return listaPalabras[random];
}