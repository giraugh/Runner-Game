class SpriteController {
  constructor () {
    this.Sprites = undefined;
    this.initialized = false;

    this.init = function(x) {
      this.initialized = true;
      this.Sprites = x;
    }

    this.Sprite = function(x) {
      return this.Sprites[x];
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
