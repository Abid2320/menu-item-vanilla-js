import "./style.css";
import menu from "./menu.js";
import menuItem from "./menuItem.js";

let nav = ["all", "Appetizers", "Main Course", "Desserts", "Beverages"];

document.querySelector("#app").innerHTML = `
  <div class="wrapper">
    <h1 class="heading">Our Menu</h1>
    <div class="under-line"></div>
    <nav class="nav-bar">
    </nav>
    <div class="contianer">
    </div>
  </div>
`;
let item = menuItem;
nav.forEach((item) => {
  document.querySelector(
    ".nav-bar"
  ).innerHTML += `<button class="nav-btn">${item}</button>`;
});

let navBar = document.querySelector(".nav-bar");
navBar.firstElementChild.classList.add("active");

document.querySelectorAll(".nav-btn").forEach((e) => {
  e.addEventListener("click", () => {
    const currentElemnt = document.querySelectorAll(".nav-btn");
    currentElemnt.forEach((current) => {
      current.classList.remove("active");
    });
    e.classList.add("active");
    if (e.textContent != "all") {
      item = menuItem.filter((item) => {
        return item.category == e.textContent;
      });
    } else {
      item = menuItem;
    }
    render(item);
  });
});

document.addEventListener("DOMContentLoaded", render(item));

function render(item) {
  let container = document.querySelector(".contianer");
  container.innerHTML = "";
  item.forEach((element) => {
    document.querySelector(".contianer").innerHTML += menu(element);
  });
}
