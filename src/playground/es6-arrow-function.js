// babel src/playground/es6-arrow-function.js --out-file=public/scripts/app.js --presets=env,react --watch

const fullName = 'Jen Mead';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log('firstName; ', firstName);
};

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName(fullName))

const square = (x) => {
    return x * x;
};

console.log(square(4));

const squareArrow = x => x * x; 
console.log(squareArrow(7));
