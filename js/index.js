import { scrollTop, hamburgerMenu } from "./components/siteButtons.js";
import { baseUrl, blogPosts } from "./components/fetchPosts.js";
// import "./components/carousel.js";
import "./components/carousel.js";
import "./components/newsletter.js";

blogPosts(baseUrl);
hamburgerMenu();
scrollTop();

// Progress bar items as clickable buttons
const progressItems = document.querySelectorAll(".progress-item");
const progressCarousel = document.querySelector(".carousel");

function removeClass() {
  progressItems.forEach((progress) => {
    progress.classList.remove("active");
  });
}

progressItems.forEach((e) => {
  e.addEventListener("click", function addClass(event) {
    removeClass();
    event.target.classList.add("active");

    const targetClass = event.target.classList[1];

    if (targetClass === "progress-zero") {
      progressCarousel.style = "--carousel-index:0;";
    } else if (targetClass === "progress-one") {
      progressCarousel.style = "--carousel-index:1;";
    } else if (targetClass === "progress-two") {
      progressCarousel.style = "--carousel-index:2;";
    } else if (targetClass === "progress-three") {
      progressCarousel.style = "--carousel-index:3;";
    }
  });
});
