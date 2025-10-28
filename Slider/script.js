const slider = document.querySelector('.slider');
const dotsContainer = document.querySelector('.dots-container');
async function fetchListOfImage() {
  try {
    const response = await fetch(
      'https://picsum.photos/v2/list?page=1&limit=10',
      {
        method: 'GET',
      }
    );
    const data = await response.json();
    if (data && data.length > 0) {
      displayImages(data);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayImages(getImages) {
  slider.innerHTML = getImages
    .map(
      (item) => `
      <div class="slide" >
      <img src =${item.download_url} alt=${item.id} >
      </div>
    `
    )
    .join(' ');
  dotsContainer.innerHTML = getImages
    .map(
      (dot, index) => `
  <span class="dot ${index === 0 ? 'active' : ' '}" data-slide=${index}></span>
  `
    )
    .join(' ');
}
fetchListOfImage();

// Slider function
setTimeout(() => {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentSlide = 0;

  function activeDot(slide) {
    document
      .querySelectorAll('.dot')
      .forEach((dotItem) => dotItem.classList.remove('active'));
    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add('active');
  }
  function changeCurrentSlide(currentSlide) {
    slides.forEach(
      (slideItem, index) =>
        (slideItem.style.transform = `translateX(${
          100 * (index - currentSlide)
        }%)`)
    );
  }
  changeCurrentSlide(currentSlide);
  prevBtn.addEventListener('click', () => {
    currentSlide--;

    if (0 > currentSlide) {
      currentSlide = slides.length - 1;
    }
    changeCurrentSlide(currentSlide);
    activeDot(currentSlide);
  });

  nextBtn.addEventListener('click', () => {
    currentSlide++;
    if (slides.length - 1 < currentSlide) {
      currentSlide = 0;
    }
    changeCurrentSlide(currentSlide);
    activeDot(currentSlide);
  });
  dotsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('dot')) {
      // use correct property name and update outer currentSlide so prev/next keep working
      currentSlide = Number(e.target.dataset.slide);
      changeCurrentSlide(currentSlide);
      activeDot(currentSlide);
    }
  });
}, 1000);
