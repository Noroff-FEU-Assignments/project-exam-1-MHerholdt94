document.addEventListener("click", (e) => {
  let handle;

  if (e.target.matches(".handle")) {
    handle = e.target;
  } else {
    handle = e.target.closest(".handle");
  }

  if (handle != null) onHandleClick(handle);
});

function onHandleClick(handle) {
  const carousel = handle
    .closest(".carousel-container")
    .querySelector(".carousel");
  const carouselIndex = parseInt(
    getComputedStyle(carousel).getPropertyValue("--carousel-index")
  );

  if (handle.classList.contains("left-handle")) {
    carousel.style.setProperty("--carousel-index", carouselIndex + 1);
  }

  if (handle.classList.contains("right-handle")) {
    carousel.style.setProperty("--carousel-index", carouselIndex - 1);
  }
}
