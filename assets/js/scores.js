//Publish the score on the highscore page

var results = document.querySelector("#highscores");

var clearResults = document.querySelector("#clear");




function publishHighscores() {

    
    var Highscores = JSON.parse(localStorage.getItem("Highscores"));

 
    
    for (var i=0; i<Highscores.length; i++){
    var li = document.createElement("li");
    li.textContent = Highscores[i].score +" -  " + Highscores[i].initials;
    results.appendChild(li);
    };

};

publishHighscores();

//Clear the score on the highscore page

clearResults.addEventListener("click", function () {
    results.textContent = "";

});