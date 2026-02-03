//write a js program that create a calculator function should return an object that has four method sum divison pro sub sum(a,b)noc
const calculators = () => {
    return {
        sum: (a, b) => a + b,
        subt: (a, b) => a - b,
        mult: (a, b) => a * b,
        div: (a, b) => a / b
    };
};

const calcs = calculators();

console.log(calcs.sum(2, 1));
console.log(calcs.subt(2, 1));
console.log(calcs.mult(2, 1));
console.log(calcs.div(2, 1));
