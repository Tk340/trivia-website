const homeButton = document.getElementById("home-button");
const summaryDiv = document.getElementById("summary");
let answerSummary = [];
const soundCorrect = new Audio("sounds/correct.wav");
const soundWrong = new Audio("sounds/wrong.wav");
const soundBonus = new Audio("sounds/bonus.wav");
// 🎵 Sound effects (online URLs, no downloads)
// optional: control volumes (0 to 1)
soundCorrect.volume = 0.6;
soundWrong.volume   = 0.6;

// helper to safely replay sounds
function playSound(sound) {
  sound.pause();
  sound.currentTime = 0;
  sound.play();
}
let soundEnabled = true; // 🔊 sounds start on
let timeLeft = 15;
let timerInterval;
let streak = 0;
let coins = parseInt(localStorage.getItem("coins")) || 0;
document.getElementById("coinCount").textContent = coins;
if (document.getElementById("coinCount")) {
  document.getElementById("coinCount").textContent = coins;
}
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
                { text: "Naml", correct: false },
                { text: "Baqara", correct: false },
                { text: "Tawba", correct: true },
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
    ],
    [
        {
            question: "What is the Capital of Canada?",
            answers: [
                { text: "Toronto", correct: false },
                { text: "Ottawa", correct: true },
                { text: "Vancouver", correct: false },
                { text: "Montreal", correct: false },
            ]
        },
        {
            question: "Which country has Cairo as its capital? city",
            answers: [
                { text: "Morocco", correct: false },
                { text: "Algeria", correct: false },
                { text: "Egypt", correct: true },
                { text: "Libya", correct: false },
            ]    
        }, 
        {
            question: "What is the Capital of France?",
            answers: [
                { text: "Berlin", correct: false },
                { text: "Madrid", correct: false },
                { text: "Paris", correct: true },
                { text: "Rome", correct: false },
            ]
        },
        {
            question: "Which country's capital is Canberra?",
            answers: [
                { text: "New Zealand", correct: false },
                { text: "Australia", correct: true },
                { text: "Nigeria", correct: false },
                { text: "South Africa", correct: false },
            ]
        },
        {
            question: "Which country has 3 capital cities?",
            answers: [
                { text: "South Africa", correct: true },
                { text: "Australia", correct: false },
                { text: "Nigeria", correct: false },
                { text: "Canada", correct: false },
            ]
        },
        {
            question: "Ankara is the capital of which country?",
            answers: [
                { text: "Turkey", correct: true },
                { text: "Greece", correct: false },
                { text: "Egypt", correct: false },
                { text: "Iran", correct: false },
            ]
        },
        {
            question: "Which European capital is known as the 'City of Bridges?'",
            answers: [
                { text: "Venice", correct: false },
                { text: "Amsterdam", correct: false },
                { text: "Prague", correct: true },
                { text: "Budapest", correct: false },
            ]
        },
        {
            question: "What is the Capital of Brazil",
            answers: [
                { text: "Rio de Janeiro", correct: false },
                { text: "Brasília", correct: true },
                { text: "São Paulo", correct: false },
                { text: "Salvador", correct: false },
            ]
        },
        {
            question: "Kathmandu is the capital of which country?",
            answers: [
                { text: "Bhutan", correct: false },
                { text: "Nepal", correct: true },
                { text: "Bangladesh", correct: false },
                { text: "Sri Lanka", correct: false },
            ]
        },
        {
            question: "What is the current Capital of Kazakhstan?",
            answers: [
                { text: "Almaty", correct: false },
                { text: "Astana", correct: true },
                { text: "Shymkent", correct: false },
                { text: "Karaganda", correct: false },
            ]
        },
        {
            question: "Which country moved its capital from Dar es Salaam to Dodoma?",
            answers: [
                { text: "Kenya", correct: false },
                { text: "Tanzania", correct: true },
                { text: "Uganda", correct: false },
                { text: "Rwanda", correct: false },
            ]
        },
        {
            question: "What is the oldest capital city in the world?",
            answers: [
                { text: "Cairo", correct: false },
                { text: "Jerusalem", correct: false },
                { text: "Athens", correct: false },
                { text: "Damascus", correct: true },
            ]
        },
        {
            question: "Which capital city spans over 2 continents?",
            answers: [
                { text: "Istanbul", correct: true },
                { text: "Ankara", correct: false },
                { text: "Cairo", correct: false },
                { text: "Athens", correct: false },
            ]
        },
        {
            question: "Timphu is the capital of which country?",
            answers: [
                { text: "Japan", correct: false },
                { text: "Bhutan", correct: true },
                { text: "Nepal", correct: false },
                { text: "India", correct: false },
            ]
        },
        {
            question: "What is the Capital of Italy?",
            answers: [
                { text: "Milan", correct: false },
                { text: "Venice", correct: false },
                { text: "Rome", correct: true },
                { text: "Florence", correct: false },
            ]
        },
        {
            question: "What is the southernmost capital city in the world?",
            answers: [
                { text: "Wellington", correct: true },
                { text: "Canberra", correct: false },
                { text: "Buenos Aires", correct: false },
                { text: "Santiago", correct: false },
            ]
        }
    ],
    [
        {
            question: "The Eiffel Tower is located in which city?",
            answers: [
                { text: "London", correct: false },
                { text: "Paris", correct: true },
                { text: "Rome", correct: false },
                { text: "Berlin", correct: false },
            ]
        },
        {
            question: "The Great Wall is found in which country?",
            answers: [
                { text: "China", correct: true },
                { text: "Japan", correct: false },
                { text: "Korea", correct: false },
                { text: "Vietnam", correct: false },
            ]
        },
        {
            question: "The Statue of Liberty was a gift to the USA from which country?",
            answers: [
                { text: "Germany", correct: false },
                { text: "France", correct: true },
                { text: "Italy", correct: false },
                { text: "Spain", correct: false },
            ]
        },
        {
            question: "The Taj Mahal is located in which Indian City?",
            answers: [
                { text: "Delhi", correct: false },
                { text: "Jaipur", correct: false },
                { text: "Agra", correct: true },
                { text: "Mumbai", correct: false },
            ]
        },
        {
            question: "which landmark is nicknamed the Big Ben?",
            answers: [
                { text: "The Clock Tower of the Palace of Westminster", correct: true },
                { text: "The London Eye", correct: false },
                { text: "Tower Bridge", correct: false },
                { text: "The Shard", correct: false },
            ]
        },
        {
            question: "The ancient city of Petra is located in which country?",
            answers: [
                { text: "Saudi Arabia", correct: false },
                { text: "Egypt", correct: false },
                { text: "Syria", correct: false },
                { text: "Jordan", correct: true },
            ]
        },
        {
            question: "Machu Picchu is a landmark from which ancient civilization?",
            answers: [
                { text: "Inca", correct: true },
                { text: "Maya", correct: false },
                { text: "Aztec", correct: false },
                { text: "Egyptian", correct: false },
            ]
        },
        {
            question: "The Colosseum is located in which city?",
            answers: [
                { text: "Athens", correct: false },
                { text: "Rome", correct: true },
                { text: "Istanbul", correct: false },
                { text: "Naples", correct: false },
            ]
        },
        {
            question: "The Moai Statues are located on which island?",
            answers: [
                { text: "Easter Island", correct: true },
                { text: "Galapagos Islands", correct: false },
                { text: "Fiji", correct: false },
                { text: "Tahiti", correct: false },
            ]
        },
        {
            question: "The Burj Khalifa is located in which city?",
            answers: [
                { text: "Abu Dhabi", correct: false },
                { text: "Dubai", correct: true },
                { text: "Doha", correct: false },
                { text: "Manama", correct: false },
            ]
        },
        {
            question: "The Acropolis is located in which city?",
            answers: [
                { text: "Rome", correct: false },
                { text: "Istanbul", correct: false },
                { text: "Athens", correct: true },
                { text: "Cairo", correct: false },
            ]
        },
        {
            question: "The Angkor Wat temple complex is located in which country?",
            answers: [
                { text: "Thailand", correct: false },
                { text: "Vietnam", correct: false },
                { text: "Cambodia", correct: true },
                { text: "Laos", correct: false },
            ]
        },
        {
            question: "The Sydney Opera House is located in which country?",
            answers: [
                { text: "New Zealand", correct: false },
                { text: "Australia", correct: true },
                { text: "Canada", correct: false },
                { text: "USA", correct: false },
            ]
        },
        {
            question: "The Leaning Tower of Pisa is located in which country?",
            answers: [
                { text: "Spain", correct: false },
                { text: "Italy", correct: true },
                { text: "France", correct: false },
                { text: "Portugal", correct: false },
            ]
        },
    ],
    [
        {
            question: "Which country's flag features a red maple leaf?",
            answers: [
                { text: "Canada", correct: true },
                { text: "USA", correct: false },
                { text: "Mexico", correct: false },
                { text: "Australia", correct: false },
            ]
        },
        {
            question: "Which country's flag is known as the 'Union Jack'?",
            answers: [
                { text: "USA", correct: false },
                { text: "UK", correct: true },
                { text: "Australia", correct: false },
                { text: "Canada", correct: false },
            ]
        },
        {
            question: "Which country's flag features a red circle on a white background?",
            answers: [
                { text: "Japan", correct: true },
                { text: "Bangladesh", correct: false },
                { text: "Switzerland", correct: false },
                { text: "Turkey", correct: false },
            ]
        },
        {
            question: "Which country's flag is green, white, and orange vertical stripes?",
            answers: [
                { text: "Italy", correct: false },
                { text: "Ireland", correct: true },
                { text: "India", correct: false },
                { text: "Mexico", correct: false },
            ]
        },
        {
            question: "Which country's flag has a cedar tree in the middle?",
            answers: [
                { text: "Lebanon", correct: true },
                { text: "Syria", correct: false },
                { text: "Jordan", correct: false },
                { text: "Iraq", correct: false },
            ]
        },
        {
            question: "Which country's flag  has green, yellow, and red with a star in the middle?",
            answers: [
                { text: "Ghana", correct: false },
                { text: "Cameroon", correct: false },
                { text: "Senegal", correct: true },
                { text: "Ethiopia", correct: false },
            ]
        },
        {
            question: "Which country's flag recently changed after the fall of a regime?",
            answers: [
                { text: "Iran", correct: false },
                { text: "Iraq", correct: false },
                { text: "Yemen", correct: false },
                { text: "Syria", correct: true },
            ]
        },
        {
            question: "Which country's flag has a crescent moon and star on a red background?",
            answers: [
                { text: "Turkey", correct: true },
                { text: "Tunisia", correct: false },
                { text: "Algeria", correct: false },
                { text: "Pakistan", correct: false },
            ]
        },
        {
            question: "Which country's flag is the only one that is not rectangular?",
            answers: [
                { text: "Switzerland", correct: false },
                { text: "Nepal", correct: true },
                { text: "Bhutan", correct: false },
                { text: "Vatican City", correct: false },
            ]
        },
        {
            question: "Which Central American country's flag has two blue stripes with a coat of arms in the middle?",
            answers: [
                { text: "Honduras", correct: false },
                { text: "El Salvador", correct: true },
                { text: "Nicaragua", correct: false },
                { text: "Guatemala", correct: false },
            ]
        },
        {
            question: "Which country's flag has a dragon on it?",
            answers: [
                { text: "China", correct: false },
                { text: "Mongolia", correct: false },
                { text: "Wales", correct: false },
                { text: "Bhutan", correct: true },
            ]
        },
        {
            question: "Which country's flag is called the Tricolore?",
            answers: [
                { text: "Italy", correct: false },
                { text: "Ireland", correct: false },
                { text: "France", correct: true },
                { text: "Mexico", correct: false },
            ]
        },
        {
            question: "Which South American country's flag has a sun with a face on it?",
            answers: [
                { text: "Argentina", correct: true },
                { text: "Brazil", correct: false },
                { text: "Chile", correct: false },
                { text: "Peru", correct: false },
            ]
        }
    ],
    [
        {
            question: "In What year did WW2 end?",
            answers: [
                { text: "1945", correct: true },
                { text: "1944", correct: false },
                { text: "1946", correct: false },
                { text: "1947", correct: false },
            ]
        },
        {
            question: "The fall of the Berlin Wall happened in which year?",
            answers: [
                { text: "1987", correct: false },
                { text: "1989", correct: true },
                { text: "1991", correct: false },
                { text: "1993", correct: false },
            ]
        },
        {
            question: "Who was the first person to step on the moon?",
            answers: [
                { text: "Buzz Aldrin", correct: false },
                { text: "Yuri Gagarin", correct: false },
                { text: "Neil Armstrong", correct: true },
                { text: "Michael Collins", correct: false },
            ]
        },
        {
            question: "In which year did the Titanic sink?",
            answers: [
                { text: "1912", correct: true },
                { text: "1913", correct: false },
                { text: "1914", correct: false },
                { text: "1915", correct: false },
            ]
        },
        {
            question: "Which country was the first to grant women the right to vote?",
            answers: [
                { text: "Canada", correct: false },
                { text: "Australia", correct: false },
                { text: "United States", correct: false },
                { text: "New Zealand", correct: true },
            ]
        },
        {
            question: "Who was the British Prime Minister during most of World War II?",
            answers: [
                { text: "Winston Churchill", correct: true },
                { text: "Neville Chamberlain", correct: false },
                { text: "Clement Attlee", correct: false },
                { text: "Stanley Baldwin", correct: false },
            ]
        },
        {
            question: "The French Revolution began in which year?",
            answers: [
                { text: "1776", correct: false },
                { text: "1789", correct: true },
                { text: "1792", correct: false },
                { text: "1804", correct: false },
            ]
        },
        {
            question: "The September 11 attacks on the U.S. were carried out in which year?",
            answers: [
                { text: "2000", correct: false },
                { text: "2001", correct: true },
                { text: "2002", correct: false },
                { text: "2003", correct: false },
            ]
        },
        {
            question: "The Black Death pandemic occurred in which century?",
            answers: [
                { text: "12th Century", correct: false },
                { text: "13th Century", correct: false },
                { text: "14th Century", correct: true },
                { text: "15th Century", correct: false },
            ]
        },
        {
            question: "The Ottoman Empire collapsed after which major war?",
            answers: [
                { text: "World War I", correct: true },
                { text: "World War II", correct: false },
                { text: "Crimean War", correct: false },
                { text: "Napoleonic Wars", correct: false },
            ]
        },
        {
            question: "Who was the first emperor of China?",
            answers: [
                { text: "Liu Bang", correct: false },
                { text: "Qin Shi Huang", correct: true },
                { text: "Han Wudi", correct: false },
                { text: "Tang Taizong", correct: false },
            ]
        },
        {
            question: "The Renaissance began in which country?",
            answers: [
                { text: "France", correct: false },
                { text: "Italy", correct: true },
                { text: "Spain", correct: false },
                { text: "Germany", correct: false },
            ]
        },
        {
            question: "Which African country was the last to gain independence from colonial rule in the 20th century?",
            answers: [
                { text: "Zimbabwe", correct: false },
                { text: "South Africa", correct: false },
                { text: "Kenya", correct: false },
                { text: "Namibia", correct: true },
            ]
        }
    ],
    [
        {
            question: "Who was the first president of the United States?",
            answers: [
                { text: "Thomas Jefferson", correct: false },
                { text: "George Washington", correct: true },
                { text: "Abraham Lincoln", correct: false },
                { text: "John Adams", correct: false },
            ]
        },
        {
            question: "Who was the first black president of South Africa?",
            answers: [
                { text: "Thabo Mbeki", correct: false },
                { text: "Jacob Zuma", correct: false },
                { text: "Nelson Mandela", correct: true },
                { text: "Cyril Ramaphosa", correct: false },
            ]    
        },
        {
            question: "Who lead India's non-violent independence movement against British rule?",
            answers: [
                { text: "Jawaharlal Nehru", correct: false },
                { text: "Subhas Chandra Bose", correct: false },
                { text: "Mahatma Gandhi", correct: true },
                { text: "Bhagat Singh", correct: false },
            ]
        },
        {
            question: "Which U.S president abolished slavery?",
            answers: [
                { text: "George Washington", correct: false },
                { text: "John Adams", correct: false },
                { text: "Thomas Jefferson", correct: false },
                { text: "Abraham Lincoln", correct: true },
            ]
        },
        {
            question: "Who was the Queen of France that was executed during the French Revolution?",
            answers: [
                { text: "Marie Antoinette", correct: true },
                { text: "Catherine de' Medici", correct: false },
                { text: "Anne of Austria", correct: false },
                { text: "Madame de Pompadour", correct: false },
            ]
        },
        {
            question: "Who was the first women Prime Minister of the UK?",
            answers: [
                { text: "Theresa May", correct: false },
                { text: "Margaret Thatcher", correct: true },
                { text: "Angela Merkel", correct: false },
                { text: "Indira Gandhi", correct: false },
            ]
        },
        {
            question: "Which Soviet leader began the policies of glasnost and perestroika?",
            answers: [
                { text: "Leonid Brezhnev", correct: false },
                { text: "Nikita Khrushchev", correct: false },
                { text: "Joseph Stalin", correct: false },
                { text: "Mikhail Gorbachev", correct: true },
            ]
        },
        {
            question: "Who was the first emperor of the Roman Empire?",
            answers: [
                { text: "Julius Caesar", correct: false },
                { text: "Augustus", correct: true },
                { text: "Nero", correct: false },
                { text: "Caligula", correct: false },
            ]
        },
        {
            question: "Who was the longest-reigning British monarch before Queen Elizabeth II?",
            answers: [
                { text: "Queen Victoria", correct: true },
                { text: "Queen Anne", correct: false },
                { text: "Queen Elizabeth I", correct: false },
                { text: "Queen Mary I", correct: false },
            ]
        },
        {
            question: "Who was the Egyptian queen and last pharaoh of the Ptolemaic Kingdom?",
            answers: [
                { text: "Nefertiti", correct: false },
                { text: "Cleopatra", correct: true },
                { text: "Hatshepsut", correct: false },
                { text: "Ankhesenamun", correct: false },
            ]
        },
        {
            question: "Which leader was known as the Iron Chancellor in Germany?",
            answers: [
                { text: "Otto von Bismarck", correct: true },
                { text: "Kaiser Wilhelm I", correct: false },
                { text: "Adolf Hitler", correct: false },
                { text: "Paul von Hindenburg", correct: false },
            ]
        },
        {
            question: "Who was the first female ruler of Russia?",
            answers: [
                { text: "Catherine the Great", correct: true },
                { text: "Elizabeth I", correct: false },
                { text: "Anna of Russia", correct: false },
                { text: "Maria Theresa", correct: false },
            ]
        },
        {
            question: "Who was the first president of independent Kenya?",
            answers: [
                { text: "Daniel arap Moi", correct: false },
                { text: "Jomo Kenyatta", correct: true },
                { text: "Mwai Kibaki", correct: false },
                { text: "Uhuru Kenyatta", correct: false },
            ]
        }
    ],
    [
        {
            question: "Which country did Hitler invade in 1939 to start World War II?",
            answers: [
                { text: "Poland", correct: true },
                { text: "France", correct: false },
                { text: "Czechoslovakia", correct: false },
                { text: "Austria", correct: false },
            ]
        },
        {
            question: "The American Civil War was between which two factions?",
            answers: [
                { text: "The Union and the Confederacy", correct: false },
                { text: "The Federalists and the Anti-Federalists", correct: false },
                { text: "The North and the South", correct: true },
                { text: "The East and the West", correct: false },
            ]
        },
        {
            question: "The Cold War was primarily between which two superpowers?",
            answers: [
                { text: "USA and China", correct: false },
                { text: "USA and USSR", correct: true },
                { text: "USA and UK", correct: false },
                { text: "USA and Japan", correct: false },
            ]
        },
        {
            question: "The Hundred Years' War was fought between which two countries?",
            answers: [
                { text: "England and France", correct: true },
                { text: "Spain and Portugal", correct: false },
                { text: "Germany and Italy", correct: false },
                { text: "Russia and Poland", correct: false },
            ]
        },
        {
            question: "Which Asian war (1950-1953) eneded in a stalemate at the 38th parallel?",
            answers: [
                { text: "Vietnam War", correct: false },
                { text: "Korean War", correct: true },
                { text: "Chinese Civil War", correct: false },
                { text: "Sino-Indian War", correct: false },
            ]
        },
        {
            question: "The battle of the Hastings (1066) led to the Norman conquest of which country?",
            answers: [
                { text: "France", correct: false },
                { text: "Italy", correct: false },
                { text: "Spain", correct: false },
                { text: "England", correct: true },
            ]
        },
        {
            question: "Which war started with the assassination of Archduke Franz Ferdinand?",
            answers: [
                { text: "World War I", correct: true },
                { text: "World War II", correct: false },
                { text: "The Balkan Wars", correct: false },
                { text: "The Crimean War", correct: false },
            ]
        },
        {
            question: "The Vietnam war ended in which year?",
            answers: [
                { text: "1973", correct: false },
                { text: "1974", correct: false },
                { text: "1975", correct: true },
                { text: "1976", correct: false },
            ]
        },
        {
            question: "Which Middle Eastern conflict began in 1948?",
            answers: [
                { text: "Six-Day War", correct: false },
                { text: "Yom Kippur War", correct: false },
                { text: "Arab-Israeli War", correct: true },
                { text: "Gulf War", correct: false },
            ]
        },
        {
            question: "The War of the Roses was fought between which two houses?",
            answers: [
                { text: "Lancaster and York", correct: true },
                { text: "Tudor and Stuart", correct: false },
                { text: "Plantagenet and Tudor", correct: false },
                { text: "York and Stuart", correct: false },
            ]
        },
        {
            question: "The Falklands War was fought between which two countries?",
            answers: [
                { text: "Argentina and Chile", correct: false },
                { text: "Argentina and UK", correct: true },
                { text: "UK and France", correct: false },
                { text: "UK and Spain", correct: false },
            ]
        },
        {
            question: "The Crimean War (1853-1856) involved Russia fighting against the alliance of:",
            answers: [
                { text: "Britian, France, Ottoman Empire", correct: true },
                { text: "Germany, Italy, Austria", correct: false },
                { text: "Spain, Portugal, France", correct: false },
                { text: "USA, Britian, Prussia", correct: false },
            ]
        },
        {
            question: "The Thirty Years' War (1618-1648) was primarily fought in which region?",
            answers: [
                { text: "Central Europe", correct: true },
                { text: "Western Europe", correct: false },
                { text: "Eastern Europe", correct: false },
                { text: "Southern Europe", correct: false },
            ]
        },
        {
            question: "The Napoleonic Wars ended after Napoleon's defeat at which battle?", 
            answers: [
                { text: "Borodino", correct: false },
                { text: "Austerlitz", correct: false },
                { text: "Leipzig", correct: false },
                { text: "Waterloo", correct: true },
            ]
        }
    ],
    [
        {
            question: "Which ancient monument's purpose is still being debated today?",
            answers: [
                { text: "Stonehenge", correct: true },
                { text: "Pyramids of Giza", correct: false },
                { text: "Colosseum", correct: false },
                { text: "Machu Picchu", correct: false },
            ]
        },
        {
            question: "Which ancient city was buried by the eruption of Mount Vesuvius in 79 AD?",
            answers: [
                { text: "Oplontis", correct: false },
                { text: "Herculaneum", correct: false },
                { text: "Stabiae", correct: false },
                { text: "Pompeii", correct: true },
            ]
        },
        {
            question: "The Lost City of Atlantis was first described by which philosopher?",
            answers: [
                { text: "Socrates", correct: false },
                { text: "Aristotle", correct: true },
                { text: "Plato", correct: false },
                { text: "Herodotus", correct: false },
            ]
        },
        {
            question: "The Great Pyramid of Giza was built for which Egyptian pharaoh?",
            answers: [
                { text: "Khufu", correct: true },
                { text: "Khafre", correct: false },
                { text: "Menkaure", correct: false },
                { text: "Ramses II", correct: false },
            ]
        },
        {
            question: "The disapreance of which aviator in 1937 remains a mystery?",
            answers: [
                { text: "Charles Lindbergh", correct: false },
                { text: "Howard Hughes", correct: false },
                { text: "Amelia Earhart", correct: true },
                { text: "Bessie Coleman", correct: false },
            ]
        },
        {
            question: "Which Ship sent a distress signal 'Come quick, we are sinking' before vanishing in 1909?",
            answers: [
                { text: "Titanic", correct: false },
                { text: "S.S. Valencia", correct: false },
                { text: "C.S.S. Alabama", correct: false },
                { text: "S.S. Waratah", correct: true },
            ]
        },
        {
            question: "The Terracotta Army was built to protect the tomb of which Chinese emperor?",
            answers: [
                { text: "Han Wudi", correct: false },
                { text: "Qin Shi Huang", correct: true },
                { text: "Tang Taizong", correct: false },
                { text: "Emperor Wu of Liang", correct: false },
            ]
        },
        {
            question: "Which Island is famous for its giant Moai statues?",
            answers: [
                { text: "Galapagos Islands", correct: false },
                { text: "Easter Island", correct: true },
                { text: "Fiji", correct: false },
                { text: "Hawaii", correct: false },
            ]
        },
        {
            question: "Which artifact was believed to show the image of Jesus and is kept in the Cathedral of St. John the Baptist in Turin?",
            answers: [
                { text: "Shroud of Turin", correct: true },
                { text: "Holy Grail", correct: false },
                { text: "Spear of Destiny", correct: false },
                { text: "Crown of Thorns", correct: false },
            ]
        },
        {
            question: "Which legendary kingdoms treasure has never been found, sparking countless searches?",
            answers: [
                { text: "Agartha", correct: false },
                { text: "Atlantis", correct: false },
                { text: "El Dorado", correct: true },
                { text: "Shangri-La", correct: false },
            ]
        },
        {
            question: "Which manuscript was dicovered in the 20th century and contains hidden texts of early Christian gospels?",
            answers: [
                { text: "Dead Sea Scrolls", correct: true },
                { text: "Nag Hammadi Library", correct: false },
                { text: "Codex Sinaiticus", correct: false },
                { text: "Book of Kells", correct: false },
            ]
        },
        {
            question: "The Antikythera Mechanism, an ancient Greek analog computer, was used to predict what?",
            answers: [
                { text: "Eclipses", correct: true },
                { text: "Tides", correct: false },
                { text: "Seasons", correct: false },
                { text: "Planetary Movements", correct: false },
            ]
        },
        {
            question: "Which ancient city was rediscovered in the 19th century and is famous for its hanging gardens?",
            answers: [
                { text: "Babylon", correct: true },
                { text: "Nineveh", correct: false },
                { text: "Ur", correct: false },
                { text: "Persepolis", correct: false },
            ]
        }
    ],
    [
        {
            question: "Which team's logo features a maple leaf?",
            answers: [
                { text: "Ottawa Senators", correct: false },
                { text: "Toronto Maple Leafs", correct: true },
                { text: "Montreal Canadiens", correct: false },
                { text: "Vancouver Canucks", correct: false },
            ]
        },
        {
            question: "Which NHL team's logo has a spoked B?",
            answers: [
                { text: "Boston Bruins", correct: true },
                { text: "Chicago Blackhawks", correct: false },
                { text: "Buffalo Sabers", correct: false },
                { text: "New York Rangers", correct: false },
            ]
        },
        {
            question: "Which NHL team's logo features a winged wheel?",
            answers: [
                { text: "Detroit Red Wings", correct: true },
                { text: "Pittsburgh Penguins", correct: false },
                { text: "Columbus Blue Jackets", correct: false },
                { text: "St. Louis Blues", correct: false },
            ]
        },
        {
            question: "Which team's logo has a stylized C with a flame?",
            answers: [
                { text: "Montreal Canadiens", correct: false },
                { text: "Chicago Blackhawks", correct: false },
                { text: "Carolina Hurricanes", correct: false },
                { text: "Calgary Flames", correct: true },
            ]
        },
        {
            question: "Which NHL team's logo features an indigenous chief's head with feathers?",
            answers: [
                { text: "Chicago Blackhawks", correct: true },
                { text: "Washington Capitals", correct: false },
                { text: "Florida Panthers", correct: false },
                { text: "New Jersey Devils", correct: false },
            ]
        },
        {
            question: "Which NHL team's logo has an anchor and a Space Needle hidden in it?",
            answers: [
                { text: "Vancouver Canucks", correct: false },
                { text: "San Jose Sharks", correct: false },
                { text: "Los Angeles Kings", correct: false },
                { text: "Seattle Kraken", correct: true },
            ]
        },
        {
            question: "Which NHL team features a musical note in its logo?",
            answers: [
                { text: "Nashville Predators", correct: false },
                { text: "St. Louis Blues", correct: true },
                { text: "Pittsburgh Penguins", correct: false },
                { text: "Columbus Blue Jackets", correct: false },
            ]
        },
        {
            question: "Which NHL team's logo features a shark biting a hockey stick?",
            answers: [
                { text: "San Jose Sharks", correct: true },
                { text: "Anaheim Ducks", correct: false },      
                { text: "Florida Panthers", correct: false },
                { text: "Tampa Bay Lightning", correct: false },
            ]
        },
        {
            question: "Which NHL team's logo features a saber-toothed tiger?",
            answers: [
                { text: "Buffalo Sabers", correct: false },
                { text: "Florida Panthers", correct: false },
                { text: "Calgary Flames", correct: false },
                { text: "San Jose Sharks", correct: false },
            ]
        },
        {
            question: "Which NHL team's logo features a star with a hockey stick?",
            answers: [
                { text: "Dallas Stars", correct: true },
                { text: "Colorado Avalanche", correct: false },
                { text: "Minnesota Wild", correct: false },
                { text: "Arizona Coyotes", correct: false },
            ]
        },
        {
            question: "Which NHL team's logo features a bear head?",
            answers: [
                { text: "Chicago Blackhawks", correct: false },
                { text: "Boston Bruins", correct: true },
                { text: "Washington Capitals", correct: false },
                { text: "New York Rangers", correct: false },
            ]
        }
    ],
    [
        {
            question: "Which team won the most Stanley Cups?",
            answers: [
                { text: "Montreal Canadiens", correct: true },
                { text: "Toronto Maple Leafs", correct: false },
                { text: "Detroit Red Wings", correct: false },
                { text: "New York Islanders", correct: false },
            ]
        },
        {
            question: "Which team won the first ever Stanley Cup in 1893?",
            answers: [
                { text: "Quebec Bulldogs", correct: false },
                { text: "Toronto Hockey Club", correct: false },
                { text: "Ottawa Senators", correct: false },
                { text: "Montreal Hockey Club", correct: true },
            ]
        },
        {
            question: "Which team won the Stanley Cup in 1999, ending a 54-year championship drought?",
            answers: [
                { text: "Buffalo Sabers", correct: false },
                { text: "New York Rangers", correct: true },
                { text: "Dallas Stars", correct: false },
                { text: "Colorado Avalanche", correct: false },
            ]
        },
        {
            question: "Which team won the Stanley Cup in 2023?",
            answers: [
                { text: "Vegas Golden Knights", correct: true },
                { text: "Florida Panthers", correct: false },
                { text: "Boston Bruins", correct: false },
                { text: "Toronto Maple Leafs", correct: false },
            ]
        },
        {
            question: "Which team won the Stanley Cup in 2010, their first in franchise history?",
            answers: [
                { text: "Tampa Bay Lightning", correct: false },
                { text: "Philadelphia Flyers", correct: false },
                { text: "Vancouver Canucks", correct: false },
                { text: "Chicago Blackhawks", correct: true },
            ]
        },
        {
            question: "Which team won back to back Stanley Cups in 2016 and 2017?",
            answers: [
                { text: "Pittsburgh Penguins", correct: true },
                { text: "Washington Capitals", correct: false },
                { text: "Los Angeles Kings", correct: false },
                { text: "Chicago Blackhawks", correct: false },
            ]
        },
        {
            question: "Which canadian team won the Stanley Cup in 1993, their last championship to date?",
            answers: [
                { text: "Vancouver Canucks", correct: false },
                { text: "Edmonton Oilers", correct: false },
                { text: "Montreal Canadiens", correct: true },
                { text: "Calgary Flames", correct: false },
            ]
        },
        {
            question: "Which team won the Stanley Cup in 2004, their first in franchise history?",
            answers: [
                { text: "Tampa Bay Lightning", correct: true },
                { text: "Carolina Hurricanes", correct: false },
                { text: "Anaheim Ducks", correct: false },
                { text: "New Jersey Devils", correct: false },
            ]
        },
        {
            question: "The Tampa Bay Lightning won back to back Stanley Cups in which years?",
            answers: [
                { text: "2018 and 2019", correct: false },
                { text: "2019 and 2020", correct: false },
                { text: "2020 and 2021", correct: true },
                { text: "2021 and 2022", correct: false },
            ]
        },
        {
            question: "Which team won the Stanley Cup in 2001, their first in franchise history?",
            answers: [
                { text: "Colorado Avalanche", correct: false },
                { text: "New Jersey Devils", correct: false },
                { text: "Tampa Bay Lightning", correct: false },
                { text: "Colorado Avalanche", correct: true },
            ]
        },
        {
            question: "Which team in the NHL has never won a Stanley Cup?",
            answers: [
                { text: "Vancouver Canucks", correct: false },
                { text: "Buffalo Sabers", correct: false },
                { text: "Arizona Coyotes", correct: true },
                { text: "Minnesota Wild", correct: false },
            ]
        },
        {
            question: "Which team won the Cup in 1967, the last year before the NHL expanded from 6 to 12 teams?",
            answers: [
                { text: "Toronto Maple Leafs", correct: true },
                { text: "Montreal Canadiens", correct: false },
                { text: "Detroit Red Wings", correct: false },
                { text: "Chicago Blackhawks", correct: false },
            ]
        },
        {
            question: "Which team ended the Detriot Red Wings Dynasty by winning the Stanley Cup in 1995?",
            answers: [
                { text: "New Jersey Devils", correct: true },
                { text: "Pittsburgh Penguins", correct: false },
                { text: "Colorado Avalanche", correct: false },
                { text: "Chicago Blackhawks", correct: false },
            ]
        },
        {
            question: "Which expansion team (post 1967) was the first to win the Stanley Cup?",
            answers: [
                { text: "Los Angeles Kings", correct: false },
                { text: "New York Islanders", correct: false },
                { text: "Philadelphia Flyers", correct: true },
                { text: "Calgary Flames", correct: false },
            ]
        }
    ],
    [
        {
            question: "WHich teams mascots are named after a type of bird?",
            answers: [
                { text: "Toronto Maple Leafs", correct: false },
                { text: "Ottawa Senators", correct: false },
                { text: "Chicago Blackhawks", correct: false },
                { text: "Anaheim Ducks", correct: true },
            ]
        },
        {
            question: "Which team's mascot is named Gritty?",
            answers: [
                { text: "Pittsburgh Penguins", correct: false },
                { text: "Philadelphia Flyers", correct: true },
                { text: "New York Rangers", correct: false },
                { text: "New Jersey Devils", correct: false },
            ]
        },
        {
            question: "Which team's mascot is a bear named Bailey?",
            answers: [
                { text: "Boston Bruins", correct: true },
                { text: "Chicago Blackhawks", correct: false },
                { text: "Washington Capitals", correct: false },
                { text: "New York Rangers", correct: false },
            ]
        },
        {
            question: "The Pittsburgh Penguins mascot is named what?",
            answers: [
                { text: "Iceburgh", correct: true },
                { text: "Pucky", correct: false },
                { text: "Slapshot", correct: false },
                { text: "Harvey the Hound", correct: false },
            ]
        },
        {
            question: "Which Canadian team's mascot is named Carlton the Bear?",
            answers: [
                { text: "Vancouver Canucks", correct: false },
                { text: "Calgary Flames", correct: false },
                { text: "Toronto Maple Leafs", correct: true },
                { text: "Montreal Canadiens", correct: false },
            ]
        },
        {
            question: "Which team's mascot is named Howler the Coyote?",
            answers: [
                { text: "Arizona Coyotes", correct: true },
                { text: "Minnesota Wild", correct: false },
                { text: "Colorado Avalanche", correct: false },
                { text: "Dallas Stars", correct: false },
            ]
        },
        {
            question: "The Montréal Canadiens mascot is named what?",
            answers: [
                { text: "Youppi!", correct: true },
                { text: "Benny the Bull", correct: false },
                { text: "Stanley C. Panther", correct: false },
                { text: "S.J. Sharkie", correct: false },
            ]
        },
        {
            question: "Which team's mascot is named Fin the Shark?",
            answers: [
                { text: "Vancouver Canucks", correct: false },
                { text: "Anaheim Ducks", correct: false },
                { text: "San Jose Sharks", correct: true },
                { text: "Tampa Bay Lightning", correct: false },
            ]
        },
        {
            question: "The Vegas Golden Knights mascot is unusal because it is a:",
            answers: [
                { text: "Dragon", correct: false },
                { text: "Lion", correct: false },
                { text: "Giant", correct: false },
                { text: "Gila Monster", correct: true },
            ]
        },
        {
            question: "Which team's mascot is named Bailey the Lion?",
            answers: [
                { text: "Detroit Red Wings", correct: false },
                { text: "Dallas Stars", correct: false },
                { text: "Los Angeles Kings", correct: true },
                { text: "Arizona Coyotes", correct: false },
            ]
        }
    ],
    [
        {
            question: "Which NBA team's logo features a basketball with a claw mark through it?",
            answers: [
                { text: "Toronto Raptors", correct: true },
                { text: "Chicago Bulls", correct: false },
                { text: "Miami Heat", correct: false },
                { text: "Golden State Warriors", correct: false },
            ]
        },
        {
            question: "Which team's logo is a bull's head?",
            answers: [
                { text: "Cleveland Cavaliers", correct: false },
                { text: "Detroit Pistons", correct: false },
                { text: "Chicago Bulls", correct: true },
                { text: "Milwaukee Bucks", correct: false },
            ]
        },
        {
            question: "Which NBA team's logo features a bridge?",
            answers: [
                { text: "Golden State Warriors", correct: true },
                { text: "Los Angeles Lakers", correct: false },
                { text: "Portland Trail Blazers", correct: false },
                { text: "Brooklyn Nets", correct: false },
            ]
        },
        {
            question: "Which team's logo features a flaming basketball?",
            answers: [
                { text: "Atlanta Hawks", correct: false },
                { text: "Phoenix Suns", correct: false },
                { text: "Houston Rockets", correct: false },
                { text: "Miami Heat", correct: true },
            ]
        },
        {
            question: "Which NBA team's logo has a deer head with large antlers?",
            answers: [
                { text: "Milwaukee Bucks", correct: true },
                { text: "Chicago Bulls", correct: false },
                { text: "Cleveland Cavaliers", correct: false },
                { text: "Detroit Pistons", correct: false },
            ]
        },
        {
            question: "Which NBA team's logo features a horse's head?",
            answers: [
                { text: "Charlotte Hornets", correct: false },
                { text: "Dallas Mavericks", correct: true },
                { text: "Denver Nuggets", correct: false },
                { text: "Indiana Pacers", correct: false },
            ]
        },
        {
            question: "Which NBA team's logo features a lion's head?",
            answers: [
                { text: "Detroit Pistons", correct: false },
                { text: "Charlotte Hornets", correct: false },
                { text: "Cleveland Cavaliers", correct: true },
                { text: "Orlando Magic", correct: false },
            ]
        },
        {
            question: "The logo with a wolf howling inside a blue star belongs to which NBA team?",
            answers: [
                { text: "Minnesota Timberwolves", correct: true },
                { text: "Dallas Mavericks", correct: false },
                { text: "Denver Nuggets", correct: false },
                { text: "Utah Jazz", correct: false },
            ]
        },
        {
            question: "Which NBA team's logo features a stylized letter 'P' with a basketball?",
            answers: [
                { text: "Portland Trail Blazers", correct: false },
                { text: "Philadelphia 76ers", correct: false },
                { text: "Phoenix Suns", correct: false },
                { text: "Indiana Pacers", correct: true },
            ]
        },
        {
            question: "Which NBA team's logo features a stylized letter 'L' with a basketball?",
            answers: [
                { text: "Los Angeles Clippers", correct: false },
                { text: "Los Angeles Lakers", correct: true },
                { text: "New Orleans Pelicans", correct: false },
                { text: "Sacramento Kings", correct: false },
            ]
        },
        {
            question: "Which team's logo features a sword through a basketball shaped C?",
            answers: [
                { text: "Cleveland Cavaliers", correct: true },
                { text: "Charlotte Hornets", correct: false },
                { text: "Chicago Bulls", correct: false },
                { text: "Golden State Warriors", correct: false },
            ]
        },
        {
           question: "Which team's logo is a spinning pinwheel design?",
           answers: [
               { text: "Brooklyn Nets", correct: false },
               { text: "Portland Trail Blazers", correct: true },
               { text: "Sacramento Kings", correct: false },
               { text: "Utah Jazz", correct: false },
           ] 
        },
        {
            question: "The logo with a pickaxe crossing a basketball belongs to which NBA team?",
            answers: [
                { text: "Denver Nuggets", correct: true },
                { text: "Minnesota Timberwolves", correct: false },
                { text: "Utah Jazz", correct: false },
                { text: "Oklahoma City Thunder", correct: false },
            ]
        },
        {
            question: "Which NBA team's logo features a pelican with a basketball?",
            answers: [
                { text: "New Orleans Pelicans", correct: true },
                { text: "Miami Heat", correct: false },
                { text: "Orlando Magic", correct: false },
                { text: "Atlanta Hawks", correct: false },
            ]   
        },
        {
            question: "Which NBA team's logo has a wizard holding a basketball?",
            answers: [
                { text: "New Orleans Pelicans", correct: false },
                { text: "Washington Wizards", correct: true },
                { text: "Orlando Magic", correct: false },
                { text: "Atlanta Hawks", correct: false },
            ]
        }
    ],
    [
        {
            question: "Which NBA team has won the most championships?",
            answers: [
                { text: "Los Angeles Lakers", correct: false },
                { text: "Boston Celtics", correct: true },
                { text: "Chicago Bulls", correct: false },
                { text: "Golden State Warriors", correct: false },
            ]
        },
        {
            question: "Which team won the first ever NBA championship in 1947?",
            answers: [
                { text: "Philadelphia Warriors", correct: true },
                { text: "Chicago Stags", correct: false },
                { text: "New York Knicks", correct: false },
                { text: "Washington Capitols", correct: false },
            ]
        },
        {
            question: "Which team won the NBA championship in 2023?",
            answers: [
                { text: "Boston Celtics", correct: false },
                { text: "Golden State Warriors", correct: true },
                { text: "Milwaukee Bucks", correct: false },
                { text: "Miami Heat", correct: false },
            ]
        },
        {
            question: "Which team won the NBA championship in 2016, coming back from a 3-1 deficit?",
            answers: [
                { text: "Golden State Warriors", correct: false },
                { text: "Cleveland Cavaliers", correct: true },
                { text: "Toronto Raptors", correct: false },
                { text: "San Antonio Spurs", correct: false },
            ]   
        },
        {
            question: "Which team won the NBA championship in 2019, their first in franchise history?",
            answers: [
                { text: "Golden State Warriors", correct: false },
                { text: "Milwaukee Bucks", correct: false },
                { text: "Denver Nuggets", correct: false },
                { text: "Toronto Raptors", correct: true },
            ]
        },
        {
            question: "Which team won back to back NBA championships in 2017 and 2018?",
            answers: [
                { text: "Cleveland Cavaliers", correct: false },
                { text: "Golden State Warriors", correct: true },
                { text: "Houston Rockets", correct: false },    
                { text: "San Antonio Spurs", correct: false },
            ]
        },
        {
            question: "Which team won the NBA championship in 2004, their first in franchise history?",
            answers: [
                { text: "Detroit Pistons", correct: true },
                { text: "Los Angeles Lakers", correct: false },
                { text: "San Antonio Spurs", correct: false },
                { text: "New Jersey Nets", correct: false },
            ]
        },
        {
            question: "Which team won the NBA championship in 2008, ending a 22-year title drought?",
            answers: [
                { text: "San Antonio Spurs", correct: false },
                { text: "Los Angeles Lakers", correct: false },
                { text: "Boston Celtics", correct: true },
                { text: "Detroit Pistons", correct: false },
            ]
        },
        {
            question: "Which team won the NBA championship in 2010?",
            answers: [
                { text: "Los Angeles Lakers", correct: true },
                { text: "Boston Celtics", correct: false },
                { text: "Miami Heat", correct: false },
                { text: "San Antonio Spurs", correct: false },
            ]
        },
        {
            question: "Micheal Jordan won 6 NBA championships with which team?",
            answers: [
                { text: "Los Angeles Lakers", correct: false },
                { text: "Washington Wizards", correct: false },
                { text: "Miami Heat", correct: false },
                { text: "Chicago Bulls", correct: true },
            ]
        },
        {
            question: "The Miami Heat won back to back NBA championships with Lebron James in which years?",
            answers: [
                { text: "2010 and 2011", correct: false },
                { text: "2011 and 2012", correct: false },
                { text: "2012 and 2013", correct: true },
                { text: "2013 and 2014", correct: false },
            ]
        },
        {
            question: "The San Antonio Spurs won their last NBA championship in which year?",
            answers: [
                { text: "2012", correct: false },
                { text: "2013", correct: false },
                { text: "2014", correct: true },
                { text: "2015", correct: false },
            ]
        },
        {
            question: "Who won the NBA Finals in 2016 after being down 3-1 in the series?",
            answers: [
                { text: "Golden State Warriors", correct: false },
                { text: "Cleveland Cavaliers", correct: true },
                { text: "Toronto Raptors", correct: false },
                { text: "San Antonio Spurs", correct: false },
            ]
        },
        {
            question: "The Golden State Warriors Dynasty began with Steph Currey in which year?",
            answers: [
                { text: "2014", correct: false },
                { text: "2015", correct: true },
                { text: "2016", correct: false },
                { text: "2017", correct: false },
            ]
        },
        {
            question: "Which team won the NBA championship in 1985, their first in franchise history?",
            answers: [
                { text: "Los Angeles Lakers", correct: false },
                { text: "Boston Celtics", correct: false },
                { text: "Chicago Bulls", correct: false },
                { text: "Portland Trail Blazers", correct: true },
            ]
        },
        {
            question: "Which team won the NBA championship in 1971, their first in franchise history?",
            answers: [
                { text: "New York Knicks", correct: true },
                { text: "Los Angeles Lakers", correct: false },
                { text: "Boston Celtics", correct: false },
                { text: "Milwaukee Bucks", correct: false },
            ]
        }
    ],
    [
        {
            qestion: "Who won the most FIFA world cups?",
            answers: [
                { text: "Germany", correct: false },
                { text: "Italy", correct: false },
                { text: "Argentina", correct: false },
                { text: "Brazil", correct: true },
            ]
        },
        {
            question: "Which country hosted the 2018 FIFA World Cup?",
            answers: [
                { text: "Brazil", correct: false },
                { text: "Russia", correct: true },
                { text: "Germany", correct: false },
                { text: "South Africa", correct: false },
            ]
        },
        {
            question: "Who won the 2022 FIFA World Cup?",
            answers: [
                { text: "France", correct: false },
                { text: "Argentina", correct: true },
                { text: "Brazil", correct: false },
                { text: "Germany", correct: false },
            ]
        },
        {
            question: "Which country hosted the 2014 FIFA World Cup?",
            answers: [
                { text: "Germany", correct: false },
                { text: "Brazil", correct: true },
                { text: "South Africa", correct: false },
                { text: "Russia", correct: false },
            ]
        },
        {
            question: "Who won the 2010 FIFA World Cup?",
            answers: [
                { text: "Netherlands", correct: false },
                { text: "Spain", correct: true },
                { text: "Germany", correct: false },
                { text: "Italy", correct: false },
            ]
        },
        {
            question: "WHuch country won the first ever FIFA World Cup in 1930?",
            answers: [
                { text: "Uruguay", correct: true },
                { text: "Argentina", correct: false },
                { text: "Brazil", correct: false },
                { text: "Italy", correct: false },
            ]
        },
        {
            question: "Who won the 2018 FIFA World Cup?",
            answers: [
                { text: "Croatia", correct: false },
                { text: "France", correct: true },
                { text: "Belgium", correct: false },
                { text: "England", correct: false },
            ]
        },
        {
            question: "Which country hosted the 2006 FIFA World Cup?",
            answers: [
                { text: "Italy", correct: false },
                { text: "Germany", correct: true },
                { text: "France", correct: false },
                { text: "Spain", correct: false },
            ]
        },
        {
            question: "Which African country was the first to reach the World Cup semifinals?",
            answers: [
                { text: "Nigeria", correct: false },
                { text: "Cameroon", correct: false },
                { text: "Morocco", correct: true },
                { text: "Senegal", correct: false },
            ]
        },
        {
            question: "Which country won the 2010 FIFA World Cup in South Africa?",
            answers: [
                { text: "Netherlands", correct: false },
                { text: "Spain", correct: true },
                { text: "Germany", correct: false },
                { text: "Italy", correct: false },
            ]
        },
        {
            question: "Which country was the first to win back-to-back FIFA World Cups?",
            answers: [
                { text: "Italy", correct: true },
                { text: "Brazil", correct: false },
                { text: "Germany", correct: false },
                { text: "Argentina", correct: false },
            ]
        },
        {
            question: "Which team was the first team to win the World Cup twice?",
            answers: [
                { text: "Italy", correct: true },
                { text: "Brazil", correct: false },
                { text: "Germany", correct: false },
                { text: "Argentina", correct: false },
            ]
        },
        {
            question: "Which country hosted the 2002 FIFA World Cup?",
            answers: [
                { text: "Japan and South Korea", correct: true },
                { text: "China", correct: false },
                { text: "Australia", correct: false },
                { text: "Thailand", correct: false },
            ]
        },
        {
            question: "Who won the 2002 FIFA World Cup?",
            answers: [
                { text: "Germany", correct: false },
                { text: "Brazil", correct: true },
                { text: "Italy", correct: false },
                { text: "Argentina", correct: false },
            ]
        },
        {
            question: "When did England win its only World Cup?",
            answers: [
                { text: "1966", correct: true },
                { text: "1970", correct: false },
                { text: "1982", correct: false },
                { text: "1990", correct: false },
            ]
        },
        {
            question: "Who won the 1986 FIFA World Cup?",
            answers: [
                { text: "Germany", correct: false },
                { text: "Argentina", correct: true },
                { text: "Italy", correct: false },
                { text: "Brazil", correct: false },
            ]
        },
        {
            question: 'Which European team won the 1954 World Cup in "The Miracle of Bern"?',
            answers: [
                { text: "East Germany", correct: false },
                { text: "Hungary", correct: false },
                { text: "Germany", correct: false },
                { text: "West Germany", correct: true },
            ]
        }
    ],
    [
        {
            question: "Which club features a red devil holding a trident in its logo?",
            answers: [
                { text: "Liverpool", correct: false },
                { text: "Manchester United", correct: true },
                { text: "Chelsea", correct: false },
                { text: "Arsenal", correct: false },
            ]
        },
        {
            question: "Which club's logo features a cannon?",
            answers: [
                { text: "Arsenal", correct: true },
                { text: "Tottenham Hotspur", correct: false },
                { text: "West Ham United", correct: false },
                { text: "Leicester City", correct: false },
            ]
        },
        {
            question: "Which team has a logo with a blue lion holding a staff?",
            answers: [
                { text: "Chelsea", correct: true },
                { text: "Manchester City", correct: false },
                { text: "Everton", correct: false },
                { text: "Leicester City", correct: false },
            ]
        },
        {
            question: "Which club's logo features a liver bird?",
            answers: [
                { text: "Manchester United", correct: false },
                { text: "Aston Villa", correct: false },
                { text: "Everton", correct: false },
                { text: "Liverpool", correct: true },
            ]
        },
        {
            question: "Which Spanish club's logo has red and blue stripes with a cross and a ball?",
            answers: [
                { text: "Barcelona", correct: true },
                { text: "Real Madrid", correct: false },
                { text: "Atletico Madrid", correct: false },
                { text: "Valencia", correct: false },
            ]
        },
        {
            question: "Which German club's badge is a large BVB 09 in black and yellow?",
            answers: [
                { text: "Bayern Munich", correct: false },
                { text: "Borussia Dortmund", correct: true },
                { text: "RB Leipzig", correct: false },
                { text: "Schalke 04", correct: false },
            ]
        },
        {
            question: "Which Italian club's logo shows a wolf with twins Romulus and Remus?",
            answers: [
                { text: "Juventus", correct: false },
                { text: "AC Milan", correct: false },
                { text: "AS Roma", correct: true },
                { text: "Inter Milan", correct: false },
            ]
        },
        {
            question: "Which French club's logo features a blue and red shield with a fleur-de-lis and a cradle?",
            answers: [
                { text: "Marseille", correct: false },
                { text: "Lyon", correct: false },
                { text: "Monaco", correct: true },
                { text: "Paris Saint-Germain", correct: false },
            ]
        },
        {
            question: "Which club's logo features a yellow submarine?",
            answers: [
                { text: "Villarreal", correct: true },
                { text: "Valencia", correct: false },
                { text: "Sevilla", correct: false },
                { text: "Real Betis", correct: false },
            ]
        },
        {
            question: "Which German club's badge has the initials FCB in red and blue stripes?",
            answers: [
                { text: "Bayer Leverkusen", correct: false },
                { text: "Borussia Dortmund", correct: false },
                { text: "Bayern Munich", correct: true },
                { text: "RB Leipzig", correct: false },
            ]
        },
        {
            question: "Which club's logo has a bat on top?",
            answers: [
                { text: "Sevilla", correct: false },
                { text: "Valencia", correct: true },
                { text: "Villarreal", correct: false },
                { text: "Real Betis", correct: false },
            ]
        },
        {
            question: "Which South American club's badge is famous for black and yellow stripes with the letters SFC?",
            answers: [
                { text: "Boca Juniors", correct: false },
                { text: "Peñarol", correct: false },
                { text: "Santos", correct: true },
                { text: "River Plate", correct: false },
            ]
        }
    ],
    [
        {
            question: "Which player is nicknamed La Pulga?",
            answers: [
                { text: "Cristiano Ronaldo", correct: false },
                { text: "Neymar", correct: false },
                { text: "Lionel Messi", correct: true },
                { text: "Kylian Mbappe", correct: false },
            ]
        },
        { question: "Which player is known as CR7?",
            answers: [
                { text: "Cristiano Ronaldo", correct: true },
                { text: "Lionel Messi", correct: false },
                { text: "Neymar", correct: false },
                { text: "Kylian Mbappe", correct: false },
            ]
        },
        {
            question: "Which player is nicknamed The Egyptian King?",
            answers: [
                { text: "Mohamed Salah", correct: true },
                { text: "Sadio Mane", correct: false },
                { text: "Riyad Mahrez", correct: false },
                { text: "Hakim Ziyech", correct: false },
            ]
        },
        {
            question: "Which player scored the 'Hand of God' goal in the 1986 World Cup?",
            answers: [
                { text: "Pelé", correct: false },
                { text: "Diego Maradona", correct: true },
                { text: "Johan Cruyff", correct: false },
                { text: "Zinedine Zidane", correct: false },
            ]
        },
        {
            question: "Which player is famous for the quote 'I think therefore I play' and wore the number 21 for Italy?",
            answers: [
                { text: "Paolo Maldini", correct: false },
                { text: "Francesco Totti", correct: false },
                { text: "Gianluigi Buffon", correct: false },
                { text: "Andrea Pirlo", correct: true },
            ]
        },
        {
            question: "Who is known as O Rei (The King) in football?",
            answers: [
                { text: "Diego Maradona", correct: false },
                { text: "Pelé", correct: true },
                { text: "Zinedine Zidane", correct: false },
                { text: "Cristiano Ronaldo", correct: false },
            ]
        },
        {
            question: "Which player is nicknamed The Special One?",
            answers: [
                { text: "Cristiano Ronaldo", correct: false },
                { text: "Lionel Messi", correct: false },
                { text: "José Mourinho", correct: true },
                { text: "Pep Guardiola", correct: false },
            ]
        },
        {
            question: "Which Brazilian player was famous for his flashy skills and played for Barcelona and AC Milan?",
            answers: [
                { text: "Rivaldo", correct: false },
                { text: "Kaká", correct: false },
                { text: "Ronaldinho", correct: true },
                { text: "Robinho", correct: false },
            ]
        },
        {
            question: "Which French player scored twice in the 1998 World Cup final?",
            answers: [
                { text: "Zinedine Zidane", correct: true },
                { text: "Thierry Henry", correct: false },
                { text: "Didier Deschamps", correct: false },
                { text: "David Trezeguet", correct: false },
            ]
        },
        {
            question: "Which African player won the Ballon d'Or in 1995?",
            answers: [
                { text: "George Weah", correct: true },
                { text: "Samuel Eto'o", correct: false },
                { text: "Didier Drogba", correct: false },
                { text: "Yaya Touré", correct: false },
            ]
        },
        {
            question: "Which German foorball player scored the most goals in World Cup history?",
            answers: [
                { text: "Gerd Müller", correct: false },
                { text: "Miroslav Klose", correct: true },
                { text: "Lothar Matthäus", correct: false },
                { text: "Jürgen Klinsmann", correct: false },
            ]
        },
        {
            question: "Which Dutch player is known for his 'Cruyff Turn'?",
            answers: [
                { text: "Ruud Gullit", correct: false },
                { text: "Marco van Basten", correct: false },
                { text: "Johan Cruyff", correct: true },
                { text: "Dennis Bergkamp", correct: false },
            ]
        },
        {
            question: "Which goalkeeper is nicknamed Gigi?",
            answers: [
                { text: "Gianluigi Buffon", correct: true },
                { text: "Iker Casillas", correct: false },
                { text: "Manuel Neuer", correct: false },
                { text: "Petr Čech", correct: false },
            ]
        },
        {
            question: "Which English Player is known as 'Captain Fantastic'?",
            answers: [
                { text: "David Beckham", correct: false },
                { text: "Wayne Rooney", correct: false },
                { text: "Frank Lampard", correct: false },
                { text: "Steven Gerrard", correct: true },
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
    const summaryEl = document.getElementById("summary");
    if (summaryEl) summaryEl.style.display = "none";
    if (homeButton) homeButton.style.display = "none";

    question = questions[window.location.hash.replace("#", "") - 1] || questions[0];
    question.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion() {
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    document.getElementById("questionCounter").textContent =
  `${currentQuestionIndex + 1} / ${question.length}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        startTimer();
    });
}

function startTimer() {
  clearInterval(timerInterval); // clear previous timer
  timeLeft = 15; // reset timer each question

  const timerDisplay = document.getElementById("timerDisplay");
  if (timerDisplay) {
    timerDisplay.textContent = `⏱️ Time Left: ${timeLeft}s`;
    timerDisplay.classList.remove("low-time");
  }

  timerInterval = setInterval(() => {
    timeLeft--;
    if (timerDisplay) {
      timerDisplay.textContent = `⏱️ Time Left: ${timeLeft}s`;
      if (timeLeft <= 5) timerDisplay.classList.add("low-time");
    }

    if (timeLeft <= 0) {
  clearInterval(timerInterval);
  playSound(soundTimeUp); // ⏰ play time's up sound
  alert("⏰ Time’s up!");
  document.getElementById("nxt-button").click();
}
  }, 1000);
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);

    }
}

function selectAnswer(e) {
    clearInterval(timerInterval);
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    const currentQ = question[currentQuestionIndex];
    answerSummary.push({
    question: currentQ.question,
    selected: selectedBtn.innerText,
    correctAnswer: currentQ.answers.find(a => a.correct).text,
    isCorrect: isCorrect
});
    if (isCorrect) {
        playSound(soundCorrect); // ✅ play "ding" sound

        score++;
        streak++;
        if (streak % 3 === 0) {
            coins += 5;
            playSound(soundBonus); // 💰 play bonus sound
            alert("🔥 Streak bonus! +5 coins");
        }

        // update streak counter on screen
        const streakDisplay = document.getElementById("streakCounter");
        if (streakDisplay) streakDisplay.textContent = `🔥 Streak: ${streak}`;

        let reward = 10;

        // check if double coins is active
        let doubleCoins = parseInt(localStorage.getItem("doubleCoins")) || 0;
        if (doubleCoins > 0) {
            reward *= 2;
            localStorage.setItem("doubleCoins", doubleCoins - 1);
        }

        // add coins
        coins += reward;
        localStorage.setItem("coins", coins);

        if (document.getElementById("coinCount")) {
            document.getElementById("coinCount").textContent = coins;
        }
    } else {
        playSound(soundWrong); // ❌ play "buzz" sound

        streak = 0;
        const streakDisplay = document.getElementById("streakCounter");
        if (streakDisplay) streakDisplay.textContent = `🔥 Streak: ${streak}`;
        selectedBtn.classList.add("incorrect");
        coins -= 7; // Subtract 7 coins for an incorrect answer
        localStorage.setItem("coins", coins);
        document.getElementById("coinCount").textContent = coins;
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function buyItem(item, cost) {
  if (coins >= cost) {
    coins -= cost;
    localStorage.setItem("coins", coins);

    if (document.getElementById("coinCount")) {
      document.getElementById("coinCount").textContent = coins;
    }

    switch(item) {
      case 'hint':
        alert("Hint purchased! You can use it in your next quiz.");
        localStorage.setItem("hintAvailable", true);
        break;
      case 'skip':
        alert("Skip purchased! You can skip one question.");
        localStorage.setItem("skipAvailable", true);
        break;
      case 'double':
        alert("Double Coins activated for next 3 questions!");
        localStorage.setItem("doubleCoins", 3);
        break;
    }
  } else {
    alert("Not enough coins!");
  }
}
function useHint() {
  let hintAvailable = localStorage.getItem("hintAvailable");
  if (hintAvailable) {
    // get all answer buttons
    let allButtons = document.querySelectorAll(".btn-grid .btn");
    let incorrectButtons = Array.from(allButtons).filter(
      btn => btn.dataset.correct !== "true"
    );

    // pick 2 random incorrect answers
    for (let i = 0; i < 2 && incorrectButtons.length > 0; i++) {
      let randIndex = Math.floor(Math.random() * incorrectButtons.length);
      let btnToRemove = incorrectButtons[randIndex];
      btnToRemove.disabled = true;
      btnToRemove.style.opacity = "0.5"; // fade it out
      incorrectButtons.splice(randIndex, 1);
    }

    alert("Hint used! Two wrong answers removed.");
    localStorage.removeItem("hintAvailable");
  } else {
    alert("No hint available. Buy one in the shop!");
  }
}

function useSkip() {
  let skipAvailable = localStorage.getItem("skipAvailable");
  if (skipAvailable) {
    alert("Question skipped!");
    localStorage.removeItem("skipAvailable");

    // Simulate clicking the Next button
    document.getElementById("nxt-button").click();
  } else {
    alert("No skip available. Buy one in the shop!");
  }
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;

  // Make the answer summary
  let summaryHTML = "<h2>Answer Summary</h2><ul>";
  answerSummary.forEach((item, i) => {
    const resultClass = item.isCorrect ? "correct" : "incorrect";
    summaryHTML += `
      <li class="${resultClass}">
        <strong>Q${i + 1}:</strong> ${item.question}<br>
        <span>You answered:</span> ${item.selected}<br>
        ${
          item.isCorrect
            ? "✅ Correct"
            : `❌ Correct answer: <em>${item.correctAnswer}</em>`
        }
      </li>
    `;
  });
  summaryHTML += "</ul>";

  // show summary on screen
  summaryDiv.innerHTML = summaryHTML;
  summaryDiv.style.display = "block";

  // show "Play Again" and "Go Home"
nextButton.innerHTML = "Play Again";
nextButton.style.display = "block";

if (homeButton) {
  homeButton.style.display = "inline-block";
  homeButton.onclick = () => (window.location.href = "index.html");
}

score = 0;
answerSummary = []; // reset for next round

  if (homeButton) {
    homeButton.style.display = "inline-block";
    homeButton.onclick = () => window.location.href = "index.html";
  }
  const homeButton = document.getElementById("home-button");
  // only attach listener once
  if (homeButton && !homeButton.hasListener) {
    homeButton.addEventListener("click", () => {
      window.location.href = "index.html";
      });
      homeButton.hasListener = true; // mark it so we don’t attach again
    }
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  if (homeButton) homeButton.style.display = "block";
  score = 0;
  answerSummary = []; // reset for next round
}


document.getElementById("muteBtn").addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  document.getElementById("muteBtn").textContent = soundEnabled ? "🔊 Sound: On" : "🔇 Sound: Off";
});

function playSound(sound) {
  if (!soundEnabled) return; // if muted, stop
  sound.pause();
  sound.currentTime = 0;
  sound.play().catch(err => {
    console.log("Sound blocked until user interacts:", err);
  });
}


function handleNextButton() {
    if (currentQuestionIndex < question.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    // 🔙 Go Back to Home button setup
const homeButton = document.getElementById("home-button");
if (homeButton) {
  homeButton.addEventListener("click", () => {
    window.location.href = "index.html"; // make sure this matches your homepage file name
  });
}

    if (currentQuestionIndex < question.length) {
        currentQuestionIndex++;
        handleNextButton();
    } else {
        startQuiz();
    }
});
startQuiz();
