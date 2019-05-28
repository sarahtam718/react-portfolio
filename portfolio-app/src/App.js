import React, { Component } from "react";
import "./App.css";
import About from "./components/about/about.js";
import Footer from "./components/footer.js";
import PortCard from "./components/portfolio/portfolio-card";
// import List from "./components/list.js";
import cardData from "./components/portfolio/cardData.js";

document.body.style = "background-color: #9fd1b8;";

class App extends Component {
  state = {};

  render() {
    console.log("rendered");
    return (
      <div className="container">
        <About />
        <div
          id="portfolio-container"
          style={{ marginTop: 20, marginBottom: 70 }}
        >
          <h1 className="text-center">[ Portfolio ]</h1>
          <div id="card-container" className="col">
            {cardData.map(project => (
              <PortCard obj={project} key={project.id} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
