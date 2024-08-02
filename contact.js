const send = document.querySelector(".contact-form__button");
const fName = document.querySelector("#first-name");
const phone = document.querySelector("#phone-number");
const company = document.querySelector("#company");
const email = document.querySelector("#email");
const form = document.querySelector(".contact-form");

const message = `Hi Dynamic Digital Designs i am ${
  fName.value || "NO_NAME"
} my Number is ${phone.value || "<XXXXXXXXX>"} my email is ${
  email.value
} i work in/for ${
  company.value || "<Independent>"
} I need help with my business`;
const myEmail = "luphahlablessingthamsanqa@gmail.com";
const subject =
  "Help with business marketing web development and company mobile accessibity";

form.addEventListener("submit", function () {
  if (email && email.value) {
    window.location.href = `mailto: ${myEmail}?subject=${subject}&body=${message}`;
  }
});
