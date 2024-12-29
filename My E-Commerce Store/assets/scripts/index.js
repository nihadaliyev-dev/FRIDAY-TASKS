import { products } from "./data.js";

const productsMain = document.querySelector(".products");

const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// const createCards = () => {
//   products.forEach((product) => {
//     const card = document.createElement("a");
//     const addFavoritesBtn = document.createElement("button");
//     const productImg = document.createElement("img");
//     const productTitle = document.createElement("h3");
//     const productDetails = document.createElement("p");

//     const priceAndQuantity = document.createElement("div");
//     const productPrice = document.createElement("p");
//     // const quantity = document.createElement("button");

//     const addToCartBtn = document.createAttribute("button");

//     card.setAttribute("href", "#");
//     card.classList.add(
//       "overflow-hidden",
//       "bg-white",
//       "relative",
//       "group",
//       "hover:shadow-xl",
//       "p-3",
//       "pb-11",
//       "rounded-xl",
//       "transition",
//       "duration-300"
//     );

//     addFavoritesBtn.setAttribute("id", "addToFavoritesBtn");
//     addFavoritesBtn.classList.add(
//       "hover:text-red-500",
//       "absolute",
//       "right-6",
//       "top-6",
//       "z-20",
//       "p-2"
//     );

//     const heartIcon = document.createElement("i");
//     heartIcon.classList.add(
//       "fa-regular",
//       "fa-heart",
//       "text-xl",
//       "transition-all",
//       "duration-200"
//     );
//     addFavoritesBtn.appendChild(heartIcon);

//     productImg.src =
//       "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg";
//     productImg.alt = "";
//     productImg.classList.add(
//       "aspect-square",
//       "w-full",
//       "rounded-lg",
//       "bg-gray-200",
//       "object-cover",
//       "group-hover:opacity-75",
//       "xl:aspect-[7/8]",
//       "duration-300"
//     );

//     productTitle.classList.add(
//       "mt-2",
//       "text-lg",
//       "text-gray-900",
//       "line-clamp-1"
//     );
//     productTitle.textContent = product.title;

//     productDetails.classList.add(
//       "mt-1",
//       "text-sm",
//       "text-gray-700",
//       "line-clamp-2"
//     );
//     productDetails.textContent = product.description;

//     priceAndQuantity.classList.add(
//       "mt-2",
//       "flex",
//       "justify-between",
//       "items-center"
//     );

//     productPrice.classList.add("text-xl", "font-semibold", "text-gray-900");
//     productPrice.textContent = `$${product.price}`;

//     // quantity.classList.add("bg-gray-200", "rounded-lg", "px-3", "py-1.5", "text-gray-700");

//     addToCartBtn.classList.add(
//       "absolute",
//       "opacity-0",
//       "group-hover:bottom-0",
//       "group-hover:opacity-100",
//       "duration-300",
//       "bottom-10",
//       "left-0",
//       "rounded-b-md",
//       "bg-black",
//       "w-full",
//       "px-3",
//       "py-1.5",
//       "text-white"
//     );
//     addToCartBtn.textContent = "Add to Cart";

//     card.appendChild(addFavoritesBtn);
//     card.appendChild(productImg);
//     card.appendChild(productTitle);
//     card.appendChild(productDetails);
//     card.appendChild(priceAndQuantity);
//     priceAndQuantity.appendChild(productPrice);
//     // priceAndQuantity.appendChild(quantity);
//     priceAndQuantity.appendChild(addToCartBtn);
//     productsMain.appendChild(card);
//   });
// };
function createCards() {
  products.forEach((product) => {
    const card = document.createElement("a");
    card.className =
      "overflow-hidden bg-white relative group hover:shadow-xl p-3 pb-11 rounded-xl transition duration-300";

    const addFavoritesBtn = document.createElement("button");
    addFavoritesBtn.className =
      "hover:text-red-500 absolute right-6 top-6 z-20 p-2";

    addFavoritesBtn.innerHTML = `<i class="fa-regular fa-heart text-xl transition-all duration-200"></i>`;

    if (favorites.includes(product.id)) {
      addFavoritesBtn.classList.add("text-red-500");
      addFavoritesBtn.innerHTML = `<i class="fa-solid fa-heart text-xl transition-all duration-200"></i>`;
    } else {
      addFavoritesBtn.innerHTML = `<i class="fa-regular fa-heart text-xl transition-all duration-200"></i>`;
    }

    const productImg = document.createElement("img");
    productImg.className =
      "aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] duration-300";
    productImg.alt = "";
    productImg.src = product.image;

    const productTitle = document.createElement("h3");
    productTitle.className = "mt-2 text-lg text-gray-900 line-clamp-1";
    productTitle.textContent = product.title;

    const productDetails = document.createElement("p");
    productDetails.className = "mt-1 text-sm text-gray-700 line-clamp-2";
    productDetails.textContent = product.description;

    const priceAndQuantity = document.createElement("div");
    priceAndQuantity.className = "mt-2 flex justify-between items-center";

    const productPrice = document.createElement("p");
    productPrice.className = "text-xl font-semibold text-gray-900";
    productPrice.textContent = `$${product.price}`;

    // const quantity = document.createElement("p");
    // quantity.className = "bg-gray-200 rounded-lg px-3 py-1.5 text-gray-700";

    const addToCartBtn = document.createElement("button");
    addToCartBtn.className =
      "absolute opacity-0 group-hover:bottom-0 group-hover:opacity-100 duration-300 bottom-10 left-0 rounded-b-md bg-black w-full px-3 py-1.5 text-white";
    addToCartBtn.textContent = "Add to Cart";

    card.appendChild(addFavoritesBtn);
    card.appendChild(productImg);
    card.appendChild(productTitle);
    card.appendChild(productDetails);
    card.appendChild(priceAndQuantity);
    priceAndQuantity.appendChild(productPrice);
    // priceAndQuantity.appendChild(quantity);
    priceAndQuantity.appendChild(addToCartBtn);
    productsMain.appendChild(card);

    addFavoritesBtn.addEventListener("click", () => {
      let heartIcon = addFavoritesBtn.querySelector("i");
      const index = favorites.findIndex(
        (productId) => productId === product.id
      );
      if (index === -1) {
        favorites.push(product.id);
        heartIcon.classList.replace("fa-regular", "fa-solid");
        addFavoritesBtn.classList.add("text-red-500");
      } else {
        favorites.splice(index, 1);
        heartIcon.classList.replace("fa-solid", "fa-regular");
        addFavoritesBtn.classList.remove("text-red-500");
      }
      console.log(favorites);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    });
  });
}
createCards();
