import { scrollTop } from "./components/scrollButton.js";
import { baseUrl, blogPosts } from "./components/fetchApi.js";
import "./components/carousel.js";
import "./components/newsletter.js";

blogPosts(baseUrl);
scrollTop();
