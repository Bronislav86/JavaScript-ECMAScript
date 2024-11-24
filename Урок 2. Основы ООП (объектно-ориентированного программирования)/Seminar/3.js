const Calculator = {
  add: function(a, b) {
    console.log(a + b);
  },
  substract: function(a, b) {
    console.log( a - b);
  }, 
  multiply: function(a, b) {
    console.log(a * b);
  }
}

Calculator.add.call(null, 5, 3);
Calculator.multiply.apply(null, [5, 3]);
Calculator.substract.apply(null, [5, 3]);