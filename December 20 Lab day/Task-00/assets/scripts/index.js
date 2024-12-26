import { products } from "./data.js";
const mainImg = document.getElementById("mainImg");

products.forEach((product) => {
  const secondaryImages = document.querySelectorAll(".images");
  secondaryImages.forEach((image, index) => {
    image.src = product.secondaryImages[index];
  });
  mainImg.src = product.mainImg;
});

const images = document.querySelectorAll(".images");
images.forEach((image) => {
  image.style.border = "none";

  image.addEventListener("mouseover", () => {
    mainImg.classList.add("slide");
    setTimeout(() => {
      mainImg.classList.remove("slide");
    }, 400);
    mainImg.src = image.src;
    image.classList.add("selected");
    image.style.border = "2px solid red";
    let selectedImage = image;
    images.forEach((img) => {
      if (img != selectedImage) {
        img.classList.remove("selected");
        img.style.border = "none";
      }
    });
  });
});
