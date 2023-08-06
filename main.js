function getComputerChoice () {
  let choices = ['Scissors', 'Paper', 'Rock']
  let randomChoice = Math.floor(Math.random() * choices.length)
  return choices[randomChoice]
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'Paper') {
      return "You Lose! Paper beats Rock"
  } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
      return "You Win! Scissors beats Paper"
  } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
      return "You Lose! Scissors beats Rock"
  } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
      return "You Win! Paper beats Rock"
  } else if (playerSelection === computerSelection.toLowerCase()) {
      return "Draw!"
  } else {
      return "You Lose!"
  }
}

function game() {
  let playerScore = 0;
  let compScore = 0;
  
for (let round = 1; round >= 5; round++) {
  const playerSelection = prompt(`Round  ${round}.'Please enter your selection: Scissors, Paper or Rock'`);
}
}

console.log(prompt)



























