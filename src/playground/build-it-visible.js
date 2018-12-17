// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log('build it visible is running');

"use strict";

const appRoot = document.getElementById('app');

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    renderApp();
}

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                { visibility ?  "Hide Details" : "Show Details" }
            </button>
            { visibility && (
                <div>
                    <p>Some Details</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot)
};

renderApp();
