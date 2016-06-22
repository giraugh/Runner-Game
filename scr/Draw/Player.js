function drawPlayer(ctx) {
   let playerSprite = SL.Sprite(player.sprite);
   let image = playerSprite.get();

   ctx.drawImage(image,player.x(),player.y());
}
