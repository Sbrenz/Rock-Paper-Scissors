const rock = `
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
`;

const paper = `
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
`;

const scissors = `
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
`;

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

/**
 * @returns {string} corresponding to the player's selection
 */
const playerPlay = () => {};

/**
 * @returns {string} corresponsing to the computer's choice
 */
const computerPlay = () => {};

/**
 * @param {string} playerSelection
 * @param {string} computerSelection
 * @returns {string} the winner of the round
 */
const playRound = (playerSelection, computerSelection) => {};

const game = () => {
  for (let i = 0; i < 5; i++) {}
};

function finalWinner(human, pc){
    if (human > pc) return "Final victory is yours! Congrats";

    if(human === pc) return "It's a tie between a human and a machine";
    
    return "I won the whole game!!!";
}
