// babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch

class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${ this.name }!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old. `
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        
        if (!!this.major) {
            description += ` and has a degree in ${this.major}`
        }
        
        return description
    }

}

class Traveler extends Person {
    constructor(name, age, homelocation = "") {
        super(name, age);
        this.homelocation = homelocation;
        let description = super.getDescription();
    }

    getGreeting() {
        let greeting = super.getGreeting();
        console.log(this.homelocation);
        if (!!this.homelocation) {
            greeting += ` I am visiting from ${ this.homelocation }`;
        }
        return greeting;
    }
}

const me = new Traveler("Fabio Aiello", 57, "Torino");
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting())