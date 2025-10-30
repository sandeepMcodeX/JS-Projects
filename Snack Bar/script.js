const buttonAll = document.querySelectorAll('button');
let toastBox = document.querySelector('.toastBox');
buttonAll.forEach((button) => {
  button.addEventListener('click', (e)=>{
    showToast(e.target.id)
  });
})
let successMsg =
 `<i class="fa-solid fa-circle-check"></i>  Successfully Submitted`;
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>  Please fix the error';
let invalidMsg =
  '<i class="fa-solid fa-circle-exclamation"></i>  Invalid input,check again';

function showToast(type) {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  
   if (type === 'success') {
     toast.innerHTML = successMsg;
     
   } else if (type === 'error') {
     toast.innerHTML = errorMsg;
     toast.classList.add('error')
     
   } else if (type === 'invalid') {
     toast.innerHTML = invalidMsg;
     toast.classList.add('invalid');
   }
   
  
  toastBox.appendChild(toast);

   setTimeout(() => toast.remove(), 6000);
}