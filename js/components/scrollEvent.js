export function buttonScroll() {
  const backBtn = document.querySelector(".back-btn");
  const windowWidth = window.matchMedia("(max-width: 768px");

  if (windowWidth.matches && window.scrollY >= 205) {
    backBtn.style.position = "fixed";
    backBtn.style.top = "68px";
    backBtn.style.height = "40px";
  } else {
    backBtn.style.position = "relative";
    backBtn.style.top = "0px";
  }
}
