/** // Problema: Numărul de vocale
//    Scrieți o funcție care primește un șir de caractere și 
//    numără câte vocale conține șirul utilizând o buclă `while`.
//    Exemplu de input: `Salut, ma numesc Maria'`
//    Exemplu de output: `8`

const calcVowels = (text) => {
  let vowelNumber = 0;
  // const vowels = ['a', 'u', 'i', 'o', 'e', 'A', 'U', 'I', 'O', 'E'];
  const vowels = ['a', 'u', 'i', 'o', 'e'];

  // console.log(text.toLowerCase());
  // includes() - daca careva element se include sau nu in array
  let index = 0;
  while(index < text.length) {
    const characters = text[index].toLowerCase();

    if(vowels.includes(characters)) {
      vowelNumber++;
    }
    index++;
  }

  return vowelNumber;
}

const text = "Salut, sunt Ana";

// console.log(calcVowels(text));

// 9. Problema: Verificarea palindromului
//    Scrieți o funcție care primește un șir de caractere și 
//    verifică dacă acesta este un palindrom (se citește la fel în ambele sensuri) 
//    utilizând o buclă `while`.
//    Exemplu de input: `'level'`
//    Exemplu de output: `true`

// palindrom - level, Ana, sus, wow, capac, madam  

// const isPalindrome = (text) => {
//   let startIndex = 0;
//   let lastIndex = text.length - 1; //4

//   while(startIndex < lastIndex) {
//     if (text[startIndex] === text[lastIndex]) {
//       return true;
//     }
//     startIndex++;
//     lastIndex--;
//   }
//   return false;
//   // 1 iteratie l === l
//   // 2 iteratie e === e
// }

//reserve string 
const isPalindrome = (text) => {
  const characters = text.split(""); //['m', 'a', 'd', 'a', 'm']
  reversedText = characters.reverse().join(''); //['m', 'a', 'd', 'a', 'm']

  if (reversedText === text) {
    return true;
  }
  return false;
}

console.log(isPalindrome('getryj')); //true
// daca litera[0] este egal cu litera[length-1]; */

// for ... in
// const object = { a: 1, b: 2, c: 3 };

// for (const key in object) {
//   console.log(`${key}: ${object[key]}`);
// }

// // Problema: enumerati fiecare cheie + valoare a obiectului
// const keys = Object.keys(object); // scoatem cheile obiectului
// console.log(keys);

// for (let i=0; i < keys.length; i++) {
//   const key = keys[i];
//   console.log(`${key}: ${object[key]}`)
// }

// for...of
// const array1 = ['a', 'b', 'c'];

// for (const element of array1) {
//   console.log(element);
// }

// for (let i=0; i < array1.length; i++) {
//   const element = array1[i];
//   console.log(element);
// }

// Slice
// Array.slice(startIndex, endIndex);
// startIndex - indexul de la care se va incepe extragerea elementelor
// endIndex - indexul pana unde se vor extrage elementelor

// const array = ['a', 'b', 'c', 'd', 'e'];
// 'd', 'e' intersectia cu 'a', 'b', 'c', 'd' ['d']
// console.log(array.slice(-2, 4)); // ['d']

// no params in slice
// console.log(array.slice()) // Creaza o copie a array-ului
// doar startIndex 
// console.log(array.slice(2)); // Creaza un array nou de la indexul 2 inclusiv
//['c', 'd', 'e']
// daca specific startIndex si endIndex
// creaza un array de la indexul 3 inclusiv si pana la 4, fara de valoarea 4
// console.log(array.slice(3, 4)); // ['d']
// valoarea negativa la startIndex, returneaza ultimele valori
// console.log(array.slice(-2))// returneaza ultimele 2 valori in array
// ['d', 'e']
// valoarea negativa la startIndex si endIndex
// endIndex = array.length = 5
// endIndex (-2) = array.length - 2 = 3
// array2 = ['a', 'b', 'c']
// console.log(array2.slice(1, 3));
// console.log(array.slice(1, -2)); // ['b', 'c']

// slice sa scriem sub forma de for
// const sliceArray = (startIndex, endIndex) => {
//   const array = ['a', 'b', 'c', 'd', 'e'];
//   const slicedArray = [];

//   for (let i = startIndex; i < endIndex; i++) {
//     slicedArray.push(array[i]);
//   }
//   return slicedArray;
// }

// console.log(sliceArray(3, 4));

// Problem: Print Odd Numbers
// Given an array of numbers, write a function
//  that prints only the odd numbers in the array.

const numbers = [1, 2, 3, 4, 5, 6, 7];

const printOddNumber = (array) => {
  array.forEach(element => {
    if (element % 2 !== 0) {
      console.log("Odd number:" + element);
    }
  })
}

// printOddNumber(numbers);

// map 
const printOddNumber2 = (array) => {
  return array.map(element => {
    if (element % 2 !== 0) {
      return element; // pune in array-ul nou doar numerele impare
    }
  }).filter(Boolean);
}

console.log(printOddNumber2(numbers));

// Reduce 

