// // Syncronous code
// const executeTask = () => {
//   console.log('Begin');

//   for (let i = 0; i < 3; i++) {
//     console.log('Execute task' + i);
//   }

//   console.log('End');
// }

// // Begin,  Execute task 1, ...

// // executeTask();
// // Begin
// // Execute task0
// // Execute task1
// // Execute task2
// // End

// // Asyncronous code
// const executeTask2 = () => {
//   console.log('Begin');

//   // Asyncron
//   // Pornim timerul 2sec 
//   // loading
//   setTimeout(() => {
//     console.log('Finish asyncron task');
//   }, 2000);

//   console.log('End');
// }

// executeTask2();

// const img = document.querySelector('.vector2');
// // asyncron
// img.src = 'img/bg-appointment.png';
// img.addEventListener('load', () => {
//   img.classList.add('active');
// })
// const p = document.querySelector('.description2');
// p.style.width = '30px';

// // HTTP Request
// // 1. Get - pentru a obtie datele de la un server (backend). Nu modifciarea datele sursei
// // get /countries - primim toate datele despre countries
// // 2. Post - pentru a trimite datele de pe frontend (client side) catre un server 
// // post /note - punem in baza de date o notita noua 
// // 3. Put - pentru a face update la careva date din server
// // 4. Delete - pentru a sterge careva date de pe server
// // 5. Patch - face update la careva date. modificari mai spefice decat PUT 

// // API call - interactiunea intre software si un serviciu 
// // trimiti un reuqest catre un api endpoint si te astepti raspuns 
// // microservicii - backend
// // microservicii - frontend
// // backend - frontend

// // HTTP request - hypertext transfer protocol 
// // defineste cum se trimit si cum ele formatate 

// // api call invoca http request

// // Callback hell
// const doSomething = (callback) => {
//   setTimeout(() => {
//     callback();
//   }, 1000)
// }

// const doSomethingElse = (callback) => {
//   setTimeout(() => {
//     callback();
//   }, 1000)
// }

// const doSomethingMore = (callback) => {
//   setTimeout(() => {
//     callback();
//   }, 1000)
// }

// doSomething(() => doSomethingElse(() => doSomethingMore(()=> console.log('finish'))));

// // Promise
// // .then()
// // .catch() 

// doSomething().then(() => doSomethingElse()).then(() => doSomethingMore()).catch((errors)=>{console.log(errors)})

// async function logJSONData() {
//   const response = await fetch("http://example.com/movies.json");
//   const jsonData = await response.json();
//   console.log(jsonData);
// }

const createCountryContainer = (country) => {
  const container = document.createElement('div');
  container.className = 'country-container';
  container.id = 'country-details';

  const flagImg = document.createElement("img");
  flagImg.setAttribute('src', country.flags.png);
  flagImg.setAttribute('alt', country.flags.alt);
  container.appendChild(flagImg);

  const name = document.createElement("h2");
  name.textContent = 'Name: ' + country.name.common;
  container.appendChild(name);

  const population = document.createElement("h5");
  population.textContent = 'Population: ' + country.population;
  container.appendChild(population);

  return container;
}

const fetchData = () => {
  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countries => {
    countries.forEach(country => {
      const countriesContainer = document.getElementById('countries');
      const countryContainer = createCountryContainer(country);
      countriesContainer.appendChild(countryContainer);
    })
  })
  .catch(error => console.log(error));
}

fetchData();
