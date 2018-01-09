const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || 'paper' || 'scissors'){
    return userInput;
  } else {
    console.error('Invalid Input');
  }
 };

const getComputerChoice = () => {
let randomNumber = Math.floor(Math.random()*3);
//console.log(`Random generated number is: ${randomNumber}`);

  switch (randomNumber) {
    case 0:
      return computerChoice = 'rock'
      break;
    case 1:
      return computerChoice = 'paper'
      break;
    case 2:
      return computerChoice = 'scissors'
      break;
  }
  return computerChoice;
};

const determineWinner = (userChoice, computerChoice) => {
if (userChoice === computerChoice){
  return 'It is a tie'
}
if (userChoice === 'rock') {
  if (computerChoice === 'scissors') {
    return 'You are the winner'
  } else {
    return 'The computer is the winner'
  }
}
if (userChoice === 'paper') {
  if (computerChoice === 'rock') {
    return 'You are the winner'
  } else {
    return 'The computer is the winner'
  };
}
if (userChoice === 'scissors') {
  if (computerChoice === 'paper') {
    return 'You are the winner'
  } else {
    return 'The computer is the winner'
  }
}
}

const playGame = () => {
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`Computer threw: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
