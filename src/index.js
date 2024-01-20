import "./style.css";
import { header } from "./header";

const content = document.getElementById("content");

let headerElement = header();
// content.appendChild(headerElement);

//? Keep for later, to toggle and untoggle dark mode
// document
//   .getElementById("toggleDarkMode")
//   .addEventListener("click", function () {
//     document.documentElement.classList.toggle("dark");
//   });

const hamburgherButton = document.querySelector("hamburgher-button");

document.addEventListener("click", (e) => {
  if (e.target.closest("hamburgher-button")) {
    console.log(e.target);
  }
});
