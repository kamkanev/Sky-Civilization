class CosmicObject {
  constructor(x, y, src, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.src = new Image();
    this.src.src = src;
  }

  draw(){

    context.drawImage(this.src, this.x, this.y, this.size, this.size);

  }
}
