var canvas;
var canvasContext;

window.onload = function() {
    /* window.onload runs the specified function only after everything had loaded*/
    console.log("Loading status: succesful");
    canvas = document.getElementById('gameCanvas');
    /* The above line selects the element with the gameCanvas id and stores it in canvas*/
    canvasContext = canvas.getContext('2d');
    /* show that we want to create a 2d object */
    canvasContext.fillStyle = 'black';
    /* fills the canvas black*/
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    /* the 0,0 sets the coordinates of the canvas at the top left corner
    and then sets its width and height to that of the html canvas*/
};
