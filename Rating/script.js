const stars = document.querySelectorAll('.fa-star-o');
const starValue = document.querySelector('.selected-rating-value');

let currentTotalSelectedStars = -1;
stars.forEach((starItem, index) => {
  starItem.dataset.rating = index + 1;
  starItem.addEventListener('mouseover', handleMouseOver);
  starItem.addEventListener("click", handleOnClick);
  starItem.addEventListener("mouseleave", handleMouseLeave);
});

function handleMouseOver(e) {
  console.log(e.target.dataset);
  const currentRatingValue = e.target.dataset.rating;
  if (!currentRatingValue) return;
  else {
    handleUpdateRating(currentRatingValue);
  }
}
function handleUpdateRating(getCurrentRatingValue) {
  for (let i = 0; i < 5; i++) {
    if (i < getCurrentRatingValue) {
      stars[i].classList.replace('fa-star-o', 'fa-star');
    } else {
      stars[i].classList.replace('fa-star', 'fa-star-o');
    }
  }
}

function handleOnClick(e) {
  const currentRatingValue = e.target.dataset.rating;
  currentTotalSelectedStars = currentRatingValue;
  handleUpdateRating(currentTotalSelectedStars);
  starValue.textContent = currentTotalSelectedStars;
}
function handleMouseLeave(e) {
  handleUpdateRating(currentTotalSelectedStars);
}
