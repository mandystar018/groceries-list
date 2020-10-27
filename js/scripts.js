$(document).ready(function(){
  $("#groceries").submit(function(event) {
    event.preventDefault();

    const items = [$('#item1').val(), $('#item2').val(), $('#item3').val(), $('#item4').val(), $('#item5').val()];
    
    items.forEach(function(element) {
      
    });
  });
});