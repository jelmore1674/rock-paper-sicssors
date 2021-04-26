/** @format */
let playerScore = 0;
let computerScore = 0;
const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#computer-score");
computer.textContent = `Computer Score: ${computerScore}`;

const output = document.querySelector("#output");
output.textContent = "May the Best Person Win!";

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
        console.log(playGame());
    });
});
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = `Player: ${playerScore}`;

container.appendChild(content);
// single round
function playRound() {
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === "Scissors") {
            return "You Win! Rock beats Scissors";
        } else {
            return "It's a tie";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            return "You Lose! Scissors beats Paper";
        } else if (computerSelection === "Rock") {
            return "You Win! Paper beats Rock";
        } else {
            return "It's a tie";
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection === "Paper") {
            return "You Win! Scissors beats Paper";
        } else {
            return "It's a tie";
        }
    }
}

function game() {
    if (roundResult.search("You Win!") > -1) {
        playerScore++;
    } else if (roundResult.search("You Lose!") > -1) {
        computerScore++;
    }
    console.log(
        `${roundResult} Player: ${playerScore} Computer: ${computerScore}`
    );
    if (playerScore < 5 && computerScore < 5); {
        if (playerScore >= 5 && computerScore < 5) {
            console.log("Game Over. You Win!");
            return "Game Over. You Win!";
        } else if (playerScore < 5 && computerScore >= 5) {
            console.log("Game Over. You Lose!");
            return "Game Over. You Lose!";
        } else if (playerScore < 5 && computerScore < 5) {
            return roundResult;
        }
    }
}

function playGame() {
    output.textContent = "Choose Rock, Paper, or Scissors";
    playRound();
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
    if (playerScore == 5) {
        output.textContent = "You Won the Game! Congrats";
        playerScore = 0;
        compScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    } else if (computerScore == 5) {
        output.textContent =
            "You Lost the game:/ Maybe find something else to do?";
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    }
}