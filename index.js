fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
  .then(res => res.json())
  .then(data => {
    data.meals.forEach(meal => {
      console.log(meal.strMeal);       // Yeməyin adı
      console.log(meal.strMealThumb);  // Yeməyin şəkli
      console.log(meal.strInstructions);// Yeməyin təsviri
    });
  })
  .catch(err => console.error(err));
//   https://www.themealdb.com/api/json/v1/1/categories.php