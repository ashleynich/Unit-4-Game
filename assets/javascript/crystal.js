//generate random number for game

//make each crystal a button

//give each crystal a random value

//on click, value of crystal is determined and displayed in text field below

//on click, random number will generate

//if random number generated matches random number initially specified, user wins

//if random number generated doesn't match, user clicks again.

//if random number exceeds value of random number initially specified, user loses

//wins and losses are tracked and displayed

// IF/ELSE -- if current total is greater than random number, user loses//if current total is equal to randomnumber user wins

//reset random number, total score, and crystal values
    //


$(document).ready(function(){
    console.log('ready');

var randomNumber = Math.floor((Math.random() * 50) + 1);
var wins = 0;
var losses = 0;
var currentTotal = 0;



$("#randomNumber h2").text(randomNumber);

$("#currentTotal p").text(currentTotal);

$("#wins p").text(wins);

$("#losses p").text(losses);

$("#emerald").attr("data-number", randomNumberGenerate);

$("#amethyst").attr("data-number",randomNumberGenerate);

$("#diamond").attr("data-number", randomNumberGenerate);

$("#saphire").attr("data-number", randomNumberGenerate);

function randomNumberGenerate () {
    return Math.floor((Math.random() * 14) + 1);
}

function resetGame(){
    currentTotal = 0
    randomNumber = Math.floor((Math.random() * 50) + 1);
    $("#emerald").attr("data-number", randomNumberGenerate);
    $("#amethyst").attr("data-number",randomNumberGenerate);
    $("#diamond").attr("data-number", randomNumberGenerate);
    $("#saphire").attr("data-number", randomNumberGenerate);
    $("#randomNumber h2").text(randomNumber);
    $("#currentTotal p").text(currentTotal);
}
$(".crystal").on("click", function() {
    var crystalNumber = $(this).attr("data-number");
    currentTotal += Number(crystalNumber);
    $("#currentTotal p").text(currentTotal);
    if (currentTotal > randomNumber) {
        losses +=1
        $("#losses p").text(losses);
resetGame();
    }
    
    else if (currentTotal === randomNumber) {
        wins +=1
        $("#wins p").text(wins);
        resetGame();
    }

    

})






});

