import "./style.css";
import bistro1 from "./images/bistro1.jpg";

const root = document.getElementById("content");

function test() {
  const img = document.createElement("img");
  img.src = bistro1;
  img.className = "w-44 rounded-2xl";
  root.appendChild(img);
}

test();

//? Keep for later, to toggle and untoggle dark mode
document
  .getElementById("toggleDarkMode")
  .addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
  });
