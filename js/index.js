// global variables
let randomValue;
let lowerRandomValue; // randomValue.toLowerCase()
let input;
let lowerInput; // input.toLowerCase()
// computer play
const computerPlay = () => {
    // computer choices
    const arr = ["Rock", "Paper", "Scissors"];
    // extract randomly an index of the array
    const randomIndex = Math.floor(Math.random() * arr.length);
    // the value that corresponds the index extracted
    randomValue = arr[randomIndex];
    lowerRandomValue = randomValue.toLowerCase()
    // return of the computer choice
    return lowerRandomValue;
}
// player play
const playerPlay = () => {
    let isValidChoice = false;
    // while loop to handle the wrong input of the user
    while (!isValidChoice) {
        input = prompt("Let's play Rock, Paper, or Scissors");
        lowerInput = input.toLowerCase();
        if(lowerInput === "scissors" || lowerInput === "paper" || lowerInput === "rock"){
            isValidChoice = true;
        }else {
            alert("Insert a valid choice like rock, paper or scissors, make sure your choice is well written.");
        }
    }
    // return of the user input
    return lowerInput;
}