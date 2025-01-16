const BASE_URL = "https://official-joke-api.appspot.com/jokes/random";

const generateBtn = document.querySelector("#generateBtn");

const jokeText = document.querySelector("#jokeText");
const jokeAnswer = document.querySelector("#jokeAnswer");

async function getJokeAsync() {
  try {
    const response = await axios.get(`${BASE_URL}`);
    const joke = response.data;
    return joke;
  } catch (error) {
    console.log(error);
  }
}

let emojis = document.querySelectorAll(".emojis");

function makeJoke(joke) {
  jokeText.innerHTML = "";
  jokeAnswer.classList.remove("visibleAnimation");

  let jokeTextWords = joke.setup.split(" ");
  let lastIndex = 0;
  jokeTextWords.forEach((jokeTextWord) => {
    jokeText.innerHTML += `<span class="jokeWord">${jokeTextWord}</span> `;
    let jokeWordSpans = document.querySelectorAll(".jokeWord");
    lastIndex = jokeWordSpans.length + 1;
    jokeWordSpans.forEach((jokeWordSpan, i) => {
      setTimeout(() => {
        jokeWordSpan.classList.add("visibleAnimation");
      }, i * 300);
    });
  });
  jokeAnswer.textContent = joke.punchline;
  setTimeout(() => {
    jokeAnswer.classList.add("visibleAnimation");
    emojis.forEach((emoji) => {
      console.log(emoji);
      emoji.style.left = `${Math.random() * 100}%`;
    });
  }, lastIndex * 300);
}

generateBtn.addEventListener("click", async (e) => {
  const joke = await getJokeAsync();
  makeJoke(joke);
});
