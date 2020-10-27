$(document).ready(function(){
  $("#groceries").submit(function(event) {
    event.preventDefault();
    const items = [$('#item1').val(), $('#item2').val(), $('#item3').val(), $('#item4').val(), $('#item5').val()];
    items.sort();
    items.forEach(function(element) {
      $('#list').append(`<li>${element}</li>`);
      $('#h2').text('List of items:');
      $('#groceries').hide();
    });
  });
});