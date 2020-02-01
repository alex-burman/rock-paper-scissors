"use strict"

const finalRound = function() {
    return scorePlayer >= maxScore || scoreComputer >= maxScore;
}

const finishGame = function() {
    const winner = scorePlayer > scoreComputer ? 'You Win!' : 'You Lose!';

    buttonsMoveSelect.forEach((btn) => {
        btn.disabled = true
        btn.classList.remove("btn-fx");
    });
    endGameMessage.textContent = winner;
    endGameMessage.style.color = winner === 'You Win!' ? 'rgb(27, 142, 236)' : 'red';
    document.querySelector('#end-status').style.display = '';
    document.querySelector('#playing-status').style.display = 'none';
}

const playComputer = function() {
    const randomNum = Math.floor(Math.random() * 3);

    return (randomNum === 0) ? "rock" :
           (randomNum === 1) ? "paper" :
           "scissors";
}

let playRound = function(e) {
    const computerSelection = playComputer();
    const playerSelection = e.target.id;

    if (rules[playerSelection] == computerSelection) {
        scorePlayer++;
    } else if (rules[computerSelection] == playerSelection) {
        scoreComputer++;
    }

    gameRound++;

    updateGame(computerSelection, playerSelection);
    if(finalRound()) {
        finishGame();
    }
}

const startGame = function() {
    gameRound = 0;
    scoreComputer = 0;
    scorePlayer = 0;

    updateGame();
    buttonsMoveSelect.forEach((btn) => {
        btn.disabled = false;
        btn.classList.add("btn-fx");
    });
    document.querySelector('#end-status').style.display = 'none';
    document.querySelector('#playing-status').style.display = '';
    imageComputerSelection.style.display = 'none';
    imagePlayerSelection.style.display = 'none';
}

const updateGame = function(computerSelection = '', playerSelection = '') {
    displayScoreComputer.textContent = `${scoreComputer}`;
    displayScorePlayer.textContent = `${scorePlayer}`;
    document.querySelector('#rounds').textContent = `ROUND: ${gameRound}`

    if(gameRound > 0) {
        imageComputerSelection.style.display = '';
        imagePlayerSelection.style.display = '';
    }

    imageComputerSelection.src = computerSelection 
        ? `images/${computerSelection}.png`
        : computerSelection;
    imagePlayerSelection.src = playerSelection
        ? `images/${playerSelection}.png`
        : playerSelection;

}

const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
}

document.querySelector('#end-status').style.display = 'none';


const buttonRestart = document.querySelector('#restart');
const buttonsMoveSelect = document.querySelectorAll('.selection-button');
const displayScoreComputer = document.querySelector('#computer-score');
const displayScorePlayer = document.querySelector('#player-score');
const imageComputerSelection = document.querySelector('#computer-select');
const imagePlayerSelection = document.querySelector('#player-select');
const endGameMessage = document.querySelector('#status-message');

let gameRound = 0;
let scoreComputer = 0;
let scorePlayer = 0;
let maxScore = 5;

imageComputerSelection.style.display = 'none';
imagePlayerSelection.style.display = 'none';

buttonRestart.addEventListener(('click'), startGame);
buttonsMoveSelect.forEach((button) => button.addEventListener('click', playRound));

console.log('test');

const hideElement = function() {
    document.querySelector('#rock').hidden = true;
}