// const categories = document.querySelectorAll('ul#categories > li.item');

// // Виводимо кількість категорій
// console.log(`Number of categories: ${categories.length}`);
// console.log('');

// // Проходимось по кожному елементу li.item
// categories.forEach(category => {
//   // Отримуємо заголовок категорії (тег <h2>)
//   const categoryName = category.querySelector('h2').textContent;

//   // Отримуємо всі підкатегорії (елементи <li>) у поточній категорії
//   const subcategoriesList = category.querySelectorAll('ul > li');

//   // Виводимо інформацію про категорію і її кількість підкатегорій
//   console.log(`Category: ${categoryName}`);
//   console.log(`Elements: ${subcategoriesList.length}`);
//   console.log('');
// });


// Отримуємо елемент ul#categories за його ідентифікатором
const categoriesList = document.getElementById("categories");

// Отримуємо всі елементи li.item в ul#categories
const categoryItems = categoriesList.querySelectorAll("li.item");

// Виводимо кількість категорій
console.log("Number of categories: " + categoryItems.length);

// Для кожної категорії виводимо заголовок і кількість елементів
categoryItems.forEach(function (categoryItem) {
  // Отримуємо заголовок категорії (тег <h2>)
  const categoryTitle = categoryItem.querySelector("h2");

  // Отримуємо всі елементи li у поточній категорії
  const categoryElements = categoryItem.querySelectorAll("li");

  // Виводимо інформацію про категорію
  console.log("Category: " + categoryTitle.textContent);
  console.log("Elements: " + categoryElements.length);
});
