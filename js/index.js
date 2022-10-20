import { scrollTop } from "./components/scrollButton.js";
// import { baseUrl, indexPosts } from "./components/fetchApi.js";
// import "./components/carousel.js";

scrollTop();
// indexPosts(baseUrl);

const baseUrl =
  "http://localhost/timesignature/wp-json/wp/v2/posts?_embed&per_page=12";

const carouselContainer = document.querySelector(".carousel");

async function latestBlogs(url) {
  try {
    const response = await fetch(url);
    const results = await response.json();

    carouselContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      const post = results[i];

      carouselContainer.innerHTML += `<a href="blog.html?id=${post.id}" class="carousel-post" style="background-image: url(${post._embedded["wp:featuredmedia"]["0"].source_url});">
                                            <div class="carousel-details">
                                                <h3>${post.title.rendered}</h3>
                                                <p class="post-category">${post._embedded["wp:term"]["0"]["0"].name}</p>
                                                <div class="carousel-excerpt">${post.excerpt.rendered}</div>
                                            </div>
                                        </a>`;
    }
  } catch (error) {
    console.log("An error has occured", error);
  }
}

latestBlogs(baseUrl);
