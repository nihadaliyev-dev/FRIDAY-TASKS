export const handleResults = (element, meals) => {
  element.innerHTML = "";
  if (meals.meals?.length > 0) {
    meals.meals.forEach((meal) => {
      const card = document.createElement("div");
      card.className = "rounded-md flex flex-col shadow-lg overflow-hidden";
      card.innerHTML = `<img src="${meal.strMealThumb}"><div class="flex flex-col gap-2 p-3 items-center"><div>${meal.strMeal}</div><button>Get Recipe</button></div>`;

      element.append(card);
    });
  } else {
    element.append("Not Found Meal!");
  }
};
