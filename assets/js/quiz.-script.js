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
            checkAnswer(data);
        })
        // Alert the user of the error and log to console
        .catch(error => {
            alert("An error has occurred!");
            console.log(error);
        });
};

const displayQuestion = (data) => {
    const answers = [
        data.results[0].correct_answer,
        data.results[0].incorrect_answers[0],
        data.results[0].incorrect_answers[1],
        data.results[0].incorrect_answers[2]
    ];

    answers.sort(() => Math.random() - 0.5);

    document.getElementById("question").innerText = `Question: ${data.results[0].question}`;
    document.getElementById("answer1").innerText = answers[0];
    document.getElementById("answer2").innerText = answers[1];
    document.getElementById("answer3").innerText = answers[2];
    document.getElementById("answer4").innerText = answers[3];
};

const checkAnswer = (data) => {
    let correctAnswer = data.results[0].correct_answer;
    let answerButtons = document.getElementsByTagName("button");
    let questionAnswered = false;

    function buttonClicked(event) {
        const button = event.target;
        if (!questionAnswered) {
            if (button.innerText === correctAnswer) {
                alert("That is correct!");
                questionAnswered = true;
                getQuestion();
            } else {
                alert("Sorry, that is incorrect");
                questionAnswered = true;
                getQuestion();
            }
        }
    }

    for(let button of answerButtons){
        button.addEventListener("click", buttonClicked);
    }
};

document.addEventListener("DOMContentLoaded", getQuestion);