function initClouds() {
   clouds = {}
   clouds.speed = 2/5;
   clouds.chance = 1/100;
   clouds.max = 5;
   clouds.clouds = [];

   clouds.newCloud = function() {
      if (clouds.clouds.length < clouds.max) {
         let cloud = {};
         cloud.position = Vector(game_width()+100,Math.max(30,Math.random()*(ground.position[1]*.75)));
         clouds.clouds.push(cloud);
      }
   }
}
