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
            question: "who lead India's non-violent independence movement against British rule?",
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
                { text: "The Union and the Confederacy", correct: true },
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
