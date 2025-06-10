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

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if(event.which === KEY.LEFT){
      walker.speedX = -5;
      console.log("left pressed");
    }
    if(event.which === KEY.UP){
      walker.speedY = -5;
      console.log("up pressed");
    }
    if(event.which === KEY.DOWN){
      walker.speedY = 5;
      console.log("down pressed");
    }
    if(event.which === KEY.RIGHT){
      walker.speedX = 5;
      console.log("right pressed");
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
    walker.walkerX += walker.speedX;
    walker.walkerY += walker.speedY;
  }

  function redrawGameItem(){
    $("walker").css("left", walker.walkerX);
    $("walker").css("up", walker.walkerY);
  }
  
}
