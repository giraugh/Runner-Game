function drawPlayer(ctx) {
   let playerSprite = SL.Sprite(player.sprite);
   let args = playerSprite.getDrawArgs();
   playerSprite.draw(player.x(),player.y(),ctx);
}
