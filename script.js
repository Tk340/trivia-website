const questions = [
    [
        {
            question: "What year did the battle of Badr take place?",
            answers: [
                { text: "15th Ramadan, 2 AH", correct: false },
                { text: "17th Ramadan, 2 AH", correct: true },
                { text: "13th Ramadan, 2 AH", correct: false },
                { text: "21st Ramadan, 2 AH", correct: false },
            ]
        },
        {
            question: "What was the capital city of the Islamic empire under the Umayyad dynasty?",
            answers: [
                { text: "Istanbul", correct: false },
                { text: "Medina", correct: false },
                { text: "Damascus", correct: true },
                { text: "Mecca", correct: false },
            ]    
        }, 
        {
            question: "Who was the first martyr in Islam?",
            answers: [
                { text: "Sumayyah bint Khayyat", correct: true },
                { text: "Ali ibn Abi Talib", correct: false },
                { text: "Hamza ibn Abdul-Muttalib", correct: false },
                { text: "Ubayda ibn al-Harith", correct: false },
            ]
        }, 
        {
            question: "Who was the first Caliph of Islam?",
            answers: [
                { text: "Omar ibn al-Khattab", correct: false },
                { text: "Ali ibn Abi Talib", correct: false },
                { text: "Uthman ibn Affan", correct: false },
                { text: "Abu Bakr", correct: true },
            ]
        },
        {
            question: "What was the name of the first Islamic Caliphate to rule after the Prophets death?",
            answers: [
                { text: "Rashidun Caliphate", correct: true },
                { text: "Umayyad Caliphate", correct: false },
                { text: "Abbasid Caliphate", correct: false },
                { text: "Fatimid Caliphate", correct: false },
            ]
        },
        {
            question: "What major Islamic empire emerged in the 13th century and lasted till the 20th century?",
            answers: [
                    { text: "Rashidun Caliphate", correct: false},
                    { text: "Ottoman Empire", correct: true },
                { text: "Mughal Empire", correct: false },
                { text: "Safavid Empire", correct: false },
            ]
        },
        {
            question: "What was the capital of the Ottoman Empire?",
            answers: [
                { text: "Istanbul", correct: true },
                { text: "Al-Khwarizmi", correct: false },
                { text: "Gaza", correct: false },
                { text: "Damascus", correct: false },
            ]
        },
        {
            question: "How long did the Makkan phase last after the first revelation?",
            answers: [
                { text: "15 years", correct: false },
                { text: "10 years", correct: false },
                { text: "13 years", correct: true },
                { text: "20 years", correct: false },
            ]
        },
        {
            question: "What was the name of the treaty that allowed Muslims to peacefully perform pilgrimage to Mecca?",
            answers: [
                { text: "Treaty of Hudaybiyyah", correct: true },
                { text: "Treaty of Versailles", correct: false },   
                { text: "Treaty of Medina", correct: false },
                { text: "Treaty of Taif", correct: false },
            ]
        },
        {
            question: "Which Islamic scholar is known for his contributions to mathematics?",
            answers: [
                { text: "Ibn Sina (Avicenna)", correct: false },
                { text: "Al-Khwarizmi", correct: true },
                { text: "Al-Farabi", correct: false },
                { text: "Ibn Khaldun", correct: false },
            ]
        },
        {
            question: "Who introduced the Islamic Calendar?",
            answers: [
                { text: "Abu Bakr", correct: false },
                { text: "Omar ibn al-Khattab", correct: true },
                { text: "Uthman ibn Affan", correct: false },
                { text: "Ali ibn Abi Talib", correct: false },
            ]
        },
        {
            question: "How many muslims died in the battle of Badr",
            answers: [
                { text: "30", correct: false },
                { text: "14", correct: true },
                { text: "23", correct: false },
                { text: "31", correct: false },
            ]
        },
        {
            question: "What was the name of the second most important battle in Islam?",
            answers: [
                { text: "Badr", correct: false },
                { text: "Uhud", correct: true },
                { text: "Hunayn", correct: false },
                { text: "Tabuk", correct: false },
            ]
        },
        {
            question: "Where was the first qibla (direction of prayer) in Islam?",
            answers: [
                { text: "Syria", correct: false },
                { text: "Mecca", correct: false },
                { text: "Medina", correct: false },
                { text: "Palestine", correct: true },
            ]
        },
        {
            question: "When did the battle of Uhud take place?,",
            answers: [
                { text: "5 AH", correct: false },
                { text: "3 AH", correct: true },
                { text: "4 AH", correct: false },
                { text: "2 AH", correct: false },
            ]
        }
    ],
    [   
        {
            question: "Which Prophet did Allah order to build an ark?",
            answers: [
                { text: "Musa (Moses)", correct: false },
                { text: "Nuh (Noah)", correct: true },
                { text: "Ibrahim (Abraham)", correct: false },
                { text: "Yusuf (Joseph)", correct: false },
            ]
        },
        {
            question: "Which Prophet is known for his ability to interpret dreams?",
            answers: [
                { text: "Yusuf (Joseph)", correct: true },
                { text: "Sulaiman (Solomon)", correct: false },
                { text: "Dawud (David)", correct: false },
                { text: "Ibrahim (Abraham)", correct: false },
            ]
        },
        {
            question: "Which Prophet was swallowed by a big fish or whale?",
            answers: [
                { text: "Nuh (Noah)", correct: false },
                { text: "Musa (Moses)", correct: false },
                { text: "Yunus (Jonah)", correct: true },
                { text: "Ibrahim (Abraham)", correct: false },
            ]
        },
        {
            question: "Name the Prophet with a staff who became a serpent and was able to part the sea?",
            answers: [
                { text: "Sulaiman (Solomon)", correct: false },
                { text: "Dawud (David)", correct: false },
                { text: "Ilyas (Elijah)", correct: false },
                { text: "Musa (Moses)", correct: true },
            ]
        },
        {
            question: "Which nation was Prophet Hud sent to?",
            answers: [
                { text: "Thamud", correct: false },
                { text: "Madyan", correct: false },
                { text: "Bani Israel", correct: false },
                { text: "Aad", correct: true },
            ]
        },
        {
            question: "Which Prophet had a great illness that affected his skin?",
            answers: [
                { text: "Musa (Moses)", correct: false },
                { text: "Yunus (Jonah)", correct: false },
                { text: "Ayyub (Job)", correct: true },
                { text: "Ibrahim (Abraham)", correct: false },
            ]
        },
        {
            question: "Who was the father of Prophet Yaqub (Jacob)?",
            answers: [
                { text: "Dawud (David)", correct: false },
                { text: "Ishaq (Isaac)", correct: true },
                { text: "Yusuf (Joseph)", correct: false },
                { text: "Ibrahim (Abraham)", correct: false },
            ]
        },
        {
            question: "Which Prophet took care of Maryam (Mary) when she was a child?",
            answers: [
                { text: "Zakariya (Zechariah)", correct: true },
                { text: "Yahya (John the Baptist)", correct: false },
                { text: "Isa (Jesus)", correct: false },
                { text: "Ibrahim (Abraham)", correct: false },
            ]   
        },
        {
            question: "Prophet Muhammad was directly descended from which Prophet?",
            answers: [
                { text: "Ibrahim (Abraham)", correct: false },
                { text: "Musa (Moses)", correct: false },
                { text: "Nuh (Noah)", correct: false },
                { text: "Ismail (Ishmael)", correct: true },
            ]
        },
        {
            question: "How many Prophets are mentioned in the Quran?",
            answers: [
                { text: "25", correct: true },
                { text: "30", correct: false },
                { text: "40", correct: false },
                { text: "50", correct: false },
            ]
        }

    ],
    [   
        {
            question: "How many Surahs in the Quran are named after a Prophet?",
            answers: [
                { text: "5", correct: false },
                { text: "6", correct: true },
                { text: "7", correct: false },
                { text: "8", correct: false },
            ]
        },
        {
            question: "Which Surah does not begin with Bismillah?",
            answers: [
                { text: "Naml", correct: true },
                { text: "Baqara", correct: false },
                { text: "Tawba", correct: false },
                { text: "Nur", correct: false },
            ]    
        },
        {
            question: "Who is the man in the Quran with a preserved body as a warning for future generations?",
            answers: [
                { text: "Abu Lahab", correct: false },
                { text: "Fir'aun (Pharaoh)", correct: true },
                { text: "Samiri", correct: false },
                { text: "Adam", correct: false },
            ]
        },
        {
            question: "In the Quran there is a mention of a Prophet who has been called by his mothers name. Who is he?",
            answers: [
                { text: "Ayyub (Job)", correct: false },
                { text: "Maryam (Mary)", correct: false },
                { text: "Muhammad (PBUH)", correct: false },
                { text: "Isa (Jesus)", correct: true },
            ]
        },
        {
            question: "Which Surah of the Quran has Bismillah repeated twice?",
            answers: [
                { text: "Yasin", correct: false },
                { text: "Tawba", correct: false },
                { text: "An-Naml", correct: true },
                { text: "Al-Ma'idah", correct: false },
            ]
        },
        {
            question: "Which Surah of the Quran is known as the heart of the Quran?",
            answers: [
                { text: "Yasin", correct: true },
                { text: "Al-Fatiha", correct: false },
                { text: "Al-Baqara", correct: false },
                { text: "Al-Ikhlas", correct: false },
            ]
        },
        {
            question: "How many years did it take for the complete revelation of the Quran?",
            answers: [
                { text: "23", correct: true },
                { text: "17", correct: false },
                { text: "28", correct: false },
                { text: "32", correct: false },
            ]
        },
        {
            question: "Omar ibn al-Khattab converted to Islam after hearing verses from which Surah?",
            answers: [
                { text: "Al-A'raf", correct: false },
                { text: "Taha", correct: true },
                { text: "Mu'minun", correct: false },
                { text: "An-Nur", correct: false },
            ]
        },
        {
            question: "How many Surahs are in the Quran?",
            answers: [
                { text: "112", correct: false },
                { text: "110", correct: false },
                { text: "117", correct: false },
                { text: "114", correct: true },
            ]
        },
        {
            question: "How many Ayahs have a sajdah (prostration) in the Quran?",
            answers: [
                { text: "14", correct: true },
                { text: "15", correct: false },
                { text: "16", correct: false },
                { text: "17", correct: false },
            ]
        },
        {
            question: "Which Prophet is mentioned the most in the Quran?",
            answers: [
                { text: "Musa (Moses)", correct: true },
                { text: "Ibrahim (Abraham)", correct: false },
                { text: "Nuh (Noah)", correct: false },
                { text: "Isa (Jesus)", correct: false },
            ]
        },
    ],
    [
        {
            question: "Where did Prophet Muhammad give his last Khutba (Sermon)'?",
            answers: [
                { text: "Masjid al-Haram", correct: false },
                { text: "Arafat", correct: true },
                { text: "Mina", correct: false },
                { text: "Medina", correct: false },
            ]
        },
        {
            question: "What is the name of the mountain where Prophet Muhammad received his first revelation?",
            answers: [
                { text: "Mount Sinai", correct: false },
                { text: "Mount Uhud", correct: false },
                { text: "Mount Hira", correct: true },
                { text: "Mount Arafat", correct: false },
            ]
        },
        {
            question: "Whats the name of Prophet Muhammads father",
            answers: [
                { text: "Abu Talib", correct: false },
                { text: "Abdullah", correct: true },
                { text: "Abu Lahab", correct: false },
                { text: "Abu Sufyan", correct: false },
            ]
        },
        {
            question: "Who was the first person to accept Islam?",
            answers: [
                { text: "Khadijah", correct: true },
                { text: "Abu Bakr", correct: false },
                { text: "Ali", correct: false },
                { text: "Umar", correct: false },
            ]
        },
        {
            question: "What was the name of the place where muslims would secretly meet in Mecca?",
            answers: [
                { text: "Masjid al-Haram", correct: false },
                { text: "Dar al-Arqam", correct: true },
                { text: "Masjid al-Nabawi", correct: false },
                { text: "Masjid al-Aqsa", correct: false },
            ]
        },
        {
            question: "What was the first war between the Muslims and Quraysh?",
            answers: [
                { text: "Battle of Hunayn", correct: false },
                { text: "Battle of Uhud", correct: false },
                { text: "Battle of Khandaq", correct: false },
                { text: "Battle of Badr", correct: true },
            ]
        }, 
        {
            question: "How old was the Prophet when his mother passed away?",
            answers: [
                { text: "6", correct: true },
                { text: "5", correct: false },
                { text: "4", correct: false },
                { text: "3", correct: false },
            ]
        },
        {
            question: "Who named the Prophet Muhammad?",
            answers: [
                { text: "Khadijah", correct: false },
                { text: "Amina", correct: false },
                { text: "Abdul Muttalib", correct: true },
                { text: "Abu Bakr", correct: false },
            ]   
        },
        {
            question: "What was the name of the Prophet's first wife?",
            answers: [
                { text: "Aisha", correct: false },
                { text: "Hafsa", correct: false },
                { text: "Khadijah", correct: true },
                { text: "Zainab", correct: false },
            ]
        },
        {
            question: "What was the name of the first freed slave to embrace Islam?",
            answers: [
                { text: "Bilal ibn Rabah", correct: false },
                { text: "Zayd ibn Harithah", correct: true },
                { text: "Abu Bakr", correct: false },
                { text: "Omar ibn al-Khattab", correct: false },
            ]
        },
        {
            question: "How old was Khadijah when she married the Prophet?",
            answers: [
                { text: "42", correct: false },
                { text: "25", correct: false },
                { text: "37", correct: false },
                { text: "40", correct: true },
            ]
        },
        {
            question: "Who was the first Mu'azzin in Islam?",
            answers: [
                { text: "Bilal ibn Rabah", correct: true },
                { text: "Omar ibn al-Khattab", correct: false },
                { text: "Zaid ibn Harithah", correct: false },
                { text: "Abu Bakr", correct: false },
            ]
        },
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
    question.sort(() => Math.random() - 0.5);
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
