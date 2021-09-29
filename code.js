const questions = [
  {
    question: "What does CSS stand for?",
    options: [ 
      "Cascading Style Sheet",
      "Clearly Soul Sucking", 
      "Collusive System Style", 
      "Collective Styles Syntax"], 
      answer:"cascading Style Sheet",   
  },
  {
    question: "What are variables used for in JavaScript programs?",
    options: ["Storing numbers, dates or other valuables",
      "Varying Randomly",
      "Varying purposefully out of spite",
      "Controlling stylistic choices of the page."],
      answer:"Storing numbers, dates or other valuables",    
  },
  {
  question: "Inside which HTML element do you put Javascipt?",
  options: ["<script>",
    "<img>",
    "<button>",
    "<src>"],
  answer:"<script>"
  },
  {
    question:"Which company devolped JavaScript? ",
    options: [
      "Netscape",
      "Microsoft",
      "Apple",
      "From Software"],
      answer: "Netscape",   
  },
  {
    question: "Which is NOT a type of pop up box in JavaScript?",
    options: [
      "Alert",
      "Confirm",
      "Prompt",
      "Declare"],
      answer: "Declare",
    }];





const startbutton = document.getElementById("start-btn")

const questionContainerElement = document.getElementById("question-container")

const questionElement = document.getElementById("question")

const answerButtonElement = document.getElementById("answer-buttons")

var QuestionCount = 0

const continueButton = document.querySelector("restart");

const quitButton = document.getElementById("quit-button");

var win = document.querySelector(".win");

var lose = document.querySelector(".lose");

const timerElement = document.querySelector(".timer-count");
let timer = document.getElementById("timer")

var winCounter = 0;

var isWin = false;

var secondsLeft = 60;
//high score
let emptyArray = []

let storedArray = JSON.parse(window.localStorage.getItem("high-scores"));

function startGame() {
  isWin = false;
  timerCount = 10;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  renderBlanks();
  startTimer()

startButton.addEventListener("click", startGame);
startbutton() 
  




function displayQuestions() {
} 
if (questionElement < questionElement.length) {
  questionElement.innerHTML = questionS[questionCount].title;
  choices.textContent = "";
  function getQuestion() {
    // get current question object from array
    var currentQuestion = questions[currentQuestionIndex];
  
    // update title with current question
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;
  
    // clear out any old question choices
    choicesEl.innerHTML = "";
  
    // loop over choices
    currentQuestion.choices.forEach(function(choice, i) {
      // create new button for each choice
      var choiceNode = document.createElement("button");
      choiceNode.setAttribute("class", "choice");
      choiceNode.setAttribute("value", choice);
  
      choiceNode.textContent = i + 1 + ". " + choice;
  
      // attach click event listener to each choice
      choiceNode.onclick = questionClick;
  
      // display on the page
      choicesEl.appendChild(choiceNode);
    });
  }
  
  function questionClick() {
    // check if user guessed wrong
    if (this.value !== questions[currentQuestionIndex].answer) {
      // penalize time
      time -= 15;
  
      if (time < 0) {
        time = 0;
      }
  
      // display new time on page
      timerEl.textContent = time;

  for (let i = 0; i < questions[questionCount].multiChoice.length; i++){
    let el = document.createElement("button");
    el.innerText = questions[questionCount].multiChoice[i];
    el.setAttribute("data-id", i);
    el.addEventListener("click, function") 
    }
  }
  if (el.innerText === questions[questionCount].answer) {
    score += secondsLeft;
  } else {
    secondsLeft = secondsLeft - 30;
  }
  questionElement.innerHTML = "";
  if (questionCount === questions.length) {
  return ;
  } else {
    questionCount++;
    displayQuestions();
  }
}






//function showQuestion(question) {
  //questionElement.innerText = question.question
//}
// set function to loop through questions object.
//function getQuestions(){
  //var currentQuestions = questions[currentQuestionIndex]
  //updating title with our current questions
  //var titleElement = document.getElementById('question-title');
  //t//itleElement.textContent = currentQuestions.title;
  //answerButtonElement.innerHTML = "";
  //loop over the choices
  //currentQuestions.options.forEach(function(option,i){
    
    //on click event set equal to   then do conditionals. time penalty in conditions, 
    //dynmically insert button for each question button as answer choices
  //})
//}
//feedback element ie correct, incorrect
