const fs = require('fs');
const { remote } = require('electron');
const { BrowserWindow } = require('electron').remote;
var pathI = require('path');

const Planet = require('./class/Planet.js');
const Sun = require('./class/Sun.js');
const Button = require('./class/JsButton.js');
const SideItem = require('./class/SideItem.js');
const RealSun = require('./class/RealSun.js');

let iconA = remote.nativeImage.createFromPath(pathI.join(__dirname, "Images/icon.ico"))

function loadGame() {
  let rawdata = fs.readFileSync('currentSave.json');
  let data = JSON.parse(rawdata);

  rawdata = fs.readFileSync(data.load);
  data = JSON.parse(rawdata);

  return data;

}

function saveGame(game) {

  let data = JSON.stringify(game, null, 2);

  fs.writeFile('saves/'+game.system+'.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });
}

function exit() {
  var window = remote.getCurrentWindow();
       window.close();
}

function backToMain() {
  let win = new BrowserWindow({
    width: 800,
     height: 600,
     resizable: false,
      icon: iconA,
     webPreferences: {
             nodeIntegration: true
         }
    });
  win.loadFile('index.html');

  win.setMenuBarVisibility(false)

  // Open the DevTools.
   win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
    exit();
}

function isAllSaved(currentGame) {
  var lastSaved = loadGame();
  var date = new Date();
  if(lastSaved.saved == date.toJSON()){
    return true;
  }

  return false;
}

function randomString(l) {

  var result = '';
  var chars = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm-_0123456789';
  var charsL = chars.length;
  for(var i = 0; i < l; i++){
    result+= chars.charAt(Math.floor(Math.random() * charsL));
  }

  return result;

}

function isSystemExists(game) {

  if(game.sun.length == 0 && game.planets.length == 0){
    return false;
  }

  return true;

}

function isThereASun(game) {

  if(game.sun.length == 0){
    return false;
  }

  return true;

}

function isPointInCircle(xc, yc, xp, yp, r) {

  var d = Math.sqrt(Math.pow((xp - xc), 2) + Math.pow((yp - yc), 2));

  if(Math.pow(d, 2) <= Math.pow(r, 2)){
    return true;
  }

  return false;

}

async function renameItem(name = "") {
  var {value: newName} = await Swal.fire({
  title: 'Enter new name',
  input: 'text',
  inputValue: name,
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return 'You need to write something!'
    }

  }
});

if(newName != undefined){
  return newName;
}

return name;

}

async function setOrbits(lines = 8) {

  var {value: newLines} = await Swal.fire({
    title: "Enter number of orbits",
    input: 'number',
    inputValue: lines,
    showCancelButton: true,
    inputValidator: (value) => {
      if(parseInt(value)<1 || value >10){
        return 'The number must be between 1 and 10!';
      }
    }
  });

  if(newLines != undefined){
    return parseInt(newLines);
  }
  return lines;

}

async function setOrbit(lines = 3, doLiniq = 8, planets) {

  var {value: newLines} = await Swal.fire({
    title: "Enter an orbit",
    input: 'number',
    inputValue: lines,
    showCancelButton: true,
    inputValidator: (value) => {
      if(parseInt(value) < 1 || parseInt(value) > doLiniq){
        return 'The number must be between 1 and '+doLiniq+'!';
      }
      for (var i = 0; i < planets.length; i++) {
        if(planets[i].orbit == parseInt(value)){
          return 'There is already a planet in this orbit!';
        }
      }
    }
  });

  if(newLines != undefined){
    return parseInt(newLines);
  }
  return lines;

}

function drawObj(obj, sunOrPlanet) {

  if(sunOrPlanet == "sun"){

    var nSun = new RealSun(obj.x, obj.y, obj.type, obj.name, obj.lines);

    nSun.size = obj.size;

    nSun.draw();

  }

}
