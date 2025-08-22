const showToastBtn = document.querySelector('.show-toast');
const horizontalPosition = document.querySelector('#horizontal-position');
const verticalPosition = document.querySelector('#vertical-position');
const toastContainer = document.querySelector('.toast-container');
const toastType = document.querySelector('#toast-type');
const toastMessage = document.querySelector('#toast-message');
showToastBtn.addEventListener('click', ()=>{
  const newToast = document.createElement('div');
  newToast.classList.add('toast');
  
   
    if(toastType.value==='success'){
      newToast.innerText = `✓ ${toastMessage.value} ✕`;
        
    }
   else if(toastType.value==='waring'){

    }
   else if(toastType.value==='success'){

    }
   else {
       
    }


     if(horizontalPosition.value ==='right'){
      toastContainer.classList.add('right')
     }
     else{
      toastContainer.classList.remove('right');
     }
     if(verticalPosition.value==='bottom'){
      toastContainer.classList.add('bottom');
     }
     else{
      toastContainer.classList.remove('bottom');
     }

     
})
