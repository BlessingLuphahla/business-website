document.addEventListener("DOMContentLoaded", function () {
  const getAQuote = document.querySelectorAll("a.get-a-quote");

  getAQuote.forEach((button) => {
    button.addEventListener("click", function () {
      const parentNode = button.parentNode;
      const H2Element = parentNode.previousElementSibling;

      const subject = "get a quote";
      const body = `Can i have a quote for ${H2Element.textContent}`;

      window.location.href = `mailto:luphahlablessingthamsanqa@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    });
  });
});
