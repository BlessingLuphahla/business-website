document.addEventListener("DOMContentLoaded", function () {
    const getAQuote = document.querySelectorAll("a.get-a-quote");
  
    getAQuote.forEach((button) => {
      button.addEventListener("click", function () {
        const subject = "get a quote";
        const body = 'Can i have a quote for software development';
  
        window.location.href = `mailto:luphahlablessingthamsanqa@gmail.com?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
      });
    });
  });
  