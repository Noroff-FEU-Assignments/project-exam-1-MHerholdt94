// Base URL
export const baseUrl =
  "http://localhost/timesignature/wp-json/wp/v2/posts?_embed&per_page=12";

// Blog posts displayed on home page
export async function indexPosts(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();

    const sliderPosts = document.querySelector(".slider-posts");

    sliderPosts.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {
      if (i === 3) {
        break;
      }

      const post = posts[i];

      sliderPosts.innerHTML += `<a href="blog.html?id=${post.id}" class="slider-post" style="background-image: url(${post._embedded["wp:featuredmedia"]["0"].source_url});">
                                    <div class="slider-details">
                                        <h3>${post.title.rendered}</h3>
                                        <p class="post-category">${post._embedded["wp:term"]["0"]["0"].name}</p>
                                        <div class="slider-excerpt">${post.excerpt.rendered}</div>
                                    </div>
                                </a>`;
    }
  } catch (error) {
    console.log("An error has occured", error);
  }
}

// Blog posts displayed on blog list page
export async function blogListPosts(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();

    const newestContainer = document.querySelector(".newest-container");
    const featuredContainer = document.querySelector(".featured-container");
    const allContainer = document.querySelector(".all-container");

    newestContainer.innerHTML = "";
    featuredContainer.innerHTML = "";
    allContainer.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {
      if (i === 5) {
        break;
      }

      const post = posts[i];

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

    for (let i = 0; i < posts.length; i++) {
      if (posts[i].sticky === true) {
        const featuredPost = posts[i];

        featuredContainer.innerHTML += `<a href="blog.html?id=${featuredPost.id}" class="bloglist-post">
                                            <div class="bloglist-img">
                                                <img src="${featuredPost._embedded["wp:featuredmedia"]["0"].source_url}">
                                            </div>
                                            <div>
                                                <h3>${featuredPost.title.rendered}</h3>
                                                <p class="post-category">${featuredPost._embedded["wp:term"]["0"]["0"].name}</p>
                                                <div class="bloglist-excerpt">${featuredPost.excerpt.rendered}</div>
                                            </div>
                                        </a>`;
      }
    }

    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];

      allContainer.innerHTML += `<a href="blog.html?id=${post.id}" class="bloglist-post">
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
  } catch (error) {
    console.log("An error has occured", error);
  }
}

export default baseUrl;
