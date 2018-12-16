'use strict';

var fullName = 'Jen Mead';
var firstName = void 0;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log('firstName; ', firstName);
};

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};
console.log(getFirstName(fullName));

var square = function square(x) {
    return x * x;
};

console.log(square(4));

var squareArrow = function squareArrow(x) {
    return x * x;
};
console.log(squareArrow(7));
