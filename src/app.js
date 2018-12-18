// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log('app is starting');

class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of a computer";
        const options = ['thing one', 'thing two', 'thing three']

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        alert ('handle Remove All')
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
                <Option />
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
            <li>Option: {this.props.optionText}</li>
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(event) {
        event.preventDefault();
        const createdOption = event.target.elements.option.value.trim();

        if (createdOption) {
            alert(`you have created: ${createdOption}`)
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));