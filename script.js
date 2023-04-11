// Global Variables
let currentQuestionIndex = 0;
let quizDiv = document.querySelector("#quiz");
let questionTitle = document.querySelector("#question");
let answersElement = document.querySelector("#answers");
let startButton = document.querySelector("#startButton");
let timer = document.querySelector("#timer");

// Timer
let timeLeft = 60;
timer.textContent = timeLeft + " seconds remaining";

function runTimer(){
    let timerInterval = setInterval(function(){
        timeLeft --;
        timer.textContent = timeLeft + " seconds left";

        // fix this alerting at 1 second left
        console.log("type of interval",typeof timerInterval);
        if(timeLeft === 0){
            clearInterval(timerInterval);
        }
        if (!timeLeft){
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

startButton.addEventListener("click", startQuiz);
function startQuiz(){
    startButton.classList.add("hide");
    quizDiv.classList.remove("hide");
    getQuestion();

}

function getQuestion(){
    let currentQuestion = questions[currentQuestionIndex]
    questionTitle.textContent = currentQuestion.question;
    for(let i = 0; i < currentQuestion.answers.length; i++){
        let choice = currentQuestion.answers[i];
        let choiceElement = document.createElement("button");
        choiceElement.setAttribute("value", choice);
        choiceElement.textContent = choice;
        answersElement.appendChild(choiceElement);
        choiceElement.addEventListener("click", getAnswer); 
    }
}
function getAnswer(event){
    if (event.target.matches("button")){
        console.log("event", event);
        console.log("target", event.target);
        currentQuestionIndex++;
        answersElement.innerHTML = "";
        getQuestion();
    }}