const { remote } = require('electron');

document.getElementById('exit').addEventListener('click', exit);

function exit() {
  var window = remote.getCurrentWindow();
       window.close();
}
