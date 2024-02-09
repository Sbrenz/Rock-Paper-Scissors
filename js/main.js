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
const images = [rock, paper, scissors];
let playerImage = "";
let computerImage = "";
const choices = ["rock", "paper", "scissors"];
let userResult = 0;
let computerResult = 0;
let playOrNot = false;

// Random choice for computer
function computerPlay() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Comparing user choice and computer choice
function playRound(playerSelection, computerSelection) {
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
}

// Play the game
function game() {
  console.log(
    "%cWelcome to Rock, Paper, Scissors game! Can you beat computer ?",
    "color: white; background: green; font-size: 36px; border: 5px double cyan; text-shadow: 3px 3px black; padding: 110px; border-radius: 16px; font-weight: bold; font-family:Lucida Console;"
  );

  if (!playOrNot) playOrNot = confirm("Do you want to play the game ?");

  if (playOrNot) {
    let i = 0;
    while (i < 5) {
      let playerSelection = prompt(
        "Please choose: rock, paper, or scissors"
      ).toLowerCase();
      if (!["rock", "paper", "scissors"].includes(playerSelection)) {
        console.log("Invalid choice. Please choose rock, paper, or scissors.");
        continue;
      }
      const computerChoice = computerPlay();

      const result = playRound(playerSelection, computerChoice);
      console.log(result);
      i++;
    }

    if (userResult > computerResult) {
      console.log(
        `You win with overall score of ${userResult} while computer have only ${computerResult} scores`
      );
    } else if (userResult === computerResult) {
      console.log(
        `It's a tie! Both you and computer have scores of ${userResult} `
      );
    } else {
      console.log(
        `Computer wins with overall score of ${computerResult} while you have only ${userResult} scores`
      );
    }

    playOrNot = confirm("Thank you for playing! Do you want to play again?");
    if (playOrNot) {
      userResult = 0;
      computerResult = 0;
      console.clear();
      game();
    } else {
      console.log("Thank you for playing!");
    }
  }
}
game();
