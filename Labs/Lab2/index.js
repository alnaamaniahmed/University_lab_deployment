//Calculates the area of a circle with a fixed radius = 6
function circleArea() {
  //const has block scope, it is only accessible within the block it is defined
  const PI = Math.PI;
  const radius = 6;
  var sum = PI * Math.pow(radius, 2);
  return sum;
}
console.log("Circle Area for radius 6");
console.log(circleArea());
//Performs arithmetic operations based on the operator parameter
function calculator(x, y, operator) {
  switch (operator) {
    case "add":
      return x + y;
    case "multiply":
      return x * y;
    case "divide":
      if (y == 0) {
        return "Cannot divide by zero";
      } else {
        return x / y;
      }
    case "subtract":
      return x - y;
    default:
      return "Not a valid operation";
  }
}
console.log("Addition");
console.log(calculator(1,2,'add'));
console.log("Multiplication");
console.log(calculator(4,2,'multiply'));
console.log("Subtraction");
console.log(calculator(3,2,'subtract'));
console.log("Division");
console.log(calculator(2,2,'divide'));
//Calculates the rectangle area for fixed length and width
function rectangleArea() {
  //const has block scope, it is only accessible within the block it is defined
  const length = 20;
  const width = 15;
  var area = length * width;
  return area;
}
console.log("Rectangle area for length 20 and width 15");
console.log(rectangleArea());
//LET and CONST were added to JavaScript ES6 in 2015. They provide block-level scoping and they cannot be redeclared
