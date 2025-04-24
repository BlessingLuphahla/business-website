document.addEventListener("DOMContentLoaded", function () {
  const testimonialBtn = document.querySelector(
    ".testimonial-google-review.testimonial-video-btn"
  );

  const testimonialVideoContainer =
    document.querySelector(".testimonial-video");

  testimonialBtn.addEventListener("click", () => {
    testimonialVideoContainer.style.display = "flex";
  });
  
  document
    .querySelector(".testimonial-video-close")
    .addEventListener("click", () => {
      testimonialVideoContainer.style.display = "none";
    });
});
