# ES6 Overview

## JavaScript Types
  **BOSSNUN**
* Boolean
* Object
* String
* Symbol
* Number
* Undefined
* Null

## Control Flow

* if/else statements make binary decisions and execute different code based on conditions.
* All conditions are evaluated to be truthy or falsy.
* We can add more conditional statements to if/else statements with else if.
* Switch statements make complicated if/else statements easier to read and achieve the same result.
* The ternary operator (?) and a colon (:) allow us to refactor simple if/else statements.
* Comparison operators, including <, >, <=, and >= can compare two variables or values.
* After two values are compared, the conditional statement evaluates to true or false.
* The logical operator && checks if both sides of a condition are truthy.
* The logical operator || checks if either side is truthy.
* The logical operator !== checks if the two sides are not equal.
* An exclamation mark (!) switches the truthiness / falsiness of the value of a variable.
* One equals symbol (=) is used to assign a value to a variable.
* Three equals symbols (===) are used to check if two variables are equal to each other.

Reference switch.js for code examples

## Falsey Values

All variables that have been created and set are truthy (and will evaluate to true if they are the condition of a control flow statement) unless they contain one of the seven values listed below:

* false
* 0 and -0
* "" and '' (empty strings)
* null
* undefined
* NaN (Not a Number)

## Mapping

* .forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
* .map() executes the same code on every element in an array and returns a new array with the updated elements.
* .filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
* All iterator methods can be written using arrow function syntax. In fact, given the succinctness and the implicit return of arrow function syntax, this is quickly becoming the preferred way to write these types of method calls.

* Additional iterator methods such as .some(), .every(), .reduce() perform different functions.

Reference citymap.js for code examples


### Class Syntax
Object Oriented
To define a class use a class keyword follower by the name of the class. The body of the class is the part between the curly braces
Instance method definitions in classes look just like method initializer shorthand in objects

### Constructor method
Runs every time a new instance is created with a new operator.  
Inside the contractor method is a good place to assign to instance variables that we want to use in other instance methods.
Properties or instances variables et in the contractor method can be accessed from all other instance methods in the class.
Class inheritance - Reduces Code repetition  

### Using Class Syntax

```javascript

class SponsorWidget {

	constructor(name, description, url) {

  }

	render() {
  }
}
```

## ES6 Modules
* Avoids polluting the global namespace
* Export keyword exposes function to the module system

To import multiple functions for a sign module

```javascript
import { alertMessage, logMessage } from ‘./flash-message’;
```

Import the entire module as an object
```javascript
import * as flash from ‘./flash-message’ ;
```

Export multiple functions as an object
```javascript
export { alertMessage, logMessage}
```

## Modules Part 2
you cannot redefine constants within the same scope
Exporting constants in a module
Import the constants into another module
Export class modules with default export
But create a new instance of the using new

## Pure Functions
return value is determined only by its input values (arguments). When given the same argument, the result will always be the same.
- must take arguments
- rely only on local state and do not mutate external state
- do not produce side effects
- cannot call impure functions

## Maps

Maps are a data structure composed of a collection of key/value pairs. They are very useful to store simple data such as property values
Each key is linked to one value
Issue with using objects as maps - Keys are always converted to strings
With maps objects are not converted to strings
Assign values with set method
Read objects from a map with the get method
Use Maps when all keys are the same type and all values are the same type
You can loop through a map with a For Of loop
Use array destructing
Weak Map - Only objects can be used as keys (string, number and booleans not allowed)
Weak Maps are not iterable

Add Entries to a Map Object

```javascript
let author1 = { name: "Sam" };
let author2 = { name: "Tyler" };

let totalReplies = new Map();

console.log( `Total Replies: ${totalReplies.get(author1)}` );
console.log( `Total Replies: ${totalReplies.get(author2)}` );

totalReplies.set( author1, 42);
totalReplies.set( author2, 15);

```

Iterating maps with for.. of loop and array restructuring
```javascript
let recentPosts = new Map();

recentPosts.set( "Sam", "ES2015" );
recentPosts.set( "Tyler", "CoffeeScript" );
recentPosts.set( "Brook",  "TypeScript" );

for(let [user, postTitle] of recentPosts){
  console.log(`${user} = ${postTitle}`);
}
```

## Sets
Limitations of Arrays
Don’t enforce uniqueness of items. Duplicate entries are allowed.

Sets store unique values of any type
Use the add method to add elements to a set
Duplicate entires are ignored
Set objects are iterable so you can use them with for..or and restructuring

What is Gulp?
A build system. A toolkit to automate time consuming tasks
Compile code, run task, compile sass
Bundling source files into a single destination file
To use gulp you must have node installed
Install gulp globally
Uses the api from the gulpfile

## Promises, Iterators and Generators
Alternative to callback based code
In order to avoid blocking the main thread of execution, we write non-blocking code
Continuation passing style.
Nested callbacks make the code more complicated
Creating a New Promise Object.
Promise constructor takes and anonymous function with two callback arguments known as handles.
Resolve or reject
new Promise is automatically set to the pending state.
A promise represents a future value
Resolving a promise.
Use .then method to read results. Takes a callback function which will only be invoked once the Promise is resolved.

```javascript
export default function getReplies(topicId){
  return new Promise(function(resolve, reject){
    _getRepliesForTopic(topicId, function(data){
      let replies = data.replies;
      if(replies){
        resolve(replies);
      }else{
        let error = new Error("An error occurred");
        reject(error);
      }
    });
  });
}
```

## Iterables
Return an iterator object. This object know how to access items from a collection 1 at a time, while keeping track of its position in the sequence
For of is a use of an iterator object
Each time you call next() it returns an object with 2 specific properties. done and value;
Done is a boolean Value is set to the value returned by the iterator

```javascript
let user = {
  name: "sam", totalReplies: 17, isBlocked: false
};

user[Symbol.iterator] = function(){

  let properties = Object.keys(this);
  let count = 0;
  let isDone = false;

  let next = () => {
    if(count >= properties.length){
      isDone = true;
    }

    let value = this[properties[count++]];

    return {done: isDone,value};
  };
  return { next };
};
```

## Generators

New type of function added to JS to make it easier to work with Iterators
Generator functions are special functions from which we can use the  yield keyword to return iterator objects.
Generator functions are create with function *nameOfFunction()
You can use the yield keyword to reign iterator objects
Generator functions return objects that provide the same next method expected by for.. of, the spread operator, and destructuring assignment

Each time we call tied, our function returns a new iterator object and then pauses until its called again

function *topicList(){
  yield "ES2015";
  yield "Semi-colons: good or bad?";
  yield "TypeScript";
}

for( let topic of topicList() ){
  console.log( topic );
}


let user = {
  name: "sam", totalReplies: 17, isBlocked: false
};

user[Symbol.iterator] = function * (){

  let properties = Object.keys(this);
  let count = 0;
  let isDone = false;

  for(let p of properties){
    yield this[p];
  }
};

for(let p of user){
  console.log( p );
}

## Primitive data types
String, number, boolean, null
Null represents the absence of a value
When you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type. An instance is an individual case (or object) of a data type. You can retrieve property information by appending the string with a period and the property name:
While the length of a string is calculated when an instance is created, a string instance also has methods that calculate new information as needed. When these built-in methods are called on an instance, they perform actions that generate an output.  

Built in Methods
.toUpperCase()
.startsWith()
.trim()
Math.random()

```
console.log(Math.floor(Math.random() * 100));  
console.log(Math.ceil(43.8));   ==> 44
console.log(Number.isInteger(2017)); ==> true
```

### Variables
constant variable - create a new variable with a value that cannot change
= assigns a value to the constant
Undefined is the fish final primitive data type
JS assigned the undefined data type to variables that are not assigned a value
See maff repl.it

### String Interpolation
The JavaScript term for inserting the data saved to a variable into a string is string interpolation.
In the newest version of JavaScript (ES6) we can insert variables into strings with ease, by doing two things:
Instead of using quotes around the string, use backticks (this key is usually located on the top of your keyboard, left of the 1 key).
Wrap your variable with ${myVariable}, followed by a sentence. No +s necessary.  
```
let myName = 'Evan';
let myCity = 'Durham';
console.log(`My name is ${myName}. My favorite city is ${myCity}`);
```


There are two more useful comparisons we can make. Often, we might want to check if two things are equal to each other or if they are not.
* To check if two things equal each other, we write === (three = signs in a row).
* To check if two things do not equal each other, we write !== (an exclamation with two = signs in a row).
It can be confusing when to use one = sign and when to use three ===signs. Use a single = to assign a value to a variable. Use ===to compare the values of two different variables.

### Logical Operators
* To say "both must be true," we use &&.
* To say "either can be true," we use ||.

To deal with times when you need many else if conditions, we can turn to a switch statement to write more concise and readable code.

## Functions
Arguments are provided when you call a function, and parameters receive arguments as their value.
When we set a value as the argument we pass a value to the function. the parameter here is topping. The argument is mushrooms

```javascript
const takeOrder = (topping) => {
  console.log(`Order:pizza topped with ${topping}`);
}
takeOrder('mushrooms');

```

## Return
Using return is generally a best practice when writing functions, as it makes your code more maintainable and flexible.


## Concise body arrow functions
* Functions that take a single parameter should not use parentheses. The code will still work, but it's better practice to omit the parentheses around single parameters. However, if a function takes zero or multiple parameters, parentheses are required.
* A function composed of a sole single-line block is automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.
* A function composed of a sole single-line block does not need brackets.

## Scope
Scope refers to where a variable can be accessed in a program. While some variables can be accessed from anywhere within a program, other variables may only be available in a specific context. Scope depends entirely on where a variable is declared.

Block scope is a powerful tool in JavaScript, since it allows us to define variables with precision, and not pollute the global namespace.

## Arrays

* Arrays are lists and are a way to store data in JavaScript.
* Arrays are created with brackets [].
* Each item inside of an array is at a numbered position, starting at 0.
* We can access one item in an array using its numbered position, with syntax like: myArray[0].
* We can also change an item in an array using its numbered position, with syntax like myArray[0] = "new string";
* Arrays have a length property, which allows you to see how many items are in an array.
* Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.
* Arrays have many other methods that perform different functions, such as .slice() and .shift(). You can read the documentation for any array method on the Mozilla Developer Network website.

### Built in Methods
.shift() - Removes the first index
.unshift() - Removes the last index
.pop() - Removes the last
.push() - Adds to end of the array
.splice(indexToStart, numberOfIndices, 'stringToAdd') - Removes a range of indexes and Replaces
.slice(begin, end) - Cuts certain indexes as defined



You may recall that you can declare variables with both the let and const keywords. Variables declared with let can be reassigned.
Variables that are assigned with const cannot be reassigned. However, arrays that are declared with const remain mutable, or changeable.
This means that we can change the contents of an array, but cannot reassign the variable name to a new array or other data type.
The instructions below will illustrate this more clearly. Pay close attention to the similarities and differences between the condiments array and the utensils array as you complete the steps.

## Loops
for loops require a start condition, a stop condition, and an iterator. The iterator should bring the loop from the start condition to the stop condition.

* for loops allow us to repeat a block of code a known amount of times.
* We can use a for loop inside another for loop to compare two lists.
* while loops are for looping over a code block an unknown amount of times.
* while loops run an infinite amount of times as long as their condition remains true.
* Infinite loops occur when stop conditions are never met.


## Iterators
ForEach()  
groceries.forEach(groceryItem => console.log(' - ' + groceryItem));
fruits.forEach(frutas => console.log('I want to eat a ' + frutas));
It is an array method. It must be called upon an array.

The syntax for .map() is almost the same as the syntax for .forEach(), with one important change. Notice that directly before the function call, the code reads, let bigNumbers =. This is because .map() returns a new array with elements that have been modified by the code in its block. bigNumbers is the new array in which the method will save the values.
.map() can also be written with arrow function syntax.

```
let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
let secretMessage = animals.map(function(animal) {
  return animal[0]
})

console.log(secretMessage.join(''));

//fat arrow functions syntax
let secretMessage = animals.map(animal => animal[0]);

Another useful iterator method is .filter(). Like .map(), .filter() returns a new array. However, .filter() returns certain elements from the original array that evaluate to truthy based on conditions written in the block of the method.

let randomNumbers = [375, 200, 3.14, 7, 13, 852];

let smallNumbers =
randomNumbers.filter(function(number) {
  return number < 250;
});

let smallNumbers = randomNumbers.filter(num => num < 250);

let interestingWords = words.filter(word => word.length > 5);
```

## Objects
JavaScript objects are containers that can store data and functions. The data we store in an object is not ordered — we can only access it by calling its associated key.

Let's consider the above example one step at a time:
* let restaurant creates a variable named restaurantthat stores the object.
* We create the object between curly braces: {}.
* name, seatingCapacity, hasDineInSpecial, and entrees are all keys.
* We separate each key from its corresponding value by a colon (:).
* The value is to the right of the colon. For example, seatingCapacity's value is 120.
* Every key-value pair is separated by a comma ,.

Now that we have data in an object, we need a way to access the values. The most common way to access a key's value is to use dot notation.
Another way to access a key's value is with bracket notation.

Bracket notation outputs the same value as dot notation. You may see either of these techniques used in JavaScript programs, so it's good to be familiar with both. One advantage that bracket notation has over dot notation is that you can use variables inside the brackets to select the keys of an object.

```
let person = {
  name: 'Evan',
  age: 28
}

console.log(person['name']);
console.log(person['age']);
```

Objects are considered mutable, which means you can change them after they're created.
Even if you save an object to a const variable, you can still add to and edit the key-value pairs inside of it without causing an error.

When objects have key-function pairs, we call the function a method.

The new method syntax (see below) doesn't require arrow syntax or a colon (:) with the function keyword.
 This syntax, which only requires the name of the method and parentheses, is best practice for defining methods.

We can use the this keyword to access properties inside of the same object.

A common object design paradigm is to include getter and setter methods as attributes.

Developers use an underscore before a property name to indicate a property or value should not be modified directly by other code.

Once you've set the properties, you need a way to access them. Getters are used to get the property values inside of an object.

## Objects Summary
Objects store key-value pairs and let us represent real-world things in JavaScript.
Properties in objects are separated by commas. Key-value pairs are always separated by a colon.
A method is a function in an object.
This helps us with scope inside of object methods. this is a dynamic variable that can change depending on the object that is calling the method.
Getter and setter methods allow you to process data before accessing or setting property values.

## Classes
JavaScript is an object-oriented programming (OOP) language we can use to model real-world items.
Classes are a tool that developers use to quickly produce similar objects. Serves as a template to create a new object
JavaScript calls the constructor() method every time it creates a new instance of a class.
It sets the property values for each instance.
By convention, we capitalize and CamelCase class names.
An instance is an object that contains the property names and methods of a class, but with unique property values.
The subclass inherits all of the parent's getters, setters, and methods. You can also use the super keyword to set properties in the parent class.
The super keyword is used in subclasses to call a parent constructor
Super accepts arguments for the parent constructor()s parameters.

##Constructor method
Runs every time a new instance is created with a new operator.
Inside the contractor method is a good place to assign to instance variables that we want to use in other instance methods.
Properties or instances variables et in the contractor method can be accessed from all other instance methods in the class.
Class inheritance - Reduces Code repetition


Using Class Syntax
Object oriented code

class SponsorWidget {

	constructor(name, description, url) {
  }
	render() {
  }
}

## Modules
```javascript
let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";

module.exports = Menu;
```

let Menu = {}; creates the object that represents the module Menu. The statement contains an uppercase variable named Menu which is set equal to an object.
Menu.specialty is defined as a property of the Menu module. We add data to the Menu object by setting properties on that object, and giving the properties a value.
"Roasted Beet Burger with Mint Sauce"; is the value stored in the Menu.specialty property.
module.exports = Menu; exports the Menu object as a module. module is a variable that represents the module, and exports exposes the module as an object.
The pattern we use to export modules is thus:

Define an object to represent the module.
Add data or behavior to the module.
Export the module.
Let's create our first module.
