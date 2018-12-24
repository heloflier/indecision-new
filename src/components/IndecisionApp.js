import React from "react";

import AddOption from "./AddOption";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
        console.log(this.state.options)
    };

    handlePick = () => {
        const randomOptionsIndex = Math.floor(Math.random() * this.state.options.length);
        const randomOption = this.state.options[randomOptionsIndex];
        this.setState(() => ({
            selectedOption: randomOption
        }))
    };

    handleAddOption = (option) => {
        if (!option) {
            return "Enter valid value to add";
        }
        else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists";
        }

        this.setState((prevState) => ({ 
            options: prevState.options.concat(option) 
        }));
    };

    handleCloseModal = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    };
    
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
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal}
                />
            </div>
        )
    }
};