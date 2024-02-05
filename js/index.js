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

const computerSelection = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const playRound = function () {
  const playerSelection = prompt(
    "What do you choose? Rock, Paper, or Scissors."
  ).toLowerCase();

  const result = compareSelections(playerSelection, computerSelection());

  console.log(result);
};

const compareSelections = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie! Both of us selected ${playerSelection}`;
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
};

playRound();
