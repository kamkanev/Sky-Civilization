// Creating variables
const fs = require('fs');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

var game = loadGame();
console.log(game);
var myX = 0, myY = 0;

function update() {
    myX = myX+(mouseX-myX)/10;
    myY = myY+(mouseY-myY)/10;
}

function draw() {
    // This is how you draw a rectangle
    context.fillRect(myX, myY, 30, 30);
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};

//file stuff

function loadGame() {
  let rawdata = fs.readFileSync('currentSave.json');
  let data = JSON.parse(rawdata);

  rawdata = fs.readFileSync(data.load);
  data = JSON.parse(rawdata);

  return data;

}

function saveGame(game) {

  let data = JSON.stringify(game);
  fs.writeFileSync('saves/'+game.system+'.json', data);
}
