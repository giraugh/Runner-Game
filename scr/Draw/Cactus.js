function drawCactus(ctx) {
   for (let i=cactus.amount;i--;) {
      let obj = cactus.cactuses[i];
      let sprite = SL.Sprite(obj.sprite);
      sprite.draw(obj.position.x(),obj.position.y(),ctx);
   }
}
