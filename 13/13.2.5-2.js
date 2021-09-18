import { Route, Link } from "react-dom";
import About from "./13.2.3-2(About)";
import Home from "./13.2.3-1(Home)";

const App = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to= "/">홈</Link>
            </li>
            <li>
                <Link to= "/about"> 소개</Link>
            </li>
        </ul>
        <hr/>
        <Route path="/" component={Home} exact={true} />
       <Route path="/about" component={About} />

    </div>
  );
};

export default App;
