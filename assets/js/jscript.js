let start = document.getElementById('start');
let instructions = document.getElementById('instructions');
let continueBtn = document.getElementById('continue');
let quizSection = document.getElementById('quiz');
let nextBtn = document.getElementById('next');

let questionText = document.getElementById('questionText');

let choice_que = document.getElementsByClassName('choice_que');
let choice1 = document.getElementById('option1');
let choice2 = document.getElementById('option2');
let choice3 = document.getElementById('option3');
let choice4 = document.getElementById('option4');

let usersAns = undefined;
let index = 0;

start.addEventListener('click', startQuiz);
// when start button is clicked, remove the start button and show the instructions.
function startQuiz() {
    console.log('started');
    start.classList.add('hide');
    instructions.classList.remove('hide');
}

continueBtn.addEventListener('click', showQuestion);
// when continue button is clicked, show the first question.
function showQuestion() {
    instructions.classList.add('hide');
    quizSection.classList.remove('hide');
    loadData();
} 

choice1.addEventListener('click', showNextBtn)
choice2.addEventListener('click', showNextBtn)
choice3.addEventListener('click', showNextBtn)
choice4.addEventListener('click', showNextBtn)
/* when user clicks on an answer, show next button, change answer 
choices to relevent colors and increment score. */
function showNextBtn() {
    nextBtn.classList.remove('hide');
}

nextBtn.addEventListener('click', showNextQuestion);
// show next question when next button is clicked
function showNextQuestion() {
    if (index !== questions.length - 1) {
        index++;
    }
    loadData();
}

let loadData = ()=>{
    questionText.innerText = questions[index].question;
    choice1.innerText = questions[index].option1;
    choice2.innerText = questions[index].option2;
    choice3.innerText = questions[index].option3;
    choice4.innerText = questions[index].option4;
}

/*
choice_que.forEach( (choices, choiceNo) =>{
    choices.addEventListener('click', ()=>{
        choices.classList.add('active');
        // check answer
        if(choiceNo === questions[index].answer)
        {
            correct++;
        } else {
            correct += 0;
        }
    })
});
*/

let questions = [ 
    {
        question: 'How many brains does an octopus have?',
        option1: '1',
        option2: '6',
        option3: '8',
        option4: '9',
        answer: 4
    },
    {
        question: 'In what country is it illegal to bring a bear to the beach?',
        option1: 'Israel',
        option2: 'Australia',
        option3: 'China',
        option4: 'Spain',
        answer: 1
    },
    {
        question: 'In what country is it illegal to handle salmon in suspicious circumstances?',
        option1: 'Iceland',
        option2: 'Canada',
        option3: 'England',
        option4: 'Sweden',
        answer: 3
    },
    {
        question: 'For around 20 years a cat served as honorary mayor in which state?',
        option1: 'Alaska',
        option2: 'Pennsylvania',
        option3: 'Delaware',
        option4: 'Nevada',
        answer: 1
    },
    {
        question: 'Out of the following animals which one has no stomach?',
        option1: 'Ostrich',
        option2: 'Crab',
        option3: 'Platypus',
        option4: 'Clawed Frog',
        answer: 3
    },
    {
        question: 'If you got in your car, drove at 60mph in a strait line, how long would it take you to get to space?',
        option1: '1 Hour',
        option2: '6 Hours',
        option3: '3 Days',
        option4: 'Two Weeks',
        answer: 1
    }, 
    {
        question: 'What country consumes the most mac & cheese?',
        option1: 'USA',
        option2: 'France',
        option3: 'Denmark',
        option4: 'Canada',
        answer: 4
    },
    {
        question: 'What was the last letter added to the alphabet?',
        option1: 'X',
        option2: 'Z',
        option3: 'J',
        option4:  'Q',
        answer: 3
    },
    {
        question: 'what strange food did mcdonalds attepmt to create in 2014?',
        option1: 'Gravy flavored donuts',
        option2: 'Burger flavored milkshake',
        option3: '',
        option4: 'Bubble gum flavored broccoli',
        answer: 4
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