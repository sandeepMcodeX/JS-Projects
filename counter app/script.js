const decreaseButton = document.querySelector('.minusButton')
const increaseButton = document.querySelector('.plusButton')
const outputValue = document.querySelector('.outputValue')
const userInput = document.querySelector('.input-sty')
const resetButton = document.querySelector('.resetButton')

function getValues() {
   return {
      result: parseInt(outputValue.innerText),
      input:parseInt(userInput.value)||1
   }
}

decreaseButton.addEventListener('click',()=>{
   const { result, input } = getValues();
   outputValue.innerText= result-input;
   
})

increaseButton.addEventListener('click',()=>{
   const { result, input } = getValues();
   outputValue.innerText= result+input;

})

resetButton.addEventListener('click',()=>{
  outputValue.innerText=0;
  userInput.value=1;
})
