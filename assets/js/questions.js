var questions = document.querySelector("#questions")
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var quizStart = document.querySelector("#start");
var timing = document.querySelector(".timer");
var quizPage = document.querySelector(".wrapper")
var scores = document.querySelector(".scores")
var startScreen = document.querySelector(".start")

// create the list of questions and answer choices


var quiz = [

    {
        title: " What does HTML stand for?",
        options: ["High Texture Machine Learning", "Hypertext Machine Language", "Hover The Mouse Left", "Hight Temperature Measurement Lens"],
        answer: 1,
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
console.log(quiz[0].options.length)

var secondsLeft = 60;

var index = 0;

//create a function that launch a timer and  the set of questions after clicking on the start quiz button

quizStart.addEventListener("click", function () {

    // create a function that launch a timer after event click
    function setTime() {

        var timerInterval = setInterval(function () {

            secondsLeft--;
            timing.textContent = secondsLeft;

            if (secondsLeft === 0) {
                // Stops execution of action at set interval
                clearInterval(timerInterval);
            }



        }, 1000);

    };



    function startQuiz() {


        startScreen.classList.add("hide");
        questions.classList.remove("hide");
        questions.classList.remove("start");

        // Publish 1st question of the quiz in the HTML


        var ol = document.createElement("ol");
        choices.appendChild(ol);

        for (var i = 0; i < quiz.length; i++)
            for (var j = 0; j < quiz[i].options.length; j++) {
                questionTitle.textContent = quiz[i].title;
                choices = quiz[i].options[j];

                
                var li = document.createElement("li");


                li.textContent = choices;
                li.setAttribute("data-index", j)
                ol.appendChild(li);
                return;
            }





        // create a function that ends the Quiz when all questions are answered or the timer reaches 0
        /*  if (secondsLeft = 0 || No questions left ) */


    };

    setTime();
    startQuiz();

});

// create a function that provides answers feed-back after clicking on answers

// when providing a wrong answers, write a code that takes out time from the timer





// allow the user to enter his initials and submit it - then publish the answer on the highscore page git stat