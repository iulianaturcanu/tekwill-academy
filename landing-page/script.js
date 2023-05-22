/* // variable - firstName, valoare - 'Anna'
// atribuit valoarea Anna catre variabila firstName
let firstName = 'Anna';
// console.log(firstName);

// camelCase - firstNamePerson
// firstName = 'Bob';

// Variabilele nu se pot incepe cu cifre
let years = 3;

// Ce se poate contine in variabile:
// - litere
// - cifre
// - simbolul dolarului $
// - simbolul underscore _

let first_name = 'Anna';
// console.log(first_name);
 
let ana_bob = 'Ana si Bob';

// Constantele fixe - se scriu cu majuscule (uppercase)
// UPPER_SNAKE_CASE
let MAX_WIDTH = 100;
let DAYS_UNTIL_TOMMOROW = 1;

// Reserverd keywords - cuvinte rezervate - 
// nu pot fi folosite ca nume de variabile
// let new = 'new';

// Primitive Data Types
// string - sir de caractere (text), "", '', ``
let message = 'Hello World!';
let message2 = "Hello World!";
let message3 = `${message2} said Anna.`; 
// number - numere intregi, zecimale, negative, pozitive
let age = 30;
// console.log(age);
// boolean - true, false (valori logice)
let isOnline = true;
// console.log(isOnline);
// undefined - valoarea unei variabile care nu a fost definita
// valoarea variabilei este goala
let nameOfUser;
// console.log(nameOfUser);
// null - valoarea unei variabile care a fost definita
let nameOfUser2 = null;

// typeof - returnarea tipului de date a unei variabile
console.log(typeof message);
console.log(typeof age);
console.log(typeof isOnline);
console.log(typeof nameOfUser);
// javascript bug - typeof null returneaza 'object'
console.log(typeof nameOfUser2); */

// Dynamic Typing - schimba tipizarea la variabila
// variabilele - nu pot avea type, type este la valoare
/* let nameOfUser = 'Anna';
console.log(typeof nameOfUser);

nameOfUser = 30;
console.log(typeof nameOfUser);

// Reassign 
let age = 30;

age = 31;

let message = null;

if (message === null) {
    // logica
    console.log('Message is null');
} else {
    console.log('Message is not null');
}

if (message === null) console.log('Message is null');
else console.log('Message is not null');

// var, let, const 
// var - variabila mai veche si nu prea este folosita
// let - variabila care poate fi reassignata
let firstName = 'Anna';
firstName = 'Bob';
// const - variabila care nu poate fi reassignata
const lastName = 'Smith';
// lastName = 'Doe'; - eroare */

// Mathemathical Operators
// +, -, *, /, %, ** - puterea 
const firstName = 'Anna';
const lastName = 'Smith';
const emptySpace = ' ';
const fullName = firstName + emptySpace + lastName;
// Concatenare - adaugarea unui string la alt string
// console.log(fullName);

// ** - ridicarea la putere
// 3^4 = 3**4 = 3*3*3*3 = 81
// console.log(3**3);

// % - modulo - restul impartirii
// 5 / 2 = 2 rest 1
// console.log(5 % 2);

// = assign operator
let x = 5 + 10;
// x = 15;
// +=
x += 10; // x = x + 10;
console.log(x); //25

// -=
x -= 10; // x = x - 10;
console.log(x); // 15

// *=
x *= 10; // x = x * 10;
console.log(x); // 150

// /=
x /= 10; // x = x / 10;
console.log(x); // 15

// ++ - incrementare cu 1
x++; // x = x + 1;
// for (let i = 0; i < 10; i++) {console.log('hello')}

// -- - decrementare cu 1
x--; // x = x - 1;

// Comparison Operators
// >, <, >=, <=, ==, ===, !=, !==
const comparisonVariable = 15 > 10; // boolean
console.log(typeof comparisonVariable); // false - boolean

console.log(5 <= 5); // true

// == - verifica doar valoarea
const age = 5;
const age2 = '5';
console.log(typeof age == typeof age2); // false

// === - verifica valoarea si tipul de date
console.log(age === age2); // false

// != - arata negarea (verifica doar valoarea)
age == age2; // true
// asa-i ca 5 nu este egal cu 5?
console.log(age != age2); // false

// !== - verifica valoarea si tipul de date
age === age2 // false
// asa-i ca 5 (number) nu este egal cu 5 (string)?
console.log(age !== age2); // true

// Negation !
// if (!data) return loading();