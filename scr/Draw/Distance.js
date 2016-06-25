function drawDistance(ctx) {
   ctx.fillStyle = "black";

   let xx = game_width()-100;
   let yy = 50;
   let sep = 24;

   //Convert Distance to Array of chars
   let dist = (""+ground.distance).split("");
   let bd = +Oven.getCookie("bestDistance") || 0;
   let bdist = (""+bd).split("");

   if (dist.length < bdist.length) {
      for (let i = dist.length;i<bdist.length;i++)
         dist.insert("0");
   }

   if (bdist.length < dist.length) {
      for (let i = bdist.length;i<dist.length;i++)
         bdist.insert("0");
   }

   //Add 'HI' Text
   bdist.insert("HI");

   for (let i=dist.length;i--;) {
      let sprite = SL.Sprite("gui.text."+dist[i]);
      sprite.draw((xx-((dist.length/2)*sep))+(i*sep),yy,ctx);
   }

   for (let i=bdist.length;i--;) {
      if (bdist[i] == "HI")
         sprite = SL.Sprite("gui.hi");
      else
         sprite = SL.Sprite("gui.text."+bdist[i]);
      sprite.draw((xx-(((dist.length)/2)*sep))+(i*sep) - 25,yy+sep,ctx);
   }

}
