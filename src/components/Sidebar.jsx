import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4 mr-auto my-md-4 my-0 mt-4 mb-1">
            <p>
              <a
                style={{
                  borderRadius: 50,
                  fontSize: "large",
                  fontWeight: "bold",
                }}
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
          <div className="col-md-4 col-lg-4 mx-auto my-md-4 my-0 mt-4 mb-1">
            <div className="title" style={{ fontSize: "x-large" }}>
              <img
                src="imag/ruiru.jpg"
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
          <hr className="clearfix w-100 d-md-none" />
          <div className="col-md-4 col-lg-4 text-center mx-auto my-4">
            <h5
              className="font-weight-bold text-uppercase mb-4"
              style={{ color: "blue" }}
            >
              Social Media
            </h5>
            <a
              href="https://web.facebook.com/Erass N Stars"
              type="button"
              style={{ paddingRight: 15, color: "black" }}
              className="btn-floating btn-fb"
            >
              <i className="fab fa-facebook-f" style={{ fontSize: 48 }} />
            </a>
            <a
              href="https://instagram.com/eras_n_stars"
              type="button"
              style={{ paddingRight: 15, color: "black" }}
              className="btn-floating btn-istagram"
            >
              <i className="fab fa-instagram" style={{ fontSize: 48 }} />
            </a>
            <a
              href="https://github.com/erastus-1"
              type="button"
              style={{ paddingRight: 15, color: "black" }}
              className="btn-floating btn-github"
            >
              <i className="fab fa-github-square" style={{ fontSize: 48 }} />
            </a>
            <a href="https://www.linkedin.com/feed/Erastus Kariuki">
              <i
                className="fab fa-linkedin"
                style={{ color: "black", fontSize: 48 }}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
