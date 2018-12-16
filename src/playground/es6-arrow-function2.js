// babel src/playground/es6-arrow-function2.js --out-file=public/scripts/app.js --presets=env,react --watch
console.log('this is es6-arrow-function2');

// const add = function(a, b) {
//     console.log(arguments)
//     return a + b;
// };

const add = (a, b) => {
    // console.log(arguments) //    this does not exist in ES6 anymore
    return a + b;
};

console.log(add(55, 1));

const user = {
    name: "Fabio",
    cities: ["Torino", "Las Vegas", "San Diego"],
    printPlaces() {
        return this.cities.map((city) => this.name + " has lived in " + this.city);
        // this.cities.forEach((city) => {
        //     console.log(this.name + " has lived in " + city);
        // });
    }
};

console.log(user.printPlaces());

const multiplier = {
    numbers: [2, 5, 7],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());