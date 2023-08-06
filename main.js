function getComputerChoice () {
  let choices = ['Scissors', 'Paper', 'Rock']
  let randomChoice = Math.floor(Math.random() * choices.length)
  return choices[randomChoice]
}

function playRound(playerSelection, computerSelection) {
  if ((playerSelection === 'Scissors' && computerSelection === 'Paper') || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Rock' && computerSelection === 'Scissors')) {
      return `You Win! ${playerSelection} beats ${computerSelection}.`
  } else if (playerSelection === computerSelection) {
      return "It's a tie!"
  } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}.`
  }
}

function game() {
  let playerScore = 0;
  let compScore = 0;
  
  for (let round = 1; round <= 5; round++) {
  let playerInput = prompt('Please enter your selection: Scissors, Paper or Rock');
  let playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  
  console.log(`Round ${round}`);
  console.log(`You chose: ${playerSelection}`)
  console.log(`Computer chose: ${computerSelection}`)
  console.log(result);
  
  if (result === `You Win! ${playerSelection} beats ${computerSelection}.`) {
      playerScore++
  } else if (result === `You Lose! ${computerSelection} beats ${playerSelection}.`) {
      compScore++
  }
  }
  
  if (playerScore > compScore) {
      console.log('Congratulations! You Win!')
  } else if (compScore > playerScore) {
      console.log('You Lost!')
  } else {
      console.log("It's a tie!")
  }
  
  console.log(`Final Score: You: ${playerScore}, Computer: ${compScore}`)
}

game()































