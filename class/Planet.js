const CosmicObject = require('./CosmicObject.js');

class Planet extends CosmicObject {
  constructor(x, y, size, type, name, src = "Images/planets/g_gas.png") {
    if(type == 1){
      src = "Images/planets/g_ice.png"
    }else if(type == 2){
      src = "Images/planets/c_planet.png"
    }else if(type == 4){
      src = "Images/planets/o_planet.png"
    }
    super(x, y, src, size, name);
    super.configMenu = false;
    this.type = type;
  }

  async setName(name){
    super.name = name;
  }
}


module.exports = Planet;
