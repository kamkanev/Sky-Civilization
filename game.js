// Creating variables
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

const Planet = require('./class/Planet.js');
const Sun = require('./class/Sun.js');
const Button = require('./class/JsButton.js');
const SideItem = require('./class/SideItem.js');

var game = loadGame();
console.log(game);

var sun = game.sun;
var planets = game.planets;

var isThereSun = isThereASun(game);

var exitB = new Button(WIDTH - 70, HEIGHT - 50, 70, 50, Button.DANGER, "Exit");
exitB.font = 22;
exitB.setAlpha(0.4);

var saveB = new Button(exitB.x - exitB.sizeX, exitB.y, 70, 50, Button.SUCCESS, "💾");
saveB.setAlpha(0.4);

var createB = new Button(saveB.x - 101, saveB.y, 100, 50, Button.SUCCESS, "Create");
var updateB = new Button(saveB.x - 101, saveB.y, 100, 50, Button.SUCCESS, "Update");

var addB = new Button(saveB.x, 0, 140, 50, Button.NORMAL, "Add +");
addB.font = 30;
addB.setAlpha(0.4);

var infoB = new Button(addB.x-30, 25, 20, 15, Button.SUCCESS, "Info");
infoB.font = 25;

var configB = new Button(0, 0, 220, 50, Button.NORMAL, "Config V");
configB.setAlpha(0.4);

var renameB = new Button(configB.x + 5, configB.y + configB.sizeY + 5, configB.sizeX - 10, configB.sizeY - 10, Button.DANGER, "Rename");
renameB.setAlpha(0.4);

var backB = new Button(addB.x, addB.y + addB.sizeY, addB.sizeX/2, addB.sizeY, Button.NORMAL, "↩");
backB.font = 30;

var openCreateMenu = false;
var openSunMenu = false, openPlanetMenu = false;
var configMenu = false, sunOrPlanet = "";
var configObject, newOrUpdate = "";

var planetCreateList = [
  new SideItem(addB.x + 5, backB.y + addB.sizeY + 10, addB.sizeX-10, addB.sizeY - 5, "Gas giant")
];
planetCreateList.push(new SideItem(planetCreateList[0].x, planetCreateList[0].y + planetCreateList[0].sizeY + 10, planetCreateList[0].sizeX, planetCreateList[0].sizeY, "Ice giant"));
planetCreateList.push(new SideItem(planetCreateList[1].x, planetCreateList[1].y + planetCreateList[1].sizeY + 10, planetCreateList[1].sizeX, planetCreateList[1].sizeY, "Carbon planet"));
planetCreateList.push(new SideItem(planetCreateList[2].x, planetCreateList[2].y + planetCreateList[2].sizeY + 10, planetCreateList[2].sizeX, planetCreateList[2].sizeY, "Iron planet"));
planetCreateList.push(new SideItem(planetCreateList[3].x, planetCreateList[3].y + planetCreateList[3].sizeY + 10, planetCreateList[3].sizeX, planetCreateList[3].sizeY, "Ocean planet"));
planetCreateList.push(new SideItem(planetCreateList[4].x, planetCreateList[4].y + planetCreateList[4].sizeY + 10, planetCreateList[4].sizeX, planetCreateList[4].sizeY, "Solid planet"));
planetCreateList.push(new SideItem(planetCreateList[5].x, planetCreateList[5].y + planetCreateList[5].sizeY + 10, planetCreateList[5].sizeX, planetCreateList[5].sizeY, "Terrestial planet"));

var sunCreateList = [
  new SideItem(addB.x + 5, backB.y + addB.sizeY + 10, addB.sizeX-10, addB.sizeY - 5, "Normal sun")
];

var menuMainList = [
  new SideItem(addB.x + 5, addB.y + addB.sizeY + 10, addB.sizeX-10, addB.sizeY - 5, "Sun")
];
menuMainList.push(new SideItem(menuMainList[0].x, menuMainList[0].y + menuMainList[0].sizeY + 10, menuMainList[0].sizeX, menuMainList[0].sizeY , "Planet"));

var myX = 0, myY = 0;
var bg = new Image();
bg.src = "Images/space_bg.jpg";

function update() {
    myX = myX+(mouseX-myX)/10;
    myY = myY+(mouseY-myY)/10;

    if(exitB.flag){
      exitB.setAlpha(0.7);
    }else{
      exitB.setAlpha(0.4);
    }

    if(saveB.flag){
      saveB.setAlpha(0.7)
    }else{
      saveB.setAlpha(0.4)
    }

    if(createB.flag){
      createB.setAlpha(0.7)
    }else{
      createB.setAlpha(0.4)
    }

    if(updateB.flag){
      updateB.setAlpha(0.7)
    }else{
      updateB.setAlpha(0.4)
    }

    if(addB.flag){
      addB.setAlpha(0.7)
    }else{
      addB.setAlpha(0.4)
    }

    if(configB.flag){
      configB.setAlpha(0.7)
    }else{
      configB.setAlpha(0.4)
    }

    if(renameB.flag){
      renameB.setAlpha(0.7)
    }else{
      renameB.setAlpha(0.4)
    }

    if(backB.flag){
      backB.setAlpha(0.7)
    }else{
      backB.setAlpha(0.4)
    }

    for (var i = 0; i < menuMainList.length; i++) {
      if(menuMainList[i].on){
        menuMainList[i].setAlpha(1);
      }else{
        menuMainList[i].setAlpha(0.7);
      }
    }

    for (var i = 0; i < planetCreateList.length; i++) {
      if(planetCreateList[i].on){
        planetCreateList[i].setAlpha(1);
      }else{
        planetCreateList[i].setAlpha(0.7);
      }
    }

    for (var i = 0; i < sunCreateList.length; i++) {
      if(sunCreateList[i].on){
        sunCreateList[i].setAlpha(1);
      }else{
        sunCreateList[i].setAlpha(0.7);
      }
    }
}

function draw() {
    // This is how you draw a rectangle
    context.drawImage(bg, 0, 0, WIDTH, HEIGHT);


    context.beginPath();
    context.arc(myX, myY, 15, 0, Math.PI*2);
    context.closePath();
    context.fill();

    addB.draw();
    configB.draw();
    exitB.draw();
    saveB.draw();
    infoB.drawInfo();

    if(addB.clicked){
      context.globalAlpha = 0.8;
      context.fillStyle = "black";
      context.fillRect(addB.x, addB.y + addB.sizeY, addB.sizeX, HEIGHT - 2 * exitB.sizeY);

      if(!openSunMenu && !openPlanetMenu){

        for (var i = 0; i < menuMainList.length; i++) {
          menuMainList[i].draw();
        }

      }else if(openSunMenu){

        backB.draw();

        for (var i = 0; i < sunCreateList.length; i++) {
          sunCreateList[i].draw();
        }

      }else if (openPlanetMenu) {

        backB.draw();

        for (var i = 0; i < planetCreateList.length; i++) {
          planetCreateList[i].draw();
        }

      }

      context.globalAlpha = 1;
    }

    if(configMenu){

      context.globalAlpha = 0.8;
      context.fillStyle = "black";
      context.fillRect(configB.x, configB.y + configB.sizeY, configB.sizeX, HEIGHT - configB.sizeY);
      context.globalAlpha = 1;


      if(configObject != undefined){

        if(newOrUpdate == "new"){
          createB.draw();
        }else if(newOrUpdate == "update"){
          updateB.draw();
        }

        renameB.draw();

        configObject.draw();

        context.textAlign="center";
        context.textBaseline = "middle";
        context.fillStyle = "white";
        context.font = "50px Arial";
        context.fillText(configObject.name, configObject.x + configObject.size/2, configObject.y + 50);
      }

    }

};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
  if(exitB.isItOnTheButton(mouseX, mouseY, 1, 1)){
    // isAllSaved(game);
    exit();
  }

  if(saveB.isItOnTheButton(mouseX, mouseY, 1, 1)){
    saveGame(game);
  }

  if(createB.isItOnTheButton(mouseX, mouseY, 1, 1) && newOrUpdate == "new" && configMenu){
    if(sunOrPlanet == "sun"){
      if(!isThereSun){
        var sun = {
          type: configObject.type,
          x: configObject.x,
          y: configObject.y,
          name: configObject.name,
          lines: configObject.lines
        }
        game.sun.push(sun);
        sun.push(sun);
        isThereSun = true;
      }
    }

    addB.clicked = false;
    addB.text = "Add +";
    addB.type = Button.NORMAL;
    openCreateMenu = false;
    openSunMenu = false;
    openPlanetMenu = false;

    configB.clicked = false;
    configMenu = false;
    configB.text = "Config V";

    configObject = undefined;
    newOrUpdate = "";

  }

  if(backB.isItOnTheButton(mouseX, mouseY, 1, 1) && (openSunMenu || openPlanetMenu)){
    if(openSunMenu){
      openSunMenu = false;
    }
    if(openPlanetMenu){
      openPlanetMenu = false;
    }
    mouseX = -10;
    mouseY = -10;
  }

  if(addB.isItOnTheButton(mouseX, mouseY, 1, 1) && !addB.clicked){
    addB.clicked = true;
    addB.text = "Cancel";
    addB.type = Button.DANGER;
    openCreateMenu = true;
  }else if(addB.isItOnTheButton(mouseX, mouseY, 1, 1) && addB.clicked){
    addB.clicked = false;
    addB.text = "Add +";
    addB.type = Button.NORMAL;
    openCreateMenu = false;
    openSunMenu = false;
    openPlanetMenu = false;
  }

  if(configB.isItOnTheButton(mouseX, mouseY, 1, 1) && !configB.clicked){
    configB.clicked = true;
    configMenu = true;
    configB.text = "Config ^";
  }else if(configB.isItOnTheButton(mouseX, mouseY, 1, 1) && configB.clicked){
    configB.clicked = false;
    configMenu = false;
    configB.text = "Config V";
  }

  if(renameB.isItOnTheButton(mouseX, mouseY, 1, 1) && configMenu && configObject!= undefined){
    //rename function
    var newName = renameItem(configObject.name).then((text) => {
      configObject.setName(text);
    });


  }

  if(menuMainList[0].isItOnTheItem(mouseX, mouseY, 1, 1) && !openSunMenu && !openPlanetMenu && openCreateMenu && !isThereSun){

    openSunMenu = true;
    mouseX = -10;
    mouseY = -10;

  }else if(menuMainList[0].isItOnTheItem(mouseX, mouseY, 1, 1) && !openSunMenu && !openPlanetMenu && openCreateMenu && isThereSun){
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'There is already a sun!'
    })
  }

  if(menuMainList[1].isItOnTheItem(mouseX, mouseY, 1, 1) && !openSunMenu && !openPlanetMenu && openCreateMenu && isThereSun){

    openPlanetMenu = true;
    mouseX = -10;
    mouseY = -10;

  }else if(menuMainList[1].isItOnTheItem(mouseX, mouseY, 1, 1) && !openSunMenu && !openPlanetMenu && openCreateMenu && !isThereSun){
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'There is no sun!',
      footer: '<p style="color: blue;">Create first sun and then add planets!</p>'
    })
  }

  for (var i = 0; i < planetCreateList.length; i++) {
    if(planetCreateList[i].isItOnTheItem(mouseX, mouseY, 1, 1) && openPlanetMenu){

      configB.clicked = true;
      configMenu = true;
      configB.text = "Config ^";
      sunOrPlanet = "planet";
      newOrUpdate = "new";
      configMenu = true;
      configObject = new Planet(configB.sizeX+(addB.x - configB.sizeX)/2 - HEIGHT/2, 0, HEIGHT, i, randomString(5));
      mouseX = -10;
      mouseY = -10;

    }
  }

  for (var i = 0; i < sunCreateList.length; i++) {
    if(sunCreateList[i].isItOnTheItem(mouseX, mouseY, 1, 1) && openSunMenu){

      configB.clicked = true;
      configMenu = true;
      configB.text = "Config ^";
      sunOrPlanet = "sun";
      newOrUpdate = "new";
      configMenu = true;
      configObject = new Sun(configB.sizeX+(addB.x - configB.sizeX)/2 - HEIGHT/2, 0, HEIGHT, i, randomString(5), "Images/suns/m_sun.png");
      mouseX = -10;
      mouseY = -10;

    }
  }
    // Show coordinates of mouse on click
    //console.log("Mouse clicked at", mouseX, mouseY);
};

function mousemove() {
  if(exitB.isItOnTheButton(mouseX, mouseY, 1, 1)){

    exitB.flag = true;
    exitB.setBorder(true);

  }else{
    exitB.flag = false;
    exitB.setBorder(false);
  }

  if(saveB.isItOnTheButton(mouseX, mouseY, 1, 1)){

    saveB.flag = true;
    saveB.setBorder(true);
  }else{
    saveB.setBorder(false);
    saveB.flag = false;
  }

  if(createB.isItOnTheButton(mouseX, mouseY, 1, 1)){

    createB.flag = true;
    createB.setBorder(true);
  }else{
    createB.setBorder(false);
    createB.flag = false;
  }

  if(updateB.isItOnTheButton(mouseX, mouseY, 1, 1)){

    updateB.flag = true;
    updateB.setBorder(true);
  }else{
    updateB.setBorder(false);
    updateB.flag = false;
  }

  if(addB.isItOnTheButton(mouseX, mouseY, 1, 1)){

    addB.flag = true;
    addB.setBorder(true);
  }else{
    addB.setBorder(false);
    addB.flag = false;
  }

  if(configB.isItOnTheButton(mouseX, mouseY, 1, 1)){

    configB.flag = true;
    configB.setBorder(true);
  }else{
    configB.setBorder(false);
    configB.flag = false;
  }

  if(renameB.isItOnTheButton(mouseX, mouseY, 1, 1)){

    renameB.flag = true;
    renameB.setBorder(true);
  }else{
    renameB.setBorder(false);
    renameB.flag = false;
  }

  if(backB.isItOnTheButton(mouseX, mouseY, 1, 1)){

    backB.flag = true;
    backB.setBorder(true);
  }else{
    backB.setBorder(false);
    backB.flag = false;
  }

  for (var i = 0; i < menuMainList.length; i++) {
    if(menuMainList[i].isItOnTheItem(mouseX, mouseY, 1, 1)){

      menuMainList[i].on = true;
      menuMainList[i].setBorder(true);
    }else{
      menuMainList[i].setBorder(false);
      menuMainList[i].on = false;
    }
  }

  for (var i = 0; i < planetCreateList.length; i++) {
    if(planetCreateList[i].isItOnTheItem(mouseX, mouseY, 1, 1)){

      planetCreateList[i].on = true;
      planetCreateList[i].setBorder(true);
    }else{
      planetCreateList[i].setBorder(false);
      planetCreateList[i].on = false;
    }
  }

  for (var i = 0; i < sunCreateList.length; i++) {
    if(sunCreateList[i].isItOnTheItem(mouseX, mouseY, 1, 1)){

      sunCreateList[i].on = true;
      sunCreateList[i].setBorder(true);
    }else{
      sunCreateList[i].setBorder(false);
      sunCreateList[i].on = false;
    }
  }

    // Show coordinates of mouse on click
    //console.log("Mouse clicked at", mouseX, mouseY);
};
