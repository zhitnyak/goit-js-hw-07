const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const addElement = document.createElement("li");
  // console.log(addElement);
  addElement.textContent = ingredient;
  // console.log(addElement);

  ingredientsList.append(addElement);
});

// const createIngredients = (ingredients) => {
//   return ingredients.map((ingredient) => {
//     const addElement = document.createElement("li");
//     addElement.textContent = ingredient;
//     return addElement;
//   });
// };
// const elements = createIngredients(ingredients);
// ingredientsList.append(...elements);
// console.log(elements);
