import createCountryContainer from './createCountryContainer.js';

export const ENTER_KEY = 'Enter';

const searchCountry = (searchName) => {
  const url = `https://restcountries.com/v3.1/name/${searchName}`;
  fetch(url)
    .then(response => response.json())
    .then(countries => {
      const countriesContainer = document.getElementById('countries');
      countriesContainer.innerHTML = ''; // Clear existing country containers
      countries.forEach(country => {
        const countryContainer = createCountryContainer(country);
        countriesContainer.appendChild(countryContainer);
      });
    })
    .catch(error => console.log(error));
}

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () => {
  const searchInput = document.getElementById('search-input');
  const searchName = searchInput.value.trim();
  if (searchName !== '') {
    searchCountry(searchName);
  }
});

searchButton.addEventListener('keydown', (event) => {
  console.log('Key:' + event.key);
  if (event.key === ENTER_KEY) {
    event.preventDefault();
    searchButton.click();
  }
});

//NPM - node package manager