/** @format */

let game = ["Rock", "Paper", "Scissors"];

function computerPlay(game) {
    return game[Math.floor(Math.random() * game.length)];
}

// console.log(computerPlay(game));
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

string = playerSelection;

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "Rock" || "Paper" || "Scissors") {
        if (computerSelection === playerSelection) {
            return "The Result is a Tie!";
        }
        if (computerSelection === "Rock") {
            if (playerSelection === "Paper") {
                return `You Win! ${playerSelection} beats ${computerSelection}!`;
            } else {
                return `You lose ${computerSelection} beats ${playerSelection}!`;
            }
        }
        if (computerSelection === "Paper") {
            if (playerSelection === "Scissors") {
                return `You win! ${playerSelection} beats ${computerSelection}`;
            } else {
                return `You lose ${computerSelection} beats ${playerSelection}!`;
            }
        }
        if (computerSelection === "Scissors") {
            if (playerSelection === "Rock") {
                return `You win! ${playerSelection} beats ${computerSelection}`;
            } else {
                return `You lose ${computerSelection} beats ${playerSelection}!`;
            }
        }
    }
}

function fullGame(playerSelect) {
    let playerSelection = capitalize(playerSelect);
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    playRound(playerSelection, computerSelection);
}
let playerScore = 0;
let computerScore = 0;

function winner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return "Good Job! You win the game!";
    }
    if (computerScore > playerScore) {
        return "Try again. You lost to the computer";
    }
    if (playerScore === computerScore) {
        return "Too bad, you didn't win or lose.";
    }
}
var playerSelection = "Rock";
var computerSelection = game;
fullGame();
console.log("Player:", playerScore, "Computer:", computerScore);
console.log(winner(playerScore, computerScore));