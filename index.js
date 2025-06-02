// document.getElementById('contactForm').addEventListener('submit', function (e) {
//   e.preventDefault();

//   const form = e.target;
//   const name = form.elements['name'].value.trim();
//   const email = form.elements['email'].value.trim();
//   const subject = form.elements['subject'].value.trim();
//   const message = form.elements['message'].value.trim();

//   alert(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);

//   form.reset();
// });


// document.getElementById('reservationForm').addEventListener('submit', function (e) {
//   e.preventDefault();

//   const form = e.target;
//   const name = form.elements['name'].value.trim();
//   const email = form.elements['email'].value.trim();
//   const phone = form.elements['phone'].value.trim();
//   const date = form.elements['date'].value;
//   const time = form.elements['time'].value;
//   const guests = form.elements['guests'].value;
//   const specialRequests = form.elements['special_requests'].value.trim();

//   alert(
//     `Rezervasiya Məlumatları:\n` +
//     `Ad: ${name}\n` +
//     `Email: ${email}\n` +
//     `Telefon: ${phone}\n` +
//     `Tarix: ${date}\n` +
//     `Saat: ${time}\n` +
//     `Qonaq sayı: ${guests}\n` +
//     `Xüsusi tələblər: ${specialRequests ? specialRequests : 'Yoxdur'}`
//   );

//   form.reset();
// });






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
  loadMeals('All');  // Səhifə açılan kimi All kateqoriyasını yüklə
});















const specialsItemsDiv = document.querySelector('.specials-items');

function loadFeaturedDishesFromAPI() {
  specialsItemsDiv.innerHTML = '<p>Yüklənir...</p>';

  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')  // ümumi yeməklər
    .then(res => res.json())
    .then(data => {
      let meals = data.meals ? data.meals.slice(0, 3) : []; // 3 featured yemək
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
