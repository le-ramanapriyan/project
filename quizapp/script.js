const questions = [
  {
    question: "Which is largest Animal in the world",
    answers: [
      { text: "shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false }
    ]
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
      { text: "London", correct: false },
      { text: "Madrid", correct: false }
    ]
  },
  {
    question: "Which programming language is used for web development?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "HTML", correct: true },
      { text: "C#", correct: false }
    ]
  },
  {
    question: "What is the largest planet in our solar system",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false }
    ]
  },
  {
    question: "Which color is a secondary color in subtractive color mixing?",
    answers: [
      { text: "Red", correct: false },
      { text: "Yellow", correct: false },
      { text: "Blue", correct: false },
      { text: "Green", correct: true }
    ]
  },
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Beijing", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Seoul", correct: false },
      { text: "Bangkok", correct: false }
    ]
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Mercury", correct: false },
      { text: "Jupiter", correct: false }
    ]
  },
  {
    question: "What is the currency of Australia?",
    answers: [
      { text: "Dollar", correct: true },
      { text: "Euro", correct: false },
      { text: "Yen", correct: false },
      { text: "Pound", correct: false }
    ]
  },
  {
    question: "In which year did the Titanic sink?",
    answers: [
      { text: "1905", correct: false },
      { text: "1912", correct: true },
      { text: "1920", correct: false },
      { text: "1931", correct: false }
    ]
  },
  {
    question: "What is the main ingredient in guacamole?",
    answers: [
      { text: "Tomato", correct: false },
      { text: "Avacado", correct: true },
      { text: "Onion", correct: false },
      { text: "Lemon", correct: false }
    ]
  },
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score =0;

function startQuiz () {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  showQuestion();
}

function showQuestion () {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer (e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    } 
    button.disabled = true ;
  });
  nextButton.style.display = 'block';
}

function showScore () {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = 'block';
}

function handleNextButton () {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();