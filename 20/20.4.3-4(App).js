import { Route } from "react-router-dom";
import Menu from "./components/20.2.1-5(Menu)";
import RedPage from "./pages/20.2.2-1(RedPage)";
import BluePage from "./pages/20.2.2-2(BluePage)";
import UsersPage from "./pages/20.4.2-3(UsersPage)";

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
      <Route path="/users" component={UsersPage} />
    </div>
  );
};
export default App;
