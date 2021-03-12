import './App.css';
import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
          <div id="colorlib-main">
            {/* <About /> */}
            <Footer />
            {/* <Projects /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;