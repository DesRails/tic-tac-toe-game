$(document).ready(function(){
  $(".square").click(function(event) {
    var clickedSquare = event.target.id;
    $("#"+clickedSquare).html("X");
  });
});
