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