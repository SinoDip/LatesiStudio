import "./styles/style.css";
import "./styles/reset.css";
import "./styles/variables.css";

const hamburgerIcon = document.querySelector(".hamburger-icon");
const menu = document.querySelector(".menu");

hamburgerIcon.addEventListener("click", () => {
  menu.classList.toggle("show");
  hamburgerIcon.classList.toggle("close");
});

console.log("test");
