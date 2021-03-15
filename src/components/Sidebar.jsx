import React, { Component } from "react";

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
        <div className="row">
          <div className="col-md-4">
            <p>
              <a
                style={{
                  borderRadius: 50,
                  fontSize: "large",
                  fontWeight: "bold",
                }}
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/erastus-1/"
                className="btn btn-github"
              >
                {" "}
                See all Projects
              </a>
              <small className="text" style={{ fontSize: "large" }} />
            </p>
            <p>
              <a
                style={{
                  borderRadius: 50,
                  borderWidth: 2,
                  fontSize: "large",
                  fontWeight: "bold",
                }}
                className="btn btn-github"
                href="#contact"
              >
                Get in touch
              </a>
            </p>
            <p>
              <a
                style={{
                  borderRadius: 50,
                  borderWidth: 2,
                  fontSize: "large",
                  fontWeight: "bold",
                }}
                className="btn btn-github"
                href="#skills"
              >
                Skills
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <div className="title" style={{ fontSize: "x-large" }}>
              <img
                src="img/ruiru.jpg"
                alt="Eastus Ruiru"
                style={{ borderRadius: "50%", height: 300, width: 300 }}
              />
            </div>
          </div>
          <div className="col-md-4 col-lg-3 text-center mx-auto my-4">
            <h2 style={{ fontStyle: "italic", fontWeight: "bolder" }}>
              {" "}
              Hello I am erastus a web developer
              <br /> From Nairobi,Kenya
            </h2>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-md-4 col-lg-4 text-center mx-auto my-4">
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
      </div>
    );
  }
}
