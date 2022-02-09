const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function mostrarCanvas() {
    canvas.style.display = "block";
    ctx.fillStyle = "#DACC96";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    dibujarTriangulo();
    dibujarEspaciosPalabra(palabraSorteada);
}

function ocultarCanvas() {
    canvas.style.display = "none";
}

function dibujarTriangulo() {
    ctx.fillStyle = "#2e0101";
    ctx.beginPath();
    ctx.moveTo(50,400);
    ctx.lineTo(150,350)
    ctx.lineTo(250,400)
    ctx.fill();
}

function dibujarHorca() {
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(150,360);
    ctx.lineTo(150,50);
    ctx.strokeStyle = "#2e0101";
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(145,50);
    ctx.lineTo(250,50);
    ctx.strokeStyle = "#2e0101";
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(245,50);
    ctx.lineTo(245,100);
    ctx.strokeStyle = "#2e0101";
    ctx.stroke();
}

function dibujarCabeza() {
    ctx.fillStyle = "#BF8B67";
    ctx.beginPath();
    ctx.arc(245,130,35,0,2*Math.PI);
    ctx.fill();
}

function dibujarCuerpo() {
    ctx.beginPath();
    ctx.lineWidth = 25;
    ctx.moveTo(245,150);
    ctx.lineTo(245,270);
    ctx.strokeStyle = "#BF8B67";
    ctx.stroke();
}

function dibujarManoDerecha() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.moveTo(245,220);
    ctx.lineTo(295,175);
    ctx.strokeStyle = "#BF8B67";
    ctx.stroke();
}

function dibujarManoIzquierda() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.moveTo(245,220);
    ctx.lineTo(195,175);
    ctx.strokeStyle = "#BF8B67";
    ctx.stroke();
}

function dibujarPieDerecho() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.moveTo(245,250);
    ctx.lineTo(295,330);
    ctx.strokeStyle = "#BF8B67";
    ctx.stroke();
}

function dibujarPieIzquierdo() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.moveTo(245,250);
    ctx.lineTo(195,330);
    ctx.strokeStyle = "#BF8B67";
    ctx.stroke();
}

function dibujarCara() {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(225,120);
    ctx.lineTo(235,130);
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(235,120);
    ctx.lineTo(225,130);
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(255,120);
    ctx.lineTo(265,130);
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(265,120);
    ctx.lineTo(255,130);
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(245,160,15,1.25*Math.PI,1.75*Math.PI);
    ctx.stroke();

}

function dibujarHombreGano() {
    
    ctx.clearRect(50,45,295,360);
    ctx.fillStyle = "#DACC96";
    ctx.fillRect(50, 45, 295, 360);

    dibujarCabeza();
    dibujarCuerpo();
    dibujarManoDerecha();
    dibujarManoIzquierda();
    dibujarPieDerecho();
    dibujarPieIzquierdo();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(230,125,5,0,2*Math.PI);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(260,125,5,0,2*Math.PI);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(245,125,25,0.25*Math.PI,0.75*Math.PI);
    ctx.fill();
    
    /* ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(245,135,15,0.25*Math.PI,.75*Math.PI);
    ctx.stroke(); */

    

    
    
    /* ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(245,135,15,0.25*Math.PI,.75*Math.PI);
    ctx.stroke();
     */    
    

}

function dibujarEspaciosPalabra(palabraSorteada) {
    for (let i = 0; i < palabraSorteada.length; i++) {        
        ctx.fillStyle = "#2e0101";
        ctx.font = '50px Arial';
        ctx.textAlign = 'center';
        let ejeX = i*45 + (canvas.width - palabraSorteada.length * 50) / 2 + 50;
        ctx.fillText('_', ejeX, 465);
    }
}

function reemplazarEspacioPorLetra(letra, index, posicion) {
    ctx.fillStyle = "#2e0101";
    ctx.font = '50px Arial';
    ctx.textAlign = 'center';
    let ejeX = index*45 + (canvas.width - posicion * 50) / 2 + 50;
    ctx.fillText(letra, ejeX, 465);
}

function dibujarLetrasUsadas(letra, index) {
    if(index < 7) {
        ctx.fillStyle = "#c00000";
        ctx.font = '40px Arial';
        ctx.textAlign = "center";
        let ejeX = (index-1)*45 + 400;
        ctx.fillText(letra, ejeX, 250);

    } else if(index > 6 && index < 13) {
        ctx.fillStyle = "#c00000";
        ctx.font = '40px Arial';
        ctx.textAlign = "center";
        let ejeX = (index-7)*45 + 400;
        ctx.fillText(letra, ejeX, 300);
    } else if(index > 12 && index < 19) {
        ctx.fillStyle = "#c00000";
        ctx.font = '40px Arial';
        ctx.textAlign = "center";
        let ejeX = (index-13)*45 + 400;
        ctx.fillText(letra, ejeX, 350);
    }
}

function dibujarResultado(triunfo) {
    if(triunfo) {
        ctx.fillStyle = "green";
        ctx.font = '60px Arial';
        ctx.textAlign = "center";
        ctx.fillText('Ganaste,', 520, 110);
        ctx.fillText('Felicidades!!!', 520, 170);
    } else {
        ctx.fillStyle = "red";
        ctx.font = '60px Arial';
        ctx.textAlign = "center";
        ctx.fillText('Perdiste,', 520, 110);

        ctx.font = '30px Arial';
        ctx.textAlign = "center";
        ctx.fillText(`La palabra era ${palabraSorteada}`, 520, 170);
    }
}


function dibujarFinDelJuego() {
    ctx.fillStyle = "red";
    ctx.font = '60px Arial';
    ctx.textAlign = "center";
    ctx.fillText('Fin del juego,', 520, 110);
}