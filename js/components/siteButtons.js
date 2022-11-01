export function scrollTop() {
  const scrollButton = document.querySelector(".scroll-btn");

  scrollButton.onclick = function () {
    document.documentElement.scrollTop = 0;
  };
}

export function goBack() {
  document.querySelector(".breadcrumb-btn").addEventListener("click", () => {
    history.back();
  });
}

export function hamburgerMenu() {
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const menu = document.querySelector("#hamburgerMenu");

  hamburgerBtn.onclick = function () {
    if (menu.style.top === "68px") {
      menu.style.top = "240px";
      menu.style.opacity = "0";
      menu.style.pointerEvents = "none";
    } else {
      menu.style.top = "68px";
      menu.style.opacity = "1";
      menu.style.pointerEvents = "auto";
    }
  };
}
