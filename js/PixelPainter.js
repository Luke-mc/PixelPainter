var canvas = document.createElement("div");
canvas.setAttribute("id", "pp-canvas");
var main = document.getElementById('pixelPainter');
main.appendChild(canvas);
var table = document.createElement('table');
canvas.appendChild(table);
table.className = "tables";





function pixelPainter(width,height) {

  for( var i = 0; i <= width; i++ ){
    var tRow = document.createElement('tr');
    table.appendChild(tRow);

  for( var j = 0; j <= height; j++ ){

    var pixelTd =document.createElement("td");
    var pixel = document.createElement("div");
    pixel.setAttribute("class", "pixel");
    pixel.addEventListener("click", change);
    tRow.appendChild(pixelTd);
    pixelTd.appendChild(pixel);

    }

   }

   var clearBtn = document.createElement("button");
    clearBtn.setAttribute("id", "clear");
    clearBtn.addEventListener("click", clear);
    clearBtn.innerHTML = "Clear";
    main.appendChild(clearBtn)


function change(){
  var pix = this;
  if (pix.style.backgroundColor === "white"){
       pix.style.backgroundColor = "black";
  }else{
   pix.style.backgroundColor = "white";
     }

  }


function clear(){


    pixel.style.backgroundColor = "white";

}

  return{};

}

pixelPainter(5,5);







