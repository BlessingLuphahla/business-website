document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const serviceText = params.get("service");
  const form = document.querySelector("main form");
  const serviceInput = document.querySelector("form > input[type=text]");
  const emailInput = document.querySelector("form > input[type=email]");
  const personalMessageInput = document.querySelector("form > textarea");
  const submitButton = document.querySelector("form > button[type=submit]");

  serviceInput.value = serviceText;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
      subject: "get a quote",
      service: serviceInput?.value,
      email: emailInput?.value,
      personalMessage: personalMessageInput?.value,
    };

    const postData = async (data) => {
      const urlLink = "http://express-business-site-backend.onrender.com/getAQuote";

      const jsonData = JSON.stringify(data);
      try {
        const res = await fetch(urlLink.toString(), {
          method: "POST",
          body: jsonData,
          headers: {
            "Content-Type": "application/json",
          },
        });

        const returnData = await res.json();

        return returnData;
      } catch (error) {
        console.log(error);
      }
    };

    function showFeedback(message, isSuccess) {
      const feedbackElement = document.createElement("div");

      feedbackElement.classList.add("contact-form__feedback");
      form.appendChild(feedbackElement);

      feedbackElement.classList.add("feedback");
      feedbackElement.textContent = message;
      feedbackElement.style.color = isSuccess
        ? "rgb(21,255,0)"
        : "rgb(0, 153, 255)";

      setTimeout(() => {
        feedbackElement.style.display = "none";
        feedbackElement.remove();
      }, 5000);
    }

    const handlePostData = async () => {
      submitButton.innerHTML = `<div class="loading"></div>`;
      const res = await postData(data);

      if (res?.success) {
        showFeedback(res?.message, true);

        setTimeout(() => {
          window.open("index.html", "_self");
        }, 1200);
      } else {
        showFeedback(res?.message, false);
      }
      submitButton.textContent = "Send";
    };

    handlePostData();
  });
});
