const send = document.querySelector(".contact-form__button");
const form = document.querySelector(".contact-form");

const fName = form[0];
const phone = form[1];
const company = form[3];
const email = form[2];

const message = `Hi Dynamic Digital Designs i am ${
  fName.value || "NO_NAME"
} my Number is ${phone.value || "<XXXXXXXXX>"} my email is ${
  email.value
} i work in/for ${
  company.value || "<Independent>"
} can you please send me your portfoilio`;
const myEmail = "luphahlablessingthamsanqa@gmail.com";
const subject = "request for portfoilio";

form.addEventListener("submit", function () {
  if (email && email.value && phone.value && company.value && email.value) {
    window.location.href = `mailto: ${myEmail}?subject=${subject}&body=${message}`;
  }
});
