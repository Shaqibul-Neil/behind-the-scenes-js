'use strict';

///////////////////////////////////////
// Scoping in Practice
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName} You're ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      //creating same variable with name outer scope's varriable
      const firstName = 'juneja';
      //reasiigning outer scope's varriable
      output = 'new output';
      const str = `yes millenial ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      console.log(add(5, 6));
    }
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'neil';
calcAge(1991);
*/

///////////////////////////////////////
// Hoisting and TDZ in Practice
/*
console.log(add(9, 3));
//function declaration
function add(a, b) {
  return a + b;
}

console.log(minus(9, 3));
//function expresion
const minus = function (a, b) {
  return a - b;
};
console.log(divide(9, 3));
var divide = (a, b) => a / b;

if (!numProduct) deleteShoppingCart();

var numProduct = 10;
function deleteShoppingCart() {
  console.log(`all products deleted`);
}

var x = 2;
let y = 3;
const z = 4;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

///////////////////////////////////////
// The this Keyword in Practice
// console.log(this);
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

// const neil = {
//   birthYear: 1992,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.birthYear);
//   },
// };
// neil.calcAge();

// const matilda = {
//   birthYear: 2017,
// };
// matilda.calcAge = neil.calcAge;
// matilda.calcAge();

// const f = neil.calcAge;
// f();

///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// window.firstName = 'Neil';
// const neil = {
//   firstName: 'Neil',
//   year: 1992,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//     // const self = this; //self/that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => console.log(`hey ${this.firstName}`),
// };
// neil.greet();
// neil.calcAge();
// console.log(this.firstName);

//Arguments keyword
// function add(a, b) {
//   console.log(arguments);
//   return a + b;
// }
// add(5, 7, 8, 12);
// console.log(add(5, 7));

///////////////////////////////////////
// Object References in Practice (Shallow vs. Deep Copies)

// const jessica1 = {
//   firstName: 'Jessica',
//   lastName: 'Willams',
//   age: 27,
// };

// // console.log('Before:', jessica);

// function marryPerson(originalPerson, newLastName) {
//   originalPerson.lastName = newLastName;
//   return originalPerson;
// }
// const marriageJessica1 = marryPerson(jessica1, 'Davis');
// const marriageJessica = jessica;
// marriageJessica.lastName = 'Davis';
// console.log('Before:', jessica1);
// console.log('After:', marriageJessica1);

//exactly new copy not reference
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Willams',
  age: 27,
  family: ['alice', 'bob'],
};
// const jessicaCopy = { ...jessica2 };
// jessicaCopy.lastName = 'davis';
// console.log(jessica2, jessicaCopy);
// jessicaCopy.family.push('mary', 'john');
// console.log('Before:', jessica2);
// console.log('After:', jessicaCopy);

//deep copy/clone
const jessicaClone = structuredClone(jessica2);
jessicaClone.family.push('mary', 'john');
console.log('Before:', jessica2);
console.log('After:', jessicaClone);
