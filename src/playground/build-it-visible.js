// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log('build it visible is running');

"use strict";

class ToggleVisibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return { 
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>{ this.state.visibility ? "Hide Details" : "Show Details" }</button>
            { this.state.visibility && <p>These are some details</p>}
        </div>
        )
        
    }
}

ReactDOM.render(<ToggleVisibility />, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     renderApp();
// }

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 { visibility ?  "Hide Details" : "Show Details" }
//             </button>
//             { visibility && (
//                 <div>
//                     <p>Some Details</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(template, appRoot)
// };

// renderApp();
