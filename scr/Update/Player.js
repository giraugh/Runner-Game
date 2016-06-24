
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
   if (!Input.getKey("jump"))
      player.velocity.add(player.additGravity);

   //Jumping
   if (Input.getKey("jump") && player.y() == 400)
      player.velocity.addY(-player.jumpForce);
}

function updatePlayer() {
   doPlayerPhysics();
   doPlayerInput();
}
