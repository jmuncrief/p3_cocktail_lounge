// Modules
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Logins from "./components/LoginSign/Logins";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/logins" component={Logins} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
