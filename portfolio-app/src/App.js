import React, { Component } from "react";
import "./App.css";
import About from "./components/about.js";
import Footer from "./components/footer.js";
import PortCard from "./components/portfolio/portfolio-card";
// import List from "./components/list.js";
import cardData from "./components/portfolio/cardData.json";

document.body.style = "background-color: #613A43;";

class App extends Component {
  state = {};

  render() {
    console.log("rendered");
    return (
      <div className="container justify-content-center">
        <div className="d-lg-flex media">
          <About />
          {/* <div
            id="portfolio-container"
            style={{ marginTop: 20, marginBottom: 70 }}
          > */}
          <div className="portfolio d-flex flex-wrap justify-content-center">
            {cardData.map(project => (
              <PortCard obj={project} key={project.id} />
            ))}
          </div>
        </div>
        <div style={{ marginTop: 40 }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
