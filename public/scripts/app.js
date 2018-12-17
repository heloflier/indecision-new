'use strict';

// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log('build it visible is running');

"use strict";

var appRoot = document.getElementById('app');

var visibility = false;

var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    renderApp();
};

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? "Hide Details" : "Show Details"
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Some Details'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
