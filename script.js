const buttons = document.querySelectorAll('input')
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];

    return choices[Math.floor(Math.random()* choices.length)];
}

function disableButtons() {
    buttons.forEach(btn => {
        btn.disabled = true
    })
}

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    let result = ''
    
    if ((playerChoice == 'rock' && computerChoice == 'scissors') ||
        (playerChoice == 'paper' && computerChoice == 'rock') ||
        (playerChoice == 'scissors' && computerChoice == 'paper')) {
            playerScore++;
            result += `You win! ${playerChoice} beats ${computerChoice}
            <br><br>Player score: ${playerScore} <br>Computer score: ${computerScore}`
          
    if (playerScore == 5) {
        result += '<br>Congratulations! You won the game!'
        disableButtons()
        }
    }
    else if (playerChoice == computerChoice){
        result += `It\'s a draw! <br><br>Player score: ${playerScore} <br>Computer score: ${computerScore}`
    }
    else {
        computerScore++;
        result = `You loose! ${computerChoice} beats ${playerChoice}
        <br><br>Player score: ${playerScore} <br>Computer score: ${computerScore}`
        
        if(computerScore == 5){
            result += '<br>Computer won the game!'
            disableButtons()  
        }
    }
    document.getElementById('result').innerHTML = result;
    return
}





buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})
