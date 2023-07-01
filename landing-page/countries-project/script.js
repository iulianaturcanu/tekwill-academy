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

  if (country.currencies) {
    const currencyKeys = Object.keys(country.currencies);
    const currencyCode = currencyKeys[0];
    const currency = country.currencies[currencyCode];
    const currencyElement = document.createElement("p");
    currencyElement.textContent = `Currency: ${currencyCode} - ${currency.name} (${currency.symbol})`;
    container.appendChild(currencyElement);
  }
  if (country.capital) {
    const capital = document.createElement("p");
    capital.textContent = "Capital: " + country.capital[0];
    container.appendChild(capital);
  }

  const continent = document.createElement("p");
  continent.textContent = "Continent: " + country.continents[0];
  container.appendChild(continent);

  return container;
}

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
  } else {
    fetchData();
  }
});

searchButton.addEventListener('keydown', (event) => {
  console.log('Key:' + event.key);
  if (event.key === 'Enter') {
    event.preventDefault();
    searchButton.click();
  }
});

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

window.addEventListener('load', () => {
  const image = document.querySelector('.country-container img');
  animateElement(image, 100);
})
