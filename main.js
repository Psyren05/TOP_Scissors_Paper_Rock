/* 3. Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!*/

function getComputerChoice() {
    let choices = ['Scissors', 'Paper', 'Rock']
    let randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice]
}

/* Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return 
a string that declares the winner of the round like so: "You Lose! Paper beats Rock". Make your function’s playerSelection parameter case-insensitive (so users can input 
rock, ROCK, RocK or any other variation). */

function playRound(playerSelection, computerSelection) {
  
    if (playerSelection === 'Rock' || 'ROCK' && computerSelection === 'Paper') {
      return 'You Lose! Paper beats Rock'
    }
  }
  
  console.log(playRound('rock', 'Paper'));
