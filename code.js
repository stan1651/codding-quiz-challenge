const startbutton = document.getElementById("start-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex
var continueButton = document.querySelector("restart");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");

var quitButton = document.querySelector("quit-button");
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;

startbutton.addEventListener('click', startGame)

function startGame() {
  startbutton.classList.add("hide")
  shuffledQuestions = questions.sort() => Math.random( - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}
function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
  questionElement.innerText = question.question
}
const questions = [
  {
    question: "What does CSS stand for?",
    answer: [
      {text:"Cascading Style Sheet", correct: true},
      { text:"Clearly Soul Sucking", correct: false},
      {text:"Collusive System Style", correct: false},
      {text:"Collective Styles Syntax", correct: false},
    ] 
  },
  {
    question: 2,
    question: "What are variables used for in JavaScript programs?",
    answer: "Storing numbers, dates ir other valuables",
    options:[
      "Varying Randomly",
      "Varying purposefully out of spite",
      "Controlling stylistic choices of the page.",
    ]
  },
  {
    question: 3,
  question: "Inside which HTML element do you put Javascipt?",
  answer: "<script>",
  options:[
    "<img>",
    "<button>",
    "<src>",
  ]
  },
  {
    question: 4,
    question: "Which company devolped JavaScript? ",
    answer: "Netscape",
    options:[
      "Microsoft",
      "Apple",
      "From Software",
    ] 
  },
  {
    question: 5,
    question: "Which is NOT a type of pop up box in JavaScript?",
    answer: "Declare",
    options:[
      "Alert",
      "Confirm",
      "Prompt"
    ]}]
    var currentQuestion = 0;
    var correctAnswers = 0;
    var quizOver = false;

    var quizMessage = document.querySelector("quizMessage");
    function setWins() {
      win.textContent = winCounter;
      localStorage.setItem('winCount', winCounter);
    }
    
    // Updates lose count on screen and sets lose count to client storage
    function setLosses() {
      lose.textContent = loseCounter;
      localStorage.setItem('loseCount', loseCounter);
    }
    
    // These functions are used by init to display values from local storage
    function getWins() {
      // Get stored value from client storage, if it exists
      var storedWins = localStorage.getItem('winCount');
      // If stored value doesn't exist, set counter to 0
      if (storedWins === null) {
        winCounter = 0;
      } else {
        // If a value is retrieved from client storage set the winCounter to that value
        winCounter = storedWins;
      }
      // Render win count to page
      win.textContent = winCounter;
    }
    
    function getlosses() {
      var storedLosses = localStorage.getItem('loseCount');
      if (storedLosses === null) {
        loseCounter = 0;
      } else {
        loseCounter = storedLosses;
      }
      lose.textContent = loseCounter;
    }
    
    // The init function is called when the page loads
    function init() {
      getWins();
      getlosses();
    }
    // The winGame function is called when the win condition is met
    function winGame() {
      wordBlank.textContent = 'YOU WON!!!🏆 ';
      winCounter++;
      startButton.disabled = false;
      setWins();
    }
    
    // The loseGame function is called when timer reaches 0
    function loseGame() {
      wordBlank.textContent = 'GAME OVER';
      loseCounter++;
      startButton.disabled = false;
      setLosses();
    }
    
    // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
    function startTimer() {
      // Sets timer
      timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (isWin && timerCount > 0) {
          clearInterval(timer);
          winGame();
        }
        // Tests if time has run out
        if (timerCount <= 0) {
          // Clears interval
          clearInterval(timer);
          loseGame();
        }
      }, 1000);
    }
    function startGame() {
      isWin = false;
      timerCount = 30;
      // Prevents start button from being clicked when round is in progress
      startButton.disabled = true;
      renderBlanks();
      startTimer();
   


 function setWins() {
  win.textContent = winCounter;
  localStorage.setItem('winCount', winCounter);
}
startButton.addEventListener("click", startGame);
    }
