document.addEventListener("DOMContentLoaded", function () {
  const emailHref =
    "mailto: luphahlablessingthamsanqa@gmail.com?subject=Business&body=Hey Dynamic Digital Design can you";
  const linkedinHref = "";
  const facebookHref = "";
  const phoneHref = "tel:+263788793302";

  const gmail = document.querySelector(".gmail");
  const linkedin = document.querySelector(".linkedin");
  const call = document.querySelector(".call");
  const facebook = document.querySelector(".facebook");
  const footerLogo = document.querySelector(".footer img");

  const previewContainer = document.createElement("div");
  previewContainer.classList.add("social-preview");

  function previewContainerEdit(title, message, buttonText, link = "#") {
    // Content of the preview
    previewContainer.innerHTML = `
     <div class="social-preview-header">
        <div class="online-status"></div>
        <span class="time">2:30 PM</span>
        <img src="images/close.svg" class="close-btn">
    </div>
    <div class="profile-pic">
        <!-- You can put an img tag here for the profile picture -->
    </div>
    <div class="message-preview">
      <h2>${title}</h2>
        <p>${message}</p>
         <a href="${link}">${buttonText}</a>
    </div>
        `;
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

  // Event listener to show the preview
  gmail.addEventListener("click", function () {
    previewContainer.style.display = "flex";
    previewContainerEdit(
      (title = "email"),
      (message = "Connect with us via email"),
      (buttonText = "Send An email"),
      (link = emailHref)
    );
  });
  linkedin.addEventListener("click", function () {
    previewContainer.style.display = "flex";
    previewContainerEdit(
      (title = "linkedin"),
      (message = "Connect with us on linkedin"),
      (buttonText = "visit linkedIn Profile"),
      (link = linkedinHref)
    );
  });
  call.addEventListener("click", function () {
    previewContainer.style.display = "flex";
    previewContainerEdit(
      (title = "Call"),
      (message = "Reach us by phone"),
      (buttonText = "call now"),
      (link = phoneHref)
    );
  });
  facebook.addEventListener("click", function () {
    previewContainer.style.display = "flex";
    previewContainerEdit(
      (title = "Facebook"),
      (message = "Follow us on facebook"),
      (buttonText = "Visit Facebook Page"),
      (link = facebookHref)
    );
  });
});
