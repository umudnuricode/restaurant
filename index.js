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



document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const name = form.elements['name'].value.trim();
  const email = form.elements['email'].value.trim();
  const subject = form.elements['subject'].value.trim();
  const message = form.elements['message'].value.trim();

  alert(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);

  form.reset();
});


document.getElementById('reservationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const name = form.elements['name'].value.trim();
  const email = form.elements['email'].value.trim();
  const phone = form.elements['phone'].value.trim();
  const date = form.elements['date'].value;
  const time = form.elements['time'].value;
  const guests = form.elements['guests'].value;
  const specialRequests = form.elements['special_requests'].value.trim();

  alert(
    `Rezervasiya Məlumatları:\n` +
    `Ad: ${name}\n` +
    `Email: ${email}\n` +
    `Telefon: ${phone}\n` +
    `Tarix: ${date}\n` +
    `Saat: ${time}\n` +
    `Qonaq sayı: ${guests}\n` +
    `Xüsusi tələblər: ${specialRequests ? specialRequests : 'Yoxdur'}`
  );

  form.reset();
});
