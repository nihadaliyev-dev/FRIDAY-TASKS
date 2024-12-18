let additionBtn = document.getElementById("addition");
let substractBtn = document.getElementById("substract");
let multiplyBtn = document.getElementById("multiply");
let divisionBtn = document.getElementById("division");
let resetBtn = document.getElementById("reset");
let output = document.querySelector(".calculator__output input");
let value1 = document.querySelector(".calculator__inputs input:nth-child(1)");
let value2 = document.querySelector(".calculator__inputs input:nth-child(2)");

additionBtn.addEventListener("click", () => {
  output.value = Number(value1.value) + Number(value2.value);
});

substractBtn.addEventListener("click", () => {
  output.value = Number(value1.value) - Number(value2.value);
});

multiplyBtn.addEventListener("click", () => {
  output.value = Number(value1.value) * Number(value2.value);
});

divisionBtn.addEventListener("click", () => {
  output.value = Number(value1.value) / Number(value2.value);
});

resetBtn.addEventListener("click", () => {
  output.value = 0;
});
