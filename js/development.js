document.addEventListener("DOMContentLoaded", function () {
  const getAQuote = document.querySelector("a.get-a-quote");

  getAQuote.addEventListener("click", function () {
    window.open(`get-a-quote.html?service=Development`, "_self");
  });
});
