const { remote } = require('electron');
const { BrowserWindow } = require('electron').remote;
const fs = require('fs');


document.getElementById('startGameBtn').addEventListener('click', createGame);

function exit() {
  var window = remote.getCurrentWindow();
       window.close();
}

function createFile() {
  let student = {
    name: 'Mike',
    age: 23,
    gender: 'Male',
    department: 'English',
    car: 'Honda'
};

let data = JSON.stringify(student);
fs.writeFileSync('saves/student-2.json', data);
}

function createGame() {

  let win = new BrowserWindow({
    width: 800,
     height: 600,
     resizable: false,
     webPreferences: {
             nodeIntegration: true
         }
    });
  win.loadFile('newGame.html');

  win.setMenuBarVisibility(false)

  exit();

  // Open the DevTools.
   win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}
