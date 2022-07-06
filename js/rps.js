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

  const bodyContainer = document.querySelector("#body-container");
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
      const defaultMsg = document.createElement("p");
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

  const resultsContainer = document.querySelector("#results");
  let gameNum = document.createElement("p");
  gameNum.classList.add("gameNum");

  let playerScoreMsg = document.createElement("p");
  playerScoreMsg.classList.add("playerScoreMsg");

  let computerScoreMsg = document.createElement("p");
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
  gameNum.textContent = "Game " + gameCount;
  gameCount++;

  playerScoreMsg.textContent = "Player Score: " + playerScore;
  computerScoreMsg.textContent = "Computer Score: " + computerScore;

  resultsContainer.appendChild(gameNum);
  resultsContainer.appendChild(playerScoreMsg);
  resultsContainer.appendChild(computerScoreMsg);

  const message =
    playerScore > computerScore ? "Player Wins!" : "Computer Wins!";
  const finalGameMsg = document.createElement("h2");
  finalGameMsg.classList.add("finalGameMsg");
  finalGameMsg.textContent = message;

  resultsContainer.appendChild(finalGameMsg);
}

game();
