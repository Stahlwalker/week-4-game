
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

$("#button-1").on("click", function(){
    document.getElementById("totalScore").innerHTML = Math.floor(Math.random() * 12) +1;
});

$("#button-2").on("click", function(){
    document.getElementById("totalScore").innerHTML = Math.floor(Math.random() * 12) +1;
});

$("#button-3").on("click", function(){
    document.getElementById("totalScore").innerHTML = Math.floor(Math.random() * 12) +1;
});

$("#button-4").on("click", function(){
    document.getElementById("totalScore").innerHTML = Math.floor(Math.random() * 12) +1;
});

// document.getElementById("totalScore").innerHTML = crystalValue;
var counter = 0;
// var crystalValue = ("New Score: " + counter);

var crystalValue = ($(this).attr("totalScore"));
crystalValue = parseInt(crystalValue);

counter += crystalValue;

if (counter === targetNumber) {
        winText.textContent++;
        function gameReset(){
            document.getElementById("randomNumGenerator").innerHTML = Math.floor(Math.random() * 120) +19;
        }
        alert("You Win!")

    }

    else if (counter < targetNumber) {
        lossText.textContent++;
        function gameReset(){
            document.getElementById("randomNumGenerator").innerHTML = Math.floor(Math.random() * 120) +19;
        }
            alert("You lose!, Try again!")
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


// var totalScore = function (score) {
//     if (score < targetNum) {
//         return "Winner";
//     }
//     return "Loser";
// };

// function totalScore(score) {
//     if (score < targetNum) {
//         return "Winner";
//     }
//     return "Loser";
// };
