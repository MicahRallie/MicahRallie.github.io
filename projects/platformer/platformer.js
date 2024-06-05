$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    //Specific wall
      createPlatform(370, 20, 10, 150)

    //Main path
      createPlatform(50, 150, 150, 20)
      createPlatform(250, 500, 50, 20)
      createPlatform(500, 450, 100, 20)
      createPlatform(650, 320, 100, 20)
      createPlatform(800, 450, 100, 20)
      createPlatform(950, 320, 100, 20)

    //Abovehead path
      createPlatform(1200, 200, 100, 20)
      createPlatform(380, 150, 200, 20)
      createPlatform(800, 150, 200, 20)
      createPlatform(665, 150, 50, 20)

    //Secret collectable
      createPlatform(50, 700, 50, 20)
      createPlatform(250, 700, 50, 20)
      createPlatform(400, 620, 50, 20)

    //Below Cannon Collectable
      createPlatform(1200, 500, 100, 20)
      createPlatform(1000, 530, 100, 20)

    // NOTE TO SELF! Ask Mr. Johnson how to change the text

    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    createCollectable("kennedi", 50, 650, 20, 0.5)
    createCollectable("steve", 450, 20, 20, 0.5)
    createCollectable("grace", 1230, 450, 20, 0.5)

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

      createCannon("right", 350, 3000)
      createCannon("right", 490, 4000)
      createCannon("top", 680, 6000)
      createCannon("top", 820, 6000)
      createCannon("right", 800, 10)

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
