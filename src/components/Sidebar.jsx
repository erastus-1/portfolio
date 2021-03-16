import React, { Component } from "react";
import "../scss/styles.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="container" style={{ backgroundcolor: "#303030" }}>
        <div className="next">
          <a href="/#/about">
            {" "}
            <img
              src="img/direct.png"
              alt="right"
              style={{ borderRadius: "50%", height: 50, width: 50 }}
            />
          </a>
        </div>
        <div className="row" style={{ paddingTop: 60 }}>
          <div className="col-md-6" style={{ paddingTop: 60 }}>
            <h2 style={{ fontStyle: "italic", fontWeight: "bolder" }}>
              {" "}
              <span>
                {" "}
                Hello,meet Erastus Ruiru. <br />I am a frontend/backend software
                developer. <br /> Welcome to my Portfolio!
              </span>
            </h2>
          </div>
          <div className="col-md-6">
            <div className="title" style={{ fontSize: "x-large" }}>
              <img
                src="img/ruiru.jpg"
                alt="Eastus Ruiru"
                style={{ borderRadius: "50%", height: 450, width: 450 }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-10 text-center mx-auto my-6">
            <h5
              className="font-weight-bold text-uppercase mb-4"
              style={{ color: "blue" }}
            >
              Social Media
            </h5>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://web.facebook.com/Erass N Stars"
              type="button"
              style={{ paddingRight: 15, color: "black" }}
              className="btn-floating btn-fb"
            >
              <img
                src="img/face.png"
                alt="Linkedin"
                style={{ borderRadius: "50%", height: 50, width: 50 }}
              />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://instagram.com/eras_n_stars"
              type="button"
              style={{ paddingRight: 15, color: "black" }}
              className="btn-floating btn-istagram"
            >
              <img
                src="img/insta.png"
                alt="Instagram"
                style={{ borderRadius: "50%", height: 50, width: 50 }}
              />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/erastus-1"
              type="button"
              style={{ paddingRight: 15, color: "black" }}
              className="btn-floating btn-github"
            >
              <img
                src="img/git.png"
                alt="Github"
                style={{ borderRadius: "50%", height: 50, width: 50 }}
              />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/feed/Erastus Kariuki"
            >
              <img
                src="img/link.jpg"
                alt="Linkedin"
                style={{ borderRadius: "50%", height: 50, width: 50 }}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
