import { BASE_URL } from "./constants.js";
import { getCountries } from "./main.js";

const wrapper = document.querySelector(".cardWrapper");

export function createCards(arr) {
  if (arr.length > 0) {
    wrapper.innerHTML = "";
    arr.forEach((country) => {
      // AZE !
      if (country.capital != "Yerevan") {
        const card = document.createElement("div");

        const cardFlagDiv = document.createElement("div");
        const cardFlag = document.createElement("img");
        const cardContentMain = document.createElement("div");
        const cardContentHeader = document.createElement("div");
        const cardContentBody = document.createElement("div");

        const cardContentCapital = document.createElement("div");
        const cardContentRegion = document.createElement("div");
        const cardContentPopulation = document.createElement("div");
        cardFlag.setAttribute("src", country.flags.svg);

        cardContentHeader.textContent = `${country.name.official}`;
        cardContentCapital.textContent = `Capital: ${country.capital}`;
        cardContentRegion.textContent = `Region: ${country.region}`;
        cardContentPopulation.textContent = `Population: ${country.population}`;

        cardFlagDiv.append(cardFlag);
        cardContentBody.append(
          cardContentCapital,
          cardContentRegion,
          cardContentPopulation
        );
        cardContentMain.append(cardContentHeader, cardContentBody);

        cardFlag.className = "aspect-video object-cover shadow-sm";
        cardContentMain.className =
          "p-3 group-hover:absolute group-hover:top-0 transition-all ease-in duration-300 flex flex-col flex-col-reverse items-start justify-start group-hover:text-white group-hover:bg-[#00000080] group-hover:w-full group-hover:h-full card__content";
        cardContentBody.className = "hidden group-hover:flex flex-col";
        card.className =
          "shadow-lg dark:shadow-[#fbfbfb20] dark:hover:shadow-[#fbfbfb50] transition-all ease-in duration-300 rounded-lg overflow-hidden relative group";

        card.append(cardFlagDiv, cardContentMain);
        wrapper.append(card);

        card.addEventListener("click", (e) => {
          window.location.href = `./details.html?country=${country.name.common}`;
        });
      }
    });
  } else {
    wrapper.innerHTML = `There's no country named ${searchInput.value}`;
  }
}

const searchInput = document.querySelector("#searchInput");

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (searchInput.value.length > 0) {
      getCountries(`${BASE_URL}name/${searchInput.value}`);
    } else {
      getCountries();
    }
  }
});

const filterRegion = document.querySelector("#filterRegion");

filterRegion.addEventListener("change", (e) => {
  let selectedRegion = filterRegion.options[filterRegion.selectedIndex];
  if (selectedRegion.value !== "all") {
    getCountries(`${BASE_URL}region/${selectedRegion.value}`);
  } else {
    getCountries();
  }
});

const themeBtn = document.querySelector(".theme__toggle");
themeBtn.addEventListener("click", (e) => {
  document.className = "dark";
});
