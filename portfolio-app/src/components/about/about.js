import React from "react";

const About = () => (
  <div
    className="about-container card-body d-sm-flex flex-row justify-content-around align-items-center rounded shadow"
    style={{
      border: "1px solid black",
      padding: 20,
      marginTop: 20,
      backgroundColor: "white"
    }}
  >
    <img
      style={{ width: 200, height: 200 }}
      src={require("./St.png")}
      alt="logo"
    />
    <div className="card-body">
      <h5 className="card-title">Hello! My name is Sarah Tam.</h5>
      <p className="card-text">
        Passionate about seeing all the pieces come together to create something
        beautiful and functional. Northwestern Full Stack Boot Camp graduate
        looking for a great team to join as a full-time web developer with
        experience in HTML5, CSS3, JavaScript, JQuery, Bootstrap, Firebase,
        React.js, Express.js, Node.js, MongoDB/Mongoose, MySQL/Sequelize, and
        Handlebars.
      </p>
    </div>
    <img
      style={{ width: 200, height: 200 }}
      src={require("./linkedInPic.jpg")}
      alt="profilepicture"
    />
  </div>
);

export default About;
