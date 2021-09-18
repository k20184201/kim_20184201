import { Route, Link, Switch } from "react-router-dom";
import About from "./13.2.3-2(About)";
import Home from "./13.2.3-1(Home)";
import Profiles from "./13.5-1(Profiles)";
import HistorySample from "./13.6.1-1(HistorySample)";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about"> 소개</Link>
        </li>
        <li>
          <Link to="/profils"> 프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />

      <Route path="/" component={Home} exact={true} />
      <Route path={["/about", "/info"]} component={About} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/history" component={HistorySample} />
      <Route 
      render={({location})=>(
          <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
      )}
      />
    </Switch>
    </div>
  );
};

export default App;
