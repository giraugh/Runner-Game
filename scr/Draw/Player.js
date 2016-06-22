function drawPlayer(ctx) {
   var playerSprite = SL.Sprite(player.sprite);
   var image = playerSprite.get();
   ctx.drawImage(image,player.x(),player.y());
}
