import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="container" style={{ marginBottom: 20 }}>
        <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
          Projects Worked on
        </h1>
        <div
          className="row"
          style={{
            marginTop: 20,
            paddingTop: 10,
            backgroundColor: "whitesmoke",
            height: 500,
          }}
        >
          <div className="col-md-6">
            <img
              src="images/project2.png"
              alt=""
              style={{ height: 400, width: 550, borderRadius: 20 }}
            />
          </div>
          <div className="col-md-6">
            <div className="details details-ftm">
              <h2 style={{ paddingLeft: 20 }}>Github Search</h2>
              <p
                className="platform"
                style={{ marginLeft: 10, fontSize: "x-large" }}
              >
                Web
              </p>
              <p className="icons" style={{ marginLeft: 10 }}>
                <i className="fas fa-tablet" style={{ fontSize: 48 }} />
                <i
                  className="fas fa-laptop"
                  style={{ fontSize: 48, marginLeft: 10 }}
                />
                <i
                  className="fas fa-mobile"
                  style={{ fontSize: 48, marginLeft: 10 }}
                />
              </p>
              <p style={{ marginLeft: 10, fontSize: "x-large" }}>
                Github Search is an application built using Angular to search
                for the profile of different github users.
              </p>
              <a
                className="btn btn-primary"
                target="_blank"
                href="https://vigorous-mahavira-083e3a.netlify.app/"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-md-6">
            <div className="details details-ftm">
              <h2 style={{ paddingLeft: 20 }}>Mtaafix</h2>
              <p
                className="platform"
                style={{ marginLeft: 10, fontSize: "x-large" }}
              >
                Web
              </p>
              <p className="icons" style={{ marginLeft: 10 }}>
                <i className="fas fa-tablet" style={{ fontSize: 48 }} />
                <i
                  className="fas fa-laptop"
                  style={{ fontSize: 48, marginLeft: 10 }}
                />
                <i
                  className="fas fa-mobile"
                  style={{ fontSize: 48, marginLeft: 10 }}
                />
              </p>
              <p style={{ marginLeft: 10, fontSize: "x-large" }}>
                This is a simple application about neighbour hood a user can
                join a neighbourhood and see businesses on that neightbour hood
                their posta and also the numba of people residing there.
              </p>
              <a
                className="btn btn-primary"
                target="_blank"
                href="https://mtaafix.herokuapp.com"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="col-md-6">
            <img
              src="images/project1.png"
              alt=""
              style={{
                height: 400,
                width: 550,
                paddingTop: 10,
                borderRadius: 20,
              }}
            />
          </div>
          <div
            className="row"
            style={{ marginTop: 20, backgroundColor: "whitesmoke" }}
          >
            <div className="col-md-6">
              <img
                src="images/project3.png"
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
                  style={{ marginLeft: 10, fontSize: "x-large" }}
                >
                  Web
                </p>
                <p className="icons" style={{ marginLeft: 10 }}>
                  <i className="fas fa-tablet" style={{ fontSize: 48 }} />
                  <i
                    className="fas fa-laptop"
                    style={{ fontSize: 48, marginLeft: 10 }}
                  />
                  <i
                    className="fas fa-mobile"
                    style={{ fontSize: 48, marginLeft: 10 }}
                  />
                </p>
                <p style={{ marginLeft: 10, fontSize: "x-large" }}>
                  Instagram clone where one can post, comment on a post, change
                  their profile and also follow people.
                </p>
                <a
                  className="btn btn-primary"
                  target="_blank"
                  href="https://gramapp-ruiru.herokuapp.com"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-md-6">
              <div className="details details-ftm">
                <h2 style={{ paddingLeft: 20 }}>Pizzeria</h2>
                <p
                  className="platform"
                  style={{ marginLeft: 10, fontSize: "x-large" }}
                >
                  Web
                </p>
                <p className="icons" style={{ marginLeft: 10 }}>
                  <i className="fas fa-tablet" style={{ fontSize: 48 }} />
                  <i
                    className="fas fa-laptop"
                    style={{ fontSize: 48, marginLeft: 10 }}
                  />
                  <i
                    className="fas fa-mobile"
                    style={{ fontSize: 48, marginLeft: 10 }}
                  />
                </p>
                <p style={{ marginLeft: 10, fontSize: "x-large" }}>
                  This projects takes a user's order according to their
                  preference and get the total bill plus a notification that has
                  the users credentials.
                </p>
                <a
                  className="btn btn-primary"
                  target="_blank"
                  href="https://erastus-1.github.io/Pizzeria/"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
