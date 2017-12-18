
$(document).ready(function(){

    // Your code here...

    //create var firstNum, Operator, secondNum, result

    // var targetNum = [];
    var gemOne = "button-1";
    var gemTwo ="button-2";
    var gemThree = "button-3";
    var gemFour = "button-4";
    var totalScore = 0;
    var isScore = true;
    
    document.getElementById("randomNumGenerator").innerHTML = Math.floor(Math.random() * 120) +19;
   
    // var targetNum = randomNum[Math.floor(Math.random() * randomNum.length)];

$("#button-1" ).on("click", function(){
    var crystalValue =($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue
});

$("#button-2" ).on("click", function(){
    var crystalValue =($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue
});

$("#button-3" ).on("click", function(){
    var crystalValue =($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue
});

$("#button-4" ).on("click", function(){
    var crystalValue =($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue
});
















  
   



   
// });

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
