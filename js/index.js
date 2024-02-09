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
let userResult = 0;
let computerResult = 0;
let playerImage = "";
let computerImage = "";
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
const playRound = (playerSelection, computerSelection) => {
  switch (playerSelection) {
    case "rock":
      playerImage = rock;
      break;
    case "paper":
      playerImage = paper;
      break;
    case "scissors":
      playerImage = scissors;
      break;
  }

  switch (computerSelection) {
    case "rock":
      computerImage = rock;
      break;
    case "paper":
      computerImage = paper;
      break;
    case "scissors":
      computerImage = scissors;
      break;
  }

  console.log(`You chose: ${playerSelection}\n${playerImage}`);
  console.log(`Computer chose: ${computerSelection}\n${computerImage}`);

  if (playerSelection === computerSelection) {
    userResult++;
    computerResult++;
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    userResult++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerResult++;
    return `Computer wins! ${computerSelection} beats ${playerSelection}`;
  }
};

//Lucy's contribution to the project DO NOT DELETE
function finalWinner(human, pc) {
  if (human > pc) return "Final victory is yours! Congrats";

  if (human === pc) return "It's a tie between a human and a machine";

  return "I won the whole game!!!";
}

/**
 *
 * @param {string} choice
 * @returns string corresponding to the ASCII Art of the choice
 */
const displayTheRightImage = (choice) => {
  switch (choice) {
    case "scissors":
      return scissors;
    case "paper":
      return paper;
    case "rock":
      return rock;
  }
};

/**
 *
 * @param {string} winner: the winner of the round
 * @param {string} playerInput: the input from the player
 * @param {string} computerInput: the input form the computer
 * @returns {string} the message to explain who lost/won and why.
 */
const displayRoundResult = (winner, playerInput, computerInput) => {
  if (winner === "user") {
    return `${
      playerInput.charAt(0).toUpperCase() + playerInput.slice(1)
    } beats ${computerInput.toLowerCase()}! You win! `;
  } else if (winner === "computer") {
    return `${
      computerInput.charAt(0).toUpperCase() + computerInput.slice(1)
    } beats ${playerInput.toLowerCase()}! You lose! `;
  } else {
    return "Even!";
  }
};

/**
 * Play the game for 5 rounds.
 * At the final round, it will declare the final winner using the
 * function "checkWhoIsTheWinnerOftheGame()"
 */
const game = () => {
  alert(
    "AI vs The world \n \n A super mega evil AI has taken control of the world. It's almost the end of the humanity, and the beginning of the machines' era. \n You are our only hope. You have to beat the devilish AI at rock-paper-scissors to save the humanity (and the other species. Why is always about human? I can't bel.... ). \n Sorry about that, we change the narrator. Now, it's time to get your hands dirty"
  );
  alert(
    "The rule are simple: \n - the rock beats the scissors, \n - the scissors beats the paper, \n - the paper beats the rock. \n The player with the highest score after 5 rounds is the winner. (PS:Don't forget to open your console to follow the game)"
  );

  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
    const playerInput = playerPlay();
    if (playerInput === undefined) break;
    const computerInput = computerPlay();
    const winner = playRound(playerInput, computerInput);

    switch (winner) {
      case "computer":
        computerScore++;
        break;
      case "user":
        playerScore++;
        break;
      default:
        playerScore++;
        computerScore++;
        break;
    }

    console.log(
      `You chose ${playerInput}: \n
      ${displayTheRightImage(playerInput)}`
    );
    console.log(
      `The computer chose ${computerInput}: \n
      ${displayTheRightImage(computerInput)}`
    );
    console.log(displayRoundResult(winner, playerInput, computerInput));

    console.log(`Score: Player ${playerScore} - ${computerScore} AI`);
  }

  console.log(finalWinner(playerScore, computerScore));
};

game();
