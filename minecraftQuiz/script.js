// Variáveis e Elementos do DOM
let score = 0;
let questionIndex = 0;
const questionElement = document.getElementById("question");
const answersContainer = document.getElementById("answers-container");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-question-btn");

const questions = [
  {
    question: "Quantos blocos de altura tem um Enderman?",
    answers: ["2 blocos", "3 blocos", "4 blocos", "5 blocos"],
    correct: 0
  },
  {
    question: "Qual item você precisa para fazer um Portal do Nether?",
    answers: ["Blocos de Ferro", "Blocos de Diamante", "Obsidiana", "Tábua de Madeira"],
    correct: 2
  },
  {
    question: "Qual criatura não ataca durante o dia?",
    answers: ["Creeper", "Esqueleto", "Slime", "Zombie"],
    correct: 2
  }
];

// Inicializa o quiz
function initializeQuiz() {
  score = 0;
  questionIndex = 0;
  updateScore();
  loadQuestion();
}

function updateScore() {
  scoreElement.textContent = score;
}

function loadQuestion() {
  resetState();
  if (questionIndex < questions.length) {
    const currentQuestion = questions[questionIndex];
    questionElement.textContent = currentQuestion.question;
    currentQuestion.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.classList.add("answer-btn");
      button.textContent = answer;
      button.onclick = () => selectAnswer(index, button);
      answersContainer.appendChild(button);
    });
  } else {
    showFinalScore();
  }
}

function resetState() {
  nextButton.disabled = true;
  answersContainer.innerHTML = "";
}

function selectAnswer(selectedIndex, button) {
  const correctIndex = questions[questionIndex].correct;
  // Desabilita todos os botões após uma resposta
  document.querySelectorAll(".answer-btn").forEach(btn => btn.disabled = true);

  if (selectedIndex === correctIndex) {
    score++;
    button.style.backgroundColor = "#4ade80"; 
  } else {
    button.style.backgroundColor = "#f87171"; 
  }
  updateScore();
  nextButton.disabled = false;
}

function showFinalScore() {
  alert(`Quiz terminado! Sua pontuação final é: ${score}`);
  initializeQuiz();
}

// Inicializar Quiz
nextButton.onclick = () => {
  questionIndex++;
  loadQuestion();
};

initializeQuiz();
