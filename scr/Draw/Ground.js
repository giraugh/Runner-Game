function drawGround(ctx) {
   let groundSprite = SL.Sprite("ground");
   let x = ground.position[0];
   let y = ground.position[1];
   groundSprite.draw(x,y,ctx);
   groundSprite.draw(x+(groundSprite.width*1),y,ctx);
   groundSprite.draw(x+(groundSprite.width*2),y,ctx);
}
