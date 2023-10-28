const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "Which of the following methods is used to send an HTTP POST request in JavaScript?",
    choice1: "GET;",
    choice2: "POST;",
    choice3: "PUT;",
    choice4: "FETCH;",
    answer: 2
  },
  {
    question: "What is the purpose of the CSS property 'display: inline-block'?",
    choice1: "It displays an element as an inline-level block container.",
    choice2: "It makes an element take the full width of its container.",
    choice3: "It creates a block-level box with no line breaks.",
    choice4: "It hides an element from the display.",
    answer: 1
  },
  {
    question: "Which of the following is a valid way to include an external JavaScript file in an HTML document?",
    choice1: "<script src='script.js'></script>",
    choice2: "<javascript src='script.js'></javascript>",
    choice3: "<link rel='stylesheet' href='script.js'>",
    choice4: "<include src='script.js'></include>",
    answer: 1
  },
  {
    question: "What does the CSS property 'box-sizing: border-box' do?",
    choice1: "It adds a border to the box model.",
    choice2: "It includes padding and border in the total width and height of an element.",
    choice3: "It adjusts the box model to exclude the margin.",
    choice4: "It resizes the box model based on the content size.",
    answer: 2
  },
  {
    question: "How do you target the last child element of a parent using CSS?",
    choice1: ":first-child",
    choice2: ":last-child",
    choice3: ":nth-child(1)",
    choice4: ":nth-last-child(1)",
    answer: 2
  },
  {
    question: "What is the purpose of the 'localStorage' object in JavaScript?",
    choice1: "It is used to store data on the server.",
    choice2: "It is used to manipulate the browser's history.",
    choice3: "It is used to store data locally on the user's browser.",
    choice4: "It is used to fetch data from an API.",
    answer: 3
  },
  {
    question: "In CSS, what does the 'z-index' property control?",
    choice1: "The background color of an element.",
    choice2: "The positioning of an element in the z-axis.",
    choice3: "The opacity of an element.",
    choice4: "The text alignment of an element.",
    answer: 2
  },
  {
    question: "How do you create a responsive web design using CSS?",
    choice1: "Use media queries to apply different styles based on the device screen size.",
    choice2: "Use JavaScript to dynamically resize the elements.",
    choice3: "Use a fixed layout for all screen sizes.",
    choice4: "Use percentages for all width and height values.",
    answer: 1
  },
  {
    question: "What is the purpose of the 'data-*' attribute in HTML5?",
    choice1: "It defines the doctype of the HTML document.",
    choice2: "It stores custom data private to the web page.",
    choice3: "It defines the character encoding of the HTML document.",
    choice4: "It specifies the language of the HTML document.",
    answer: 2
  },
  {
    question: "Which of the following is a valid way to add event listeners to elements in JavaScript?",
    choice1: "addEventListener('click', myFunction)",
    choice2: "onClick = myFunction",
    choice3: "myElement.onclick = myFunction",
    choice4: "All of the above",
    answer: 4
  }
];

//CONSTANTS
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();
