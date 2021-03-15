import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => (
  <div id="background">
    <div className="navigation">
      <Navbar />
    </div>
    <div className="mainContainer">
      <Sidebar /> 
      </div>
  </div>
);
export default Home;