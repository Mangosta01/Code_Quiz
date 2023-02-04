
var questions = document.querySelector("#questions")
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var quizStart = document.querySelector("#start");
var timing = document.querySelector(".timer");
var quizPage = document.querySelector(".wrapper");
var scores = document.querySelector(".scores");
var startScreen = document.querySelector(".start");
var chosenAnswer = document.querySelector(".choices");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score")
var playerInitials = document.querySelector("#initials")
var submit = document.querySelector("#submit");



console.log(quiz[0].title);
console.log(quiz[0].answer)

var secondsLeft = 60;
var timerInterval;

var questionIndex = 0;

//create a function that launch a timer and  the set of questions after clicking on the start quiz button

quizStart.addEventListener("click", function () {

    // Timer function that ends the quiz and stops execution when secondsLeft <=0


    timerInterval = setInterval(function () {

        secondsLeft--;
        timing.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            quizEnd();
            clearInterval(timerInterval);
        }



    }, 1000);

    startScreen.classList.add("hide");
    questions.classList.remove("hide");
    questions.classList.remove("start");

    publishQuestion();


});

var ol = document.createElement("ol");
var button = document.createElement("button");
var li = document.createElement("li")


// Publish 1st question of the quiz in the HTML and subsequent questions

function publishQuestion() {


    var question = quiz[questionIndex];
    var questionTitle = document.getElementById("question-title");


    questionTitle.textContent = question.title;


    ol.innerHTML = "";


    for (var j = 0; j < question.options.length; j++) {
        choices[j] = question.options[j];
        li = document.createElement("li");
        li.setAttribute("style", "background-color: #563d7c");
        li.textContent = choices[j];
        button = document.createElement("button");
        button.appendChild(li);
        ol.appendChild(button);
        choices.appendChild(ol);
        checkAnswer();
    }



};

function checkAnswer() {





    // When answer is clicked, provide result and  the next question appear - If answer is incorrect, reduce time left

    button.addEventListener("click", function (event) {

        li = event.target;

        var answerCheck = document.querySelector("#feedback");
        answerCheck.setAttribute("class", "feedback");

        // Provides answers feed-back after clicking on answers

        if (li.textContent === quiz[questionIndex].answer) {
            answerCheck.innerHTML = "Correct";
            questions.appendChild(answerCheck);
        }

        // when providing a wrong answers, substract time from the timer
        else {
            answerCheck.innerHTML = "Incorrect";
            questions.appendChild(answerCheck);

            if (secondsLeft <= 10) {
                secondsLeft = 0;
            }
            else {
                secondsLeft -= 10;
            }
        };

        setTimeout(function () {
            feedback.setAttribute("class", "feedback hide");
        }, 300);

        //End quiz if all questions are answered or publish next question

        questionIndex++;
        if (questionIndex === quiz.length) {
            quizEnd();
        }
        else {
            publishQuestion();
        }

        console.log(answerCheck.innerHTML);
    });


};

// Function that ends the Quiz and provides final score

function quizEnd() {
    clearInterval(timerInterval);
    endScreen.classList.remove("hide");
    finalScore.textContent = secondsLeft;
    questions.classList.add("hide");

}




// allow the user to enter his initials and submit it 


var submit = document.querySelector("#submit");

var message = document.createElement("div");


submit.addEventListener("click", function (event) {
    event.preventDefault();


    var lastHighscores = {

        score: secondsLeft,
        initials: playerInitials.value

    };



    function displayMessage() {

        message.setAttribute("style", "color: red")

        if (lastHighscores.initials === "") {
            message.textContent = "Sorry, Initials cannot be blank.";
            endScreen.appendChild(message);
        }
        else {
            message.textContent = "Congratulations, Your score has been saved."
            endScreen.appendChild(message);
        }

    }

    displayMessage();

   

    var Highscores = JSON.parse(window.localStorage.getItem("Highscores")) || [];

  Highscores.push(lastHighscores);


    localStorage.setItem("Highscores", JSON.stringify(Highscores));

console.log(Highscores);
console.log (lastHighscores);

});


