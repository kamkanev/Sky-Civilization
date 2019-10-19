var CosmicObject = require('./CosmicObject.js');

class RealSun extends CosmicObject {
    constructor(x, y, type, name, lines) {
      //8
      var size = 100, src = "Images/suns/m_sun.png";

      if(type == 0){
        src = "Images/suns/m_sun.png";
        size = 100;
      }else if(type == 1){
        src = "Images/suns/g_sun.png";
        size = 50;
      }

      x -= size/2;
      y -= size/2;

        super(x, y, src, size, name);
        super.configMenu = false;
        this.lines = lines;
        this.type = type;
    }

    async setName(name){
      super.name = name;
    }
}

module.exports = RealSun;
