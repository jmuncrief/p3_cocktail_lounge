// Modules
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//caused the site to not compile in the browser. Unsure as to why as of yet.
import Header from "./components/Header/Header";
import RecipeJumbo from "./components/RecipeJumbo/RecipeJumbo";
import "./App.css"

// Pages
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Members from "./pages/Members";
import PrivateRoute from "./utils/PrivateRoute";

//this router function is from react and is how we navigate between pages through the specified routes
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/logins" component={Login} />
          <PrivateRoute exact path="/members" component={Members} />
          <Route exact path="/recipejumbo" component={RecipeJumbo} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
