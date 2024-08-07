document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const phoneNumberInput = document.getElementById("phone-number");
  const emailInput = document.getElementById("email");
  const companyInput = document.getElementById("company");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
      sendEmail();
    }
  });

  function validateForm() {
    let valid = true;

    if (!firstNameInput.value.trim()) {
      showError(firstNameInput, "First Name is required.");
      valid = false;
    } else {
      clearError(firstNameInput);
    }

    if (!lastNameInput.value.trim()) {
      showError(lastNameInput, "Last Name is required.");
      valid = false;
    } else {
      clearError(lastNameInput);
    }

    if (!phoneNumberInput.value.trim()) {
      showError(phoneNumberInput, "Phone Number is required.");
      valid = false;
    } else if (!/^\d{10}$/.test(phoneNumberInput.value)) {
      showError(phoneNumberInput, "Phone Number must be 10 digits.");
      valid = false;
    } else {
      clearError(phoneNumberInput);
    }

    if (!emailInput.value.trim()) {
      showError(emailInput, "Email is required.");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      showError(emailInput, "Invalid email format.");
      valid = false;
    } else {
      clearError(emailInput);
    }

    return valid;
  }

  function showError(input, message) {
    const errorElement = document.createElement("div");
    errorElement.classList.add("contact-form__error");
    errorElement.innerText = message;
    input.parentElement.appendChild(errorElement);
  }

  function clearError(input) {
    const errorElement = input.parentElement.querySelector(".contact-form__error");
    if (errorElement) {
      errorElement.remove();
    }
  }

  function sendEmail() {
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const phoneNumber = phoneNumberInput.value.trim();
    const email = emailInput.value.trim();
    const company = companyInput.value.trim();

    const subject = "New Contact Form Submission";
    const body = `First Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phoneNumber}\nEmail: ${email}\nCompany: ${company}`;

    window.location.href = `mailto:YOUR_EMAIL_ADDRESS_HERE?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
});
