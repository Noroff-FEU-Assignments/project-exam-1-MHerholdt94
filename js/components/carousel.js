// The following code is written by myself with the help of a video on
// YouTube on how to make a carousel/slider in the style of the Netflix
// home page. The code is read and understood before implementing.
// More on this in the report.

const carousel = document.querySelector(".carousel");

// assigns var name "btn" to one of the two carousel-btn's,
// depending on which one the user clicks, calls function
document.addEventListener("click", (e) => {
  let btn;

  if (e.target.matches(".carousel-btn")) {
    btn = e.target;
  } else {
    btn = e.target.closest(".carousel-btn");
  }

  if (btn) {
    postCarousel(btn);
  }
});

function postCarousel(btn) {
  // gets the property value of the CSS variable "--carousel-index"
  const carouselIndex = parseInt(
    getComputedStyle(carousel).getPropertyValue("--carousel-index")
  );
  const progress = document.querySelector(".progress-bar");
  const progressCount = progress.children.length;

  // if the btn clicked has the class name "prev"
  if (btn.classList.contains("prev")) {
    if (carouselIndex - 1 < 0) {
      carousel.style.setProperty("--carousel-index", progressCount - 1);
      progress.children[carouselIndex].classList.remove("active");
      progress.children[progressCount - 1].classList.add("active");
    } else {
      carousel.style.setProperty("--carousel-index", carouselIndex - 1);
      progress.children[carouselIndex].classList.remove("active");
      progress.children[carouselIndex - 1].classList.add("active");
    }
  }

  // if the btn clicked has the class name "next"
  if (btn.classList.contains("next")) {
    if (carouselIndex + 1 >= progressCount) {
      carousel.style.setProperty("--carousel-index", 0);
      progress.children[carouselIndex].classList.remove("active");
      progress.children[0].classList.add("active");
    } else {
      carousel.style.setProperty("--carousel-index", carouselIndex + 1);
      progress.children[carouselIndex].classList.remove("active");
      progress.children[carouselIndex + 1].classList.add("active");
    }
  }
}

// function for progress bar
function progressLength(progress) {
  const numberOfPosts = 9;

  for (let i = 1; i <= numberOfPosts; i++) {
    carousel.innerHTML += `<div class="post-div"></div>`;
  }

  const postCount = carousel.children.length;

  // gets property value of CSS variable "--posts-per-screen"
  const postsPerScreen = parseInt(
    getComputedStyle(carousel).getPropertyValue("--posts-per-screen")
  );

  // gets the property value of the CSS variable "--carousel-index"
  const carouselIndex = parseInt(
    getComputedStyle(carousel).getPropertyValue("--carousel-index")
  );

  // calculates the length of the progress bar
  // length = number of total posts(9) / posts shown on screen(3)
  // Math.ceil() in case of odd number of total posts
  const progressPostCount = Math.ceil(postCount / postsPerScreen);

  // create div elements depending on progressPostCount result
  for (let i = 0; i < progressPostCount; i++) {
    const progressBtn = document.createElement("div");

    progressBtn.classList.add("progress-item");

    // if progress item has same index as carouselIndex, add class
    if (i === carouselIndex) {
      progressBtn.classList.add("active");
    }

    // add unique class to each progress item
    if (i === 0) {
      progressBtn.classList.add("progress-zero");
    } else if (i === 1) {
      progressBtn.classList.add("progress-one");
    } else if (i === 2) {
      progressBtn.classList.add("progress-two");
    }
    // else if (i === 3) {
    //   progressBtn.classList.add("progress-three");
    // }

    progress.append(progressBtn);
  }
}

document.querySelectorAll(".progress-bar").forEach(progressLength);
