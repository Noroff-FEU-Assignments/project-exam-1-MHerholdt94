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

    progressBar.append(barItem);
  }
}

// Throttle (unsure if needed)

// const throttleProgressBar = throttle(() => {
//   document.querySelectorAll(".progress-bar").forEach(calculateProgressBar);
// }, 250);

// window.addEventListener("resize", throttleProgressBar);

// function throttle(cb, delay = 1000) {
//   let shouldWait = false;
//   let waitingArgs;
//   const timeoutFunc = () => {
//     if (waitingArgs == null) {
//       shouldWait = false;
//     } else {
//       cb(...waitingArgs);
//       waitingArgs = null;
//       setTimeout(timeoutFunc, delay);
//     }
//   };

//   return (...args) => {
//     if (shouldWait) {
//       waitingArgs = args;
//       return;
//     }

//     cb(...args);
//     shouldWait = true;
//     setTimeout(timeoutFunc, delay);
//   };
// }
