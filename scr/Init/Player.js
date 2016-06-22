function initPlayer() {
   player = {
      position: vector(0,0),
      sprite: "dino",
      x: function() {return this.position.v[0];},
      y: function() {return this.position.v[1];}
   }
}
