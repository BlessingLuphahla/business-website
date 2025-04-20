var isOpen = false;

const open = document.querySelector("img.open-menu");
const menu = document.querySelector("div.hamburger-menu");

open.addEventListener("click", function () {
  console.log("clicked");
  if (!isOpen) {
    menu.style.display = "flex";
    isOpen = true;
    open.src = "/images/close-burger.svg";
  } else {
    menu.style.display = "none";
    isOpen = false;
    open.src = "/images/ham-burger.svg";
  }
});
