function clearElement(element) {
  while (element.children.length !== 0) {
    element.firstChild.remove();
  }
  return element;
}

function noCountries() {
  let p = document.createElement("p");
  p.classList.add("no-countries-answer");
  p.textContent =
    "Your request did not return any country. Check out your input for mistakes.";
  return p;
}

function createConutryBlock(country) {
  let countryContainer = document.createElement("div");
  countryContainer.classList.add("country-container");
  let name = document.createElement("h3");
  name.classList.add("country-name");
  name.textContent = country.name;
  let capital = document.createElement("h4");
  capital.classList.add("country-capital");
  capital.textContent = country.capital;
  let area = document.createElement("h4");
  area.classList.add("country-area");
  area.textContent = country.area;
  let region = document.createElement("h4");
  region.classList.add("country-region");
  region.textContent = country.region;
  let flag = document.createElement("div");
  flag.classList.add("country-flag");
  let img = document.createElement("img");
  img.src = country.flag;
  flag.appendChild(img);
  countryContainer.appendChild(name);
  countryContainer.appendChild(capital);
  countryContainer.appendChild(area);
  countryContainer.appendChild(region);
  countryContainer.appendChild(flag);
  return countryContainer;
}
