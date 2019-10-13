require('CosmicObject');

class Planet extends CosmicObject {
  constructor(x, y, src, size, type) {
    super(x, y, src, size);

    this.type = type;
  }
}


module.exports = Planet;
