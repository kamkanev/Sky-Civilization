const { remote } = require('electron');
const { BrowserWindow } = require('electron').remote;
const fs = require('fs');
var pathI = require('path');

let iconA = remote.nativeImage.createFromPath(pathI.join(__dirname, "images/icon.ico"))

document.getElementById('startGameBtn').addEventListener('click', createGame);
document.getElementById('startGameBackBtn').addEventListener('click', backToMain);

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

function createFile() {
  let game = {
    name: 'Mike',
    age: 23,
    gender: 'Male',
    department: 'English',
    car: 'Honda'
};

let data = JSON.stringify(game);
fs.writeFileSync('saves/student-2.json', data);
}

function createGame() {

  createFile();

  let win = new BrowserWindow({
    width: 800,
     height: 600,
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
