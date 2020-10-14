// Modules
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';  

// Components
import Header from "./components/Header/Header"; 
import Footer from "./components/Footer/Footer";   
import "./App.css"
import Logins from "./components/LoginSign/Logins";


// Pages
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch"; 
import Practice from "./pages/Practice"

function App() {
  return (
    <Router>
      <div> 
      <Header /> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/logins" component={Logins} /> 
          <Route exact path="/practice" component={Practice} />
          <Route component={NoMatch} />
        </Switch> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
