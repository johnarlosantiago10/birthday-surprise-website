const button = document.querySelector(".hero-button");

if (button) {
  button.addEventListener("click", () => {
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "menu.html";
    }, 1000);
  });
}

// MOBILE MENU

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

// OPEN LETTER

function openLetter() {
  const music = document.getElementById("letterMusic");
  const intro = document.querySelector(".letter-intro");
  const letter = document.querySelector("#letterContent");
  const navbar = document.querySelector("#navbar");

  // Play music
  if (music) {
    music.volume = 0.5;
    music.play();
  }

  // Hide envelope

  intro.classList.add("hide");

  setTimeout(() => {
    intro.style.display = "none";

    // Hide navbar

    if (navbar) {
      navbar.style.display = "none";
    }

    // Show letter

    letter.style.display = "flex";

    setTimeout(() => {
      letter.classList.add("show");
    }, 50);
  }, 1000);
}

// BACK TO LETTER

function backToLetter(event) {
  event.preventDefault();

  const intro = document.querySelector(".letter-intro");
  const letter = document.querySelector("#letterContent");
  const navbar = document.querySelector("#navbar");
  const music = document.getElementById("letterMusic");

  // Stop music

  if (music) {
    music.pause();
    music.currentTime = 0;
  }

  letter.classList.remove("show");

  setTimeout(() => {
    letter.style.display = "none";

    intro.style.display = "flex";

    if (navbar) {
      navbar.style.display = "flex";
    }

    setTimeout(() => {
      intro.classList.remove("hide");
    }, 50);
  }, 300);
}

// MUSIC CONTROL

const musicControl = document.getElementById("musicControl");
const volumeControl = document.getElementById("volumeControl");
const letterMusic = document.getElementById("letterMusic");

if (musicControl && letterMusic) {
  musicControl.addEventListener("click", () => {
    if (letterMusic.paused) {
      letterMusic.play();

      musicControl.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
      letterMusic.pause();

      musicControl.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
  });

  if (volumeControl) {
    volumeControl.addEventListener("input", () => {
      letterMusic.volume = volumeControl.value;
    });
  }
}
