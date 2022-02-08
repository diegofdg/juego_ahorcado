console.log('Iniciando aplicación');

const btnIniciarJuego = document.getElementById('iniciar-juego');
const divInicio = document.getElementById('inicio');

document.addEventListener('DOMContentLoaded', () => {
    btnIniciarJuego.addEventListener('click', iniciarJuego);
});

ocultarCanvas();

function iniciarJuego() {
    console.log('Comenzando a jugar');
    ocultarInicio();
    mostrarCanvas();
}

function ocultarInicio() {
    divInicio.style.display = "none";
}