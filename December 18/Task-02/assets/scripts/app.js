const guess = document.querySelector(".guess");
const guessBtn = document.querySelector(".guessBtn");
const resetBtn = document.querySelector(".resetBtn");

const response = document.querySelector(".response");
const attempts = document.querySelector(".attempts");

const newNumber = () => {
  return parseInt(Math.random() * 100 + 1);
};
let number = newNumber();

let attemptCount = 0;
guessBtn.addEventListener("click", () => {
  if (+guess.value <= 100 && +guess.value >= 0) {
    if (+guess.value === +number) {
      response.style.color = "green";
      response.textContent = `You found the number!(${number})`;
      attemptCount = 0;
      number = newNumber();
      attempts.textContent = `Attempts: ${attemptCount}`;
    } else if (+guess.value < +number) {
      response.textContent = `Too low! Try again.`;
      attemptCount++;
      attempts.textContent = `Attempts: ${attemptCount}`;
      response.style.color = "red";
    } else if (+guess.value > +number) {
      response.textContent = `Too high! Try again.`;
      attemptCount++;
      attempts.textContent = `Attempts: ${attemptCount}`;
      response.style.color = "red";
    }
  } else {
    response.textContent = "Write number between [0-100]";
  }
});
resetBtn.addEventListener("click", () => {
  number = newNumber();
  guess.value = "";
  attemptCount = 0;
  attempts.textContent = `Attempts: ${attemptCount}`;
  response.style.color = `blue`;
  response.textContent = `Enter your guess!`;
});
