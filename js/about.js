import { scrollTop, goBack, hamburgerMenu } from "./components/siteButtons.js";
import "./components/newsletter.js";
import "./components/scrollEvent.js";
import { buttonScroll } from "./components/scrollEvent.js";

window.addEventListener("scroll", buttonScroll);
hamburgerMenu();
goBack();
scrollTop();
