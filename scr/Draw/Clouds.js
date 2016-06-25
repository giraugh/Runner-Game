function drawClouds(ctx) {
   for (var i = clouds.clouds.length;i--;) {
      let cloud = clouds.clouds[i];
      SL.drawSprite('cloud',cloud.position.x(),cloud.position.y(),ctx);
   }
}
