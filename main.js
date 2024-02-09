const winner ={
    player: 1,
    pc: 2,
    draw: 3
}

const gameOptions = {
    rock : 1,
    paper: 2,
    scissors: 3
}

function winnerToText (winner) {
    if (winner === 1) return "Player"
    if (winner === 2) return "PC"
    if (winner === 3) return "Draw"
    return "undefined"
}

function gameOptionsToText (option) {
    if (option === 1) return "Rock"
    if (option === 2) return "Paper"
    if (option === 3) return "Scissors"
    return "undefined"
}

function game(){   
    let human = 0;
    let pc = 0;
    for( let i=1; i<6; i++){
        let computer = computerPlay();
        console.log("Computer has made its move. Your turn! ");

        let player = validatePlayerAnswer();
        console.log(`You have chosen: ${gameOptionsToText(player)}`);
            
        let resultRound= playRound(player, computer);        
        if (resultRound === winner.player) {
            human++;
        } else if (resultRound === winner.pc) {
            pc++;
        }
        console.log(`End of round: ${i} human: ${human} pc:${pc}`);               
    }        
    return finalWinner(human, pc);                            
}

function computerPlay(){
    let option = (Math.round(Math.random()*2)+1);
    let computerPlay = option;
    return computerPlay;
}

function validatePlayerAnswer(){
    let playerAnswer = prompt("Please, choose your move: paper, scissors or rock!");  
    switch (playerAnswer.toLowerCase()) {
        case "paper":
            return gameOptions.paper;

        case "scissors":
            return gameOptions.scissors;

        case "rock":
            return gameOptions.rock;
    }

    let newAnswer = prompt("Whoopsie we have a typo, please write your answer again!");
    
    
}

function playRound(playerSelection, computerSelection){
        
    if(playerSelection == computerSelection){
        console.log("It's a tie. Go again!");                
        return winner.draw                        
    } 
    if(playerSelection == gameOptions.rock && computerSelection == gameOptions.scissors){
        console.log("I loose! Rock beats Scissors!");        
        return winner.player                        
    }
    if(playerSelection == gameOptions.scissors && computerSelection == gameOptions.rock){
        console.log("You lose! Rock beats Scissors!");        
        return winner.pc                      
    }
    if(playerSelection == gameOptions.scissors && computerSelection == gameOptions.paper){
        console.log("I lose! Scissors beat paper!");
        return winner.player;                       
    }
    if(playerSelection == gameOptions.paper && computerSelection == gameOptions.scissors){
        console.log("You lose! Paper beats rock!");        
        return winner.pc                       
    }
    if(playerSelection == gameOptions.rock && computerSelection == gameOptions.paper){
        console.log("You lose! Paper beats rock!");        
        return winner.pc                       
    }
    if(playerSelection == gameOptions.paper && computerSelection == gameOptions.rock){
        console.log("I lose! Paper beats rock!");        
        return winner.player                       
    }        
    console.log("unexpected result - returning draw");        
    return winner.draw
}

function finalWinner(human, pc){
    if (human > pc) return "Final victory is yours! Congrats";

    if(human === pc) return "It's a tie between a human and a machine";
    
    return "I won the whole game!!!";
}

let roundOfGame = game();
console.log(roundOfGame);




