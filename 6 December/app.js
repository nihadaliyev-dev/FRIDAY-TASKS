const restCountries = "https://restcountries.com/v3.1/all";

const countryNames = () => {
  fetch(restCountries)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      let sortedCountries = [...data].sort((a, b) =>
        a.name.official.localeCompare(b.name.official)
      );
      let firstLetters = {};
      data.forEach((sortedCountry) => {
        let firstLetter = sortedCountry.name.common[0].toUpperCase();
        let countStartsWith = countOfLetter(data, firstLetter);
        firstLetters[`${firstLetter}`] = countStartsWith;
      });
      console.log(firstLetters);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

const countOfLetter = (arr, letter) => {
  let count = 0;
  arr.forEach((element) => {
    if (element.name.common[0] == letter) {
      count++;
    }
  });
  return count;
};
countryNames();



// Yeni array çıxsın arrayin daxilində obyektlər olsun hərflərə uyğun ölkə sayı
