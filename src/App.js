import "./App.css";
import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
          <div id="colorlib-main">
            <About />
            <Projects />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
