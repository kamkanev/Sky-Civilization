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
    this.alpha = 0.6;
    this.border = false;
    this.flag = false;
    this.clicked = false;
  }

  isItOnTheButton(x, y, sizeX, sizeY){
    if(areColliding(x, y, sizeX, sizeY, this.x, this.y, this.sizeX, this.sizeY)){
      return true;
    }

    return false;

  }

  setAlpha(a){
    this.alpha = a;
  }

  createBorder(){

    var type = this.type;
    context.globalAlpha = this.alpha;

    if(type == 0){
      context.strokeStyle = "black";
      context.strokeRect(this.x, this.y, this.sizeX, this.sizeY);
      context.strokeRect(this.x+1, this.y+1, this.sizeX-2, this.sizeY-2);

    }else if(type == 1){
      context.strokeStyle = "#9c2608";
      context.strokeRect(this.x, this.y, this.sizeX, this.sizeY);
      context.strokeRect(this.x+1, this.y+1, this.sizeX-2, this.sizeY-2);

    }else if(type == 2){
      context.strokeStyle = "green";
      context.strokeRect(this.x, this.y, this.sizeX, this.sizeY);
      context.strokeRect(this.x+1, this.y+1, this.sizeX-2, this.sizeY-2);

    }

  }

  setBorder(b){

    this.border = b;
  }

  draw(){
    var type = this.type;
    context.globalAlpha = this.alpha;

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

    if(this.border){
      this.createBorder();
    }

    context.globalAlpha = 1;
    context.textAlign="center";
    context.textBaseline = "middle";
    context.fillStyle = "white";
    context.font = this.font+"px Arial";
    context.fillText(this.text, this.x + this.sizeX/2, this.y + this.sizeY/2);
  }

  drawInfo(){

context.globalAlpha = this.alpha;
    context.fillStyle = "blue";
    context.beginPath();
    context.arc(this.x, this.y, this.sizeX, 0, Math.PI*2);
    context.closePath();
    context.fill();

    context.globalAlpha = 1;
    context.textAlign="center";
    context.textBaseline = "middle";
    context.fillStyle = "white";
    context.font = this.font+"px Arial";
    context.fillText("i", this.x, this.y);
  }

}

module.exports = Button;
