function getComputerChoice() {
  let choices = ['Scissors', 'Paper', 'Rock'];
  let randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Rock' && computerSelection === 'Scissors')
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}.`;
  } else if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function game() {
  let playerScore = 0;
  let compScore = 0;
  let resultsText = document.getElementById('results-text');
  let compScoreDisplay = document.getElementById('compScore');
  let playerScoreDisplay = document.getElementById('playerScore');
  let restartBtn = document.getElementById('restart-btn');
  restartBtn.hidden = true;

  compScoreDisplay.textContent = compScore;
  playerScoreDisplay.textContent = playerScore;

  let scissorsBtn = document.getElementById('scissors-btn');
  let paperBtn = document.getElementById('paper-btn');
  let rockBtn = document.getElementById('rock-btn');

  scissorsBtn.addEventListener('click', () => {
    if (playerScore < 5 && compScore < 5) {
      const computerSelection = getComputerChoice();
      const result = playRound('Scissors', computerSelection);
      updateResults('Scissors', computerSelection, result);
    }
  });

  paperBtn.addEventListener('click', () => {
    if (playerScore < 5 && compScore < 5) {
      const computerSelection = getComputerChoice();
      const result = playRound('Paper', computerSelection);
      updateResults('Paper', computerSelection, result);
    }
  });

  rockBtn.addEventListener('click', () => {
    if (playerScore < 5 && compScore < 5) {
      const computerSelection = getComputerChoice();
      const result = playRound('Rock', computerSelection);
      updateResults('Rock', computerSelection, result);
    }
  });

  function updateResults(playerSelection, computerSelection, result) {
    resultsText.textContent = result;

    if (result.includes('You Win')) {
      playerScore++;
    } else if (result.includes('You Lose')) {
      compScore++;
    }

    compScoreDisplay.textContent = compScore;
    playerScoreDisplay.textContent = playerScore;

    if (playerScore === 5 || compScore === 5) {
    let finalResult;
    if (playerScore > compScore) {
      finalResult = 'Congratulations! You Win!';
    } else {
      finalResult = 'You Lost!';
    }
    resultsText.textContent = finalResult;

      restartBtn.hidden = false;
      scissorsBtn.disabled = true;
      paperBtn.disabled = true;
      rockBtn.disabled = true;
    }
  }


function restartGame() {

  resultsText.textContent = 'Choose your fighter!'
  scissorsBtn.disabled = false;
  paperBtn.disabled = false;
  rockBtn.disabled = false;
  playerScore = 0;
  compScore = 0;
  playerScoreDisplay.textContent = playerScore;
  compScoreDisplay.textContent = compScore;
  restartBtn.hidden = true;
}

restartBtn.addEventListener('click', restartGame);
}

game();
