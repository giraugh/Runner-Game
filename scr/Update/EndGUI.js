function updateEndGUI() {
   if (player.dead) {
      //Show EndGUI
      endGui.alpha = lerp(endGui.alpha,1,0.2);

      //Restart
      if (Input.getInputPressed("continue")) {
         game_init();
         player.stopRunning();
         player.startToRun();
      }
   }

}
