const url =
  "http://localhost/timesignature/wp-json/wp/v2/posts?_embed&per_page=12";

const carouselContainer = document.querySelector(".carousel-container");

async function blogList(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();

    return posts;
  } catch (error) {
    console.log("An error has occured: ", error);
  }
}

blogList(url);
