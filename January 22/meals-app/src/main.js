import "./style.css";
import { setupSearch } from "./search.js";

document.querySelector("#app").innerHTML = `
  <div class="container">
    <div class="flex flex-col gap-5 main">
      <div class="flex flex-col gap-3 main__header">
        <h3 class="text-2xl font-bold">Find Meals For Your Ingredients</h3>
        <p>Real food doesn't have ingredients, real food is ingredients</p>
        <p class="italic">- Jamie Oliver</p>
      </div>
      <div class="main__search"><input class="rounded-xl py-2 px-3" id="search" type="text" /></div>
      <div class="flex flex-col gap-5 main__results">
        <div class="text-2xl font-bold main__results__header">Your Search Results:</div>
        <div class="grid gap-3 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 main__results__body" id="results"></div>
      </div>
    </div>
  </div>
    
`;

setupSearch(document.querySelector("#search"));
