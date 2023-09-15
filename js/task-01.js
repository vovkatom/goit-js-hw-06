const categories = document.querySelectorAll('ul#categories > li.item');

// Виводимо кількість категорій
console.log(`Number of categories: ${categories.length}`);
console.log('');

// Проходимось по кожному елементу li.item
categories.forEach(category => {
  // Отримуємо заголовок категорії (тег <h2>)
  const categoryName = category.querySelector('h2').textContent;

  // Отримуємо всі підкатегорії (елементи <li>) у поточній категорії
  const subcategoriesList = category.querySelectorAll('ul > li');

  // Виводимо інформацію про категорію і її кількість підкатегорій
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${subcategoriesList.length}`);
  console.log('');
});
