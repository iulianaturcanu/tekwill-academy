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

export default createCountryContainer;