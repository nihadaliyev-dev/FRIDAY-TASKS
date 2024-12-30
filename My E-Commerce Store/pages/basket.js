import { products } from "../assets/scripts/data.js";
const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
const productsDiv = document.querySelector(".products");

function createCards(array) {
  array.forEach((product) => {
    const card = document.createElement("a");
    card.setAttribute("href", "#");
    card.className =
      "flex relative group hover:shadow-xl p-3 rounded-xl transition-all duration-300";

    const heartBtn = document.createElement("button");
    heartBtn.className = "hover:text-red-500 absolute left-4 top-4 z-20 p-2";

    const heartIcon = document.createElement("i");
    heartIcon.className =
      "fa-regular fa-heart text-xl transition-all duration-200";

    heartBtn.appendChild(heartIcon);

    const productImg = document.createElement("img");
    productImg.src = product.image;
    productImg.alt = "";
    productImg.className =
      "aspect-square w-2/12 rounded-lg p-6 object-contain group-hover:opacity-75 group-hover:p-4 xl:aspect-[7/8] duration-300";

    const productInfo = document.createElement("div");
    productInfo.className = "flex flex-col justify-between p-3";

    const productTitle = document.createElement("h3");
    productTitle.className = "mt-2 text-lg text-gray-900 line-clamp-1";
    productTitle.textContent = "Nomad Tumbler";

    const productDetails = document.createElement("p");
    productDetails.className = "mt-1 text-sm text-gray-700 line-clamp-4";

    productDetails.textContent =
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facere.";

    const priceAndQuantity = document.createElement("div");
    priceAndQuantity.className = "mt-2 flex justify-between items-center";

    const productPrice = document.createElement("p");
    productPrice.className = "text-xl font-semibold text-gray-900";
    productPrice.textContent = "$128";

    const quantityBtn = document.createElement("button");
    quantityBtn.textContent = "Quantity";

    priceAndQuantity.appendChild(productPrice);
    priceAndQuantity.appendChild(quantityBtn);

    productInfo.appendChild(productTitle);
    productInfo.appendChild(productDetails);
    productInfo.appendChild(priceAndQuantity);

    card.appendChild(heartBtn);
    card.appendChild(productImg);
    card.appendChild(productInfo);

    productsDiv.appendChild(card);
  });
}

createCards(products);
