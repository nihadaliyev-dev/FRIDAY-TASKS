import { BASE_URL } from "./constants.js";
import { createCards } from "./index.js";

export async function getCountries(country = "") {
  if (country.length > 0) {
    try {
      const countriesResponse = await axios.get(`${country}`);
      console.log(countriesResponse);
      const countries = countriesResponse.data;
      createCards(countries);
      console.log(countries);
    } catch (error) {
      if (error.status == 404) {
        createCards([]);
      }
      console.log(error);
    }
  } else {
    try {
      const countriesResponse = await axios.get(`${BASE_URL}all`);
      const countries = countriesResponse.data;
      createCards(countries);
    } catch {
      console.log(error);
      return error;
    }
  }
}

getCountries();
