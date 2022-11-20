import {
  scrollTop,
  goBack,
  hamburgerMenu,
  buttonScroll,
} from "./components/siteButtons.js";
import "./components/newsletter.js";
import "./components/scrollEvent.js";

window.addEventListener("scroll", buttonScroll);
hamburgerMenu();
goBack();
scrollTop();
