import "./style.css";
import { header } from "./header";
import { homePage } from "./home";
import { footer } from "./footer";
import { foodPage } from "./foods";
import { drinksPage } from "./drinks";
import { dessertPage } from "./desserts";
import { contactPage } from "./contanct";

import { initMap } from "./map";

const bistroPage = (function () {
  //> Render the DOM elements here so we can later create and assign variables directly
  //> Cach the content element that's already on the DOM
  const content = document.getElementById("content");

  function _render() {
    let headerElement = header();
    let homePageElement = homePage();
    let foodElement = foodPage();
    let dessertElement = dessertPage();
    let drinksElement = drinksPage();
    let contactElement = contactPage();

    let footerElement = footer();

    content.appendChild(headerElement);
    content.appendChild(homePageElement);
    content.appendChild(foodElement);
    content.appendChild(dessertElement);
    content.appendChild(drinksElement);
    content.appendChild(contactElement);

    //> last element added to the page
    content.appendChild(footerElement);
    initMap();
  }

  //> Call render
  _render();

  let hamburgherItems = content.querySelector("#hamburgherItems");
  let themeToggler = content.querySelector("#theme-toggle");
  let submitButton = content.querySelector("#submit");

  //> Event Listeners

  function _bindEvents() {
    document.addEventListener("focusin", _handleFocusIn);
    document.addEventListener("focusout", _handleFocusOut);

    document.addEventListener("mouseover", _showTooltip);
    document.addEventListener("mouseout", _hideTooltip);

    document.addEventListener("click", _handlePageChange);

    themeToggler.addEventListener(
      "click",
      _handleDarkModeToggler.bind(themeToggler)
    );

    // submitButton.addEventListener("click", _formSubmission);

    //! Add event listener for touch screens
    // document.addEventListener("touchstart", _handleFocusIn);
    // document.addEventListener("touchend", _handleFocusOut); //> these are not working as expected, will need fixing
  }

  function _showTooltip(e) {
    let tooltipText = e.target.getAttribute("data-tooltip");
    if (tooltipText) {
      let tooltip = document.createElement("div");
      tooltip.textContent = tooltipText;
      tooltip.className = `absolute bg-gray-600 text-white font-josefin p-2 text-lg rounded-md`;
      e.target.appendChild(tooltip);
    }
  }

  function _hideTooltip(e) {
    let tooltipText = e.target.getAttribute("data-tooltip");
    if (tooltipText) {
      let tooltip = e.target.querySelector("div");
      if (tooltip) {
        e.target.removeChild(tooltip);
      }
    }
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

  //> Return the form's info
  //> The function does not work as intended, will need fixing

  // function _formSubmission(e) {
  //   const form = content.querySelector("#contactPage form");
  //   const email = form.querySelector("#email");
  //   const subject = form.querySelector("#subject");
  //   const message = form.querySelector("#message");

  //   // let formInfo = {
  //   //   email: email.value,
  //   //   subject: subject.value,
  //   //   message: message.value,
  //   // };

  //   // console.table(formInfo);
  //   console.log(form);
  // }

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

  function _handlePageChange(e) {
    let classList = e.target.classList;
    if (
      classList.contains("home") ||
      classList.contains("food") ||
      classList.contains("dessert") ||
      classList.contains("drinks") ||
      classList.contains("contact")
    ) {
      //> array to select all pages
      let pages = ["home", "food", "dessert", "drinks", "contact"];
      //> array is transformed into a string of selectors for querySelectorAll
      let pagesSelectors = pages.map((page) => `#${page}`).join(", ");
      //> select all pages
      let pagesElements = content.querySelectorAll(pagesSelectors);
      //> Adds hidden to all pages
      //? Should add a fade out animation
      pagesElements.forEach((page) => {
        page.classList.add("hidden");
        page.classList.remove("animate-fadeIn");
        page.classList.add("animate-fadeOut");
      });
      //> Selects the page that we clicked on, by using the last class from the classList
      let pageToShow = content.querySelector(
        `#${Array.from(e.target.classList).pop()}`
      );
      //> Removes hidden from the page we want to show
      pageToShow.classList.remove("hidden");
      pageToShow.classList.remove("animate-fadeOut");
      pageToShow.classList.add("animate-fadeIn");
    }
  }

  //> Call Event Listeners
  _bindEvents();
})();
