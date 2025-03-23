document.addEventListener("DOMContentLoaded", function () {
  const getAQuote = document.querySelectorAll("a.get-a-quote");

  getAQuote.forEach((button) => {
    button.addEventListener("click", function () {
      const service = button.parentElement.previousElementSibling.textContent;
      window.open(`get-a-quote.html?service=Marketing => ${service}`, "_self");
    });
  });
});
