//most of this code is borrowed and not wholy my own creation-- Instead of re-writing someone else's code I've added my own notes as to why it works so well. All of the html and css stylings are my own however. :)
//I spent well over 5 hours trying to devise better code, but as the codeing saying goes, if it works don't touch it!
 colorPicker = $("#colorPicker"),
 sizePicker = $("#sizePicker"),
 pixelCanvas = $("#pixelCanvas"),
 gridHeight = $("#inputHeight"),
 gridWidth = $("#inputWidth");



// makeGrid function based on size input
function makeGrid() {

  let gridSize = ""; //allows for dynamic changes
  for (let x = 0; x < gridHeight.val(); x++) {
    gridSize += "<tr>";  //add row
    for (let y = 0; y < gridWidth.val(); y++) {
      gridSize += "<td></td>";  //add column
    }
    gridSize += "</tr>";  //have to close row here instead of under x varibale, otherwise you get spread out rows
  }
  pixelCanvas.append(gridSize); //allows the canvas to change
 colorGrid(); //initalized here as to expediate the function below of colorGrid
};

// When size is submitted by the user, call makeGrid()
sizePicker.submit(function(event) {
  pixelCanvas.empty(); //starts the canvas empty of color
  event.preventDefault(); //prevents the dreaded instant refresh
  makeGrid(); //the actual call of the makeGrid function
      
});



function colorGrid() {

  const td = $("#pixelCanvas td");

  // color when drag mouse
  td.on("mousedown", function () {
    isFill = true;
  });
  $(document).mouseup(function() {
    isFill = false;
  });
  td.on("mousemove", function() {
    if(isFill) {
      $(this).css("background-color", colorPicker.val()
                 )}
  });

  // color on click
  td.click(function() {
    $(this).css("background-color", colorPicker.val());
  });

  // erase when double click
  td.dblclick(function() {
    $(this).css("background-color", "#8414e5");
  });

};




