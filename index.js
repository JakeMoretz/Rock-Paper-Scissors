const gameArray = ['rock', 'paper','scissors']
const winners = [];

function game() {
    for (let i = 1; i <= 5; i++) {
        playRound(i);
    }
    logWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection)
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round)

}

function playerChoice () {
    let input = prompt('Type Rock, Paper, or Scissors');
    while (input == null) {
        input = prompt('Type Rock, Paper, or Scissors');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt ('Type Rock, Paper, Scissors. spelling needs to be correct');
        
        while (input == null) {
            input = prompt('Type Rock, Paper, or Scissors');
        }
        input = input.toLowerCase();
        check = validateInput(input);   
    
    }
    return input;
}

function computerChoice() {
    return gameArray[Math.floor(Math.random() * gameArray.length)]; 
}

function validateInput(choice) {
    if (choice.includes(choice)) {
        return true;
    } else {
        return false;
    }
}

function checkWinner(choice1, choice2){
    if(choice1 === choice2){
        return 'Tie'
    } else if ((choice1 === 'rock' && choice2 === 'scissors') || 
    (choice1 === 'paper' && choice2 === 'rock') || 
    (choice1 === 'scissors' && choice2 === 'paper')
    ){
        return 'Player';
    } else {
        return 'Computer';
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log('Results:')
    console.log('Player Wins:', playerWins);
    console.log('Computer Wins:', computerWins);
    console.log('Ties:', ties);
}


function logRound(playerChoice, computerChoice, winner, round){
    console.log('Round:', round)
    console.log('Player chose:', playerChoice)
    console.log('Computer chose:', computerChoice)
    console.log(winner, 'Won the round')
}


game();
