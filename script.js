const button = document.querySelector(".hero-button");

if (button) {
  button.addEventListener("click", () => {
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "menu.html";
    }, 1000);
  });
}

const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

if (menuOpenButton) {
  menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
  });
}

if (menuCloseButton) {
  menuCloseButton.addEventListener("click", () => {
    menuOpenButton.click();
  });
}
