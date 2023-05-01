import createHomePage from "./homePage";
import createMenu from "./menu";

const content = document.getElementById("content");
const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");

function loadHomePage() {
  if (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  content.appendChild(createHomePage());
}

function loadMenuPage() {
  content.removeChild(content.firstChild);
  content.appendChild(createMenu());
}

function display() {
  loadHomePage();
  homeButton.addEventListener("click", loadHomePage);
  menuButton.addEventListener("click", loadMenuPage);
}

export default display;
