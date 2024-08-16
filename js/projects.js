document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const phoneNumberInput = document.getElementById("phone-number");
  const emailInput = document.getElementById("email");
  const companyInput = document.getElementById("company");
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const feedbackElement = document.createElement("div");

  feedbackElement.classList.add("contact-form__feedback");
  form.appendChild(feedbackElement);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
      sendEmail();
    }
  });

  function validateForm() {
    let valid = true;
    clearAllErrors();

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
    } else if (phoneNumberInput.value.length < 5) {
      showError(
        phoneNumberInput,
        "Phone Number must have at least 5 characters, please include the country code."
      );
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
    const errorElement = input.parentElement.querySelector(
      ".contact-form__error"
    );
    if (errorElement) {
      errorElement.remove();
    }
  }

  function clearAllErrors() {
    document.querySelectorAll(".contact-form__error").forEach((error) => {
      error.remove();
    });
  }

  function sendEmail() {
    let checkboxQueries = ""; // Reset checkboxQueries each time

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkboxQueries += checkbox.nextElementSibling.textContent + " & ";
      }
    });

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const phoneNumber = phoneNumberInput.value.trim();
    const email = emailInput.value.trim();
    const company = companyInput.value.trim();

    const subject = `Message from ${firstName} ${lastName}`;
    const body = `Can you assist with my company (${company})?\n\nI need help with: ${checkboxQueries}\n\nHere are my details:\nPhone Number: ${phoneNumber}\nEmail: ${email}\n`;

    window.location.href = `mailto:luphahlablessingthamsanqa@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    showFeedback("Your message has been sent successfully!", true);
  }

  function showFeedback(message, isSuccess) {
    feedbackElement.textContent = message;
    feedbackElement.style.color = isSuccess ? "green" : "red";
    feedbackElement.style.display = "block";

    setTimeout(() => {
      feedbackElement.style.display = "none";
    }, 5000);
  }
});
