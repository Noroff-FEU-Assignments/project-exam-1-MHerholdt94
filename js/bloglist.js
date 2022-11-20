import {
  scrollTop,
  goBack,
  hamburgerMenu,
  buttonScroll,
} from "./components/SiteButtons.js";
import { baseUrl, blogPosts } from "./components/fetchPosts.js";
import "./components/newsletter.js";

window.addEventListener("scroll", buttonScroll);
blogPosts(baseUrl);
hamburgerMenu();
goBack();
scrollTop();

// Searching and sorting
const postsContainer = document.querySelector(".posts-container");
const bloglistHeading = document.querySelector(".bloglist-heading");
const viewBtns = document.querySelectorAll(".view-btn");
const viewMore = document.querySelector("#viewMore");
const categories = document.querySelector("#categories");
const searchBtn = document.querySelector(".search-btn");
const search = document.querySelector("#searchInput");
const resetBtn = document.querySelector(".sort-reset");
const icon = document.querySelector(".icon");

const searchIcon = ["fa-solid", "fa-search"];
const listIcon = ["fa-solid", "fa-list"];
const starIcon = ["fa-regular", "fa-star"];
const articleIcon = ["fa-solid", "fa-book-open"];
const playingIcon = ["fa-solid", "fa-music"];
const techniqueIcon = ["fa-solid", "fa-wrench"];
const drumIcon = ["fa-solid", "fa-drum"];

function hideViewBtns() {
  viewBtns.forEach((button) => {
    button.style.display = "none";
  });
}

searchBtn.onclick = function () {
  let newUrl;
  newUrl = baseUrl + `&search=${search.value}`;
  postsContainer.innerHTML = `<div class="loading"></div>`;
  icon.className = "";
  icon.classList.add(...searchIcon);
  categories.selectedIndex = 0;
  bloglistHeading.innerText = "Search";
  search.value = "";
  hideViewBtns();
  blogPosts(newUrl);
};

categories.onchange = function () {
  let newUrl;

  const categoryChosen = event.target.value;

  if (categoryChosen === "featured") {
    newUrl = baseUrl + "&sticky=true";
    icon.className = "";
    icon.classList.add(...starIcon);
    bloglistHeading.innerText = event.target.value;
    hideViewBtns();
  } else {
    newUrl = baseUrl + `&categories=${categoryChosen}`;
    hideViewBtns();

    if (categoryChosen == 7) {
      bloglistHeading.innerText = "Article";
      icon.className = "";
      icon.classList.add(...articleIcon);
    } else if (categoryChosen == 6) {
      bloglistHeading.innerText = "Technique";
      icon.className = "";
      icon.classList.add(...techniqueIcon);
    } else if (categoryChosen == 8) {
      bloglistHeading.innerText = "Playing";
      icon.className = "";
      icon.classList.add(...playingIcon);
    } else if (categoryChosen == 5) {
      bloglistHeading.innerText = "Drum set";
      icon.className = "";
      icon.classList.add(...drumIcon);
    }
  }

  search.value = "";
  postsContainer.innerHTML = `<div class="loading"></div>`;
  blogPosts(newUrl);
};

resetBtn.onclick = function () {
  hideViewBtns();
  search.value = "";
  postsContainer.innerHTML = `<div class="loading"></div>`;
  categories.selectedIndex = 0;
  bloglistHeading.innerText = "All posts";
  icon.className = "";
  icon.classList.add(...listIcon);
  viewMore.style.display = "block";
  blogPosts(baseUrl);
};
