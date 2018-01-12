const getSleepHours = (day) => {
  switch (day) {
    case 'monday':
      return 7;
      break;
    case 'tuesday':
      return 9;
      break;
    case 'wednesday':
      return 8;
      break
    case 'thursday':
    	return 6;
      break;
    case 'friday':
      return 9;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 7;
      break;
    }
}

const getActualSleepHours = () => {
  return getSleepHours('monday') +
	getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday')
    }

const getIdealSleepHours = () => {
  const idealHours = 8
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  console.log(`You Sleep ${actualSleepHours} hours a week`);
  console.log(`You sleep want to sleep ${idealSleepHours} hours a week`);

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the right amount of sleep');
  } else if ( actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed');
  } else {
    console.log('You should get more rest');
  }
 }
calculateSleepDebt();
