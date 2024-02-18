// Get the select element by its ID
var selectedItem = document.getElementById("d-o-w");
// Function to clear all color-related classes from an element
function clearColors(element) {
  element.classList.remove(
    "aqua",
    "brown",
    "green",
    "yellow",
    "blueviolet",
    "blue",
    "black"
  );
}
// Add a change event listener to the select element
selectedItem.addEventListener("change", function () {
  // Reference to the container element
  var container = document.getElementById("container");
  // Clear any previous background color classes
  clearColors(container);
  // Use a switch statement to add the class corresponding to the selected day
  switch (this.value) {
    case "mon":
      container.classList.add("aqua");
      break;
    case "tue":
      container.classList.add("brown");
      break;
    case "wed":
      container.classList.add("green");
      break;
    case "thu":
      container.classList.add("yellow");
      break;
    case "fri":
      container.classList.add("blueviolet");
      break;
    case "sat":
      container.classList.add("blue");
      break;
    case "sun":
      container.classList.add("black");
      break;
    default:
      // No class to add if the default option is selected
      break;
  }
});
// Function to determine the properties of the number entered by the user
function result() {
  // Parse the value from the number input as an integer
  var number = parseInt(document.getElementById("numberInput").value);
  var evenOrOdd = "odd";
  var primeOrNot = "prime";
  // Determine if the number is even
  if (number % 2 == 0) {
    evenOrOdd = "even";
  }
  // Determine if the number is prime or composite
  if (number < 2) {
    primeOrNot = "composite";
  } else {
    // Check for factors other than 1 and the number itself
    for (var i = 2; i < Math.sqrt(number); i++) {
      if (number % i == 0) {
        primeOrNot = "composite";
        break;
      }
    }
  }
  // Determine the range the number falls into
  var range = "";
  if (number <= 50) {
    range = "less than or equal to 50";
  } else if (number <= 75) {
    range = "greater than 50 and less than or equal to 75";
  } else if (number <= 100) {
    range = "greater than 75 and less than or equal to 100";
  } else {
    range = "greater than 100";
  }
  // Display the results in the 'result' element
  document.getElementById("result").innerHTML =
    "The number entered is an " +
    evenOrOdd +
    " " +
    primeOrNot +
    " number, " +
    range;
}
