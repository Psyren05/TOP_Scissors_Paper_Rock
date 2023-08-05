function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors']
  const randomChoice = Math.floor(Math.random() * choices.length)
  return choices[randomChoice];
}

function playerChoice() {
let input = prompt('Type Scissors, Paper or Rock'); 
while (input == null) {
  input = prompt('Type Scissors, Paper or Rock');
}
input = input.toLowerCase()
return input
}

let playerScore = 0;
let compScore = 0;

function playRound(playerSelection, computerSelection) {

if (playerSelection === 'Rock' && computerSelection === 'Paper') {
  compScore++
  return 'You Lose! Paper beats Rock' 
} else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
  playerScore++
  return 'You Win! Rock beats Scissors'  
} else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
  return 'Draw!'
} else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
playerScore++
return 'You Win! Scissors beats Paper' 
} else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
compScore++
return 'You Lose! Rock beats Scissors' 
}
}

function game() {
playRound();
}

game()

