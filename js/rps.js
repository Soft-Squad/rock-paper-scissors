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
    let message;

    switch(playerSelected) {
        case 'rock':
            message = (computerSelection === 'Rock') ? "Tie!" :
            (computerSelection === 'Paper') ? "You Lose! Paper beats Rock" :
            "You Win! Rock beats Scissors";
            break;
        case 'paper':
            message = (computerSelection === 'Rock') ? "You Win! Paper beats Rock" :
            (computerSelection === 'Paper') ? "Tie!" :
            "You Lose! Paper beats Rock";
            break;
        case 'scissors':
            message = (computerSelection === 'Rock') ? "You Lose! Rock beats Scissors" :
            (computerSelection === 'Paper') ? "You Win! Scissors beats Paper" :
            "Tie!";
            break;
        default:
            console.log("Unknown selection")
    }
    return message;
}

const playerSelection = "roCk";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))