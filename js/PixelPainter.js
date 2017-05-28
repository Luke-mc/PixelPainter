var canvas = document.createElement("div");
canvas.setAttribute("id", "pp-canvas");
var pixel = document.getElementById('pixelPainter');
pixel.appendChild(canvas);
var table = document.createElement('table');
canvas.appendChild(table);
table.className = "tables";

function pixelPainter(width,height) {

  for( var i = 0; i <= width; i++ ){
    var tRow = document.createElement('tr');
    table.appendChild(tRow);

  for( var j = 0; j <= height; j++ ){
    tRow.innerHTML +=
    '<td><button classname="pixel" id="button'+ j + '"></button></td>';

    }

  }



  return{
    row

  };

}

pixelPainter(10,10);



