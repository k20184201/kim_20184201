import { Route } from "react-dom";
import About from "./13.2.3-2(About)";
import Home from "./13.2.3-1(Home)";

const App = () => {
  return (
    <div>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;
