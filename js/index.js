document.addEventListener("DOMContentLoaded", function () {
  const testimonialBtn = document.querySelector(
    ".testimonial-google-review.testimonial-video-btn"
  );

  const testimonialVideoContainer =
    document.querySelector(".testimonial-video");

  const video = document.querySelector(".testimonial-actual-video");

  testimonialBtn.addEventListener("click", () => {
    testimonialVideoContainer.style.display = "flex";
    video.setAttribute("src", testimonialBtn.getAttribute("src"));
  });

  document
    .querySelector(".testimonial-video-close")
    .addEventListener("click", () => {
      testimonialVideoContainer.style.display = "none";
    });
});
