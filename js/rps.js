// Globals
let playerScore = 0;
let computerScore = 0;
let gameCount = 0;
let roundWinner = "";

// Document Elements
const bodyContainer = document.querySelector("#body-container");
const resultsContainer = document.querySelector("#results");
const scoreMsg = document.createElement("p");
const gameNum = document.createElement("p");
const playerScoreTally = document.createElement("p");
const computerScoreTally = document.createElement("p");
const finalGameMsg = document.createElement("h2");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log(button.id);
    let playerSelection = button.id;
    game(playerSelection);
  });
});

// Game Functions
// Randomly returns either 'Rock', 'Paper, or 'Scissors'
function computerPlay() {
  let compPlayArr = ["ROCK", "PAPER", "SCISSORS"];
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
  if (playerSelection === computerSelection) {
    roundWinner = "tie";
  }
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    playerScore++;
    roundWinner = "player";
  }
  if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK")
  ) {
    computerScore++;
    roundWinner = "computer";
  }
  postScore(roundWinner, playerSelection, computerSelection);
}

function postScore(winner, playerSelection, computerSelection) {
  scoreMsg.classList.add("scoreMsg");

  if (winner === "player") {
    scoreMsg.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} beats ${computerSelection.toLowerCase()}`;
    return;
  }
  if (winner === "computer") {
    scoreMsg.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} is beaten by ${computerSelection.toLowerCase()}`;
    return;
  }

  scoreMsg.textContent = `${capitalizeFirstLetter(
    playerSelection
  )} ties with ${computerSelection.toLowerCase()}`;

  resultsContainer.appendChild(scoreMsg);
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

// Plays 5 rounds, keeping score and reports the results
// Calls playround() function inside
function game(playerSelection) {
  if (isGameOver()) {
    return gameOverMsg();
  }
  gameCount++;
  gameNum.classList.add("gameNum");
  gameNum.textContent = `Game ${gameCount}`;

  let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);

  playerScoreTally.classList.add("playerScoreTally");
  playerScoreTally.textContent = `Player Score: ${playerScore}`;
  computerScoreTally.classList.add("computerScoreTally");
  computerScoreTally.textContent = `Computer Score: ${computerScore}`;

  resultsContainer.appendChild(gameNum);
  resultsContainer.appendChild(playerScoreTally);
  resultsContainer.appendChild(computerScoreTally);
}

// Helper Functions
function gameOverMsg() {
  playerScore > computerScore
    ? (finalGameMsg.textContent = "Player Wins!")
    : (finalGameMsg.textContent = "Computer Wins!");
  return resultsContainer.appendChild(finalGameMsg);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
