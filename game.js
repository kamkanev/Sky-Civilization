// Creating variables
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

const Planet = require('./class/Planet.js');
const Button = require('./class/JsButton.js');

var game = loadGame();
console.log(game);
//💾
var exitB = new Button(WIDTH - 70, HEIGHT - 50, 70, 50, Button.DANGER, "Exit");
exitB.font = 22;
var saveB = new Button(exitB.x - exitB.sizeX, exitB.y, 70, 50, Button.SUCCESS, "💾");

var myX = 0, myY = 0;
var bg = new Image();
bg.src = "Images/space_bg.jpg";

function update() {
    myX = myX+(mouseX-myX)/10;
    myY = myY+(mouseY-myY)/10;
}

function draw() {
    // This is how you draw a rectangle
    context.drawImage(bg, 0, 0, WIDTH, HEIGHT);


    context.fillRect(myX, myY, 30, 30);
    exitB.draw();
    saveB.draw();

};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
  if(exitB.isItOnTheButton(mouseX, mouseY, 1, 1)){
    // isAllSaved(game);
    if(isAllSaved()){
    exit();
  }else{
    Swal.fire("are you sure");
  }
  }
  if(saveB.isItOnTheButton(mouseX, mouseY, 1, 1)){
    saveGame(game);
  }
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
