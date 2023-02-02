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
        
    }




    /*
    question.options.forEach(choicesArray);
 
    function choicesArray(element) {
        button = document.createElement("button");
 
        li = document.createElement("li");
        li.setAttribute("style", "background-color: #563d7c")
        li.textContent = element;
 
        button.appendChild(li);
        ol.appendChild(button);
        choices.appendChild(ol);
        checkAnswer();
    };
 
*/



};


/* for (var j = 0; j < currentQuestion.options.length; j++) {
       choices[j] = currentQuestion.options[j];
       li = document.createElement("li");
       li.setAttribute("style", "background-color: #563d7c");
       li.textContent = choices[j];
       button = document.createElement("button");
       button.appendChild(li);
       ol.appendChild(button);
       checkAnswer();
   }*/

/*
          quiz[0].options.forEach(choicesArray);
  
          function choicesArray(element) {
              li = document.createElement("li");
              li.setAttribute("style", "background-color: #563d7c")
              li.textContent = element;
              button = document.createElement("button");
              button.appendChild(li);
              ol.appendChild(button);
              
          };*/





    //if (secondsLeft = 0 || No questions left ) 


// Function that ends the Quiz and provides final score








    // allow the user to enter his initials and submit it - then publish the answer on the highscore page git stat