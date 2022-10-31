import { scrollTop, goBack, hamburgerMenu } from "./components/SiteButtons.js";
import { baseUrl, blogPosts } from "./components/fetchApi.js";
import "./components/newsletter.js";

blogPosts(baseUrl);
hamburgerMenu();
goBack();
scrollTop();

// Bloglist page buttons
const newestButton = document.querySelector(".newest-btn");
const featuredButton = document.querySelector(".featured-btn");
const newestBlogs = document.querySelector(".bloglist-newest");
const featuredBlogs = document.querySelector(".bloglist-featured");
const restContainer = document.querySelector(".rest-container");

const viewMore = document.querySelector("#viewMore");
const viewLess = document.querySelector("#viewLess");

newestButton.onclick = function () {
  featuredBlogs.style.display = "none";
  newestBlogs.style.display = "block";
  viewMore.style.display = "block";
};

featuredButton.onclick = function () {
  featuredBlogs.style.display = "block";
  newestBlogs.style.display = "none";
  viewMore.style.display = "none";
  viewLess.style.display = "none";
  restContainer.style.display = "none";
};

viewMore.onclick = function () {
  restContainer.style.display = "grid";
  viewMore.style.display = "none";
  viewLess.style.display = "block";
};

viewLess.onclick = function () {
  restContainer.style.display = "none";
  viewMore.style.display = "block";
  viewLess.style.display = "none";
};
