function getComputerChoice(){
    let choices= ['Rock','Paper','Scissor'];
    let random = Math.floor(Math.random()*3);
    let computerChoice = choices[random].toLowerCase();
    return computerChoice;
}
let computerChoice = getComputerChoice();
let playerSelection = prompt("Rock, paper or scissor");
playerSelection = playerSelection.toLowerCase();
function play(playerSelection,computerChoice){
    if(playerSelection === 'rock' && computerChoice === 'paper'){
        console.log("Computer wins!");
    }
    else if(playerSelection === 'rock' && computerChoice === 'scissor'){
        console.log('Player wins!');
    }
    else if(playerSelection === 'paper' && computerChoice === 'rock'){
        console.log('Player wins');
    }
    else if(playerSelection === 'paper' && computerChoice === 'scissor'){
        console.log('Computer wins!');
    }
    else if(playerSelection === 'scissor' && computerChoice === 'rock'){
        console.log('computer wins');
    }
    else if(playerSelection === 'scissor' && computerChoice === 'paper'){
        console.log('player wins');
    }else{
        console.log("It's a tie");
    }
}

play(playerSelection,computerChoice);

