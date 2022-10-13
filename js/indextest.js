// CAROUSEL FUNCTION

const buttons = document.querySelectorAll("[data-carousel-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

// FETCH API

const url =
  "http://localhost/timesignature/wp-json/wp/v2/posts?_embed&per_page=12";

const slideContainer = document.querySelectorAll(".slide");

async function slidePosts() {
  try {
    const response = await fetch(url);
    const posts = await response.json();

    slideContainer.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];

      slideContainer.innerHTML += `${post.title.rendered}`;
    }
  } catch (error) {
    console.log("An error has occured", error);
  }
}

slidePosts();
