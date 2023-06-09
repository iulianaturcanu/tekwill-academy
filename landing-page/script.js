/**
// 7. Declarați un array numit `numbers` cu următoarele elemente: 1, 2, 3, 4, 5.
//    - Utilizați o buclă `for` pentru a calcula suma tuturor elementelor din array.
//    - Afișați suma în consolă.

const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.length); // 5
// i 0, 1, 2, 3, 4  [0, 5)

let sum = 0;
for(let i = 0; i < numbers.length; i++) {
  // orice variabila declarata inauntru la block {} cu const, 
  // ea nu poate fi accesata inafara block-ului
  // console.log(numbers[i]); // 1,2,3,4,5
  sum = sum + numbers[i]; // sum += numbers[i]
  // console.log(sum);
}
// console.log(sum); 



// 8. Declarați un array numit `names` cu următoarele elemente: "John", "Jane", "Mike", "Anna".
//    - Utilizați o buclă `for` pentru a crea un nou array care conține lungimea fiecărui nume din array-ul `names`.
//    - Afișați noul array rezultat în consolă.

const names = ["Jo", "Jan", "Mike", "Annaaa"];
let result = [];

for( let i = 0; i < names.length; i++) {
  // console.log(names[i].length); // 2, 3, 4, 6
  // result = [2, 3, 4, 6];
  result[i] = names[i].length;
  // result.push(names[i].length);
  // console.log(result);
  // 1 iteratie [] [2]
  // 2 iteratie [2] [2, 3]
}

console.log(result); */

const person = ['Tom', 'Smith', 30, 'developer', ["Ana", "John"]];

person[2] // 100% ca aici este age
// obiectul - mai multe perechi key-value
const person2 = {
  firstName: 'Tom',
  lastName: 'Smith',
  age: 30,
  jobTitle: 'developer',
  friends: ["Ana", "John"],
  calcBirthYear: (age) => {
    const year = (new Date).getFullYear();
    return year - age;
  }
}

person2.calcBirthYear(10);
person2["calcBirthYear"](10);

// Ordinea de scriere a elementelor conteaza in array, dar in obiect nu

// Dot Notation
// console.log(person2.jobTitle);

//Braket ['']
// console.log(person2["firstName"]);
// console.log(person2["lastName"]);

const nameKey = 'Name';

// console.log(person2['first' + nameKey]);
// console.log(person2['last' + nameKey]);

// const interestedInInput = prompt(`What do you want to know about the person? Choose between ${Object.keys(person2)}`);
// interestedInInput = "age";
// console.log(person2.interestedInInput) // undefined - cauta key interestedInInput in obiectul person2

// if (person2[interestedInInput]) {
//   console.log(person2[interestedInInput]) // 30 - cauta key age in obiectyl person2
// } else {
//   console.log(`${interestedInInput}`); //age
// }

// person2.location = 'Portugal';
// person2['age'] = 24;
// console.log(person2);

//While loop

// for (declaram variabila, conditia, incrementarea)
for ( let rep = 1; rep <= 10; rep ++) {
  console.log(rep);
}

let rep = 1;
// infinite loop - conditia mereu e true
while (rep <= 10) {
  console.log(rep);
  rep++;
}

// roll a dice until 6 is shown - 100 aruncam spre exemplu

//Math.random() * 6; // 0 ... < 6 
// (Math.random() * 6) + 1 // 1 ,2.4356437,..., < 6
let dice = Math.floor((Math.random() * 6) + 1); // 1, 2, 3, 4, 5, 6
// while (dice !== 6 ) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.floor((Math.random() * 6) + 1)
//   if (dice === 6) console.log('loop is about to end');
// }

// Problema: Calculul mediei
// Scrieți o funcție care primește un obiect care conține notele unui student și returnează media acestuia.
// Exemplu de input: { nota1: 8, nota2: 7, nota3: 9 } [8, 7, 9]
// Exemplu de output: 8

function numaraCaractere(text: string, caracter: string) {
  let count = 0;
  let index = 0;

  while (index < text.length) {
    if (text[index] === caracter) {
      console.log(text[index])
      count++;
    }
    index++;
  }

  return count;
}

