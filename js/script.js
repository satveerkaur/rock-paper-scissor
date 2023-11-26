let playerWins = 0;
let computerWins =0;
let playerSelection='';

function getComputerChoice(){
    let choices= ['Rock','Paper','Scissor'];
    let random = Math.floor(Math.random()*3);
    let computerChoice = choices[random].toLowerCase();
    return computerChoice;
}
let computerChoice = getComputerChoice();
// let playerSelection = prompt("Rock, paper or scissor");
playerSelection = playerSelection.toLowerCase();
function play(playerSelection,computerChoice){
    if(playerSelection === 'rock' && computerChoice === 'paper'){
        console.log("Computer wins!");
        computerWins++;
    }
    else if(playerSelection === 'rock' && computerChoice === 'scissor'){
        console.log('Player wins!');
        playerWins++;
    }
    else if(playerSelection === 'paper' && computerChoice === 'rock'){
        console.log('Player wins');
        playerWins++;
    }
    else if(playerSelection === 'paper' && computerChoice === 'scissor'){
        console.log('Computer wins!');
        computerWins++;
    }
    else if(playerSelection === 'scissor' && computerChoice === 'rock'){
        console.log('computer wins');
        computerWins++;
    }
    else if(playerSelection === 'scissor' && computerChoice === 'paper'){
        console.log('player wins');
        playerWins++;
    }else{
        console.log("It's a tie");
    }
}

// play(playerSelection,computerChoice);


function game(){
    let round = 5;
    while(round>0){
        playerSelection = prompt("Rock, paper or scissor");
        play(playerSelection,computerChoice);
        round --;
    }
    if(playerWins> computerWins){
        console.log(`Player won ${playerWins} times, Computer won ${computerWins} times.`)
        console.log('Player wins');
    }else if(playerWins< computerWins){
        console.log(`Player won ${playerWins} times, Computer won ${computerWins} times.`)
        console.log('computer wins');
    }else{
        console.log("It's a tie");
    }
}

game();
