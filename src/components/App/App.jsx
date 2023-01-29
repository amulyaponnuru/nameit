import React from 'react';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import Header from './../Header/Header';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    state = {
        headerText: "Name It!",
        headerExpanded: true,
        suggestedNames: []
    };

    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : []
        });
    }

    render() {
        return (
            <div>
                <Header headTitle={this.state.headerText} headerExpanded={this.state.headerExpanded} />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
}

/**
 * Class based component
 */
// class App extends React.Component {
//     render () {
//         return <h1>This is my class based component!</h1>
//     }
// }

/**
 * Functional component
 */
// function App () {
//     return <h1>This is my functional component!</h1>
// }

export default App;