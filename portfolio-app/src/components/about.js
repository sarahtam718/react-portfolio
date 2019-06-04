import React from "react";
import Logo from "./images/full-green-dot-logo.png";

const About = () => (
  <div className="p-4">
    <div
      className="jumbotron rounded shadow"
      style={{
        background: "#849974",
        color: "white",
        paddingTop: 50,
        paddingBottom: 50
      }}
    >
      <div className="container">
        <h1 className="display-4">Welcome!</h1>
        <h3>About Me</h3>
        <p className="lead">
          Full Stack Web Developer educated at Northwestern University in Full
          Stack Web Development. Specializes in React.js, JavaScript, and
          MongoDB.
        </p>
        <p className="lead">
          Passionate about seeing all the pieces come together to create
          something beautiful and functional. Looking for a great team to join
          as a full-time web developer.
        </p>
        <div className="row">
          <div className="col">
            <a
              href="https://github.com/sarahtam718"
              className="btn"
              style={{
                backgroundColor: "#E9DCC3",
                color: "#613A43"
              }}
            >
              {" "}
              Github
            </a>
          </div>
          <div className="col-5">
            <a
              href="https://www.linkedin.com/in/sarah-tam"
              className="btn"
              style={{
                backgroundColor: "#E9DCC3",
                color: "#613A43"
              }}
            >
              {" "}
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
