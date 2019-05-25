import React from "react";

const About = () => (
  <div>
    <h1>About</h1>
    <img src={require("./images/linkedInPic.jpg")} alt="hello" />
    <p>
      Passionate about seeing all the pieces come together to create something
      beautiful and functional. Northwestern Full Stack Boot Camp graduate
      looking for a great team to join as a full-time web developer with
      experience in HTML5, CSS3, JavaScript, JQuery, Bootstrap, Firebase,
      React.js, Express.js, Node.js, MongoDB/Mongoose, MySQL/Sequelize, and
      Handlebars.
    </p>
    <br />
    <p>
      <ul>
        <li>Kombucha-maker.</li>
        <li>Taught high school biology.</li>
        <li>Attended Wheaton College.</li>
        <li>San Francisco native.</li>
      </ul>
    </p>
  </div>
);

export default About;
