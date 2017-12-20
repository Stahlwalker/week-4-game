
$(document).ready(function(){

    // Your code here...

    //create var firstNum, Operator, secondNum, result

    // var targetNum = [];
    var gemOne = "button-1";
    var gemTwo ="button-2";
    var gemThree = "button-3";
    var gemFour = "button-4";
    // var totalScore = 0;
    var isScore = true;
    

    document.getElementById("randomNumGenerator").innerHTML = Math.floor(Math.random() * 120) +19;
    var winText = document.getElementById("win-count");
    var lossText = document.getElementById("loss-count");
    var targetNumber = document.getElementById("randomNumGenerator");
    var userGuess = document.getElementById("totalScore");


    $("randomNumGenerator").text(targetNumber);

function generateRandomNumber(){
    return Math.floor(Math.random() * 12) +1; 
    }
var totalCount = 0;
var button1RandomNumber = generateRandomNumber();
var button2RandomNumber = generateRandomNumber();
var button3RandomNumber = generateRandomNumber();
var button4RandomNumber = generateRandomNumber();

$("#button-1").on("click", function(){
    totalCount += button1RandomNumber
    document.getElementById("totalScore").innerHTML = totalCount;
    checkIfGameOver();
});

$("#button-2").on("click", function(){
    totalCount += button2RandomNumber
    document.getElementById("totalScore").innerHTML = totalCount;
    checkIfGameOver();
});

$("#button-3").on("click", function(){
    totalCount += button3RandomNumber
    document.getElementById("totalScore").innerHTML = totalCount;
    checkIfGameOver();
});

$("#button-4").on("click", function(){
    totalCount += button4RandomNumber
    document.getElementById("totalScore").innerHTML = totalCount;
    console.log(totalCount);
    checkIfGameOver();
});
console.log(totalCount);
console.log(targetNumber);

function checkIfGameOver(){
if (totalCount === targetNumber) {
    winText.textContent++;
    function gameReset(){
        document.getElementById("randomNumGenerator").innerHTML = Math.floor(Math.random() * 120) +19;
    }
    console.log(totalCount);
    alert("You Win!")

}

else if (totalCount > targetNumber) {
    lossText.textContent++;
    function gameReset(){
        document.getElementById("randomNumGenerator").innerHTML = Math.floor(Math.random() * 120) +19;
    }
    console.log(totalCount);
    console.log(targetNumber);
        alert("You lose!, Try again!")
}


}
});



/* Clear/Reset the text field */    
// function clearFields() {
//     //reset guess value
//     counter.value = "targetNumber";
//     //reset counter variable to 0
//     counter = 0;
//     //set randomNumber to be a new random number
//     randomNumber = Math.floor(Math.random() * 120) +19;
//     //added to put function out of call stack
//     return false;
//   }
