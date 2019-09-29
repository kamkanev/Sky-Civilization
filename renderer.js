const { remote } = require('electron');


function exit() {
  var window = remote.getCurrentWindow();
       window.close();
}
