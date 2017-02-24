var lastValueEntered = "";

$(document).ready(function(){

  $(".square").click(function(event) {
    var clickedSquareName = event.target.id;
    var clickedSquare = $("#"+clickedSquareName);

    if (lastValueEntered == "X") {
      clickedSquare.html("O");
      clickedSquare.css("color", "#0000ff");
      lastValueEntered = "O";
    } else {
      clickedSquare.html("X");
      clickedSquare.css("color", "#ff0000");
      lastValueEntered = "X";
    }
  });

});
