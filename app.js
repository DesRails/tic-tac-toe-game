$(document).ready(function(){
  $('.square').click(function(event) {
    var clickedSquare = event.target.id;
    alert("hi you clicked on "+clickedSquare);
  });
});
