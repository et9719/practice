let start = document.getElementById('start');
let instructions = document.getElementById('instructions');
let continueBtn = document.getElementById('continue');
let quizSection = document.getElementById('quiz');
let nextBtn = document.getElementById('next');
let endBtn = document.getElementById('end');

let questionText = document.getElementById('questionText');

let choice1 = document.getElementById('option1');
let choice2 = document.getElementById('option2');
let choice3 = document.getElementById('option3');
let choice4 = document.getElementById('option4');

let correct = document.getElementById('score');
let incorrect = document.getElementById('incorrect');

let index = 0;

// When start button is clicked, remove the start button and show the instructions.
start.addEventListener('click', startQuiz);

function startQuiz() {
    console.log('start');
    start.classList.add('hide');
    instructions.classList.remove('hide');
}

// When continue button is clicked, show the first question.
continueBtn.addEventListener('click', showQuestion);

function showQuestion() {
    instructions.classList.add('hide');
    quizSection.classList.remove('hide');
    loadData();
} 

// When user clicks on an answer, show next button
function showNextBtn() {
    if (index !== questions.length - 1 ) {
        nextBtn.classList.remove('hide');
    } else {
        endBtn.classList.remove('hide');
    }
}

// Show next question when next button is clicked.
nextBtn.addEventListener('click', showNextQuestion);

function showNextQuestion() {
    if (index !== questions.length - 1 ) {
        index++;
        loadData();
        nextBtn.classList.add('hide');
    } 
}

// Take data from javaScript and push to html. 
let loadData = ()=>{
    questionText.innerText = questions[index].question;
    choice1.innerText = questions[index].option1;
    choice2.innerText = questions[index].option2;
    choice3.innerText = questions[index].option3;
    choice4.innerText = questions[index].option4;
}

// Add selected class to answer user chooses.
choice1.addEventListener('click', usersAnswer);
choice2.addEventListener('click', usersAnswer);
choice3.addEventListener('click', usersAnswer);
choice4.addEventListener('click', usersAnswer);
function usersAnswer() {
    
            this.classList.add('selected');
            console.log(this);
            checkAnswer(this);
            showNextBtn();
}

// check if answer is correct.
function checkAnswer(selectedAnswer) {
    const usersAns = selectedAnswer.innerText;
    incrementScore(usersAns);
}

// Increment the incorrect and correct answers. 
function incrementScore(usersAns) {
    // console.log('userAns', usersAns);
    // console.log('questions.answer',questions[index].answer);
    if (usersAns === questions[index].answer) {
        //  if answer is correct and 1 point to correct answers
        let oldScore = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = oldScore + 1;
    } else {
        // if answer is incorrect and 1 point to incorrect answers
        let oldScore = parseInt(document.getElementById("incorrect").innerText);
        document.getElementById("incorrect").innerText = oldScore + 1;
    }
} 

let questions = [ 
    {
        question: 'How many brains does an octopus have?',
        option1: '1',
        option2: '6',
        option3: '8',
        option4: '9',
        answer: '9'
    },
    {
        question: 'In what country is it illegal to bring a bear to the beach?',
        option1: 'Israel',
        option2: 'Australia',
        option3: 'China',
        option4: 'Spain',
        answer: 'Israel'
    },
    {
        question: 'In what country is it illegal to handle salmon in suspicious circumstances?',
        option1: 'Iceland',
        option2: 'Canada',
        option3: 'England',
        option4: 'Sweden',
        answer: 'England'
    },
    {
        question: 'For around 20 years a cat served as honorary mayor in which state?',
        option1: 'Alaska',
        option2: 'Pennsylvania',
        option3: 'Delaware',
        option4: 'Nevada',
        answer: 'Alaska'
    },
    {
        question: 'Out of the following animals which one has no stomach?',
        option1: 'Ostrich',
        option2: 'Crab',
        option3: 'Platypus',
        option4: 'Clawed Frog',
        answer: 'Platypus'
    },
    {
        question: 'If you got in your car, drove at 60mph in a strait line, how long would it take you to get to space?',
        option1: '1 Hour',
        option2: '6 Hours',
        option3: '3 Days',
        option4: 'Two Weeks',
        answer: '1 Hour'
    }, 
    {
        question: 'What country consumes the most mac & cheese?',
        option1: 'USA',
        option2: 'France',
        option3: 'Denmark',
        option4: 'Canada',
        answer: 'Canada'
    },
    {
        question: 'What was the last letter added to the alphabet?',
        option1: 'X',
        option2: 'Z',
        option3: 'J',
        option4:  'Q',
        answer: 'J'
    },
    {
        question: 'what strange food did mcdonalds attepmt to create in 2014?',
        option1: 'Gravy flavored donuts',
        option2: 'Burger flavored milkshake',
        option3: '',
        option4: 'Bubble gum flavored broccoli',
        answer: 'Bubble gum flavored broccoli'
    },
    {
        question: '?',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        answer: 2
    }
];