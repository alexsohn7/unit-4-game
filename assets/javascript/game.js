$(document).ready(function() {

// Chooses random number 19-121 and displays to page
var randomNumber = Math.floor(Math.random() * 121) +19;
$("#randomNumber").append(randomNumber);

//Display totalScore on page in score div
var totalScore = 0;
$("#score").append(totalScore);

// wins
var wins = 0;
$("#wins").html(wins);

//losses
var losses = 0;
$("#losses").html(losses);

//alert
var alert = "";

    // Choose a random number 1-12 for each button
var randomValueButton1 = Math.floor(Math.random() * 12) + 1;
var randomValueButton2 = Math.floor(Math.random() * 12) + 1;
var randomValueButton3 = Math.floor(Math.random() * 12) + 1;
var randomValueButton4 = Math.floor(Math.random() * 12) + 1;

// Create an array for each button 
var buttonsArray = [randomValueButton1, randomValueButton2, randomValueButton3, randomValueButton4];

// Array for relative path for each image
var srcArray = ["assets/images/Crystal1.jpg",
"assets/images/Crystal2.jpg",
"assets/images/Crystal3.jpg", 
"assets/images/Crystal4.png"];

// Loop through array to create buttons
for (var i = 0; i < buttonsArray.length; i++) {

// create image element to tag image later
    var crystal = $("<img>");

// create a class for each crystal 
    crystal.addClass("crystal-image");

// create src attribute for each crystal to link images later that links img source for each crystal 
    crystal.attr("src", srcArray[i]);

// create data attribute to give each crystal a value by referencing the values set in the buttonsArray
    crystal.attr("dataCrystalValue", buttonsArray[i]);

// append crystal variable to the crystal id in html to display to browser
    $("#crystals").append(crystal);
}

// on click extract value of crystal clicked from dataCrystalValue attribute by using "this" 
// the dataCrystyalValue will assign the value of the crystal clicked in a string and declare to crystalValue variable 
$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("dataCrystalValue"));

// make crystalValue an number value rather than a string by using parseInt method
crystalValue = parseInt(crystalValue);

totalScore += crystalValue;

// inserts variable value of totalScore to totalScore id and displays to page 
$("#score").html(totalScore);

if (totalScore === randomNumber) {
    // increase wins by 1
    wins++;
    $("#wins").html(wins);
    // message pops up on .winsLossesBox "You won!!"
    alert = "You won!!";
    $("#alert").html(alert);
;
} 
else if (totalScore > randomNumber ) {
    losses++;
    $("#losses").html(losses);
    alert = "You lost!!";
    $("#alert").html(alert);
}

})

});


