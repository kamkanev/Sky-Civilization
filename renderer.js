const { remote } = require('electron');
const { BrowserWindow } = require('electron').remote;


document.getElementById('exit').addEventListener('click', exit);
document.getElementById('new-game').addEventListener('click', createNewGame);

function exit() {
  var window = remote.getCurrentWindow();
       window.close();
}

function createNewGame() {

  let win = new BrowserWindow({
    width: 410,
     height: 600,
     resizable: false,
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
