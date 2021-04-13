/** @format */

let game = ["Rock", "Paper", "Scissors"];

function computerPlay(game) {
    return game[Math.floor(Math.random() * game.length)];
}

// console.log(computerPlay(game));

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "Rock" || "Paper" || "Scissors") {
        if (computerSelection === playerSelection) {
            return "The Result is a Tie!";
        }
        if (computerSelection === "Rock") {
            if (playerSelection === "Paper")
                return `You Win! ${playerSelection} Beats ${computerSelection}!`;
        } else {
            return `You lose ${computerSelection} beats ${playerSelection}!`;
        }
        if (computerSelection === "Paper") {
            if (playerSelection === "Scissors")
                return `You win! ${playerSelection} beats ${computerSelection}`;
        } else {
            return `You lose ${computerSelection} beats ${playerSelection}!`;
        }
        if (computerSelection === "Scissors") {
            if (playerSelection === "Rock")
                return `You win! ${playerSelection} beats ${computerSelection}`;
        } else {
            return `You lose ${computerSelection} beats ${playerSelection}!`;
        }
    }
}

let playerSelection = "Paper";
let computerSelection = computerPlay(game);
console.log(playRound(playerSelection, computerSelection));