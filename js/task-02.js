const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.getElementById("ingredients");

// Створюємо та додаємо кожен елемент <li> до списку
ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  ulIngredients.appendChild(li);
});
