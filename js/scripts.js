//business logic
function Pizza(size, protein, topping) {
  this.size = size,
  this.protein = protein,
  this.topping = topping,
}

function add(size, protein, topping) {
  return size + protein + topping;
}

Pizza.prototype.toppingsPrice = function() {
  this.toppingPrice += this.topping.length;
  this.proteinPrice += this.protein.length;
}

Pizza.prototype.cost = function() {
  this.startPrice += add(this.size, this.proteinPrice, this.toppingPrice);
}

//user Intergface Logic
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
