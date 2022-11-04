var wins = 0
var loses = 0
var ties = 0

var userChoice = function() {
    window.alert(prompt('Enter R, P, or S'));
}

var gameStats = function() {
    window.alert("Wins: " + wins + "\nLosses: " + loses + "\nTies: " + ties)
}

userChoice();
gameStats();

