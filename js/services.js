document.addEventListener("DOMContentLoaded", function () {
  const getAQuote = document.querySelectorAll("a.get-a-quote");

  getAQuote;
  getAQuote.forEach((el) => {
    el.addEventListener("click", function () {
      const service = el.parentElement.parentElement.querySelector(".services__item-title").textContent;
      window.open(`get-a-quote.html?service=${service}`, "_self");
    });
  });
});
