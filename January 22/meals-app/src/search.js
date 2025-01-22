import { getMeals } from "./app";
import { handleResults } from "./display";

export const setupSearch = (elem) => {
  elem.addEventListener("keydown", async (e) => {
    if (e.key == "Enter") {
      const meals = await getMeals(elem.value);
      handleResults(document.querySelector("#results"), meals);
    }
  });
};
