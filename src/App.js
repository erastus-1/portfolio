import "./App.css";
import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div id="colorlib-page">
        <div id="container-wrap">
        <Switch>
            <Route exact path="/" component={Sidebar} />
            <Route exact path="/" component={Footer} />
            <Route exact={true} path="/About" component={About} />
            <Route exact={true} path="/Projects" component={Projects} />
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
