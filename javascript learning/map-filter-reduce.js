const arr = [2, 2, 5, 1];
console.log(arr);
console.log(arr.map(area));
function area(i) {
    return i * 2;
}
console.log(
    arr.map((i) => {
        return i * 3;
    })
);

console.log(
    arr.filter((i) => {
        return i % 2 == !i;
    })
);
console.log(
    arr.reduce((acc, curr) => {
        acc = acc + curr;
        return acc;
    }, 0)
);

//6, 6, 15, 3;
