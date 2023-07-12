// Exercițiul 1: Extrage numerele dintr-un șir de caractere
// Cerință: Să se extragă toate numerele dintr-un șir de caractere și 
// să se returneze rezultatul sub formă de array cu ajutorul la metoda match() de la string.

const string = "Azi am mers la 123 magazin și am cumpărat 4 mere.";
const regex = /\d+/g;
const numbers = string.match(regex);
 console.log(numbers)
// Exercițiul 2: Verificarea unui format de cod postal
// Cerință: Să se verifice dacă un șir de caractere reprezintă un 
// cod poștal valid format din cinci cifre.

const text = "Codurile poștale ale celor 3 orașe: 12345, 98765, 54321. Contacteaza-ne la numaril 070000000";

const regex2 = /\b[1-9]{5}\b/g;
const postalCodes = text.match(regex2);

 console.log(postalCodes)
// Exercitiul 3: Scrie regex pentru a gasi titlurile care au producerea dupa 1990. 
// Hint 19 raman pe loc, dar a 3 cifra trebuie sa fie de la 0-9 si a 2 sa fie oricare cifra

const title = "The Dark Knight (1991)";
const regex3 = /\(199[1-9]\)|\(2\d{3}\)/;
const isTitleValid = regex3.test(title);
console.log(isTitleValid);
const movies = [ 
"1 The Shawshank Redemption (1994)",
"2 The Godfather (1972)",
"3 The Godfather: Part II (1974)",
"4 Pulp Fiction (1994)",
"5 The Good, the Bad and the Ugly (1966)",
"6 The Dark Knight (2008)",
"7 12 Angry Men (1957)",
"8 Schindler's List (1993)",
"9 The Lord of the Rings: The Return of the King (2003)",
"10 Fight Club (1999)",
]

const filteredMovies = movies.filter(movie => regex3.test(movie));

console.log(filteredMovies);

// Exercitiu 4: Gaseste culorile hexadecimale din string-uri care sunt scrise in 
// format de # + 6 caractere (litere mari sau cifre)

const color = "AliceBlue #F0F8FF";
const regex4 = /\B#[A-F0-9]{6}\b/;
const isHexadecimal = regex4.test(color);

console.log(isHexadecimal)
// AntiqueWhite #FAEBD7
// Aqua #00FFFF
// Aquamarine #7FFFD4
// Azure #F0FFFF
// 12 bit:
// White #FFF
// Red #F00
// Green #0F0
// Blue #00F
