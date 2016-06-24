function game_draw(ctx) {

   //Update is not called by engine and so must be called in draw call
   game_update()

   //Disable Smoothing
   ctx.imageSmoothingEnabled = false;
   ctx.mozImageSmoothingEnabled = false;

   //draw entities
   drawGround(ctx);
   drawCactus(ctx);
   drawPlayer(ctx);
   drawEndGUI(ctx);
}
