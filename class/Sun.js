var CosmicObject = require('./CosmicObject.js');

class Sun extends CosmicObject {
    constructor(x, y, size, type, name, src = "") {
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
