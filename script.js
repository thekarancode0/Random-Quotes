const quote = document.querySelector('.quote');
const btn = document.querySelector('.dice');

let allquotes = [];
fetch('https://dummyjson.com/quotes')
    .then(res => res.json())
    .then(data => {
        allquotes = data.quotes; 
        console.log(allquotes[9].quote);
    });

btn.addEventListener('click', renderQuotes);

function renderQuotes() {
    const getRandomIndex = Math.floor(Math.random() * allquotes.length);
    if (allquotes.length > 0) {
        const randomQuote = allquotes[getRandomIndex].quote;
        quote.innerHTML = randomQuote; 
    } else {
        quote.innerHTML = "Loading quotes... Please try again!";
    }
}
