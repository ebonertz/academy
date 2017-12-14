let person = {
  _name: 'Evan',
  _age: 28,

  set age(ageIn) {
    if (typeof ageIn === 'number') {
      this._age = ageIn;
    }
    else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  },

  get age() {
    console.log(`${this._name} is ${this._age} years old.`);
    return this._age;
  }

};

person.age = 29;

console.log(person.age);
