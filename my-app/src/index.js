import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import NameTag from "./NameTag";

var renderNameTag = name => <NameTag key={name} name={name} />;

class App extends Component {
    state = { names: ["colin", "sylys", "hannah", "burke", "murphy", "rose"] };
    render() {
        var NameTagElements = this.state.names.map(renderNameTag);
        return (
            <div className="App">
                <h1>Name Tag Generator</h1>
                {NameTagElements}
            </div>
        );
    }
};

var rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);