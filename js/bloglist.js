import { scrollTop } from "./components/scrollButton.js";
import { baseUrl, blogListPosts } from "./components/fetchApi.js";

// View more/less container
const blogListBottom = document.querySelector(".bloglist-bottom");
const viewMore = document.querySelector("#viewMore");
const viewLess = document.querySelector("#viewLess");

viewMore.onclick = function () {
  blogListBottom.style.display = "block";
  viewMore.style.display = "none";
  viewLess.style.display = "block";
};

viewLess.onclick = function () {
  blogListBottom.style.display = "none";
  viewMore.style.display = "block";
  viewLess.style.display = "none";
};

blogListPosts(baseUrl);

scrollTop();
