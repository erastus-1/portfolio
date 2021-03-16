import React, { Component } from "react";
import "../scss/styles.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div
        className="footer-copyright text-center py-3"
        style={{ color: "black" }}
      >
        © 2021 Copyright:
        <i>Ruiru Erastus</i>
      </div>
    );
  }
}
