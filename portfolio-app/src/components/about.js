import React from "react";
import Logo from "./images/full-green-dot-logo.png";

const About = () => (
  <div className="container">
    <div
      className="card shadow rounded"
      style={{ width: "18rem", backgroundColor: "#849974", color: "white" }}
    >
      <img className="card-img-top" src={Logo} alt={Logo} />
      <div className="card-body">
        <h5 className="card-title">About Me</h5>
        <p className="card-text">
          Full Stack Web Developer educated at Northwestern University in Full
          Stack Web Development specializing in React.js, JavaScript, and
          MongoDB.
        </p>
        <p className="card-text">
          Passionate about seeing all the pieces come together to create
          something beautiful and functional. Looking for a great team to join
          as a full-time web developer.
        </p>
        <a
          href="https://github.com/sarahtam718"
          className="btn"
          style={{
            marginRight: "2rem",
            backgroundColor: "#E9DCC3",
            color: "#613A43"
          }}
        >
          {" "}
          Github
        </a>
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
    {/* <div
      className="card-body shadow rounded"
      style={{ backgroundColor: "#849974", color: "white" }}
    > */}
    {/* <img src={Logo} style={{ width: "20rem", marginRight: 10 }} alt="logo" /> */}
    {/* <h5 className="card-title">About Me</h5> */}
    {/* <p className="card-text">
        Passionate about seeing all the pieces come together to create something
        beautiful and functional. Northwestern Full Stack Boot Camp graduate
        looking for a great team to join as a full-time web developer with
        experience in HTML5, CSS3, JavaScript, JQuery, Bootstrap, Firebase,
        React.js, Express.js, Node.js, MongoDB/Mongoose, MySQL/Sequelize, and
        Handlebars.
      </p> */}
    {/* </div> */}
  </div>
);

export default About;
