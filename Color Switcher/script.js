const colorBox = document.querySelectorAll('.box');
const body = document.querySelector('body');
colorBox.forEach((box) => {
  box.addEventListener('click', (e) => {
    const color = e.target.id;
    if (color) {
      body.style.backgroundColor = color;
    }
  });
});
