// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log('app.js is running');

"use strict";

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
};

const onFormSubmit = (event) => {
    event.preventDefault();

    console.log('event object: ', event)
    const option = event.target.elements.option.value;

    if (option) {
        app.options.push(option);
        console.log('array', app.options)
        event.target.elements.option.value = "";
        renderApp();
    };
};

const onRemoveAll = () => {
    app.options = [];
    renderApp();
};

const onMakeDecision = () => {
    const randomArrayIndex = Math.floor(Math.random() * app.options.length);
    const selectedOption = app.options[randomArrayIndex];
    alert (selectedOption);
    // return <p key={app.options[randomArrayIndex]}>{app.options[randomArrayIndex]}</p>
};

const appRoot = document.getElementById("app");

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? "Here are your options" : "No Options"}</p>
            <button disabled={!app.options.length} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                { 
                    app.options.map((enteredOption) => <li key={enteredOption}>Item: {enteredOption}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
