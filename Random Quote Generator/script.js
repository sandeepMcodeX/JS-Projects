const quote = document.querySelector("#quote")
const author = document.querySelector("#author")
const quoteBtn = document.querySelector('.quote-btn');
const tweetBtn = document.querySelector('.tweet-btn');
async function getQuote() {
  try {
    const response = await fetch('https://dummyjson.com/quotes', {
      method: 'GET',
    });
    let data = await response.json();
     const randomQuote =
       data.quotes[Math.floor(Math.random() * data.quotes.length)];
    quote.innerHTML = randomQuote.quote;
    author.innerHTML = randomQuote.author;
  } catch (error) {
    console.log(error);
  }
}
getQuote()
function tweet() {
  window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML}` , "Tweet Window", "Width=600, height=300");
}
tweetBtn.addEventListener('click', tweet)
quoteBtn.addEventListener('click', getQuote)