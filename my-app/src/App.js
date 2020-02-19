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
  render() {
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        <UserInput addName={this.addName} />
        <NameTagList names={this.state.names} removeName={this.removeName} />
      </div>
    );
  }
}

export default App;