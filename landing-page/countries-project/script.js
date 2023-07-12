import { ENTER_KEY} from './search.js';
import createCountryContainer from './createCountryContainer.js';
import  './regex.js';

let countriesList = [];

const fetchData = () => {
  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countries => {
    countriesList = countries;
    countries.forEach(country => {
      const countriesContainer = document.getElementById('countries');
      const countryContainer = createCountryContainer(country);
      countriesContainer.appendChild(countryContainer);
    })
  })
  .catch(error => console.log(error));
}

fetchData();

// Sort options
const SortOptions = {
  NAME: 'name',
  POPULATION: 'population',
  AREA: 'area',
  CURRENCY: 'currency'
};

// Sort countries based on the selected parameter
const sortCountries = (sortParam) => {
  console.log(countriesList)
  switch (sortParam) {
    case SortOptions.POPULATION:
      return countriesList.sort((a, b) => {
        console.log(a);
        return b.population - a.population}
        );
    case SortOptions.AREA:
      return countriesList.sort((a, b) => b.area - a.area);
    case SortOptions.CURRENCY:
      return countriesList.sort((a, b) => {
        if(a.currencies && b.currencies) {
          const currencyCodeA = Object.keys(a.currencies)[0];
          const currencyCodeB = Object.keys(b.currencies)[0];
          return currencyCodeA.localeCompare(currencyCodeB);
        }
      });
    case SortOptions.NAME:
    default:
      return countriesList.sort((a, b) => a.name.common.localeCompare(b.name.common));
  }
};

// Function to update the countries container with sorted countries
const updateCountries = (sortParam) => {
  // if (typeof sortParam === String) {
    const countriesContainer = document.getElementById('countries');
    countriesContainer.innerHTML = ''; // Clear existing country containers
  
    const sortedCountries = sortCountries(sortParam);
    sortedCountries.forEach(country => {
      const countryContainer = createCountryContainer(country);
      countriesContainer.appendChild(countryContainer);
    });
  // }
};

// Get sort select element and add event listener
const sortSelect = document.getElementById('sort-select');
sortSelect.addEventListener('change', () => {
  const sortParam = sortSelect.value;
  updateCountries(sortParam);
});

// sortSelect.addEventListener('keydown', (event) => {
//   if (event.key === ENTER_KEY) {
//     event.preventDefault();
//     updateCountries(sortParam);
//   }
// });

const toggleMenu = () => {
    const menuToggle = document.querySelector('.dropdown');
    menuToggle.classList.toggle('closed');
}

const animateElement = (element, duration) => {
  let position = 0;
  // distanta totala de miscare in pixeli
  const distance = 100;
  const step = distance / duration; // 10px

  // 0 10 20 30 ... 100
  const move = () => {
    position += step;
    element.style.transform = `translateX(${position}px)`;
    if (position < distance) {
      setTimeout(move, 10);
    }
  }

  move();
};

// window.addEventListener('load', () => {
//   const image = document.querySelector('.country-container img');
//   animateElement(image, 100);
// })

window.toggleMenu=toggleMenu;
window.fetchData=fetchData;

