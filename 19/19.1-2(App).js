import logo from "./logo.svg";
import "./App.css";
import notify from "./19.1-1(notify)";

function App() {
  const onClick = () => {
    notify();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React!</p>
      </header>
    </div>
  );
}

export default App;
