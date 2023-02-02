var questions = document.querySelector("#questions")
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var quizStart = document.querySelector("#start");
var timing = document.querySelector(".timer");
var quizPage = document.querySelector(".wrapper");
var scores = document.querySelector(".scores");
var startScreen = document.querySelector(".start");
var chosenAnswer = document.querySelector(".choices");


// create the list of questions and answer choices


var quiz = [

    {
        title: " What does HTML stand for?",
        options: ["High Texture Machine Learning", "Hypertext Machine Language", "Hover The Mouse Left", "High Temperature Measurement Lens"],
        answer: "Hypertext Machine Language",
    },


    {
        title: " How do you write a strict equality operator?",
        options: ["=", "==", "===", "=+="],
        answer: 2,
    },


    {
        title: "What is the meaning of the word var in JavaScript?",
        options: ["variety", "variation", "var", "variable"],
        answer: 3,
    },

    {
        title: "Which brackets do you use to list the element of an array? ",
        options: ["[]", "()", "{}", "<>"],
        answer: 0,
    },

    {
        title: "What is the meaning of HTML DOM?",
        options: ["HTML Domain", "HTML Domestic", "HTML Document Object Model", "HTML Document Object Measure"],
        answer: 2
    }

]



console.log(quiz[0].title);
console.log(quiz[0].answer)

var secondsLeft = 60;

var questionIndex = 0;

//create a function that launch a timer and  the set of questions after clicking on the start quiz button

quizStart.addEventListener("click", function () {

    // create a function that launch a timer after event click
    

        var timerInterval = setInterval(function () {

            secondsLeft--;
            timing.textContent = secondsLeft;

            if (secondsLeft === 0) {
                // Stops execution of action at set interval
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


function publishQuestion() {


    var question = quiz[questionIndex];
    var questionTitle = document.getElementById("question-title");





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


        setTimeout(function () {
            feedback.setAttribute("class", "feedback hide");
        }, 2000);

        //End quiz if all questions are answered or publish next question

        questionIndex++;
        if (questionIndex === quiz.length) {
            quizEnd();
        }
        else {
            publishQuestion();
        }



};









    // allow the user to enter his initials and submit it - then publish the answer on the highscore page git stat