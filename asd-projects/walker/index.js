/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  };
  
  // Game Item Objects

  var walker = {
    walkerX: 0,
    walkerY: 0,
    speedX: 0,
    speedY: 0,
  };
  var positionX = walker.walkerX;
  var positionY = walker.walkerY;

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp); 
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallCollision();
    redrawGameItem();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if(event.which === KEY.LEFT){
      walker.speedX = -5;
    }
    if(event.which === KEY.UP){
      walker.speedY = -5;
    }
    if(event.which === KEY.DOWN){
      walker.speedY = 5;
    }
    if(event.which === KEY.RIGHT){
      walker.speedX = 5;
    }
  }

  function handleKeyUp(event){
    if(event.which === KEY.LEFT){
      walker.speedX = 0;
    }
    if(event.which === KEY.RIGHT){
      walker.speedX = 0;
    }
    if(event.which === KEY.UP){
      walker.speedY = 0;
    }
    if(event.which === KEY.DOWN){
      walker.speedY = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
  function repositionGameItem(){
    positionX += walker.speedX;
    positionY += walker.speedY;
  }

  function redrawGameItem(){
    $("#walker").css("left", positionX);
    $("#walker").css("top", positionY);
  }

  function wallCollision(){
    var rightWall = $("#board").width();
    var bottomWall = $("#board").height();
    var topWall = 0;
    var leftWall = 0;
    if (positionX <= leftWall || positionX >= rightWall){
      positionX -= walker.speedX;
    }
    if (positionY <= topWall || positionY >= bottomWall){
      positionY -= walker.speedY;
    }
  }
  
}
