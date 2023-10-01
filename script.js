
let playerScore = 0;
let compScore = 0;
let round = 0;

// Defining containers for round number and choices //
const roundNum = document.getElementById("roundnum");

const playerChoiceCont = document.getElementById('player');
const playerChoice = document.createElement('div');
playerChoice.className = "playerchoice";
playerChoiceCont.appendChild(playerChoice);

const compChoiceCont = document.getElementById('comp');
const compChoice = document.createElement('div');
compChoice.className = "compchoice";
compChoiceCont.appendChild(compChoice);

// Defining container for result message //
const resultCont = document.getElementById("resultcont");
const results = document.createElement('div');
results.className = "results";
resultCont.appendChild(results);

// Defining container for scores //
const playerScoreCont = document.getElementById("playerscore");
const compScoreCont = document.getElementById("compscore");

// Defining container for new game button //
const newGame = document.getElementById('newgame');

// function loop to get random computer choice //
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

// function for each round of the game //
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
        result = "You lose! " + (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)) + " is beaten by " + computerSelection + ".";
    } else {
        playerScore += 1;
        round += 1;
        result = "You win! " + (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)) + " beats " + computerSelection + ".";
    }
    roundNum.textContent = "ROUND: " + round;
    playerChoice.textContent = playerSelection;
    compChoice.textContent = computerSelection;
    results.textContent = result;
    results.style.border = '2px solid white';   // borders appear together with the result prompt //
    results.style.padding = '20px';  

    playerScoreCont.textContent = playerScore;
    compScoreCont.textContent = compScore;
    
    // when either the player or the computer reaches 5 points //
    if (playerScore === 5 || compScore === 5) {
        const winner = () => {
        if (playerScore === 5) {
            return "You win this game! :)";
        }
        if (compScore === 5) {
            return "You lose this game :("
        }}

        results.textContent = `${winner()}`;

        if (playerScore === 5) {
            results.style.color = 'yellow';
        } else {
            results.style.color = 'red';
        } // winner or loser prompt will appear in different font colors //

        const newGameBtn = document.createElement("button");
        newGameBtn.className = "newgamebtn";
        newGameBtn.textContent = "Start a New Game";
        newGameBtn.addEventListener('click', () => {
            location.reload();  // refreshes the game field //
        }) 
        newGame.appendChild(newGameBtn);    // the newgame button will appear //
        
    }
}

// function for when player clicks the button //
function playGame(playerSelection) {
    if (playerScore < 5 && compScore < 5) {
        const computerSelection = getComputerChoice();
        return playRound(playerSelection, computerSelection);   
    }
    if (playerScore === 5 || compScore === 5) {
        return; // game stops when one of the players reaches 5 points //
    }    
}

// adding function to the buttons //
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playGame(button.id);
    });
});