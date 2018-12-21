// // babel src/playground/counter-example.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log('app.js is running');

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleSubtractOne = this.handleSubtractOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {count: prevState.count + 1}
        });
        console.log(this.state)
    }
    handleSubtractOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleSubtractOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}




ReactDOM.render(<Counter />, document.getElementById('app'));

// // JSX

// "use strict";

// const appObject = {
//     title: "Indecision App",
//     subtitle: "an app for the undecided",
//     options: ['One', 'Two']
// };

// console.log('App js is running');

// const app = {
//     title: "Indecision App",
//     subtitle: "Put your life in the hands of a computer",
//     options: ['One', 'Two']
// };

// const template = (
//     <div>
//         <h1>{appObject.title}</h1>
//         {appObject.subtitle && <p>{appObject.subtitle}</p>}
//         <p>{(appObject.options && appObject.options.length > 0) ? "Here are your options" : "No Options"}</p>

//         <ol>
//             <li>Item One</li>
//             <li>Item Two</li>
//         </ol>
//     </div>
// );

// const appRoot = document.getElementById('app');

// let count = 0;
// const addOne = () => {
//     count ++;
//     renderCounterApp();
// };
// const subtractOne = () => {
//     count --;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={subtractOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
    
//     const appRoot = document.getElementById('app');

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();