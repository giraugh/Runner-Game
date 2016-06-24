
function doPlayerPhysics() {
   //Apply gravity
   player.velocity.add(player.gravity);

   //Apply velocity
   player.position.add(player.velocity);

   //Clamp
   if (player.y() >= 400) {
      player.position.y(400);
      player.velocity.v[1] = 0;
   }
}

function doPlayerInput() {

   //Additional Gravity (if not holding up), creates dynamic jump
   if (!Input.getInput("jump"))
      player.velocity.add(player.additGravity);

   //Jumping
   if (Input.getInput("jump") && player.y() == 400)
      player.velocity.addY(-player.jumpForce);
}

function doCheckCollision() {
   let playerShape = SL.Sprite(player.sprite).toShape(player.x(),player.y());
   let cactusSprite = undefined;
   for (let i=cactus.amount;i--;) {
      let obj = cactus.cactuses[i];
      cactusShape = SL.Sprite(obj.sprite).toShape(obj.position.x(), obj.position.y());
      if (playerShape.overlaps(cactusShape))
         player.die(1);
   }
}

function updatePlayer() {
   doPlayerPhysics();
   doPlayerInput();
   doCheckCollision();
}
