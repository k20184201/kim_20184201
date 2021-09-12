import React, { Component } from "react";
import logo from "./logo.svg";
import "./9.1-1(App)";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save ro reload
          </p>
          <a
            href="https//reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn react
          </a>
        </header>
      </div>
    );
  }
}

export default App;
