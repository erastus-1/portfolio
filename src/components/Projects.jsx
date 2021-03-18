import React, { Component } from "react";
import "../scss/styles.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ marginBottom: 20, backgroundcolor: "#303030" }}
      >
        <div className="next">
          <a href="/#/Projects">
            <img
              src="img/direct.png"
              alt="right"
              style={{ borderradius: "50%", height: 50, width: 50 }}
            />
          </a>
        </div>
        <div className="back">
          <a href="/#/About">
            <img
              src="img/direct.png"
              alt="left"
              style={{ borderradius: "50%", height: 50, width: 50, backgroundcolor:"black," }}
            />
          </a>
        </div>
        <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
          My Projects
        </h1>
        <div
          className="row"
          style={{
            marginTop: 20,
            paddingTop: 10,
            height: 500,
          }}
        >
          <div className="col-md-6">
            <img
              src="img/project2.png"
              alt=""
              style={{ height: 400, width: 550, borderRadius: 20 }}
            />
          </div>
          <div className="col-md-6">
            <div className="details details-ftm">
              <h2 style={{ paddingLeft: 20 }}>Github Search</h2>
              <p
                className="platform"
                style={{ marginLeft: 10, fontSize: "large" }}
              >
                Web
              </p>
              <img
                src="img/icons.webp"
                alt=""
                style={{
                  height: 100,
                  width: 150,
                  paddingTop: 10,
                  borderRadius: 20,
                }}
                  />
              <p style={{ marginLeft: 10, fontSize: "large" }}>
                Github Search is an application built using Angular to search
                for the profile of different github users.
              </p>
              <button
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank"
                href="https://vigorous-mahavira-083e3a.netlify.app/" style={{ marginLeft: 10 }}
              >
                Visit Website
              </button>
            </div>
          </div>
        </div>
        <div className="row" style={{
            marginTop: 20,
            paddingTop: 10,
            height: 500,
          }}>
          <div className="col-md-6">
            <div className="details details-ftm">
              <h2 style={{ paddingLeft: 20 }}>Mtaafix</h2>
              <p
                className="platform"
                style={{ marginLeft: 10, fontSize: "large" }}
              >
                Web
              </p>
              <img
                src="img/icons.webp"
                alt=""
                style={{
                  height: 100,
                  width: 150,
                  paddingTop: 10,
                  borderRadius: 20,
                  marginLeft: 10,
                }}
                  />
              <p style={{ marginLeft: 10, fontSize: "large" }}>
                This is a simple application about neighbour hood a user can
                join a neighbourhood and see businesses on that neightbour hood
                their posta and also the numba of people residing there.
              </p>
              <button
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank"
                href="https://mtaafix.herokuapp.com" style={{ marginLeft: 10 }}
              >
                Visit Website
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="img/project1.png"
              alt=""
              style={{
                height: 400,
                width: 550,
                paddingTop: 10,
                borderRadius: 20,
              }}
            />
             </div>
          </div>
          <div className="row" style={{
            marginTop: 20,
            paddingTop: 10,
            height: 500,
          }}>
            <div className="col-md-6">
              <img
                src="img/project3.png"
                alt=""
                style={{
                  height: 400,
                  width: 550,
                  paddingTop: 10,
                  borderRadius: 20,
                }}
              />
            </div>
            <div className="col-md-6">
              <div className="details details-ftm">
                <h2 style={{ paddingLeft: 20 }}>Gram-App</h2>
                <p
                  className="platform"
                  style={{ marginLeft: 10, fontSize: "large" }}
                >
                  Web
                </p>
                <img
                src="img/icons.webp"
                alt=""
                style={{
                  height: 100,
                  width: 150,
                  paddingTop: 10,
                  borderRadius: 20,
                  marginLeft: 10,
                }}
                  />
                <p style={{ marginLeft: 10, fontSize: "large" }}>
                  Instagram clone where one can post, comment on a post, change
                  their profile and also follow people.
                </p>
                <button
                  className="btn btn-primary"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://gramapp-ruiru.herokuapp.com" style={{ marginLeft: 10 }}
                >
                  Visit Website
                </button>
              </div>
            </div>
          </div>
          <div className="row" style={{
            marginTop: 20,
            paddingTop: 10,
            height: 500,
          }}>
            <div className="col-md-6">
              <div className="details details-ftm">
                <h1 style={{ paddingLeft: 20 }}>Pizzeria</h1>
                <p
                  className="platform"
                  style={{ marginLeft: 10, fontSize: "large" }}
                >
                  Web
                </p>
                <img
                src="img/icons.webp"
                alt=""
                style={{
                  height: 100,
                  width: 150,
                  paddingTop: 10,
                  borderRadius: 20,
                  marginLeft: 10,
                }}
                  />
                <p style={{ marginLeft: 10, fontSize: "large" }}>
                  This projects takes a user's order according to their
                  preference and get the total bill plus a notification that has
                  the users credentials.
               </p>
                <button
                  className="btn btn-primary"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://erastus-1.github.io/Pizzeria/" style={{ marginLeft: 10 }}
                >
                  Visit Website
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="img/project5.png"
                alt=""
                style={{
                  height: 400,
                  width: 550,
                  paddingTop: 10,
                  borderRadius: 20,
                }}
              />
            </div>
          </div>
        </div>
    );
  }
}
