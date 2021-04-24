/** @format */
let playerScore = 0;
let computerScore = 0;

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

// single round
function playRound(playerSelection, computerSelection) {
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

// full game to 5
function game() {
    do {
        let playerChoice = prompt("Select rock, paper, scissors");
        let playerSelection = capitalize(playerChoice);
        let computerSelection = computerPlay(choice);
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult.search("You Win!") > -1) {
            playerScore++;
        } else if (roundResult.search("You Lose!") > -1) {
            computerScore++;
        }
        alert(
            `${roundResult} Player: ${playerScore} Computer: ${computerScore}`
        );
    } while (playerScore < 5 && computerScore < 5);

    if (playerScore >= 5 && computerScore < 5) {
        alert("Game Over. You Win!");
        return "Game Over. You Win!";
    } else if (playerScore < 5 && computerScore >= 5) {
        alert("Game Over. You Lose!");
        return "Game Over. You Lose!";
    } else if (playerScore < 5 && computerScore < 5) {
        return roundResult;
    }
}

game();