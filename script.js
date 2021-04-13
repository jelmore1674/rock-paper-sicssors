/** @format */

let game = ["Rock", "Paper", "Scissors"];

function computerPlay(game) {
    return game[Math.floor(Math.random() * game.length)];
}

// console.log(computerPlay(game));
function capitalize(playerSelection) {
    return (
        playerSelection.charAt(0).toUpperCase() +
        playerSelection.slice(1).toLowerCase()
    );
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "Rock" || "Paper" || "Scissors") {
        if (computerSelection === playerSelection) {
            return "The Result is a Tie!";
        }
        if (computerSelection === "Rock") {
            if (playerSelection === "Paper") {
                playerScore++;
                return `You Win! ${playerSelection} beats ${computerSelection}!`;
            } else {
                computerScore++;
                return `You lose ${computerSelection} beats ${playerSelection}!`;
            }
        }
        if (computerSelection === "Paper") {
            if (playerSelection === "Scissors") {
                playerScore++;
                return `You win! ${playerSelection} beats ${computerSelection}`;
            } else {
                computerScore++;
                return `You lose ${computerSelection} beats ${playerSelection}!`;
            }
        }
        if (computerSelection === "Scissors") {
            if (playerSelection === "Rock") {
                playerScore++;
                return `You win! ${playerSelection} beats ${computerSelection}`;
            } else {
                computerScore++;
                return `You lose ${computerSelection} beats ${playerSelection}!`;
            }
        }
    }
}

var playerSelection = capitalize(prompt("Select rock, paper, or scissors:"));
var computerSelection = computerPlay(game);
let playerScore = 0;
let computerScore = 0;
playRound(playerSelection, computerSelection);
alert(playRound());
var playerSelection = capitalize(prompt("Select rock, paper, or scissors:"));
var computerSelection = computerPlay(game);
playRound(playerSelection, computerSelection);
alert(playRound());
var playerSelection = capitalize(prompt("Select rock, paper, or scissors:"));
var computerSelection = computerPlay(game);
playRound(playerSelection, computerSelection);
alert(playRound());
var playerSelection = capitalize(prompt("Select rock, paper, or scissors:"));
var computerSelection = computerPlay(game);
playRound(playerSelection, computerSelection);
alert(playRound());
var playerSelection = capitalize(prompt("Select rock, paper, or scissors:"));
var computerSelection = computerPlay(game);
playRound(playerSelection, computerSelection);
alert(playRound());
console.log("Player:", playerScore, "Computer:", computerScore);