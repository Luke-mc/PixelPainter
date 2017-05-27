var para = document.createElement("div");
para.setAttribute("id", "pp-canvas");
var pixel = document.getElementById('pixelPainter');

pixel.appendChild(para);
 var btn = document.createElement("BUTTON");

    para.appendChild(btn);


  function pixelPainter(width) {

function column(height) {
  for( var i = 0; i <= height; i++ ){
   para.innerHTML +=
    '<button id="BUTTON' + i + '"></button>';
  }

}

function row(width){
  var column = column();
  for( var i = 0; i <= height; i++ ){
   para.innerHTML +=
        '<tr id = "row' + i + '">column<td>...</td></tr>';
}
}

return{
  column,
  row,
};

}

myPix = pixelPainter();

myPix.column(10)

myPix.row(5)