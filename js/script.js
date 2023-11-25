function getComputerChoice(){
    let choices= ['Rock','Paper','Scissor'];
    let random = Math.floor(Math.random()*3);
    let computerChoice = choices[random];
    return computerChoice;
}
let computerChoice = getComputerChoice().toLowerCase();
let playerSelection = prompt("Rock, paper or scissor");

function play(playerSelection,computerChoice){
    if(playerSelection === )
}