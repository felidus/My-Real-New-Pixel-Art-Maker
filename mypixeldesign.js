// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(function() {
 $('#sizePicker').submit(function makeGrid(grid) {
   var rows = $('#input_height').val();
   var cols = $('#input_width').val();
    for (var i = 1; i <= rows; i++) {
     $('table').append("<tr></tr>");
     for (var j = 1; j <= cols; j++) {
       $('tr:last').append("<td></td>");
       $('td').attr("class", 'cells');
     }
   }
   grid.preventDefault();

   $('cells').click(function(event) {
     var paint = $('#colorpicker').val();
     $(event.target).css('background-color'.paint)
});
});
