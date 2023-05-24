// const now = 2023;
// console.log(now - 1990 > now - 2016);

// 1. now - 1990 // 33;
// 2. now - 2016 // 7;
// 3. 33 > 7 // true;

// Operator Precendence - cu cat e mai mare valoare, 
// cu atat e mai importanta opertiunea

// let z , y;

// assignment right to left
// z = y = 25 - 10 - 5;
// z = y = 10;
// console.log(z, y); // 10 10

// left-to-right
// 25 - 10 - 5;
//10;

// const ageA = 30;
// const ageB = 40;
// const averageAge = (ageA + ageB) / 2;
// 30 + 40 / 2 = 30 + 20 = 50
// 70 / 2 = 35

// If/else

// Program pentru verificarea varstei de vot

const age = 5;
const controlAge = 18;
35 >= 18; // true
const isOldEnough = age >= controlAge;

// In parantezele rotunde se pune conditia
// conditia este o expresie care returneaza true sau false
// if (isOldEnough) {
//     console.log('User can vote');
// } else {
//     const yearsLeft = controlAge - age;
//     console.log(`User cannot vote yet. Wait ${yearsLeft} years.`);
// }

// conditia else este optionala
// if (isOldEnough) {
//     console.log('User can vote');
// }

// const birthYear = 1990; // secolul 20
// let century; // undefined

// if (birthYear >= 2000) {
//     console.log('We entered if statement');
//     century = 20;
// } else {
//     console.log('We entered else statement');
//     century = 21;
// }

// console.log(`Century is ${century}`);


// Type conversion and coercion

const inputYear = '1991';


// Type conversion
const year = Number(inputYear);
const eligibleAge = 2023 - year;

const minutes = 23;
console.log(String(minutes));


// Type coercion
// Adunarea la string si number se returneaza string (concatenare)
console.log(inputYear + 18); // '1991' + '18' = 199118
// Scaderea, inmultirea si impartirea la string si number se returneaza number
console.log(inputYear - 18); // 1973

// NaN - not a number
// console.log(typeof NaN);

// examples type coercion

const message = 'I am ' + 23 + ' years old';
console.log(typeof message); // I am 23 years old

const data = '23' + 'Iuliana' - 3; // NaN
console.log(typeof data); // 23 - 10 - 3 = 10

console.log(2 + 3 + '5'); // '55' string
// 1. 2 + 3 = 5
// 2. 5 + '5' = '55'

console.log('10' - '4' - 2 + '5'); // '45' string
// 1. 10 - 4 = 6 number
// 2. 6 - 2 = 4 number
// 3. 4 + '5' = '45' string

// Putem schimba type la 3 tipuri de date: string, number, boolean

// Truthy and Falsy values
// falsy - valori care nu tocmai sunt false, dar daca sunt convertite in boolean va da false

// 5 falsy values: 0, '', undefined, null, NaN

console.log('boolean:', Boolean(100)); // false

// 0 - false
// 1 - true

let cars;

if (!cars) console.log('We should wait cars value');

// if (cars) {
//     console.log('We have cars');
// } else {
//     console.log('We should buy at least car');
// }

let height = 10;

// if (height) {
//     // if (height > 5) {
//     //     console.log('Height is bigger than 5');
//     // } else {
//     //     console.log('Height is defined, but is smaller than 5');
//     // }
// } else if () {
//     console.log('Height is undefined');
// } 

// == & ===
// === - comparatie stricta (verifica valoarea si tipul de date)
// == - loose comparation (verifica doar valoarea)

// const userAgeInput = '18';
// if (Number(userAgeInput) === 18) console.log('You just became an adult');

// Boolean logic - AND (&&), OR ( || ), NOT ( ! )

// conditia A - Ana has 18 years;
// conditia B - Ana has driving license;

// Construim un formular de angajare
// if (conditia A && conditia B) {
    // A - true si B - true 
    // pozitia de sofer
// } else {
    // A - false si B - false
    // A - true si B - false
    // A - false si B - true
    // pozitia de vanzator
// }

// if (!conditia A) console.log('Ana can not be employed');

// if (conditia A) {
//     console.log('Ana can be employed');
// } else {
//     console.log('Ana can not be employed');
// }

const laptops = 10;

// A: Noi avem mai mult de 20 de laptopuri; false 10 > 20
// B: Noi avem mai putin sau egal cu 40 de laptopuri; true 10 <= 40;

// !A - true
// !B - false
// A && B - false
// A || B - true 10 > 20 sau 10 <= 40
// !A && !B  - true && false = false
// A || B || C
