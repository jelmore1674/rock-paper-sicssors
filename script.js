/** @format */
let playerScore = 0;
let computerScore = 0;
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

function playRound(playerSelection) {
    let computerSelection = computerPlay(game);
    var playerSelection = capitalize(playerSelection);
    if (computerSelection === "Rock" || "Paper" || "Scissors") {
        if (computerSelection === playerSelection) {
            return "The Result is a Tie!";
        }
        if (computerSelection === "Rock") {
            if (playerSelection === "Paper") {
                return `You Win! ${playerSelection} beats ${computerSelection}!`;
            }
        }
        if (computerSelection === "Paper") {
            if (playerSelection === "Scissors") {
                return `You win! ${playerSelection} beats ${computerSelection}`;
            }
        }
        if (computerSelection === "Scissors") {
            if (playerSelection === "Rock") {
                return `You win! ${playerSelection} beats ${computerSelection}`;
            }
        }
        if (computerSelection === "Paper" && playerSelection === "Rock") {
            return (
                `You Lose! ${computerSelection} beats ${playerSelection}!`,
                computerScore++
            );
        }
        if (computerSelection === "Rock" && playerSelection === "Scissors") {
            return (
                `You Lose! ${computerSelection} beats ${playerSelection}!`,
                computerScore++
            );
        }
        if (computerSelection === "Scissors" && playerSelection === "Paper") {
            return (
                `You Lose! ${computerSelection} beats ${playerSelection}!`,
                computerScore++
            );
        }
    }
}

let playerSelection = "rock";
playRound(playerSelection);
console.log(playRound(playerSelection));

console.log("Player:", playerScore, "Computer:", computerScore);