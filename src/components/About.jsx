import React, { Component } from "react";
import "../scss/styles.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="container" style={{ backgroundcolor: "#303030" }}>
        <div className="next">
          <a href="/#/Projects">
            {" "}
            <img
              src="img/direct.png"
              alt="right"
              style={{ borderradius: "50%", height: 50, width: 50 }}
            />
          </a>
        </div>
        <div className="back">
          <a href="/">
            {" "}
            <img
              src="img/direct.png"
              alt="left"
              style={{ borderradius: "50%", height: 50, width: 50, }}
            />
          </a>
        </div>
        <h1 style={{ fontweight: "bold", textAlign: "center" }}>
  About
</h1>

        <div className="row" style={{ height: 450 }}>
          <div className="col-md-4">
            <img
              src="img/front.png"
              alt="font"
              style={{ height: 100, width: 100 }}
              id="front"
            />
            <h3>Front-end</h3>
              <p>HTML(5)</p>
              <p>CSS(3)</p>
              <p>Javascript </p>
              <p>Angular</p>
              <p>Bootstrap </p>
            
          </div>
          <hr className="clearfix w-100 d-md-none" />
          <div className="col-md-4">
            <img
              src="img/back1.jpg"
              alt="back"
              style={{ height: 150, width: 150 }}
              id="back"
            />
            <h3>Back-end</h3>
              <p>Flask| Django | Python</p>
              <p>PosgreSQL</p>
          </div>
          <div className="col-md-4">
            <img
              src="img/tools.jpg"
              alt="tools"
              style={{ height: 100, width: 100 }}
              id="tools"
            />
            <h3>Tools</h3>
              <p>Computer:Linux and Windows</p>
              <p>Text Editor:Visual Studio Code</p>
              <p>Github</p>
              <p>Heroku</p>
              <p>Web Browser:Chrome and Firefox</p>
          </div>
        </div>
        <h1
          style={{ fontWeight: "bold", textAlign: "center", paddingTop: 10 }}
          id="skills"
        >
          Skills.
        </h1>
        <small style={{ fontWeight: "bold", textAlign: "center" }}>
          Areas of specialisation
        </small>
        <br />
        <div className="row">
          <div className="col-md-3">
            <div className="card card-1" style={{ height: 300 }}>
              <img
                src="img/html.png"
                alt="Html"
                style={{ height: 200 }}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="card card-2" style={{ height: 300 }}>
              <img src="img/css2.png" alt="Css" style={{ height: 200 }}/>
            </div>
          </div>
          <div className="col-md-3" style={{ paddingBottom: 80 }}>
            <div className="card card-3" style={{ height: 300 }}>
              <img src="img/js2.png" alt="Js"  />
            </div>
          </div>
          <div className="col-md-3" style={{ paddingBottom: 80 }}>
            <div className="card card-4" style={{ height: 300 }}>
              <img
                src="img/python2.jpg"
                alt="Python"
                style={{ height: 200 }}
              />
            </div>
          </div>
          <div className="col-md-3" style={{ paddingBottom: 80 }}>
            <div className="card card-5" style={{ height: 300 }}>
              <img
                src="img/flask2.png"
                alt="Flask"
                style={{ height: 200 }}
              />
            </div>
          </div>
          <div className="col-md-3" style={{ paddingBottom: 80 }}>
            <div className="card card-6" style={{ height: 300 }}>
              <img
                src="img/django4.png"
                alt="Django"
                style={{ height: 200 }}
              />
            </div>
          </div>
          <div className="col-md-3" style={{ paddingBottom: 80 }}>
            <div className="card card-7" style={{ height: 300 }}>
              <img
                src="img/jquery.png"
                alt="Jquery"
                style={{ height: 200 }}
              />
            </div>
          </div>
          <div className="col-md-3" style={{ paddingBottom: 80 }}>
            <div className="card card-8" style={{ height: 300 }}>
              <img
                src="img/angular2.jpg"
                alt="Angular"
                style={{ height: 200 }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}