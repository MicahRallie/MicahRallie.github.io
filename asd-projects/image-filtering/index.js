// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
  $("#invert").on("click", invertAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here

  applyFilterNoBackground(ourple);
  applyFilter(reddify);
  applyFilter(increaseGreenByBlue);
  applyFilterNoBackground(increaseRedByGreen);
  applyFilterNoBackground(decreaseBlue);

  // do not change the below line of code
  render($("#display"), image);
}

//invert

function invertAndRender() {
  applyFilterNoBackground(invert);
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here

function applyFilter(filterFunction){
for(var i = 0; i < image.length; i++){
  for(var j = 0; j < image[i].length; j++){
    var pixel = image[i][j];
    var pixelArray = rgbStringToArray(pixel);
    
    filterFunction(pixelArray);

    var updatedPixel = rgbArrayToString(pixelArray);
    image[i][j] = updatedPixel;
  }
}
}

// TODO 9 Create the applyFilterNoBackground function

function applyFilterNoBackground(filterFunction){
var backgroundColor = image[0][0];

for(var i = 0; i < image.length; i++){
  for(var j = 0; j < image[i].length; j++){
    var pixel = image[i][j];
    var pixelArray = rgbStringToArray(pixel);
    if(image[i][j] !== backgroundColor){
    filterFunction(pixelArray);
    }
    var updatedPixel = rgbArrayToString(pixelArray);
    image[i][j] = updatedPixel;
  }
}
}

// TODO 6: Create the keepInBounds function

function keepInBounds(number){

if(number < 0){
  return 0;
} else if(number > 225){
  return 225;
}else{
  return number;
}
}

// TODO 4: Create reddify filter function

function reddify(pixelArray){
    pixelArray[RED] += 200;
    keepInBounds(pixelArray[RED]);
    return pixelArray[RED];
  }

// TODO 7 & 8: Create more filter functions

function decreaseBlue(pixelArray){
    pixelArray[BLUE] -= 50;
    keepInBounds(pixelArray[BLUE]);
    return pixelArray[BLUE];
}

function increaseGreenByBlue(pixelArray){
    pixelArray[GREEN] += pixelArray[BLUE];
    keepInBounds(pixelArray[GREEN]);
    return pixelArray[GREEN];
}

function increaseRedByGreen(pixelArray){
    pixelArray[RED] += pixelArray[GREEN];
    keepInBounds(pixelArray[RED]);
    return pixelArray[RED];
}

function ourple(pixelArray){
    pixelArray[RED] += 50;
    pixelArray[BLUE] += 50;
    keepInBounds(pixelArray[RED]);
    keepInBounds(pixelArray[BLUE]);
    return pixelArray[RED];
    return pixelArray[BLUE];
  }

function invert(pixelArray){
  pixelArray[RED] = 225 - pixelArray[RED];
  pixelArray[BLUE] = 225 - pixelArray[BLUE];
  pixelArray[GREEN] = 225 - pixelArray[GREEN];
  keepInBounds(pixelArray[RED]);
  keepInBounds(pixelArray[BLUE]);
  keepInBounds(pixelArray[GREEN]);
  return pixelArray[RED];
  return pixelArray[BLUE];
  return pixelArray[GREEN];
}
/* was trying something

function getRandomFilter(){
  resetAndRender();
  var filterArray = [ourple(), increaseGreenByBlue(),increaseGreenByBlue(), decreaseBlue(), reddify()];
  var filter = (Math.ceil(Math.random * (filterArray.length - 1)))
  return filterArray.filter;
}*/
// CHALLENGE code goes below here
