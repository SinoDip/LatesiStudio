import "./styles/style.css";
import "./styles/reset.css";
import "./styles/variables.css";

const hamburgerIcon = document.getElementById("hamburger-icon");

hamburgerIcon.addEventListener("click", function () {
  hamburgerIcon.classList.toggle("change");
  console.log("meni");
});
