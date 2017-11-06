var canvas;
var canvasContext;

function init() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    draw();
}

function draw() {
    canvasContext.fillStyle('black');
    canvasContext.fillRect(30,30,50,50);
}
