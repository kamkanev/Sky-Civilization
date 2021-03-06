var CosmicObject = require('./CosmicObject.js');

class Sun extends CosmicObject {
    constructor(x, y, size = 150, type, name, src = "Images/suns/m_sun.png") {
      //8
      if(type == 0){
        src = "Images/suns/m_sun.png";
      }else if(type == 1){
        src = "Images/suns/g_sun.png"
      }
        super(x, y, src, size, name);
        super.configMenu = false;
        this.lines = 8;
        this.type = type;
    }

    async setName(name){
      super.name = name;
    }
}

module.exports = Sun;
