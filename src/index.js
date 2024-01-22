import "./style.css";
import { header } from "./header";
import { homePage } from "./home";
import { footer } from "./footer";
import { foodPage } from "./foods";
import { dessertPage } from "./desserts";

const bistroPage = (function () {
  //> Render the DOM elements here so we can later create and assign variables directly
  //> Cach the content element that's already on the DOM
  const content = document.getElementById("content");

  function _render() {
    let headerElement = header();
    let homePageElement = homePage();
    let footerElement = footer();
    let foodElement = foodPage();
    let dessertElement = dessertPage();

    content.appendChild(headerElement);
    content.appendChild(homePageElement);
    content.appendChild(foodElement);
    content.appendChild(dessertElement);

    //> last element added to the page
    content.appendChild(footerElement);
  }

  //> Call render
  _render();

  let hamburgherItems = content.querySelector("#hamburgherItems");
  let themeToggler = content.querySelector("#theme-toggle");

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
      hamburgherItems.classList.remove("animate-fadeOut");
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

  //> Call Event Listeners
  _bindEvents();
})();
