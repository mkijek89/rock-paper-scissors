function getComputerChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];

    return choices[Math.floor(Math.random()* choices.length)];
}

// In the future improve this part
function compareChoices(a,b) {
    switch (a) {
        case 'ROCK':
            if (b == "ROCK"){
                return "It's a draw";
            }
            else if (b == 'SCISSORS'){
                return "Rock beats scissors, computer wins!";
            }
            else {
                return "Paper beats rock, you win!";
            }
            break;

        case 'SCISSORS':
            if (b == "ROCK"){
                return "Rock beats scissors, you win!";
            }
            else if (b == 'SCISSORS'){
                return "It's a draw";
            }
            else {
                return "Scissors beat paper, computer wins!";
            }
            break;

        case 'PAPER':
            if (b == "ROCK"){
                return "Paper beats rock, computer wins!";
            }
            else if (b == 'SCISSORS'){
                return "Scissors beat paper, you win!";
            }
            else {
                return "It's a draw";
            }
            break;
    }

}

const choices = ['ROCK', 'PAPER', 'SCISSORS'];





for (let i = 0, j = 0; i < 5 || j < 5; ) {
    
    let userChoice = prompt("Please enter your choice").toUpperCase();

    
        while (!(choices.includes(userChoice))){
    userChoice = prompt("You have to enter \"rock\", \"paper\" or \"scissors\"");
    }

    let result = compareChoices(getComputerChoice(), userChoice.toUpperCase());
    
    if (result.includes("computer")){
        
        
        i++;
    }
    else if (result.includes("you")) {
        
        
        j++;
    }  
    
    if (i <5 || j <5) {
        console.log('Game in progress');
    }
    else if (i == 5) {
        console.log('Computer wins the game!');
    }
    else {
        console.log('Congratulations you win the game!');
    }

    
}








