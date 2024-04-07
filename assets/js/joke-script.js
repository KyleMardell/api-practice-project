/**
 * Get a new joke from the api
 */
const getJoke = () => {
    const url = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`;

    // Use fetch to get joke from the api
    fetch(url)
        .then(response => {
            // Check fetch was sent correctly
            if (!response.ok) {
                throw new Error("Not found")
            } else {
                return response.json();
            }
        })
        // Create question
        .then(data => {
            console.log(data.joke);
            displayJoke(data);
        })
        // Alert the user of the error and log to console
        .catch(error => {
            alert("An error has occurred!");
            console.log(error);
        });
};

/**
 * Display the joke using the DOM 
 */
const displayJoke = (data) => {
    document.getElementById("joke-text").innerText = data.joke;
}

// Event listeners
document.addEventListener("DOMContentLoaded", getJoke());
document.getElementById("joke-btn").addEventListener("click", getJoke);