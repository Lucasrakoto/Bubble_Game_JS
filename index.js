const mouseMove = document.querySelector(".mousemove");
const buttonPlay = document.querySelector(".btn");
const loading = document.querySelector(".loading");
const homePage = document.querySelector(".home");
const gamePage = document.querySelector(".game_container");
const scoreView = document.querySelector(".score");
let animationProperty = "homeAnimation 1s ease-in forwards";
let bubbleRemoved = 0;
const source = "./assets/mp3/mozika.mp3";
let timer = 1000;
const ring = () => {
  const audio = new Audio();
  audio.src = source;
  audio.play();
};

// music intro
window.addEventListener("load", () => {
  // alert("hello");
  // ring();
  // setInterval(ring(), 60000);
});

// animation souris
window.addEventListener("mousemove", (e) => {
  mouseMove.style.left = e.pageX + "px";
  mouseMove.style.top = e.pageY + "px";
});

// animation loading apres click sur buttonPlay
buttonPlay.addEventListener("click", (e) => {
  setTimeout(() => {
    // ring();
    loading.style.display = "flex";
    buttonPlay.style.display = "none";
    setTimeout(() => {
      loading.style.opacity = 0;
      homePage.style.setProperty("--anim", animationProperty);
      setTimeout(() => {
        scoreView.textContent = "Go";
        setTimeout(() => {
          scoreView.textContent = bubbleRemoved;
        }, 1000);
      }, 1500);
    }, 8000);
  }, 1000);
});
// creation bulle
const createBubble = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  gamePage.appendChild(bubble);

  const size = Math.random() * 200 + 100 + "px";
  bubble.style.width = size;
  bubble.style.height = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusOrMoins = Math.random > 0.5 ? -1 : 1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusOrMoins + "%");

  bubble.addEventListener("click", (e) => {
    // e.target.remove();
    bubbleRemoved++;
    scoreView.textContent = bubbleRemoved;
    bubble.remove();
  });
  setTimeout(() => {
    bubble.remove();
  }, 20000);

  // if (bubbleRemoved === 10) {
  //   timer = timer - 500;
  //   clearInterval();
  //   console.log(timer);
  // }
};

// creation plusieur bulles
setInterval(createBubble, timer);

// suite -> logique next level + local storage pour afficher meilleure score
