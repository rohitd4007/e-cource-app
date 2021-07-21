import "./App.css";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import account from "./Components/Account";
import dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={account} />
        <Route path="/dash-board" component={dashboard} />
      </Router>
    </div>
  );
}

export default App;
