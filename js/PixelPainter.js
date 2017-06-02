// Naming PixelPainter Div
var main = document.getElementById("pixelPainter");
//Creating PP-canvas
var canvas = document.createElement("div");
canvas.setAttribute("id", "pp-canvas");
// Creating Table
var table = document.createElement('table');
table.setAttribute("classname", "tables");
// Creating Controls
var controls = document.createElement("container");
controls.setAttribute("id", "controls");
var footer = document.createElement("footer");
footer.setAttribute("id", "footer");
document.body.appendChild(footer);
var footDiv = document.createElement("div");
footDiv.setAttribute("id", "footDiv");
footer.appendChild(footDiv);

// Appending all
main.appendChild(canvas);
canvas.appendChild(table);
main.appendChild(controls);



// Loaded color
var loadedColor = null;

// Color Array
var colorArray = [
"#51574a",    "#447c69",   "#74c493",
"#8e8c6d",    "#e4bf80",   "#e9d78e",
"#e2975d",    "#f19670",   "#e16552",
"#c94a53",    "#be5168",   "#a34974",
"#993767",    "#65387d",   "#4e2472",
"#9163b6",    "#e279a3",   "#e0598b",
"#7c9fb0",    "#5698c4",   "#9abf88"
];

        // Pixel Painter function //
function pixelPainter(width,height) {

        // Generating Graph and Swatch //

//Creating Rows and Pixels
  for( var i = 0; i <= height; i++ ){
    var tRow = document.createElement('tr');
    table.appendChild(tRow);

    for( var j = 0; j <= width; j++ ){
      var pixelTd =document.createElement('td');
      //var pixel = document.createElement("div");
      pixelTd.setAttribute("class", "pixelTd");
      //pixel.setAttribute("class","pixel");
      //pixel.addEventListener('mouseover', change);
      pixelTd.addEventListener("mouseover", change);
      tRow.appendChild(pixelTd);
      //pixelTd.appendChild(pixel);
    }
  }

// Creating Color Swatch
 // for( var m = 0; m <= 5; m++ ){
    var colorDiv = document.createElement("div");
    var colTab = document.createElement('table');
    colTab.setAttribute("class","colTab");
    colorDiv.setAttribute("class", "colors");
    controls.appendChild(colorDiv);
    colorDiv.appendChild(colTab);

  for( var l = 0; l < 21; l++ ){
      var colRow = document.createElement("tr");
      colRow.setAttribute("class", "colRow");
      colRow.style.backgroundColor = colorArray[l];
      colRow.addEventListener("click", choose);
      colRow.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
      colTab.appendChild(colRow);
    //}
  }
        // Creating Buttons //

// Button Div
  var btnDiv = document.createElement("div");
  btnDiv.setAttribute("id", "btnDiv");
  controls.appendChild(btnDiv);

// Pen Size Button
  //var penDiv = document.createElement("button//");
  //penDiv.setAttribute("id", "penDiv");
  //controls.appendChild(penDiv);
  //penDiv.innerHtml = '<p>i am pen</p>';

// Clear Button
  var clearBtn = document.createElement("button");
  clearBtn.setAttribute("id", "clear");
  clearBtn.addEventListener("click", clear);
  clearBtn.addEventListener("mouseover", function(){clearBtn.innerHTML = "You Sure?";});
  clearBtn.addEventListener("mouseout", function(){clearBtn.innerHTML = "Clear";});
  clearBtn.innerHTML = "Clear";
  btnDiv.appendChild(clearBtn);

// Erase Button
  var eraseBtn = document.createElement("button");
  eraseBtn.setAttribute("id", "erase");
  eraseBtn.addEventListener("mousedown",erase);
  eraseBtn.addEventListener("mouseover", function(){eraseBtn.innerHTML = "I'll Fix It";});
  eraseBtn.addEventListener("mouseout", function(){eraseBtn.innerHTML = "Erase";});
  eraseBtn.innerHTML = "Erase";
  btnDiv.appendChild(eraseBtn);


        // Functions //

// Change Pixels to LoadedColor
  function change(){
  this.style.backgroundColor = loadedColor;
  }

// Erase
  function erase(){
    loadedColor = "white";
  }

// Clear
  function clear(){
   var ted = document.getElementsByClassName('pixelTd');
    for( var i = 0; i < ted.length; i++ ){
    ted[i].style.background = "white";
    }
  }

// Set Loaded Color
  function choose(){
    loadedColor = this.style.backgroundColor;
  }
}

// Invoke pixelPainter
pixelPainter(120,240);


//To do:

//Responsiveness
//Change size of mouseover diameter for PenSize
//Make painting "mousedown" and mouseover
//App version









