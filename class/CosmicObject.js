class CosmicObject {
  constructor(x, y, src, size, name) {
    this.x = x;
    this.y = y;
    this.name = name;
    this.size = size;
    this.configMenu = false;
    this.src = new Image();
    this.src.src = src;
  }

  draw(){

    context.drawImage(this.src, this.x, this.y, this.size, this.size);

  }
}

module.exports = CosmicObject;
