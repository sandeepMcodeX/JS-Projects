const clock = document.querySelector('#clock');
setInterval(() => {
  const clockTime = new Date().toLocaleTimeString();
  clock.innerHTML = clockTime;
}, 1000)