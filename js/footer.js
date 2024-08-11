document.addEventListener("DOMContentLoaded", function () {
  const emailHref =
    "mailto: luphahlablessingthamsanqa@gmail.com?subject=Business&body=Hey Dynamic Digital Design can you";
  const linkedinHref = "";
  const facebookHref = "";
  const phoneHref = "tel:+263788793302";
  const whatsappHref =
    "https://wa.me/263788793302?text=Hey Dynamic Digital Design ";

  const gmail = document.querySelector(".gmail");
  const linkedin = document.querySelector(".linkedin");
  const call = document.querySelector(".call");
  const facebook = document.querySelector(".facebook");
  const footerLogo = document.querySelector(".footer img");

  const previewContainer = document.createElement("div");
  previewContainer.classList.add("social-preview");

  const whatsapp = document.createElement("div");
  const whatsappLogo = document.createElement("div");

  whatsappLogo.classList.add("whatsapp-logo");
  whatsapp.classList.add("whatsapp");
  whatsapp.appendChild(whatsappLogo);
  document.body.appendChild(whatsapp);

  function previewContainerEdit(title, message, buttonText, link = "#") {
    previewContainer.style.display = "flex";

    // Content of the preview
    previewContainer.innerHTML = `
    <div class="social-preview-header">
    <div class="online-status"></div>
    <span class="time">2:30 PM</span>
    <img src="images/close.svg" class="close-btn">
    </div>
    <div class="profile-pic">
    </div>
    <div class="message-preview">
    <h2>${title}</h2>
    <p>${message}</p>
    <a href="${link}">${buttonText}</a>
    </div>
    `;
    // setting up time
    const timeDiv = document.querySelector(".social-preview-header span");
    const tempTime = new Date();
    const hour =
      tempTime.getHours().toString().length != 2
        ? "0" + tempTime.getHours().toString()
        : tempTime.getHours().toString();
    const min =
      tempTime.getMinutes().toString().length != 2
        ? "0" + tempTime.getMinutes().toString()
        : tempTime.getMinutes().toString();
    const meridian = Number(hour.trim()) < 12 ? "AM" : "PM";
    const time = `${hour}:${min} ${meridian}`;

    timeDiv.textContent = time;

    // Event listener to close the preview
    document.querySelector(".close-btn").addEventListener("click", function () {
      previewContainer.style.display = "none";
    });
  }

  footerLogo.addEventListener("click", function () {
    if (!window.location.href.includes("index.html")) {
      window.location.href = "index.html";
    }
  });

  document.body.appendChild(previewContainer);

  var whatsappIsOpen = false;

  // Event listener to show the preview
  whatsapp.addEventListener("click", function () {
    if (!whatsappIsOpen) {
      previewContainerEdit(
        (title = "whatsapp"),
        (message = "Connect with us via whatsapp"),
        (buttonText = "Send A message"),
        (link = whatsappHref)
      );
      whatsappIsOpen = true;
    } else {
      whatsappIsOpen = false;
      previewContainer.style.display = "none";
    }
  });

  gmail.addEventListener("click", function () {
    previewContainerEdit(
      (title = "email"),
      (message = "Connect with us via email"),
      (buttonText = "Send An email"),
      (link = emailHref)
    );
  });

  linkedin.addEventListener("click", function () {
    previewContainerEdit(
      (title = "linkedin"),
      (message = "Connect with us on linkedin"),
      (buttonText = "visit linkedIn Profile"),
      (link = linkedinHref)
    );
  });

  call.addEventListener("click", function () {
    previewContainerEdit(
      (title = "Call"),
      (message = "Reach us by phone"),
      (buttonText = "call now"),
      (link = phoneHref)
    );
  });

  facebook.addEventListener("click", function () {
    previewContainerEdit(
      (title = "Facebook"),
      (message = "Follow us on facebook"),
      (buttonText = "Visit Facebook Page"),
      (link = facebookHref)
    );
  });
});
