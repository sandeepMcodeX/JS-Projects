const productContainer = document.querySelector('.product-container');
const loadMoreBtn = document.querySelector('.load-btn');

let currentStep = 1; 
const limit = 10; 

async function fetchListOfProducts() {
  try {
    const skipValue = currentStep * limit; 
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skipValue}`,
      {
        method: 'GET',
      }
    );

    const data = await response.json();
    console.log(data);

    if (data && data.products.length > 0) {
      displayProduct(data.products);
    } else {
     
      loadMoreBtn.disabled = true;
      loadMoreBtn.textContent = 'No more products';
    }
  } catch (error) {
    console.log(error);
  }
}

function displayProduct(productList) {
  productList.forEach((productItem) => {
    const productItemWrapper = document.createElement('div');
    const productTitle = document.createElement('p');
    const productImage = document.createElement('img');
    const productDescription = document.createElement('p');
    const productPrice = document.createElement('p');

    productTitle.textContent = productItem.title;
    const shortDesc = productItem.description.slice(0, 70) + '...';
    productDescription.textContent = shortDesc;
    productImage.src = productItem.thumbnail;
    productPrice.textContent = `$${productItem.price}`;

    productItemWrapper.classList.add('productItem');
    productDescription.classList.add('product-des');
    productTitle.classList.add('product-title');
    productPrice.classList.add('product-price');

    productItemWrapper.append(
      productImage,
      productTitle,
      productDescription,
      productPrice
    );

    productContainer.appendChild(productItemWrapper);
  });
}

fetchListOfProducts();

loadMoreBtn.addEventListener('click', () => {
  currentStep += 1;
  fetchListOfProducts();
});
