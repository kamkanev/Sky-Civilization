const { remote } = require('electron');
const { BrowserWindow } = require('electron').remote;
var pathI = require('path');

let iconA = remote.nativeImage.createFromPath(pathI.join(__dirname, "Images/icon.ico"))


document.getElementById('exit').addEventListener('click', exit);
document.getElementById('new-game').addEventListener('click', createNewGame);
document.getElementById('load-game').addEventListener('click', loadGame);

function exit() {
  var window = remote.getCurrentWindow();
       window.close();
}

function createNewGame() {

  let win = new BrowserWindow({
    width: 410,
     height: 200,
     resizable: false,
     icon: iconA,
     webPreferences: {
             nodeIntegration: true
         }
    });
  win.loadFile('newGame.html');

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

function loadGame() {

  let win = new BrowserWindow({
    width: 600,
     height: 400,
     resizable: false,
     icon: iconA,
     webPreferences: {
             nodeIntegration: true
         }
    });
  win.loadFile('loadGame.html');

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
