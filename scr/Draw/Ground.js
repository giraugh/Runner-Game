function drawGround(ctx) {
   let groundSprite = SL.Sprite("ground");
   let x = ground.position[0];
   let y = ground.position[1];
   groundSprite.draw(x,y,ctx);
}
