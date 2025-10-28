// HEX
const hexBtn = document.querySelector('.hex-btn');
const hexColorValue = document.querySelector('.hex-color-value');
const hexColorContainer = document.querySelector('.hex-color-container');
// RGB
const rgbBtn = document.querySelector('.rgb-btn');
const getRedInputValue = document.querySelector("#red")
const getGreenInputValue = document.querySelector("#green")
const getBlueInputValue = document.querySelector("#blue")
const rgbColorContainer = document.querySelector('.rgb-color-container');
const rgbColorValue = document.querySelector('.rgb-color-value');
const hexCopyBtn= document.querySelector('.hex-copy-btn')
const rgbCopyBtn= document.querySelector('.rgb-copy-btn')

// create Random HEX Color
function createRandomHexColor() {
  let characterSet = '0123456789ABCDEF';
  let hexColor = '';
  for (let i = 0, characterSetLength = characterSet.length; i < 6; i++) {
    hexColor += characterSet.charAt(
      Math.floor(Math.random() * characterSetLength)
    );
  }
  let ColorValue = `#${hexColor}`;
  hexColorValue.textContent = ColorValue;
  hexColorContainer.style.backgroundColor = ColorValue;
  hexBtn.style.color = ColorValue;
}
hexBtn.addEventListener('click', createRandomHexColor);


// RGB Color Generator 
function createRandomRGBColor() {
  let extractRedValue = getRedInputValue.value;
  let extractGreenValue = getGreenInputValue.value;
  let extractBlueValue = getBlueInputValue.value;
  
  let rgbColor = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
  rgbColorValue.textContent = rgbColor;
  rgbColorContainer.style.backgroundColor = rgbColor
  rgbBtn.style.color = rgbColor;

}
rgbBtn.addEventListener('click', createRandomRGBColor);

function copyHexColorToClipBoard() {
  navigator.clipboard.writeText(hexColorValue.textContent);
  alert("Hex Color is Copied to ClipBoard")
}
function copyRGBColorToClipBoard() {
  navigator.clipboard.writeText(rgbColorValue.textContent);
  alert('rgb Color is Copied to ClipBoard');
}
hexCopyBtn.addEventListener('click', copyHexColorToClipBoard);
rgbCopyBtn.addEventListener('click', copyRGBColorToClipBoard);