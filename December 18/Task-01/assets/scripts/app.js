const incrementBtn = document.querySelector(".incrementBtn");
const decrementBtn = document.querySelector(".decrementBtn");
const resetBtn = document.querySelector(".resetBtn");
const valueInput = document.querySelector(".valueInput");
const addValueBtn = document.querySelector(".addValueBtn");
const valueOutput = document.querySelector(".valueOutput");

let count = 0;
incrementBtn.addEventListener("click", () => {
  valueOutput.textContent = `Count: ${(count += 1)}`;
});

decrementBtn.addEventListener("click", () => {
  valueOutput.textContent = `Count: ${(count -= 1)}`;
});

resetBtn.addEventListener("click", () => {
  valueOutput.textContent = `Count: ${(count = 0)}`;
});

addValueBtn.addEventListener("click", () => {
  valueOutput.textContent = `Count: ${(count += +valueInput.value)}`;
});
