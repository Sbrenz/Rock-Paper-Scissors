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

/**
 *
 * @returns {string} the computer input
 */
const computerPlay = () => {
  // extract randomly an index of the array
  const randomIndex = Math.floor(Math.random() * choices.length);
  // return of the computer choice
  return choices[randomIndex];
};

const toContinue = () => {
  const isContinue = prompt("Do you want to continue? Y/N").toLowerCase();

  switch (isContinue) {
    case "y":
    case "yes":
      return playerPlay();
    case "n":
    case "no":
      alert(
        "You failed us! This is the end of the world! Kaboom Brre PAAA Boooooom Prrrppwrrrrr (What do you think about my onomatope? Good, right?) Paaa prrrrrr"
      );
      return;
    default:
      return toContinue();
  }
};

/**
 *
 * @returns {string} player's input
 */
const playerPlay = () => {
  let isValidChoice = false;
  // while loop to handle the wrong input of the user
  while (!isValidChoice) {
    const input = prompt("Let's play Rock, Paper, or Scissors");

    if (input === null) {
      alert("Why do you want to leave? Are you afraid to loooooose?");
      return toContinue();
    }

    lowerInput = input.toLowerCase();
    if (
      lowerInput === "scissors" ||
      lowerInput === "paper" ||
      lowerInput === "rock"
    ) {
      isValidChoice = true;
    } else {
      alert(
        "Insert a valid choice like rock, paper or scissors, make sure your choice is well written."
      );
    }
  }
  // return of the user input
  return lowerInput;
};

/**
 * @param {string} playerSelection
 * @param {string} computerSelection
 * @returns {string} the winner of the round
 */
const playRound = (playerSelection, computerSelection) => {
  const playerImage = displayTheRightImage(playerSelection);
  const computerImage = displayTheRightImage(computerSelection);

  console.log(`You chose: ${playerSelection}\n${playerImage}`);
  console.log(`Computer chose: ${computerSelection}\n${computerImage}`);

  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
};

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
  if (winner === "player") {
    return `${
      playerInput.charAt(0).toUpperCase() + playerInput.slice(1)
    } beats ${computerInput.toLowerCase()}! You win! `;
  } else if (winner === "computer") {
    return `${
      computerInput.charAt(0).toUpperCase() + computerInput.slice(1)
    } beats ${playerInput.toLowerCase()}! You lose! `;
  } else {
    return "It's a tie!";
  }
};

//Lucy's contribution to the project DO NOT DELETE
/**
 * Compare player's score and computer's score to see who is the winner.
 * @param {number} player
 * @param {number} computer
 * @returns {string} The Message which says who is the final winner.
 */
function finalWinner(player, computer) {
  if (player > computer) return "Final victory is yours! Congrats";

  if (player === computer) return "It's a tie between a human and a machine";

  return "I won the whole game!!!";
}

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
  let round = 0;

  for (let i = 0; i < 5; i++) {
    round = i + 1;
    console.log(`Round ${round}`);

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

    console.log(winner);

    console.log(displayRoundResult(winner, playerInput, computerInput));
    console.log(`Score: Player ${playerScore} - ${computerScore} AI`);
  }

  round === 5
    ? console.log(finalWinner(playerScore, computerScore))
    : console.log("The player has given up! \n Game over!");
};

game();
