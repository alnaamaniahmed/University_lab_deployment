// Define a function named calculate to process numbers.
function calculate(){
    // Check if the input field with id "number" is valid 
    if (!document.getElementById("number").reportValidity()) {
        return; 
    }
    // Initialize counters for different types of numbers.
    let primeCounter = 0, compositeCounter = 0, neitherCounter = 0;
    // Retrieve the value from the input field, split it by commas, and convert each element to an integer.
    let numbersArr = document.getElementById("number").value.split(",").map(element => parseInt(element, 10));
    numbersArr.forEach(arr => {
        if(arr < 2){
            neitherCounter++;
        }
        else if(isPrime(arr)){
            primeCounter++;
        }
        else {
            compositeCounter++;
        }

    });
    document.getElementById("numOfArr").innerHTML = "[" + numbersArr + "]";
    document.getElementById("primeCount").innerHTML = "Prime Number: " + primeCounter;
    document.getElementById("compositeCount").innerHTML = "Composite Numbers: " + compositeCounter;
    document.getElementById("neitherCount").innerHTML = "Neither: " + neitherCounter;
}
// Define a function named isPrime to check if a number is prime.
function isPrime(number){
    for(let i = 2, sqrtNum = Math.sqrt(number); i <= sqrtNum; i++){
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}