let cookies = ['chocolate chip', 'raisin', 'macadamia nut', 'sugar'];

for (let i = 0; i<cookies.length; i++) {
  console.log('I would love to eat a ' + cookies[i] + ' cookie right now!');
}

let vacationSpots = ['Valencia', 'Malaga', 'Granada']

for (let vacationSpotIndex = 0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}

// Loop through the array backwards

let vacationSpots = ['Valencia', 'Malaga', 'Granada']

for (let vacationSpotIndex = vacationSpots.length - 1 ; vacationSpotIndex >= 0; vacationSpotIndex--) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}

//Nested Loop
//Comparison to see if items in an array match
let myPlaces = ['Valencia', 'Malaga', 'Granada'];
let friendPlaces = ['Barcelona', 'Madrid', 'Valencia'];

for (let myPlacesIndex = 0; myPlacesIndex< myPlaces.length; myPlacesIndex++) {
  for (let friendPlacesIndex = 0; friendPlacesIndex< friendPlaces.length; friendPlacesIndex++) {
    if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
console.log(myPlaces[myPlacesIndex]);
    }
  }
}

//While Loop finds out if the card is a Spade
let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

let currentCard = 'Spade'

while (currentCard !== 'Spade') {
  console.log(currentCard)
  currentCard = cards[Math.floor(Math.random() * 4)];
}
console.log('We Found a Spade!')
currentCard = 'Heart'

//More examples
let thingsToDo = ['do laundry', 'take out the garbage', 'make dinner', 'walk the dog', 'go to the bank'];

for (let thingsToDoIndex = thingsToDo.length - 1; thingsToDoIndex >= 0; thingsToDoIndex--) {
  console.log('I need to ' + thingsToDo[thingsToDoIndex] + '.');
}

 while (thingsToDo.length > 3) {
   console.log('I have too many things to do!');
	 thingsToDo.pop();
 }
