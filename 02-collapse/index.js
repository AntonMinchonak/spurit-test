/* Я комментарий, который ждал тебя здесь. Удали меня и напиши хороший код! */

const hideBtn = document.querySelector(".collapsible__action--visible");
const showBtn = document.querySelector(".collapsible__action--hidden");
const popupWrap = document.querySelector(".collapsible__content");
const popup = document.querySelector(".collapsible__content p");
const time = 300;
let delay = time - 50;

hideBtn.style.display = "none";
popup.style.transform = "translateY(-400px)";
popupWrap.style.overflow = "hidden";

const animation = popup.animate(
  [
    {
      transform: "translateY(-100px)",
    },
    {
      transform: "translateY(0px)",
    },
  ],
  {
    duration: time,
    fill: "forwards",
    easing: "ease-in-out",
  }
);

animation.pause();

showBtn.onclick = () => {
  animation.playbackRate = 1;
  animation.play();
//   setTimeout(() => { animation.pause() }, delay);
    
  showBtn.style.display = "none";
  hideBtn.style.display = "block";
};

hideBtn.onclick = () => {
  animation.playbackRate = -1;
  animation.play();
//   setTimeout(() => { animationBack.pause() }, delay);
  showBtn.style.display = "block";
  hideBtn.style.display = "none";
};