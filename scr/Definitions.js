
//define game settings
function setDefinitions() {
  window.game_title = function(){return "New Game";} //SETS GAME NAME
  window.game_background = function(){return '#FFFFFF';} //SETS CANVAS BACKGROUND
  window.game_wbackground = function(){return '#000000';} //SETS BODY BACKGROUND
  window.game_width = function(){return window.innerWidth;} //SET CANVAS WIDTH
  window.game_height = function(){return window.innerHeight;} //SETS CANVAS HEIGHT
  window.game_padding = function(){return 0;} //SET BODY MARGIN
}

//Keep canvas at fullscreen (because game is designed to be put in an iframe)
function maintainCanvasFullscreen() {
  window.game_width = function(){return window.innerWidth;} //SET CANVAS WIDTH
  window.game_height = function(){return window.innerHeight;} //SETS CANVAS HEIGHT
  window.requestAnimationFrame(maintainCanvasFullscreen);
}
