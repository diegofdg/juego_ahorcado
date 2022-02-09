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
    ctx.moveTo(50,450);
    ctx.lineTo(150,400)
    ctx.lineTo(250,450)
    ctx.fill();
}

function dibujarHorca() {
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(150,410);
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
    ctx.lineWidth = 20;
    ctx.moveTo(245,150);
    ctx.lineTo(245,300);
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
    ctx.moveTo(245,290);
    ctx.lineTo(295,340);
    ctx.strokeStyle = "#BF8B67";
    ctx.stroke();
}

function dibujarPieIzquierdo() {
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.moveTo(245,290);
    ctx.lineTo(195,340);
    ctx.strokeStyle = "#BF8B67";
    ctx.stroke();
}

function dibujarOjos() {
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
}

function dibujarEspaciosPalabra(palabraSorteada) {
    for (let i = 0; i < palabraSorteada.length; i++) {
        ctx.fillStyle = "#2e0101";
        ctx.font = '50px Arial';
        ctx.textAlign = "center";
        let ejeX = i*45 + 350;
        ctx.fillText('_', ejeX, 450);
    }
}

function reemplazarEspacioPorLetra(letra, index) {
    ctx.fillStyle = "#2e0101";
    ctx.font = '50px Arial';
    ctx.textAlign = "center";
    let ejeX = index*45 + 350;
    ctx.fillText(letra, ejeX, 450);
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

function dibujarGanaste() {
    ctx.fillStyle = "green";
    ctx.font = '60px Arial';
    ctx.textAlign = "center";
    ctx.fillText('Ganaste,', 520, 110);
    ctx.fillText('Felicidades!!!', 520, 170);
}

function dibujarFinDelJuego() {
    ctx.fillStyle = "red";
    ctx.font = '60px Arial';
    ctx.textAlign = "center";
    ctx.fillText('Fin del juego,', 520, 110);
}