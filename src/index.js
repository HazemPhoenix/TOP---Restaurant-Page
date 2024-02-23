import homePage from "./Home";
import menuPage from "./Menu";
import aboutPage from "./About";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

homeBtn.addEventListener("click", () => {
  homePage();
});
menuBtn.addEventListener("click", () => {
  menuPage();
});
aboutBtn.addEventListener("click", () => {
  aboutPage();
});
