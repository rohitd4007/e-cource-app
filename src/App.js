import "./App.css";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import account from "./Components/Account";
import dashboard from "./Components/Dashboard";
import ReactGA from "react-ga";

ReactGA.initialize(process.env.REACT_APP_G_ANALYTICS);

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

function App() {
  return (
    <div className="App">
      <Router onUpdate={logPageView} basename={process.env.PUBLIC_URL}>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={account} />
        <Route
          path={process.env.PUBLIC_URL + "/dash-board"}
          component={dashboard}
        />
        {console.log(process.env)}
      </Router>
    </div>
  );
}

export default App;
