const fs = require('fs');
const { remote } = require('electron');
const { BrowserWindow } = require('electron').remote;
var pathI = require('path');

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
