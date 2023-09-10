function playRound(playerSelection, computerSelection) {
    if 
        ((playerSelection === 'rock' && computerSelection === 'paper'),
        (playerSelection === 'paper' && computerSelection === 'scissors'),
        (playerSelection === 'scissors' && computerSelection === 'rock')) {
            return 'You lose'
    } else if
        ((playerSelection === 'rock' && computerSelection === 'scissors'),
        (playerSelection === 'paper' && computerSelection === 'rock'),
        (playerSelection === 'scissor' && computerSelection === 'paper')) {
            return 'You win!'
    } else if 
        (playerSelection === computerSelection) {
            return "Draw"
    } else {
        return 'Wrong input'
    }
}
    
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random () * 3);
    switch (randomNumber) {
        case 0:
        return 'rock';
        break;
        case 1:
        return 'paper';
        break;
        case 2:
        return 'scissors';
        break;
    }
}
console.log(getComputerChoice());



const selection = 'paper';
const playerSelection = selection.toLowerCase();
console.log(playerSelection);
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));