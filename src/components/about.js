import React from "react";

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
        <ul>
          <li>
            Full Stack Web Developer educated at Northwestern University in Full
            Stack Web Development.
          </li>
          <li> Specializes in React.js, JavaScript, MySQL, and MongoDB.</li>
          <li>
            {" "}
            Looking for a great team to join as a full-time web developer.
          </li>
        </ul>
        <p className="lead">
          Passionate about seeing all the pieces come together to create
          something beautiful and functional.
        </p>
      </div>
    </div>
  </div>
);

export default About;
