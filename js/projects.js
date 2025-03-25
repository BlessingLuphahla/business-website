const projects = document.querySelectorAll(".project");
const projectDescriptions = document.querySelectorAll(".projectDesc");

projectDescriptions.forEach((el) => {
  el.textContent = el.textContent.split(" ").slice(0, 25).join(" ") + "...";
});
