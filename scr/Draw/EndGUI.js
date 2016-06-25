function drawEndGUI(ctx) {
      SL.Sprite("gui.restart").draw(game_width()/2,game_height()/2,ctx,endGui.alpha);
      SL.Sprite("gui.gameover").draw(game_width()/2,game_height()/2 - 80,ctx,endGui.alpha);
}
