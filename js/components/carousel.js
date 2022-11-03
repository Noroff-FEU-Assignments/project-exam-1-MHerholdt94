// The following code is written with the help of a video on YouTube on
// how to make a carousel/slider in the style of the Netflix home page.
// The code is read, written and understood before implementing.
// More on this in the report.

document.addEventListener("click", (e) => {
  let button;

  if (e.target.matches(".carousel-btn")) {
    button = e.target;
  } else {
    button = e.target.closest(".carousel-btn");
  }

  if (button != null) onButtonClick(button);
});

function onButtonClick(button) {
  const progressBar = button
    .closest(".index-latest")
    .querySelector(".progress-bar");

  const carousel = button
    .closest(".carousel-container")
    .querySelector(".carousel");

  const carouselIndex = parseInt(
    getComputedStyle(carousel).getPropertyValue("--carousel-index")
  );

  const progressBarItemCount = progressBar.children.length;

  if (button.classList.contains("prev")) {
    if (carouselIndex - 1 < 0) {
      carousel.style.setProperty("--carousel-index", progressBarItemCount - 1);
      progressBar.children[carouselIndex].classList.remove("active");
      progressBar.children[progressBarItemCount - 1].classList.add("active");
    } else {
      carousel.style.setProperty("--carousel-index", carouselIndex - 1);
      progressBar.children[carouselIndex].classList.remove("active");
      progressBar.children[carouselIndex - 1].classList.add("active");
    }
  }

  if (button.classList.contains("next")) {
    if (carouselIndex + 1 >= progressBarItemCount) {
      carousel.style.setProperty("--carousel-index", 0);
      progressBar.children[carouselIndex].classList.remove("active");
      progressBar.children[0].classList.add("active");
    } else {
      carousel.style.setProperty("--carousel-index", carouselIndex + 1);
      progressBar.children[carouselIndex].classList.remove("active");
      progressBar.children[carouselIndex + 1].classList.add("active");
    }
  }
}

document.querySelectorAll(".progress-bar").forEach(calculateProgressBar);

function calculateProgressBar(progressBar) {
  const carousel = progressBar
    .closest(".index-latest")
    .querySelector(".carousel");

  const itemCount = carousel.children.length;

  const itemsPerScreen = parseInt(
    getComputedStyle(carousel).getPropertyValue("--items-per-screen")
  );

  const carouselIndex = parseInt(
    getComputedStyle(carousel).getPropertyValue("--carousel-index")
  );

  const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);

  for (let i = 0; i < progressBarItemCount; i++) {
    const barItem = document.createElement("div");

    barItem.classList.add("progress-item");

    if (i === carouselIndex) {
      barItem.classList.add("active");
    }

    if (i === 0) {
      barItem.classList.add("progress-zero");
    } else if (i === 1) {
      barItem.classList.add("progress-one");
    } else if (i === 2) {
      barItem.classList.add("progress-two");
    } else if (i === 3) {
      barItem.classList.add("progress-three");
    }

    progressBar.append(barItem);
  }
}
