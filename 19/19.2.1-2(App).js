import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    SplitMe: null,
  };

  handleClick = async () => {
    const loadedModule = await import("./19.2.1-1(SplitMe)");
    this.setStatae({
      SplitMe: loadedModule.default,
    });
  };

  render() {
    const { SplitMe } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handleClick}>Hello React!</p>
          {SplitMe && <SplitMe />}
        </header>
      </div>
    );
  }
}

export default App;
