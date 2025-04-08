import { questions } from "./questions.mjs";

let currentCategoryIndex = 0;
let currentOptionIndex = 0;

const selections = {};

const questionText = document.getElementById('question-text');
const answerOptions = document.getElementById('answer-options');
const nextButton = document.getElementById('next-button');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');

function initQuiz() {
    totalQuestionsSpan.textContent = getTotalOptions();
    showNextOption();
}

function getTotalOptions() {
    return questions.reduce((sum, category) => sum + category.options.length, 0);
}

function showNextOption() {
    const category = questions[currentCategoryIndex];
    const option = category.options[currentOptionIndex];

    questionText.textContent = option;
    answerOptions.innerHTML = '';

    ['Yes', 'No'].forEach(answer => {
        const btn = document.createElement('button');
        btn.textContent = answer;
        btn.classList.add('answer-button');
        btn.addEventListener('click', () => handleAnswer(answer === 'Yes'));
        answerOptions.appendChild(btn);
    });

    const currentNumber = getCurrentQuestionNumber();
    currentQuestionSpan.textContent = currentNumber;
}

function getCurrentQuestionNumber() {
    let count = 0;
    for (let num = 0; num < currentCategoryIndex; num++) {
        count += questions[num].options.length;
    }
    return count + currentOptionIndex + 1;
}

function handleAnswer(isYes) {
    const category = questions[currentCategoryIndex];
    const key = category.category;

    if (!selections[key]) {
        selections[key] = 0;
    }

    if (isYes) {
        selections[key]++;
    }

    currentOptionIndex++;

    if (currentOptionIndex >= category.options.length) {
        currentCategoryIndex++;
        currentOptionIndex = 0;
    }

    if (currentCategoryIndex < questions.length) {
        showNextOption();
    } else {
        storeResultsAndRedirect();
    }
}

function storeResultsAndRedirect() {
    localStorage.setItem('quizResults', JSON.stringify(selections));
    window.location.href = 'results.html';
}

document.addEventListener('DOMContentLoaded', initQuiz);
