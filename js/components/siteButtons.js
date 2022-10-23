export function scrollTop() {
  const scrollButton = document.querySelector(".scroll-btn");

  scrollButton.onclick = function () {
    document.documentElement.scrollTop = 0;
  };
}

export function goBack() {
  document.querySelector(".back-btn").addEventListener("click", () => {
    history.back();
  });
}
