
$(document).ready(function(){
   

    // document.getElementById("randomNumGenerator").innerHTML = Math.floor(Math.random() * 120) +19;
    var winText = document.getElementById("win-count");
    var lossText = document.getElementById("loss-count");
    // var targetNumber = document.getElementById("randomNumGenerator");
    var tarNum = Math.floor(Math.random() * 120) +19;
    var userGuess = document.getElementById("totalScore");
    document.getElementById("randomNumGenerator").innerHTML = tarNum;


    $("randomNumGenerator").text(tarNum);

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
    // document.getElementById("totalScore").innerHTML = totalCount;
    totalDisplay();
    checkIfGameOver();
    
});

$("#button-2").on("click", function(){
    totalCount += button2RandomNumber
    // document.getElementById("totalScore").innerHTML = totalCount;
    totalDisplay();
    checkIfGameOver();
    
});

$("#button-3").on("click", function(){
    totalCount += button3RandomNumber
    // document.getElementById("totalScore").innerHTML = totalCount;
    totalDisplay();
    checkIfGameOver();
    
});

$("#button-4").on("click", function(){
    totalCount += button4RandomNumber
    // document.getElementById("totalScore").innerHTML = totalCount;
    totalDisplay();
    checkIfGameOver();
   
});
console.log(totalCount);
console.log(tarNum);

function totalDisplay(){
    document.getElementById("totalScore").innerHTML = totalCount;

}


function gameReset(){
    // this works to change the random number but not the value
    // document.getElementById("randomNumGenerator").innerHTML = Math.floor(Math.random() * 120) +19;
  

    // the value doesn't change with this one nor does the number
    // document.getElementById("randomNumGenerator").innerHTML = tarNum; 

    // Kayle suggested this one
    // document.getElementById("randomNumGenerator").innerHTML; 
    tarNum = Math.floor(Math.random() * 120) + 19;

    // Kayle suggest this one to test it
    document.getElementById("randomNumGenerator").innerHTML = tarNum;
    totalCount=0;
    totalDisplay();
    


}





function checkIfGameOver(){
if (totalCount === tarNum) {
    winText.textContent++;
    console.log(totalCount);
    alert("You Win!")
    gameReset();
    // location.reload();

}

else if (totalCount > tarNum) {
    lossText.textContent++;
    console.log(totalCount);
    console.log(tarNum);
    alert("You lose!, Try again!")
    gameReset();
        // location.reload();
}


}
});
