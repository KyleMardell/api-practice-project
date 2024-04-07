// Get a question from the api
const getQuestion = () => {
    const url = `https://opentdb.com/api.php?amount=1`;

    // Use fetch to get question from open trivia database
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
            console.log(data);
        })
        // Alert the user of the error and log to console
        .catch(error => {
            alert("An error has occurred!");
            console.log(error);
        });
};

document.addEventListener("DOMContentLoaded", getQuestion);