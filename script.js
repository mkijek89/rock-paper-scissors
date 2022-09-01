function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];

    return choices[Math.floor(Math.random()* choices.length)];
}

function compareChoices(a,b) {
    switch (a) {
        case 'rock':
            if (b == "rock"){
                return "It's a draw";
            }
            else if (b == 'scissors'){
                return "Rock beats scissors, computer wins!";
            }
            else {
                return "Paper beats rock, you win!";
            }
            break;

        case 'scissors':
            if (b == "rock"){
                return "Rock beats scissors, you win!";
            }
            else if (b == 'scissors'){
                return "It's a draw";
            }
            else {
                return "Scissors beat paper, computer wins!";
            }
            break;

        case 'paper':
            if (b == "rock"){
                return "Paper beats rock, computer wins!";
            }
            else if (b == 'scissors'){
                return "Scissors beat paper, you win!";
            }
            else {
                return "It's a draw";
            }
            break;
    }

}

const choices = ['rock', 'paper', 'scissors'];





for (let i = 0; i < 5; i++) {
    
    let userChoice = prompt("Please enter your choice")

    if (choices.includes(userChoice)) {
        console.log('OK');
    }
    
    else {
        while (!(choices.includes(userChoice)))
    userChoice = prompt("You have to enter \"rock\", \"paper\" or \"scissors\"");
    }

    compareChoices(getComputerChoice(), userChoice)

    if (compareChoices(getComputerChoice(), userChoice).includes('computer')){
        i++;
        console.log(compareChoices(getComputerChoice(), userChoice));
    }
    
   
    console.log(i);
    
}








