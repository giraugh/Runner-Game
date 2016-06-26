function updateGround() {

   //Move
   if (!player.dead)
      ground.position[0] -= ground.speed;

   //Loop
   if (Math.abs(ground.position[0] - (-SL.Sprite("ground").width)) < ground.speed)
      ground.position[0] = 0;

   //Get Faster
   if (!player.dead)
      if (ground.distance < 3200)
         ground.speed += 0.005;

   //Get Heavier
   if (!player.dead)
      player.additGravity[1] += 0.003;

   if (!player.dead)
      ground.distance++;

   //Update Cookie with best distance
   ground.bestDistance = (+Oven.getCookie("bestDistance") || 0);
   if (ground.distance > ground.bestDistance)
      Oven.setCookie("bestDistance",ground.distance);

}
