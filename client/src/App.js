// Modules
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';  

// Components
import Header from "./components/Header/Header"; 
import Footer from "./components/Footer/Footer";   
import "./App.css"


// Pages
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch"; 
import Logins from "./components/LoginSign/Logins";

function App() {
  return (
    <Router>
      <div> 
      <Header /> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/logins" component={Logins} /> 
          <Route component={NoMatch} />
        </Switch> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
