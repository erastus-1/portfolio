import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-4 col-lg-4 mr-auto my-md-4 my-0 mt-4 mb-1">
            <img
              src="images/front.png"
              alt="image"
              style={{ height: 100, width: 100 }}
              id="front"
            />
            <h3>Front-end</h3>
            <ul id="front-ul" style={{ fontSize: "x-large" }}>
              <li>HTML(5)</li>
              <li>CSS(3)</li>
              <li>Javascript</li>
              <li>Angular</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <hr className="clearfix w-100 d-md-none" />
          <div className="col-md-4 col-lg-4 mx-auto my-md-4 my-0 mt-4 mb-1">
            <img
              src="images/back1.jpg"
              alt="image"
              style={{ height: 150, width: 150 }}
              id="back"
            />
            <h3>Back-end</h3>
            <ul id="back-ul" style={{ fontSize: "x-large" }}>
              <li>Flask| Django | Python</li>
              <li>PosgreSQL</li>
            </ul>
          </div>
          <div className="col-md-4 col-lg-3 text-center mx-auto my-4">
            <img
              src="images/tools.jpg"
              alt="image"
              style={{ height: 100, width: 100 }}
              id="tools"
            />
            <h3>Tools</h3>
            <ul id="tools-ul" style={{ fontSize: "x-large" }}>
              <li>Computer:Linux and Windows</li>
              <li>Text Editor:Visual Studio Code</li>
              <li>Github</li>
              <li>Heroku</li>
              <li>Web Browser:Chrome and Firefox</li>
            </ul>
          </div>
        </div>
        <h1 style={{ fontWeight: "bold", textAlign: "center", paddingTop: 10 }}>
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
                src="images/html.png"
                alt="Html"
                style={{ maxWidth: "20rem", height: "max-content" }}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="card card-2" style={{ height: 300 }}>
              <img src="images/css2.png" alt="Css" />
            </div>
          </div>
          <div className="col-md-3" style={{ paddingBottom: 80 }}>
            <div className="card card-3" style={{ height: 300 }}>
              <img
                src="images/js2.png"
                alt="Js"
                style={{ maxHeight: "100%" }}
              />
            </div>
          </div>
          <div className="col-md-3" style={{ paddingBottom: 80 }}>
            <div className="card card-4" style={{ height: 300 }}>
              <img
                src="images/python2.jpg"
                alt="Python"
                style={{ height: "max-content", width: "max-content" }}
              />
            </div>
          </div>
          <div className="col-md-3" style={{ paddingBottom: 80 }}>
            <div className="card card-5" style={{ height: 300 }}>
              <img
                src="images/flask2.png"
                alt="Flask"
                style={{ height: "max-content", width: "max-content" }}
              />
            </div>
          </div>
          <div className="col-md-3" style={{ paddingBottom: 80 }}>
            <div className="card card-6" style={{ height: 300 }}>
              <img
                src="images/django4.png"
                alt="Django"
                style={{ height: "max-content", width: "max-content" }}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="col-md-3" style={{ paddingBottom: 80 }}>
            <div className="card card-7" style={{ height: 300 }}>
              <img
                src="images/jquery.png"
                alt="Jquery"
                style={{ height: "max-content", width: "max-content" }}
              />
            </div>
          </div>
          <div className="col-md-3" style={{ paddingBottom: 80 }}>
            <div className="card card-8" style={{ height: 300 }}>
              <img
                src="images/angular2.jpg"
                alt="Angular"
                style={{ height: "max-content", maxWidth: "21rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
