import "./App.css";
import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/" component={Footer} />
            <Route exact={true} path="/Sidebar" component={Sidebar} />
            <Route exact={true} path="/About" component={About} />
            <Route exact={true} path="/Projects" component={Projects} />
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
