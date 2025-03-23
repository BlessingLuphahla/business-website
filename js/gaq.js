const dude = document.querySelector(".thedude");

const params = new URLSearchParams(window.location.search);
const service = params.get("service");

dude.textContent = service;
