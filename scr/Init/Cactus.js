function initCactus() {
   cactus = {};
   cactus.sprites = ["cactus.1","cactus.2","cactus.3","cactus.4"];
   cactus.amount = 2;
   cactus.startDistance = 700;

   cactus.cactuses = [];
   for (let i=cactus.amount;i--;) {
      let obj = {};
      obj.position = Vector(game_width()+cactus.startDistance+((game_width()/cactus.amount) * i),464);
      obj.sprite = cactus.sprites.random();
      obj.reset = function() {
         this.position = Vector(game_width()+100,464);
         this.sprite = cactus.sprites.random();
      }
      cactus.cactuses[i] = obj;
   }

}
