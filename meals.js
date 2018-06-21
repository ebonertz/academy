let menu = {
    _courses: {

    _appetizers: [],
    _mains: [],
    _desserts:[],

    get appetizers () {
      return this._appetizers;
    } ,

    get mains () {
      return this._mains;
    },

    get desserts () {
    return this._desserts;
    },

    set appetizers (appetizers) {

        this._appetizers.push(appetizers);

    },

    set mains (mains) {

        this._mains.push(mains);

    },

    set desserts (desserts) {

        this._desserts.push(desserts);

  },

},

  get courses () {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    }

  },


  addDishToCourse( courseName,dishName, dishPrice) {
    const dish = {
      _name: [],
      _price:[],

      get name () {
        return this._name;
      },
      get price () {
        return this._price;
      },
      set name (dishName) {
        if(typeof dishName === 'string'){
          this._name.push(dishName);

        }else{
          console.log(`Please enter a string.`);
        }
      },
      set price (dishPrice) {
        if(typeof dishPrice === 'number'){
          this._price.push(dishPrice);

        }else{
          console.log(`The price needs to be a number.`);
        }
      },
       };

   this._courses[courseName].push(dish);


 },


  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const random = Math.floor(Math.random() * dishes.length);
    return dishes[random];

  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price +
          desserts.price;

    return `You'll be starting off with ${appetizer} followed by a ${main} to your liking. Then to top the night off a delicious ${desserts}. Your total for this meal is $${totalPrice}.`
  },


};


menu.addDishToCourse('mains','Baby Back Ribs', 22.50);
menu.addDishToCourse('mains','Crusted Garlic Chicken', 15.30);
menu.addDishToCourse('mains','Orange Chicken Bowl', 12.10);

menu.addDishToCourse('desserts','Blondie', 7.15);
menu.addDishToCourse('desserts','Vanilla Icescream', 6.12);
menu.addDishToCourse('desserts','Apple Turnovers', 8.00);

menu.addDishToCourse('appetizers','Boneless Wings', 10.50);
menu.addDishToCourse('appetizers','Spinach Dip', 8.50);
menu.addDishToCourse('appetizers','Avacado Egg Rolls', 13.10);

let meal = menu.generateRandomMeal();
console.log(meal);
