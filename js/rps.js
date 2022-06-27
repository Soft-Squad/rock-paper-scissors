// Randomly returns either 'Rock', 'Paper, or 'Scissors'
function computerPlay() {
    // Rock = 0, Paper = 1, Scissors = 2
    let play = Math.floor(Math.random() * 3);
    // console.log(play)
    let result = (play === 0) ? 'Rock' : 
        (play === 1) ? 'Paper' :
        'Scissors';

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

    switch(playerSelected) {
        case 'rock':
            message = (computerSelection === 'Rock') ? "Tie!" :
            (computerSelection === 'Paper') ? "You Lose! Paper beats Rock" :
            "You Win! Rock beats Scissors";
            console.log(message)
            
            if (message != "Tie!") {
                result = message.substring(0, 8);
            } else {
                result = message
            }
            break;

        case 'paper':
            message = (computerSelection === 'Rock') ? "You Win! Paper beats Rock" :
            (computerSelection === 'Paper') ? "Tie!" :
            "You Lose! Paper beats Rock";
            console.log(message)

            if (message != "Tie!") {
                result = message.substring(0, 8);
            } else {
                result = message
            }
            break;

        case 'scissors':
            message = (computerSelection === 'Rock') ? "You Lose! Rock beats Scissors" :
            (computerSelection === 'Paper') ? "You Win! Scissors beats Paper" :
            "Tie!";
            console.log(message)

            if (message != "Tie!") {
                result = message.substring(0, 8);
            } else {
                result = message
            }
            break;

        default:
            console.log("Unknown selection")
    }
    return result;
}

// Plays 5 rounds, keeping score and reports the results
// Calls playround() function inside
function game() {
    let resultMap = new Map(); 
    let playerScore = 0, computerScore = 0
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter Rock or Paper or Scissors");
        const computerSelection = computerPlay();
        resultMap.set(i, playRound(playerSelection, computerSelection))

        if (resultMap.get(i) == "You Win!") {
            playerScore += 1;
        } else if (resultMap.get(i) == "You Lose") {
            computerScore += 1;
        } else {                // Tie
            playerScore += 0;
            computerScore += 0;
        }
    }
    
    let message = (playerScore > computerScore) ? "Player Wins!" :
    "Computer Wins!";
    return message
}

console.log(game());