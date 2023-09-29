
let playerScore = 0;
let compScore = 0;
let round = 0;
let roundWinner = '';


const playerScoreCont = document.getElementById("playerscore");
const compScoreCont = document.getElementById("compscore");
const roundNum = document.getElementById("roundnumber");

const resultCont = document.getElementById("resultCont");
const results = document.getElementById("results");
    
const playerChoiceCont = document.getElementById('player');
const playerChoice = document.createElement('div');
playerChoice.className = "playerchoice";
playerChoiceCont.appendChild(playerChoice);

const compChoiceCont = document.getElementById('comp');
const compChoice = document.createElement('div');
compChoice.className = "compchoice";
compChoiceCont.appendChild(compChoice);

const newGame = document.getElementById('newGame');


function getComputerChoice() {
    let choices = Math.floor(Math.random () * 3);
    switch (choices) {
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection === computerSelection) {
        round += 1;
        result = 'Draw';
    } else if  
        ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')) {
        compScore += 1;
        round += 1;
        roundWinner = 'Computer'
        result = "You lose! " + (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)) + " is beaten by " + computerSelection + ".";
    } else {
        playerScore += 1;
        round += 1;
        roundWinner = 'Player'
        result = "You win! " + (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)) + " beats " + computerSelection + ".";
    }
    playerChoice.textContent = "Player Choice: " + playerSelection;
    compChoice.textContent = "Computer Choice: " + computerSelection;
    results.textContent = result;  

    roundNum.textContent = "Round: " + round;
    playerScoreCont.textContent = "Player Score: " + playerScore;
    compScoreCont.textContent = "Computer Score: " + compScore;
    
    if (playerScore === 5 || compScore === 5) {
        const winner = () => {
        if (playerScore === 5) {
            return "You win this game!";
        }
        if (compScore === 5) {
            return "You lost this game :("
        }}

        results.textContent = `${winner()}`;

        const newGameBtn = document.createElement("button");
        newGameBtn.className = "newgame";
        newGameBtn.textContent = "Start a New Game";
        newGameBtn.addEventListener('click', () => {
            location.reload();
        }) 
        newGame.appendChild(newGameBtn);
        
    }
}

function playGame(playerSelection) {
    if (playerScore < 5 && compScore < 5) {
        const computerSelection = getComputerChoice();
        return playRound(playerSelection, computerSelection);
    }
    if (playerScore === 5 || compScore === 5) {
        return;
    }    
}
    


const rockBtn = document.getElementById('rock');
rockBtn.addEventListener('click', () => {
    playGame('rock');
});

const paperBtn = document.getElementById('paper');
paperBtn.addEventListener('click', () => {
    playGame('paper');
});

const scissorsBtn = document.getElementById('scissors');
scissorsBtn.addEventListener('click', () => {
    playGame('scissors');
});

