import { scrollTop } from "./components/scrollButton.js";
import { baseUrl, indexPosts } from "./components/fetchApi.js";

indexPosts(baseUrl);

scrollTop();
