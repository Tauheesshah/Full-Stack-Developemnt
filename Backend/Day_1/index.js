const sum = (a, b) => {
    return a + b;
};

const sub = (a, b) => {
    return a - b;
};

const mul = (a, b) => {
    return a * b;
};

const div = (a, b) => {
    if (b === 0) {
        return 
    }
    return a / b;
};

const mod = (a, b) => {
    return a % b;
};

const expo = (a, b) => {
    return a ** b;
};

const isValidNumber = (num) => {
    return typeof num === "number" && !isNaN(num);
};

module.exports = {
    sum,sub,mul,div,mod,expo,isValidNumber
};