// flag to prevent running simultaneous sorts by clicking 
// "start" multiple times
let STARTED = false;

$(document).ready(function(){
    $("#goButton").on("click", function(){
        if (!STARTED){
            STARTED = true;

            if (bubbleSort){
                bubbleSort(bubbleList);
                console.log("bubbles");
            }
            if (quickSort){
                quickSort(quickList, 0, quickList.length-1);
                console.log("quick");
            }
            console.log("started");
        }
    })
})
