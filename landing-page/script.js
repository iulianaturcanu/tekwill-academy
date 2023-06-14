// // 1. Sintaxa
// // function sum(a, b) {
// //   return a+b;
// // }

// // const sum = function(a, b) {
// //   return a+b;
// // }

// // const sum = (a, b) => {
// //   return a + b;
// // }

// // 2. Contextul 'this'
// const person = {
//   name: 'Tom',
//   greet: function() {
//     console.log(this);
//     return console.log('Salut, ma numesc ' + this.name);
//   }
// }

// // console.log(person.greet());

// //Gresit 
// // const person2 = {
// //   name: 'Ana',
// //   greet: () => {
// //     console.log(this);
// //     console.log('Salut, ma numesc ' + this.name);
// //   }
// // }

// // const person2 = {
// //   name: 'Ana',
// //   greet: (personName) => {
// //     // const name = 'Ana';
// //     console.log('Salut, ma numesc ' + personName);
// //   }
// // }

// // person2.greet(person2.name);

// // // 3. Constructor objects
// // function Person(name, age) {
// //   this.name = name;
// //   this.age = age;
// // }

// // const american = new Person('Tom', 30);

// // const Person2 = (name, age) => {
// //   this.name = name;
// //   this.age = age;
// // }

// // const american2 = new Person2('Ana', 40);

// // 4. metoda arguments
// function sum2() {
//   // console.log(arguments.length)
//   // let total = 0;
//   // for (let i = 0; i < arguments.length; i++) {
//   //   total += arguments[i];
//   // }
//   // arguments - array-like object
//   const args = [...arguments];
//   const total = args.reduce((total, number) => total + number);
//   return total;
//   // return arguments.reduce((total, number) => total + number);
// }

// const sum = (...numbers) => {
//   // ...numbers egal cu [numbers]
//   return numbers.reduce((total, number) => total + number);
// }
// console.log(sum2(1, 2, 3, 4, 5)); // []

// Problemă 2: Găsește cel mai lung cuvânt într-un string
// Scrie o funcție care primește un string și returnează cel mai lung cuvânt din acel string.

const findTheLongestWord = (str) => {
  let theLongestWord = ''; // 100% string
  const words = str.split(' '); // ["Today", ...]
  for (const word of words) {
    // word: ''
    console.log({word});
    // console.log('word: ' + word);
    if (word.length > theLongestWord.length) {
      theLongestWord = word;
    }
  }

  return theLongestWord;
}

console.log(findTheLongestWord('Today is a beautiful day'));

const path = '127.0.0.1:5501/landing-page/index.html';
const paths = path.split('/');

// Gasirea celui mai mare numar dintr-un array
const findTheBiggestNumber = (array) => {
  // Math.max(1, 2, 3, 4, 5)
  // return Math.max(...array);
  // Presupunem ca primul element din array este cel mai mare
  let theBiggestNumber = array[0];

  for (let i = 1; i < array.length; i++) {
    if(array[i] > theBiggestNumber) {
      theBiggestNumber = array[i];
    }
  }

  return theBiggestNumber;
}

// Concatinarea la 2 array-uri

const concatinateArrays = (array1, array2) => {
  // [1, 2, 3, 4, 5, 6]
  return array1.push(...array2);
  // const [...rest] = array1;
  // const [...rest2] = array2;
  // [rest, rest2]
  // return [...array1, ...array2];
}

// const array1 = [1, 2, 3, 4];
// const array2 = [5, 6];

// Problemă 5: Calcularea sumei și diferenței a două numere
// Scrie o funcție care primește un obiect destructurat cu proprietățile a și b
// și returnează un alt obiect care conține suma și diferența acestor două numere.

// // const person2 = {
// //   name: 'Ana',
// //   greet: (personName) => {
// //     // const name = 'Ana';
// //     return console.log('Salut, ma numesc ' + personName);
// //   }
// // }

// // person2.greet();

const calculateSumAndDiff = (input) => {
  const {a, b} = input;
  return {
    sum: a+b,
    diff: a-b
  }
}
const object = calculateSumAndDiff({a: 4, b: 14}) // output object cu 2 key: sum si diff
const input = {a: 4, b: 14}
console.log(calculateSumAndDiff(input));

// Problemă 2: Inversarea literei mari cu cea mică
// Scrie o funcție care primește un string și 
// inversează literele mari cu cele mici și viceversa.

const inverseLetters = (str) => {
  let inversedStr = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // H, H este egal cu H (.toUpperCase())
    if(char === char.toUpperCase()) {
      //1. H
      //2. e
      //n !
      inversedStr += char.toLowerCase();
    } else {
      inversedStr += char.toUpperCase();
    }
  }

  return inversedStr; // !
}

console.log(inverseLetters('Hello word!'));