const COLOR_CHANGE_DELAY = 1000;
let idInt = null;
const btnStart = document.querySelector(`[data-start]`);
const btnStop = document.querySelector(`[data-stop]`);
const bodyEl = document.querySelector(`body`);

btnStop.disabled = true;

btnStart.addEventListener(`click`, onButtonStartClick);
btnStop.addEventListener(`click`, onButtonStopClick);
function onButtonStartClick() {
  btnStart.disabled = true;
  btnStop.disabled = false;
  idInt = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, COLOR_CHANGE_DELAY);
}

function onButtonStopClick() {
  btnStart.disabled = false;
  btnStop.disabled = true;

  clearInterval(idInt);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
