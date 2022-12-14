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

export function hamburgerMenu() {
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const menu = document.querySelector("#hamburgerMenu");

  hamburgerBtn.onclick = function () {
    if (menu.style.top === "64px") {
      menu.style.top = "240px";
      menu.style.opacity = "0";
      menu.style.pointerEvents = "none";
    } else {
      menu.style.top = "64px";
      menu.style.opacity = "1";
      menu.style.pointerEvents = "auto";
    }
  };
}

export function buttonScroll() {
  const backBtn = document.querySelector(".back-btn");
  const windowWidth = window.matchMedia("(max-width: 768px)");

  if (windowWidth.matches && window.scrollY >= 205) {
    backBtn.style.position = "fixed";
    backBtn.style.top = "64px";
    backBtn.style.height = "40px";
  } else {
    backBtn.style.position = "relative";
    backBtn.style.top = "0px";
  }
}
