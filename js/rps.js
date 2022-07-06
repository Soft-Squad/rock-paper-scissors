// Document Elements
const bodyContainer = document.querySelector("#body-container");
const resultsContainer = document.querySelector("#results");
const playerScoreMsg = document.createElement("p");
const computerScoreMsg = document.createElement("p");
const gameNum = document.createElement("p");
const defaultMsg = document.createElement("p");
const finalGameMsg = document.createElement("h2");

// Randomly returns either 'Rock', 'Paper, or 'Scissors'
function computerPlay() {
  let compPlayArr = ["Rock", "Paper", "Scissors"];
  let play = Math.floor(Math.random() * compPlayArr.length);
  let result = compPlayArr[play];
  // console.log(result);
  return result;
}

// Plays a single round of Rock Paper Scissors
// and returns a string declaring the winner
/* Takes two parameters:
    playerSelection
    computerSelection
*/
function playRound(playerSelection, computerSelection) {
  let playerSelected = playerSelection.toLowerCase();
  let message, result;

  let gameResultMsg = document.createElement("p");
  gameResultMsg.classList.add("gameResultMsg");

  switch (playerSelected) {
    case "rock-button":
      message =
        computerSelection === "Rock"
          ? "Tie!"
          : computerSelection === "Paper"
          ? "You Lose! Paper beats Rock"
          : "You Win! Rock beats Scissors";
      gameResultMsg.textContent = message;

      if (message != "Tie!") {
        result = message.substring(0, 8);
      } else {
        result = message;
      }
      break;

    case "paper-button":
      message =
        computerSelection === "Rock"
          ? "You Win! Paper beats Rock"
          : computerSelection === "Paper"
          ? "Tie!"
          : "You Lose! Paper beats Rock";
      gameResultMsg.textContent = message;

      if (message != "Tie!") {
        result = message.substring(0, 8);
      } else {
        result = message;
      }
      break;

    case "scissors-button":
      message =
        computerSelection === "Rock"
          ? "You Lose! Rock beats Scissors"
          : computerSelection === "Paper"
          ? "You Win! Scissors beats Paper"
          : "Tie!";
      gameResultMsg.textContent = message;

      if (message != "Tie!") {
        result = message.substring(0, 8);
      } else {
        result = message;
      }
      break;

    default:
      // console.log("Unknown selection");
      defaultMsg.classList.add("defaultMsg");
      defaultMsg.textContent = "Unknown Selection";
      bodyContainer.appendChild(defaultMsg);
  }
  bodyContainer.appendChild(gameResultMsg);
  return result;
}

// Plays 5 rounds, keeping score and reports the results
// Calls playround() function inside
function game() {
  let resultMap = new Map();
  let playerScore = 0,
    computerScore = 0,
    gameCount = 1;

  gameNum.classList.add("gameNum");
  playerScoreMsg.classList.add("playerScoreMsg");
  computerScoreMsg.classList.add("computerScoreMsg");

  let computerSelection = computerPlay();
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // console.log(button.id);
      let playerSelection = button.id;
      resultMap.set(gameCount, playRound(playerSelection, computerSelection));
    });
  });

  if (resultMap.get(gameCount) == "You Win!") {
    playerScore += 1;
  } else if (resultMap.get(gameCount) == "You Lose") {
    computerScore += 1;
  } else {
    // Tie
    playerScore += 0;
    computerScore += 0;
  }
  gameNum.textContent = `Game ${gameCount}`;
  gameCount++;

  playerScoreMsg.textContent = `Player Score: ${playerScore}`;
  computerScoreMsg.textContent = `Computer Score: ${computerScore}`;

  resultsContainer.appendChild(gameNum);
  resultsContainer.appendChild(playerScoreMsg);
  resultsContainer.appendChild(computerScoreMsg);

  const message =
    playerScore > computerScore ? "Player Wins!" : "Computer Wins!";
  finalGameMsg.classList.add("finalGameMsg");
  finalGameMsg.textContent = message;

  resultsContainer.appendChild(finalGameMsg);
}

function gameOver() {}

game();
