function drawDistance(ctx) {
   ctx.fillStyle = "black";

   let xx = game_width()-100;
   let yy = 50;
   let sep = 24;

   //Convert Distance to Array of chars
   let dist = (""+ground.distance).split("");
   for (let i=dist.length;i--;) {
      let sprite = SL.Sprite("gui.text."+dist[i]);
      sprite.draw(xx+(i*24),yy,ctx);
   }

   //Convert Distance to Array of chars
   let bd = +Oven.getCookie("bestDistance") || 0;
   let bdist = (""+bd).split("");
   for (let i=bdist.length;i--;) {
      let sprite = SL.Sprite("gui.text."+bdist[i]);
      sprite.draw(xx+(i*24),yy+24,ctx);
   }

}
