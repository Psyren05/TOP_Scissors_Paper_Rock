/* Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!*/

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors']
    const randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice];
}

function playerChoice() {
  let input = prompt('Type Scissors, Paper or Rock')
  input = input.toLowerCase()
}
/* Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation). */

/* Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. */

function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = getComputerChoice();
  
  if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper') {
    return 'You Lose! Paper beats Rock' && compScore + 1
  } else if (playerSelection === 'Rock' || 'ROCK' && computerSelection === 'Scissors') {
    return 'You Win! Rock beats Scissors' && playerScore + 1   
  } else if (playerSelection === 'Rock' || 'ROCK' && computerSelection === 'Rock') {
    return 'Draw!'
} else if (playerSelection === 'Scissors' || 'SCISSORS' && computerSelection === 'Paper') {
  return 'You Win! Scissors beats Paper' && playerScore + 1
} else if (playerSelection === 'Scissors' || 'SCISSORS' && computerSelection === 'Rock') {
  return 'You Lose! Rock beats Scissors' && compScore + 1
}
}

function game() {
 playRound();
}

game()

