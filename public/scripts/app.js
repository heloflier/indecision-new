"use strict";

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log('app.js is running');

// JSX

"use strict";

var appObject = {
    title: "Indecision App",
    subtitle: "an app for the undecided",
    options: ['One', 'Two']
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        appObject.title
    ),
    appObject.subtitle && React.createElement(
        "p",
        null,
        appObject.subtitle
    ),
    React.createElement(
        "p",
        null,
        appObject.options && appObject.options.length > 0 ? "Here are your options" : "No Options"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item One"
        ),
        React.createElement(
            "li",
            null,
            "Item Two"
        )
    )
);

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};
var subtractOne = function subtractOne() {
    count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: subtractOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "reset"
        )
    );

    var appRoot = document.getElementById('app');

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
