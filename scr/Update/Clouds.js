function updateClouds() {
   if (Math.random() < clouds.chance)
      clouds.newCloud();

   for (var i = clouds.clouds.length;i--;)
      clouds.clouds[i].position.addX(-(Math.max(ground.speed,3)*clouds.speed));

   for (var i = clouds.clouds.length;i--;)
      if (clouds.clouds[i].position.x() < -100)
         clouds.clouds.remove();
}
