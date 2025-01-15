export const BASE_URL = "https://api.github.com/users";

const textInput = document.querySelector("#inputValue");
const searchBtn = document.querySelector("#submitBtn");
const output = document.querySelector("#output");
searchBtn.addEventListener("click", (e) => {
  let data = getData(textInput.value);
});

async function getData(search) {
  axios
    .get(`${BASE_URL}/${search}`)
    .then((response) => {
      console.log(response.data);
      let dataToString = JSON.stringify(response.data);
      for (let dataLetter in dataToString) {
        if (dataToString[dataLetter] == ",") {
          output.innerHTML += "<br>&emsp;";
        } else {
          output.innerHTML += dataToString[dataLetter];
        }
      }
      return response.data;
    })
    .catch((err) => {
      console.log("ERROR: " + err);
    });
}
