// Base URL
export const baseUrl =
  "https://devholdt.no/timesignature/wp-json/wp/v2/posts?_embed&per_page=12";

// Blog posts general
const carouselClass = document.getElementsByClassName("carousel");
const bloglistClasses = document.querySelectorAll(
  ".newest-container, .featured-container, .all-container"
);
const carouselExists = carouselClass.length > 0;
const bloglistExists = bloglistClasses.length > 0;

export async function blogPosts(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();

    // HOME PAGE
    if (carouselExists) {
      const carouselContainer = document.querySelector(".carousel");
      const indexMobile = document.querySelector(".latest-mobile_posts");

      carouselContainer.innerHTML = "";
      indexMobile.innerHTML = "";

      for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        carouselContainer.innerHTML += `<a href="blog.html?id=${post.id}" class="carousel-post" style="background-image: url(${post._embedded["wp:featuredmedia"]["0"].source_url});">
                                            <div class="carousel-details">
                                                <h3>${post.title.rendered}</h3>
                                                <p class="post-category">${post._embedded["wp:term"]["0"]["0"].name}</p>
                                                <div class="carousel-excerpt">${post.excerpt.rendered}</div>
                                            </div>
                                        </a>`;

        if (i <= 3) {
          indexMobile.innerHTML += `<a href="blog.html?id=${post.id}" class="index-mobile_post" style="background-image: url(${post._embedded["wp:featuredmedia"]["0"].source_url});">
                                    <div class="index-mobile_details">
                                      <h3>${post.title.rendered}</h3>
                                      <p class="post-category">${post._embedded["wp:term"]["0"]["0"].name}</p>
                                      <div class="index-mobile_excerpt">${post.excerpt.rendered}</div>
                                    </div>
                                  </a>`;
        }
      }
    }

    // BLOG LIST PAGE
    if (bloglistExists) {
      const newestContainer = document.querySelector(".newest-container");
      const featuredContainer = document.querySelector(".featured-container");
      const restContainer = document.querySelector(".rest-container");

      newestContainer.innerHTML = "";
      featuredContainer.innerHTML = "";
      restContainer.innerHTML = "";

      for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        if (i <= 5) {
          newestContainer.innerHTML += `<a href="blog.html?id=${post.id}" class="bloglist-post">
                                        <div class="bloglist-img">
                                            <img src="${post._embedded["wp:featuredmedia"]["0"].source_url}">
                                        </div>
                                        <div>
                                            <h3>${post.title.rendered}</h3>
                                            <p class="post-category">${post._embedded["wp:term"]["0"]["0"].name}</p>
                                            <div class="bloglist-excerpt">${post.excerpt.rendered}</div>
                                        </div>
                                    </a>`;
        }

        if (post.sticky === true) {
          featuredContainer.innerHTML += `<a href="blog.html?id=${post.id}" class="bloglist-post">
                                            <div class="bloglist-img">
                                                <img src="${post._embedded["wp:featuredmedia"]["0"].source_url}">
                                            </div>
                                            <div>
                                                <h3>${post.title.rendered}</h3>
                                                <p class="post-category">${post._embedded["wp:term"]["0"]["0"].name}</p>
                                                <div class="bloglist-excerpt">${post.excerpt.rendered}</div>
                                            </div>
                                        </a>`;
        }

        if (i > 5) {
          restContainer.innerHTML += `<a href="blog.html?id=${post.id}" class="bloglist-post">
                                          <div class="bloglist-img">
                                              <img src="${post._embedded["wp:featuredmedia"]["0"].source_url}">
                                          </div>
                                          <div>
                                              <h3>${post.title.rendered}</h3>
                                              <p class="post-category">${post._embedded["wp:term"]["0"]["0"].name}</p>
                                              <div class="bloglist-excerpt">${post.excerpt.rendered}</div>
                                          </div>
                                      </a>`;
        }
      }
    }
  } catch (error) {
    console.log("An error has occured", error);
  }
}

export default baseUrl;
