function updateGround() {
   if (!player.dead)
      ground.position[0] -= ground.speed;
   if (Math.abs(ground.position[0] - (-SL.Sprite("ground").width)) < ground.speed)
      ground.position[0] = 0;
}
