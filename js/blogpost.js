// const baseUrl = "http://localhost/timesignature/wp-json/wp/v2/posts";
// const testContainer = document.querySelector(".test-container");

// async function blogPost(url) {
//   try {
//     const response = await fetch(url);
//     const results = await response.json();

//     testContainer.innerHTML = "";

//     for (let i = 0; i < results.length; i++) {
//       const post = results[0];

//       console.log(post);

//       testContainer.innerHTML = `${post.title.rendered}${post.content.rendered}`;
//     }
//   } catch (error) {
//     console.log(error);
//     testContainer.innerHTML = "An error occured";
//   }
// }

// blogPost(baseUrl);
