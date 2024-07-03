// function that will be call in other function is call back functions
// function that is taking a input function or return a fuunc is higher order functions
// function add() {
//     console.log("add");
// }
// //higher order function
// function namea(add) {
//     //callback
//     return add();
// }
// namea(add);
// diameter circumference area
const radius = [2, 3, 4, 1];
// function area(radius) {
//     let a = [];
//     for (let index = 0; index < radius.length; index++) {
//         a.push(Math.PI * radius[index] * radius[index]);
//     }
//     return console.log(a);
// }
// area(radius);
// // const radius = [2, 3, 4, 1];
// function circumference(radius) {
//     let a = [];
//     for (let index = 0; index < radius.length; index++) {
//         a.push(2 * Math.PI * radius[index]);
//     }
//     return console.log(a);
// }
// circumference(radius);
// function diameter(radius) {
//     let a = [];
//     for (let index = 0; index < radius.length; index++) {
//         a.push(2 * radius[index]);
//     }
//     return console.log(a);
// }

const area = function (radius) {
    return Math.PI * radius * radius;
};
const circumference = function (radius) {
    return 2 * Math.PI * radius;
};
const diameter = function (radius) {
    return 2 * radius;
};
function calculate(radius, logic) {
    const element = [];
    for (let index = 0; index < radius.length; index++) {
        element.push(logic(radius[index]));
    }
    return console.log(element);
}
calculate(radius, area);
calculate(radius, circumference);
calculate(radius, diameter);
// console.log(radius.map(area));
