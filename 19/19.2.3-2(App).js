import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import loadable from "@loadable/component";
const SplitMe = loadable(() => import("./19.2.1-1(SplitMe)"), {
  fallback: <div>loading....</div>,
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React!
        </p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
