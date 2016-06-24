function updateCactus() {
   for (let i=cactus.amount;i--;) {
      let obj = cactus.cactuses[i];
      obj.position.addX(-ground.speed);

      if (obj.position.x() < -200)
         obj.reset()
   }
}
