const increaseBtn = document.getElementById("sizeIncrease");
const decreaseBtn = document.getElementById("sizeDecrease");
const colorInput = document.getElementById("colorInput");
const colorApply = document.getElementById("colorApply");

const content = document.getElementById("content");

let size = 16;

increaseBtn.addEventListener("click", () => {
  content.style.fontSize = `${(size += 2)}px`;
});

decreaseBtn.addEventListener("click", () => {
  content.style.fontSize = `${(size -= 2)}px`;
});

colorApply.addEventListener("click", () => {
  content.style.color = colorInput.value;
});
