var arrayOfQuotes = [
    {
        "author":"Will Smith",
        "quote":"Money and success don’t change people; they merely amplify what is already there."
    },
    {
        "author":"Albert Einstein",
        "quote":"If you want to live a happy life, tie it to a goal, not to people or things."
    },
    {
        "author":"Babe Ruth",
        "quote":"Never let the fear of striking out keep you from playing the game."
    },
    {
        "author":"Thomas A. Edison",
        "quote":"Many of life’s failures are people who did not realize how close they were to success when they gave up."
    },
    {
        "author":"Mae West",
        "quote":"You only live once, but if you do it right, once is enough."
    },
    {
        "author":"Stephen King",
        "quote":"Get busy living or get busy dying."
    },
    {
        "author":"John Lennon",
        "quote":"Life is what happens when you’re busy making other plans."
    },
    {
        "author":"Dalai Lama",
        "quote":"The purpose of our lives is to be happy."
    }
]

function randomSelector(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

function generateQuote() {
    var randomNumber = randomSelector(arrayOfQuotes.length)

    document.getElementById("quoteOutput").innerHTML = '""' + arrayOfQuotes[randomNumber].quote + '""';

    document.getElementById("authorOutput").innerHTML = "- " + arrayOfQuotes[randomNumber].author;
}