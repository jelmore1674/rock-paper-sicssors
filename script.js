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

function playRound(playerSelection) {
    var computerSelection = computerPlay(game);
    var playerSelection = capitalize(playerSelection);
    if (computerSelection === playerSelection) return "The Result is a Tie!";

    if (computerSelection === "Scissors" && playerSelection === "Paper")
        return "You lose! Scissors beats Paper";
    if (computerSelection === "Scissors" && playerSelection === "Rock")
        return "You Win! Rock beats Scissors";
    if (computerSelection === "Paper" && playerSelection === "Rock")
        return "You lose! Paper beats Rock";
    if (computerSelection === "Paper" && playerSelection === "Scissors")
        return "You Win! Scissors beats Paper";
    if (computerSelection === "Rock" && playerSelection === "Scissors")
        return "You lose! Rock beats Scissors";
    if (computerSelection === "Rock" && playerSelection === "Paper")
        return "You Win! Paper beats Rock";
}

function fullGame() {
    var win = "win";
    var loss = "lose";
    var tie = "tie";

    playRound(playerSelection);
    r1 = playRound(playerSelection);
    if (r1.includes(win)) {
        playerScore++;
        return r1;
    } else if (r1.includes(loss)) {
        computerScore++;
        return r1;
    } else if (r1.includes(tie)) {
        return r1;
    }

    playRound(playerSelection);
    playRound(playerSelection);
    playRound(playerSelection);
    playRound(playerSelection);
}

let playerScore = 0;
let computerScore = 0;
let playerSelection = "paper";
fullGame();
console.log(fullGame());
console.log(playerSelection);
console.log("Player:", playerScore, "Computer:", computerScore);