// Advance through questions
let currentQuestion = 0;
let quizDiv = document.querySelector("#quiz");
quizDiv.addEventListener("click", function(event){
    if (event.target.matches("button")){
        currentQuestion++;
    }
})

// Timer
let timer = document.querySelector("#timer");
let timeLeft = 60;
timer.textContent = timeLeft + " seconds remaining";

function runTimer(){
    let timerInterval = setInterval(function(){
        timeLeft --;
        timer.textContent = timeLeft + " seconds left";

        // fix this alerting at 1 second left
        if(timeLeft === 0){
            clearInterval(timerInterval);
            alert("Times up!");
        }
    }, 1000);
}

// Questions
let questions = [{question: "Which hero's ultimate ability is Mass Serpant Wards?", answers:["Shadow Shaman", "Natures Prophet", "Kunkka", "Venomancer"], correctAnswer: "Shadow Shaman"},
                 {question: "Which agility hero has the highest base agility with a value of 25?", answers:["Juggernaut", "Ursa", "Phantom Lancer", "Rikimaru"], correctAnswer: "Ursa"},
                 {question: "Which consumable item reveals invisible units?", answers:["Tangos", "Enchanted Mango", "Observer Ward", "Dust of Appearance"], correctAnswer: "Dust of Appearance"},
                 {question: "Which hero has the lowest base armor in the game with a value of -3?", answers:["Puck", "Pudge", "Viper", "Morphling"], correctAnswer: "Puck"},
                 {question: "Who created DotA?", answers:["Gabe Newell", "Riot Games", "Icefrog", "EA Studios"], correctAnswer: "Icefrog"}
                ]

                
