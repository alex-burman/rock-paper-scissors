"use strict"

function computerPlay() {

    const randomNum = Math.floor(Math.random() * 3);

    return (randomNum === 0) ? "Rock" :
           (randomNum === 1) ? "Paper" :
           "Scissors";
}

function fixWordCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function game() {

    let playerScore = 0;
    let computerScore = 0;
    let round = 0;

    while (round < 5) {
        let playerSelection = prompt();
        let computerSelection =  computerPlay();

        playerSelection = fixWordCase(playerSelection);

        if (!isValid(playerSelection)) {
            console.log(`"${playerSelection}" is not valid. Please enter a valid move`)
            continue;
        }

        let roundWinner = playRound(playerSelection, computerSelection);

        if (roundWinner === "player") {
            console.log(`You win this round! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
        } else if (roundWinner === "computer") {
            console.log(`You lose this round! ${computerSelection} beats ${playerSelection}`);
            computerScore++;
        } else {
            console.log(`This round is a tie! ${playerSelection} ties with ${computerSelection}`);
        }
        round++;
    }
    const gameWinner = getWinner(playerScore, computerScore);

    console.log(gameWinner);
}

function getWinner(playerScore, computerScore) {
    return ((playerScore > computerScore) 
        ? `You've won the game! You scored ${playerScore} points against the computers ${computerScore} points!` 
        : (playerScore < computerScore) 
            ? `You've lost the game! The computer scored ${computerScore} points against your ${playerScore} points!` 
            : `It's a tie! You and the computer both scored ${playerScore} points!`
    );
}

function isValid(string) {
    return rules.hasOwnProperty(string);
}

function playRound (playerSelection, computerSelection) {

    if (rules[playerSelection] === computerSelection) {
        return "player";
    } else if (rules[computerSelection] == playerSelection) {
        return "computer";
    } else {
        return "tie";
    }
}

const rules = {
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper"
}