document.addEventListener("DOMContentLoaded", function () {
  const contactLinks = {
    email:
      "mailto: luphahlablessingthamsanqa@gmail.com?subject=Business Inquiry&body=Hi Luxury Digital Agency ",
    linkedin: "",
    facebook: "https://www.facebook.com/share/1AEXQjig4K/",
    phone: "tel:+263788793302",
    whatsapp: "https://wa.me/27681595429?text=Hi Luxury Digital Agency ",
  };

  const elements = {
    gmail: document.querySelector(".gmail"),
    linkedin: document.querySelector(".linkedin"),
    call: document.querySelector(".call"),
    facebook: document.querySelector(".facebook"),
    footerLogo: document.querySelector(".footer img"),
  };

  const previewContainer = document.createElement("div");
  previewContainer.classList.add("social-preview");
  document.body.appendChild(previewContainer);

  const whatsapp = document.createElement("div");
  const whatsappLogo = document.createElement("div");

  whatsappLogo.classList.add("whatsapp-logo");
  whatsapp.classList.add("whatsapp", "roll-in-blurred-left", "vibrate-1");
  whatsapp.appendChild(whatsappLogo);
  document.body.appendChild(whatsapp);

  function updatePreview(title, message, buttonText, link = "#") {
    previewContainer.style.display = "flex";
    previewContainer.innerHTML = `
      <div class="social-preview-header">
        <div class="online-status"></div>
        <span class="time"></span>
        <img src="images/close.svg" class="close-btn">
      </div>
      <div class="profile-pic"></div>
      <div class="message-preview">
        <h2>${title}</h2>
        <p>${message}</p>
        <a href="${link}">${buttonText}</a>
      </div>
    `;

    // Update time display
    const timeDiv = previewContainer.querySelector(
      ".social-preview-header .time"
    );
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const meridian = hours < 12 ? "AM" : "PM";
    timeDiv.textContent = `${hours % 12 || 12}:${minutes} ${meridian}`;

    // Close button functionality
    previewContainer
      .querySelector(".close-btn")
      .addEventListener("click", () => {
        previewContainer.style.display = "none";
      });
  }

  elements.footerLogo.addEventListener("click", () => {
    if (!window.location.href.includes("index.html")) {
      window.location.href = "index.html";
    }
  });

  let whatsappIsOpen = false;

  whatsapp.addEventListener("click", () => {
    if (!whatsappIsOpen) {
      updatePreview(
        "WhatsApp",
        "Connect with us via WhatsApp",
        "Send a Message",
        contactLinks.whatsapp
      );
    }
    previewContainer.style.display = whatsappIsOpen ? "none" : "flex";
    whatsappIsOpen = !whatsappIsOpen;
  });

  elements.gmail.addEventListener("click", () =>
    updatePreview(
      "Email",
      "Connect with us via Email",
      "Send an Email",
      contactLinks.email
    )
  );

  elements.linkedin.addEventListener("click", () =>
    updatePreview(
      "LinkedIn",
      "Connect with us on LinkedIn",
      "Visit LinkedIn Profile",
      contactLinks.linkedin
    )
  );

  elements.call.addEventListener("click", () =>
    updatePreview("Call", "Reach us by Phone", "Call Now", contactLinks.phone)
  );

  elements.facebook.addEventListener("click", () =>
    updatePreview(
      "Facebook",
      "Follow us on Facebook",
      "Visit Facebook Page",
      contactLinks.facebook
    )
  );
});
