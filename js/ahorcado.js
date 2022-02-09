const btnIniciarJuego = document.getElementById('iniciar-juego');
const divInicio = document.getElementById('inicio');
const inputOculto = document.getElementById('input-oculto');
const divInputOculto = document.getElementById('div-input-oculto');
const btnReiniciarJuego = document.getElementById('btn-reiniciar');
const btnVolverInicio = document.getElementById('btn-inicio');
const listaPalabras = palabras.map((palabra) => palabra.toUpperCase());

let palabraSorteada = '';
const soloLetras ='^[A-Z Ñ]+$';
const letrasUsadas = [];
let letrasAcertadas = 0;
let vidas = 8;
let juegoIniciado = false;

(function () {
    btnReiniciarJuego.style.display = 'none';
    btnVolverInicio.style.display = 'none';
})();

document.addEventListener('DOMContentLoaded', () => {
    btnIniciarJuego.addEventListener('click', iniciarJuego);
    btnReiniciarJuego.addEventListener('click', reiniciarJuego);
    btnVolverInicio.addEventListener('click', volverInicio);
    divInputOculto.addEventListener("click", focusInput);  
});

function focusInput() {
    inputOculto.focus();
}

ocultarCanvas();

function iniciarJuego() {
    juegoIniciado = true;
    console.log('Comenzando a jugar');
    ocultarInicio();
    btnReiniciarJuego.style.display = 'inline-block';
    btnVolverInicio.style.display = 'inline-block';
    palabraSorteada = sortearPalabra();
    console.log(palabraSorteada);    
    mostrarCanvas();
    abrirTeclado();
    inputOculto.focus();
}

function ocultarInicio() {
    divInicio.style.display = "none";
}

function sortearPalabra() {
    let random = Math.floor(Math.random() * listaPalabras.length);
    return listaPalabras[random];
}

function abrirTeclado() {
    inputOculto.addEventListener("input", (e)=> {teclaPresionada(e)});
}

function teclaPresionada(e) {
    const letra = e.target.value.toUpperCase();
    inputOculto.value = '';
    verificarLetra(letra);
}

function verificarLetra(letra) {
    console.log(vidas);
    let bandera = false;
       
    if(letra.match(soloLetras)!=null){
        if(agregarLetrasUsadas(letra)){
            for (let i = 0; i < palabraSorteada.length; i++) {
                if (palabraSorteada[i] === letra) {                
                    reemplazarEspacioPorLetra(letra, i);
                    letrasAcertadas++;
                    bandera = true;
                }
            }
            if(bandera === false) {
                vidas--;
            }
            
            comenzarDibujo(vidas);
            verifcarVictoria();
        };
    } else {
        console.log('no permitido');
    }   
    console.log(vidas); 
}

function agregarLetrasUsadas(letra) {
    if(letrasUsadas.includes(letra)){
        console.log('la letra esta en el array');
        return false;
    } else {
        letrasUsadas.push(letra);        
        console.log('la letra no esta en el array');
        dibujarLetrasUsadas(letra, letrasUsadas.length);
        return true;
    }
}

function verifcarVictoria(){
    if(vidas === 0) {
        console.log('Perdiste loco');
        juegoIniciado = false;
        cerrarTeclado();
    } else if (letrasAcertadas === palabraSorteada.length) {
        console.log('Ganaste viejo');
    }
}

function comenzarDibujo(vidas) {
    switch(vidas) {
        case 8:
            break;
        case 7:
            dibujarHorca();
            break;
        case 6:
            dibujarCabeza();
            break;
        case 5:
            dibujarCuerpo();
            break;
        case 4:
            dibujarManoDerecha();
            break;
        case 3:
            dibujarManoIzquierda();
            break;
        case 2:
            dibujarPieDerecho();
            break;
        case 1:
            dibujarPieIzquierdo();
            break;
        case 0:
            dibujarOjos();
            break;
        default:
            break;
    }
}

function cerrarTeclado() {
    inputOculto.blur();
    inputOculto.disabled = true;    
}


function reiniciarJuego() {
    canvas.width = canvas.width;
    iniciarJuego();
}

function volverInicio() {
    window.location.reload();    
}