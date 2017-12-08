let person = {
  name: 'Evan',
  age: 28,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  //Add a method with ES6 syntax
  sayGoodbye() {
    return 'Goodbye!'
  },
  //Add a method that returns name from within the same object using this Keyword
  sayHello() {
    return `Hello, my name is ${this.name}`
  }
};

let friend = {
  name: 'Eric'
}
friend.sayHello = person.sayHello;

console.log(person['name']);
console.log(person['age']);

let day = 'Friday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);

// Add new properties with dot notation
person.hobbies = ['snowboarding', 'bass']
console.log(person.hobbies);

//Add new method with arrow function syntax that returns a string
person.sayHello = () => {
  return 'Hello, there!'
}

console.log(person.sayHello());
console.log(friend.sayHello());
