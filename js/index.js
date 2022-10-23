import { scrollTop } from "./components/siteButtons.js";
import { baseUrl, blogPosts } from "./components/fetchApi.js";
import "./components/carousel.js";
import "./components/newsletter.js";

blogPosts(baseUrl);
scrollTop();

const progressZero = document.querySelector(".progress-zero");
const progressOne = document.querySelector(".progress-one");
const progressTwo = document.querySelector(".progress-two");
const progressThree = document.querySelector(".progress-three");

const progressCarousel = document.querySelector(".carousel");

progressZero.onclick = function () {
  progressCarousel.style = "--carousel-index:0;";
  progressZero.classList.add("active");
  progressOne.classList.remove("active");
  progressTwo.classList.remove("active");
  progressThree.classList.remove("active");
};

progressOne.onclick = function () {
  progressCarousel.style = "--carousel-index:1;";
  progressZero.classList.remove("active");
  progressOne.classList.add("active");
  progressTwo.classList.remove("active");
  progressThree.classList.remove("active");
};

progressTwo.onclick = function () {
  progressCarousel.style = "--carousel-index:2;";
  progressZero.classList.remove("active");
  progressOne.classList.remove("active");
  progressTwo.classList.add("active");
  progressThree.classList.remove("active");
};

progressThree.onclick = function () {
  progressCarousel.style = "--carousel-index:3;";
  progressZero.classList.remove("active");
  progressOne.classList.remove("active");
  progressTwo.classList.remove("active");
  progressThree.classList.add("active");
};
