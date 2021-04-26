/** @format */
let playerScore = 0;
let computerScore = 0;
const player = document.querySelector("#player-score");
player.textContent = `${playerScore}`;

const computer = document.querySelector("#computer-score");
computer.textContent = `${computerScore}`;

const output = document.querySelector("#output");
output.textContent = "Think you can beat the Matrix?";

// Logic for computer selection
let choice = ["Rock", "Paper", "Scissors"];

// Computer Selection Function
function computerPlay(choice) {
    return choice[Math.floor(Math.random() * choice.length)];
}
// Makes user input case insensitive;
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        playerChoice = button.id;
        playerSelection = playerChoice;
        computerSelection = computerPlay(choice);
        playGame();
    });
});
// single round
function playRound() {
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            computerScore++;
            output.textContent = "You Lose! Paper beats Rock";
        } else if (computerSelection === "Scissors") {
            playerScore++;
            output.textContent = "You Win! Rock beats Scissors";
        } else {
            output.textContent = "It's a tie";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            computerScore++;
            output.textContent = "You Lose! Scissors beats Paper";
        } else if (computerSelection === "Rock") {
            playerScore++;
            output.textContent = "You Win! Paper beats Rock";
        } else {
            output.textContent = "It's a tie";
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            computerScore++;
            output.textContent = "You Lose! Rock beats Scissors";
        } else if (computerSelection === "Paper") {
            playerScore++;
            output.textContent = "You Win! Scissors beats Paper";
        } else {
            output.textContent = "It's a tie";
        }
    }
}

function playGame() {
    output.textContent = "Choose Rock, Paper, or Scissors";
    playRound();
    player.textContent = `${playerScore}`;
    computer.textContent = `${computerScore}`;
    if (playerScore == 5) {
        output.textContent = "You survived the matrix";
        playerScore = 0;
        compScore = 0;
        player.textContent = `${playerScore}`;
        computer.textContent = `${computerScore}`;
    } else if (computerScore == 5) {
        output.textContent = "GAME OVER! You are stuck in the matrix";
        playerScore = 0;
        computerScore = 0;
        player.textContent = `${playerScore}`;
        computer.textContent = `${computerScore}`;
    }
}