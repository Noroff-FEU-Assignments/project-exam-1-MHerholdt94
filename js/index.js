// const baseUrl =
//   "http://localhost/timesignature/wp-json/wp/v2/posts?_embed&per_page=12";

// const sliderPosts = document.querySelector(".slider-posts");

// async function blogList(url) {
//   try {
//     const response = await fetch(url);
//     const posts = await response.json();

//     sliderPosts.innerHTML = "";

//     for (let i = 0; i < posts.length; i++) {
//       if (i === 3) {
//         break;
//       }

//       const post = posts[i];

//       sliderPosts.innerHTML += `<a href="blog.html?id=${post.id}" class="slider-post" style="background-image: url(${post._embedded["wp:featuredmedia"]["0"].source_url});">
//                                     <div class="slider-details">
//                                         <h3>${post.title.rendered}</h3>
//                                         <p class="post-category">${post._embedded["wp:term"]["0"]["0"].name}</p>
//                                         <div class="slider-excerpt">${post.excerpt.rendered}</div>
//                                     </div>
//                                 </a>`;
//     }
//   } catch (error) {
//     console.log("An error has occured", error);
//   }
// }

// blogList(baseUrl);
