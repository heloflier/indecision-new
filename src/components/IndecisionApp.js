import React from "react";

import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json)

            if (options) {
                this.setState(() => ({ options }));
        }
        }
        catch (e) {
            // do nothing
        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        if ( prevState.options.length !== this.state.options.length ) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
            console.log('saving data')
        }
    }

    componentWillUnmount() {
        console.log('component will unmount')
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
        console.log(this.state.options)
    }

    handlePick() {
        const randomOptionsIndex = Math.floor(Math.random() * this.state.options.length);
        const randomOption = this.state.options[randomOptionsIndex];
        alert (`You should do this: ${randomOption}`)
    }

    handleAddOption(option) {
        if (!option) {
            return "Enter valid value to add";
        }
        else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists";
        }

        this.setState((prevState) => ({ 
            options: prevState.options.concat(option) 
        }));
    }
    
    render() {
        const subtitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0 } 
                    handlePick={this.handlePick}
                />
                <Options    
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
};