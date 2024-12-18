const navbar = document.querySelector(".navbar");
const closeBtn = document.querySelector("#closeBtn");
const openBtn = document.querySelector("#openBtn");

openBtn.addEventListener("click", () => {
  navbar.classList.remove("slideOut");
  navbar.classList.add("slideIn");
});
closeBtn.addEventListener("click", () => {
  navbar.classList.remove("slideIn");
  navbar.classList.add("slideOut");
});
