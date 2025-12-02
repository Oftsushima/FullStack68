const a = 5;
const b = 10;

const add = function(x, y) {
    return x + y;
}

const addArrow = (x, y) => {
    return x + y;
}

const subtractArrow = (x, y) => {
    const result = x - y;
    return result;
}

console.log("Addition using function expression: " + add(a, b));
console.log("Addition using arrow function: " + addArrow(a, b));
console.log("Subtraction using arrow function: " + subtractArrow(b, a));



