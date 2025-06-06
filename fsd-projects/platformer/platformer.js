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

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(1005, 200, 50, 50, "red");
createPlatform(175, 650, 30, 20, "black");
createPlatform(350, 510, 50, 50, "blue");
createPlatform(550, 390, 50, 50, "pink");
createPlatform(750, 300, 50, 50, "green");
createPlatform(300, 600, 30, 30, "orange");
    // TODO 3 - Create Collectables
createCollectable("diamond", 350, 450);
createCollectable("steve", 1005, 150);
createCollectable("steve", 800, 210);
    
    // TODO 4 - Create Cannons
createCannon("right", 500, 2000);
createCannon("left", 300, 2000);
    createCannon("right", 200, 2000);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
