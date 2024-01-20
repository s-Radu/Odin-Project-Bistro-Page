import "./style.css";
import { header } from "./header";

const content = document.getElementById("content");

let headerElement = header();
content.appendChild(headerElement);

//? Keep for later, to toggle and untoggle dark mode
// document
//   .getElementById("toggleDarkMode")
//   .addEventListener("click", function () {
//     document.documentElement.classList.toggle("dark");
//   });

const hamburgherButton = document.querySelector("hamburgher-button");
const home = document.querySelector(".home");
const foods = document.querySelector(".foods");
const drinks = document.querySelector(".drinks");
const contact = document.querySelector(".contact");
let hamburgherItems = document.getElementById("hamburgherItems");

//? The below focuses on the hamburgher button and toggles the menu, reweite it to be more efficient, for the moment it works

document.addEventListener("focusin", (e) => {
  if (e.target.closest("#hamburgherButton")) {
    hamburgherItems.classList.remove("hidden");
    console.log("clicked");
  }
});

document.addEventListener("focusout", (e) => {
  if (e.target.closest("#hamburgherButton")) {
    hamburgherItems.classList.add("hidden");
    console.log("clicked");
  }
});
