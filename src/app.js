// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log('app.js is running');


// JSX

"use strict";

const appObject = {
    title: "Indecision App",
    subtitle: "an app for the undecided",
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{appObject.title}</h1>
        {appObject.subtitle && <p>{appObject.subtitle}</p>}
        <p>{(appObject.options && appObject.options.length > 0) ? "Here are your options" : "No Options"}</p>

        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {
    count ++;
    renderCounterApp();
};
const subtractOne = () => {
    count --;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={subtractOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    
    const appRoot = document.getElementById('app');

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();