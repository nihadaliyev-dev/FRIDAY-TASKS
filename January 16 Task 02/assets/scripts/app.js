const BASE_URL = "https://official-joke-api.appspot.com";
const endpoints = { types: "types", jokesrandom: "jokes/random" };

async function getJokeTypesAsync() {
  const response = await axios.get(`${BASE_URL}/${endpoints.types}`);
  const data = response.data;
  return data;
}

async function getJokeAsync(type) {
  const response = await axios.get(`${BASE_URL}/${endpoints.jokesrandom}`);
}

const jokeTypeSelect = document.querySelector("#jokeType");
addTypesToSelect(jokeTypeSelect);

async function addTypesToSelect(jokeTypeSelect) {
  const jokeTypes = await getJokeTypesAsync();
  console.log(jokeTypes);
  jokeTypes.forEach((joke) => {
    const jokeType = document.createElement("option");

    jokeType.setAttribute("value", joke);
    jokeType.textContent =
      joke.slice(0, 1).toLocaleUpperCase() + joke.slice(1, joke.length);
    jokeTypeSelect.append(jokeType);
  });
}

