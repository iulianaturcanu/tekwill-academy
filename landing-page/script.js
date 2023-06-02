// // Functions

// // Declararea functiei
// // function logger() {
// //     // function body
// //     // console.log("welcome to our course");
// // }

// // // Call | run | invoke function

// // logger();

// // // Functia poate primi parametri(optional) si sa returneze valori inapoi

// // function fruitProcessor(kiwi, banana) {
// //     // console.log(kiwi, banana);
// //     const juice = `Juice with ${kiwi} kiwi and ${banana} bananas`;
// //     return juice;
// // }

// // fruitProcessor(5, 3);

// // // `Juice with ${kiwi} kiwi and ${banana} bananas`
// // const result = fruitProcessor(1,5); 
// // console.log(result);

// // function calculateAge(birthYear) {
// //     const date = new Date();
// //     const year = date.getFullYear();
// //     const age = year - birthYear;
// //     return console.log(`My age is: ${age}`);
// // }

// // calculateAge(1990);

// // calculatAge2(1800);

// // Functii cu o linie de cod inauntru
// // Aici se depisteaza o eroare
// // const calculatAge3 = birthYear => {
// //     console.log(birthYear); 
// //     return `My age is: ${2023 - birthYear}`;
// // }

// // calculatAge3(1700);

// // const calculatAge4 = (birthYear) => {
// //     return console.log(`My age is: ${2023 - birthYear}`);
// // };

// // calculatAge4(1600);

// // const sum = (value1, value2) => value1 + value2;

// // hardcode - a-i forta o valoare fixa 

// // Arrow function
// const calculatAge2 = (birthYear) => {
//     const date = new Date();
//     const year = date.getFullYear();
//     const age = year - birthYear;
//     return age;
// };

// const showMessage = (age, retirementAge, firstName) => {
// if (age < 67 ) {
//         return `${firstName} retires in ${retirementAge - age} years`;
//     } else {
//         return `${firstName} already retired ${age - retirementAge} years ago`;
//     }
// }

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = calculatAge2(birthYear);
//     // hardcode retirement age - it should be comming from backend
//     return showMessage(age, 67, firstName);
// }

// console.log(yearsUntilRetirement(1900, "Iuliana"));

// Scrieți o funcție numită tellFortune care:
// are 4 argumente: numărul de copii, numele partenerului, locația geografică, titlul pozitiei.
// vă arată averea pe ecran astfel: "You will be a X in Y, and married to Z with N kids.".
// Apelați acea funcție de 3 ori cu 3 valori diferite pentru argumente.

const tellFortune = (children, partner, location, jobTitle) => {
    if (partner > 20 && children > 20) {
        return `You will be a ${jobTitle} in ${location}, and married to ${partner} with ${children} kids`;
    } else if (partner && !children) {
        return `You will be a ${jobTitle} in ${location}, and married to ${partner}`;
    } else {
        return `You will be a ${jobTitle} in ${location}`;
    }
}

console.log(tellFortune(10, 'Bob', 'Australia', 'doctor'));
console.log(tellFortune( 10, undefined, 'Australia', 'doctor'));
console.log(tellFortune( undefined, 'Tom', 'Australia', 'doctor'));
