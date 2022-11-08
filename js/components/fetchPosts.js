// Base URL
export const baseUrl =
  "https://devholdt.no/timesignature/wp-json/wp/v2/posts?_embed&per_page=12";

// Blog posts general
const carouselClass = document.getElementsByClassName("carousel");
const bloglistClass = document.getElementsByClassName("posts-container");
const carouselExists = carouselClass.length > 0;
const bloglistExists = bloglistClass.length > 0;

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

        const postDate = new Date(post.date).toLocaleDateString("en-uk");

        carouselContainer.innerHTML += `<a href="blog.html?id=${post.id}" class="carousel-post" style="background-image: url(${post._embedded["wp:featuredmedia"]["0"].source_url});">
                                            <div class="carousel-details">
                                                <h3>${post.title.rendered}</h3>
                                                <div class="post-details">
                                                  <span class="post-category">${post._embedded["wp:term"]["0"]["0"].name}</span>
                                                  <span class="post-date">${postDate}</span>
                                                </div>
                                                <div class="carousel-excerpt">${post.excerpt.rendered}</div>
                                            </div>
                                        </a>`;

        if (i <= 3) {
          indexMobile.innerHTML += `<a href="blog.html?id=${post.id}" class="index-mobile_post" style="background-image: url(${post._embedded["wp:featuredmedia"]["0"].source_url});">
                                    <div class="index-mobile_details">
                                      <h3>${post.title.rendered}</h3>
                                      <div class="post-details">
                                        <span class="post-category">${post._embedded["wp:term"]["0"]["0"].name}</span>
                                        <span class="post-date">${postDate}</span>
                                      </div>
                                      <div class="index-mobile_excerpt">${post.excerpt.rendered}</div>
                                    </div>
                                  </a>`;
        }
      }
    }

    // BLOG LIST PAGE
    if (bloglistExists) {
      const postsContainer = document.querySelector(".posts-container");

      postsContainer.innerHTML = "";

      for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        const postDate = new Date(post.date).toLocaleDateString("en-uk");

        postsContainer.innerHTML += `<a href="blog.html?id=${post.id}" class="bloglist-post">
                                          <img src="${post._embedded["wp:featuredmedia"]["0"].source_url}" alt="${post._embedded["wp:featuredmedia"]["0"].alt_text}">
                                          <div class="bloglist-details">
                                            <h3>${post.title.rendered}</h3>
                                            <div class="post-details">
                                              <span class="post-category">${post._embedded["wp:term"]["0"]["0"].name}</span>
                                              <span class="post-date">${postDate}</span>
                                            </div>
                                            <div class="bloglist-excerpt">${post.excerpt.rendered}</div>
                                          </div>
                                        </a>`;

        const bloglistPost = document.querySelectorAll(".bloglist-post");

        for (let i = 0; i < bloglistPost.length; i++) {
          if (i > 5) {
            bloglistPost[i].style.display = "none";

            viewMore.onclick = function () {
              for (let i = 0; i < bloglistPost.length; i++) {
                bloglistPost[i].style.display = "grid";
              }
              viewMore.style.display = "none";
              viewLess.style.display = "block";
            };

            viewLess.onclick = function () {
              for (let i = 0; i < bloglistPost.length; i++) {
                if (i > 5) {
                  bloglistPost[i].style.display = "none";
                }
              }
              viewMore.style.display = "block";
              viewLess.style.display = "none";
            };
          }
        }
      }
    }
  } catch (error) {
    console.log("An error has occured", error);
  }
}

export default baseUrl;
