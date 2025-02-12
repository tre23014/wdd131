//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}</li>` //the html string made from step
}
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
// document.querySelector("#myList").innerHTML = stepsHtml.join(""); // set the innerHTML

const grades = ["A", "B", "A"];
function letterToNumberic(grade) {
    let point = 0
    if (grade === 'A') {
        point = 4;
    }
    else if (grade === 'B') {
        point = 3;
    }
    return point;
}

const gpaPoints = grades.map(letterToNumberic);

console.log("gpa points: " + gpaPoints);

const gpa = gpaPoints.reduce((total, item) => {
    return total + item;
}, 0);

const gpaPoint = gpa / gpaPoints.length;

console.log("GPA: " + gpaPoint)


const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const smallFruits = fruits.filter((fruit) => fruit.length <= 6);

console.log(fruits);
console.log(smallFruits);



const num = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = num.indexOf(luckyNumber);

console.log(luckyIndex);