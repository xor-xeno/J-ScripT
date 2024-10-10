const quoteBlock = document.getElementById("quote");
const authorBlock = document.getElementById("author");
const newQuoteButton = document.querySelector("button"); // Assuming this is the first button
const tweetButton = document.querySelectorAll("button")[1]; // Assuming this is the second button

const apiUrl = "https://api.api-ninjas.com/v1/quotes";
const apiKey = '---------';//https://api-ninjas.com/ get key from this website for free


function fetchQuote() {
    fetch(apiUrl, {
        method: "GET",
        headers: {
            "X-Api-Key": apiKey
        }
    })
    .then(response => response.json()) // Get the response and turn it into JSON
    .then(data => {
        const quote = data[0].quote;
        const author = data[0].author || "Unknown";

        // Update the page with the new quote and author
        quoteBlock.textContent = quote;
        authorBlock.textContent = `- ${author}`;
    })
    .catch(error => {
        console.log("Error fetching quote:", error);
        quoteBlock.textContent = "Could not load a quote.";
        authorBlock.textContent = "";
    });
}

function tweetQuote() {
    const quote = quoteBlock.textContent;
    const author = authorBlock.textContent;

    // Create the Twitter sharing URL
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)} --${encodeURIComponent(author)}`;

    // Open the Twitter share page in a new tab
    window.open(tweetUrl, "_blank");
}

// Fetch a quote when the page loads
fetchQuote();


