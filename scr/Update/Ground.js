function updateGround() {
   ground.position[0] -= 1;
   if (ground.position[0] == -SL.Sprite("ground").width)
      ground.position[0] = 0;
}
