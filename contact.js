const send = document.querySelector(".contact-form__button");
const fName = document.querySelector("#first-name");
const phone = document.querySelector("#phone-number");
const company = document.querySelector("#company");
const email = document.querySelector("#email");

const message = `Hi Dynamic Digital Designs i am ${
  fName || "NO_NAME"
} my Number is ${phone || "XXXXXXXXX"} my email is ${email} i work in/for ${
  company || "Independent"
}`;
const myEmail = "luphahlablessingthamsanqa@gmail.com";
const subject =
  "Help with business marketing web development and company mobile accessibity";

send.addEventListener("click", function () {
  if (email && email.value) {
    window.location.href = `mailto: ${email}?subject=${subject}&body=${message}`;
  }
});
