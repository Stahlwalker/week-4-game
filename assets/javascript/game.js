
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
    var targetNumber = "randomNumGenerator";

    $("randomNumGenerator").text(targetNumber);

    var counter = "totalScore";
    var crystalValue = ("New Score: " + counter);
        if (counter === targetNumber) {
            winText.textContent++;

        }

        else if (counter < targetNumber) {
            lossText.textContent++;
        }
   
    // var targetNum = randomNum[Math.floor(Math.random() * randomNum.length)];

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



});

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
