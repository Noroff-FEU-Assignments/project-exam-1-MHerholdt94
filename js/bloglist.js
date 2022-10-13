const baseUrl =
  "http://localhost/timesignature/wp-json/wp/v2/posts?_embed&per_page=12";

const newestContainer = document.querySelector(".newest-container");
const featuredContainer = document.querySelector(".featured-container");
const blogListBottom = document.querySelector(".bloglist-bottom");
const allContainer = document.querySelector(".all-container");

const viewMore = document.querySelector("#viewMore");
const viewLess = document.querySelector("#viewLess");

async function blogList(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();

    console.log(posts);

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
        featuredPost = posts[i];

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

blogList(baseUrl);

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
