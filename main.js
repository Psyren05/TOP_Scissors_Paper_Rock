function getComputerChoice () {
  let choices = ['Scissors', 'Paper', 'Rock']
  let randomChoice = Math.floor(Math.random() * choices.length)
  return choices[randomChoice]
}

function playRound(playerSelection, computerSelection) {
  if ((playerSelection === 'scissors' && computerSelection === 'Paper') || (playerSelection === 'paper' && computerSelection === 'Rock') || (playerSelection === 'rock' && computerSelection === 'Scissors')) {
      return `"You Win! ${playerSelection} beats ${computerSelection}."`
  } else if (playerSelection === computerSelection.toLowerCase()) {
      return "It's a tie!"
  } else {
      return "You Lose!"
  }
}

const playerSelection = prompt('Please enter your selection: Scissors, Paper or Rock')
const computerSelection = getComputerChoice()
const result = playRound(playerSelection, computerSelection)

function game() {
  let playerScore = 0;
  let compScore = 0;
  
  if (result === "`You Win! ${playerSelection} beats ${computerSelection}.`") {
      playerScore++
  } else if (result === "You Lose!") {
      compScore++
  }
  
  if (playerScore > compScore) {
      console.log('Congratulations! You Win!')
  } else if (compScore > playerScore) {
      console.log('You Lost!')
  } else {
      console.log("It's a tie!")
  }
  
  console.log(`'Final Score: You: ${playerScore}, Computer: ${compScore}'`)
}

game()































