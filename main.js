const contentContainer = document.querySelector(".content");
const form = document.querySelector(".form-group");
const countryInput = document.querySelector("#country-input");
let countriesData;

function getData(countryInput) {
  fetch(`https://restcountries.eu/rest/v2/name/${countryInput}`)
    .then(data => data.json())
    .then(data => {
      countriesData = data;
      renderData(countriesData);
    })
    .catch(err => console.log(err));
}

function renderData(countriesData) {
  clearElement(contentContainer);
  if (countriesData.status === 404) {
    contentContainer.appendChild(noCountries());
  } else {
    let output = countriesData.map(country => {
      return createConutryBlock(country);
    });
    output.forEach(item => {
      contentContainer.appendChild(item);
    });
  }
}

function getFormInput(e) {
  e.preventDefault();
  getData(countryInput.value);
}

form.addEventListener("submit", getFormInput);
