const pi = 3.14;
// let radius = 3;
let area = 0;

function circleArea(radius) {
    const area = radius * radius * pi;
    return area
}

area = circleArea(3);

console.log("Area is: ", area);

// radius = 4;
area = circleArea(4);

console.log("Area is: ", area);