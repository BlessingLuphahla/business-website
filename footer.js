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

  const previewContainer = document.createElement("div");
  previewContainer.classList.add("social-preview");

  function previewContainerEdit(title, message, buttonText, link = "#") {
    // Content of the preview
    previewContainer.innerHTML = `
            <div class="preview-content">
                <img src="images/close.svg" class="close-btn">
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

  document.body.appendChild(previewContainer);

  // Event listener to show the preview
  gmail.addEventListener("click", function () {
    previewContainer.style.display = "flex";
    previewContainerEdit(title="email", message="Connect with us via email", buttonText="Send An email", link = emailHref)
    
});
linkedin.addEventListener("click", function () {
    previewContainer.style.display = "flex";
    previewContainerEdit(title="linkedin", message="Connect with us on linkedin", buttonText="visit linkedIn Profile", link = linkedinHref)
    
    
});
call.addEventListener("click", function () {
    previewContainer.style.display = "flex";
    previewContainerEdit(title="Call", message="Reach us by phone", buttonText="call now", link = phoneHref)
    
});
facebook.addEventListener("click", function () {
    previewContainer.style.display = "flex";
    previewContainerEdit(title="Facebook", message="Follow us on facebook", buttonText="Visit Facebook Page", link = facebookHref)
    
  });
});
