document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  let valid = true;

  const inputs = document.querySelectorAll('.contact-form__input');
  inputs.forEach(input => {
    if (!input.checkValidity()) {
      input.style.borderColor = 'red';
      valid = false;
    } else {
      input.style.borderColor = '#ddd';
    }
  });

  if (valid) {
    alert('Form submitted successfully!');
    // You can handle the form submission here, e.g., send data to a server
    document.getElementById('contact-form').reset();
  } else {
    alert('Please fill in all required fields correctly.');
  }
});
