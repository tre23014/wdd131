import { questions } from './questions.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const results = JSON.parse(localStorage.getItem('quizResults')) || {};

    const mindCount = document.getElementById('mind-count');
    const bodyCount = document.getElementById('body-count');
    const homeCount = document.getElementById('home-count');

    const mindTotal = document.getElementById('mind-total');
    const bodyTotal = document.getElementById('body-total');
    const homeTotal = document.getElementById('home-total');

    const categoryMap = {
        'Mind': 'Mind',
        'Body': 'Body/Health',
        'Home': 'Home'
    };

    for (const [displayName, key] of Object.entries(categoryMap)) {
        const category = questions.find(q => q.category === key);
        const count = results[key] || 0;
        const total = category.options.length;

        if (displayName === 'Mind') {
            mindCount.textContent = count;
            mindTotal.textContent = total;
        } else if (displayName === 'Body') {
            bodyCount.textContent = count;
            bodyTotal.textContent = total;
        } else if (displayName === 'Home') {
            homeCount.textContent = count;
            homeTotal.textContent = total;
        }
    }
});