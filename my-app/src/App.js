import React, { Component } from "react";
import NameTagList from "./NameTagList";
import UserInput from "./UserInput";

class App extends Component {
  state = {
    names: [],
  };
  addName = name => {
    var newNames = [name, ...this.state.names];
    this.setState({ names: newNames });
  };
  removeName = clickedIndex => {
    var filterCallback = (_, index) => index !== clickedIndex;
    var newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames }); 
  };
  componentDidMount() {
    var savedNamesString = localStorage.getItem('savedNames');
    if(savedNamesString) {
      var savedNames = JSON.parse(savedNamesString);
      this.setState({ names: savedNames });
    }
  }
  componentDidUpdate() {
    var savedNamesString = JSON.stringify(this.state.names);
    localStorage.setItem('savedNames', savedNamesString);
  }
  render() {
    return (
      <div className="App">
        <h1 className="App__title">React Name Tag Generator</h1>
        <UserInput addName={this.addName} />
        <NameTagList names={this.state.names} removeName={this.removeName} />
      </div>
    );
  }
}

export default App;