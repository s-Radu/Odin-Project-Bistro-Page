import "./style.css";
import { header } from "./header";

const content = document.getElementById("content");

let headerElement = header();
content.appendChild(headerElement);

let hamburgherItems = document.getElementById("hamburgherItems");

//? The below focuses on the hamburgher button and toggles the menu, reweite it to be more efficient, for the moment it works

document.addEventListener("focusin", (e) => {
  if (e.target.closest("#hamburgherButton")) {
    hamburgherItems.classList.remove("animate-fadeOut");
    hamburgherItems.classList.remove("hidden");
  }
});

document.addEventListener("focusout", (e) => {
  if (e.target.closest("#hamburgherButton")) {
    hamburgherItems.classList.add("animate-fadeOut");
    hamburgherItems.addEventListener("animationend", () => {
      hamburgherItems.classList.add("hidden");
    });
  }
});

document.addEventListener("click", (e) => {
  let classList = e.target.classList;
  if (
    classList.contains("home") ||
    classList.contains("foods") ||
    classList.contains("drinks") ||
    classList.contains("contact")
  ) {
    console.log(`clicked ${classList}`);
  }
});

//? Dark mode toggle

document.getElementById("theme-toggle").addEventListener("click", function () {
  let isDark = document.documentElement.classList.toggle("dark");

  // Switch the icon
  document.getElementById("sun-icon").style.display = isDark ? "none" : "block";
  document.getElementById("moon-icon").style.display = isDark
    ? "block"
    : "none";

  // Update local storage and aria-label
  localStorage.setItem("theme-preference", isDark ? "dark" : "light");
  this.setAttribute("aria-label", isDark ? "dark" : "light");
});
