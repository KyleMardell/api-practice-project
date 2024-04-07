// Get a question from the api
const getQuestion = () => {
    const url = `https://opentdb.com/api.php?amount=1&type=multiple`;

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
            displayQuestion(data);
        })
        // Alert the user of the error and log to console
        .catch(error => {
            alert("An error has occurred!");
            console.log(error);
        });
};

const displayQuestion = (data) => {
    document.getElementById("question").innerText = `Question: ${data.results[0].question}`;
    document.getElementById("answer1").innerText = data.results[0].correct_answer;
    document.getElementById("answer2").innerText = data.results[0].incorrect_answers[0];
    document.getElementById("answer3").innerText = data.results[0].incorrect_answers[1];
    document.getElementById("answer4").innerText = data.results[0].incorrect_answers[2];
}

document.addEventListener("DOMContentLoaded", getQuestion);