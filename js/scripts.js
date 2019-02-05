//business logic
function Pizza(size, protein, topping) {
  this.size = size,
  this.protein = protein,
  this.topping = topping
  this.startPrice = 0,
  this.toppingPrice = 0,
  this.proteinPrice = 2
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

Pizza.prototype.outputPizzaInfo = function() {
  $(".result").text("Your total cost: " + "$" + this.startPrice);
}

//user Intergface Logic
$(document).ready(function() {
  $("#pizzaOrder").submit(function(event) {
    event.preventDefault();

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

    pizza.toppingsPrice();
    pizza.cost();
    pizza.outputPizzaInfo();

  });
});
