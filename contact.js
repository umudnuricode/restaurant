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