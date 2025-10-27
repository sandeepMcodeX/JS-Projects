const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const body = document.querySelector("body");


function randomColor() {
  let characters = `0123456789ABCDEF`;
  let hexColor = '#';
  for (let i = 0; i < 6; i++){
    let randomIndex = Math.floor(Math.random() *16);
    hexColor += characters[randomIndex]
  }
  return hexColor;
}

let intervalId;
function startChangingColor() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      body.style.backgroundColor = randomColor();
     }, 1000)
  }
}

function stopChangingColor() {
  clearInterval(intervalId);
  intervalId = null;
}

startBtn.addEventListener('click', startChangingColor);
stopBtn.addEventListener('click', stopChangingColor);

