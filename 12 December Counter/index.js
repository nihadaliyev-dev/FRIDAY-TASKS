const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const count = document.querySelector(".count");
const reset = document.querySelector(".reset");

increment.addEventListener("click", () => {
  count.value = +count.value + 1;
});

decrement.addEventListener("click", () => {
  if (+count.value > 0) {
    count.value = +count.value - 1;
  }
});

reset.addEventListener("click", () => {
  count.value = 0;
});
