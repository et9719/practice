let start = document.getElementById('start');
let instructions = document.getElementById('instructions');
let continueBtn = document.getElementById('continue');
let quizSection = document.getElementById('quiz');
let nextBtn = document.getElementById('next');

let choice = document.getElementsByClassName('choice_que');
let choice1 = document.getElementById('option1');
let choice2 = document.getElementById('option2');
let choice3 = document.getElementById('option3');
let choice4 = document.getElementById('option4');

start.addEventListener('click', startQuiz);
// when start button is clicked, remove the start button and show the instructions.
function startQuiz() {
    console.log('started');
    start.classList.add('hide');
    instructions.classList.remove('hide');
}

continueBtn.addEventListener('click', showFirstQuestion);
// when continue button is clicked, show the first question.
function showFirstQuestion() {
    instructions.classList.add('hide');
    quizSection.classList.remove('hide');
}

choice1.addEventListener('click', showNextBtn)
choice2.addEventListener('click', showNextBtn)
choice3.addEventListener('click', showNextBtn)
choice4.addEventListener('click', showNextBtn)
// 
function showNextBtn() {
    nextBtn.classList.remove('hide');

}

