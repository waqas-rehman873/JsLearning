// forEach
const arr = [1, 2, 4, 6, 7];

console.log(".........");
Array.prototype.customForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

arr.customForEach((num, index) => {
    console.log(`Element at index ${index} is ${num}`);
});
console.log(".........");

Array.prototype.customMap = function (callback) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(callback(this[i], i, this));
    }
    return output;
};

const map1 = arr.customMap((x) => x * 2);
console.log(map1);
console.log("...return new array ......");
const numbers = [20, 40, 17, 99, 59, 77];
Array.prototype.filteredNumbers = function (callback) {
    const newOutput = [];
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index])) {
            newOutput.push(this[index]);
        }
    }
    return newOutput;
};
const filteredNumbers = numbers.filteredNumbers(function (number) {
    return number > 20;
});
console.log(filteredNumbers);
console.log("......");
Array.prototype.findNumbers = function (callback) {
    const newOutput = [];
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index])) {
            newOutput.push(this[index]);
            break;
        } else {
            return;
        }
    }
    return newOutput;
};
const findNumbers = numbers.findNumbers(function (number) {
    return number > 200;
});
console.log(findNumbers);
