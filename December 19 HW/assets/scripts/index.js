import { products, categories } from "./data.js";

const tableBody = document.querySelector(".table__body");
const searchInput = document.querySelector("#search");
const sortSelect = document.querySelector("#sort");
const categorySelect = document.querySelector("#category");

function createTable(arr) {
  tableBody.innerHTML = "";
  arr.forEach((product) => {
    const tableRow = document.createElement("tr");

    const imageTd = document.createElement("td");
    const idTd = document.createElement("td");
    const titleTd = document.createElement("td");
    const descTd = document.createElement("td");
    const priceTd = document.createElement("td");
    const categoryTd = document.createElement("td");

    imageTd.classList.add("p-3");
    idTd.classList.add("p-3");
    titleTd.classList.add("p-3");
    descTd.classList.add("p-3");
    priceTd.classList.add("p-3");
    categoryTd.classList.add("p-3");

    const image = document.createElement("img");
    image.src = product.imageUrl;
    image.classList.add("w-32", "h-32", "object-cover", "rounded-lg");

    imageTd.appendChild(image);

    idTd.textContent = product.id;
    titleTd.textContent = product.title;
    descTd.textContent = product.description;
    priceTd.textContent = `${product.price} AZN`;
    categoryTd.textContent = product.category;

    tableRow.className =
      "bg-white bg-gray-100 hover:bg-gray-50 dark:hover:bg-gray-200 transition duration-150";
    tableRow.append(imageTd, idTd, titleTd, categoryTd, descTd, priceTd);
    tableBody.append(tableRow);
  });
}

createTable(products);

searchInput.addEventListener("keyup", (e) => {
  const searchResults = products.filter((product) => {
    return product.title
      .toLocaleLowerCase()
      .includes(e.target.value.trim().toLowerCase());
  });

  if (searchResults.length === 0) {
    tableBody.innerHTML =
      "<tr><td colspan='6' class='p-3 text-gray-700 text-center'>No results found</td></tr>";
  } else {
    createTable(searchResults);
  }
});

sortSelect.addEventListener("change", (e) => {
  let sortedProducts = null;
  switch (e.target.value) {
    case "ascPrice":
      sortedProducts = products.toSorted((a, b) => a.price - b.price);
      break;
    case "descPrice":
      sortedProducts = products.toSorted((a, b) => b.price - a.price);
      break;
    case "AtoZ":
      sortedProducts = products.toSorted((a, b) =>
        a.title.toLocaleLowerCase().localeCompare(b.title.toLocaleLowerCase())
      );
      break;
    case "ZtoA":
      sortedProducts = products.toSorted((a, b) =>
        b.title.toLocaleLowerCase().localeCompare(a.title.toLocaleLowerCase())
      );
      break;
    default:
      sortedProducts = structuredClone(products);
  }

  createTable(sortedProducts);
});

function createCategories() {
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.textContent = category.category;
    option.setAttribute("value", category.category);

    categorySelect.appendChild(option);
  });
}
createCategories();

categorySelect.addEventListener("change", (e) => {
  if (e.target.value.toLocaleLowerCase() == "all") {
    createTable(products);
    return;
  }
  const filteredProducts = products.filter((product) => {
    return (
      product.category.toLocaleLowerCase() == e.target.value.toLocaleLowerCase()
    );
  });

  createTable(filteredProducts);
});
