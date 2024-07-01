/////////////////////////////////Question # 1////////////////////////////////////

// let city = prompt("Enter City: ");
// if(city == "karachi"){
//     console.log("Welcome to city of lights");
// }

/////////////////////////////////Question # 2////////////////////////////////////

// let gender = prompt("Enter Gender: ");
// if(gender == "male"){
//     console.log("Good morning sir");
// }
// else if(gender == "female"){
//     console.log("Good morning Ma'am");
// }

/////////////////////////////////Question # 3////////////////////////////////////

// let color = prompt("Enter color of road traffic signal: ");
// if(color == "Red"){
//     console.log("Must Stop");
// }
// else if(color == "Yellow"){
//     console.log("Ready to move");
// }
// else if(color == "Green"){
//     console.log("Move now");
// }

/////////////////////////////////Question # 4////////////////////////////////////

// let Remaining_fuel = prompt("Enter Remaining fuel in car: ");
// if(Remaining_fuel<0.25){
//     console.log("Please refill the fuel in your car");
// }


/////////////////////////////////Question # 5////////////////////////////////////
// // a
// var a = 4;
// if (++a === 5){
//   alert("given condition for variable a is true");
// }

// // b
// var b = 82;
// if (b++ === 83){
//   alert("given condition for variable b is true");
// }

// // c
// var c = 12;
// if (c++ === 13){
//   alert("condition 1 is true");
// }
// if (c === 13){
//   alert("condition 2 is true");
// }
// if (++c < 14){
//   alert("condition 3 is true");
// }
// if(c === 14){
//   alert("condition 4 is true");
// }

// // d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//   alert("The cost equals");
// }

// // e
// if (true){
//   alert("True");
// }
// if (false){
//   alert("False");
// }

// // f
// if("car" < "cat"){
//   alert("car is smaller than cat");
// }


/////////////////////////////////Question # 6////////////////////////////////

function calculateResult() {
    var subject1 = parseFloat(document.getElementById('subject1').value);
    var subject2 = parseFloat(document.getElementById('subject2').value);
    var subject3 = parseFloat(document.getElementById('subject3').value);
    var totalMarks = parseFloat(document.getElementById('totalMarks').value);

    var marksObtained = subject1 + subject2 + subject3;
    var percentage = (marksObtained / totalMarks) * 100;
    var grade = '';
    var remarks = '';

    if (percentage >= 80) {
        grade = 'A';
        remarks = 'Excellent';
    } else if (percentage >= 70) {
        grade = 'B';
        remarks = 'Good';
    } else if (percentage >= 60) {
        grade = 'C';
        remarks = 'Satisfactory';
    } else if (percentage >= 50) {
        grade = 'D';
        remarks = 'Needs Improvement';
    } else {
        grade = 'F';
        remarks = 'Fail';
    }

    var result = `
        Total Marks: ${totalMarks}<br>
        Marks Obtained: ${marksObtained}<br>
        Percentage: ${percentage.toFixed(2)}%<br>
        Grade: ${grade}<br>
        Remarks: ${remarks}
    `;

    document.getElementById('result').innerHTML = result;
}


/////////////////////////////Question # 7///////////////////////////

// // Generate a secret number between 1 and 10
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// // Prompt user to guess the number
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// // Check if the guess matches the secret number or is close enough
// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (userGuess === secretNumber - 1 || userGuess === secretNumber + 1) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Sorry, incorrect guess. The correct number was " + secretNumber);
// }

/////////////////////////////Question # 8////////////////////////////////

// // Prompt user to enter a number
// var number = parseInt(prompt("Enter a number to check if it's divisible by 3:"));

// // Check if the number is divisible by 3
// if (number % 3 === 0) {
//     alert(number + " is divisible by 3.");
// } else {
//     alert(number + " is not divisible by 3.");
// }

//////////////////////////////////Question # 9///////////////////////

// // Prompt user to enter a number
// var number = parseInt(prompt("Enter a number to check if it's even or odd:"));

// // Check if the number is even or odd
// if (number % 2 === 0) {
//     alert(number + " is an even number.");
// } else {
//     alert(number + " is an odd number.");
// }

//////////////////////////////////Question # 10///////////////////////

// // Prompt user to enter temperature
// var temperature = parseFloat(prompt("Enter the temperature in Celsius:"));

// // Check temperature conditions and display appropriate message
// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// } else {
//     alert("The weather is extremely cold.");
// }


//////////////////////////////////Question # 11///////////////////////


// Prompt user for input
// var firstNumber = parseFloat(prompt("Enter the first number:"));
// var secondNumber = parseFloat(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// var result;

// // Perform calculations based on the operation
// if (operation === "+") {
//     result = firstNumber + secondNumber;
//     alert("The result of " + firstNumber + " + " + secondNumber + " is: " + result);
// } else if (operation === "-") {
//     result = firstNumber - secondNumber;
//     alert("The result of " + firstNumber + " - " + secondNumber + " is: " + result);
// } else if (operation === "*") {
//     result = firstNumber * secondNumber;
//     alert("The result of " + firstNumber + " * " + secondNumber + " is: " + result);
// } else if (operation === "/") {
//     // Check if secondNumber is not zero to avoid division by zero error
//     if (secondNumber !== 0) {
//         result = firstNumber / secondNumber;
//         alert("The result of " + firstNumber + " / " + secondNumber + " is: " + result);
//     } else {
//         alert("Error: Division by zero!");
//     }
// } else if (operation === "%") {
//     // Check if secondNumber is not zero to avoid modulus by zero error
//     if (secondNumber !== 0) {
//         result = firstNumber % secondNumber;
//         alert("The remainder of " + firstNumber + " % " + secondNumber + " is: " + result);
//     } else {
//         alert("Error: Modulus by zero!");
//     }
// } else {
//     alert("Invalid operation entered. Please enter one of '+', '-', '*', '/', '%'.");
// }
