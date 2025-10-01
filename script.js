const questions = [
    [
        {
            question: "What is the first month of the Islamic calendar?",
            answers: [
                { text: "Ramadan", correct: false },
                { text: "Muharram", correct: true },
                { text: "Shawwal", correct: false },
                { text: "Dhu al-Hijjah", correct: false },
            ]
        },
        {
            question: "What was the capital city of the Islamic empire under the Umayyad dynasty?",
            answers: [
                { text: "Istanbul", correct: false },
                { text: "Damascus", correct: true },
                { text: "Medina", correct: false },
                { text: "Mecca", correct: false },
            ]    
        }, 
        {
            question: "Which Islamic scholar is known for his contributions to medicine?",
            answers: [
                { text: "Ibn Sina (Avicenna)", correct: true },
                { text: "Al-Khwarizmi", correct: false },
                { text: "Al-Farabi", correct: false },
                { text: "Ibn Khaldun", correct: false },
            ]
        }
    ],
    [   {
        question: "Which Islamic scholar is known for his contributions to medicine?",
        answers: [
            { text: "Ibn Sina (Avicenna)", correct: true },
            { text: "Al-Khwarizmi", correct: false },
            { text: "Al-Farabi", correct: false },
            { text: "Ibn Khaldun", correct: false },
            ]
        }
    ]
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer buttons");
const nextButton = document.getElementById("nxt-button");
let question;

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    question = questions[window.location.hash.replace("#", "") - 1] || questions[0];
    currentQuestionIndex = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);

    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    score = 0;
}


function handleNextButton() {
    if (currentQuestionIndex < question.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < question.length) {
        currentQuestionIndex++;
        handleNextButton();
    } else {
        startQuiz();
    }
});
startQuiz();
