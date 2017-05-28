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

var array = ["blue", "white", "pink","red"]




/* Pixel Painter function */
function pixelPainter(width,height) {

/* Generating Graph */
  for( var i = 0; i <= height; i++ ){
/* Creating Row */
   var tRow = document.createElement('tr');
   table.appendChild(tRow);


   for( var j = 0; j <= width; j++ ){
/* Creating Pixel */
   var pixelTd =document.createElement("td");
   var pixel = document.createElement("div");
   pixelTd.setAttribute("class", "pixelTd");
   pixel.setAttribute("class", "pixel");
   pixel.addEventListener("mouseover", change);
   tRow.appendChild(pixelTd);
   pixelTd.appendChild(pixel);
    }
   }
/* Color Swatch */
  for( var m = 0; m <= 5; m++ ){
    var colorDiv = document.createElement("div");
    var colTab = document.createElement('table');

    colorDiv.setAttribute("class", "colors");
    main.appendChild(colorDiv);
    colorDiv.appendChild(colTab);


      for( var l = 0; l <= 21; l++ ){
    var colRow = document.createElement("tr");
    colRow.id = "swatch" + l ;
    colTab.appendChild(colRow);
    colRow.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp";
     }

  }




/* Clear Button */
  var clearBtn = document.createElement("button");
   clearBtn.setAttribute("id", "clear");
   clearBtn.addEventListener("click", clear);
   clearBtn.innerHTML = "Clear";
   main.appendChild(clearBtn);

/* Erase Button */
  var eraseBtn = document.createElement("button");
    eraseBtn.setAttribute("id", "erase");
    /*eraseBtn.addEventListener("click");*/
    eraseBtn.innerHTML = "Erase";
    main.appendChild(eraseBtn);

/* Change */
  function change(){
     this.style.backgroundColor = "black";
  }

/* CLear */
  function clear(){
    pixel.style.backgroundColor = "white";
  }

  return{};

}

pixelPainter(100,100);







