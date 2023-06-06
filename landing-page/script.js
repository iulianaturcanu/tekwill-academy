"use strict";
/** 
// Creati 2 functii care calculeaza proprietatile unui cerc
// Creați o funcție numită calcCircumference:
// Transmiteți raza funcției.
// Calculați circumferința pe baza razei dupa formula: L = 2*pi*R(raza) și afișați "The circumference is NN units"

// Creați o funcție numită calcArea:

// Transmiteți raza funcției.
// Calculați aria pe baza razei  dupa formula: A = pi * R^2 și dati ca output "The area is NN square units" 
// Bonus: calculati in functia 2 aria pe baza rezultatului din functia 1 dupa formula:
// A = circumferinta ^2 / (4 *pi);


const calcCircumference = (radius) => {
  const PI = 3.14;
  const circumference = 2 * PI * radius;
  console.log(`The circumference is ${circumference} units`);
  return circumference;
}

const calcArea = (radius) => {
  const PI = 3.14;
  const area = PI * (radius ** 2);
  return console.log(`The area is ${area} square units`);
}

const calcArea2 = () => {
  const PI = 3.14;
  // const circumference = calcCircumference(4);
  const area = (calcCircumference(4) ** 2) / (4 * PI);
  return console.log(`The area is ${area} square units`);
}

calcCircumference(4);
calcArea(4);
calcArea2();

// Scrieți o funcție numită calculateDogAge care:
// are 1 argument: vârsta cățelușului tău (humanYear, dogYear, etc)
// lungimea drumului (metri, kilometri)
// calculează vârsta câinelui dvs. pe baza ratei de conversie a 1 an uman la 7 ani câine.
// afișează rezultatul pe ecran astfel: "Your doggie is NN years old in dog years!”
// Apelați funcția de trei ori cu seturi diferite de valori.
// Bonus: Adăugați un argument suplimentar la funcția care ia rata de conversie a anilor om în câine.

const calculateDogAge = (humanYears, conversionRate) => {
  const dogYears = humanYears * conversionRate;
  console.log(`Your doggie is ${dogYears} years old in dog years!`);
}

calculateDogAge(1, 10); */

// Arrays
const fruit1 = 'apple';
const fruit2 = 'orange';
const fruit3 = 'kiwi';

const fruits = ['apple', 'orange', ['kiwi', 'banana']];
console.log(Array.isArray(fruits)); // boolean, Is fruits an array?
// const years = [ 1991, 1993, 2001 ];
// 1991 - 0 
// 1993 - 1 
// 2001 - 2
// const years = new Array(1991, 1993, 2001);

// index = 0...index-ul final a array-ului
// console.log(years[2]); // elementul la pozitia 2 din array-ul years
// console.log(years[1]);
// console.log(years[0]);

// console.log(`Lungimea array-ului ${years.length} units`);
// console.log("Lungimea array-ului" + years.length + 'units');

// eu vreau elementul la pozitia (years.length - 1) din array-ul years years[3]
// afisarea ultimului element din array-ul years
// console.log(years[years.length - 2]);

// years[1] = 2400;
// years[2] = 2600;
// years[0] = 2700;

// console.log(years);

const person = ["Bob", "Smith", 30, "teacher"];
const personName = person[0];
const surname = person[1];
// console.log(`Persoana se numeste ${personName} ${surname}, are ${person[2]} ani si lucreaza in calitate de ${person[3]}`);

// Array methods

// Pentru a verifica daca anumitui element in array exista sau nu in array- includes
console.log(person.includes('Bob'));

// Pentru a returna indexul - indexOf
console.log(person.indexOf(30));

// Add elements
const friends = ["Ana", "Bob", "Steven"];
// push method - adauga un element nou la sfarsitul array-ului 
console.log(friends.push('Silvia')); // 4 
console.log(friends); // ["Ana", "Bob", "Steven", "Silvia"]
// push method returneaza lungimea noua a array-ului

// unshift method - adauga un element nou la inceputul array-ului 
console.log(friends.unshift('Tom')); // 5
console.log(friends); // ["Tom", "Ana", "Bob", "Steven", "Silvia"]

// Remove element
// pop method - sterge un element de la sfarsitul array-ului 
console.log(friends.pop()); // Silvia - returneaza elementul sters
console.log(friends); // ["Tom", "Ana", "Bob", "Steven"]

// shift method - sterge un element de la inceputul array-ului 
console.log(friends.shift()) // Tom
console.log(friends) // ["Ana", "Bob", "Steven"]

// Iteration: the for loop

// console.log('Lifting repetition 1');
// console.log('Lifting repetition 2');
// console.log('Lifting repetition 3');
// console.log('Lifting repetition 4');
// console.log('Lifting repetition 5');
// console.log('Lifting repetition 6');
console.log('---------------------');

// for loop ruleaza cat timp conditia este true
// rep = 1; 1 <= 6 - true
// rep = 2; 2 <=6 - true
// ...
// rep = 7; 7 <= 6 - false 
for(let rep = 0; rep <= 6; rep += 2) {
  console.log(`Lifting repetition ${rep}`);
}

const years = new Array(1991, 1993, 2001, 2003, 1920);

// i < years.length 
// i <= years.length -1 
// length - se incepe de la 1, years.length = 5
// index 0, 1, ..., 4
for(let i = 0; i < years.length; i++) console.log(years[i]);

console.log('-------------------')
// Reverse loop
// index 4, 3, ..., 0
console.log(years.length);
console.log(years[years.length - 1]);
for(let i = years.length - 1; i >= 0; i--) console.log(years[i]);
