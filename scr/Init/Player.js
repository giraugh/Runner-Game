function initPlayer() {
   player = {
      position: Vector(250,400),
      sprite: "dino.asleep",
      dead: false,
      runId: 0,
      x: function() {return this.position.x()},
      y: function() {return this.position.y()},
      wakeUp: function() {
         this.sprite = "dino.idle";
      },
      run: function() {
         this.sprite = (this.sprite == "dino.run.1") ? "dino.run.2" : "dino.run.1";
      },
      startToRun: function() {
         this.runId = window.setInterval(function() {player.run()},100);
      },
      die: function(x) {
         x = x || 1;
         this.sprite = "dino.dead."+x;
         this.dead = true;
         window.clearInterval(this.runId);
      }
   }
}
