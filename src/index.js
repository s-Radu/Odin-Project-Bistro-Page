import "./style.css";
import { header } from "./header";

const bistroPage = (function () {
  //> Cache DOM

  const content = document.getElementById("content");
  let hamburgherItems;
  let themeToggler;

  //> Render

  function _render() {
    let headerElement = header();

    content.appendChild(headerElement);
  }

  //> Event Listeners

  function _bindEvents() {
    document.addEventListener("focusin", _handleFocusIn);
    document.addEventListener("focusout", _handleFocusOut);
    themeToggler.addEventListener(
      "click",
      _handleDarkModeToggler.bind(themeToggler)
    );
  }

  function _handleFocusIn(e) {
    if (e.target.closest("#hamburgherButton")) {
      hamburgherItems.classList.remove("anima-tefadeOut");
      hamburgherItems.classList.remove("hidden");
    }
  }

  function _handleFocusOut(e) {
    if (e.target.closest("#hamburgherButton")) {
      hamburgherItems.classList.add("animate-fadeOut");
      hamburgherItems.addEventListener(
        "animationend",
        _removeHamburgherAnimation
      );
    }
  }

  function _removeHamburgherAnimation() {
    hamburgherItems.classList.add("hidden");
  }

  function _handleDarkModeToggler() {
    //> select the HTML element which holds the class of dark, since we use tailwindcss for dark mode
    let isDark = document.documentElement.classList.toggle("dark");

    //> Switch the icon
    content.querySelector("#sun-icon").style.display = isDark
      ? "none"
      : "block";
    content.querySelector("#moon-icon").style.display = isDark
      ? "block"
      : "none";

    //> Update local storage and aria-label
    localStorage.setItem("theme-preference", isDark ? "dark" : "light");
    this.setAttribute("aria-label", isDark ? "dark" : "light");
  }

  document.addEventListener("click", (e) => {
    let classList = e.target.classList;
    if (
      classList.contains("home") ||
      classList.contains("foods") ||
      classList.contains("drinks") ||
      classList.contains("contact")
    ) {
      //? here we will do the transition between pages
    }
  });

  //> Call render
  _render();

  //> Update hamburgher items just after the content is rendered otherwise will return null
  hamburgherItems = content.querySelector("#hamburgherItems");
  themeToggler = content.querySelector("#theme-toggle");

  //> Call Event Listeners
  _bindEvents();
})();
