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

function openLetter() {
  const envelope = document.querySelector(".letter-intro");
  const letter = document.querySelector("#letterContent");

  envelope.classList.add("hide");

  setTimeout(() => {
    envelope.style.display = "none";

    letter.style.display = "flex";

    setTimeout(() => {
      letter.classList.add("show");
    }, 50);
  }, 1000);
}

function openLetter() {
  const intro = document.querySelector(".letter-intro");
  const letter = document.querySelector("#letterContent");
  const navbar = document.querySelector("#navbar");

  intro.classList.add("hide");

  setTimeout(() => {
    intro.style.display = "none";

    navbar.style.display = "none";

    letter.style.display = "flex";

    setTimeout(() => {
      letter.classList.add("show");
    }, 50);
  }, 1000);
}

function backToLetter(event) {
  event.preventDefault();

  const intro = document.querySelector(".letter-intro");
  const letter = document.querySelector("#letterContent");
  const navbar = document.querySelector("#navbar");

  letter.classList.remove("show");

  setTimeout(() => {
    letter.style.display = "none";

    intro.style.display = "flex";
    navbar.style.display = "flex"; // o "block" depende sa navbar mo

    setTimeout(() => {
      intro.classList.remove("hide");
    }, 50);
  }, 300);
}
