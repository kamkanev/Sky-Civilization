var CosmicObject = require('./CosmicObject.js');

class RealPlanet extends CosmicObject {
    constructor(type, name, orbit) {
      //8
      var size = 40, src = "Images/planets/g_gas.png";
      var x = 0, y = 0;

      if(type == 1){
        src = "Images/planets/g_ice.png"
      }else if(type == 2){
        src = "Images/planets/c_planet.png"
      }else if(type == 3){
        src = "Images/planets/o_planet.png"
      }else if(type == 4){

      }else if(type == 5){
        src = "Images/planets/t_planet.png"
      }

        super(x, y, src, size, name);
        super.configMenu = false;
        this.orbit = orbit;
        this.type = type;
        this.angle = 0.1;
    }

    async setName(name){
      super.name = name;
    }
}

module.exports = RealPlanet;
