document.addEventListener("DOMContentLoaded", function () {
  const projectsPreviews = document.querySelectorAll(".project");
  const projectDescriptions = document.querySelectorAll(".projectDesc");
  const mainSection = document.querySelector(".main-section");

  const projectPreview = document.createElement("div");
  projectPreview.classList.add("project-preview");

  var isOpen = false;

  projectsPreviews.forEach((el) => {
    el.addEventListener("click", function () {
      mainSection.appendChild(projectPreview);

      const image = el.firstElementChild.getAttribute("src");
      console.log(image);

      const title =
        el.firstElementChild.nextElementSibling.firstElementChild.textContent;
      const desc = el.querySelector(".projectDesc").childNodes[0].textContent.trim();
      const hiddenTextElement = el.querySelector(".hiddenText");

      const link = el.lastElementChild.getAttribute("href");

      if (!isOpen) {
        projectPreview.style.display = "flex";
        projectPreview.innerHTML = `
        <div class="previewWrapper scale-up-center">
           <img src='${image}' alt="previewImage" class="previewImage">
           <div class="previewText">
            <div class="close">×</div>
              <h2 class="previewProjectTitle">${title}</h2>
              <div class="previewNote">Please Note That Due To Our <a class="previewNoteLink" href="privacy policy.html">Privacy Policy</a> We Cannot display actual projects of clients, just a similar project with core features</div>
            <div class="previewDesc">${
              desc + hiddenTextElement.textContent
            }</div>
            <a href=${link}>Visit Project</a></div>
        </div>
        `;

        isOpen = true;
      } else {
        projectPreview.style.display = "none";
        isOpen = false;
      }

      const close = document.querySelector(".previewWrapper .close");

      close.addEventListener("click", function () {
        isOpen = false;
        projectPreview.style.display = "none";
      });
    });
  });
});
