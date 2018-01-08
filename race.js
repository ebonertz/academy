let raceNumber = Math.floor(Math.random()*1000);

let earlyRegistration = false;

let runnerAge = 22;

if (!earlyRegistration) {
  raceNumber += 1000;
};

if (runnerAge > 18 && earlyRegistration ) {
  console.log('Your race is at 9:30');
} else if (runnerAge > 18 || earlyRegistration ) {
  console.log('Your race is at 11:00');
} else if (runnerAge < 18 && earlyRegistration === false){
  console.log(`Your race is at 12:30 and your race number is ${raceNumber}`);
} else {
	console.log('Please see registration');
}
