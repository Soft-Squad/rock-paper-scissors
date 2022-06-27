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