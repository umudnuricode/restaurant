const buttons = document.querySelectorAll('button[data-category]');
const menuItemsDiv = document.querySelector('.menu-items');

function loadMeals(category) {
  menuItemsDiv.innerHTML = '<p>Yüklənir...</p>';

  let url = category === 'All' 
    ? 'https://www.themealdb.com/api/json/v1/1/search.php?s=' 
    : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      let meals = data.meals;
      if (!meals) {
        menuItemsDiv.innerHTML = '<p>Yemək tapılmadı.</p>';
        return;
      }
      meals = meals.slice(0, 10);
      menuItemsDiv.innerHTML = '';

      meals.forEach(meal => {
        const price = (Math.random() * 35 + 5).toFixed(2);
        const item = document.createElement('div');
        item.className = 'menu-item';

        if (category === 'All') {
          item.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h1>${meal.strMeal}</h1>
            <p>${meal.strInstructions ? meal.strInstructions.slice(0, 80) + '...' : ''}</p>
            <p>$${price}</p>
          `;
        } else {
          item.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h1>${meal.strMeal}</h1>
            <p>$${price}</p>
          `;
        }

        menuItemsDiv.appendChild(item);
      });
    })
    .catch(err => {
      console.error(err);
      menuItemsDiv.innerHTML = '<p>Xəta baş verdi.</p>';
    });
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    loadMeals(button.dataset.category);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  loadMeals('All');
});
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});