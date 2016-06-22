function initPlayer() {
   player = {
      position: Vector(0,0),
      sprite: "dino",
      x: function() {return this.position.x()},
      y: function() {return this.position.y()}
   }
}
