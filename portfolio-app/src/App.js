import React, { Component } from "react";
import "./App.css";
import About from "./components/about.js";
import Footer from "./components/footer.js";
import PortCard from "./components/portfolio/portfolio-card";
import cardData from "./components/portfolio/cardData.json";
import SmallLogo from "./components/images/small-green-dot-logo.png";

document.body.style = "background-color: #613A43;";

class App extends Component {
  state = {};

  render() {
    console.log("rendered");
    return (
      <div>
        <nav
          className="navbar navbar-light bg-light shadow"
          style={{ backgroundColor: "white", height: "2.5rem" }}
        >
          <a className="navbar-brand" href="https://github.com/sarahtam718">
            <img
              src={SmallLogo}
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />{" "}
            Sarah Tam
          </a>
          full stack web developer
        </nav>
        <div className="container">
          <div className="d-flex flex-wrap flex-row justify-content-center">
            <About />
            {cardData.map(project => (
              <PortCard obj={project} key={project.id} />
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
