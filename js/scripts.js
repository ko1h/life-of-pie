$(document).ready(function() {
  $("#pizzaOrder").submit(function(event) {
    event.preventDefault();

    var nameInput = $("#name").val();

    var pizzaSize = parseInt($("input:radio[name=pizzaSize]:checked").val());
    var pizzaProtein = [];
    var pizzaToppings = [];

    $("input:checkbox[name=protein]:checked").map(function(){
    pizzaProtein.push($(this).val());
  })
  $("input:checkbox[name=toppings]:checked").map(function(){
    pizzaToppings.push($(this).val());
  })

  var pizza = new Pizza(pizzaSize, pizzaProtein, pizzaToppings);

  });
});
