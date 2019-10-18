class SideItem {
  constructor(x, y, sizeX, sizeY, text, src = "../Image/planets/g_gas.png") {
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.text = text;
    this.font = 20;
    this.alpha = 0.7;
    this.on = false;
    this.clicked = false;
    this.border = false;
    this.src = new Image();
  }

  setImage(image){
    this.src.src = image;
  }

  getImage(){
    return this.src;
  }

  setAlpha(a){
    this.alpha = a;
  }

  isItOnTheItem(x, y, sizeX, sizeY){
    if(areColliding(x, y, sizeX, sizeY, this.x, this.y, this.sizeX, this.sizeY)){
      return true;
    }
    return false;
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

    context.globalAlpha = this.alpha;
    context.fillStyle = "#828282";
    context.fillRect(this.x, this.y, this.sizeX, this.sizeY);
    context.strokeStyle = "black";
    context.strokeRect(this.x, this.y, this.sizeX, this.sizeY);

    if(this.border){
      this.createBorder();
    }

    context.globalAlpha = 1;
    context.textAlign="center";
    context.textBaseline = "middle";
    context.fillStyle = "white";
    context.font = this.font+"px Comic Sans MS";
    context.fillText(this.text, this.x + this.sizeX/2, this.y + this.sizeY/2);

  }
}

module.exports = SideItem;
