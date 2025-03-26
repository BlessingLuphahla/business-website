document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const phoneNumberInput = document.getElementById("phone-number");
  const emailInput = document.getElementById("email");
  const companyInput = document.getElementById("company");
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const submitButton = document.querySelector(
    "form button[type=submit].contact-form__button"
  );

  const customMessage = document.querySelector(
    ".main-section-wrapper textarea#textarea"
  );

  let data;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
      sendEmail();
    } else {
      showFeedback("Message Not Sent Please Correct Any Errors", false);
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
    } else if (phoneNumberInput.value.length < 2) {
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
    let checkboxQueries = "(Contact Us)\n";

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkboxQueries += checkbox.nextElementSibling.textContent + " & ";
      }
    });

    data = {
      firstName: firstNameInput.value.trim(),
      lastName: lastNameInput.value.trim(),
      phoneNumber: phoneNumberInput.value.trim(),
      email: emailInput.value.trim(),
      company: companyInput.value.trim(),
      checkboxQueries: checkboxQueries.trim(),
      subject: "I want to contact you",
      message: customMessage.value.trim(),
    };

    const postData = async (data) => {
      const urlLink =
        "https://express-business-site-backend.onrender.com/emails";

      const jsonData = JSON.stringify(data);
      try {
        const res = await fetch(urlLink.toString(), {
          method: "POST",
          body: jsonData,
          headers: {
            "Content-Type": "application/json",
          },
        });

        const returnData = await res.json();

        return returnData;
      } catch (error) {
        console.log(error);
      }
    };

    function showFeedback(message, isSuccess) {
      const feedbackElement = document.createElement("div");

      feedbackElement.classList.add("contact-form__feedback");
      form.appendChild(feedbackElement);

      feedbackElement.classList.add("feedback");
      feedbackElement.textContent = message;
      feedbackElement.style.color = isSuccess
        ? "rgb(21,255,0)"
        : "rgb(0, 153, 255)";

      setTimeout(() => {
        feedbackElement.style.display = "none";
        feedbackElement.remove();
      }, 5000);
    }

    const handlePostData = async () => {
      submitButton.innerHTML = `<div class="loading"></div>`;
      const res = await postData(data);

      if (res.success) {
        showFeedback(res.message, true);
        firstNameInput.value = "";
        lastNameInput.value = "";
        phoneNumberInput.value = "";
        emailInput.value = "";
        companyInput.value = "";
      } else {
        showFeedback(res.message, false);
      }
      submitButton.textContent = "Send";
    };

    handlePostData();
  }
});
