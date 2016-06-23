class SpriteController {
  constructor () {
    this.Sprites = undefined;
    this.initialized = false;

    this.init = function(x) {
      this.initialized = true;
      this.Sprites = x;
    }

    this.Sprite = function(x) {
      let obj = this.Sprites[x];
      obj.get = function() {
         let img = new Image();
         img.src = this.src;
         return img;
      }
      return obj;
    }

    this.get = function(x) {
      let spr = this.Sprites[x];
      let a = new Image();
      a.src = spr.src;
      return a;
   }

    this.addSprite = function(name,src,width,height) {
      this.Sprites[name] = {};
      this.Sprites[name].src = src;
      this.Sprites[name].width = width;
      this.Sprites[name].height = height;
      return this.Sprites[name];
    }
  }
}