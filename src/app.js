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

const user = {
    name: "Fabio Aiello",
    age: 57,
    location: "San Diego"
};

function getLocation (location) {
    if (location) {
        return <p>location: {location}</p>;
    };
}

const templateTwo = (
    <div>
        <h1>{ user.name ? user.name : "Anonimous"}</h1>
        {(user.age && user.age > 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);