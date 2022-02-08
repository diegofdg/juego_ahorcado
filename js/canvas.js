const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = "red";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "green";
ctx.beginPath();
ctx.moveTo(100,450);
ctx.lineTo(200,400)
ctx.lineTo(300,450)
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 20;
ctx.moveTo(200,410);
ctx.lineTo(200,50);
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 20;
ctx.moveTo(190,50);
ctx.lineTo(300,50);
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 20;
ctx.moveTo(300,40);
ctx.lineTo(300,100);
ctx.strokeStyle = "green";
ctx.stroke();

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(300,130,35,0,2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 20;
ctx.moveTo(300,150);
ctx.lineTo(300,300);
ctx.strokeStyle = "yellow";
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 20;
ctx.moveTo(300,290);
ctx.lineTo(250,350);
ctx.strokeStyle = "yellow";
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 20;
ctx.moveTo(300,290);
ctx.lineTo(350,350);
ctx.strokeStyle = "yellow";
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 20;
ctx.moveTo(300,200);
ctx.lineTo(350,260);
ctx.strokeStyle = "yellow";
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 20;
ctx.moveTo(300,200);
ctx.lineTo(250,260);
ctx.strokeStyle = "yellow";
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.moveTo(285,120);
ctx.lineTo(295,130);
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.moveTo(295,120);
ctx.lineTo(285,130);
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.moveTo(305,120);
ctx.lineTo(315,130);
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.moveTo(315,120);
ctx.lineTo(305,130);
ctx.strokeStyle = "black";
ctx.stroke();


dibujarLetras();

function dibujarLetras() {
    for (let i = 0; i < 9; i++) {
        ctx.fillStyle = "#ffffff";
        ctx.font = '40px Arial';
        ctx.textAlign = "center";
        let ejeX = i*45 + 400;
        ctx.fillText('_', ejeX, 410);
    }
}

dibujarLetrasYaUsadas();

function dibujarLetrasYaUsadas() {
    for (let i = 0; i < 6; i++) {
        ctx.fillStyle = "#ffffff";
        ctx.font = '40px Arial';
        ctx.textAlign = "center";
        let ejeX = i*45 + 500;
        ctx.fillText('A', ejeX, 200);
    }

    for (let i = 0; i < 6; i++) {
        ctx.fillStyle = "#ffffff";
        ctx.font = '40px Arial';
        ctx.textAlign = "center";
        let ejeX = i*45 + 500;
        ctx.fillText('A', ejeX, 250);
    }

    for (let i = 0; i < 6; i++) {
        ctx.fillStyle = "#ffffff";
        ctx.font = '40px Arial';
        ctx.textAlign = "center";
        let ejeX = i*45 + 500;
        ctx.fillText('A', ejeX, 300);
    }
}

ctx.fillStyle = "blue";
ctx.font = '60px Arial';
ctx.textAlign = "center";
ctx.strokeStyle = 'white';
ctx.fillText('GANASTE!!!', 550, 110);
ctx.strokeText('GANASTE!!!', 550, 110);

function mostrarCanvas() {
    console.log('mostrando canvas');    
    canvas.style.display = "block";
}

function ocultarCanvas() {
    console.log('ocultando canvas');    
    canvas.style.display = "none";
}