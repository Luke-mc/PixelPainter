var main = document.getElementById("pixelPainter");
/* Creating PP-canvas*/
var canvas = document.createElement("div");
canvas.setAttribute("id", "pp-canvas");
/* Creating Table */
var table = document.createElement('table');
table.setAttribute("classname", "tables");
/* Appending */
main.appendChild(canvas);
canvas.appendChild(table);
var controls = document.createElement("div");
controls.setAttribute("id", "controls");

document.body.appendChild(controls);


var loadedColor = null;

var colorArray = [
"#51574a",    "#447c69",   "#74c493",
"#8e8c6d",    "#e4bf80",   "#e9d78e",
"#e2975d",    "#f19670",   "#e16552",
"#c94a53",    "#be5168",   "#a34974",
"#993767",    "#65387d",   "#4e2472",
"#9163b6",    "#e279a3",   "#e0598b",
"#7c9fb0",    "#5698c4",   "#9abf88"
];




/*"Pixel Painter function */
function pixelPainter(width,height) {

/* Generating Graph */
  for( var i = 0; i <= height; i++ ){
/* Creating Row */
   var tRow = document.createElement('tr');
   table.appendChild(tRow);


   for( var j = 0; j <= width; j++ ){
/* Creating Pixel */
   var pixelTd =document.createElement('td');
   //var pixel = document.createElement("div");
   pixelTd.setAttribute("class", "pixelTd");
   //pixel.setAttribute("class","pixel");
   //pixel.addEventListener('mouseover', change);
   pixelTd.addEventListener('mouseover', change);
   tRow.appendChild(pixelTd);
   //pixelTd.appendChild(pixel);
    }
   }

/* Color Swatch */
  for( var m = 0; m <= 5; m++ ){
    var colorDiv = document.createElement("div");
    var colTab = document.createElement('table');
    colorDiv.setAttribute("class", "colors");
    controls.appendChild(colorDiv);
    colorDiv.appendChild(colTab);


      for( var l = 0; l < 21; l++ ){
    var colRow = document.createElement("tr");
    colRow.id = "swatch" + l ;
    colRow.style.backgroundColor = colorArray[l];
    colRow.addEventListener("click", choose);
    colRow.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
    colTab.appendChild(colRow);
   }

  }

  var btnDiv = document.createElement("div");
    btnDiv.setAttribute("id", "btnDiv");
    controls.appendChild(btnDiv);

 //var penDiv = document.createElement("button//");
 //   penDiv.setAttribute("id", "penDiv");
 //   controls.appendChild(penDiv);
 //   penDiv.innerHtml = '<p>i am pen</p>';


/* Clear Button */
  var clearBtn = document.createElement("button");
   clearBtn.setAttribute("id", "clear");
   clearBtn.addEventListener("mousedown", clear);
   clearBtn.innerHTML = "Clear";
   btnDiv.appendChild(clearBtn);

/* Erase Button */
  var eraseBtn = document.createElement("button");
    eraseBtn.setAttribute("id", "erase");
    eraseBtn.addEventListener("click",erase);
    eraseBtn.innerHTML = "Erase";
    btnDiv.appendChild(eraseBtn);


function change(){
  this.style.backgroundColor = loadedColor;
}

function erase(){
  loadedColor = "white";
}

function clear(){
  document.getElementsByClassName("pixel").style.backgroundColor = "white";
}


function choose(){
  loadedColor = this.style.backgroundColor;
}



}

pixelPainter(70,120);







