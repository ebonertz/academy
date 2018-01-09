//Define username
let userName = 'Aaron';

//Create a ternary expression that decided what to do if the user enters a name or not
userName.length > 0 ? console.log(`Hello, ${userName}`) : console.log('Hello!');

// If/ else statement
// if (userName.length > 0 ) {
//   console.log(`Hello, ${userName}`)
// } else {
//   console.log('Hello!');
// }


// Create a variable that is a string that is the question the user wants to ask
let userQuestion = 'Will the Dawgs win?';

// Create a variable that will generate a random number between 0 and 7
let randomNumber = Math.floor(Math.random()*8);
// console.log(`Random generated number is: ${randomNumber}`);

// Create the eightBall variable and set to an empty string
let eightBall = '';

//Create a control flow that takes randomNumber and assigns eigthBall to a a reply using a switch statement.
switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'No doubt';
    break;
  case 2:
    eightBall = 'Not Sure';
    break;
  case 3:
    eightBall = 'Outlook is not so good';
    break;
  case 4:
    eightBall = 'Doubt it';
    break;
  case 5:
    eightBall = 'For sure';
    break;
  case 6:
    eightBall = 'Reply hazy';
    break;
  case 7:
    eightBall = 'Giver';
    break;
  case 8:
    eightBall = 'Definitely';
    break;
  }

// Log the userQuestion and the eightBall response
console.log('You asked: ' + userQuestion);
console.log('The eight ball answered: ' + eightBall);
