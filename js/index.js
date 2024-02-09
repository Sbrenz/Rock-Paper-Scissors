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
 * The computer chooses a random choice among choices.
 * @returns {string}, corresponding to the computer's choice.
 */
const computerPlay = () => {
  const computerChoice = Math.round(Math.random() * 2);
  return choices[computerChoice];
};

const toContinue = () => {
  const isContinue = prompt("Do you want to continue? Y/N").toUpperCase();

  switch (isContinue) {
    case "Y":
      return getPlayerInput();
    case "N":
      alert(
        "You failed us! This is the end of the world! Kaboom Brre PAAA Boooooom Prrrppwrrrrr (What do you think about my onomatope? Good, right?) Paaa prrrrrr"
      );
      return;
    default:
      return toContinue();
  }
};

/**
 * Ask the player, to enter his/her choice between rock, paper or scissors.
 * If the user enters an invalid input, the function will ask the user to enter a valid input.
 * @returns {string} correpsonding to the player's input.
 */
const getPlayerInput = () => {
  playerInput = prompt('Choose between "Rock", "Paper" or "Scissors"!');

  if (playerInput === null) {
    alert("Why do you want to leave? Are you afraid to loooooose?");
    return toContinue();
  }

  const playerInputLowerCase = playerInput.toLowerCase();

  if (
    (playerInputLowerCase !== "rock") &
    (playerInputLowerCase !== "paper") &
    (playerInputLowerCase !== "scissors")
  ) {
    alert("This is not a valid choice!");
    return getPlayerInput();
  }

  return playerInputLowerCase;
};

/**
 * We take the player's selection and the computer's
 * selection.
 * We compare them using their index inside the choices
 * array.
 * @param {string} playerSelection
 * @param {string} computerSelection
 * @returns {string} the winner of the round
 */
const playRound = (playerSelection, computerSelection) => {
  const formattedPlayerSelection = choices.indexOf(playerSelection);
  const formattedComputerSelection = choices.indexOf(computerSelection);

  if (formattedComputerSelection === 0 && formattedPlayerSelection === 2) {
    return "computer";
  } else if (
    formattedPlayerSelection === 0 &&
    formattedComputerSelection === 2
  ) {
    return "user";
  } else if (formattedComputerSelection > formattedPlayerSelection) {
    return "computer";
  } else if (formattedPlayerSelection > formattedComputerSelection) {
    return "user";
  } else {
    return "even";
  }
};

/**
 *
 * @param {string} winner
 * @param {string} playerInput
 * @param {string} computerInput
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
 *
 * @returns {string} Final message to declare the winner of the game.
 */
const checkWhoIsTheWinnerOftheGame = () => {
  if (playerScore > computerScore) {
    return "You win! In your face AI!";
  } else if (playerScore < computerScore) {
    return "Oh no! You lose! Boowahahaha!";
  } else {
    return "Even! Not so smart for an AI";
  }
};

const displayTheRighImage = (choice) => {
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
  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
    const playerInput = getPlayerInput();
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
      `You chose ${playerInput}: \n ${displayTheRighImage(playerInput)}`
    );
    console.log(
      `The computer chose ${computerInput}: \n ${displayTheRighImage(
        computerInput
      )}`
    );
    console.log(displayRoundResult(winner, playerInput, computerInput));

    console.log(`Score: Player ${playerScore} - ${computerScore} AI`);

    if (i === 4) {
      alert(checkWhoIsTheWinnerOftheGame());
    }
  }
};

game();
