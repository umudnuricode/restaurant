const specialsItemsDiv = document.querySelector('.specials-items');

function loadFeaturedDishesFromAPI() {
  specialsItemsDiv.innerHTML = '<p>Yüklənir...</p>';

  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')  // ümumi yeməklər
    .then(res => res.json())
    .then(data => {
      let meals = data.meals ? data.meals.slice(4, 7) : []; // 3 featured yemək
      specialsItemsDiv.innerHTML = '';

      if (meals.length === 0) {
        specialsItemsDiv.innerHTML = '<p>Yemək tapılmadı.</p>';
        return;
      }

      meals.forEach(meal => {
        const price = (Math.random() * 35 + 5).toFixed(2);

        const div = document.createElement('div');
        div.className = 'specials-item';

        div.innerHTML = `
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
          <h1>${meal.strMeal}</h1>
          <p>${meal.strInstructions ? meal.strInstructions.slice(0, 60) + '...' : ''}</p>
          <p>$${price}</p>
        `;

        specialsItemsDiv.appendChild(div);
      });
    })
    .catch(err => {
      console.error(err);
      specialsItemsDiv.innerHTML = '<p>Xəta baş verdi.</p>';
    });
}

document.addEventListener('DOMContentLoaded', () => {
  loadFeaturedDishesFromAPI();
});