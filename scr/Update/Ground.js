function updateGround() {

   //Move
   if (!player.dead)
      ground.position[0] -= ground.speed;

   //Loop
   if (Math.abs(ground.position[0] - (-SL.Sprite("ground").width)) < ground.speed)
      ground.position[0] = 0;

   //Get Faster
   if (!player.dead)
      ground.speed += 0.005;
      player.additGravity[1] += 0.003;

   if (!player.dead)
      ground.distance++;

   //Update Cookie with best distance
   ground.bestDistance = (Oven.getCookie("bestDistance") || 0);
   ground.bestDistance = Math.max(ground.bestDistance,ground.distance);
   Oven.setCookie("bestDistance",ground.bestDistance);

}
