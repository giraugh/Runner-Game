function initPlayer() {
   player = {
      position: Vector(250,400),
      velocity: Vector(0,0),
      gravity: Vector(0,0.5),
      additGravity: Vector(0,0.3),
      jumpForce: 15,
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
      stopRunning: function() {
         window.clearInterval(this.runId);
      },
      startToRun: function(x) {
         x = x || 100;
         this.stopRunning();
         this.runId = window.setInterval(function() {player.run()},x);
      },
      die: function(x) {
         x = x || 1;
         this.sprite = "dino.dead."+x;
         this.dead = true;
         this.stopRunning();
         ground.speed = 0;
      }
   }
}
