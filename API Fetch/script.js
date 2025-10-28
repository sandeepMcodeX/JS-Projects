const postContainer = document.querySelector('.posts-container');

// fetch using XHR
// function makeHttpRequest() {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
//   xhr.responseType = 'json';
//   xhr.send();
//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       // console.log(xhr);
//       displayData(xhr.response);
//     } else {
//       console.log('Some Error occurred');
//     }
//   };
// }
// makeHttpRequest();


// fetch data using fetch() method

function fetchingData() {
  const fetchRequest = fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
  });
  fetchRequest
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      displayData(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
fetchingData();

function displayData(posts) {
  postContainer.innerHTML = posts
    .map(
      (postItem) => `
    <div class="postItem">
        <h3>${postItem.title}</h3>
        <p>${postItem.body}</p>
    </div>
    `
    )
    .join(' ');
}




// fetch data using fetch() method with async ,await
async function fetchUsingAsyncAwait() {
 const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
   method: 'GET',
 });
  const data = await response.json();
  displayData(data)
}
fetchUsingAsyncAwait();

function displayData(posts) {
  postContainer.innerHTML = posts
    .map(
      (postItem) => `
    <div class="postItem">
        <h3>${postItem.title}</h3>
        <p>${postItem.body}</p>
    </div>
    `
    )
    .join(' ');
}


// Combine XHR, Promise And async , Await
// fetchUsingXHRAndAsyncAwait
function helperMethod(method, url) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      }
      else {
        reject(xhr.response)
      }
    }
    
  })
  return promise
}
async function fetchUsingXHRAndAsyncAwait(){
   const response = await helperMethod(
     'GET',
     'https://jsonplaceholder.typicode.com/posts'
  );
  // console.log(response);
  displayData(response);
}
fetchUsingXHRAndAsyncAwait();

function displayData(posts) {
  postContainer.innerHTML = posts
    .map(
      (postItem) => `
    <div class="postItem">
        <h3>${postItem.title}</h3>
        <p>${postItem.body}</p>
    </div>
    `
    )
    .join(' ');
}