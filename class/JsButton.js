class Button {

  static NORMAL = 0;
  static DANGER = 1;
  static SUCCESS = 2;

  constructor(x, y, sizeX, sizeY, type, text = "Text") {
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.type = type;
    this.text = text;
    this.font = 20;
  }

  isItOnTheButton(x, y, sizeX, sizeY){
    if(areColliding(x, y, sizeX, sizeY, this.x, this.y, this.sizeX, this.sizeY)){
      return true;
    }

    return false;

  }

  draw(){
    var type = this.type;
    context.globalAlpha = 0.6;
    if(type == 0){
      context.fillStyle = "black";
      context.fillRect(this.x, this.y, this.sizeX, this.sizeY);

    }else if(type == 1){
      context.fillStyle = "red";
      context.fillRect(this.x, this.y, this.sizeX, this.sizeY);

    }else if(type == 2){
      context.fillStyle = "#3ddc4f";
      context.fillRect(this.x, this.y, this.sizeX, this.sizeY);

    }

    context.globalAlpha = 1;
    context.fillStyle = "white";
    context.font = this.font+"px Arial";
    context.fillText(this.text, this.x + this.sizeX/2 - (this.font - this.font/4), this.y + this.sizeY/2 + this.font/3);
  }
}

module.exports = Button;
