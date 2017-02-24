var lastValueEntered = "";

$(document).ready(function(){

  $(".square").click(function(event) {
    var clickedSquareName = event.target.id;
    var clickedSquare = $("#"+clickedSquareName);

    if (lastValueEntered == "X") {
      clickedSquare.html("O");
      lastValueEntered = "O";
    } else {
      clickedSquare.html("X");
      lastValueEntered = "X";
    }
  });

});
