const gameArray = ['rock', 'paper','scissors']
let winners = [];

function resetGame(){
    winners = [];
    document.querySelector('.playerScore').textContent = 'Score: 0';
    document.querySelector('.computerScore').textContent = 'Score: 0';
    document.querySelector('.ties').textContent = 'Ties: 0';
    document.querySelector('.winner').textContent = '';
    document.querySelector('.playerChoice').textContent = '';
    document.querySelector('.computerChoice').textContent = '';
    document.querySelector('.reset').style.display = 'none';
}


function startGame() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.id) {
                playRound(button.id);
            }
        })
    });
}
    


function playRound(playerChoice) {
    let wins = checkWins();
    if (wins >= 5) {
        return
    }
    const computerChoice = computerSelect();

    const winner = checkWinner(playerChoice, computerChoice);
    winners.push(winner);
    tallyWins();
    displayRound(playerChoice, computerChoice, winner);
    wins = checkWins();
     if(wins == 5) {
        displayEnd()
     }
}

function displayEnd() {
    let playerWins = winners.filter((item) => item == "player").length;
    if (playerWins == 5){
        document.querySelector('.winner').textContent = 'you won 5 times, Congrats!'
    } else {
        document.querySelector('.winner').textContent = 'Sorry, the computer won 5 times'
    }
    document.querySelector('.reset').style.display = "flex"
    
}



function displayRound (playerChoice, computerChoice, winner) {
    document.querySelector('.playerChoice').textContent = `you chose: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`
    document.querySelector('.computerChoice').textContent = `The Computer chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`
    document.querySelector('.winner').textContent = `Round winner: ${winner}`
}

function tallyWins() {
    const playerWins = winners.filter((item) => item == "Player").length;
    const computerWins = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
    document.querySelector('.playerScore').textContent = `Score: ${playerWins}`
    document.querySelector('.computerScore').textContent = `Score: ${computerWins}`
    document.querySelector('.ties').textContent = `Ties: ${ties}`
}


function computerSelect() {
    return gameArray[Math.floor(Math.random() * gameArray.length)]; 
}

function checkWins () {
    const playerWins = winners.filter((item) => item == "Player").length;
    const computerWins = winners.filter((item) => item == "Computer").length;
    return Math.max(playerWins, computerWins)
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

startGame();
