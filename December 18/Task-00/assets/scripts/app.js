const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = `rgb(${Math.random() * 256},${
    Math.random() * 256
  },${Math.random() * 256})`;
});
