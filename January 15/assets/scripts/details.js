const BASE_URL = "https://restcountries.com/v3.1";

const goBackBtn = document.querySelector(".goBackBtn");

goBackBtn.addEventListener("click", (e) => {
  window.history.back();
});

const country = new URLSearchParams(window.location.search).get("country");

const countryFlag = document.querySelector("#details__flag");

const countryNameHtml = document.querySelector(".details__country__name");
const countryNativeNameHtml = document.querySelector("#nativeName");
const countryPopulationHtml = document.querySelector("#population");
const countryRegionHtml = document.querySelector("#region");
const countrySubRegionHtml = document.querySelector("#subRegion");
const countryCapitalHtml = document.querySelector("#capital");
const countryDomainHtml = document.querySelector("#domain");
const countryCurrenciesHtml = document.querySelector("#currencies");
const countryLanguagesHtml = document.querySelector("#languages");

const borderCountriesHtml = document.querySelector(
  ".details__country__borderCountries"
);

async function getCountry(country) {
  const response = await axios.get(`${BASE_URL}/name/${country}`);
  const data = response.data[0];

  countryFlag.setAttribute("src", data.flags.svg);

  countryNameHtml.textContent = data.name.common;

  Object.keys(data.name.nativeName).forEach(function (key) {
    let nativeName = data.name.nativeName[key];
    countryNativeNameHtml.textContent = `${nativeName.official} - ${nativeName.common} `;
  });

  countryPopulationHtml.textContent = data.population;
  countryRegionHtml.textContent = data.region;
  countrySubRegionHtml.textContent = data.subregion;
  countryCapitalHtml.textContent = data.capital;
  countryDomainHtml.textContent = data.tld;

  Object.keys(data.currencies).forEach(function (key) {
    let currency = data.currencies[key];
    countryCurrenciesHtml.textContent += `${currency.name} (Symbol: ${currency.symbol}) `;
  });

  Object.keys(data.languages).forEach(function (key) {
    let lang = data.languages[key];
    countryLanguagesHtml.textContent += lang + " ";
  });

  data.borders.forEach((borderCountry) => {
    borderCountriesHtml.innerHTML += `<button class="bg-[#fbfbfb10] py-1 px-2 details__country__borderCountry">${borderCountry}</button> `;
  });
}

getCountry(country);
